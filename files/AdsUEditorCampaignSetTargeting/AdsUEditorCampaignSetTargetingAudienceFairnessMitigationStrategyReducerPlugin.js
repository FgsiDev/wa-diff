__d(
  "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyReducerPlugin",
  [
    "AdsMutators",
    "AdsTargetingAudienceFairnessUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignIDToRegulatedCategoriesMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            campaignIDToBuyingTypeMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
          },
          function (e, t, n) {
            var r = n.campaignIDToBuyingTypeMap,
              a = n.campaignIDToRegulatedCategoriesMap,
              i = t.campaignIDs,
              l = t.hostID,
              s = t.tafeCaMitigationStrategy;
            return i == null || l == null
              ? e
              : o("AdsMutators").mutateEach(e, i, function (e, n) {
                  var i,
                    l,
                    u =
                      (i = t.regulatedCategories) != null
                        ? i
                        : (l = a.get(n)) == null
                          ? void 0
                          : l.toArray();
                  return o(
                    "AdsTargetingAudienceFairnessUtils",
                  ).maybeUpdateTAFEMitigationStrategyInCampaignRecord(
                    e,
                    u,
                    r == null ? void 0 : r.get(n),
                    s,
                  );
                });
          },
          r(
            "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
