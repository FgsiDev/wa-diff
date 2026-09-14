__d(
  "AdsUEditorAdgroupSetShopifyPromoCodeAdContentCouponCodeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetShopifyPromoCodeAdContentCouponCodeActionFlux",
    "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "AD_CREATIVE_PRIMARY_TEXT_LLM",
      "AD_CREATIVE_HEADLINE_LLM",
      "AD_CREATIVE_DESCRIPTION_LLM",
    ];
    function s(e) {
      switch (e) {
        case "AD_CREATIVE_PRIMARY_TEXT_LLM":
          return "AD_CREATIVE_PRIMARY_TEXT";
        case "AD_CREATIVE_HEADLINE_LLM":
          return "AD_CREATIVE_HEADLINE";
        case "AD_CREATIVE_DESCRIPTION_LLM":
          return "AD_CREATIVE_DESCRIPTION";
        default:
          return e;
      }
    }
    function u(t) {
      var n = o(
          "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
        ).clearAdContentCouponCodes(t),
        a = o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).getAllowedPromoOfferSourcesArray(n),
        i = o(
          "AdsUEditorAdgroupPromoAdMutatorUtils",
        ).updateAllowedCouponCodeSources(a, [], e);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
        r("immutable").List(i),
        n,
      );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adContentCode,
              a = t.adgroupIDs,
              i = t.isAdContentSourceEnabled,
              l = t.source;
            return i
              ? o("AdsMutators").mutateEach(e, a, function (e) {
                  var t = e;
                  if (n == null || n === "" || l == null) return u(e);
                  var a = s(l);
                  a === "AD_CREATIVE_PRIMARY_TEXT"
                    ? (t = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_primary_text.set(
                        r("immutable").List([n]),
                        e,
                      ))
                    : a === "AD_CREATIVE_HEADLINE"
                      ? (t = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_headline.set(
                          r("immutable").List([n]),
                          e,
                        ))
                      : a === "AD_CREATIVE_DESCRIPTION" &&
                        (t = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_description.set(
                          r("immutable").List([n]),
                          e,
                        ));
                  var i = o(
                      "AdsUEditorAdgroupPromoAdMutatorUtils",
                    ).getAllowedPromoOfferSourcesArray(t),
                    c = l !== a ? [l, a] : [a],
                    d = o(
                      "AdsUEditorAdgroupPromoAdMutatorUtils",
                    ).updateAllowedCouponCodeSources(i, c, []);
                  return (
                    (t = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
                      r("immutable").List(d),
                      t,
                    )),
                    t
                  );
                })
              : o("AdsMutators").mutateEach(e, a, function (e) {
                  return u(e);
                });
          },
          r("AdsUEditorAdgroupSetShopifyPromoCodeAdContentCouponCodeActionFlux")
            .actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
