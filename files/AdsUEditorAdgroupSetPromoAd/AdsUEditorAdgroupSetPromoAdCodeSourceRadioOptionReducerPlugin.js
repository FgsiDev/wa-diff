__d(
  "AdsUEditorAdgroupSetPromoAdCodeSourceRadioOptionReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPromoAdCodeSourceRadioButtonActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.adsPromoAdsCodeSourceRadioButtonOption,
                r = t.creativeCouponCode,
                a = t.resolvedCatalogId;
              return o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).updateCodeSourceFromSourceRadioOptions(e, r, n, a);
            });
          },
          r("AdsUEditorAdgroupSetPromoAdCodeSourceRadioButtonActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
