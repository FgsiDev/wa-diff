__d(
  "ShopAdsDestinationLoggingUtils",
  [
    "AdsUEditorAdgroupShopAdsUtils",
    "filterNulls",
    "first",
    "isEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      switch (e) {
        case "details_page_product_id":
          return "pdp";
        case "shop_collection_product_set_id":
          return "collection";
        case "storefront_shop_id":
          return "storefront";
      }
      return null;
    }
    function u(e) {
      return r("filterNulls")(
        e.map(function (e) {
          var t = s(e.destinationType);
          return t == null
            ? null
            : {
                destinationType: t,
                destinationValue: e.destinationValue,
                recommendationSource: e.recommendationSource,
              };
        }),
      );
    }
    function c(t, n) {
      var o, a;
      ((e || (e = r("isEmpty")))(t) || (a = r("first")(t)),
        r("isTruthy")(n) && (a = n));
      var i = s((o = a) == null ? void 0 : o.destinationType);
      return r("isTruthy")(a) && r("isTruthy")(i)
        ? {
            destinationType: i,
            destinationValue: a.destinationValue,
            recommendationSource: a.recommendationSource,
          }
        : null;
    }
    function d(e) {
      if (r("isTruthy")(e)) {
        var t = o("AdsUEditorAdgroupShopAdsUtils").toStorefrontIDs(e);
        return m(t);
      }
      return null;
    }
    function m(e) {
      return {
        destinationType: "storefront",
        destinationValue: e.join(","),
        recommendationSource: null,
      };
    }
    function p(e, t) {
      var n = d(t),
        o = u(e),
        a = r("isTruthy")(e) ? c(e) : null;
      return { sddDestinations: o, selectedDestination: a != null ? a : n };
    }
    function _(e) {
      return r("filterNulls")(
        (e || []).map(function (e) {
          var t;
          return e.product
            ? {
                destinationType: "details_page_product_id",
                destinationValue: e.product.id,
                recommendationSource: e.recommendation_source,
              }
            : (t = e.collection) != null && t.product_set
              ? {
                  destinationType: "shop_collection_product_set_id",
                  destinationValue: e.collection.product_set.id,
                  recommendationSource: e.recommendation_source,
                }
              : e.storefront_id != null
                ? {
                    destinationType: "storefront_shop_id",
                    destinationValue: e.storefront_id,
                    recommendationSource: e.recommendation_source,
                  }
                : null;
        }),
      );
    }
    ((l.getDestinationTypeForLog = s),
      (l.getLogDetailsFromSDDSuggestions = u),
      (l.getSelectedOnsiteDestinationForLog = c),
      (l.getDestinationFromStorefrontIDs = m),
      (l.getFinalOnsiteDestinationSetForLog = p),
      (l.getShopsAdsOnsiteDestinationsDetails = _));
  },
  98,
);
