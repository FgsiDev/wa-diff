__d(
  "AdsUEditorAdgroupPromoAdsWACaptureDeleteOfferDetailsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdsWACaptureDeleteOfferDetailsActionFlux",
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
              var t,
                n =
                  (t = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.promotional_metadata.get(e)) ==
                  null
                    ? void 0
                    : t.toObject(),
                a = n == null ? void 0 : n.allowed_coupon_code_sources,
                i = n == null ? void 0 : n.offer_details;
              if (a != null && a.includes("WA_CAPTURE_GENERIC_CODE")) {
                if (a.size === 1)
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.promotional_metadata.delete(e);
                var l = a.filter(function (e) {
                  return e !== "WA_CAPTURE_GENERIC_CODE";
                });
                if (i != null) {
                  var s = i.filter(function (e) {
                    var t = e.get("detection_source");
                    return t != null && t !== "wa_capture_generic_code";
                  });
                  if (s.size === 0) {
                    var u = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.offer_details.delete(
                      e,
                    );
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
                      l,
                      u,
                    );
                  }
                  return o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
                      r("immutable").List(l),
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.offer_details.set(
                      r("immutable").List(s),
                    ),
                  )(e);
                }
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
                  l,
                  e,
                );
              }
              return e;
            });
          },
          r("AdsUEditorAdgroupPromoAdsWACaptureDeleteOfferDetailsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
