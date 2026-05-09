import {
  Tooltip,
  TooltipModule
} from "./chunk-VQESICQB.js";
import {
  AppConfigurator,
  AuthService,
  Drawer,
  DrawerModule,
  Qr,
  TokenService
} from "./chunk-7T22JBMA.js";
import {
  LayoutService
} from "./chunk-TFVUJ6HJ.js";
import {
  APP_CONFIG,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  appConfigValue,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling
} from "./chunk-6GG7XO2Y.js";
import {
  AsyncPipe,
  Badge,
  BadgeModule,
  Button,
  ButtonDirective,
  ButtonModule,
  CommonModule,
  DomHandler,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  P,
  R,
  Ripple,
  RippleModule,
  W,
  c,
  j,
  provideHttpClient,
  providePrimeNG,
  withFetch,
  withInterceptors
} from "./chunk-7X5MFGPZ.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  __spreadProps,
  __spreadValues,
  animate,
  booleanAttribute,
  catchError,
  computed,
  filter,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  setClassMetadata,
  state,
  style,
  switchMap,
  throwError,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZX52XOT5.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-UHAPECDU.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/primeng/fesm2022/primeng-styleclass.mjs
var StyleClass = class _StyleClass {
  el;
  renderer;
  zone;
  constructor(el, renderer, zone) {
    this.el = el;
    this.renderer = renderer;
    this.zone = zone;
  }
  /**
   * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
   * @group Props
   */
  selector;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterFromClass;
  /**
   * Style class to add during enter animation.
   * @group Props
   */
  enterActiveClass;
  /**
   * Style class to add when item begins to get displayed.
   * @group Props
   */
  enterToClass;
  /**
   * Style class to add when item begins to get hidden.
   * @group Props
   */
  leaveFromClass;
  /**
   * Style class to add during leave animation.
   * @group Props
   */
  leaveActiveClass;
  /**
   * Style class to add when leave animation is completed.
   * @group Props
   */
  leaveToClass;
  /**
   * Whether to trigger leave animation when outside of the element is clicked.
   * @group Props
   */
  hideOnOutsideClick;
  /**
   * Adds or removes a class when no enter-leave animation is required.
   * @group Props
   */
  toggleClass;
  /**
   * Whether to trigger leave animation when escape key pressed.
   * @group Props
   */
  hideOnEscape;
  /**
   * Whether to trigger leave animation when the target element resized.
   * @group Props
   */
  hideOnResize;
  /**
   * Target element to listen resize. Valid values are "window", "document" or target element selector.
   * @group Props
   */
  resizeSelector;
  eventListener;
  documentClickListener;
  documentKeydownListener;
  windowResizeListener;
  resizeObserver;
  target;
  enterListener;
  leaveListener;
  animating;
  _enterClass;
  _leaveClass;
  _resizeTarget;
  clickListener() {
    this.target ||= j(this.selector, this.el.nativeElement);
    if (this.toggleClass) {
      this.toggle();
    } else {
      if (this.target?.offsetParent === null) this.enter();
      else this.leave();
    }
  }
  toggle() {
    if (R(this.target, this.toggleClass)) P(this.target, this.toggleClass);
    else W(this.target, this.toggleClass);
  }
  enter() {
    if (this.enterActiveClass) {
      if (!this.animating) {
        this.animating = true;
        if (this.enterActiveClass.includes("slidedown")) {
          this.target.style.height = "0px";
          P(this.target, this.enterFromClass || "hidden");
          this.target.style.maxHeight = this.target.scrollHeight + "px";
          W(this.target, this.enterFromClass || "hidden");
          this.target.style.height = "";
        }
        W(this.target, this.enterActiveClass);
        if (this.enterFromClass) {
          P(this.target, this.enterFromClass);
        }
        this.enterListener = this.renderer.listen(this.target, "animationend", () => {
          P(this.target, this.enterActiveClass);
          if (this.enterToClass) {
            W(this.target, this.enterToClass);
          }
          this.enterListener && this.enterListener();
          if (this.enterActiveClass?.includes("slidedown")) {
            this.target.style.maxHeight = "";
          }
          this.animating = false;
        });
      }
    } else {
      if (this.enterFromClass) {
        P(this.target, this.enterFromClass);
      }
      if (this.enterToClass) {
        W(this.target, this.enterToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.bindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.bindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.bindResizeListener();
    }
  }
  leave() {
    if (this.leaveActiveClass) {
      if (!this.animating) {
        this.animating = true;
        W(this.target, this.leaveActiveClass);
        if (this.leaveFromClass) {
          P(this.target, this.leaveFromClass);
        }
        this.leaveListener = this.renderer.listen(this.target, "animationend", () => {
          P(this.target, this.leaveActiveClass);
          if (this.leaveToClass) {
            W(this.target, this.leaveToClass);
          }
          this.leaveListener && this.leaveListener();
          this.animating = false;
        });
      }
    } else {
      if (this.leaveFromClass) {
        P(this.target, this.leaveFromClass);
      }
      if (this.leaveToClass) {
        W(this.target, this.leaveToClass);
      }
    }
    if (this.hideOnOutsideClick) {
      this.unbindDocumentClickListener();
    }
    if (this.hideOnEscape) {
      this.unbindDocumentKeydownListener();
    }
    if (this.hideOnResize) {
      this.unbindResizeListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "click", (event) => {
        if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentClickListener();
        else if (this.isOutsideClick(event)) this.leave();
      });
    }
  }
  bindDocumentKeydownListener() {
    if (!this.documentKeydownListener) {
      this.zone.runOutsideAngular(() => {
        this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, "keydown", (event) => {
          const {
            key,
            keyCode,
            which,
            type
          } = event;
          if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue("position") === "static") this.unbindDocumentKeydownListener();
          if (this.isVisible() && key === "Escape" && keyCode === 27 && which === 27) this.leave();
        });
      });
    }
  }
  isVisible() {
    return this.target.offsetParent !== null;
  }
  isOutsideClick(event) {
    return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  unbindDocumentKeydownListener() {
    if (this.documentKeydownListener) {
      this.documentKeydownListener();
      this.documentKeydownListener = null;
    }
  }
  bindResizeListener() {
    this._resizeTarget = j(this.resizeSelector);
    if (c(this._resizeTarget)) {
      this.bindElementResizeListener();
    } else {
      this.bindWindowResizeListener();
    }
  }
  unbindResizeListener() {
    this.unbindWindowResizeListener();
    this.unbindElementResizeListener();
  }
  bindWindowResizeListener() {
    if (!this.windowResizeListener) {
      this.zone.runOutsideAngular(() => {
        this.windowResizeListener = this.renderer.listen(window, "resize", () => {
          if (!this.isVisible()) {
            this.unbindWindowResizeListener();
          } else {
            this.leave();
          }
        });
      });
    }
  }
  unbindWindowResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  bindElementResizeListener() {
    if (!this.resizeObserver && this._resizeTarget) {
      let isFirstResize = true;
      this.resizeObserver = new ResizeObserver(() => {
        if (isFirstResize) {
          isFirstResize = false;
          return;
        }
        if (this.isVisible()) {
          this.leave();
        }
      });
      this.resizeObserver.observe(this._resizeTarget);
    }
  }
  unbindElementResizeListener() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
  }
  ngOnDestroy() {
    this.target = null;
    this._resizeTarget = null;
    if (this.eventListener) {
      this.eventListener();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentKeydownListener();
    this.unbindResizeListener();
  }
  static \u0275fac = function StyleClass_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClass)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _StyleClass,
    selectors: [["", "pStyleClass", ""]],
    hostBindings: function StyleClass_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function StyleClass_click_HostBindingHandler($event) {
          return ctx.clickListener($event);
        });
      }
    },
    inputs: {
      selector: [0, "pStyleClass", "selector"],
      enterFromClass: "enterFromClass",
      enterActiveClass: "enterActiveClass",
      enterToClass: "enterToClass",
      leaveFromClass: "leaveFromClass",
      leaveActiveClass: "leaveActiveClass",
      leaveToClass: "leaveToClass",
      hideOnOutsideClick: [2, "hideOnOutsideClick", "hideOnOutsideClick", booleanAttribute],
      toggleClass: "toggleClass",
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      hideOnResize: [2, "hideOnResize", "hideOnResize", booleanAttribute],
      resizeSelector: "resizeSelector"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClass, [{
    type: Directive,
    args: [{
      selector: "[pStyleClass]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    selector: [{
      type: Input,
      args: ["pStyleClass"]
    }],
    enterFromClass: [{
      type: Input
    }],
    enterActiveClass: [{
      type: Input
    }],
    enterToClass: [{
      type: Input
    }],
    leaveFromClass: [{
      type: Input
    }],
    leaveActiveClass: [{
      type: Input
    }],
    leaveToClass: [{
      type: Input
    }],
    hideOnOutsideClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggleClass: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizeSelector: [{
      type: Input
    }],
    clickListener: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var StyleClassModule = class _StyleClassModule {
  static \u0275fac = function StyleClassModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StyleClassModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StyleClassModule,
    imports: [StyleClass],
    exports: [StyleClass]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleClassModule, [{
    type: NgModule,
    args: [{
      imports: [StyleClass],
      exports: [StyleClass]
    }]
  }], null, null);
})();

// src/app/layout/components/app.breadcrumb.ts
var _c0 = ["app-breadcrumb", ""];
function AppBreadcrumb_ng_template_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function AppBreadcrumb_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AppBreadcrumb_ng_template_2_li_2_Template, 2, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
  }
}
var AppBreadcrumb = class _AppBreadcrumb {
  router;
  _breadcrumbs$ = new BehaviorSubject([]);
  breadcrumbs$ = this._breadcrumbs$.asObservable();
  constructor(router) {
    this.router = router;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }
  addBreadcrumb(route, parentUrl, breadcrumbs) {
    const routeUrl = parentUrl.concat(route.url.map((url) => url.path));
    const breadcrumb = route.data["breadcrumb"];
    const parentBreadcrumb = route.parent && route.parent.data ? route.parent.data["breadcrumb"] : null;
    if (breadcrumb && breadcrumb !== parentBreadcrumb) {
      breadcrumbs.push({
        label: route.data["breadcrumb"],
        url: "/" + routeUrl.join("/")
      });
    }
    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }
  static \u0275fac = function AppBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBreadcrumb)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppBreadcrumb, selectors: [["", "app-breadcrumb", ""]], attrs: _c0, decls: 4, vars: 3, consts: [[1, "layout-breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "layout-breadcrumb-chevron", 4, "ngIf"], [1, "layout-breadcrumb-chevron"]], template: function AppBreadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "ol");
      \u0275\u0275template(2, AppBreadcrumb_ng_template_2_Template, 3, 2, "ng-template", 1);
      \u0275\u0275pipe(3, "async");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx.breadcrumbs$));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, AsyncPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBreadcrumb, [{
    type: Component,
    args: [{
      selector: "[app-breadcrumb]",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `<nav class="layout-breadcrumb">
        <ol>
            <ng-template
                ngFor
                let-item
                let-last="last"
                [ngForOf]="breadcrumbs$ | async"
            >
                <li>{{ item.label }}</li>
                <li *ngIf="!last" class="layout-breadcrumb-chevron">/</li>
            </ng-template>
        </ol>
    </nav> `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppBreadcrumb, { className: "AppBreadcrumb", filePath: "src/app/layout/components/app.breadcrumb.ts", lineNumber: 35 });
})();

// src/app/layout/components/app.topbar.ts
var _c02 = ["menubutton"];
var _c1 = ["app-topbar", ""];
var AppTopbar = class _AppTopbar {
  layoutService;
  menuButton;
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }
  onProfileButtonClick() {
    this.layoutService.showProfileSidebar();
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["", "app-topbar", ""]], viewQuery: function AppTopbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuButton = _t.first);
    }
  }, attrs: _c1, decls: 17, vars: 0, consts: [["menubutton", ""], [1, "layout-topbar"], [1, "topbar-start"], ["type", "button", 1, "topbar-menubutton", "p-link", "p-trigger", "hover:cursor-pointer", 3, "click"], [1, "pi", "pi-bars"], ["app-breadcrumb", "", 1, "topbar-breadcrumb"], [1, "topbar-end"], [1, "topbar-menu"], [1, "topbar-search"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search", 1, "w-48", "sm:w-full"], [1, "ml-3"], ["icon", "pi pi-palette", "rounded", "", 3, "onClick"], [1, "topbar-profile"], ["type", "button", 1, "p-link", "hover:cursor-pointer", 3, "click"], ["src", "/layout/images/avatar.png", "alt", "Profile"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3, 0);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMenuButtonClick());
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "nav", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "p-iconfield");
      \u0275\u0275element(10, "p-inputicon", 9)(11, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 11)(13, "p-button", 12);
      \u0275\u0275listener("onClick", function AppTopbar_Template_p_button_onClick_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onConfigButtonClick());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li", 13)(15, "button", 14);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onProfileButtonClick());
      });
      \u0275\u0275element(16, "img", 15);
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [RouterModule, CommonModule, StyleClassModule, AppBreadcrumb, InputTextModule, InputText, ButtonModule, Button, IconFieldModule, IconField, InputIconModule, InputIcon], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "[app-topbar]",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule, AppBreadcrumb, InputTextModule, ButtonModule, IconFieldModule, InputIconModule],
      template: `<div class="layout-topbar">
        <div class="topbar-start">
            <button #menubutton type="button" class="topbar-menubutton p-link p-trigger hover:cursor-pointer" (click)="onMenuButtonClick()">
                <i class="pi pi-bars"></i>
            </button>
            <nav app-breadcrumb class="topbar-breadcrumb"></nav>
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu">
                <li class="topbar-search">
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input type="text" pInputText placeholder="Search" class="w-48 sm:w-full" />
                    </p-iconfield>
                </li>
                <li class="ml-3">
                    <p-button icon="pi pi-palette" rounded (onClick)="onConfigButtonClick()"></p-button>
                </li>
                <li class="topbar-profile">
                    <button type="button" class="p-link hover:cursor-pointer" (click)="onProfileButtonClick()">
                        <img src="/layout/images/avatar.png" alt="Profile" />
                    </button>
                </li>
            </ul>
        </div>
    </div>`
    }]
  }], () => [{ type: LayoutService }], { menuButton: [{
    type: ViewChild,
    args: ["menubutton"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/components/app.topbar.ts", lineNumber: 44 });
})();

// src/app/layout/components/app.menuitem.ts
var _c03 = ["submenu"];
var _c12 = ["app-menuitem", ""];
var _c2 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.label, " ");
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    })("mouseenter", function AppMenuitem_a_2_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseEnter());
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class)("pTooltip", ctx_r0.item.label)("tooltipDisabled", !(ctx_r0.isSlim() && ctx_r0.root && !ctx_r0.active));
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    })("mouseenter", function AppMenuitem_a_3_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseEnter());
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.class)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(16, _c2))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams)("pTooltip", ctx_r0.item.label)("tooltipDisabled", !(ctx_r0.isSlim() && ctx_r0.root));
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 13);
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r5["badgeClass"]);
    \u0275\u0275property("item", child_r5)("index", i_r6)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", null, 0);
    \u0275\u0275listener("@children.done", function AppMenuitem_ul_4_Template_ul_animation_children_done_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmenuAnimated($event));
    });
    \u0275\u0275template(2, AppMenuitem_ul_4_ng_template_2_Template, 1, 5, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  layoutService;
  router;
  item;
  index;
  root;
  parentKey;
  submenu;
  get activeClass() {
    return this.active;
  }
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  get submenuAnimation() {
    if (this.layoutService.isDesktop() && (this.layoutService.isHorizontal() || this.layoutService.isSlim() || this.layoutService.isSlimPlus())) {
      return this.active ? "visible" : "hidden";
    } else
      return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  isSlim = computed(() => this.layoutService.isSlim(), ...ngDevMode ? [{ debugName: "isSlim" }] : []);
  isSlimPlus = computed(() => this.layoutService.isSlimPlus(), ...ngDevMode ? [{ debugName: "isSlimPlus" }] : []);
  isHorizontal = computed(() => this.layoutService.isHorizontal(), ...ngDevMode ? [{ debugName: "isHorizontal" }] : []);
  get isDesktop() {
    return this.layoutService.isDesktop();
  }
  get isMobile() {
    return this.layoutService.isMobile();
  }
  constructor(layoutService, router) {
    this.layoutService = layoutService;
    this.router = router;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.isSlimPlus() || this.isSlim() || this.isHorizontal()) {
        this.active = false;
      } else {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (!(this.isSlimPlus() || this.isSlim() || this.isHorizontal()) && this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewChecked() {
    if (this.root && this.active && this.isDesktop && (this.isHorizontal() || this.isSlim() || this.isSlimPlus())) {
      this.calculatePosition(this.submenu?.nativeElement, this.submenu?.nativeElement.parentElement);
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: "exact",
      queryParams: "ignored",
      matrixParams: "ignored",
      fragment: "ignored"
    });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  onSubmenuAnimated(event) {
    if (event.toState === "visible" && this.isDesktop && (this.isHorizontal() || this.isSlim() || this.isSlimPlus())) {
      const el = event.element;
      const elParent = el.parentElement;
      this.calculatePosition(el, elParent);
    }
  }
  calculatePosition(overlay, target) {
    if (overlay) {
      const { left, top } = target.getBoundingClientRect();
      const [vWidth, vHeight] = [window.innerWidth, window.innerHeight];
      const [oWidth, oHeight] = [overlay.offsetWidth, overlay.offsetHeight];
      const scrollbarWidth = DomHandler.calculateScrollbarWidth();
      overlay.style.top = "";
      overlay.style.left = "";
      if (this.layoutService.isHorizontal()) {
        const width = left + oWidth + scrollbarWidth;
        overlay.style.left = vWidth < width ? `${left - (width - vWidth)}px` : `${left}px`;
      } else if (this.layoutService.isSlim() || this.layoutService.isSlimPlus()) {
        const height = top + oHeight;
        overlay.style.top = vHeight < height ? `${top - (height - vHeight)}px` : `${top}px`;
      }
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.root && this.isSlim() || this.isHorizontal() || this.isSlimPlus()) {
      this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
        menuHoverActive: !val.menuHoverActive
      }));
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
      if (this.root && this.active && (this.isSlim() || this.isHorizontal() || this.isSlimPlus())) {
        this.layoutService.onOverlaySubmenuOpen();
      }
    } else {
      if (this.layoutService.isMobile()) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          staticMenuMobileActive: false
        }));
      }
      if (this.isSlim() || this.isHorizontal() || this.isSlimPlus()) {
        this.layoutService.reset();
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          menuHoverActive: false
        }));
      }
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  onMouseEnter() {
    if (this.root && (this.isSlim() || this.isHorizontal() || this.isSlimPlus()) && this.layoutService.isDesktop()) {
      if (this.layoutService.layoutState().menuHoverActive) {
        this.active = true;
        this.layoutService.onMenuStateChange({ key: this.key });
      }
    }
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], viewQuery: function AppMenuitem_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenu = _t.first);
    }
  }, hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c12, decls: 5, vars: 4, consts: [["submenu", ""], ["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled", "click", "mouseenter", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "mouseenter", "ngClass", "pTooltip", "tooltipDisabled"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "mouseenter", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "pTooltip", "tooltipDisabled"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 1)(2, AppMenuitem_a_2_Template, 5, 8, "a", 2)(3, AppMenuitem_a_3_Template, 5, 17, "a", 3)(4, AppMenuitem_ul_4_Template, 3, 2, "ul", 4);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple, TooltipModule, Tooltip], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      state("hidden", style({
        display: "none"
      })),
      state("visible", style({
        display: "block"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[app-menuitem]",
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
      template: `
        <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">
                {{ item.label }}
            </div>
            <a
                *ngIf="(!item.routerLink || item.items) && item.visible !== false"
                [attr.href]="item.url"
                (click)="itemClick($event)"
                (mouseenter)="onMouseEnter()"
                [ngClass]="item.class"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
                [pTooltip]="item.label"
                [tooltipDisabled]="!(isSlim() && root && !active)"
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                (mouseenter)="onMouseEnter()"
                [ngClass]="item.class"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="
                    item.routerLinkActiveOptions || {
                        paths: 'exact',
                        queryParams: 'ignored',
                        matrixParams: 'ignored',
                        fragment: 'ignored'
                    }
                "
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
                [pTooltip]="item.label"
                [tooltipDisabled]="!(isSlim() && root)"
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul #submenu *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation" (@children.done)="onSubmenuAnimated($event)">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
      animations: [
        trigger("children", [
          state("collapsed", style({
            height: "0"
          })),
          state("expanded", style({
            height: "*"
          })),
          state("hidden", style({
            display: "none"
          })),
          state("visible", style({
            display: "block"
          })),
          transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
        ])
      ]
    }]
  }], () => [{ type: LayoutService }, { type: Router }], { item: [{
    type: Input
  }], index: [{
    type: Input
  }], root: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["class.layout-root-menuitem"]
  }], parentKey: [{
    type: Input
  }], submenu: [{
    type: ViewChild,
    args: ["submenu"]
  }], activeClass: [{
    type: HostBinding,
    args: ["class.active-menuitem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/components/app.menuitem.ts", lineNumber: 108 });
})();

// src/app/layout/components/app.menu.ts
function AppMenu_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenu_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenu_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenu_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        label: "Main",
        icon: "pi pi-fw pi-compass",
        items: [
          {
            label: "Home",
            icon: "pi pi-fw pi-home",
            routerLink: ["/home"]
          },
          {
            label: "My Orders",
            icon: "pi pi-fw pi-shopping-bag",
            routerLink: ["/orders"]
          }
        ]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275template(1, AppMenu_ng_container_1_Template, 3, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.model);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, AppMenuitem, RouterModule],
      template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li
                app-menuitem
                *ngIf="!item.separator"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/components/app.menu.ts", lineNumber: 23 });
})();

// src/app/layout/components/app.sidebar.ts
var _c04 = ["menuContainer"];
var _c13 = ["app-sidebar", ""];
var _c22 = () => ["/"];
var AppSidebar = class _AppSidebar {
  layoutService;
  el;
  timeout = null;
  menuContainer;
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  onMouseEnter() {
    if (!this.layoutService.layoutState().anchored) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutService.layoutState.update((state2) => {
        if (!state2.sidebarActive) {
          return __spreadProps(__spreadValues({}, state2), {
            sidebarActive: true
          });
        }
        return state2;
      });
    }
  }
  onMouseLeave() {
    if (!this.layoutService.layoutState().anchored) {
      if (!this.timeout) {
        this.timeout = setTimeout(() => {
          this.layoutService.layoutState.update((state2) => {
            if (state2.sidebarActive) {
              return __spreadProps(__spreadValues({}, state2), {
                sidebarActive: false
              });
            }
            return state2;
          });
        }, 300);
      }
    }
  }
  anchor() {
    this.layoutService.layoutState.update((state2) => __spreadProps(__spreadValues({}, state2), {
      anchored: !state2.anchored
    }));
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["", "app-sidebar", ""]], viewQuery: function AppSidebar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuContainer = _t.first);
    }
  }, attrs: _c13, decls: 21, vars: 2, consts: [["menuContainer", ""], [1, "layout-sidebar", 3, "mouseenter", "mouseleave"], [1, "sidebar-header"], [1, "app-logo", 3, "routerLink"], ["viewBox", "0 0 124 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "app-logo-normal"], ["d", "M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z", "fill", "var(--logo-color)"], ["d", "M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z", "fill", "var(--logo-color)"], ["d", "M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z", "fill", "var(--logo-color)"], ["d", "M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z", "fill", "var(--logo-color)"], ["d", "M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z", "fill", "var(--logo-color)"], ["d", "M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z", "fill", "var(--logo-color)"], ["d", "M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z", "fill", "var(--logo-color)"], ["d", "M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z", "fill", "var(--logo-color)"], ["d", "M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z", "fill", "var(--logo-color)"], ["width", "21", "height", "22", "viewBox", "0 0 21 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "app-logo-small"], ["d", "M13.8399 15.793L16.2076 21.0019H11.7681L13.8399 15.793Z", "fill", "var(--logo-color)"], ["d", "M9.04637 21.0019L6.67867 15.793L4.60693 21.0019H9.04637Z", "fill", "var(--logo-color)"], ["type", "button", 1, "layout-sidebar-anchor", "p-link", "z-2", "hover:cursor-pointer", 3, "click"], [1, "layout-menu-container"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("mouseenter", function AppSidebar_Template_div_mouseenter_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseEnter());
      })("mouseleave", function AppSidebar_Template_div_mouseleave_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseLeave());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 4);
      \u0275\u0275element(4, "path", 5)(5, "path", 6)(6, "path", 7)(7, "path", 8)(8, "path", 9)(9, "path", 10)(10, "path", 11)(11, "path", 12)(12, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "svg", 14);
      \u0275\u0275element(14, "path", 5)(15, "path", 15)(16, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 17);
      \u0275\u0275listener("click", function AppSidebar_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.anchor());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 18, 0);
      \u0275\u0275element(20, "app-menu");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c22));
    }
  }, dependencies: [AppMenu, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "[app-sidebar]",
      standalone: true,
      imports: [AppMenu, RouterModule],
      template: ` <div
        class="layout-sidebar"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
    >
        <div class="sidebar-header">
            <a [routerLink]="['/']" class="app-logo">
            <svg viewBox="0 0 124 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-normal">
                    <path d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z" fill="var(--logo-color)" />
                    <path d="M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z" fill="var(--logo-color)" />
                    <path d="M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z" fill="var(--logo-color)" />
                    <path d="M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z" fill="var(--logo-color)" />
                    <path
                        d="M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z"
                        fill="var(--logo-color)"
                    />
                    <path
                        d="M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z"
                        fill="var(--logo-color)"
                    />
                    <path d="M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z" fill="var(--logo-color)" />
                    <path d="M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z" fill="var(--logo-color)" />
                    <path
                        d="M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z"
                        fill="var(--logo-color)"
                    />
                </svg>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-logo-small">
                    <path d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z" fill="var(--logo-color)" />
                    <path d="M13.8399 15.793L16.2076 21.0019H11.7681L13.8399 15.793Z" fill="var(--logo-color)" />
                    <path d="M9.04637 21.0019L6.67867 15.793L4.60693 21.0019H9.04637Z" fill="var(--logo-color)" />
                </svg>
            </a>
            <button
                class="layout-sidebar-anchor p-link z-2 hover:cursor-pointer"
                type="button"
                (click)="anchor()"
            ></button>
        </div>

        <div #menuContainer class="layout-menu-container">
            <app-menu></app-menu>
        </div>
    </div>`
    }]
  }], () => [{ type: LayoutService }, { type: ElementRef }], { menuContainer: [{
    type: ViewChild,
    args: ["menuContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/components/app.sidebar.ts", lineNumber: 55 });
})();

// src/app/layout/components/app.profilesidebar.ts
var _c05 = ["app-profilesidebar", ""];
function AppProfileSidebar_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.displayName(ctx));
  }
}
function AppProfileSidebar_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Guest");
    \u0275\u0275elementEnd();
  }
}
var AppProfileSidebar = class _AppProfileSidebar {
  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  visible = computed(() => this.layoutService.layoutState().profileSidebarVisible, ...ngDevMode ? [{ debugName: "visible" }] : []);
  displayName(user) {
    if (!user) {
      return "Guest";
    }
    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();
    return name || user.email;
  }
  logout() {
    this.authService.logout();
    this.onDrawerHide();
  }
  onDrawerHide() {
    this.layoutService.layoutState.update((state2) => __spreadProps(__spreadValues({}, state2), {
      profileSidebarVisible: false
    }));
  }
  static \u0275fac = function AppProfileSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppProfileSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppProfileSidebar, selectors: [["", "app-profilesidebar", ""]], attrs: _c05, decls: 113, vars: 5, consts: [["position", "right", "styleClass", "layout-profile-sidebar w-full sm:w-25rem", 3, "onHide", "visible", "transitionOptions"], [1, "flex", "flex-col", "mx-auto", "md:mx-0"], [1, "mb-2", "font-semibold"], [1, "text-surface-500", "dark:text-surface-400", "font-medium", "mb-8"], [1, "list-none", "m-0", "p-0"], [1, "cursor-pointer", "flex", "mb-4", "p-4", "items-center", "border", "border-surface-200", "dark:border-surface-700", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", "duration-150"], [1, "pi", "pi-user", "text-xl", "text-primary"], [1, "ml-4"], [1, "text-surface-500", "dark:text-surface-400", "m-0"], [1, "pi", "pi-money-bill", "text-xl", "text-primary"], [1, "pi", "pi-cog", "text-xl", "text-primary"], ["tabindex", "0", 1, "cursor-pointer", "flex", "mb-4", "p-4", "items-center", "border", "border-surface-200", "dark:border-surface-700", "rounded", "hover:bg-surface-100", "dark:hover:bg-surface-800", "transition-colors", "duration-150", 3, "click", "keydown.enter"], [1, "pi", "pi-power-off", "text-xl", "text-primary"], [1, "flex", "flex-col", "mt-8", "mx-auto", "md:mx-0"], [1, "pi", "pi-comment", "text-xl", "text-primary"], [1, "pi", "pi-trash", "text-xl", "text-primary"], [1, "pi", "pi-folder", "text-xl", "text-primary"], ["src", "/demo/images/avatar/circle/avatar-m-8.png", "alt", "Avatar", 1, "w-8", "h-8"], ["value", "3", 1, "ml-auto"], ["src", "/demo/images/avatar/circle/avatar-f-8.png", "alt", "Avatar", 1, "w-8", "h-8"], ["value", "1", 1, "ml-auto"], ["src", "/demo/images/avatar/circle/avatar-f-4.png", "alt", "Avatar", 1, "w-8", "h-8"], ["value", "2", 1, "ml-auto"]], template: function AppProfileSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-drawer", 0);
      \u0275\u0275listener("onHide", function AppProfileSidebar_Template_p_drawer_onHide_0_listener() {
        return ctx.onDrawerHide();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Welcome");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, AppProfileSidebar_Conditional_4_Template, 2, 1, "span", 3);
      \u0275\u0275pipe(5, "async");
      \u0275\u0275conditionalBranchCreate(6, AppProfileSidebar_Conditional_6_Template, 2, 0, "span", 3);
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5)(10, "span");
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7)(13, "span", 2);
      \u0275\u0275text(14, "Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 8);
      \u0275\u0275text(16, " Lorem ipsum date visale ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "li")(18, "a", 5)(19, "span");
      \u0275\u0275element(20, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 7)(22, "span", 2);
      \u0275\u0275text(23, "Billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 8);
      \u0275\u0275text(25, " Amet mimin m\u0131ollit ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "li")(27, "a", 5)(28, "span");
      \u0275\u0275element(29, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 7)(31, "span", 2);
      \u0275\u0275text(32, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 8);
      \u0275\u0275text(34, " Exercitation veniam ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "li")(36, "a", 11);
      \u0275\u0275listener("click", function AppProfileSidebar_Template_a_click_36_listener($event) {
        ctx.logout();
        return $event.preventDefault();
      })("keydown.enter", function AppProfileSidebar_Template_a_keydown_enter_36_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275element(38, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7)(40, "span", 2);
      \u0275\u0275text(41, "Sign Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 8);
      \u0275\u0275text(43, " End your portal session ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(44, "div", 13)(45, "span", 2);
      \u0275\u0275text(46, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 3);
      \u0275\u0275text(48, "You have 3 notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul", 4)(50, "li")(51, "a", 5)(52, "span");
      \u0275\u0275element(53, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 7)(55, "span", 2);
      \u0275\u0275text(56, "Your post has new comments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 8);
      \u0275\u0275text(58, " 5 min ago ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "li")(60, "a", 5)(61, "span");
      \u0275\u0275element(62, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 7)(64, "span", 2);
      \u0275\u0275text(65, "Your post has been deleted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p", 8);
      \u0275\u0275text(67, " 15min ago ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "li")(69, "a", 5)(70, "span");
      \u0275\u0275element(71, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 7)(73, "span", 2);
      \u0275\u0275text(74, "Post has been updated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 8);
      \u0275\u0275text(76, " 3h ago ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 13)(78, "span", 2);
      \u0275\u0275text(79, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 3);
      \u0275\u0275text(81, "You have new messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul", 4)(83, "li")(84, "a", 5)(85, "span");
      \u0275\u0275element(86, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 7)(88, "span", 2);
      \u0275\u0275text(89, "James Robinson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 8);
      \u0275\u0275text(91, " 10 min ago ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(92, "p-badge", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li")(94, "a", 5)(95, "span");
      \u0275\u0275element(96, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 7)(98, "span", 2);
      \u0275\u0275text(99, "Mary Watson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 8);
      \u0275\u0275text(101, " 15min ago ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "p-badge", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a", 5)(105, "span");
      \u0275\u0275element(106, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 7)(108, "span", 2);
      \u0275\u0275text(109, "Aisha Webb");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 8);
      \u0275\u0275text(111, " 3h ago ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "p-badge", 22);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275property("visible", ctx.visible())("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(5, 3, ctx.authService.currentUser$)) ? 4 : 6, tmp_2_0);
    }
  }, dependencies: [
    ButtonModule,
    DrawerModule,
    Drawer,
    BadgeModule,
    Badge,
    AsyncPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppProfileSidebar, [{
    type: Component,
    args: [{
      selector: "[app-profilesidebar]",
      imports: [
        ButtonModule,
        DrawerModule,
        BadgeModule,
        AsyncPipe
      ],
      template: `
        <p-drawer
            [visible]="visible()"
            (onHide)="onDrawerHide()"
            position="right"
            [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
            styleClass="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div class="flex flex-col mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Welcome</span>
                @if (authService.currentUser$ | async; as user) {
                    <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">{{ displayName(user) }}</span>
                } @else {
                    <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">Guest</span>
                }

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-user text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Profile</span>
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    Lorem ipsum date visale
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="pi pi-money-bill text-xl text-primary"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Billing</span>
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    Amet mimin m\u0131ollit
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-cog text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Settings</span>
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    Exercitation veniam
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            tabindex="0"
                            (click)="logout(); $event.preventDefault()"
                            (keydown.enter)="logout()"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="pi pi-power-off text-xl text-primary"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Sign Out</span>
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    End your portal session
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mt-8 mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Notifications</span>
                <span
                    class="text-surface-500 dark:text-surface-400 font-medium mb-8"
                    >You have 3 notifications</span
                >

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="pi pi-comment text-xl text-primary"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >Your post has new comments</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    5 min ago
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-trash text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >Your post has been deleted</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    15min ago
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="pi pi-folder text-xl text-primary"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >Post has been updated</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    3h ago
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col mt-8 mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Messages</span>
                <span
                    class="text-surface-500 dark:text-surface-400 font-medium mb-8"
                    >You have new messages</span
                >

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <img
                                    src="/demo/images/avatar/circle/avatar-m-8.png"
                                    alt="Avatar"
                                    class="w-8 h-8"
                                />
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >James Robinson</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    10 min ago
                                </p>
                            </div>
                            <p-badge value="3" class="ml-auto"></p-badge>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <img
                                    src="/demo/images/avatar/circle/avatar-f-8.png"
                                    alt="Avatar"
                                    class="w-8 h-8"
                                />
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >Mary Watson</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    15min ago
                                </p>
                            </div>
                            <p-badge value="1" class="ml-auto"></p-badge>
                        </a>
                    </li>
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <img
                                    src="/demo/images/avatar/circle/avatar-f-4.png"
                                    alt="Avatar"
                                    class="w-8 h-8"
                                />
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold"
                                    >Aisha Webb</span
                                >
                                <p
                                    class="text-surface-500 dark:text-surface-400 m-0"
                                >
                                    3h ago
                                </p>
                            </div>
                            <p-badge value="2" class="ml-auto"></p-badge>
                        </a>
                    </li>
                </ul>
            </div>
        </p-drawer>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppProfileSidebar, { className: "AppProfileSidebar", filePath: "src/app/layout/components/app.profilesidebar.ts", lineNumber: 270 });
})();

// src/app/layout/components/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  menuScrollListener;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if ((this.layoutService.isHorizontal() || this.layoutService.isSlim() || this.layoutService.isSlimPlus()) && !this.menuScrollListener) {
        this.menuScrollListener = this.renderer.listen(this.appSidebar.menuContainer.nativeElement, "scroll", (event) => {
          if (this.layoutService.isDesktop()) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarButtonEl = document.querySelector(".topbar-menubutton");
    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarButtonEl?.isSameNode(event.target) || topbarButtonEl?.contains(event.target));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), {
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    }));
    this.layoutService.reset();
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    if (this.menuScrollListener) {
      this.menuScrollListener();
      this.menuScrollListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    const layoutConfig = this.layoutService.layoutConfig();
    const layoutState = this.layoutService.layoutState();
    return {
      "layout-light": !layoutConfig.darkTheme,
      "layout-dark": layoutConfig.darkTheme,
      "layout-colorscheme-menu": layoutConfig.menuTheme === "colorScheme",
      "layout-primarycolor-menu": layoutConfig.menuTheme === "primaryColor",
      "layout-transparent-menu": layoutConfig.menuTheme === "transparent",
      "layout-overlay": layoutConfig.menuMode === "overlay",
      "layout-static": layoutConfig.menuMode === "static",
      "layout-slim": layoutConfig.menuMode === "slim",
      "layout-slim-plus": layoutConfig.menuMode === "slim-plus",
      "layout-horizontal": layoutConfig.menuMode === "horizontal",
      "layout-reveal": layoutConfig.menuMode === "reveal",
      "layout-drawer": layoutConfig.menuMode === "drawer",
      "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
      "layout-overlay-active": layoutState.overlayMenuActive,
      "layout-mobile-active": layoutState.staticMenuMobileActive,
      "layout-sidebar-active": layoutState.sidebarActive,
      "layout-sidebar-anchored": layoutState.anchored
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 9, vars: 1, consts: [[1, "layout-container", 3, "ngClass"], ["app-sidebar", ""], [1, "layout-content-wrapper"], ["app-topbar", ""], [1, "layout-content"], ["app-profilesidebar", ""], [1, "layout-mask", "animate-fadein"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "div", 5)(7, "app-configurator")(8, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    AppTopbar,
    AppSidebar,
    RouterModule,
    RouterOutlet,
    AppConfigurator,
    AppProfileSidebar
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [
        CommonModule,
        AppTopbar,
        AppSidebar,
        RouterModule,
        AppConfigurator,
        AppProfileSidebar
      ],
      template: `<div class="layout-container" [ngClass]="containerClass">
        <div app-sidebar></div>
        <div class="layout-content-wrapper">
            <div app-topbar></div>
            <div class="layout-content">
                <router-outlet></router-outlet>
            </div>
        </div>
        <div app-profilesidebar></div>
        <app-configurator></app-configurator>
        <div class="layout-mask animate-fadein"></div>
    </div> `
    }]
  }], () => [{ type: LayoutService }, { type: Renderer2 }, { type: Router }], { appSidebar: [{
    type: ViewChild,
    args: [AppSidebar]
  }], appTopBar: [{
    type: ViewChild,
    args: [AppTopbar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/components/app.layout.ts", lineNumber: 35 });
})();

// src/app/pages/landing/components/topbarwidget.component.ts
var _c06 = () => ({ top: "80px", right: "0%" });
var TopbarWidget = class _TopbarWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  navigate(id) {
    this.smoothScroll(id);
  }
  smoothScroll(id) {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  }
  static \u0275fac = function TopbarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarWidget, selectors: [["topbar-widget"]], decls: 35, vars: 4, consts: [[1, "flex", "items-center", "justify-between", "relative", "lg:static", "py-12", "px-6", "mx-0", "md:px-16", "lg:px-20", "lg:py-12", "lg:mx-20"], [1, "cursor-pointer", 3, "click"], ["width", "124", "height", "22", "viewBox", "0 0 124 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z", "fill", "var(--primary-color)"], ["d", "M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z", "fill", "var(--primary-color)"], ["d", "M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z", "fill", "var(--primary-color)"], ["d", "M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z", "fill", "var(--primary-color)"], ["d", "M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z", "fill", "var(--primary-color)"], ["d", "M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z", "fill", "var(--primary-color)"], ["d", "M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z", "fill", "var(--primary-color)"], ["d", "M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z", "fill", "var(--primary-color)"], ["d", "M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z", "fill", "var(--primary-color)"], ["pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "pi", "pi-bars", "text-4xl!", "cursor-pointer", "block", "md:!hidden", "text-surface-700", "dark:text-surface-100", 3, "hideOnOutsideClick"], ["id", "menu", 1, "list-wrapper", "items-center", "flex-grow-1", "hidden", "md:flex", "absolute", "md:static", "w-full", "md:px-0", "z-30", "shadow", "md:shadow-none", "animate-fadein", "bg-surface-100", "dark:bg-surface-700", "md:bg-transparent", "md:dark:bg-transparent"], [1, "list-none", "p-4", "md:p-0", "m-0", "ml-auto", "flex", "md:items-center", "select-none", "flex-col", "md:flex-row", "cursor-pointer"], ["pRipple", "", "pStyleClass", "@grandparent", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "cursor-pointer", "block", "md:hidden", "text-700", "text-primary", "absolute", "z-5", "ms-auto", 2, "top", "1.5rem"], [1, "pi", "pi-times", "text-3xl!"], ["pStyleClass", "#menu", "enterFromClass", "hidden", "leaveToClass", "hidden", "pRipple", "", 1, "flex", "m-0", "md:ml-8", "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "leading-normal", 3, "click"], ["pRipple", "", "pStyleClass", "#menu", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "flex", "m-0", "md:ml-8", "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "leading-normal", 3, "click"], [1, "flex", "align-items-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Buy Now", 1, "m-0", "mt-4", "md:mt-0", "md:ml-8"]], template: function TopbarWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_1_listener() {
        return ctx.router.navigate(["/landing"]);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275elementStart(13, "div", 13)(14, "ul", 14)(15, "a", 15);
      \u0275\u0275element(16, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li")(18, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_18_listener() {
        return ctx.navigate("#home");
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li")(22, "a", 18);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_22_listener() {
        return ctx.navigate("#apps");
      });
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Apps");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "li")(26, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_26_listener() {
        return ctx.navigate("#pricing");
      });
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Pricing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li")(30, "a", 17);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_30_listener() {
        return ctx.navigate("#features");
      });
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Features");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "li", 19);
      \u0275\u0275element(34, "button", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c06));
    }
  }, dependencies: [CommonModule, RouterModule, StyleClassModule, StyleClass, ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarWidget, [{
    type: Component,
    args: [{
      selector: "topbar-widget",
      imports: [CommonModule, RouterModule, StyleClassModule, ButtonModule, RippleModule],
      template: `
        <div class="flex items-center justify-between relative lg:static py-12 px-6 mx-0 md:px-16 lg:px-20 lg:py-12 lg:mx-20">
            <a class="cursor-pointer" (click)="router.navigate(['/landing'])">
                <svg width="124" height="22" viewBox="0 0 124 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z" fill="var(--primary-color)" />
                    <path d="M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z" fill="var(--primary-color)" />
                    <path d="M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z" fill="var(--primary-color)" />
                    <path d="M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z" fill="var(--primary-color)" />
                    <path
                        d="M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z"
                        fill="var(--primary-color)"
                    />
                    <path
                        d="M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z"
                        fill="var(--primary-color)"
                    />
                    <path d="M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z" fill="var(--primary-color)" />
                    <path d="M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z" fill="var(--primary-color)" />
                    <path
                        d="M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z"
                        fill="var(--primary-color)"
                    />
                </svg>
            </a>

            <i pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true" class="pi pi-bars text-4xl! cursor-pointer block md:!hidden text-surface-700 dark:text-surface-100"></i>

            <div
                id="menu"
                class="list-wrapper items-center flex-grow-1 hidden md:flex absolute md:static w-full md:px-0 z-30 shadow md:shadow-none animate-fadein bg-surface-100 dark:bg-surface-700 md:bg-transparent md:dark:bg-transparent"
                [style]="{ top: '80px', right: '0%' }"
            >
                <ul class="list-none p-4 md:p-0 m-0 ml-auto flex md:items-center select-none flex-col md:flex-row cursor-pointer">
                    <a pRipple class="cursor-pointer block md:hidden text-700 text-primary absolute z-5 ms-auto" style="top:1.5rem" pStyleClass="@grandparent" enterFromClass="hidden" leaveToClass="hidden">
                        <i class="pi pi-times text-3xl!"></i>
                    </a>
                    <li>
                        <a (click)="navigate('#home')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#apps')" pRipple pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Apps</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#pricing')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Pricing</span>
                        </a>
                    </li>
                    <li>
                        <a (click)="navigate('#features')" pStyleClass="#menu" enterFromClass="hidden" leaveToClass="hidden" pRipple class="flex m-0 md:ml-8 px-0 py-4 text-surface-900 dark:text-surface-0 font-medium leading-normal">
                            <span>Features</span>
                        </a>
                    </li>

                    <li class="flex align-items-center">
                        <button pButton pRipple type="button" label="Buy Now" class="m-0 mt-4 md:mt-0 md:ml-8"></button>
                    </li>
                </ul>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarWidget, { className: "TopbarWidget", filePath: "src/app/pages/landing/components/topbarwidget.component.ts", lineNumber: 76 });
})();

// src/app/pages/landing/components/homewidget.ts
var HomeWidget = class _HomeWidget {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function HomeWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeWidget)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeWidget, selectors: [["home-widget"]], decls: 22, vars: 2, consts: [["id", "home", 1, "grid", "grid-cols-12", "gap-4", "grid-nogutter", "justify-between", "items-center", "mb-12", "py-12", "md:mb-20", "md:py-20"], [1, "col-span-12", "md:col-span-4", "flex", "flex-col", "gap-6", "order-1", "md:order-0", "items-center", "md:items-start", "text-center", "md:text-left"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-bold", "text-4xl"], [1, "block", "text-surface-700", "dark:text-surface-100", "text-lg"], [1, "flex", "flex-wrap", "gap-8", "list-none", "p-0"], [1, "flex", "items-center"], [1, "p-1", "rounded-full", "bg-green-400", "inline-block", "mr-2"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold"], ["pButton", "", "pRipple", "", "type", "button", "label", "Live Preview", "icon", "pi pi-arrow-right", "iconPos", "right", "outlined", "", 1, "w-48"], [1, "col-span-12", "md:col-span-7", "order-0", "md:order-1", "mb-12", "md:mb-0", "rounded"], ["animateEnter", "moveinright", "alt", "", 1, "w-full", "h-full", "rounded", "shadow", "animate-duration-1000", "animate-fadeinright", 3, "src"]], template: function HomeWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Modern, stylish and clean");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "The ultimate collection of design-agnostic, flexible and accessible UI Components.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4)(7, "li", 5);
      \u0275\u0275element(8, "div", 6);
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10, "Javascript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 5);
      \u0275\u0275element(12, "div", 6);
      \u0275\u0275elementStart(13, "span", 7);
      \u0275\u0275text(14, "TypeScript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li", 5);
      \u0275\u0275element(16, "div", 6);
      \u0275\u0275elementStart(17, "span", 7);
      \u0275\u0275text(18, "Vue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(19, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275element(21, "img", 10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "dashboard-dark" : "dashboard-light", ".png"), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeWidget, [{
    type: Component,
    args: [{
      selector: "home-widget",
      standalone: true,
      imports: [ButtonModule, RippleModule, ButtonModule],
      template: `
        <div
            id="home"
            class="grid grid-cols-12 gap-4 grid-nogutter justify-between items-center mb-12 py-12 md:mb-20 md:py-20"
        >
            <div
                class="col-span-12 md:col-span-4 flex flex-col gap-6 order-1 md:order-0 items-center md:items-start text-center md:text-left"
            >
                <span
                    class="block text-surface-900 dark:text-surface-0 font-bold text-4xl"
                    >Modern, stylish and clean</span
                >
                <span
                    class="block text-surface-700 dark:text-surface-100 text-lg"
                    >The ultimate collection of design-agnostic, flexible and
                    accessible UI Components.</span
                >
                <ul class="flex flex-wrap gap-8 list-none p-0">
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >Javascript</span
                        >
                    </li>
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >TypeScript</span
                        >
                    </li>
                    <li class="flex items-center">
                        <div
                            class="p-1 rounded-full bg-green-400 inline-block mr-2"
                        ></div>
                        <span
                            class="text-surface-900 dark:text-surface-0 font-semibold"
                            >Vue</span
                        >
                    </li>
                </ul>
                <button
                    pButton
                    pRipple
                    type="button"
                    label="Live Preview"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="w-48"
                    outlined
                ></button>
            </div>

            <div
                class="col-span-12 md:col-span-7 order-0 md:order-1 mb-12 md:mb-0 rounded"
            >
                <img
                    animateEnter="moveinright"
                    src="/demo/images/landing/{{
                        darkMode ? 'dashboard-dark' : 'dashboard-light'
                    }}.png"
                    alt=""
                    class="w-full h-full rounded shadow animate-duration-1000 animate-fadeinright"
                />
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeWidget, { className: "HomeWidget", filePath: "src/app/pages/landing/components/homewidget.ts", lineNumber: 85 });
})();

// src/app/pages/landing/components/appswidget.ts
var AppsWidget = class _AppsWidget {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function AppsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppsWidget)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppsWidget, selectors: [["apps-widget"]], decls: 14, vars: 4, consts: [["id", "apps", 1, "my-12", "md:my-20"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "block", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "flex", "flex-col", "lg:flex-row", "items-center", "justify-between", "mt-20", "gap-20"], [1, "flex", "flex-col", "items-center"], ["animateEnter", "scalein", "alt", "chat", 1, "w-full", "h-full", "rounded", "border-surface-200", "dark:border-surface-700", "shadow", "animate-duration-500", "animate-scalein", "origin-top", 3, "src"], [1, "block", "text-surface-900", "dark:text-surface-0", "text-lg", "font-semibold", "mt-6"]], template: function AppsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Apps");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275domElement(7, "img", 5);
      \u0275\u0275domElementStart(8, "span", 6);
      \u0275\u0275text(9, "Chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 4);
      \u0275\u0275domElement(11, "img", 5);
      \u0275\u0275domElementStart(12, "span", 6);
      \u0275\u0275text(13, "Mail");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "chat-dark" : "chat-light", ".png"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("src", \u0275\u0275interpolate1("/demo/images/landing/", ctx.darkMode ? "mail-dark" : "mail-light", ".png"), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [ButtonModule, RippleModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppsWidget, [{
    type: Component,
    args: [{
      selector: "apps-widget",
      standalone: true,
      imports: [ButtonModule, RippleModule, ButtonModule],
      template: `
        <div id="apps" class="my-12 md:my-20">
        <span class="text-surface-900 dark:text-surface-0 block font-bold text-5xl mb-6 text-center">Apps</span>
        <span class="text-surface-700 dark:text-surface-100 block text-xl mb-20 text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</span>

        <div class="flex flex-col lg:flex-row items-center justify-between mt-20 gap-20">
        <div class="flex flex-col items-center">
                    <img
                        animateEnter="scalein"
                        src="/demo/images/landing/{{
                            darkMode ? 'chat-dark' : 'chat-light'
                        }}.png"
                        alt="chat"
                       class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top"
                    />
                    <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Chat</span>
                </div>
                <div class="flex flex-col items-center">
                    <img
                        animateEnter="scalein"
                        src="/demo/images/landing/{{
                            darkMode ? 'mail-dark' : 'mail-light'
                        }}.png"
                        alt="chat"
                       class="w-full h-full rounded border-surface-200 dark:border-surface-700 shadow animate-duration-500 animate-scalein origin-top"
                    />
                    <span class="block text-surface-900 dark:text-surface-0 text-lg font-semibold mt-6">Mail</span>
                </div>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppsWidget, { className: "AppsWidget", filePath: "src/app/pages/landing/components/appswidget.ts", lineNumber: 44 });
})();

// src/app/pages/landing/components/pricingwidget.ts
var PricingWidget = class _PricingWidget {
  static \u0275fac = function PricingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingWidget, selectors: [["pricing-widget"]], decls: 56, vars: 0, consts: [["id", "pricing", 1, "my-12", "py-12", "md:my-20", "md:py-20"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "flex", "flex-col", "lg:flex-row", "gap-4", "grid-nogutter", "justify-center", "mt-20"], [1, "w-full", "lg:w-1/2", "xl:w-1/3"], [1, "p-4", "h-full"], [1, "shadow", "p-12", "h-full", "flex", "flex-col", "bg-surface-0", "dark:bg-surface-900", 2, "border-radius", "6px"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-medium", "text-xl", "mb-2", "text-center"], [1, "font-bold", "block", "text-2xl", "text-surface-900", "dark:text-surface-0", "text-center"], [1, "list-none", "p-0", "m-0", "flex-grow-1", "mt-12"], [1, "flex", "items-center", "mb-4"], [1, "pi", "pi-check", "text-green-500", "mr-2"], [1, "pi", "pi-times", "text-red-500", "mr-2"], ["pButton", "", "pRipple", "", "label", "Choose Plan", "outlined", "", "icon", "pi pi-arrow-right", "iconPos", "right", 1, "px-8", "w-full", "mt-12"]], template: function PricingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Pricing Plans ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, " Choose a plan that works best for you and your team. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10, "Basic Licence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "$29");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul", 9)(14, "li", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Up to 10 Active Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li", 10);
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Up to 30 Project Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li", 10);
      \u0275\u0275element(23, "i", 11);
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Analytics Module");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li", 10);
      \u0275\u0275element(27, "i", 12);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Finance Module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(30, "button", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 4)(32, "div", 5)(33, "div", 6)(34, "span", 7);
      \u0275\u0275text(35, "Extended Licence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 8);
      \u0275\u0275text(37, "$49");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 9)(39, "li", 10);
      \u0275\u0275element(40, "i", 11);
      \u0275\u0275elementStart(41, "span");
      \u0275\u0275text(42, "Up to 10 Active Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li", 10);
      \u0275\u0275element(44, "i", 11);
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46, "Up to 30 Project Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li", 10);
      \u0275\u0275element(48, "i", 11);
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "Analytics Module");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li", 10);
      \u0275\u0275element(52, "i", 12);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Finance Module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(55, "button", 13);
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [ButtonModule, ButtonDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingWidget, [{
    type: Component,
    args: [{
      selector: "pricing-widget",
      imports: [ButtonModule],
      template: `
        <div id="pricing" class="my-12 py-12 md:my-20 md:py-20">
            <div
                class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-6 text-center"
            >
                Pricing Plans
            </div>
            <div
                class="text-surface-700 dark:text-surface-100 text-xl mb-20 text-center leading-normal"
            >
                Choose a plan that works best for you and your team.
            </div>
            <div
                class="flex flex-col lg:flex-row gap-4 grid-nogutter justify-center mt-20"
            >
                <div class="w-full lg:w-1/2 xl:w-1/3">
                    <div class="p-4 h-full">
                        <div
                            class="shadow p-12 h-full flex flex-col bg-surface-0 dark:bg-surface-900"
                            style="border-radius: 6px"
                        >
                            <span
                                class="text-surface-900 dark:text-surface-0 block font-medium text-xl mb-2 text-center"
                                >Basic Licence</span
                            >
                            <span
                                class="font-bold block text-2xl text-surface-900 dark:text-surface-0 text-center"
                                >$29</span
                            >

                            <ul class="list-none p-0 m-0 flex-grow-1 mt-12">
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 10 Active Users</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 30 Project Integrations</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Analytics Module</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-times text-red-500 mr-2"
                                    ></i>
                                    <span>Finance Module</span>
                                </li>
                            </ul>

                            <button
                                pButton
                                pRipple
                                label="Choose Plan"
                                class="px-8 w-full mt-12"
                                outlined
                                icon="pi pi-arrow-right"
                                iconPos="right"
                            ></button>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2 xl:w-1/3">
                    <div class="p-4 h-full">
                        <div
                            class="shadow p-12 h-full flex flex-col bg-surface-0 dark:bg-surface-900"
                            style="border-radius: 6px"
                        >
                            <span
                                class="text-surface-900 dark:text-surface-0 block font-medium text-xl mb-2 text-center"
                                >Extended Licence</span
                            >
                            <span
                                class="font-bold block text-2xl text-surface-900 dark:text-surface-0 text-center"
                                >$49</span
                            >

                            <ul class="list-none p-0 m-0 flex-grow-1 mt-12">
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 10 Active Users</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Up to 30 Project Integrations</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-check text-green-500 mr-2"
                                    ></i>
                                    <span>Analytics Module</span>
                                </li>
                                <li class="flex items-center mb-4">
                                    <i
                                        class="pi pi-times text-red-500 mr-2"
                                    ></i>
                                    <span>Finance Module</span>
                                </li>
                            </ul>

                            <button
                                pButton
                                pRipple
                                label="Choose Plan"
                                class="px-8 w-full mt-12"
                                outlined
                                icon="pi pi-arrow-right"
                                iconPos="right"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingWidget, { className: "PricingWidget", filePath: "src/app/pages/landing/components/pricingwidget.ts", lineNumber: 135 });
})();

// src/app/pages/landing/components/featureswidget.ts
var FeaturesWidget = class _FeaturesWidget {
  static \u0275fac = function FeaturesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesWidget, selectors: [["features-widget"]], decls: 62, vars: 0, consts: [["id", "features", 1, "my-12", "py-12", "md:my-20", "md:py-20"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-bold", "text-5xl", "mb-6", "text-center"], [1, "text-surface-700", "dark:text-surface-100", "block", "text-xl", "mb-20", "text-center", "leading-normal"], [1, "grid", "grid-cols-12", "gap-4", "mt-20"], [1, "col-span-12", "md:col-span-6", "xl:col-span-3", "flex", "justify-center", "p-4"], [1, "box", "p-6", "w-full", "bg-surface-0", "dark:bg-surface-900", "border-surface-200", "dark:border-surface-700", "border", "rounded"], ["src", "/demo/images/landing/icon-components.svg", "alt", "components icon", 1, "block", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-semibold", "mb-4", "text-lg"], [1, "m-0", "text-secondary", "text-surface-700", "dark:text-surface-100"], ["src", "/demo/images/landing/icon-community.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-productivity.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-accessibility.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-support.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-mobile.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-theme.svg", "alt", "components icon", 1, "block", "mb-4"], ["src", "/demo/images/landing/icon-ts.svg", "alt", "components icon", 1, "block", "mb-4"]], template: function FeaturesWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "span", 2);
      \u0275\u0275text(4, "PrimeTek Informatics is the author of PrimeVue, a UI Component vendor with well known vastly popular projects including PrimeFaces, PrimeNG and PrimeReact.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4)(7, "div", 5);
      \u0275\u0275domElement(8, "img", 6);
      \u0275\u0275domElementStart(9, "span", 7);
      \u0275\u0275text(10, "90+ UI Components");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 8);
      \u0275\u0275text(12, " The ultimate set of UI Components to assist you with 90+ impressive Vue Components. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(13, "div", 4)(14, "div", 5);
      \u0275\u0275domElement(15, "img", 9);
      \u0275\u0275domElementStart(16, "span", 7);
      \u0275\u0275text(17, "Community");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 8);
      \u0275\u0275text(19, " Connect with the other open source community members, collaborate and have a voice in the project roadmap. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "div", 4)(21, "div", 5);
      \u0275\u0275domElement(22, "img", 10);
      \u0275\u0275domElementStart(23, "span", 7);
      \u0275\u0275text(24, "Productivity");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "p", 8);
      \u0275\u0275text(26, " Boost your productivity by achieving more in less time and accomplish amazing results. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(27, "div", 4)(28, "div", 5);
      \u0275\u0275domElement(29, "img", 11);
      \u0275\u0275domElementStart(30, "span", 7);
      \u0275\u0275text(31, "Accessibility");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "p", 8);
      \u0275\u0275text(33, " The ultimate set of UI Components to assist you with 90+ impressive Vue Components. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(34, "div", 4)(35, "div", 5);
      \u0275\u0275domElement(36, "img", 12);
      \u0275\u0275domElementStart(37, "span", 7);
      \u0275\u0275text(38, "Enterprise Support");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "p", 8);
      \u0275\u0275text(40, " Exceptional support service featuring response within 1 business day and option to request enhancements and new features for the library. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(41, "div", 4)(42, "div", 5);
      \u0275\u0275domElement(43, "img", 13);
      \u0275\u0275domElementStart(44, "span", 7);
      \u0275\u0275text(45, "Mobile");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p", 8);
      \u0275\u0275text(47, " First class support for responsive design led by touch optimized elements. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(48, "div", 4)(49, "div", 5);
      \u0275\u0275domElement(50, "img", 14);
      \u0275\u0275domElementStart(51, "span", 7);
      \u0275\u0275text(52, "Themes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "p", 8);
      \u0275\u0275text(54, " Built on a design-agnostic api, choose from a vast amount of themes such as material, bootstrap, custom or develop your own. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(55, "div", 4)(56, "div", 5);
      \u0275\u0275domElement(57, "img", 15);
      \u0275\u0275domElementStart(58, "span", 7);
      \u0275\u0275text(59, "Typescript");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "p", 8);
      \u0275\u0275text(61, " Top-notch support for Typescript with types and tooling assistance. ");
      \u0275\u0275domElementEnd()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesWidget, [{
    type: Component,
    args: [{
      selector: "features-widget",
      standalone: true,
      imports: [],
      template: `
        <div id="features" class="my-12 py-12 md:my-20 md:py-20">
            <span
                class="text-surface-900 dark:text-surface-0 block font-bold text-5xl mb-6 text-center"
                >Features</span
            >
            <span
                class="text-surface-700 dark:text-surface-100 block text-xl mb-20 text-center leading-normal"
                >PrimeTek Informatics is the author of PrimeVue, a UI Component
                vendor with well known vastly popular projects including
                PrimeFaces, PrimeNG and PrimeReact.</span
            >

            <div class="grid grid-cols-12 gap-4 mt-20">
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-components.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >90+ UI Components</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            The ultimate set of UI Components to assist you with
                            90+ impressive Vue Components.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-community.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Community</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Connect with the other open source community
                            members, collaborate and have a voice in the project
                            roadmap.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-productivity.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Productivity</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Boost your productivity by achieving more in less
                            time and accomplish amazing results.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-accessibility.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Accessibility</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            The ultimate set of UI Components to assist you with
                            90+ impressive Vue Components.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-support.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Enterprise Support</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Exceptional support service featuring response
                            within 1 business day and option to request
                            enhancements and new features for the library.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-mobile.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Mobile</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            First class support for responsive design led by
                            touch optimized elements.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-theme.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Themes</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Built on a design-agnostic api, choose from a vast
                            amount of themes such as material, bootstrap, custom
                            or develop your own.
                        </p>
                    </div>
                </div>
                <div
                    class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center p-4"
                >
                    <div
                        class="box p-6 w-full bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-700 border rounded"
                    >
                        <img
                            src="/demo/images/landing/icon-ts.svg"
                            alt="components icon"
                            class="block mb-4"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 block font-semibold mb-4 text-lg"
                            >Typescript</span
                        >
                        <p
                            class="m-0 text-secondary text-surface-700 dark:text-surface-100"
                        >
                            Top-notch support for Typescript with types and
                            tooling assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesWidget, { className: "FeaturesWidget", filePath: "src/app/pages/landing/components/featureswidget.ts", lineNumber: 212 });
})();

// src/app/pages/landing/components/footerwidget.ts
var FooterWidget = class _FooterWidget {
  static \u0275fac = function FooterWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterWidget, selectors: [["footer-widget"]], decls: 57, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-4", "justify-between", "my-12", "pt-6", "md:my-20"], [1, "col-span-12", "md:col-span-2", "text-center", "md:text-left"], ["href", "#", 1, "cursor-pointer"], ["width", "124", "height", "22", "viewBox", "0 0 124 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z", "fill", "var(--primary-color)"], ["d", "M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z", "fill", "var(--primary-color)"], ["d", "M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z", "fill", "var(--primary-color)"], ["d", "M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z", "fill", "var(--primary-color)"], ["d", "M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z", "fill", "var(--primary-color)"], ["d", "M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z", "fill", "var(--primary-color)"], ["d", "M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z", "fill", "var(--primary-color)"], ["d", "M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z", "fill", "var(--primary-color)"], ["d", "M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z", "fill", "var(--primary-color)"], [1, "col-span-12", "md:col-span-10", "lg:col-span-7"], [1, "grid", "grid-cols-12", "gap-4", "text-center", "md:text-left"], [1, "col-span-12", "md:col-span-3"], [1, "font-medium", "text-xl", "leading-normal", "mb-4", "text-surface-900", "dark:text-surface-0"], [1, "leading-normal", "block", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "block", "cursor-pointer", "text-surface-700", "dark:text-surface-100"], [1, "col-span-12", "md:col-span-3", "mt-6", "md:mt-0"]], template: function FooterWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3);
      \u0275\u0275domElement(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "h4", 16);
      \u0275\u0275text(17, " Company ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "a", 17);
      \u0275\u0275text(19, "About Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "a", 17);
      \u0275\u0275text(21, "News");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "a", 17);
      \u0275\u0275text(23, "Investor Relations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "a", 17);
      \u0275\u0275text(25, "Careers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "a", 18);
      \u0275\u0275text(27, "Media Kit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "div", 19)(29, "h4", 16);
      \u0275\u0275text(30, " Resources ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "a", 17);
      \u0275\u0275text(32, "Get Started");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "a", 17);
      \u0275\u0275text(34, "Learn");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "a", 18);
      \u0275\u0275text(36, "Case Studies");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "div", 19)(38, "h4", 16);
      \u0275\u0275text(39, " Community ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "a", 17);
      \u0275\u0275text(41, "Discord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "a", 17);
      \u0275\u0275text(43, "Events");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "a", 17);
      \u0275\u0275text(45, "FAQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "a", 18);
      \u0275\u0275text(47, "Blog");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 19)(49, "h4", 16);
      \u0275\u0275text(50, " Legal ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "a", 17);
      \u0275\u0275text(52, "Brand Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "a", 17);
      \u0275\u0275text(54, "Privacy Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "a", 18);
      \u0275\u0275text(56, "Terms of Service");
      \u0275\u0275domElementEnd()()()()();
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterWidget, [{
    type: Component,
    args: [{
      selector: "footer-widget",
      standalone: true,
      imports: [RouterModule],
      template: `
        <div
            class="grid grid-cols-12 gap-4 justify-between my-12 pt-6 md:my-20"
        >
            <div class="col-span-12 md:col-span-2 text-center md:text-left">
                <a class="cursor-pointer" href="#">
                    <svg
                        width="124"
                        height="22"
                        viewBox="0 0 124 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.4851 0L0 20.9465H3.53702L10.4856 6.07843L17.2944 20.9465H20.9715L10.4851 0Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M13.84 15.7927L16.2077 21.0016H11.7682L13.84 15.7927Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M9.04645 21.0016L6.67875 15.7927L4.60701 21.0016H9.04645Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M40.9033 14.5217H34.771L33.1753 18.0007H30.8467L37.9346 2.77661L44.772 18.0007H42.4062L40.9033 14.5217ZM40.022 12.49L37.8975 7.61938L35.6709 12.49H40.022Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M52.4927 12.1838V18.0007H50.3311V3.67651H52.7803C53.9802 3.67651 54.8862 3.76001 55.4985 3.927C56.117 4.09399 56.6613 4.40942 57.1314 4.87329C57.954 5.67733 58.3652 6.69165 58.3652 7.91626C58.3652 9.22746 57.9261 10.2665 57.0479 11.0334C56.1696 11.8004 54.9852 12.1838 53.4946 12.1838H52.4927ZM52.4927 10.1799H53.2998C55.2852 10.1799 56.2778 9.4161 56.2778 7.88843C56.2778 6.41024 55.2542 5.67114 53.207 5.67114H52.4927V10.1799Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M63.6367 10.7737C63.6367 8.75741 64.3758 7.02563 65.854 5.57837C67.326 4.1311 69.0949 3.40747 71.1607 3.40747C73.2017 3.40747 74.952 4.13729 76.4116 5.59692C77.8775 7.05656 78.6104 8.80998 78.6104 10.8572C78.6104 12.9167 77.8744 14.664 76.4024 16.0989C74.9242 17.54 73.1398 18.2605 71.0493 18.2605C69.2001 18.2605 67.5394 17.6204 66.0674 16.3401C64.447 14.9237 63.6367 13.0683 63.6367 10.7737ZM65.8169 10.8015C65.8169 12.3848 66.3488 13.6868 67.4126 14.7073C68.4702 15.7278 69.6918 16.238 71.0772 16.238C72.5801 16.238 73.848 15.7185 74.8809 14.6794C75.9138 13.628 76.4302 12.3477 76.4302 10.8386C76.4302 9.31095 75.9199 8.03068 74.8994 6.9978C73.8851 5.95874 72.6296 5.43921 71.1328 5.43921C69.6423 5.43921 68.3836 5.95874 67.357 6.9978C66.3303 8.0245 65.8169 9.2924 65.8169 10.8015Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M87.2495 3.67651V15.969H91.4615V18.0007H85.0879V3.67651H87.2495Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M99.4327 3.67651V15.969H103.645V18.0007H97.271V3.67651H99.4327Z"
                            fill="var(--primary-color)"
                        />
                        <path
                            d="M108.146 10.7737C108.146 8.75741 108.885 7.02563 110.363 5.57837C111.835 4.1311 113.604 3.40747 115.67 3.40747C117.711 3.40747 119.461 4.13729 120.921 5.59692C122.387 7.05656 123.12 8.80998 123.12 10.8572C123.12 12.9167 122.384 14.664 120.912 16.0989C119.433 17.54 117.649 18.2605 115.559 18.2605C113.709 18.2605 112.049 17.6204 110.577 16.3401C108.956 14.9237 108.146 13.0683 108.146 10.7737ZM110.326 10.8015C110.326 12.3848 110.858 13.6868 111.922 14.7073C112.98 15.7278 114.201 16.238 115.586 16.238C117.089 16.238 118.357 15.7185 119.39 14.6794C120.423 13.628 120.94 12.3477 120.94 10.8386C120.94 9.31095 120.429 8.03068 119.409 6.9978C118.394 5.95874 117.139 5.43921 115.642 5.43921C114.152 5.43921 112.893 5.95874 111.866 6.9978C110.84 8.0245 110.326 9.2924 110.326 10.8015Z"
                            fill="var(--primary-color)"
                        />
                    </svg>
                </a>
            </div>

            <div class="col-span-12 md:col-span-10 lg:col-span-7">
                <div class="grid grid-cols-12 gap-4 text-center md:text-left">
                    <div class="col-span-12 md:col-span-3">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Company
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >About Us</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >News</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Investor Relations</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Careers</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Media Kit</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Resources
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Get Started</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Learn</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Case Studies</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Community
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Discord</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Events</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >FAQ</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Blog</a
                        >
                    </div>

                    <div class="col-span-12 md:col-span-3 mt-6 md:mt-0">
                        <h4
                            class="font-medium text-xl leading-normal mb-4 text-surface-900 dark:text-surface-0"
                        >
                            Legal
                        </h4>
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Brand Policy</a
                        >
                        <a
                            class="leading-normal block cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                            >Privacy Policy</a
                        >
                        <a
                            class="leading-normal block cursor-pointer text-surface-700 dark:text-surface-100"
                            >Terms of Service</a
                        >
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterWidget, { className: "FooterWidget", filePath: "src/app/pages/landing/components/footerwidget.ts", lineNumber: 159 });
})();

// src/app/pages/landing/landing.ts
var _c07 = () => ({ top: "-200px", left: "-700px" });
var _c14 = () => ({ top: "50px", right: "-800px", transform: "rotate(60deg)" });
var Landing = class _Landing {
  router;
  layoutService;
  subscription;
  darkMode = false;
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.darkMode = config.colorScheme === "dark" || config.colorScheme === "dim" ? true : false;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 12, vars: 7, consts: [[1, "relative", "overflow-hidden", "flex", "flex-col", "justify-center"], [1, "bg-circle", "opacity-50"], [1, "bg-circle", "hidden", "lg:flex"], [1, "landing-wrapper"], [1, "py-6", "px-6", "mx-0", "md:mx-12", "lg:mx-20", "lg:px-20", "z-20"], [3, "simple"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "topbar-widget");
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "home-widget")(7, "apps-widget")(8, "pricing-widget")(9, "features-widget")(10, "footer-widget");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(11, "app-configurator", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c07));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c14));
      \u0275\u0275advance(9);
      \u0275\u0275property("simple", true);
    }
  }, dependencies: [
    RouterModule,
    ButtonModule,
    AppConfigurator,
    TopbarWidget,
    HomeWidget,
    AppsWidget,
    PricingWidget,
    FeaturesWidget,
    FooterWidget
  ], styles: ["\n\n.bg-circle[_ngcontent-%COMP%] {\n  width: 1000px;\n  height: 1000px;\n  border-radius: 50%;\n  background-image:\n    linear-gradient(\n      140deg,\n      var(--primary-color),\n      var(--surface-ground) 80%);\n  position: absolute;\n  opacity: 0.25;\n  z-index: -1;\n}\n/*# sourceMappingURL=landing.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [
      RouterModule,
      ButtonModule,
      AppConfigurator,
      TopbarWidget,
      HomeWidget,
      AppsWidget,
      PricingWidget,
      FeaturesWidget,
      FooterWidget
    ], template: `
        <div class="relative overflow-hidden flex flex-col justify-center">
            <div
                class="bg-circle opacity-50"
                [style]="{ top: '-200px', left: '-700px' }"
            ></div>
            <div
                class="bg-circle hidden lg:flex"
                [style]="{
                    top: '50px',
                    right: '-800px',
                    transform: 'rotate(60deg)',
                }"
            ></div>
            <div class="landing-wrapper">
                <topbar-widget />
                <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 z-20">
                    <home-widget />
                    <apps-widget />
                    <pricing-widget />
                    <features-widget />
                    <footer-widget />
                </div>
            </div>
        </div>

        <app-configurator [simple]="true"/>
    `, styles: ["/* angular:styles/component:scss;d2ca9a150c75d52183f0af9bd1e4f590ccc41275d4df7e464395420363d6ab72;C:/Users/Mostafa Gaafar/source/repos/Test/Rahhala-Portal/src/app/pages/landing/landing.ts */\n.bg-circle {\n  width: 1000px;\n  height: 1000px;\n  border-radius: 50%;\n  background-image:\n    linear-gradient(\n      140deg,\n      var(--primary-color),\n      var(--surface-ground) 80%);\n  position: absolute;\n  opacity: 0.25;\n  z-index: -1;\n}\n/*# sourceMappingURL=landing.css.map */\n"] }]
  }], () => [{ type: Router }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 74 });
})();

// src/app/pages/notfound/notfound.ts
var _c08 = () => ["/"];
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 12, vars: 3, consts: [["viewBox", "0 0 960 540", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "preserveAspectRatio", "none", 1, "min-h-screen", "min-w-screen", "fixed", "left-0", 2, "bottom", "-10rem"], ["x", "0", "y", "0", "width", "960", "height", "540", "fill", "var(--surface-ground)"], ["d", "M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z", "fill", "var(--p-orange-500)", "stroke-linecap", "round", "stroke-linejoin", "miter"], [1, "px-8", "min-h-screen", "flex", "justify-center", "items-center"], [1, "z-10", "text-center"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-8xl", "mb-6"], [1, "leading-normal", "mt-0", "mb-8", "text-surface-700", "dark:text-surface-100", "text-xl", "font-medium"], ["severity", "warn", "raised", "", 3, "routerLink"], [3, "simple"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0);
      \u0275\u0275element(1, "rect", 1)(2, "path", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "Oops!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "There is nothing here");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-button", 7);
      \u0275\u0275text(10, "Go to Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(11, "app-configurator", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c08));
      \u0275\u0275advance(2);
      \u0275\u0275property("simple", true);
    }
  }, dependencies: [RouterModule, RouterLink, ButtonModule, Button, AppConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notfound, [{
    type: Component,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule, ButtonModule, AppConfigurator],
      template: `
        <svg viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="min-h-screen min-w-screen fixed left-0" style="bottom:-10rem" preserveAspectRatio="none">
            <rect x="0" y="0" width="960" height="540" fill="var(--surface-ground)"></rect>
            <path
                d="M0 331L26.7 321C53.3 311 106.7 291 160 291C213.3 291 266.7 311 320 329.5C373.3 348 426.7 365 480 373.2C533.3 381.3 586.7 380.7 640 373.8C693.3 367 746.7 354 800 341.2C853.3 328.3 906.7 315.7 933.3 309.3L960 303L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                fill="var(--p-orange-500)"
                stroke-linecap="round"
                stroke-linejoin="miter"
            ></path>
        </svg>
        <div class="px-8 min-h-screen flex justify-center items-center">
            <div class="z-10 text-center">
                <div class="text-surface-900 dark:text-surface-0 font-bold text-8xl mb-6">Oops!</div>
                <p class="leading-normal mt-0 mb-8 text-surface-700 dark:text-surface-100 text-xl font-medium">There is nothing here</p>
                <p-button [routerLink]="['/']" severity="warn" raised>Go to Dashboard</p-button>
            </div>
        </div>
        <app-configurator [simple]="true" />
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 30 });
})();

// src/app/core/guards/auth.guard.ts
var authGuard = (_route, state2) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  void router.navigate(["/auth/login"], {
    queryParams: { returnUrl: state2.url }
  });
  return false;
};

// src/app.routes.ts
var appRoutes = [
  {
    path: "",
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "home",
        loadComponent: () => import("./chunk-MMXQYA34.js").then((c2) => c2.EcommerceDashboard),
        data: { breadcrumb: "Home" }
      },
      {
        path: "dashboard-ecommerce",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "orders",
        loadComponent: () => import("./chunk-6QYJM2PG.js").then((c2) => c2.PortalOrders),
        data: { breadcrumb: "My Orders" }
      }
    ]
  },
  { path: "landing", component: Landing },
  { path: "notfound", component: Notfound },
  {
    path: "auth",
    loadChildren: () => import("./chunk-P3YVSVJH.js")
  },
  { path: "**", redirectTo: "/notfound" }
];

// src/app/core/interceptors/auth.interceptor.ts
function shouldSkipBearer(url) {
  const u = url.toLowerCase();
  return u.includes("/auth/login") || u.includes("/auth/register") || u.includes("/refresh-token") || u.includes("/authenticationmanagement/login") || u.includes("send-login-otp") || u.includes("send-register-otp") || u.includes("forget-password") || u.includes("resend-otp") || u.includes("verify-forget-password-otp");
}
var authInterceptor = (req, next) => {
  const tokenService = inject(TokenService);
  const authService = inject(AuthService);
  const accessToken = tokenService.getAccessToken();
  if (shouldSkipBearer(req.url)) {
    return next(req);
  }
  let outgoing = req;
  if (accessToken) {
    outgoing = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
  return next(outgoing).pipe(catchError((error) => {
    if (error.status === 401 && tokenService.getRefreshToken()) {
      return authService.refreshToken().pipe(switchMap(() => {
        const newToken = tokenService.getAccessToken();
        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${newToken}`
          }
        });
        return next(clonedReq);
      }), catchError((refreshError) => {
        authService.logout();
        return throwError(() => refreshError);
      }));
    }
    return throwError(() => error);
  }));
};

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(catchError((error) => {
    let errorMessage = "An error occurred";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = error.error?.message ?? "Bad Request";
          break;
        case 401:
          errorMessage = req.url.toLowerCase().includes("/authenticationmanagement/login") ? "Invalid email or password." : "Unauthorized. Please login again.";
          break;
        case 403:
          errorMessage = "Access Denied";
          void router.navigate(["/auth/access"]);
          break;
        case 404:
          errorMessage = "Resource not found";
          break;
        case 500:
          errorMessage = "Internal Server Error";
          break;
        default:
          errorMessage = error.error?.message ?? `Error Code: ${error.status}`;
      }
    }
    console.error("HTTP Error:", errorMessage);
    return throwError(() => ({
      status: error.status,
      message: errorMessage
    }));
  }));
};

// src/app.config.ts
var appConfig = {
  providers: [
    { provide: APP_CONFIG, useValue: appConfigValue },
    MessageService,
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, errorInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } } })
  ]
};

// src/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.3.12
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
