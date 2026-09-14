__d(
  "AdsUEditorCampaignDeliveryChangeCustomEventTypeReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsCampaignRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsPCAConsolidationUtils",
    "AdsSAInDAUtils",
    "AdsUEditorCampaignDeliveryChangeCustomEventTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a = e;
              ((a = o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.custom_event_type.set(t.customEventType),
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.custom_event_str.set(t.customEventStr),
              )(a)),
                t.customEventType === "AD_IMPRESSION" &&
                  (a = o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").bid_constraints
                      .roas_average_floor.delete,
                    r("AdsCampaignRecordAccessors").bid_strategy.set(
                      r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                    ),
                    r("AdsCampaignRecordAccessors").is_autobid.set(!0),
                  )(a)));
              var i = o("AdsSAInDAUtils").isGKEnableForSAInDA(),
                l =
                  o("AdsPCAConsolidationUtils").isPCAVariation(e) &&
                  ((n = e.promoted_object) == null ? void 0 : n.variation) ===
                    "PRODUCT_SET_AND_OMNICHANNEL";
              if (
                (i &&
                  l &&
                  (a = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setEventTypeForOmnichannelPixelAndAppObject(
                    a,
                    t.customEventType,
                  )),
                r("gkx")("20768"))
              ) {
                var s;
                (t.pixelID != null &&
                  ((s = e.promoted_object) == null
                    ? void 0
                    : s.omnichannel_object) != null &&
                  (a = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setOmnichannelPixelObjectFromCustomConversion(
                    a,
                    t.pixelID,
                    t.pixelRule,
                  )),
                  t.customConversionID != null &&
                    (a = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.custom_conversion_id.set(
                      t.customConversionID,
                    )(a)));
              }
              return a;
            });
          },
          o("AdsUEditorCampaignDeliveryChangeCustomEventTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
