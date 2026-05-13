import {
  Tag,
  TagModule
} from "./chunk-QMCHGIWT.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-ICBBY4YD.js";
import {
  Dialog,
  DialogModule,
  Toast,
  ToastModule
} from "./chunk-4PBK2KDQ.js";
import {
  Select,
  SelectModule,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-BSYD5FPP.js";
import "./chunk-HNWUDQ2V.js";
import {
  RouterModule
} from "./chunk-P5EYV27S.js";
import {
  APP_CONFIG,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-F4KDDWFR.js";
import "./chunk-E72VF5AX.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  ButtonDirective,
  ButtonModule,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  HttpParams,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  MessageService,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Ripple,
  RippleModule,
  SharedModule
} from "./chunk-VKOXGSWD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  catchError,
  effect,
  inject,
  input,
  map,
  model,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-74N5S3WL.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  http = inject(HttpClient);
  config = inject(APP_CONFIG);
  apiUrl = `${this.config.apiUrl}/v1`;
  /**
   * GET /api/v1/OrderManagement?page=&limit=
   * Optional orderStatus preserved for UI filter if the API supports it.
   */
  getOrderManagement(page, limit, orderStatus) {
    let params = new HttpParams().set("page", String(page)).set("limit", String(limit));
    if (orderStatus != null && !Number.isNaN(orderStatus)) {
      params = params.set("orderStatus", String(orderStatus));
    }
    return this.http.get(`${this.apiUrl}/OrderManagement`, { params }).pipe(map((body) => this.normalizeOrderManagementPage(body)), catchError((err) => {
      console.error("Order OrderManagement error:", err);
      return throwError(() => err);
    }));
  }
  normalizeOrderManagementPage(res) {
    if (Array.isArray(res)) {
      const items = res;
      return { items, totalRecords: items.length };
    }
    if (res && typeof res === "object") {
      const o = res;
      const listKeys = ["data", "items", "result", "results", "dataList", "orders", "records"];
      let items;
      for (const key of listKeys) {
        const v = o[key];
        if (Array.isArray(v)) {
          items = v;
          break;
        }
      }
      const totalKeys = ["totalCount", "total", "totalRecords", "count", "recordCount"];
      let total;
      for (const key of totalKeys) {
        const v = o[key];
        if (typeof v === "number" && !Number.isNaN(v)) {
          total = v;
          break;
        }
      }
      if (items) {
        return { items, totalRecords: total ?? items.length };
      }
    }
    return { items: [], totalRecords: 0 };
  }
  /** GET /api/v1/OrderManagement/{orderId}/details */
  getOrderDetails(orderId) {
    return this.http.get(`${this.apiUrl}/OrderManagement/${orderId}/details`).pipe(catchError((err) => {
      console.error("Order details error:", err);
      return throwError(() => err);
    }));
  }
  /** POST /api/v1/Order/cancel/{orderId} */
  cancelOrder(orderId, cancelReason) {
    return this.http.post(`${this.apiUrl}/Order/cancel/${orderId}`, { cancelReason }).pipe(catchError((err) => {
      console.error("Order cancel error:", err);
      return throwError(() => err);
    }));
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/iftalabel/index.mjs
var style = "\n    .p-iftalabel {\n        display: block;\n        position: relative;\n    }\n\n    .p-iftalabel label {\n        position: absolute;\n        pointer-events: none;\n        top: dt('iftalabel.top');\n        transition-property: all;\n        transition-timing-function: ease;\n        line-height: 1;\n        font-size: dt('iftalabel.font.size');\n        font-weight: dt('iftalabel.font.weight');\n        inset-inline-start: dt('iftalabel.position.x');\n        color: dt('iftalabel.color');\n        transition-duration: dt('iftalabel.transition.duration');\n    }\n\n    .p-iftalabel .p-inputtext,\n    .p-iftalabel .p-textarea,\n    .p-iftalabel .p-select-label,\n    .p-iftalabel .p-multiselect-label,\n    .p-iftalabel .p-multiselect-label:has(.p-chip),\n    .p-iftalabel .p-autocomplete-input-multiple,\n    .p-iftalabel .p-cascadeselect-label,\n    .p-iftalabel .p-treeselect-label {\n        padding-block-start: dt('iftalabel.input.padding.top');\n        padding-block-end: dt('iftalabel.input.padding.bottom');\n    }\n\n    .p-iftalabel:has(.p-invalid) label {\n        color: dt('iftalabel.invalid.color');\n    }\n\n    .p-iftalabel:has(input:focus) label,\n    .p-iftalabel:has(input:-webkit-autofill) label,\n    .p-iftalabel:has(textarea:focus) label,\n    .p-iftalabel:has(.p-inputwrapper-focus) label {\n        color: dt('iftalabel.focus.color');\n    }\n\n    .p-iftalabel .p-inputicon {\n        top: dt('iftalabel.input.padding.top');\n        transform: translateY(25%);\n        margin-top: 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-iftalabel.mjs
var _c0 = ["*"];
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-iftalabel:has(.ng-invalid.ng-dirty) label {
        color: dt('iftalabel.invalid.color');
    }
`
);
var classes = {
  root: "p-iftalabel"
};
var IftaLabelStyle = class _IftaLabelStyle extends BaseStyle {
  name = "iftalabel";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IftaLabelStyle_BaseFactory;
    return function IftaLabelStyle_Factory(__ngFactoryType__) {
      return (\u0275IftaLabelStyle_BaseFactory || (\u0275IftaLabelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_IftaLabelStyle)))(__ngFactoryType__ || _IftaLabelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _IftaLabelStyle,
    factory: _IftaLabelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabelStyle, [{
    type: Injectable
  }], null, null);
})();
var IftaLabelClasses;
(function(IftaLabelClasses2) {
  IftaLabelClasses2["root"] = "p-iftalabel";
})(IftaLabelClasses || (IftaLabelClasses = {}));
var IFTALABEL_INSTANCE = new InjectionToken("IFTALABEL_INSTANCE");
var IftaLabel = class _IftaLabel extends BaseComponent {
  _componentStyle = inject(IftaLabelStyle);
  $pcIftaLabel = inject(IFTALABEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IftaLabel_BaseFactory;
    return function IftaLabel_Factory(__ngFactoryType__) {
      return (\u0275IftaLabel_BaseFactory || (\u0275IftaLabel_BaseFactory = \u0275\u0275getInheritedFactory(_IftaLabel)))(__ngFactoryType__ || _IftaLabel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IftaLabel,
    selectors: [["p-iftalabel"], ["p-iftaLabel"], ["p-ifta-label"]],
    hostVars: 2,
    hostBindings: function IftaLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([IftaLabelStyle, {
      provide: IFTALABEL_INSTANCE,
      useExisting: _IftaLabel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _IftaLabel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IftaLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabel, [{
    type: Component,
    args: [{
      selector: "p-iftalabel, p-iftaLabel, p-ifta-label",
      standalone: true,
      imports: [BindModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [IftaLabelStyle, {
        provide: IFTALABEL_INSTANCE,
        useExisting: IftaLabel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: IftaLabel
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, null);
})();
var IftaLabelModule = class _IftaLabelModule {
  static \u0275fac = function IftaLabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IftaLabelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IftaLabelModule,
    imports: [IftaLabel, CommonModule, SharedModule, RouterModule],
    exports: [IftaLabel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [IftaLabel, CommonModule, SharedModule, RouterModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IftaLabelModule, [{
    type: NgModule,
    args: [{
      imports: [IftaLabel, CommonModule, SharedModule, RouterModule],
      exports: [IftaLabel, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/portal/portal-order-details-dialog.ts
var _c02 = () => ({ width: "50rem", maxWidth: "95vw" });
var _c1 = () => ({ width: "35rem", maxWidth: "95vw" });
function PortalOrderDetailsDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "portal.orderDetails.loading"));
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.orderNumber"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.requestNo);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.orderDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, d_r1.createdOnUtc, "medium"), " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "portal.orderDetails.orderType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.orderTypeText(d_r1))("severity", ctx_r1.orderTypeSeverity(d_r1));
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "portal.orderDetails.status"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.statusText(d_r1))("severity", ctx_r1.statusSeverityForDetails(d_r1));
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.paymentMethod"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.paymentMethodName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.fieldCancelReason"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cancelReason);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.company"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.companyName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.carType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.carTypeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.shipmentType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.shipmentTypeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.weightTons"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.weightInTonName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.loadByPallet"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.palletCapacityName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.rentDuration"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.rentDurationName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.dryBoxType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.dryBoxTypeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.fromDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, d_r1.carRental == null ? null : d_r1.carRental.fromDate, "mediumDate"), " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.toDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, d_r1.carRental == null ? null : d_r1.carRental.toDate, "mediumDate"), " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.pickupSource"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pickupSourceText(d_r1), " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.city"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.cityName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.district"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.provinceName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.pickupPlace"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.placeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.street"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.street);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_0_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(1, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_1_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(2, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_2_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(3, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_3_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(4, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_4_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(5, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_5_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(6, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_6_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(7, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_7_Template, 6, 7, "div");
    \u0275\u0275conditionalCreate(8, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_8_Template, 6, 7, "div");
    \u0275\u0275conditionalCreate(9, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_9_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(10, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_10_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(11, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_11_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(12, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_12_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(13, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Conditional_13_Template, 5, 4, "div");
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.companyName) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.carTypeName) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.shipmentTypeName) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.weightInTonName) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.palletCapacityName) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.rentDurationName) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.dryBoxTypeName) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.fromDate) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.toDate) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((d_r1.carRental == null ? null : d_r1.carRental.isFromHeadquarters) != null ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.cityName) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.provinceName) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.placeName) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.carRental == null ? null : d_r1.carRental.deliveryAddress == null ? null : d_r1.carRental.deliveryAddress.street) ? 13 : -1);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.originCity"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.cityName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.district"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.provinceName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.pickupStreet"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.street);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.pickupPlace"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.placeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.destinationCity"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.cityName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.neighborhood"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.provinceName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.street"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.street);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.address"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.placeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.receiverName"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.receiver == null ? null : d_r1.cargoShipping.receiver.name);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.receiver == null ? null : d_r1.cargoShipping.receiver.phone);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.requestType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.requestTypeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.shipmentType"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.shipmentTypeName);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.shipmentSpeed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.shipmentSpeed);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.weight"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.weight);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.pieces"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.pieces);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.length"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.length);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.width"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.width);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.height"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.height);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.additionalNotes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.additionalNotes, " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "portal.orderDetails.deliveryDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryDate, "mediumDate"), " ");
  }
}
function PortalOrderDetailsDialog_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_0_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(1, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_1_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(2, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_2_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(3, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_3_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(4, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_4_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(5, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_5_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(6, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_6_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(7, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_7_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(8, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_8_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(9, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_9_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(10, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_10_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(11, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_11_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(12, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_12_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(13, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_13_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(14, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_14_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(15, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_15_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(16, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_16_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(17, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_17_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(18, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_18_Template, 5, 4, "div", 12);
    \u0275\u0275conditionalCreate(19, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Conditional_19_Template, 6, 7, "div");
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.cityName) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.provinceName) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.street) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.pickupAddress == null ? null : d_r1.cargoShipping.pickupAddress.placeName) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.cityName) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.provinceName) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.street) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryAddress == null ? null : d_r1.cargoShipping.deliveryAddress.placeName) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.receiver == null ? null : d_r1.cargoShipping.receiver.name) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.receiver == null ? null : d_r1.cargoShipping.receiver.phone) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.requestTypeName) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.shipmentTypeName) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.shipmentSpeed) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.weight) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.pieces) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.length) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.width) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.height) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.shipmentDetails == null ? null : d_r1.cargoShipping.shipmentDetails.additionalNotes) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cargoShipping == null ? null : d_r1.cargoShipping.deliveryDate) ? 19 : -1);
  }
}
function PortalOrderDetailsDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, PortalOrderDetailsDialog_Conditional_3_Conditional_1_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(2, PortalOrderDetailsDialog_Conditional_3_Conditional_2_Template, 6, 7, "div");
    \u0275\u0275conditionalCreate(3, PortalOrderDetailsDialog_Conditional_3_Conditional_3_Template, 5, 5, "div", 11);
    \u0275\u0275conditionalCreate(4, PortalOrderDetailsDialog_Conditional_3_Conditional_4_Template, 5, 5, "div", 11);
    \u0275\u0275conditionalCreate(5, PortalOrderDetailsDialog_Conditional_3_Conditional_5_Template, 5, 4, "div");
    \u0275\u0275conditionalCreate(6, PortalOrderDetailsDialog_Conditional_3_Conditional_6_Template, 5, 4, "div", 12);
    \u0275\u0275conditionalCreate(7, PortalOrderDetailsDialog_Conditional_3_Conditional_7_Template, 14, 14);
    \u0275\u0275conditionalCreate(8, PortalOrderDetailsDialog_Conditional_3_Conditional_8_Template, 20, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.requestNo) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.createdOnUtc) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.orderType) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.statusName) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.paymentMethodName) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasValue(d_r1.cancelReason) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCarRentalOrder(d_r1) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCargoShippingOrder(d_r1) ? 8 : -1);
  }
}
function PortalOrderDetailsDialog_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "portal.orderDetails.cancelReasonRequired"));
  }
}
var PortalOrderDetailsDialog = class _PortalOrderDetailsDialog {
  orderService = inject(OrderService);
  messageService = inject(MessageService);
  translate = inject(TranslateService);
  /** Two-way with parent: `[(visible)]="detailsOpen"` */
  visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  orderId = input(null, ...ngDevMode ? [{ debugName: "orderId" }] : []);
  details = signal(null, ...ngDevMode ? [{ debugName: "details" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  cancelling = signal(false, ...ngDevMode ? [{ debugName: "cancelling" }] : []);
  cancelDialogVisible = signal(false, ...ngDevMode ? [{ debugName: "cancelDialogVisible" }] : []);
  cancelReasonText = signal("", ...ngDevMode ? [{ debugName: "cancelReasonText" }] : []);
  cancelReasonError = signal(false, ...ngDevMode ? [{ debugName: "cancelReasonError" }] : []);
  constructor() {
    effect(() => {
      const open = this.visible();
      const id = this.orderId();
      if (open && id) {
        this.loadDetails(id);
      }
      if (!open) {
        this.details.set(null);
        this.loading.set(false);
        this.cancelDialogVisible.set(false);
      }
    });
  }
  orderTypeText(d) {
    if (!d)
      return "\u2014";
    return d.orderType?.trim() || "\u2014";
  }
  statusText(d) {
    if (!d)
      return "\u2014";
    return d.statusName?.trim() || "\u2014";
  }
  statusSeverityForDetails(d) {
    const s = (d?.statusName || "").toLowerCase();
    if (s.includes("new") || s.includes("pending"))
      return "warn";
    if (s.includes("done") || s.includes("completed") || s.includes("delivered"))
      return "success";
    if (s.includes("cancel") || s.includes("reject") || s.includes("failed"))
      return "danger";
    return "info";
  }
  orderTypeSeverity(d) {
    const t = (d?.orderType || "").toLowerCase();
    if (t.includes("cargo"))
      return "info";
    if (t.includes("personal"))
      return "success";
    if (t.includes("corporate"))
      return "warn";
    return "secondary";
  }
  isCarRentalOrder(d) {
    return !!d?.carRental;
  }
  isCargoShippingOrder(d) {
    return !!d?.cargoShipping;
  }
  pickupSourceText(d) {
    const v = d?.carRental?.isFromHeadquarters;
    if (v == null)
      return "\u2014";
    return v ? this.translate.instant("portal.orderDetails.pickupHeadquarters") : this.translate.instant("portal.orderDetails.pickupMyLocation");
  }
  hasValue(value) {
    if (value == null)
      return false;
    if (typeof value === "string")
      return value.trim().length > 0;
    if (Array.isArray(value))
      return value.length > 0;
    return true;
  }
  openCancelDialog() {
    this.cancelDialogVisible.set(true);
    this.cancelReasonText.set("");
    this.cancelReasonError.set(false);
  }
  onCancelDialogVisible(v) {
    this.cancelDialogVisible.set(v);
  }
  confirmCancelOrder() {
    const id = this.orderId();
    if (!id)
      return;
    const reason = this.cancelReasonText().trim();
    this.cancelReasonError.set(true);
    if (!reason)
      return;
    this.cancelling.set(true);
    this.orderService.cancelOrder(id, reason).subscribe({
      next: () => {
        this.cancelling.set(false);
        this.cancelDialogVisible.set(false);
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("portal.orderDetails.toastSuccess"),
          detail: this.translate.instant("portal.orderDetails.cancelSuccess")
        });
        this.loadDetails(id);
      },
      error: () => {
        this.cancelling.set(false);
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("portal.orderDetails.toastError"),
          detail: this.translate.instant("portal.orderDetails.cancelFailed")
        });
      }
    });
  }
  loadDetails(id) {
    this.loading.set(true);
    this.orderService.getOrderDetails(id).subscribe({
      next: (res) => {
        if (!this.visible()) {
          this.loading.set(false);
          return;
        }
        this.details.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        if (!this.visible()) {
          return;
        }
        this.details.set(null);
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("portal.orderDetails.toastError"),
          detail: this.translate.instant("portal.orderDetails.loadFailed")
        });
      }
    });
  }
  static \u0275fac = function PortalOrderDetailsDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalOrderDetailsDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalOrderDetailsDialog, selectors: [["app-portal-order-details-dialog"]], inputs: { visible: [1, "visible"], orderId: [1, "orderId"] }, outputs: { visible: "visibleChange" }, decls: 18, vars: 31, consts: [[3, "visibleChange", "header", "modal", "visible", "dismissableMask"], [1, "text-surface-600", "dark:text-surface-300", "py-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-5", "gap-y-3", "text-surface-800", "dark:text-surface-100"], [3, "visibleChange", "modal", "header", "visible"], [1, "mb-3"], ["pTextarea", "", "id", "cancelReason", "rows", "4", 1, "w-full", 2, "resize", "none", 3, "ngModelChange", "ngModel"], ["for", "cancelReason"], [1, "block", "mt-1", "text-red-600", "font-medium"], [1, "flex", "flex-wrap", "gap-2", "items-center"], ["severity", "secondary", 3, "onClick", "label"], ["severity", "danger", 1, "ms-auto", 3, "onClick", "label", "loading"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "md:col-span-2"], [3, "value", "severity"]], template: function PortalOrderDetailsDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-dialog", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("visibleChange", function PortalOrderDetailsDialog_Template_p_dialog_visibleChange_0_listener($event) {
        return ctx.visible.set($event);
      });
      \u0275\u0275conditionalCreate(2, PortalOrderDetailsDialog_Conditional_2_Template, 3, 3, "div", 1);
      \u0275\u0275conditionalCreate(3, PortalOrderDetailsDialog_Conditional_3_Template, 9, 8, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-dialog", 3);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275listener("visibleChange", function PortalOrderDetailsDialog_Template_p_dialog_visibleChange_4_listener($event) {
        return ctx.onCancelDialogVisible($event);
      });
      \u0275\u0275elementStart(6, "div", 4)(7, "p-iftalabel")(8, "textarea", 5);
      \u0275\u0275listener("ngModelChange", function PortalOrderDetailsDialog_Template_textarea_ngModelChange_8_listener($event) {
        return ctx.cancelReasonText.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "label", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, PortalOrderDetailsDialog_Conditional_12_Template, 3, 3, "small", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "p-button", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275listener("onClick", function PortalOrderDetailsDialog_Template_p_button_onClick_14_listener() {
        return ctx.onCancelDialogVisible(false);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-button", 10);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("onClick", function PortalOrderDetailsDialog_Template_p_button_onClick_16_listener() {
        return ctx.confirmCancelOrder();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c02));
      \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 19, "portal.orderDetails.header"))("modal", true)("visible", ctx.visible())("dismissableMask", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_6_0 = !ctx.loading() && ctx.details()) ? 3 : -1, tmp_6_0);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c1));
      \u0275\u0275property("modal", true)("header", \u0275\u0275pipeBind1(5, 21, "portal.orderDetails.cancelDialogHeader"))("visible", ctx.cancelDialogVisible());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.cancelReasonText());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 23, "portal.orderDetails.labelCancelReason"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cancelReasonError() && !ctx.cancelReasonText().trim() ? 12 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(15, 25, "portal.orderDetails.close"));
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 27, "portal.orderDetails.confirm"))("loading", ctx.cancelling());
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    DialogModule,
    Dialog,
    ButtonModule,
    Button,
    TagModule,
    Tag,
    TextareaModule,
    Textarea,
    IftaLabelModule,
    IftaLabel,
    TranslateModule,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalOrderDetailsDialog, [{
    type: Component,
    args: [{ selector: "app-portal-order-details-dialog", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DialogModule,
      ButtonModule,
      TagModule,
      TextareaModule,
      IftaLabelModule,
      TranslateModule
    ], template: `<p-dialog
    [header]="'portal.orderDetails.header' | translate"
    [modal]="true"
    [style]="{ width: '50rem', maxWidth: '95vw' }"
    [visible]="visible()"
    (visibleChange)="visible.set($event)"
    [dismissableMask]="true"
>
    @if (loading()) {
        <div class="text-surface-600 dark:text-surface-300 py-4">{{ 'portal.orderDetails.loading' | translate }}</div>
    }

    @if (!loading() && details(); as d) {

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3 text-surface-800 dark:text-surface-100">
            @if (hasValue(d.requestNo)) {
                <div><strong>{{ 'portal.orderDetails.orderNumber' | translate }}</strong> {{ d.requestNo }}</div>
            }
            @if (hasValue(d.createdOnUtc)) {
                <div>
                    <strong>{{ 'portal.orderDetails.orderDate' | translate }}</strong>
                    {{ d.createdOnUtc | date: 'medium' }}
                </div>
            }
            @if (hasValue(d.orderType)) {
                <div class="flex flex-wrap items-center gap-2">
                    <strong>{{ 'portal.orderDetails.orderType' | translate }}</strong>
                    <p-tag [value]="orderTypeText(d)" [severity]="orderTypeSeverity(d)" />
                </div>
            }
            @if (hasValue(d.statusName)) {
                <div class="flex flex-wrap items-center gap-2">
                    <strong>{{ 'portal.orderDetails.status' | translate }}</strong>
                    <p-tag [value]="statusText(d)" [severity]="statusSeverityForDetails(d)" />
                </div>
            }
            @if (hasValue(d.paymentMethodName)) {
                <div><strong>{{ 'portal.orderDetails.paymentMethod' | translate }}</strong> {{ d.paymentMethodName }}</div>
            }
            @if (hasValue(d.cancelReason)) {
                <div class="md:col-span-2"><strong>{{ 'portal.orderDetails.fieldCancelReason' | translate }}</strong> {{ d.cancelReason }}</div>
            }

            @if (isCarRentalOrder(d)) {
                @if (hasValue(d.carRental?.companyName)) {
                    <div><strong>{{ 'portal.orderDetails.company' | translate }}</strong> {{ d.carRental?.companyName }}</div>
                }
                @if (hasValue(d.carRental?.carTypeName)) {
                    <div><strong>{{ 'portal.orderDetails.carType' | translate }}</strong> {{ d.carRental?.carTypeName }}</div>
                }
                @if (hasValue(d.carRental?.shipmentTypeName)) {
                    <div><strong>{{ 'portal.orderDetails.shipmentType' | translate }}</strong> {{ d.carRental?.shipmentTypeName }}</div>
                }
                @if (hasValue(d.carRental?.weightInTonName)) {
                    <div><strong>{{ 'portal.orderDetails.weightTons' | translate }}</strong> {{ d.carRental?.weightInTonName }}</div>
                }
                @if (hasValue(d.carRental?.palletCapacityName)) {
                    <div><strong>{{ 'portal.orderDetails.loadByPallet' | translate }}</strong> {{ d.carRental?.palletCapacityName }}</div>
                }
                @if (hasValue(d.carRental?.rentDurationName)) {
                    <div><strong>{{ 'portal.orderDetails.rentDuration' | translate }}</strong> {{ d.carRental?.rentDurationName }}</div>
                }
                @if (hasValue(d.carRental?.dryBoxTypeName)) {
                    <div><strong>{{ 'portal.orderDetails.dryBoxType' | translate }}</strong> {{ d.carRental?.dryBoxTypeName }}</div>
                }
                @if (hasValue(d.carRental?.fromDate)) {
                    <div>
                        <strong>{{ 'portal.orderDetails.fromDate' | translate }}</strong>
                        {{ d.carRental?.fromDate | date: 'mediumDate' }}
                    </div>
                }
                @if (hasValue(d.carRental?.toDate)) {
                    <div>
                        <strong>{{ 'portal.orderDetails.toDate' | translate }}</strong>
                        {{ d.carRental?.toDate | date: 'mediumDate' }}
                    </div>
                }
                @if (d.carRental?.isFromHeadquarters != null) {
                    <div>
                        <strong>{{ 'portal.orderDetails.pickupSource' | translate }}</strong>
                        {{ pickupSourceText(d) }}
                    </div>
                }
                @if (hasValue(d.carRental?.deliveryAddress?.cityName)) {
                    <div><strong>{{ 'portal.orderDetails.city' | translate }}</strong> {{ d.carRental?.deliveryAddress?.cityName }}</div>
                }
                @if (hasValue(d.carRental?.deliveryAddress?.provinceName)) {
                    <div><strong>{{ 'portal.orderDetails.district' | translate }}</strong> {{ d.carRental?.deliveryAddress?.provinceName }}</div>
                }
                @if (hasValue(d.carRental?.deliveryAddress?.placeName)) {
                    <div><strong>{{ 'portal.orderDetails.pickupPlace' | translate }}</strong> {{ d.carRental?.deliveryAddress?.placeName }}</div>
                }
                @if (hasValue(d.carRental?.deliveryAddress?.street)) {
                    <div><strong>{{ 'portal.orderDetails.street' | translate }}</strong> {{ d.carRental?.deliveryAddress?.street }}</div>
                }
            }

            @if (isCargoShippingOrder(d)) {
                @if (hasValue(d.cargoShipping?.pickupAddress?.cityName)) {
                    <div><strong>{{ 'portal.orderDetails.originCity' | translate }}</strong> {{ d.cargoShipping?.pickupAddress?.cityName }}</div>
                }
                @if (hasValue(d.cargoShipping?.pickupAddress?.provinceName)) {
                    <div><strong>{{ 'portal.orderDetails.district' | translate }}</strong> {{ d.cargoShipping?.pickupAddress?.provinceName }}</div>
                }
                @if (hasValue(d.cargoShipping?.pickupAddress?.street)) {
                    <div><strong>{{ 'portal.orderDetails.pickupStreet' | translate }}</strong> {{ d.cargoShipping?.pickupAddress?.street }}</div>
                }
                @if (hasValue(d.cargoShipping?.pickupAddress?.placeName)) {
                    <div><strong>{{ 'portal.orderDetails.pickupPlace' | translate }}</strong> {{ d.cargoShipping?.pickupAddress?.placeName }}</div>
                }

                @if (hasValue(d.cargoShipping?.deliveryAddress?.cityName)) {
                    <div><strong>{{ 'portal.orderDetails.destinationCity' | translate }}</strong> {{ d.cargoShipping?.deliveryAddress?.cityName }}</div>
                }
                @if (hasValue(d.cargoShipping?.deliveryAddress?.provinceName)) {
                    <div><strong>{{ 'portal.orderDetails.neighborhood' | translate }}</strong> {{ d.cargoShipping?.deliveryAddress?.provinceName }}</div>
                }
                @if (hasValue(d.cargoShipping?.deliveryAddress?.street)) {
                    <div><strong>{{ 'portal.orderDetails.street' | translate }}</strong> {{ d.cargoShipping?.deliveryAddress?.street }}</div>
                }
                @if (hasValue(d.cargoShipping?.deliveryAddress?.placeName)) {
                    <div><strong>{{ 'portal.orderDetails.address' | translate }}</strong> {{ d.cargoShipping?.deliveryAddress?.placeName }}</div>
                }

                @if (hasValue(d.cargoShipping?.receiver?.name)) {
                    <div><strong>{{ 'portal.orderDetails.receiverName' | translate }}</strong> {{ d.cargoShipping?.receiver?.name }}</div>
                }
                @if (hasValue(d.cargoShipping?.receiver?.phone)) {
                    <div><strong>{{ 'portal.orderDetails.phone' | translate }}</strong> {{ d.cargoShipping?.receiver?.phone }}</div>
                }

                @if (hasValue(d.cargoShipping?.shipmentDetails?.requestTypeName)) {
                    <div><strong>{{ 'portal.orderDetails.requestType' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.requestTypeName }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.shipmentTypeName)) {
                    <div><strong>{{ 'portal.orderDetails.shipmentType' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.shipmentTypeName }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.shipmentSpeed)) {
                    <div><strong>{{ 'portal.orderDetails.shipmentSpeed' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.shipmentSpeed }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.weight)) {
                    <div><strong>{{ 'portal.orderDetails.weight' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.weight }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.pieces)) {
                    <div><strong>{{ 'portal.orderDetails.pieces' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.pieces }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.length)) {
                    <div><strong>{{ 'portal.orderDetails.length' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.length }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.width)) {
                    <div><strong>{{ 'portal.orderDetails.width' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.width }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.height)) {
                    <div><strong>{{ 'portal.orderDetails.height' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.height }}</div>
                }
                @if (hasValue(d.cargoShipping?.shipmentDetails?.additionalNotes)) {
                    <div class="md:col-span-2">
                        <strong>{{ 'portal.orderDetails.additionalNotes' | translate }}</strong> {{ d.cargoShipping?.shipmentDetails?.additionalNotes }}
                    </div>
                }
                @if (hasValue(d.cargoShipping?.deliveryDate)) {
                    <div>
                        <strong>{{ 'portal.orderDetails.deliveryDate' | translate }}</strong>
                        {{ d.cargoShipping?.deliveryDate | date: 'mediumDate' }}
                    </div>
                }
            }
        </div>
    }
</p-dialog>

<p-dialog
    [modal]="true"
    [header]="'portal.orderDetails.cancelDialogHeader' | translate"
    [style]="{ width: '35rem', maxWidth: '95vw' }"
    [visible]="cancelDialogVisible()"
    (visibleChange)="onCancelDialogVisible($event)"
>
    <div class="mb-3">
        <p-iftalabel>
            <textarea
                pTextarea
                id="cancelReason"
                rows="4"
                class="w-full"
                style="resize: none"
                [ngModel]="cancelReasonText()"
                (ngModelChange)="cancelReasonText.set($event)"
            ></textarea>
            <label for="cancelReason">{{ 'portal.orderDetails.labelCancelReason' | translate }}</label>
        </p-iftalabel>
        @if (cancelReasonError() && !cancelReasonText().trim()) {
            <small class="block mt-1 text-red-600 font-medium">{{ 'portal.orderDetails.cancelReasonRequired' | translate }}</small>
        }
    </div>
    <div class="flex flex-wrap gap-2 items-center">
        <p-button [label]="'portal.orderDetails.close' | translate" severity="secondary" (onClick)="onCancelDialogVisible(false)" />
        <p-button
            class="ms-auto"
            [label]="'portal.orderDetails.confirm' | translate"
            severity="danger"
            [loading]="cancelling()"
            (onClick)="confirmCancelOrder()"
        />
    </div>
</p-dialog>
` }]
  }], () => [], { visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }, { type: Output, args: ["visibleChange"] }], orderId: [{ type: Input, args: [{ isSignal: true, alias: "orderId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalOrderDetailsDialog, { className: "PortalOrderDetailsDialog", filePath: "src/app/pages/portal/portal-order-details-dialog.ts", lineNumber: 29 });
})();

// src/app/pages/portal/portal-orders.ts
var _c03 = () => [10, 25, 50];
var _c12 = () => ["orderNumber", "orderTypeName", "originCity", "destinationCity", "companyName", "statusLabel"];
var _c2 = (a0) => ({ order: a0 });
function PortalOrders_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-icon-field", 14);
    \u0275\u0275element(2, "p-inputicon", 15);
    \u0275\u0275elementStart(3, "input", 16);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("input", function PortalOrders_ng_template_16_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r4 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PortalOrders_ng_template_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadOrders());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 3, "portal.orders.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 5, "portal.orders.refresh"))("disabled", ctx_r2.loading);
  }
}
function PortalOrders_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "p-sortIcon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 21)(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275element(10, "p-sortIcon", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 23)(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "p-sortIcon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 25)(17, "span", 19);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "p-sortIcon", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 27)(22, "span", 19);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275element(25, "p-sortIcon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "th", 29)(27, "span", 19);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275element(30, "p-sortIcon", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "th", 31)(32, "span", 19);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275element(35, "p-sortIcon", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "th", 33);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 8, "portal.orders.colOrderNumber"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 10, "portal.orders.colDate"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 12, "portal.orders.colType"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 14, "portal.orders.colOrigin"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 16, "portal.orders.colDestination"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(29, 18, "portal.orders.colCompany"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 20, "portal.orders.colStatus"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 22, "portal.orders.colView"));
  }
}
function PortalOrders_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 36)(17, "button", 37);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function PortalOrders_ng_template_20_Template_button_click_17_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openOrderDetails(row_r6));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.orderNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 11, row_r6.orderDate, "medium"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", row_r6.orderTypeName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.originCity || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.destinationCity || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.companyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6.statusLabel)("severity", ctx_r2.statusSeverity(row_r6.statusId));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(18, 14, "portal.orders.viewDetailsAria", \u0275\u0275pureFunction1(17, _c2, row_r6.orderNumber || row_r6.orderId)));
  }
}
function PortalOrders_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "portal.orders.emptyMessage"), " ");
  }
}
var PortalOrders = class _PortalOrders {
  orderService = inject(OrderService);
  messageService = inject(MessageService);
  translate = inject(TranslateService);
  langSub;
  orders = [];
  loading = false;
  totalRecords = 0;
  tableFirst = 0;
  tableRows = 10;
  selectedOrderStatus = null;
  orderDetailsOpen = false;
  orderDetailsId = null;
  statusOptions = [];
  pageReportTemplate = "";
  ngOnInit() {
    this.refreshLocalizedStrings();
    this.langSub = this.translate.onLangChange.subscribe(() => this.refreshLocalizedStrings());
  }
  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }
  refreshLocalizedStrings() {
    this.pageReportTemplate = this.translate.instant("portal.orders.pageReport");
    this.statusOptions = [
      { label: this.translate.instant("portal.orders.filterAllStatuses"), value: null },
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        label: this.translate.instant(`portal.orders.statusFilter.${n}`),
        value: n
      }))
    ];
  }
  onLazyLoad(event) {
    this.tableFirst = event.first ?? 0;
    const rows = event.rows;
    this.tableRows = rows != null && rows > 0 ? rows : 10;
    this.fetchOrders();
  }
  onStatusFilterChange(value) {
    this.selectedOrderStatus = value;
    this.tableFirst = 0;
    this.fetchOrders();
  }
  loadOrders() {
    this.fetchOrders();
  }
  fetchOrders() {
    this.loading = true;
    const page = Math.floor(this.tableFirst / this.tableRows) + 1;
    const limit = this.tableRows;
    this.orderService.getOrderManagement(page, limit, this.selectedOrderStatus ?? void 0).subscribe({
      next: ({ items, totalRecords }) => {
        this.totalRecords = totalRecords;
        this.orders = (items ?? []).map((o) => __spreadProps(__spreadValues({}, o), {
          orderTypeName: o.orderTypeName?.trim() || this.translate.instant("portal.orders.typeFallback", { type: o.orderType }),
          statusLabel: this.statusLabel(o.statusId)
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.orders = [];
        this.totalRecords = 0;
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("portal.orders.toastError"),
          detail: this.translate.instant("portal.orders.loadFailed")
        });
      }
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openOrderDetails(row) {
    this.orderDetailsId = row.orderId;
    this.orderDetailsOpen = true;
  }
  statusLabel(id) {
    return this.translate.instant(`portal.orders.status.${id}`);
  }
  statusSeverity(id) {
    const map2 = {
      1: "warn",
      2: "success",
      3: "info",
      4: "danger",
      5: "danger",
      6: "secondary"
    };
    return map2[id] ?? "secondary";
  }
  static \u0275fac = function PortalOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalOrders)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalOrders, selectors: [["app-portal-orders"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 24, vars: 26, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [3, "visibleChange", "visible", "orderId"], [1, "card"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4", "mb-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-0"], [1, "flex", "flex-col", "sm:flex-row", "gap-2", "sm:items-center"], [1, "text-sm", "font-medium", "text-surface-700", "dark:text-surface-100", "whitespace-nowrap"], ["optionLabel", "label", "optionValue", "value", "styleClass", "min-w-48", 3, "ngModelChange", "options", "ngModel", "placeholder"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "dataKey", "orderId", 3, "onLazyLoad", "value", "loading", "lazy", "paginator", "rows", "first", "totalRecords", "showCurrentPageReport", "currentPageReportTemplate", "rowsPerPageOptions", "globalFilterFields"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", 1, "w-full", 3, "input", "placeholder"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", "outlined", "", 3, "click", "label", "disabled"], ["pSortableColumn", "orderNumber", 1, "white-space-nowrap"], [1, "flex", "items-center", "gap-2"], ["field", "orderNumber"], ["pSortableColumn", "orderDate", 1, "white-space-nowrap"], ["field", "orderDate"], ["pSortableColumn", "orderTypeName", 1, "white-space-nowrap"], ["field", "orderTypeName"], ["pSortableColumn", "originCity", 1, "white-space-nowrap"], ["field", "originCity"], ["pSortableColumn", "destinationCity", 1, "white-space-nowrap"], ["field", "destinationCity"], ["pSortableColumn", "companyName", 1, "white-space-nowrap"], ["field", "companyName"], ["pSortableColumn", "statusId", 1, "white-space-nowrap"], ["field", "statusId"], [1, "white-space-nowrap", "w-20", "text-center"], ["severity", "info", 3, "value"], [3, "value", "severity"], [1, "text-center"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-eye", "severity", "secondary", 3, "click", "rounded", "text"], ["colspan", "8", 1, "text-center", "py-6", "text-surface-500"]], template: function PortalOrders_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-portal-order-details-dialog", 5);
      \u0275\u0275twoWayListener("visibleChange", function PortalOrders_Template_app_portal_order_details_dialog_visibleChange_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.orderDetailsOpen, $event) || (ctx.orderDetailsOpen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 6)(3, "div", 7)(4, "div")(5, "div", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 9)(9, "label", 10);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-select", 11);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275listener("ngModelChange", function PortalOrders_Template_p_select_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusFilterChange($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "p-table", 12, 0);
      \u0275\u0275listener("onLazyLoad", function PortalOrders_Template_p_table_onLazyLoad_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLazyLoad($event));
      });
      \u0275\u0275template(16, PortalOrders_ng_template_16_Template, 7, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(18, PortalOrders_ng_template_18_Template, 39, 24, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(20, PortalOrders_ng_template_20_Template, 19, 19, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(22, PortalOrders_ng_template_22_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("visible", ctx.orderDetailsOpen);
      \u0275\u0275property("orderId", ctx.orderDetailsId);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "portal.orders.title"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 20, "portal.orders.filterStatus"));
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.statusOptions)("ngModel", ctx.selectedOrderStatus)("placeholder", \u0275\u0275pipeBind1(13, 22, "portal.orders.filterPlaceholderAll"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.orders)("loading", ctx.loading)("lazy", true)("paginator", true)("rows", ctx.tableRows)("first", ctx.tableFirst)("totalRecords", ctx.totalRecords)("showCurrentPageReport", true)("currentPageReportTemplate", ctx.pageReportTemplate)("rowsPerPageOptions", \u0275\u0275pureFunction0(24, _c03))("globalFilterFields", \u0275\u0275pureFunction0(25, _c12));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    InputTextModule,
    InputText,
    ButtonModule,
    ButtonDirective,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    SelectModule,
    Select,
    TagModule,
    Tag,
    ToastModule,
    Toast,
    RippleModule,
    Ripple,
    PortalOrderDetailsDialog,
    TranslateModule,
    DatePipe,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalOrders, [{
    type: Component,
    args: [{
      selector: "app-portal-orders",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        SelectModule,
        TagModule,
        ToastModule,
        RippleModule,
        PortalOrderDetailsDialog,
        TranslateModule
      ],
      providers: [MessageService],
      template: `
        <p-toast />
        <app-portal-order-details-dialog [(visible)]="orderDetailsOpen" [orderId]="orderDetailsId" />
        <div class="card">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <div class="text-2xl font-semibold text-surface-900 dark:text-surface-0">
                        {{ 'portal.orders.title' | translate }}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <label class="text-sm font-medium text-surface-700 dark:text-surface-100 whitespace-nowrap">{{
                        'portal.orders.filterStatus' | translate
                    }}</label>
                    <p-select
                        [options]="statusOptions"
                        [ngModel]="selectedOrderStatus"
                        (ngModelChange)="onStatusFilterChange($event)"
                        optionLabel="label"
                        optionValue="value"
                        [placeholder]="'portal.orders.filterPlaceholderAll' | translate"
                        styleClass="min-w-48"
                    />
                </div>
            </div>

            <p-table
                #dt
                [value]="orders"
                [loading]="loading"
                [lazy]="true"
                (onLazyLoad)="onLazyLoad($event)"
                [paginator]="true"
                paginatorDropdownAppendTo="body"
                [rows]="tableRows"
                [first]="tableFirst"
                [totalRecords]="totalRecords"
                [showCurrentPageReport]="true"
                responsiveLayout="scroll"
                [currentPageReportTemplate]="pageReportTemplate"
                [rowsPerPageOptions]="[10, 25, 50]"
                [globalFilterFields]="[
                    'orderNumber',
                    'orderTypeName',
                    'originCity',
                    'destinationCity',
                    'companyName',
                    'statusLabel',
                ]"
                dataKey="orderId"
            >
                <ng-template #caption>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <p-icon-field class="w-full sm:w-80">
                            <p-inputicon class="pi pi-search" />
                            <input
                                pInputText
                                type="text"
                                (input)="onGlobalFilter(dt, $event)"
                                [placeholder]="'portal.orders.searchPlaceholder' | translate"
                                class="w-full"
                            />
                        </p-icon-field>
                        <button
                            pButton
                            pRipple
                            type="button"
                            icon="pi pi-refresh"
                            [label]="'portal.orders.refresh' | translate"
                            outlined
                            (click)="loadOrders()"
                            [disabled]="loading"
                        ></button>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th pSortableColumn="orderNumber" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colOrderNumber' | translate }} <p-sortIcon field="orderNumber"
                            /></span>
                        </th>
                        <th pSortableColumn="orderDate" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colDate' | translate }} <p-sortIcon field="orderDate"
                            /></span>
                        </th>
                        <th pSortableColumn="orderTypeName" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colType' | translate }} <p-sortIcon field="orderTypeName"
                            /></span>
                        </th>
                        <th pSortableColumn="originCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colOrigin' | translate }} <p-sortIcon field="originCity"
                            /></span>
                        </th>
                        <th pSortableColumn="destinationCity" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colDestination' | translate }} <p-sortIcon field="destinationCity"
                            /></span>
                        </th>
                        <th pSortableColumn="companyName" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colCompany' | translate }} <p-sortIcon field="companyName"
                            /></span>
                        </th>
                        <th pSortableColumn="statusId" class="white-space-nowrap">
                            <span class="flex items-center gap-2"
                                >{{ 'portal.orders.colStatus' | translate }} <p-sortIcon field="statusId"
                            /></span>
                        </th>
                        <th class="white-space-nowrap w-20 text-center">{{ 'portal.orders.colView' | translate }}</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.orderNumber || '\u2014' }}</td>
                        <td>{{ row.orderDate | date: 'medium' }}</td>
                        <td>
                            <p-tag [value]="row.orderTypeName || '\u2014'" severity="info"></p-tag>
                        </td>
                        <td>{{ row.originCity || '\u2014' }}</td>
                        <td>{{ row.destinationCity || '\u2014' }}</td>
                        <td>{{ row.companyName || '\u2014' }}</td>
                        <td>
                            <p-tag [value]="row.statusLabel" [severity]="statusSeverity(row.statusId)"></p-tag>
                        </td>
                        <td class="text-center">
                            <button
                                type="button"
                                pButton
                                pRipple
                                icon="pi pi-eye"
                                [rounded]="true"
                                [text]="true"
                                severity="secondary"
                                (click)="openOrderDetails(row)"
                                [attr.aria-label]="
                                    'portal.orders.viewDetailsAria'
                                        | translate: { order: row.orderNumber || row.orderId }
                                "
                            ></button>
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="8" class="text-center py-6 text-surface-500">
                            {{ 'portal.orders.emptyMessage' | translate }}
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalOrders, { className: "PortalOrders", filePath: "src/app/pages/portal/portal-orders.ts", lineNumber: 201 });
})();
export {
  PortalOrders
};
//# sourceMappingURL=chunk-RAFC4WAX.js.map
