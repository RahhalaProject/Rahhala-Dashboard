import { Injectable, effect, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

export type ColorScheme = 'light' | 'dark' | 'dim';

export interface layoutConfig {
    inputStyle: string;
    preset?: string;
    primary?: string;
    surface?: string | undefined | null;
    ripple: boolean;
    darkTheme?: boolean;
    menuMode?: string;
    menuTheme?: string;
    colorScheme?: ColorScheme;
}

const LAYOUT_CONFIG_STORAGE_KEY = 'rahala_portal_layout_config';

const DEFAULT_LAYOUT_CONFIG: layoutConfig = {
    ripple: false,
    preset: 'Aura',
    primary: 'indigo',
    inputStyle: 'outlined',
    surface: null,
    darkTheme: false,
    menuMode: 'static',
    menuTheme: 'colorScheme',
};

const ALLOWED_PRESETS = new Set(['Aura', 'Lara', 'Nora']);
const ALLOWED_MENU_MODES = new Set(['static', 'overlay', 'slim', 'slim-plus', 'reveal', 'drawer', 'horizontal']);
const ALLOWED_MENU_THEMES = new Set(['colorScheme', 'primaryColor', 'transparent']);
const ALLOWED_COLOR_SCHEMES = new Set<ColorScheme>(['light', 'dark', 'dim']);

function sanitizeLayoutConfigPatch(parsed: Partial<layoutConfig>): Partial<layoutConfig> {
    const out: Partial<layoutConfig> = {};
    if (parsed.preset != null && ALLOWED_PRESETS.has(String(parsed.preset))) {
        out.preset = parsed.preset;
    }
    if (typeof parsed.primary === 'string' && parsed.primary.trim()) {
        out.primary = parsed.primary.trim();
    }
    if ('surface' in parsed) {
        if (parsed.surface === null) {
            out.surface = null;
        } else if (typeof parsed.surface === 'string' && /^[a-z0-9-]+$/i.test(parsed.surface)) {
            out.surface = parsed.surface;
        }
    }
    if (typeof parsed.darkTheme === 'boolean') {
        out.darkTheme = parsed.darkTheme;
    }
    if (parsed.menuMode != null && ALLOWED_MENU_MODES.has(String(parsed.menuMode))) {
        out.menuMode = parsed.menuMode;
    }
    if (parsed.menuTheme != null && ALLOWED_MENU_THEMES.has(String(parsed.menuTheme))) {
        out.menuTheme = parsed.menuTheme;
    }
    if (typeof parsed.ripple === 'boolean') {
        out.ripple = parsed.ripple;
    }
    if (typeof parsed.inputStyle === 'string' && parsed.inputStyle.trim()) {
        out.inputStyle = parsed.inputStyle.trim();
    }
    if (parsed.colorScheme != null && ALLOWED_COLOR_SCHEMES.has(parsed.colorScheme as ColorScheme)) {
        out.colorScheme = parsed.colorScheme;
    }
    return out;
}

interface LayoutState {
    staticMenuDesktopInactive?: boolean;
    overlayMenuActive?: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive?: boolean;
    menuHoverActive?: boolean;
    profileSidebarVisible: boolean;
    sidebarActive: boolean;
    anchored: boolean;
    overlaySubmenuActive: boolean;
    activeMenuItem: any;
}

interface MenuChangeEvent {
    key: string;
    routeEvent?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private readonly platformId = inject(PLATFORM_ID);

    _config: layoutConfig = { ...DEFAULT_LAYOUT_CONFIG };

    _state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        sidebarActive: false,
        anchored: false,
        overlaySubmenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        activeMenuItem: null,
    };

    layoutConfig = signal<layoutConfig>(this.createInitialLayoutConfig());

    layoutState = signal<LayoutState>(this._state);

    private configUpdate = new Subject<layoutConfig>();

    private overlayOpen = new Subject<any>();

    private menuSource = new Subject<MenuChangeEvent>();

    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();

    resetSource$ = this.resetSource.asObservable();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    isDarkTheme = computed(() => this.layoutConfig().darkTheme);

    isSlim = computed(() => this.layoutConfig().menuMode === 'slim');

    isSlimPlus = computed(() => this.layoutConfig().menuMode === 'slim-plus');

    isHorizontal = computed(
        () => this.layoutConfig().menuMode === 'horizontal',
    );

    isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

    transitionComplete = signal<boolean>(false);

    isSidebarStateChanged = computed(() => {
        const layoutConfig = this.layoutConfig();
        return layoutConfig.menuMode === 'horizontal' || layoutConfig.menuMode === 'slim' || layoutConfig.menuMode === 'slim-plus';
    });


    private initialized = false;

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            this.toggleDarkMode(this.layoutConfig());
        }

        effect(() => {
            const config = this.layoutConfig();
            if (config) {
                this.onConfigUpdate();
            }
        });

        effect(() => {
            const config = this.layoutConfig();

            if (!this.initialized || !config) {
                this.initialized = true;
                return;
            }

            this.handleDarkModeTransition(config);
        });

        effect(() => {
            this.isSidebarStateChanged() && this.reset();
        });
    }

    private createInitialLayoutConfig(): layoutConfig {
        if (!isPlatformBrowser(this.platformId)) {
            return { ...DEFAULT_LAYOUT_CONFIG };
        }
        try {
            const raw = localStorage.getItem(LAYOUT_CONFIG_STORAGE_KEY);
            if (!raw) {
                return { ...DEFAULT_LAYOUT_CONFIG };
            }
            const parsed = JSON.parse(raw) as Partial<layoutConfig>;
            return { ...DEFAULT_LAYOUT_CONFIG, ...sanitizeLayoutConfigPatch(parsed) };
        } catch {
            return { ...DEFAULT_LAYOUT_CONFIG };
        }
    }

    private persistLayoutConfig(config: layoutConfig): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        try {
            localStorage.setItem(LAYOUT_CONFIG_STORAGE_KEY, JSON.stringify(config));
        } catch {
            /* quota or private mode */
        }
    }

    private handleDarkModeTransition(config: layoutConfig): void {
        const supportsViewTransition = 'startViewTransition' in document;

        if (supportsViewTransition) {
            this.startViewTransition(config);
        } else {
            this.toggleDarkMode(config);
            this.onTransitionEnd();
        }
    }

    private startViewTransition(config: layoutConfig): void {
        const transition = (document as any).startViewTransition(() => {
            this.toggleDarkMode(config);
        });

        transition.ready
            .then(() => {
                this.onTransitionEnd();
            })
            .catch(() => {});
    }

    toggleDarkMode(config?: layoutConfig): void {
        const _config = config || this.layoutConfig();
        if (_config.darkTheme) {
            document.documentElement.classList.add('app-dark');
        } else {
            document.documentElement.classList.remove('app-dark');
        }
    }

    private onTransitionEnd() {
        this.transitionComplete.set(true);
        setTimeout(() => {
            this.transitionComplete.set(false);
        });
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.layoutState.update((prev) => ({ ...prev, overlayMenuActive: !this.layoutState().overlayMenuActive }));

            if (this.layoutState().overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.layoutState.update((prev) => ({ ...prev, staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
        } else {
            this.layoutState.update((prev) => ({ ...prev, staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));

            if (this.layoutState().staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }
    onConfigUpdate() {
        const config = this.layoutConfig();
        this._config = { ...config };
        this.configUpdate.next(config);
        this.persistLayoutConfig(config);
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

    onOverlaySubmenuOpen() {
        this.overlayOpen.next(null);
    }

    showProfileSidebar() {
        this.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: true,
        }));
    }

    showConfigSidebar() {
        this.layoutState.update((state) => ({
            ...state,
            configSidebarVisible: true,
        }));
    }

    hideConfigSidebar() {
        this.layoutState.update((prev) => ({ ...prev, configSidebarVisible: false }));
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }
}
