__d(
  "AdsExperimentsCancelDraftABTestAdgroupReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "adsAdgroupDraftFragmentCreateReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            return t.studyLevel !== "ad"
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n = r(
                    "AdsAdgroupRecordAccessors",
                  ).include_in_ad_study_id.get(e);
                  if (n == null || String(n) !== String(t.studyID)) return e;
                  var o = r(
                    "AdsAdgroupRecordAccessors",
                  ).include_in_ad_study_id.set(null, e);
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).include_in_ad_study_cell_id.get(e) == null
                    ? o
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).include_in_ad_study_cell_id.set(null, o);
                });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
