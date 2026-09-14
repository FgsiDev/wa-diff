__d(
  "AdsFlexibleFormatLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "adgroupID",
      "enrollStatus",
      "errorCode",
      "errorName",
      "stackTrace",
    ];
    function s(e) {
      return JSON.stringify(e, function (e, t) {
        if (t != null) return t;
      });
    }
    function u(t, n, o) {
      o === void 0 && (o = !1);
      var a = n.adgroupID,
        i = n.enrollStatus,
        l = n.errorCode,
        u = n.errorName,
        c = n.stackTrace,
        d = babelHelpers.objectWithoutPropertiesLoose(n, e);
      if (o) {
        var m;
        r("AdsInterfacesLogger").logOnce({
          eventName: t,
          data:
            ((m = {}),
            (m.adgroup_id = a),
            (m.error_code = l),
            (m.error_name = u),
            (m.stack_trace = c),
            (m.status = i),
            (m.message = Object.keys(d).length > 0 ? s(d) : void 0),
            m),
        });
      } else {
        var p;
        r("AdsInterfacesLogger").log({
          eventName: t,
          data:
            ((p = {}),
            (p.adgroup_id = a),
            (p.error_code = l),
            (p.error_name = u),
            (p.stack_trace = c),
            (p.status = i),
            (p.message = Object.keys(d).length > 0 ? s(d) : void 0),
            p),
        });
      }
    }
    function c(e) {
      u("format_transformation_reative_control_section_impression", e, !0);
    }
    function d(e) {
      u("format_transformation_reative_control_dropdown_impression", e, !0);
    }
    function m(e) {
      u("format_transformation_reative_control_option_impression", e, !0);
    }
    function p(e) {
      u("format_transformation_reative_control_option_click", e, !1);
    }
    function _(e) {
      u("format_transformation_reactive_control_option_default_on", e, !0);
    }
    function f(e) {
      u("format_transformation_reative_control_dropdown_click", e, !1);
    }
    function g(e) {
      u("format_transformation_reative_control_guidance_impression", e, !0);
    }
    function h(e) {
      u("format_transformation_reactive_control_tooltip_toggle", e, !1);
    }
    function y(e) {
      u("format_transformation_reactive_control_edit_button_click", e, !1);
    }
    function C(e) {
      u("format_transformation_reactive_control_modal_open", e, !1);
    }
    function b(e) {
      u("format_transformation_reactive_control_modal_save", e, !1);
    }
    function v(e) {
      u("format_transformation_reactive_control_modal_cancel", e, !1);
    }
    function S(e) {
      u("format_transformation_reactive_control_tab_switch", e, !1);
    }
    function R(e) {
      u("format_transformation_reactive_control_card_impression", e, !0);
    }
    function L(e) {
      u("format_transformation_reactive_control_customize_open", e, !1);
    }
    function E(e) {
      u("format_transformation_reactive_control_preview_page_change", e, !1);
    }
    function k(e) {
      u(
        "format_transformation_reactive_control_pe_carousel_mode_change",
        e,
        !1,
      );
    }
    function I(e) {
      u(
        "format_transformation_reactive_control_pe_carousel_variant_toggle",
        e,
        !1,
      );
    }
    ((l.logFormatTransformationReactiveControlSectionImpression = c),
      (l.logFormatTransformationReactiveControlDropdownImpression = d),
      (l.logFormatTransformationReactiveControlOptionImpression = m),
      (l.logFormatTransformationReactiveControlOptionClick = p),
      (l.logFormatTransformationReactiveControlOptionDefaultOn = _),
      (l.logFormatTransformationReactiveControlDropdownClick = f),
      (l.logFormatTransformationReactiveControlGuidanceImpression = g),
      (l.logFormatTransformationReactiveControlTooltipToggle = h),
      (l.logFormatTransformationReactiveControlEditButtonClick = y),
      (l.logFormatTransformationReactiveControlModalOpen = C),
      (l.logFormatTransformationReactiveControlModalSave = b),
      (l.logFormatTransformationReactiveControlModalCancel = v),
      (l.logFormatTransformationReactiveControlTabSwitch = S),
      (l.logFormatTransformationReactiveControlCardImpression = R),
      (l.logFormatTransformationReactiveControlCustomizeOpen = L),
      (l.logFormatTransformationReactiveControlPreviewPageChange = E),
      (l.logFormatTransformationReactiveControlPeCarouselModeChange = k),
      (l.logFormatTransformationReactiveControlPeCarouselVariantToggle = I));
  },
  98,
);
