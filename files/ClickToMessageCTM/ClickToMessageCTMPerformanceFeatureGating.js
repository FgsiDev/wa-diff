__d(
  "ClickToMessageCTMPerformanceFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsGetDefaultIceBreakers",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationUtils",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageAIGenEligibilityUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "WebToWhatsappUtils",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      return (
        c(e, t, n) ||
        u(e, t, n) ||
        o("ClickToMessageCTDFeatureGating").shouldEnableCTDAIGenIcebreakers(
          e,
          t,
        ) ||
        o("ClickToMessageCTWAFeatureGating").isInCTWAAIGenIcebreakersPopulation(
          e,
          t,
          r,
        ) ||
        o("ClickToMessageCTWAFeatureGating").isInCTWAAIGenPrefillPopulation(
          e,
          t,
          r,
        ) ||
        o("WebToWhatsappUtils").isInWTWAAIGenPrefillPopulation(e, a, t, r) ||
        T(e, t)
      );
    }
    function s(e, t, n, r) {
      return (
        c(e, t, null) ||
        o("ClickToMessageCTDFeatureGating").shouldEnableCTDAIGenIcebreakers(
          e,
          t,
        ) ||
        o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenIcebreakers(
          e,
          t,
          n,
        ) ||
        o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenPrefill(
          e,
          t,
          n,
        ) ||
        o("WebToWhatsappUtils").shouldEnableWTWAAIGenPrefill(e, r, t, n) ||
        T(e, t)
      );
    }
    function u(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        r("isTruthy")(n) &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(t)
      );
    }
    function c(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(
          t,
        ) &&
        r("isFalsey")(n)
      );
    }
    function d() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function m() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function p(e) {
      return e === r("AdCampaignDestination").MESSENGER;
    }
    function _() {
      return r("gkx")("758");
    }
    function f() {
      var e;
      return (e = r("qex")._("96")) != null ? e : !1;
    }
    function g(e) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isCTM(e) ||
        (o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) && f())
      );
    }
    function h(e, t, n, a, i) {
      if (!o("AdsUEditorMessagingDestinationUtils").isCTM(t)) return !1;
      var l = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(
          a,
          n,
          t,
          i,
        ),
        s = o(
          "AdsUEditorUnifiedCreationUtils",
        ).getSelectedCustomerActionBasedOnDestination(l, t);
      if (s !== r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS)
        return !1;
      var u = e ? !1 : r("qex")._("315");
      return u != null ? u : !1;
    }
    function y() {
      return r("gkx")("5448");
    }
    function C(e) {
      return r("isFalsey")(e) ? !1 : r("gkx")("801");
    }
    function b(e, t, n, o, a, i) {
      return r("isFalsey")(e)
        ? !1
        : t === r("AdCampaignDestination").MESSENGER &&
            n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION &&
            (o === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
              o === r("AdsAPIObjectives").OUTCOME_SALES) &&
            a === !0 &&
            i === r("AdsAPIBidStrategies").COST_CAP;
    }
    function v(e, t, n, a) {
      return (
        (e === r("AdCampaignDestination").MESSENGER ||
          o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
            n,
            e,
            !1,
            a,
          )) &&
        o("AdsGetDefaultIceBreakers").getInboxFAQs(t).length > 0
      );
    }
    function S(e, t, n) {
      return o(
        "ClickToMessageAIGenEligibilityUtils",
      ).isAdCaptionEligibleForAIGen(t)
        ? o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessenger(e)
          ? r("qex")._("4151") === !0
          : e === r("AdCampaignDestination").MESSENGER &&
            r("isTruthy")(n) &&
            r("qex")._("2144") === !0
        : !1;
    }
    function R(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(
          t,
        ) &&
        r("isTruthy")(n) &&
        r("qex")._("2144") === !0
      );
    }
    function L(e) {
      switch (e) {
        case r("AdCampaignDestination").MESSENGER:
          return r("qex")._("2952") === !0;
        case r("AdCampaignDestination").WHATSAPP:
          return r("qex")._("5343") === !0;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return r("justknobx")._("2734");
        default:
          return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
            ? r("qex")._("2952") === !0
            : !1;
      }
    }
    function E(e) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isGenAINudgeEligibleDestination(e)
        ? r("qex")._("5405") === !0
        : !1;
    }
    function k(e, t) {
      if (
        (t === void 0 && (t = !1),
        !o(
          "AdsUEditorMessagingDestinationUtils",
        ).isMultiDestinationWithMessenger(e) ||
          o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e))
      )
        return !1;
      var n = t ? r("qex")._("1021") : r("qex")._("1299");
      return n === !0;
    }
    function I() {
      return r("qex")._("3513") === !0 || r("gkx")("20755") === !0;
    }
    function T(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(t)
      );
    }
    ((l.isEligibleForCTXAIGenIcebreakers = e),
      (l.shouldEnableCTXAIGenIcebreakersCreateNew = s),
      (l.isEligibleForCTMAIGenIcebreakersExistingPost = u),
      (l.shouldEnableCTMAIGenIcebreakersCreateNew = c),
      (l.deprecateQuickReplies = d),
      (l.connectYourBotOnIcebreakers = m),
      (l.enableCTMNudge = p),
      (l.enableCTXWrongCTAExistingPostSettingFix = _),
      (l.isPerformanceBoosterEnabledForCTXMD = f),
      (l.enablePerformanceBoosterForDestination = g),
      (l.enableMessageTemplateEditOnL1 = h),
      (l.enableSetMessageTemplateInCreateAd = y),
      (l.enableCostCapForPurchaseOptimization = C),
      (l.isEligibleForCostCapPurchaseOptimization = b),
      (l.isEligibleForLeveragingInboxFAQsInAM = v),
      (l.shouldEnableCTMAIGenAutomatedResponses = S),
      (l.shouldEnableCTMAIGenRegeneration = R),
      (l.shouldShowGenAIWelcomeMessage = L),
      (l.shouldEnableGenAINudge = E),
      (l.shouldEnableAMMDNudgeExpansion = k),
      (l.enableCtxRecommendedTemplatePFR = I),
      (l.isEligibleForCTXMDAIGenIcebreakers = T));
  },
  98,
);
