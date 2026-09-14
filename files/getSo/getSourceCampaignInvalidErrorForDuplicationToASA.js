__d(
  "getSourceCampaignInvalidErrorForDuplicationToASA",
  [
    "AdCampaignDestination",
    "AdsDeliveryOmnichannelUtils",
    "AutomatedShoppingAdsDuplicationTooltipStrings",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, a;
      t === void 0 && (t = !1);
      var i =
        r("isTruthy")(e.is_dynamic_creative) ||
        r("isTruthy")(e.is_dynamic_creative_asset_customization) ||
        r("isTruthy")(e.is_dynamic_creative_optimization);
      if (i)
        return o("AutomatedShoppingAdsDuplicationTooltipStrings")
          .DUPLICATION_AD_DCO_TOOLTIP;
      var l = new Set([r("AdCampaignDestination").UNDEFINED, null, void 0]),
        s =
          e.destination_type === r("AdCampaignDestination").WEBSITE ||
          (l.has(e.destination_type) &&
            (e.promoted_object == null ||
              (((n = e.promoted_object) == null ? void 0 : n.application_id) ==
                null &&
                ((a = e.promoted_object) == null
                  ? void 0
                  : a.omnichannel_object) == null))),
        u = o("AdsDeliveryOmnichannelUtils").canUseOmnichannelForWebsiteAndApp(
          e,
        );
      return !s && !u
        ? o("AutomatedShoppingAdsDuplicationTooltipStrings")
            .DUPLICATION_AD_INVALID_CONVERSION_LOCATION_TOOLTIP
        : null;
    }
    l.default = e;
  },
  98,
);
