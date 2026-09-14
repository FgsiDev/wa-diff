__d(
  "AdsMessageMarketingLiquidityLoggingUtils",
  [
    "adsAdvertiserProfileMessageMarketingActivationStatusBootloadedSelector",
    "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
    "areAdObjectsMessageMarketingCompatible",
    "gkx",
    "isMessageMarketingEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e == null || t == null
        ? !1
        : r("areAdObjectsMessageMarketingCompatible")(e, t);
    }
    function s() {
      var e;
      return (e = r(
        "adsAdvertiserProfileMessageMarketingActivationStatusBootloadedSelector",
      )()) == null
        ? void 0
        : e.getValue();
    }
    function u() {
      var e,
        t =
          (e = r(
            "adsCampaignMessageMarketingLiquidityDynamicDefaultsBootloadedSelector",
          )()) == null
            ? void 0
            : e.messageMarketingDefaultWACSLO;
      return (t == null ? void 0 : t.hasValue()) === !0
        ? (t == null ? void 0 : t.getValue()) != null
        : null;
    }
    function c(t, n) {
      return r("gkx")("13496")
        ? {
            is_mm_enabled: o(
              "isMessageMarketingEnabledFromCampaign",
            ).isMessageMarketingEnabledFromCampaign(n),
            is_mm_compatible: e(t, n),
            is_mm_partially_compatible: e(t, n),
            has_phone_number: u(),
            is_mm_activated: s(),
          }
        : null;
    }
    l.getMessageMarketingLiquidityCampaignFragmentCreatedDataForLogging = c;
  },
  98,
);
