__d(
  "AdsUEditorAdgroupAddWebsiteAndInStorePromoAdManualOfferReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAddWebsiteAndInstorePromoAdManualOfferActionFlux",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.promotionSpec;
              return o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).mutateWebsiteAndInStorePromotionDetails(e, n);
            });
          },
          r("AdsUEditorAdgroupAddWebsiteAndInstorePromoAdManualOfferActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
