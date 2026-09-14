__d(
  "AdsUEditorAdgroupIncludeInAdStudyMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      return (
        t.include_in_ad_study_cell_id == null &&
          e.include_in_ad_study_cell_id != null &&
          n.push(
            r("AdsAdgroupRecordAccessors").include_in_ad_study_cell_id.set(
              e.include_in_ad_study_cell_id,
            ),
          ),
        t.include_in_ad_study_id == null &&
          e.include_in_ad_study_id != null &&
          n.push(
            r("AdsAdgroupRecordAccessors").include_in_ad_study_id.set(
              e.include_in_ad_study_id,
            ),
          ),
        n.length === 0
          ? t
          : o("AdsMutators").chain.apply(o("AdsMutators"), n)(t)
      );
    }
    l.setAdgroupIncludeInAdStudy = e;
  },
  98,
);
