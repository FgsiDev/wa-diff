__d(
  "AdsUEditorCampaignAttributionTypeReducerPlugin",
  [
    "AEMv2AdCampaignAttribution",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignAttributionTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "IsAppAdUtils",
    "adsUEditorCampaignSapAttributionWindowUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a,
                i = e;
              return (
                (i = r("AdsCampaignRecordAccessors").campaign_attribution.set(
                  t.selectedCampaignAttributionType,
                  e,
                )),
                !t.isSmartAppPromotion &&
                t.selectedCampaignAttributionType ===
                  r("AEMv2AdCampaignAttribution").AEM &&
                r("IsAppAdUtils").getIsMAISupportedAEOorVO(e.optimization_goal)
                  ? i
                  : o(
                      "adsUEditorCampaignSapAttributionWindowUtil",
                    ).sapAttributionWindowMutator(
                      i,
                      t.attributionWindowDays,
                      i.optimization_goal,
                      t.selectedCampaignAttributionType ===
                        r("AEMv2AdCampaignAttribution").SKADNETWORK,
                      t.selectedCampaignAttributionType ===
                        r("AEMv2AdCampaignAttribution").AEM,
                      o(
                        "adsUEditorCampaignSapAttributionWindowUtil",
                      ).isCustomEventOptimization(
                        (n = i.promoted_object) == null
                          ? void 0
                          : n.custom_event_type,
                      ),
                      (a = i.promoted_object) == null
                        ? void 0
                        : a.object_store_url,
                    )
              );
            });
          },
          o("AdsUEditorCampaignAttributionTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
