__d(
  "AdsUEditorCampaignDeliveryChangeOmnichannelOnsiteObjectReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelOnsiteObjectActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "adsUEditorAccountSelector",
    "adsUEditorEligibleForNoCMSSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t) {
            var n = t.campaignIDs,
              a = t.commerceMerchantSettingsID,
              i = t.defaultConversionEvent,
              l = t.pixelList;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = o(
                  "AdsUEditorCampaignShopAdsUtils",
                ).isShopsAdsIncentiveProgram(
                  r("adsConvertAdObjectRecordToPlainJS")(e),
                ),
                n = e;
              return (
                t &&
                  (n = o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").promoted_object.pixel_id
                      .delete,
                    r("AdsCampaignRecordAccessors").promoted_object
                      .custom_event_type.delete,
                    r("AdsCampaignRecordAccessors").promoted_object
                      .custom_event_str.delete,
                  )(n)),
                (!o("adsUEditorEligibleForNoCMSSelector").isEligibleForNoCMS({
                  logExposureForCMSRemoval: !1,
                }) ||
                  a != null) &&
                  (n = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setCommerceMerchantSettingsForOmnichannelObject(n, a)),
                i != null &&
                  (n = o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setEventTypeForOmnichannelPixelAndAppObject(
                    n,
                    i.offsiteCustomEventType,
                  )),
                (n = o(
                  "AdsDeliveryOmnichannelUtils",
                ).setDefaultPixelForOmnichannelOnsitePixelObject(n, l)),
                n
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOmnichannelOnsiteObjectActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
