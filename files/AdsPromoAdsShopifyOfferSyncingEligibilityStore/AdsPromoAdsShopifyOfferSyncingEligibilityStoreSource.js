__d(
  "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSource",
  [
    "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceFragment.graphql",
    "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery.graphql",
    "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery.graphql",
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
          : (e = n(
              "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceFragment.graphql",
            )),
      p = (function (e) {
        function t() {
          var t = "xfb_shopify_offer_syncing_eligibility";
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getGQLParams = function (t) {
            return { page_id: t.page_id };
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_shopify_offer_syncing_eligibility",
              i = "XFBPromoAdsShopifyOfferSyncingEligibility",
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
                    {},
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
