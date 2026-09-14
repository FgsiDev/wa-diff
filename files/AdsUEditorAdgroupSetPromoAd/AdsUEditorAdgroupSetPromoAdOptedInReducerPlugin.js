__d(
  "AdsUEditorAdgroupSetPromoAdOptedInReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPromoAdOptedInActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (t.preserveExistingCodes === !0)
                return t.resolvedCatalogId != null
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.set(
                      t.resolvedCatalogId,
                    )(e)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.delete(
                      e,
                    );
              var n = t.adInventoryOfferIds,
                a = t.creativeCouponCode,
                i = t.isDefaultOptIn,
                l = t.isOptedIn,
                s = t.resolvedCatalogId;
              return o(
                "AdsUEditorAdgroupPromoAdMutators",
              ).updatePromoAdsOptInStatus(e, a, l, n, i, s);
            });
          },
          r("AdsUEditorAdgroupSetPromoAdOptedInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
