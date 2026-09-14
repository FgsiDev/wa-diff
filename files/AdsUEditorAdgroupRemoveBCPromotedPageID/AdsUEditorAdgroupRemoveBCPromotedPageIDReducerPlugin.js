__d(
  "AdsUEditorAdgroupRemoveBCPromotedPageIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveBCPromotedPageIDActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.branded_content.promoted_page_id.delete(e);
            });
          },
          r("AdsUEditorAdgroupRemoveBCPromotedPageIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
