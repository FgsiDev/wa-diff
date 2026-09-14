__d(
  "AdsConversionValueUtils",
  [
    "AccountAttributionEvent",
    "AdCampaignConversionMultiEventProducts",
    "AdCampaignLJORollout",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
    "AdsGVOBetaConfig.experimental",
    "AdsOptimizationMutationUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignDeliveryChangeAttributionTypeAction",
    "AdsUEditorCampaignDeliveryChangeConversionWindowAction",
    "AdsUEditorCampaignSetAttributionSpecAction",
    "AdsValueOptimizationUtils",
    "IsAppAdUtils",
    "SignalsWebsiteOptimizableConversionBaseTypeEnum",
    "gkx",
    "immutable",
    "isFalsey",
    "isLeadGenNPVOEnabledForAccount",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      if ((l === void 0 && (l = !1), r("isFalsey")(o))) return [];
      var s = [];
      return (
        !a && b(e, t, n, i) && o === "PURCHASE" && s.push("MARGIN"),
        C(e, t, n, l) &&
          r("AdsGVOBetaConfig.experimental").SUPPORTED_PLTV_EVENTS.includes(
            o,
          ) &&
          s.push("LIFETIME_VALUE"),
        s.length > 0 &&
          (o === "PURCHASE" ||
            r("AdsGVOBetaConfig.experimental").SUPPORTED_NPVO_EVENTS.includes(
              o,
            ) ||
            r("AdsGVOBetaConfig.experimental").SUPPORTED_PLTV_EVENTS.includes(
              o,
            )) &&
          s.unshift("VALUE"),
        s
      );
    }
    function s(e) {
      return e == null || e === "VALUE";
    }
    function u(e, t, n, o, a, i, l, s) {
      s === void 0 && (s = !1);
      var u = [];
      return (
        y(e, t, n, l) && u.push.apply(u, g(i)),
        C(e, t, n, s) &&
          u.push.apply(
            u,
            r("AdsGVOBetaConfig.experimental").SUPPORTED_PLTV_EVENTS,
          ),
        r("IsAppAdUtils").isInAppAdsEligible(e, null, o, t, a) &&
          u.push.apply(
            u,
            r("AdsGVOBetaConfig.experimental").SUPPORTED_IN_APP_EVENTS,
          ),
        v(e, t, n) && u.push.apply(u, h(i)),
        new Set(u)
      );
    }
    function c(e, t, n, o, a, i) {
      return (
        y(e, t, n, i) &&
        o != null &&
        r("AdsGVOBetaConfig.experimental").SUPPORTED_NPVO_EVENTS.includes(o) &&
        s(a)
      );
    }
    function d(e, t, n, r, o, a) {
      return b(e, t, n, a) && r === "PURCHASE" && o === "MARGIN";
    }
    function m(e, t, n) {
      if (e !== r("AdsAPIOptimizationGoals").VALUE) return !1;
      if (n === "MARGIN") return !r("gkx")("477");
      if (n === "LIFETIME_VALUE") return !1;
      var o =
        r("isLeadGenNPVOEnabledForAccount")() &&
        t != null &&
        r("AdsGVOBetaConfig.experimental").SUPPORTED_LEAD_GEN_EVENTS.includes(
          t,
        );
      return !(
        t === "PURCHASE" ||
        (t != null &&
          r("AdsGVOBetaConfig.experimental").SUPPORTED_NPVO_EVENTS.includes(
            t,
          )) ||
        o
      );
    }
    function p(e) {
      var t = e.campaignGroupIDs,
        n = e.campaignIDs,
        a = e.hasProductCatalogID,
        l = e.hostID,
        s = e.objective,
        u = e.optimizationEvent,
        c = e.optimizationGoal,
        d = e.valueSemanticType,
        m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(s);
      if (
        (S(s, c, m) || L(s, c, m)) &&
        t != null &&
        n != null &&
        o("AdsValueOptimizationUtils").isViewThroughDefaultEnabledForVOQE()
      ) {
        var p = _({
          customEventType: u,
          objective: s,
          optimizationGoal: c,
          promotedObjectType: m,
          valueSemanticType: d,
          hasProductCatalogId: a,
        })
          ? 1
          : 0;
        r("AdsUEditorCampaignDeliveryChangeConversionWindowAction").dispatch(
          {
            campaignGroupIDs: t,
            campaignIDs: n,
            eventType: r("AccountAttributionEvent").VIEW_THROUGH,
            hostID: l,
            windowDays: p,
          },
          { line: "312", module: "AdsConversionValueUtils.js", moduleID: i.id },
        );
      }
    }
    function _(e) {
      var t = e.customEventType,
        n = e.hasProductCatalogId,
        r = e.objective,
        o = e.optimizationGoal,
        a = e.promotedObjectType,
        i = e.valueSemanticType;
      return t === null || c(r, o, a, t, i, n)
        ? !0
        : t === "PURCHASE" && (i == null || i === "VALUE");
    }
    function f(e, t, n, a, l, s, u, c, d, m, p) {
      if (p !== !0) {
        var _ = o(
            "AdsEventsManagerSequencedConversionsCreationEligibilityUtils",
          ).isSetupEligibleForSequencedEventCreation(t, n, a),
          f =
            c ===
            r("SignalsWebsiteOptimizableConversionBaseTypeEnum").FUNNEL_PAIR,
          g =
            c ===
            r("SignalsWebsiteOptimizableConversionBaseTypeEnum")
              .SEQUENCED_EVENT,
          h =
            (d ===
              r("AdCampaignConversionMultiEventProducts")
                .BANKING_AND_CREDIT_CARDS ||
              m === !0) &&
            _ !== r("AdCampaignLJORollout").NO_ACCESS,
          y = f !== h || g !== h;
        if (s != null && y) {
          var C = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
              e,
              t,
              n,
              a,
              l,
              null,
              null,
              void 0,
              f || g
                ? r("AdCampaignConversionMultiEventProducts")
                    .BANKING_AND_CREDIT_CARDS
                : null,
              f || g ? m : null,
            ).attribution_spec,
            b = r("immutable").List(
              C.map(function (e) {
                return r("immutable").Map(e);
              }),
            );
          (r("AdsUEditorCampaignSetAttributionSpecAction").dispatch(
            { campaignIDs: s, hostID: u, attributionSpec: b },
            {
              line: "417",
              module: "AdsConversionValueUtils.js",
              moduleID: i.id,
            },
          ),
            (f || g) &&
              _ !== r("AdCampaignLJORollout").NO_ACCESS &&
              r(
                "AdsUEditorCampaignDeliveryChangeAttributionTypeAction",
              ).dispatch(
                { campaignIDs: s, hostID: u, attributionType: 0 },
                {
                  line: "427",
                  module: "AdsConversionValueUtils.js",
                  moduleID: i.id,
                },
              ));
        }
      }
    }
    function g(e) {
      return r("gkx")("4686")
        ? r("AdsGVOBetaConfig.experimental").SUPPORTED_NPVO_EVENTS
        : e.filter(function (e) {
            return r(
              "AdsGVOBetaConfig.experimental",
            ).SUPPORTED_NPVO_EVENTS.includes(e);
          });
    }
    function h(e) {
      return r("qex")._("5795") === !0
        ? r("AdsGVOBetaConfig.experimental").SUPPORTED_LEAD_GEN_EVENTS
        : e.filter(function (e) {
            return r(
              "AdsGVOBetaConfig.experimental",
            ).SUPPORTED_LEAD_GEN_EVENTS.includes(e);
          });
    }
    function y(e, t, n, r) {
      var o = R(e, t, n, r);
      if (o) return !0;
      var a = S(e, t, n);
      return a ? !0 : L(e, t, n) && k();
    }
    function C(e, t, n, o) {
      return (
        o === void 0 && (o = !1),
        o ? !1 : S(e, t, n) && r("qex")._("1994") === !0
      );
    }
    function b(e, t, n, o) {
      var a = S(e, t, n) && r("qex")._("1286") === !0,
        i = r("gkx")("11882") && R(e, t, n, o),
        l = r("gkx")("12767") && L(e, t, n);
      return a || i || l;
    }
    function v(e, t, n) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS &&
        t === r("AdsAPIOptimizationGoals").VALUE &&
        n === r("AdsPromotedObjectTypes").PIXEL
      );
    }
    function S(e, t, n) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES &&
        t === r("AdsAPIOptimizationGoals").VALUE &&
        n === r("AdsPromotedObjectTypes").PIXEL
      );
    }
    function R(e, t, n, o) {
      return r("justknobx")._("1148") && o != null
        ? I(e, o) && t === r("AdsAPIOptimizationGoals").VALUE
        : (e === r("AdsAPIObjectives").OUTCOME_SALES ||
            e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) &&
            t === r("AdsAPIOptimizationGoals").VALUE &&
            n === r("AdsPromotedObjectTypes").PRODUCT_SET;
    }
    function L(e, t, n) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES &&
        t === r("AdsAPIOptimizationGoals").VALUE &&
        n === r("AdsPromotedObjectTypes").WEB_AND_APP
      );
    }
    function E(e, t, n) {
      var a =
          e === r("AdsPromotedObjectTypes").PIXEL ||
          e === r("AdsPromotedObjectTypes").PRODUCT_SET ||
          e === r("AdsPromotedObjectTypes").WEB_AND_APP,
        i =
          t === r("AdsAPIObjectives").OUTCOME_SALES ||
          t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        l = o("AdsBulkValueUtils").getUniformValue(n),
        s =
          l === r("AdsAPIOptimizationGoals").VALUE ||
          l === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND;
      return i && !a && s;
    }
    function k() {
      return !0;
    }
    function I(e, t) {
      return !!(
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        (e === r("AdsAPIObjectives").OUTCOME_SALES && t)
      );
    }
    ((l.getEligibleValueSemanticTypes = e),
      (l.isUnknownValueSemanticType = s),
      (l.getEligibleNonPurchaseEventTypes = u),
      (l.isCampaignUsingNPVO = c),
      (l.isCampaignUsingMargin = d),
      (l.isEVCDisabledForGVO = m),
      (l.handleViewThroughDefaultingForSalesWebVO = p),
      (l.shouldDefaultViewThroughWindowForSalesWebVO = _),
      (l.handleDefaultAttributionSettingForFunnel = f),
      (l.isCampaignEligibleForWebPLTV = C),
      (l.isCatalogVOCampaign = R),
      (l.isUnsupportedConversionChannelForVO = E),
      (l.shouldShowWebAppNPVOEvents = k),
      (l.isSalesCatalogCampaign = I));
  },
  98,
);
