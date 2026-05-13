import {
  UserProfileService,
  resolveUploadedImageUrl
} from "./chunk-2QYERXEO.js";
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
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-BSYD5FPP.js";
import "./chunk-HNWUDQ2V.js";
import {
  extractApiError
} from "./chunk-KCB63AGT.js";
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
  Button,
  ButtonDirective,
  ButtonModule,
  CommonModule,
  ConfirmEventType,
  ConfirmationService,
  DefaultValueAccessor,
  Footer,
  FormsModule,
  HttpClient,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgControlStatus,
  NgIf,
  NgModel,
  NgTemplateOutlet,
  PARENT_INSTANCE,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SharedModule,
  TranslationKeys,
  _t,
  s2 as s,
  z
} from "./chunk-VKOXGSWD.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation,
  animate,
  animation,
  booleanAttribute,
  inject,
  map,
  numberAttribute,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  useAnimation,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style2 = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["rejecticon"];
var _c3 = ["accepticon"];
var _c4 = ["message"];
var _c5 = ["icon"];
var _c6 = ["headless"];
var _c7 = [[["p-footer"]]];
var _c8 = ["p-footer"];
var _c9 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c10 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c9, ctx_r1.confirmation, ctx_r1.onAccept.bind(ctx_r1), ctx_r1.onReject.bind(ctx_r1)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.option("icon"));
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"))("pBind", ctx_r1.ptm("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 4, "i", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.messageTemplate || ctx_r1._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c10, ctx_r1.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("message"));
    \u0275\u0275property("pBind", ctx_r1.ptm("message"))("innerHTML", ctx_r1.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 9);
    \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 4, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.iconTemplate || ctx_r1._iconTemplate ? 0 : !ctx_r1.iconTemplate && !ctx_r1._iconTemplate && !ctx_r1._messageTemplate && !ctx_r1.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.messageTemplate || ctx_r1._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.headerTemplate || ctx_r1._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("rejectIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("pcRejectButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.rejectIcon && !ctx_r1.rejectIconTemplate && !ctx_r1._rejectIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcRejectButton"))("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("acceptIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("pcAcceptButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.acceptIcon && !ctx_r1._acceptIconTemplate && !ctx_r1.acceptIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcAcceptButton"))("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 5, "p-button", 14)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 5, "p-button", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1);
    \u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && !ctx_r1._footerTemplate ? 1 : -1);
  }
}
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var CONFIRMDIALOG_INSTANCE = new InjectionToken("CONFIRMDIALOG_INSTANCE");
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  $pcConfirmDialog = inject(CONFIRMDIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = true;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  headlessTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = s("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  onInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    if (!this.dialog?.el?.nativeElement) return;
    switch (this.option("defaultFocus")) {
      case "accept":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return z(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.unsubscribeConfirmationEvents();
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    if (this.confirmation) {
      this.confirmation.acceptEvent?.unsubscribe();
      this.confirmation.rejectEvent?.unsubscribe();
    }
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.getAcceptButtonProps()?.label || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.getRejectButtonProps()?.label || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footer = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: "appendTo",
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      modal: [2, "modal", "modal", booleanAttribute],
      visible: "visible",
      position: "position",
      draggable: [2, "draggable", "draggable", booleanAttribute]
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle, {
      provide: CONFIRMDIALOG_INSTANCE,
      useExisting: _ConfirmDialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ConfirmDialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 6,
    vars: 18,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["icon", ""], ["role", "alertdialog", 3, "visibleChange", "pt", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable", "baseZIndex", "autoZIndex", "maskStyleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", "pBind"], [3, "class", "pBind", "innerHTML"], [3, "ngClass", "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind", "innerHTML"], [3, "pt", "label", "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "pt", "label", "styleClass", "ariaLabel", "buttonProps"], [3, "class", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275elementStart(0, "p-dialog", 6, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        });
        \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
        \u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("pt", ctx.pt)("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass))("modal", ctx.option("modal"))("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.option("appendTo"))("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("maskStyleClass", ctx.cn(ctx.cx("mask"), ctx.maskStyleClass));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule, Bind],
      template: `
        <p-dialog
            [pt]="pt"
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" [pBind]="ptm('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        [pt]="ptm('pcRejectButton')"
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [pt]="ptm('pcAcceptButton')"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle, {
        provide: CONFIRMDIALOG_INSTANCE,
        useExisting: ConfirmDialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ConfirmDialog
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule,
    imports: [ConfirmDialog, SharedModule],
    exports: [ConfirmDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/core/services/slider.service.ts
var SliderService = class _SliderService {
  http = inject(HttpClient);
  config = inject(APP_CONFIG);
  base = `${this.config.apiUrl}/v1/SlidersManagement`;
  normalizeList(body) {
    if (Array.isArray(body))
      return body;
    if (body && typeof body === "object") {
      const o = body;
      const data = o["data"];
      const items = o["items"];
      if (Array.isArray(data))
        return data;
      if (Array.isArray(items))
        return items;
    }
    return [];
  }
  getAll() {
    return this.http.get(this.base).pipe(map((b) => this.normalizeList(b)));
  }
  getById(id) {
    return this.http.get(`${this.base}/${encodeURIComponent(id)}`);
  }
  create(command) {
    return this.http.post(this.base, command);
  }
  update(id, command) {
    return this.http.put(`${this.base}/${encodeURIComponent(id)}`, command);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${encodeURIComponent(id)}`);
  }
  static \u0275fac = function SliderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SliderService, factory: _SliderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/portal/portal-sliders.ts
var _c02 = () => ({ width: "28rem" });
var _c12 = () => [10, 25, 50];
var _c22 = () => ({ width: "32rem" });
function PortalSlidersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-icon-field", 16);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("input", function PortalSlidersComponent_ng_template_13_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r4 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r4, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function PortalSlidersComponent_ng_template_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadSliders());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 3, "portal.sliders.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 5, "portal.sliders.refresh"))("disabled", ctx_r2.loading());
  }
}
function PortalSlidersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "p-sortIcon", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th", 23)(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275element(10, "p-sortIcon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 26);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "portal.sliders.colTitleEn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "portal.sliders.colTitleAr"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "portal.sliders.colImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "portal.sliders.colDescriptionEn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "portal.sliders.colDescriptionAr"));
  }
}
function PortalSlidersComponent_ng_template_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 34);
    \u0275\u0275listener("error", function PortalSlidersComponent_ng_template_17_Conditional_6_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.rowImageSrc(row_r7), \u0275\u0275sanitizeUrl)("alt", row_r7.titleEn || row_r7.title || "");
  }
}
function PortalSlidersComponent_ng_template_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PortalSlidersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275conditionalCreate(6, PortalSlidersComponent_ng_template_17_Conditional_6_Template, 1, 2, "img", 28)(7, PortalSlidersComponent_ng_template_17_Conditional_7_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 31)(13, "button", 32);
    \u0275\u0275listener("click", function PortalSlidersComponent_ng_template_17_Template_button_click_13_listener() {
      const row_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(row_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 33);
    \u0275\u0275listener("click", function PortalSlidersComponent_ng_template_17_Template_button_click_14_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete($event, row_r7));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.titleEn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.titleAr);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.rowImageSrc(row_r7) ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.descriptionEn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.descriptionAr);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function PortalSlidersComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "portal.sliders.empty"), " ");
  }
}
function PortalSlidersComponent_ng_template_22_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 52);
    \u0275\u0275listener("error", function PortalSlidersComponent_ng_template_22_Conditional_26_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPreviewImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.sliderImagePreviewUrl(), \u0275\u0275sanitizeUrl);
  }
}
function PortalSlidersComponent_ng_template_22_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "portal.sliders.noImagePreview"));
  }
}
function PortalSlidersComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div")(2, "label", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PortalSlidersComponent_ng_template_22_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.titleEn, $event) || (ctx_r2.form.titleEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PortalSlidersComponent_ng_template_22_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.titleAr, $event) || (ctx_r2.form.titleAr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 41);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PortalSlidersComponent_ng_template_22_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.descriptionEn, $event) || (ctx_r2.form.descriptionEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PortalSlidersComponent_ng_template_22_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.descriptionAr, $event) || (ctx_r2.form.descriptionAr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 45)(22, "span", 46);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 47);
    \u0275\u0275conditionalCreate(26, PortalSlidersComponent_ng_template_22_Conditional_26_Template, 1, 1, "img", 48)(27, PortalSlidersComponent_ng_template_22_Conditional_27_Template, 3, 3, "span", 49);
    \u0275\u0275elementStart(28, "input", 50, 7);
    \u0275\u0275listener("change", function PortalSlidersComponent_ng_template_22_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSliderImageSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-button", 51);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275listener("onClick", function PortalSlidersComponent_ng_template_22_Template_p_button_onClick_30_listener() {
      \u0275\u0275restoreView(_r8);
      const sliderPhotoInput_r10 = \u0275\u0275reference(29);
      return \u0275\u0275resetView(sliderPhotoInput_r10.click());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "portal.sliders.formTitleEn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.titleEn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "portal.sliders.formTitleAr"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.titleAr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "portal.sliders.formDescriptionEn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.descriptionEn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "portal.sliders.formDescriptionAr"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.descriptionAr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "portal.sliders.formImage"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.sliderImagePreviewUrl() ? 26 : 27);
    \u0275\u0275advance(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(31, 24, (ctx_r2.form.imageUrl == null ? null : ctx_r2.form.imageUrl.trim()) ? "portal.sliders.changeImage" : "portal.sliders.uploadImage"))("text", true)("loading", ctx_r2.uploadingImage())("disabled", ctx_r2.uploadingImage() || ctx_r2.saving());
  }
}
function PortalSlidersComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 53);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function PortalSlidersComponent_ng_template_24_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 54);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function PortalSlidersComponent_ng_template_24_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 4, "portal.sliders.cancel"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 6, "portal.sliders.save"))("loading", ctx_r2.saving())("disabled", ctx_r2.uploadingImage());
  }
}
var PortalSlidersComponent = class _PortalSlidersComponent {
  sliderService = inject(SliderService);
  userProfileService = inject(UserProfileService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  translate = inject(TranslateService);
  appConfig = inject(APP_CONFIG);
  sliders = signal([], ...ngDevMode ? [{ debugName: "sliders" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  uploadingImage = signal(false, ...ngDevMode ? [{ debugName: "uploadingImage" }] : []);
  dialogVisible = false;
  editingId = null;
  form = emptyForm();
  filterFields = ["titleEn", "titleAr", "descriptionEn", "descriptionAr", "imageUrl"];
  pageReportTemplate = "";
  langSub;
  ngOnInit() {
    this.refreshLocalizedStrings();
    this.langSub = this.translate.onLangChange.subscribe(() => this.refreshLocalizedStrings());
    this.loadSliders();
  }
  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }
  refreshLocalizedStrings() {
    this.pageReportTemplate = this.translate.instant("portal.sliders.pageReport");
  }
  dialogHeader() {
    return this.editingId ? this.translate.instant("portal.sliders.editHeader") : this.translate.instant("portal.sliders.createHeader");
  }
  loadSliders() {
    this.loading.set(true);
    this.sliderService.getAll().subscribe({
      next: (list) => {
        this.sliders.set(list);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("portal.sliders.errorLoadSummary"),
          detail: extractApiError(err, this.translate.instant("portal.sliders.errorLoadDetail"))
        });
      }
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  onImgError(ev) {
    const img = ev.target;
    if (img)
      img.style.display = "none";
  }
  onPreviewImgError(ev) {
    this.onImgError(ev);
  }
  rowImageSrc(row) {
    return resolveUploadedImageUrl(row.imageUrl, this.appConfig.apiUrl);
  }
  sliderImagePreviewUrl() {
    return resolveUploadedImageUrl(this.form.imageUrl, this.appConfig.apiUrl);
  }
  onSliderImageSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
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
          severity: "error",
          summary: this.translate.instant("portal.sliders.errorUploadSummary"),
          detail: extractApiError(err, this.translate.instant("portal.sliders.errorUploadDetail"))
        });
      }
    });
  }
  openNew() {
    this.editingId = null;
    this.form = emptyForm();
    this.dialogVisible = true;
  }
  openEdit(row) {
    this.editingId = row.id;
    this.form = {
      titleEn: row.titleEn ?? "",
      titleAr: row.titleAr ?? "",
      descriptionEn: row.descriptionEn ?? "",
      descriptionAr: row.descriptionAr ?? "",
      imageUrl: row.imageUrl ?? ""
    };
    this.dialogVisible = true;
  }
  hideDialog() {
    this.dialogVisible = false;
    this.editingId = null;
    this.form = emptyForm();
  }
  save() {
    if (!this.form.titleEn?.trim() || !this.form.titleAr?.trim()) {
      this.messageService.add({
        severity: "warn",
        summary: this.translate.instant("portal.sliders.validationSummary"),
        detail: this.translate.instant("portal.sliders.validationTitles")
      });
      return;
    }
    this.saving.set(true);
    if (this.editingId) {
      const cmd = {
        id: this.editingId,
        titleEn: this.form.titleEn.trim(),
        titleAr: this.form.titleAr.trim(),
        descriptionEn: this.form.descriptionEn?.trim() ?? "",
        descriptionAr: this.form.descriptionAr?.trim() ?? "",
        imageUrl: this.form.imageUrl?.trim() ?? ""
      };
      this.sliderService.update(this.editingId, cmd).subscribe({
        next: () => {
          this.saving.set(false);
          this.messageService.add({
            severity: "success",
            summary: this.translate.instant("portal.sliders.successUpdateSummary"),
            detail: this.translate.instant("portal.sliders.successUpdateDetail")
          });
          this.hideDialog();
          this.loadSliders();
        },
        error: (err) => {
          this.saving.set(false);
          this.messageService.add({
            severity: "error",
            summary: this.translate.instant("portal.sliders.errorSaveSummary"),
            detail: extractApiError(err, this.translate.instant("portal.sliders.errorSaveDetail"))
          });
        }
      });
    } else {
      const cmd = {
        titleEn: this.form.titleEn.trim(),
        titleAr: this.form.titleAr.trim(),
        descriptionEn: this.form.descriptionEn?.trim() ?? "",
        descriptionAr: this.form.descriptionAr?.trim() ?? "",
        imageUrl: this.form.imageUrl?.trim() ?? ""
      };
      this.sliderService.create(cmd).subscribe({
        next: () => {
          this.saving.set(false);
          this.messageService.add({
            severity: "success",
            summary: this.translate.instant("portal.sliders.successCreateSummary"),
            detail: this.translate.instant("portal.sliders.successCreateDetail")
          });
          this.hideDialog();
          this.loadSliders();
        },
        error: (err) => {
          this.saving.set(false);
          this.messageService.add({
            severity: "error",
            summary: this.translate.instant("portal.sliders.errorSaveSummary"),
            detail: extractApiError(err, this.translate.instant("portal.sliders.errorSaveDetail"))
          });
        }
      });
    }
  }
  confirmDelete(event, row) {
    this.confirmationService.confirm({
      target: event.currentTarget ?? event.target ?? void 0,
      message: this.translate.instant("portal.sliders.deleteConfirm"),
      header: this.translate.instant("portal.sliders.deleteHeader"),
      icon: "pi pi-exclamation-triangle",
      acceptButtonProps: {
        label: this.translate.instant("portal.sliders.acceptYes"),
        severity: "danger"
      },
      rejectButtonProps: {
        label: this.translate.instant("portal.sliders.rejectNo"),
        severity: "secondary",
        outlined: true
      },
      accept: () => this.performDelete(row.id)
    });
  }
  performDelete(id) {
    this.sliderService.delete(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: this.translate.instant("portal.sliders.successDeleteSummary"),
          detail: this.translate.instant("portal.sliders.successDeleteDetail")
        });
        this.loadSliders();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: this.translate.instant("portal.sliders.errorDeleteSummary"),
          detail: extractApiError(err, this.translate.instant("portal.sliders.errorDeleteDetail"))
        });
      }
    });
  }
  static \u0275fac = function PortalSlidersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PortalSlidersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalSlidersComponent, selectors: [["app-portal-sliders"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 26, vars: 28, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["content", ""], ["footer", ""], ["sliderPhotoInput", ""], [1, "card"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4", "mb-4"], [1, "text-2xl", "font-semibold", "text-surface-900", "dark:text-surface-0"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-plus", "severity", "secondary", 3, "click", "label"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "dataKey", "id", 3, "value", "loading", "rows", "paginator", "globalFilterFields", "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "currentPageReportTemplate"], [3, "visibleChange", "visible", "header", "modal", "closable", "draggable", "resizable"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", 1, "w-full", 3, "input", "placeholder"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", "outlined", "", 3, "click", "label", "disabled"], ["pSortableColumn", "titleEn", 1, "white-space-nowrap", 2, "min-width", "10rem"], [1, "flex", "items-center", "gap-2"], ["field", "titleEn"], ["pSortableColumn", "titleAr", 1, "white-space-nowrap", 2, "min-width", "10rem"], ["field", "titleAr"], [1, "white-space-nowrap", 2, "min-width", "8rem"], [1, "white-space-nowrap", 2, "min-width", "12rem"], [1, "white-space-nowrap", "w-20", "text-center"], [2, "max-height", "2.5rem", "max-width", "6rem", "object-fit", "cover", "border-radius", "4px", 3, "src", "alt"], [1, "text-muted-color"], [1, "max-w-20rem", "white-space-normal"], [1, "text-center"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-pencil", "severity", "secondary", 1, "mr-2", 3, "click", "rounded", "outlined"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [2, "max-height", "2.5rem", "max-width", "6rem", "object-fit", "cover", "border-radius", "4px", 3, "error", "src", "alt"], ["colspan", "6", 1, "text-center", "py-6", "text-surface-500"], [1, "flex", "flex-col", "gap-4"], ["for", "sliderTitleEn", 1, "mb-2", "block", "font-bold"], ["id", "sliderTitleEn", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "sliderTitleAr", 1, "mb-2", "block", "font-bold"], ["id", "sliderTitleAr", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "sliderDescEn", 1, "mb-2", "block", "font-bold"], ["id", "sliderDescEn", "pTextarea", "", "rows", "3", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "sliderDescAr", 1, "mb-2", "block", "font-bold"], ["id", "sliderDescAr", "pTextarea", "", "rows", "3", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-2"], [1, "block", "font-bold"], [1, "flex", "flex-col", "items-center", "gap-2", "rounded", "border", "border-surface-200", "p-4", "dark:border-surface-700"], ["alt", "", 1, "max-h-24", "max-w-full", "rounded", "object-contain", 3, "src"], [1, "text-sm", "text-muted-color"], ["type", "file", "accept", "image/*", 1, "portal-slider-photo-input", 3, "change"], ["type", "button", "icon", "pi pi-upload", 3, "onClick", "label", "text", "loading", "disabled"], ["alt", "", 1, "max-h-24", "max-w-full", "rounded", "object-contain", 3, "error", "src"], ["icon", "pi pi-times", "text", "", 3, "onClick", "label"], ["icon", "pi pi-check", 3, "onClick", "label", "loading", "disabled"]], template: function PortalSlidersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div")(5, "div", 10);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 11)(9, "button", 12);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275listener("click", function PortalSlidersComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNew());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "p-table", 13, 0);
      \u0275\u0275template(13, PortalSlidersComponent_ng_template_13_Template, 7, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(15, PortalSlidersComponent_ng_template_15_Template, 21, 15, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(17, PortalSlidersComponent_ng_template_17_Template, 15, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(19, PortalSlidersComponent_ng_template_19_Template, 4, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p-dialog", 14);
      \u0275\u0275twoWayListener("visibleChange", function PortalSlidersComponent_Template_p_dialog_visibleChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(22, PortalSlidersComponent_ng_template_22_Template, 32, 26, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, PortalSlidersComponent_ng_template_24_Template, 4, 8, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(25, _c02));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 21, "portal.sliders.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 23, "portal.sliders.new"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.sliders())("loading", ctx.loading())("rows", 10)("paginator", true)("globalFilterFields", ctx.filterFields)("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(26, _c12))("currentPageReportTemplate", ctx.pageReportTemplate);
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c22));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("header", ctx.dialogHeader())("modal", true)("closable", true)("draggable", false)("resizable", false);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslateModule,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    ButtonDirective,
    Button,
    RippleModule,
    Ripple,
    ToastModule,
    Toast,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    DialogModule,
    Dialog,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog,
    TranslatePipe
  ], styles: ["\n\n.portal-slider-photo-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n/*# sourceMappingURL=portal-sliders.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalSlidersComponent, [{
    type: Component,
    args: [{ selector: "app-portal-sliders", standalone: true, imports: [
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
      ConfirmDialogModule
    ], providers: [MessageService, ConfirmationService], template: `
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
                                <span class="text-muted-color">\u2014</span>
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
                                [label]="(form.imageUrl?.trim() ? 'portal.sliders.changeImage' : 'portal.sliders.uploadImage') | translate"
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
    `, styles: ["/* angular:styles/component:scss;f65aafa3e66f4151c961b403651a2292d11963f267ce75c76362d6f6b52a57dc;C:/Users/Mostafa Gaafar/source/repos/Test/Rahhala-Portal/src/app/pages/portal/portal-sliders.ts */\n.portal-slider-photo-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n/*# sourceMappingURL=portal-sliders.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalSlidersComponent, { className: "PortalSlidersComponent", filePath: "src/app/pages/portal/portal-sliders.ts", lineNumber: 268 });
})();
function emptyForm() {
  return {
    titleEn: "",
    titleAr: "",
    descriptionEn: "",
    descriptionAr: "",
    imageUrl: ""
  };
}
export {
  PortalSlidersComponent
};
//# sourceMappingURL=chunk-TAR665LN.js.map
