__d(
  "AdsUEditorAdgroupSetExcludedPromoCodesReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetExcludedPromoCodesActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.excluded_offers;
              return o("AdsUEditorAdgroupPromoAdMutators").mutateExcludedCodes(
                e,
                n,
              );
            });
          },
          r("AdsUEditorAdgroupSetExcludedPromoCodesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
