import {
  isPlatformBrowser
} from "./chunk-VKOXGSWD.js";
import {
  Injectable,
  PLATFORM_ID,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-74N5S3WL.js";

// src/app/layout/service/layout.service.ts
var LAYOUT_CONFIG_STORAGE_KEY = "rahala_portal_layout_config";
var DEFAULT_LAYOUT_CONFIG = {
  ripple: false,
  preset: "Aura",
  primary: "indigo",
  inputStyle: "outlined",
  surface: null,
  darkTheme: false,
  menuMode: "static",
  menuTheme: "colorScheme"
};
var ALLOWED_PRESETS = /* @__PURE__ */ new Set(["Aura", "Lara", "Nora"]);
var ALLOWED_MENU_MODES = /* @__PURE__ */ new Set(["static", "overlay", "slim", "slim-plus", "reveal", "drawer", "horizontal"]);
var ALLOWED_MENU_THEMES = /* @__PURE__ */ new Set(["colorScheme", "primaryColor", "transparent"]);
var ALLOWED_COLOR_SCHEMES = /* @__PURE__ */ new Set(["light", "dark", "dim"]);
function sanitizeLayoutConfigPatch(parsed) {
  const out = {};
  if (parsed.preset != null && ALLOWED_PRESETS.has(String(parsed.preset))) {
    out.preset = parsed.preset;
  }
  if (typeof parsed.primary === "string" && parsed.primary.trim()) {
    out.primary = parsed.primary.trim();
  }
  if ("surface" in parsed) {
    if (parsed.surface === null) {
      out.surface = null;
    } else if (typeof parsed.surface === "string" && /^[a-z0-9-]+$/i.test(parsed.surface)) {
      out.surface = parsed.surface;
    }
  }
  if (typeof parsed.darkTheme === "boolean") {
    out.darkTheme = parsed.darkTheme;
  }
  if (parsed.menuMode != null && ALLOWED_MENU_MODES.has(String(parsed.menuMode))) {
    out.menuMode = parsed.menuMode;
  }
  if (parsed.menuTheme != null && ALLOWED_MENU_THEMES.has(String(parsed.menuTheme))) {
    out.menuTheme = parsed.menuTheme;
  }
  if (typeof parsed.ripple === "boolean") {
    out.ripple = parsed.ripple;
  }
  if (typeof parsed.inputStyle === "string" && parsed.inputStyle.trim()) {
    out.inputStyle = parsed.inputStyle.trim();
  }
  if (parsed.colorScheme != null && ALLOWED_COLOR_SCHEMES.has(parsed.colorScheme)) {
    out.colorScheme = parsed.colorScheme;
  }
  return out;
}
var LayoutService = class _LayoutService {
  platformId = inject(PLATFORM_ID);
  _config = __spreadValues({}, DEFAULT_LAYOUT_CONFIG);
  _state = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    sidebarActive: false,
    anchored: false,
    overlaySubmenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    activeMenuItem: null
  };
  layoutConfig = signal(this.createInitialLayoutConfig(), ...ngDevMode ? [{ debugName: "layoutConfig" }] : []);
  layoutState = signal(this._state, ...ngDevMode ? [{ debugName: "layoutState" }] : []);
  configUpdate = new Subject();
  overlayOpen = new Subject();
  menuSource = new Subject();
  resetSource = new Subject();
  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();
  configUpdate$ = this.configUpdate.asObservable();
  overlayOpen$ = this.overlayOpen.asObservable();
  isDarkTheme = computed(() => this.layoutConfig().darkTheme, ...ngDevMode ? [{ debugName: "isDarkTheme" }] : []);
  isSlim = computed(() => this.layoutConfig().menuMode === "slim", ...ngDevMode ? [{ debugName: "isSlim" }] : []);
  isSlimPlus = computed(() => this.layoutConfig().menuMode === "slim-plus", ...ngDevMode ? [{ debugName: "isSlimPlus" }] : []);
  isHorizontal = computed(() => this.layoutConfig().menuMode === "horizontal", ...ngDevMode ? [{ debugName: "isHorizontal" }] : []);
  isOverlay = computed(() => this.layoutConfig().menuMode === "overlay", ...ngDevMode ? [{ debugName: "isOverlay" }] : []);
  transitionComplete = signal(false, ...ngDevMode ? [{ debugName: "transitionComplete" }] : []);
  isSidebarStateChanged = computed(() => {
    const layoutConfig = this.layoutConfig();
    return layoutConfig.menuMode === "horizontal" || layoutConfig.menuMode === "slim" || layoutConfig.menuMode === "slim-plus";
  }, ...ngDevMode ? [{ debugName: "isSidebarStateChanged" }] : []);
  initialized = false;
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
  createInitialLayoutConfig() {
    if (!isPlatformBrowser(this.platformId)) {
      return __spreadValues({}, DEFAULT_LAYOUT_CONFIG);
    }
    try {
      const raw = localStorage.getItem(LAYOUT_CONFIG_STORAGE_KEY);
      if (!raw) {
        return __spreadValues({}, DEFAULT_LAYOUT_CONFIG);
      }
      const parsed = JSON.parse(raw);
      return __spreadValues(__spreadValues({}, DEFAULT_LAYOUT_CONFIG), sanitizeLayoutConfigPatch(parsed));
    } catch {
      return __spreadValues({}, DEFAULT_LAYOUT_CONFIG);
    }
  }
  persistLayoutConfig(config) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    try {
      localStorage.setItem(LAYOUT_CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch {
    }
  }
  handleDarkModeTransition(config) {
    const supportsViewTransition = "startViewTransition" in document;
    if (supportsViewTransition) {
      this.startViewTransition(config);
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }
  startViewTransition(config) {
    const transition = document.startViewTransition(() => {
      this.toggleDarkMode(config);
    });
    transition.ready.then(() => {
      this.onTransitionEnd();
    }).catch(() => {
    });
  }
  toggleDarkMode(config) {
    const _config = config || this.layoutConfig();
    if (_config.darkTheme) {
      document.documentElement.classList.add("app-dark");
    } else {
      document.documentElement.classList.remove("app-dark");
    }
  }
  onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => {
      this.transitionComplete.set(false);
    });
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: !this.layoutState().overlayMenuActive }));
      if (this.layoutState().overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
    } else {
      this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));
      if (this.layoutState().staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  onConfigUpdate() {
    const config = this.layoutConfig();
    this._config = __spreadValues({}, config);
    this.configUpdate.next(config);
    this.persistLayoutConfig(config);
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }
  showProfileSidebar() {
    this.layoutState.update((state) => __spreadProps(__spreadValues({}, state), {
      profileSidebarVisible: true
    }));
  }
  showConfigSidebar() {
    this.layoutState.update((state) => __spreadProps(__spreadValues({}, state), {
      configSidebarVisible: true
    }));
  }
  hideConfigSidebar() {
    this.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { configSidebarVisible: false }));
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LayoutService
};
//# sourceMappingURL=chunk-L2X4U6PL.js.map
