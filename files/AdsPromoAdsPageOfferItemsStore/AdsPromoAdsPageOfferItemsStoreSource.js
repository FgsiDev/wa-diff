__d(
  "AdsPromoAdsPageOfferItemsStoreSource",
  [
    "AdsPromoAdsPageOfferItemsStoreSourceFragment.graphql",
    "AdsPromoAdsPageOfferItemsStoreSourceServerLoadedQuery.graphql",
    "AdsPromoAdsPageOfferItemsStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "promiseDone",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("AdsPromoAdsPageOfferItemsStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsPromoAdsPageOfferItemsStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n("AdsPromoAdsPageOfferItemsStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          var t = "xfb_promo_offer_items_by_page";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            return {
              account_id: t.account_id,
              ad_spec_coupon_codes: t.ad_spec_coupon_codes,
              catalog_id: t.catalog_id,
              page_id: t.page_id,
              pixel_id: t.pixel_id,
              product_set_id: t.product_set_id,
              secondary_page_id: t.secondary_page_id,
              sources: t.sources,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_promo_ads_page_offer_items",
              i = "XFBPromoOfferItemsByPage",
              l = t[0],
              s = this.getRelayId(l);
            this.updateRecords([s], a, i);
            var u = this.__getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, c, u)
                .toPromise()
                .catch(function (r) {
                  return e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(d);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.getRelayId(t),
                  o = e.__getGQLParams(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    o,
                    { page_id: t.page_id },
                    n,
                    function (e) {
                      return e;
                    },
                  ),
                };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceWeakBase"));
    l.default = p;
  },
  98,
);
