__d(
  "AdsUEditorAdgroupSetTrackingForDatasetSplitOnCampaignUpdateReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTrackingSpecMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorDatasetSplitLightweightUtils",
    "AdsUEditorPromotedObjectSetDatasetSplitIDsDataActionFlux",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            campaignGroups: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.campaignGroups,
              i = t.adgroupIDs.some(function (e) {
                var t;
                return (
                  ((t = a.get(e)) == null
                    ? void 0
                    : t.collaborative_ads_partner_info) != null
                );
              });
            if (
              i &&
              r("justknobx")._("5665") &&
              !o(
                "AdsUEditorDatasetSplitLightweightUtils",
              ).isDatasetSplitAccountEligible()
            )
              return e;
            var l = t.adgroupIDs,
              s = t.appDatasetSplitIDs,
              u = t.offlineDatasetSplitIDs,
              c = t.pixelDatasetSplitIDs,
              d = e;
            return (
              c !== void 0 &&
                (d = o("AdsMutators").mutateEach(d, l, function (e) {
                  return o(
                    "AdsUEditorAdgroupTrackingSpecMutators",
                  ).setOffsiteConversionTracking(e, c);
                })),
              u !== void 0 &&
                (d = o("AdsMutators").mutateEach(d, l, function (e) {
                  return o(
                    "AdsUEditorAdgroupTrackingSpecMutators",
                  ).setOfflineConversionTracking(e, u);
                })),
              s !== void 0 &&
                (d = o("AdsMutators").mutateEach(d, l, function (e) {
                  return o(
                    "AdsUEditorAdgroupTrackingSpecMutators",
                  ).setMobileAppTracking(null, e, s == null ? void 0 : s[0]);
                })),
              d
            );
          },
          o("AdsUEditorPromotedObjectSetDatasetSplitIDsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
