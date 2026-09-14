__d(
  "AdsUEditorAdgroupSetPromoAdManualCouponCodeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPromoAdManualCouponCodeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.manualCouponCode,
                r = t.offerActionType,
                a = t.resolvedCatalogId;
              return o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).updateManualCouponCode(e, r, n, a);
            });
          },
          r("AdsUEditorAdgroupSetPromoAdManualCouponCodeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
