import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { APP_CONFIG, AppConfig } from '@/core/config/app.config';
import type { CreateSliderCommand, SliderDto, UpdateSliderCommand } from '@/core/models/slider.model';

@Injectable({ providedIn: 'root' })
export class SliderService {
    private readonly http = inject(HttpClient);
    private readonly config = inject(APP_CONFIG) as AppConfig;
    private readonly base = `${this.config.apiUrl}/v1/SlidersManagement`;

    private normalizeList(body: unknown): SliderDto[] {
        if (Array.isArray(body)) return body as SliderDto[];
        if (body && typeof body === 'object') {
            const o = body as Record<string, unknown>;
            const data = o['data'];
            const items = o['items'];
            if (Array.isArray(data)) return data as SliderDto[];
            if (Array.isArray(items)) return items as SliderDto[];
        }
        return [];
    }

    getAll(): Observable<SliderDto[]> {
        return this.http.get<unknown>(this.base).pipe(map((b) => this.normalizeList(b)));
    }

    getById(id: string): Observable<SliderDto> {
        return this.http.get<SliderDto>(`${this.base}/${encodeURIComponent(id)}`);
    }

    create(command: CreateSliderCommand): Observable<SliderDto> {
        return this.http.post<SliderDto>(this.base, command);
    }

    update(id: string, command: UpdateSliderCommand): Observable<SliderDto> {
        return this.http.put<SliderDto>(`${this.base}/${encodeURIComponent(id)}`, command);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.base}/${encodeURIComponent(id)}`);
    }
}
