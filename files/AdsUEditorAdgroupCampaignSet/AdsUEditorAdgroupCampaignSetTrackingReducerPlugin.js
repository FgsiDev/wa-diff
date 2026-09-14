__d(
  "AdsUEditorAdgroupCampaignSetTrackingReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "AdsUEditorDatasetSplitLightweightUtils",
    "AdsUEditorSetOfflineDatasetFieldsDataActionFlux",
    "adsUEditorCampaignDatasetSplitSelector",
    "adsUEditorCampaignUniformSelectedPixelIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            datasetSplitInfoLO: o("adsUEditorCampaignDatasetSplitSelector")
              .adsUEditorCampaignDatasetWithSplitsSelector,
            selectedPixelID: o(
              "adsUEditorCampaignUniformSelectedPixelIDSelector",
            ).uniformSelectedPixelIDSelector,
          },
          function (e, t, n) {
            var r = n.datasetSplitInfoLO,
              a = n.selectedPixelID,
              i = t.adgroupIDs,
              l = t.offlineDatasetID;
            if (l == null) return e;
            if (
              o(
                "AdsUEditorDatasetSplitLightweightUtils",
              ).isDatasetSplitAccountEligible() &&
              a != null
            ) {
              if (!r.hasValue()) return e;
              var s = r.getValue();
              if (s != null) {
                var u = o(
                    "AdsUEditorDatasetSplitLightweightUtils",
                  ).getMatchingWebsiteAndInStoreDatasetSplitIds(a, l, s),
                  c = o("AdsMutators").mutateEach(e, i, function (e) {
                    return o(
                      "AdsUEditorAdgroupTrackingSpecMutators",
                    ).setOfflineConversionTracking(
                      e,
                      u != null ? [u.offlineDatasetSplitId] : [],
                    );
                  });
                return (
                  (c = o("AdsMutators").mutateEach(c, i, function (e) {
                    return o(
                      "AdsUEditorAdgroupTrackingSpecMutators",
                    ).setOffsiteConversionTracking(
                      e,
                      u != null ? [u.pixelDatasetSplitId] : [],
                    );
                  })),
                  c
                );
              }
            }
            return e;
          },
          [o("AdsUEditorSetOfflineDatasetFieldsDataActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
