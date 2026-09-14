__d(
  "AdsExperimentsCancelDraftABTestCampaignReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsExperimentsCancelDraftABTestActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.studyLevel !== "ad_set"
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  var n = r(
                    "AdsCampaignRecordAccessors",
                  ).include_in_ad_study_id.get(e);
                  if (n == null || String(n) !== String(t.studyID)) return e;
                  var o = r(
                    "AdsCampaignRecordAccessors",
                  ).include_in_ad_study_id.set(null, e);
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).include_in_ad_study_cell_id.get(e) == null
                    ? o
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).include_in_ad_study_cell_id.set(null, o);
                });
          },
          r("AdsExperimentsCancelDraftABTestActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
