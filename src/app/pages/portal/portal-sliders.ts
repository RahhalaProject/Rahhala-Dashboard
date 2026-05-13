import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule, Table } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { extractApiError } from '@/shared/utils/api-error';
import { APP_CONFIG, AppConfig } from '@/core/config/app.config';
import { resolveUploadedImageUrl } from '@/core/utils/profile-picture-url';
import { UserProfileService } from '@/core/services/user-profile.service';
import type { CreateSliderCommand, SliderDto, UpdateSliderCommand } from '@/core/models/slider.model';
import { SliderService } from '@/core/services/slider.service';

@Component({
    selector: 'app-portal-sliders',
    standalone: true,
    styles: [
        `
            .portal-slider-photo-input {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        TableModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        InputTextModule,
        TextareaModule,
        DialogModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule,
    ],
    providers: [MessageService, ConfirmationService],
    template: `
        <p-toast />
        <p-confirmdialog [style]="{ width: '28rem' }" />

        <div class="card">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <div class="text-2xl font-semibold text-surface-900 dark:text-surface-0">
                        {{ 'portal.sliders.title' | translate }}
                    </div>
                </div>
                <div class="flex flex-wrap gap-2">
                    <button
                        type="button"
                        pButton
                        pRipple
                        icon="pi pi-plus"
                        [label]="'portal.sliders.new' | translate"
                        severity="secondary"
                        (click)="openNew()"
                    ></button>
                </div>
            </div>

            <p-table
                #dt
                [value]="sliders()"
                [loading]="loading()"
                [rows]="10"
                [paginator]="true"
                paginatorDropdownAppendTo="body"
                [globalFilterFields]="filterFields"
                responsiveLayout="scroll"
                [rowHover]="true"
                dataKey="id"
                [showCurrentPageReport]="true"
                [rowsPerPageOptions]="[10, 25, 50]"
                [currentPageReportTemplate]="pageReportTemplate"
            >
                <ng-template #caption>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <p-icon-field class="w-full sm:w-80">
                            <p-inputicon class="pi pi-search" />
                            <input
                                pInputText
                                type="text"
                                (input)="onGlobalFilter(dt, $event)"
                                [placeholder]="'portal.sliders.searchPlaceholder' | translate"
                                class="w-full"
                            />
                        </p-icon-field>
                        <button
                            pButton
                            pRipple
                            type="button"
                            icon="pi pi-refresh"
                            [label]="'portal.sliders.refresh' | translate"
                            outlined
                            (click)="loadSliders()"
                            [disabled]="loading()"
                        ></button>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="titleEn" class="white-space-nowrap" style="min-width: 10rem">
                            <span class="flex items-center gap-2">
                                {{ 'portal.sliders.colTitleEn' | translate }}
                                <p-sortIcon field="titleEn" />
                            </span>
                        </th>
                        <th pSortableColumn="titleAr" class="white-space-nowrap" style="min-width: 10rem">
                            <span class="flex items-center gap-2">
                                {{ 'portal.sliders.colTitleAr' | translate }}
                                <p-sortIcon field="titleAr" />
                            </span>
                        </th>
                        <th class="white-space-nowrap" style="min-width: 8rem">{{ 'portal.sliders.colImage' | translate }}</th>
                        <th class="white-space-nowrap" style="min-width: 12rem">{{ 'portal.sliders.colDescriptionEn' | translate }}</th>
                        <th class="white-space-nowrap" style="min-width: 12rem">{{ 'portal.sliders.colDescriptionAr' | translate }}</th>
                        <th class="white-space-nowrap w-20 text-center"></th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.titleEn }}</td>
                        <td>{{ row.titleAr }}</td>
                        <td>
                            @if (rowImageSrc(row)) {
                                <img
                                    [src]="rowImageSrc(row)"
                                    [alt]="row.titleEn || row.title || ''"
                                    style="max-height: 2.5rem; max-width: 6rem; object-fit: cover; border-radius: 4px"
                                    (error)="onImgError($event)"
                                />
                            } @else {
                                <span class="text-muted-color">—</span>
                            }
                        </td>
                        <td class="max-w-20rem white-space-normal">{{ row.descriptionEn }}</td>
                        <td class="max-w-20rem white-space-normal">{{ row.descriptionAr }}</td>
                        <td class="text-center">
                            <button
                                type="button"
                                pButton
                                pRipple
                                icon="pi pi-pencil"
                                [rounded]="true"
                                [outlined]="true"
                                severity="secondary"
                                class="mr-2"
                                (click)="openEdit(row)"
                            ></button>
                            <button
                                type="button"
                                pButton
                                pRipple
                                icon="pi pi-trash"
                                [rounded]="true"
                                [outlined]="true"
                                severity="danger"
                                (click)="confirmDelete($event, row)"
                            ></button>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center py-6 text-surface-500">
                            {{ 'portal.sliders.empty' | translate }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <p-dialog
            [(visible)]="dialogVisible"
            [style]="{ width: '32rem' }"
            [header]="dialogHeader()"
            [modal]="true"
            [closable]="true"
            [draggable]="false"
            [resizable]="false"
        >
            <ng-template #content>
                <div class="flex flex-col gap-4">
                    <div>
                        <label for="sliderTitleEn" class="mb-2 block font-bold">{{ 'portal.sliders.formTitleEn' | translate }}</label>
                        <input id="sliderTitleEn" pInputText [(ngModel)]="form.titleEn" fluid />
                    </div>
                    <div>
                        <label for="sliderTitleAr" class="mb-2 block font-bold">{{ 'portal.sliders.formTitleAr' | translate }}</label>
                        <input id="sliderTitleAr" pInputText [(ngModel)]="form.titleAr" fluid />
                    </div>
                    <div>
                        <label for="sliderDescEn" class="mb-2 block font-bold">{{ 'portal.sliders.formDescriptionEn' | translate }}</label>
                        <textarea id="sliderDescEn" pTextarea [(ngModel)]="form.descriptionEn" rows="3" fluid></textarea>
                    </div>
                    <div>
                        <label for="sliderDescAr" class="mb-2 block font-bold">{{ 'portal.sliders.formDescriptionAr' | translate }}</label>
                        <textarea id="sliderDescAr" pTextarea [(ngModel)]="form.descriptionAr" rows="3" fluid></textarea>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="block font-bold">{{ 'portal.sliders.formImage' | translate }}</span>
                        <div class="flex flex-col items-center gap-2 rounded border border-surface-200 p-4 dark:border-surface-700">
                            @if (sliderImagePreviewUrl()) {
                                <img
                                    [src]="sliderImagePreviewUrl()"
                                    alt=""
                                    class="max-h-24 max-w-full rounded object-contain"
                                    (error)="onPreviewImgError($event)"
                                />
                            } @else {
                                <span class="text-sm text-muted-color">{{ 'portal.sliders.noImagePreview' | translate }}</span>
                            }
                            <input
                                #sliderPhotoInput
                                type="file"
                                accept="image/*"
                                class="portal-slider-photo-input"
                                (change)="onSliderImageSelected($event)"
                            />
                            <p-button
                                type="button"
                                [label]="(form.imageUrl.trim() ? 'portal.sliders.changeImage' : 'portal.sliders.uploadImage') | translate"
                                icon="pi pi-upload"
                                [text]="true"
                                [loading]="uploadingImage()"
                                [disabled]="uploadingImage() || saving()"
                                (onClick)="sliderPhotoInput.click()"
                            />
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button [label]="'portal.sliders.cancel' | translate" icon="pi pi-times" text (onClick)="hideDialog()" />
                <p-button
                    [label]="'portal.sliders.save' | translate"
                    icon="pi pi-check"
                    (onClick)="save()"
                    [loading]="saving()"
                    [disabled]="uploadingImage()"
                />
            </ng-template>
        </p-dialog>
    `,
})
export class PortalSlidersComponent implements OnInit, OnDestroy {
    private readonly sliderService = inject(SliderService);
    private readonly userProfileService = inject(UserProfileService);
    private readonly messageService = inject(MessageService);
    private readonly confirmationService = inject(ConfirmationService);
    private readonly translate = inject(TranslateService);
    private readonly appConfig = inject(APP_CONFIG) as AppConfig;

    readonly sliders = signal<SliderDto[]>([]);
    readonly loading = signal(false);
    readonly saving = signal(false);
    readonly uploadingImage = signal(false);

    dialogVisible = false;
    editingId: string | null = null;

    form: CreateSliderCommand = emptyForm();

    readonly filterFields = ['titleEn', 'titleAr', 'descriptionEn', 'descriptionAr', 'imageUrl'];

    pageReportTemplate = '';
    private langSub?: Subscription;

    ngOnInit(): void {
        this.refreshLocalizedStrings();
        this.langSub = this.translate.onLangChange.subscribe(() => this.refreshLocalizedStrings());
        this.loadSliders();
    }

    ngOnDestroy(): void {
        this.langSub?.unsubscribe();
    }

    private refreshLocalizedStrings(): void {
        this.pageReportTemplate = this.translate.instant('portal.sliders.pageReport');
    }

    dialogHeader(): string {
        return this.editingId
            ? this.translate.instant('portal.sliders.editHeader')
            : this.translate.instant('portal.sliders.createHeader');
    }

    loadSliders(): void {
        this.loading.set(true);
        this.sliderService.getAll().subscribe({
            next: (list) => {
                this.sliders.set(list);
                this.loading.set(false);
            },
            error: (err) => {
                this.loading.set(false);
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.sliders.errorLoadSummary'),
                    detail: extractApiError(err, this.translate.instant('portal.sliders.errorLoadDetail')),
                });
            },
        });
    }

    onGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onImgError(ev: Event): void {
        const img = ev.target as HTMLImageElement | null;
        if (img) img.style.display = 'none';
    }

    onPreviewImgError(ev: Event): void {
        this.onImgError(ev);
    }

    rowImageSrc(row: SliderDto): string {
        return resolveUploadedImageUrl(row.imageUrl, this.appConfig.apiUrl);
    }

    sliderImagePreviewUrl(): string {
        return resolveUploadedImageUrl(this.form.imageUrl, this.appConfig.apiUrl);
    }

    onSliderImageSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;

        this.uploadingImage.set(true);
        this.userProfileService.uploadSingleImage(file).subscribe({
            next: (url) => {
                this.uploadingImage.set(false);
                if (url?.trim()) {
                    this.form.imageUrl = url.trim();
                }
            },
            error: (err) => {
                this.uploadingImage.set(false);
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.sliders.errorUploadSummary'),
                    detail: extractApiError(err, this.translate.instant('portal.sliders.errorUploadDetail')),
                });
            },
        });
    }

    openNew(): void {
        this.editingId = null;
        this.form = emptyForm();
        this.dialogVisible = true;
    }

    openEdit(row: SliderDto): void {
        this.editingId = row.id;
        this.form = {
            titleEn: row.titleEn ?? '',
            titleAr: row.titleAr ?? '',
            descriptionEn: row.descriptionEn ?? '',
            descriptionAr: row.descriptionAr ?? '',
            imageUrl: row.imageUrl ?? '',
        };
        this.dialogVisible = true;
    }

    hideDialog(): void {
        this.dialogVisible = false;
        this.editingId = null;
        this.form = emptyForm();
    }

    save(): void {
        if (!this.form.titleEn?.trim() || !this.form.titleAr?.trim()) {
            this.messageService.add({
                severity: 'warn',
                summary: this.translate.instant('portal.sliders.validationSummary'),
                detail: this.translate.instant('portal.sliders.validationTitles'),
            });
            return;
        }

        this.saving.set(true);
        if (this.editingId) {
            const cmd: UpdateSliderCommand = {
                id: this.editingId,
                titleEn: this.form.titleEn.trim(),
                titleAr: this.form.titleAr.trim(),
                descriptionEn: this.form.descriptionEn?.trim() ?? '',
                descriptionAr: this.form.descriptionAr?.trim() ?? '',
                imageUrl: this.form.imageUrl?.trim() ?? '',
            };
            this.sliderService.update(this.editingId, cmd).subscribe({
                next: () => {
                    this.saving.set(false);
                    this.messageService.add({
                        severity: 'success',
                        summary: this.translate.instant('portal.sliders.successUpdateSummary'),
                        detail: this.translate.instant('portal.sliders.successUpdateDetail'),
                    });
                    this.hideDialog();
                    this.loadSliders();
                },
                error: (err) => {
                    this.saving.set(false);
                    this.messageService.add({
                        severity: 'error',
                        summary: this.translate.instant('portal.sliders.errorSaveSummary'),
                        detail: extractApiError(err, this.translate.instant('portal.sliders.errorSaveDetail')),
                    });
                },
            });
        } else {
            const cmd: CreateSliderCommand = {
                titleEn: this.form.titleEn.trim(),
                titleAr: this.form.titleAr.trim(),
                descriptionEn: this.form.descriptionEn?.trim() ?? '',
                descriptionAr: this.form.descriptionAr?.trim() ?? '',
                imageUrl: this.form.imageUrl?.trim() ?? '',
            };
            this.sliderService.create(cmd).subscribe({
                next: () => {
                    this.saving.set(false);
                    this.messageService.add({
                        severity: 'success',
                        summary: this.translate.instant('portal.sliders.successCreateSummary'),
                        detail: this.translate.instant('portal.sliders.successCreateDetail'),
                    });
                    this.hideDialog();
                    this.loadSliders();
                },
                error: (err) => {
                    this.saving.set(false);
                    this.messageService.add({
                        severity: 'error',
                        summary: this.translate.instant('portal.sliders.errorSaveSummary'),
                        detail: extractApiError(err, this.translate.instant('portal.sliders.errorSaveDetail')),
                    });
                },
            });
        }
    }

    confirmDelete(event: Event, row: SliderDto): void {
        this.confirmationService.confirm({
            target: (event.currentTarget ?? event.target ?? undefined) as HTMLElement | undefined,
            message: this.translate.instant('portal.sliders.deleteConfirm'),
            header: this.translate.instant('portal.sliders.deleteHeader'),
            icon: 'pi pi-exclamation-triangle',
            acceptButtonProps: {
                label: this.translate.instant('portal.sliders.acceptYes'),
                severity: 'danger',
            },
            rejectButtonProps: {
                label: this.translate.instant('portal.sliders.rejectNo'),
                severity: 'secondary',
                outlined: true,
            },
            accept: () => this.performDelete(row.id),
        });
    }

    private performDelete(id: string): void {
        this.sliderService.delete(id).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: this.translate.instant('portal.sliders.successDeleteSummary'),
                    detail: this.translate.instant('portal.sliders.successDeleteDetail'),
                });
                this.loadSliders();
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: this.translate.instant('portal.sliders.errorDeleteSummary'),
                    detail: extractApiError(err, this.translate.instant('portal.sliders.errorDeleteDetail')),
                });
            },
        });
    }
}

function emptyForm(): CreateSliderCommand {
    return {
        titleEn: '',
        titleAr: '',
        descriptionEn: '',
        descriptionAr: '',
        imageUrl: '',
    };
}
