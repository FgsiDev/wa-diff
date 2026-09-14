__d(
  "AdsUEditorAdgroupBrandedContentOnSelectInModalReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupBrandedContentOnSelectInModalActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
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
              ).creative.branded_content.partners.set(r("immutable").List(), e);
            });
          },
          r("AdsUEditorAdgroupBrandedContentOnSelectInModalActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
