__d(
  "AdsUEditorCampaignSAPCustomEventOptimizationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSAPCustomEventOptimizationActionFlux",
    "adsUEditorCampaignSapAttributionWindowUtil",
    "adsUEditorCampaignSmartAttributionWindowUtil",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n, a;
              r("ifRequired")(
                "AdsUEditorAppSmartAttributionWindowDataProvider",
                function (e) {
                  a = e;
                },
              );
              var i =
                  a != null
                    ? o(
                        "adsUEditorCampaignSmartAttributionWindowUtil",
                      ).getSmartAttributionWindowData(
                        a(),
                        t.promotedAppId,
                        e.optimization_goal,
                      )
                    : null,
                l = o(
                  "adsUEditorCampaignSapAttributionWindowUtil",
                ).getAppConstraintsLawOverrides(
                  t.appConstraints,
                  e.optimization_goal,
                  i,
                  t.isReadOnly,
                  e == null ? void 0 : e.attribution_spec,
                  t.isSKAdNetworkOrAEMAttribution,
                  (n = e.promoted_object) == null ? void 0 : n.object_store_url,
                );
              return o("AdsMutators").chain(
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
                function (e) {
                  var n;
                  return o(
                    "adsUEditorCampaignSapAttributionWindowUtil",
                  ).sapAttributionWindowMutator(
                    e,
                    l,
                    e.optimization_goal,
                    t.isSKAdNetworkAttribution,
                    t.isSKAdNetworkOrAEMAttribution,
                    o(
                      "adsUEditorCampaignSapAttributionWindowUtil",
                    ).isCustomEventOptimization(
                      t.promotedEventType.customEventType,
                    ),
                    (n = e.promoted_object) == null
                      ? void 0
                      : n.object_store_url,
                  );
                },
              )(e);
            });
          },
          o("AdsUEditorCampaignSAPCustomEventOptimizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
