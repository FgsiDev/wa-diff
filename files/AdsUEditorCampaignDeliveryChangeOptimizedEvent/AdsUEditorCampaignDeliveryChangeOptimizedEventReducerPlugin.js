__d(
  "AdsUEditorCampaignDeliveryChangeOptimizedEventReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOptimizedEventActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsDeliveryUpdateClickThroughAttributionWindow",
    "adsUEditorCampaignSapAttributionWindowUtil",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e;
              return (
                (n = o("AdsMutators").chain(
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.custom_event_type.set(
                    t.promotedEventType.customEventType,
                  ),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.custom_event_str.set(
                    t.promotedEventType.customEventStr,
                  ),
                )(n)),
                t.promotedEventType.customEventType === "OTHER" &&
                  r("isFalsey")(t.promotedEventType.customEventStr) &&
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.custom_event_type.delete(n)),
                t.promotedEventType.customEventType === "AD_IMPRESSION" &&
                  (o(
                    "adsUEditorCampaignSapAttributionWindowUtil",
                  ).isLongAttributionWindowSupported(
                    e.optimization_goal,
                    o(
                      "AdsAPICampaignRecordUtils",
                    ).isSKAdNetworkCampaignAttribution(e),
                  ) ||
                    (n = r("AdsCampaignRecordAccessors").attribution_spec.set(
                      r("immutable").fromJS(
                        r("adsDeliveryUpdateClickThroughAttributionWindow")(
                          n.attribution_spec ? n.attribution_spec.toJS() : [],
                          o(
                            "adsUEditorCampaignSapAttributionWindowUtil",
                          ).mapAttributionWindow("1_day_click_through"),
                        ),
                      ),
                      n,
                    ))),
                n
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeOptimizedEventActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
