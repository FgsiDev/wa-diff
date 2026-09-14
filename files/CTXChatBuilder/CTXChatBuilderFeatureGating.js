__d(
  "CTXChatBuilderFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsUEditorMessagingDestinationUtils",
    "CTXChatBuilderPartnerAppStoreUtils",
    "CTXChatBuilderPartnerAppUtils",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "ClickToMessageCTDFeatureGating",
    "EngagementUnitificationGating",
    "WebToXFeatureGating",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, u, c, C, b) {
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        c === void 0 && (c = !1),
        C === void 0 && (C = !1),
        b === void 0 && (b = !1),
        y(b, e, !1) ||
          S(t, null, e, i, c) ||
          ((n === r("AdsAPIObjectives").OUTCOME_LEADS ||
            n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
            C === !0 &&
            e === r("AdCampaignDestination").MESSENGER))
      )
        return !0;
      var v = o("CTXChatBuilderPartnerAppUtils").getAppList(e, t, a),
        R = v != null && v.length > 0;
      if (
        (R || l) &&
        o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(e)
      )
        return !1;
      if (u === "messenger") return f(u, e, !1, n);
      if (u === "whatsapp") return g(u, e, !1, n);
      if (u === "instagram_message") return h(u, e, !1, n);
      var L = d(e),
        E = m(e, n, C),
        k = _(e),
        I = p(e, t, n);
      return (
        L ||
        E ||
        k ||
        I ||
        (o("EngagementUnitificationGating").getEULaunch1Experiment(!1) &&
          s(e, t, n))
      );
    }
    function s(e, t, n) {
      return (
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableUnstructuredLeadsOptimization(t, n, e))
      );
    }
    function u(t, n, r, o, a, i, l, s, u, d, m) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        s === void 0 && (s = !1),
        u === void 0 && (u = !1),
        d === void 0 && (d = !0),
        m === void 0 && (m = !1),
        e(t, n, r, o, a, i, l, s, u, m) ? !0 : c(t, r, d)
      );
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = !0),
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) ||
        (t !== r("AdsAPIObjectives").OUTCOME_SALES &&
          t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t !== r("AdsAPIObjectives").OUTCOME_TRAFFIC &&
          t !== r("AdsAPIObjectives").LINK_CLICKS) ||
        (o("AdsUEditorMessagingDestinationUtils").isWebsiteAdDestination(e) &&
          n !== !0)
          ? !1
          : o("ClickToMessageCTDFeatureGating").isEligibleForCommentToDM(
              t,
              e,
              void 0,
            )
      );
    }
    function d(e) {
      return e === r("AdCampaignDestination").WHATSAPP;
    }
    function m(e, t, n) {
      return (
        n === void 0 && (n = !1),
        t === r("AdsAPIObjectives").OUTCOME_LEADS
          ? n === !0 && e === r("AdCampaignDestination").MESSENGER
          : e === r("AdCampaignDestination").MESSENGER
      );
    }
    function p(e, t, n) {
      if (
        e === r("AdCampaignDestination").ON_POST ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        (e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          o(
            "CTXUnstructuredLeadsAdsStoreUtils",
          ).enableUnstructuredLeadsOptimization(t, n, e))
      ) {
        var a;
        return (a = r("qex")._("4118")) != null ? a : !1;
      }
      return !1;
    }
    function _(e) {
      return (
        !o("AdsUEditorMessagingDestinationUtils").isSingleDestination(e) &&
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
      );
    }
    function f(e, t, n, a) {
      return e !== "messenger" || t === r("AdCampaignDestination").MESSENGER
        ? !1
        : a !== r("AdsAPIObjectives").OUTCOME_SALES
          ? o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
          : !0;
    }
    function g(e, t, n, a, i) {
      return (
        n === void 0 && (n = !1),
        e !== "whatsapp" || t === r("AdCampaignDestination").WHATSAPP
          ? !1
          : a === r("AdsAPIObjectives").OUTCOME_SALES
            ? o("WebToXFeatureGating").enableWTWAMessageTemplateQE(n, i)
            : o("WebToXFeatureGating").enableWTXNonSalesMessageTemplate(n)
      );
    }
    function h(e, t, n, o) {
      return (
        n === void 0 && (n = !1),
        !(
          e !== "instagram_message" ||
          t === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          o !== r("AdsAPIObjectives").OUTCOME_SALES
        )
      );
    }
    function y(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !e || t === r("AdCampaignDestination").WHATSAPP
          ? !1
          : o("WebToXFeatureGating").enablePTWAMessageTemplateQE(n)
      );
    }
    function C(e, t, n, r) {
      var a = h(e, t, !1, n);
      return a ? o("WebToXFeatureGating").enableWTDFollowUp(r) : !1;
    }
    function b(e, t) {
      return e === "instagram_message"
        ? t && o("WebToXFeatureGating").enableWTDChatBuilderDefaultExpanded(!0)
        : !1;
    }
    function v() {
      return r("justknobx")._("1345");
    }
    function S(e, t, n, r, a, i) {
      if (
        (r === void 0 && (r = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        o("CTXChatBuilderPartnerAppUtils").isWhatsAppOnlyDestination(n))
      )
        return a && v();
      if (
        !o(
          "CTXChatBuilderPartnerAppUtils",
        ).isValidDestinationForPartnerAppConnector(n)
      )
        return !1;
      var l = o(
        "CTXChatBuilderPartnerAppStoreUtils",
      ).getPartnerAppWelcomeMessageData(e);
      if (i) {
        var s = o(
          "CTXChatBuilderPartnerAppUtils",
        ).checkHasCompatiblePartnerAppFlows(l, n);
        return s && v();
      }
      var u = o("CTXChatBuilderPartnerAppUtils").checkHasJSONTemplates(t),
        c = o("CTXChatBuilderPartnerAppUtils").checkHasPartnerAppFlows(l);
      return (c || u) && v();
    }
    ((l.enableMessageTemplateRedesign = u),
      (l.isC2DMOnlyChatBuilder = c),
      (l.enableMessageTemplateRedesignForCTD = p),
      (l.enableMessageTemplateForWTM = f),
      (l.enableMessageTemplateForWTWA = g),
      (l.enableMessageTemplateForWTD = h),
      (l.enableMessageTemplateForPTWA = y),
      (l.enableWTDNudge = C),
      (l.shouldDefaultExpandWTXChatBuilder = b),
      (l.isPartnerAppSavedTemplateRedesignQEEnabled = v),
      (l.isPartnerAppSavedTemplateRedesignEnabled = S));
  },
  98,
);
