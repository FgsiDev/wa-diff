__d(
  "AdsUEditorCampaignSetDatasetSplitSpecsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetDatasetSplitSpecsDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = t.datasetSplitSpecs;
            return o("AdsMutators").mutateEach(
              e,
              (n = t.campaignIDs) != null ? n : [],
              function (e) {
                return a != null && a.length > 0
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.dataset_split_specs.set(
                      r("immutable").List(
                        a.map(function (e) {
                          return r("immutable").Map(e);
                        }),
                      ),
                    )(e)
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.dataset_split_specs.delete(e);
              },
            );
          },
          o("AdsUEditorCampaignSetDatasetSplitSpecsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
