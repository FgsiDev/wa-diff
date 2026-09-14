__d(
  "CapaUtils",
  [
    "AdsInterfacesLogger",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingAction",
    "AdsValidationConsts",
    "AdsValueAdjustmentRuleCriteriaTypeUtils",
    "CapaConfig",
    "ODS",
    "adsRegulatedCategoriesContainHECRegulatedCategory",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return r("gkx")("5552");
    }
    function u() {
      return r("gkx")("25024");
    }
    function c() {
      return r("gkx")("8155") || r("gkx")("17374") || r("gkx")("19371");
    }
    var d = !1;
    function m() {
      return U() ? "qe3" : q() ? "qe2" : W() ? "qe1" : null;
    }
    function p() {
      if (U()) return "new_design_nux_ads";
      if (q()) {
        var e = r("qex")._("3571");
        return e === "new_design_nux" ||
          e === "new_design_nux_ads" ||
          e === "new_design_nux_ads_open"
          ? e
          : null;
      }
      if (W()) {
        var t = r("qex")._("3962");
        return t === "control" ||
          t === "new_design" ||
          t === "new_design_nux" ||
          t === "new_design_no_text"
          ? t
          : null;
      }
      return null;
    }
    function _(t) {
      if (!d && ((d = !0), !U())) {
        if (q()) {
          (r("qex")._("3768"),
            (e || (e = o("ODS"))).bumpEntityKey(
              68,
              "capa_l0_open_beta_experiment",
              t,
            ));
          return;
        }
        (r("qex")._("3983"),
          (e || (e = o("ODS"))).bumpEntityKey(
            68,
            "capa_l0_persona_experiment",
            t,
          ));
      }
    }
    function f() {
      var e = W(),
        t = q();
      if (!e && !t) return !1;
      var n = p();
      return (
        n != null && _(n),
        (e &&
          (n === "new_design" ||
            n === "new_design_nux" ||
            n === "new_design_no_text")) ||
          (t &&
            (n === "new_design_nux" ||
              n === "new_design_nux_ads" ||
              n === "new_design_nux_ads_open"))
      );
    }
    function g() {
      if (!q()) return !1;
      var e = p();
      return (
        e != null && _(e),
        e === "new_design_nux_ads" || e === "new_design_nux_ads_open"
      );
    }
    function h() {
      var e = p();
      return (e != null && _(e), e === "new_design_nux_ads_open");
    }
    function y() {
      var e = W(),
        t = q();
      if (!e && !t) return !1;
      var n = p();
      return (
        n != null && _(n),
        n === "new_design_nux" ||
          n === "new_design_nux_ads" ||
          n === "new_design_nux_ads_open"
      );
    }
    function C() {
      var e = W(),
        t = q();
      if (!e && !t) return !1;
      var n = p();
      return (
        n != null && _(n),
        n === "new_design_no_text" ||
          (t &&
            (n === "new_design_nux" ||
              n === "new_design_nux_ads" ||
              n === "new_design_nux_ads_open"))
      );
    }
    function b() {
      var e,
        t = r("gkx")("8326");
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ads_targeting_capa_l0_open_beta_new_design_impression",
          data: ((e = {}), (e.is_enabled = t), e),
        }),
        t
      );
    }
    function v() {
      var e,
        t = r("gkx")("15845");
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ads_targeting_capa_l0_open_beta_impression",
          data: ((e = {}), (e.is_enabled = t), e),
        }),
        t
      );
    }
    function S(e) {
      var t;
      u();
      var n = s();
      return (
        r("AdsInterfacesLogger").log({
          eventName: "adopt_capa_du_exposures",
          data:
            ((t = {}), (t.is_enabled = n), (t.source = e != null ? e : ""), t),
        }),
        n
      );
    }
    function R(e) {
      if (!H()) return !1;
      var t = e.getIn([
        "targeting",
        "targeting_automation",
        "creative_audience_pairing",
      ]);
      return t != null && t > 0;
    }
    function L(e) {
      if (!s()) return !1;
      var t = e.getIn([
        "targeting",
        "targeting_automation",
        "creative_audience_pairing",
      ]);
      return t != null && t === 0;
    }
    function E(e, t, n) {
      return t != null &&
        r("adsRegulatedCategoriesContainHECRegulatedCategory")(t)
        ? !1
        : (s() && !L(e)) || (M() && w(n));
    }
    function k(e) {
      if (e.length > 1) return !1;
      for (var t of e) if (R(t)) return !0;
      return !1;
    }
    function I(e) {
      if (!c()) return !1;
      var t = e.getIn([
        "targeting",
        "targeting_automation",
        "creative_audience_pairing",
      ]);
      return t != null && t > 0;
    }
    function T(e) {
      if (!c()) return !1;
      var t = e.getIn([
        "targeting",
        "targeting_automation",
        "creative_audience_pairing",
      ]);
      return t != null && t === 0;
    }
    function D(e, t, n, o) {
      return (
        o === void 0 && (o = !1),
        (t != null &&
          r("adsRegulatedCategoriesContainHECRegulatedCategory")(t)) ||
        (U() && !w(n)) ||
        (U() && o)
          ? !1
          : c() && !T(e)
      );
    }
    function x(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e != null && r("adsRegulatedCategoriesContainHECRegulatedCategory")(e)
          ? !1
          : U()
            ? w(t) && !n
            : s() || (M() && w(t)) || c()
      );
    }
    function $(e) {
      if (e.length > 1) return !1;
      for (var t of e) if (I(t)) return !0;
      return !1;
    }
    function P(e) {
      var t;
      if (!H()) return !1;
      var n =
        (t = e.targeting) == null || (t = t.targeting_automation) == null
          ? void 0
          : t.creative_audience_pairing;
      return n != null && n > 0;
    }
    function N(e) {
      var t;
      if (!c()) return !1;
      var n =
        (t = e.targeting) == null || (t = t.targeting_automation) == null
          ? void 0
          : t.creative_audience_pairing;
      return n != null && n > 0;
    }
    function M() {
      return B();
    }
    function w(e, t) {
      return (
        t === void 0 && (t = !1),
        e == null
          ? !1
          : U()
            ? r("CapaConfig").l0_closed_beta_objectives.includes(e) && !t
            : r("CapaConfig").close_beta_objectives.includes(e)
      );
    }
    function A() {
      return r("gkx")("6001");
    }
    function F(e, t) {
      return (
        t === void 0 && (t = !1),
        e == null || t
          ? !1
          : r("CapaConfig").l0_closed_beta_objectives.includes(e)
      );
    }
    function O() {
      return r("gkx")("6350");
    }
    function B() {
      return r("gkx")("6906");
    }
    function W() {
      return r("gkx")("8155");
    }
    function q() {
      return r("gkx")("17374") || U();
    }
    function U() {
      return r("gkx")("19371");
    }
    function V() {
      var e;
      r("gkx")("26788");
      var t = r("gkx")("4341");
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ads_targeting_capa_l0_closed_beta_impression",
          data: ((e = {}), (e.is_enabled = t), e),
        }),
        t
      );
    }
    function H() {
      return s() || M();
    }
    function G() {
      return O() || B();
    }
    function z() {
      return O() || B() || W() || q();
    }
    function j(e, t, n) {
      if ((n === void 0 && (n = !1), !r("justknobx")._("4453"))) return !1;
      var o = e.some(function (e) {
        var t = e.getIn([
          "targeting",
          "targeting_automation",
          "creative_audience_pairing",
        ]);
        return t != null && t > 0;
      });
      return o
        ? U() && n
          ? !0
          : O() || W() || q()
            ? !1
            : !B() && !U()
              ? !0
              : !w(t)
        : !1;
    }
    function K(e, t, n) {
      r(
        "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingAction",
      ).dispatch(
        {
          campaignIDs: e,
          creativeAudiencePairingStatus: 0,
          defaultMinAge: n,
          enableIndividualSettings: !1,
          hostID: t,
        },
        { line: "734", module: "CapaUtils.js", moduleID: i.id },
      );
    }
    function Q() {
      return s() ? 0 : M() ? 1 : null;
    }
    function X() {
      return O() ? 0 : B() || U() ? 1 : null;
    }
    var Y = ["age", "gender"];
    function J(e) {
      return Y.some(function (t) {
        return o(
          "AdsValueAdjustmentRuleCriteriaTypeUtils",
        ).ruleCollectionHasCriteriaType(e, t);
      });
    }
    function Z(e, t) {
      var n,
        r = e.length === 1 ? e[0].value_rule_set_id : null,
        o =
          r != null &&
          (n = t.find(function (e) {
            return e.id === r;
          })) != null
            ? n
            : null;
      return J(o);
    }
    function ee(e, t) {
      var n, o;
      if (e == null) return !1;
      var a = (n = e.age_min) != null ? n : t,
        i = (o = e.age_max) != null ? o : r("AdsValidationConsts").maxAge,
        l = t >= a,
        s = i === r("AdsValidationConsts").maxAge;
      return !(l && s);
    }
    function te(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.genders) != null ? t : [],
        r =
          n.length === 0 ||
          (n.length === 1 && n[0] === 0) ||
          (n.length === 2 && n.includes(1) && n.includes(2));
      return !r;
    }
    function ne(e, t) {
      return e == null ? !1 : ee(e, t) || te(e);
    }
    var re = {
      applyResetStaleCapaOnEdit: K,
      getCapaArm: Q,
      getCapaArmWithoutLogging: X,
      getCapaL0PersonaAssignedArm: p,
      getCapaL0PersonaQE: m,
      isCapaL1AdsNuxEnabled: g,
      isCapaL1AdsNuxOpenEnabled: h,
      hasNonDefaultAge: ee,
      hasNonDefaultGender: te,
      hasNonDefaultPersona: ne,
      isAnyCapaBetaEnabledWithoutLogging: z,
      isCAPAL0On: $,
      isCAPAOn: k,
      isCapaCloseBetaEnabled: M,
      isCapaCloseBetaEnabledWithoutLogging: B,
      isCapaCloseBetaObjectiveEligible: w,
      isCapaCloseBetaObjectiveEligibleForLogging: F,
      isCapaEnabled: H,
      isCapaEnabledinCampaignForGenericCampaignInterface: P,
      isCapaEnabledInCampaign: R,
      isCapaEnabledWithoutLogging: G,
      isCapaFieldExplicitlyDisabledInCampaign: L,
      isCapaL0EnabledinCampaignForGenericCampaignInterface: N,
      isCapaL0EnabledInCampaign: I,
      isCapaL0FieldExplicitlyDisabledInCampaign: T,
      isCapaOpenBetaEnabled: s,
      isCapaOpenBetaEnabledWithoutLogging: O,
      isSelectedValueRuleUsingAgeOrGender: J,
      isValueRuleUsingAgeOrGenderForCampaigns: Z,
      shouldResetStaleCapaOnEdit: j,
      shouldEnableCapaForCampaignWhenAdvantageTurnedOff: E,
      shouldEnableCapaL0ForCampaignWhenAdvantageTurnedOff: D,
      shouldRenderCapaL2: x,
      isCapaOpenBetaEnabledDU: S,
      isCapaOpenBetaExposureLogEnabled: u,
      isCapaL0OpenBetaEnabled: c,
      isCapaL0OpenBetaExposureLogEnabled: v,
      isCapaL0OpenBetaNewDesignExposureLogEnabled: b,
      isCapaL0OpenBetaNoTextEnabled: C,
      isCapaL0OpenBetaUXImprovementsEnabled: y,
      isCapaL0OpenBetaNewDesignEnabled: f,
      isCapaL0OpenBetaNewDesignEnabledWithoutLogging: q,
      isCapaL0ClosedBetaEnabledWithoutLogging: U,
      isCapaL0ClosedBetaEnabledWithLogging: V,
      isCapaCloseBetaEnabledWithLogging: A,
    };
    l.default = re;
  },
  98,
);
