__d(
  "AdsUEditorOfflineDataFieldReducerPlugin",
  [
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorSetOfflineDatasetFieldsDataActionFlux",
    "adsUEditorCampaignDatasetSplitSelector",
    "adsUEditorCampaignUniformSelectedPixelIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
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
              i = r.hasValue() ? r.getValue() : null;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setOfflineObjectForOmnichannelObject(e, t.offlineDatasetID);
                },
                function (e) {
                  return o(
                    "AdsDeliveryOmnichannelUtils",
                  ).setDatasetSplitIdsForOmnichannelObjects(
                    e,
                    t.offlineDatasetID,
                    i,
                    a,
                  );
                },
              ),
            );
          },
          o("AdsUEditorSetOfflineDatasetFieldsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
