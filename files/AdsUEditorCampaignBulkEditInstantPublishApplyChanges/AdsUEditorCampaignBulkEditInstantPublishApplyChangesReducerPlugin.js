__d(
  "AdsUEditorCampaignBulkEditInstantPublishApplyChangesReducerPlugin",
  [
    "AdsBulkEditUtils",
    "AdsMutators",
    "AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsBulkEditPreservePredictionIdStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.changedCampaignsMap;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = a.get(e.id),
                n = o("AdsBulkEditUtils").postProcessChangedCampaign(e, t);
              return r("adsBulkEditPreservePredictionIdStoreUtils")(e.id, n);
            });
          },
          o("AdsUEditorCampaignBulkEditInstantPublishApplyChangesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
