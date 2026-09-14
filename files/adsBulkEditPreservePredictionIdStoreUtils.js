__d(
  "adsBulkEditPreservePredictionIdStoreUtils",
  [
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsTargetFrequencyBulkEditDeletePredictionIdAction",
    "AdsTargetFrequencyBulkEditPredictionIdProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o,
        a =
          (o = r("AdsTargetFrequencyBulkEditPredictionIdProvider")
            .toFluxStore()
            .getState()
            .get(t)) != null
            ? o
            : null;
      return a != null
        ? ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("AdsTargetFrequencyBulkEditDeletePredictionIdAction").dispatch(
              { campaignID: t },
              {
                line: "34",
                module: "adsBulkEditPreservePredictionIdStoreUtils.js",
                moduleID: i.id,
              },
            );
          }),
          r("AdsCampaignRecordAccessors").rf_prediction_id.set(a, n))
        : n;
    }
    l.default = s;
  },
  98,
);
