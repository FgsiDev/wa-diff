__d(
  "AdsUEditorCampaignEngagedViewUpdateReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupEngagedViewUpdateActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "LoadObject",
    "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
    "adsUEditorAccountSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              l = n.campaignIDToCampaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var n,
                  o = r("nullthrows")(l.get(t)),
                  a = r("LoadObject").withValue(o, { creatorModuleID: i.id });
                if (
                  e.optimization_goal !==
                  r("AdsAPIOptimizationGoals").APP_INSTALLS
                )
                  return e;
                var s = r("AdsAppUrlUtils").isGooglePlayURL(
                  (n = e.promoted_object) == null ? void 0 : n.object_store_url,
                );
                if (!s || !a.hasValue()) return e;
                var u = a.value,
                  c = u == null ? void 0 : u.objective,
                  d = u == null ? void 0 : u.smart_promotion_type;
                return c === r("AdsAPIObjectives").APP_INSTALLS &&
                  d === "SMART_APP_PROMOTION"
                  ? r("AdsCampaignRecordAccessors").attribution_spec.set(
                      r("immutable").fromJS(
                        r("adsDeliveryUpdateEngagedVideoViewAttributionWindow")(
                          e.attribution_spec ? e.attribution_spec.toJS() : [],
                          1,
                        ),
                      ),
                      e,
                    )
                  : e;
              },
            );
          },
          o("AdsUEditorCampaignGroupEngagedViewUpdateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
