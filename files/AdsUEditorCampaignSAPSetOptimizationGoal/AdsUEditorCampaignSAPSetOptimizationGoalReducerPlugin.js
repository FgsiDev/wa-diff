__d(
  "AdsUEditorCampaignSAPSetOptimizationGoalReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSAPSetOptimizationGoalActionFlux",
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
              var n;
              if (t.optimizationGoal == null) return e;
              var a;
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
                        t.optimizationGoal,
                      )
                    : null,
                l = o(
                  "adsUEditorCampaignSapAttributionWindowUtil",
                ).getAppConstraintsLawOverrides(
                  t.appConstraints,
                  t.optimizationGoal,
                  i,
                  t.isReadOnly,
                  e == null ? void 0 : e.attribution_spec,
                  t.isSKAdNetworkAttribution || t.isSKAdNetworkOrAEMAttribution,
                  (n = e.promoted_object) == null ? void 0 : n.object_store_url,
                );
              return o("AdsMutators").chain(
                function (e) {
                  return r("AdsCampaignRecordAccessors").optimization_goal.set(
                    t.optimizationGoal,
                    e,
                  );
                },
                function (e) {
                  return t.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").VALUE
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.custom_event_type.set("PURCHASE", e)
                    : e;
                },
                function (e) {
                  return t.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").IN_APP_VALUE
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.custom_event_type.set(
                        "AD_IMPRESSION",
                        e,
                      )
                    : e;
                },
                function (e) {
                  var n, r;
                  return o(
                    "adsUEditorCampaignSapAttributionWindowUtil",
                  ).sapAttributionWindowMutator(
                    e,
                    l,
                    t.optimizationGoal,
                    t.isSKAdNetworkAttribution,
                    t.isSKAdNetworkOrAEMAttribution,
                    o(
                      "adsUEditorCampaignSapAttributionWindowUtil",
                    ).isCustomEventOptimization(
                      (n = e.promoted_object) == null
                        ? void 0
                        : n.custom_event_type,
                    ),
                    (r = e.promoted_object) == null
                      ? void 0
                      : r.object_store_url,
                  );
                },
              )(e);
            });
          },
          o("AdsUEditorCampaignSAPSetOptimizationGoalActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
