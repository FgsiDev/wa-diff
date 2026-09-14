__d(
  "AdsPromoAdsDefaultCatalogStoreSource",
  [
    "AdsPromoAdsDefaultCatalogStoreSourceFragment.graphql",
    "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery.graphql",
    "AdsPromoAdsDefaultCatalogStoreSourceServerQuery.graphql",
    "RelayHooks",
    "ReverseInteropStoreSourceWeakBase",
    "promiseDone",
    "readClientFragment",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("AdsPromoAdsDefaultCatalogStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n("AdsPromoAdsDefaultCatalogStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          var t = "promo_ads_resolved_product_catalog_for_offers";
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
            var e = t.adgroup_maybe_draft_id;
            return {
              ad_account_id: t.account_id,
              adgroup_maybe_draft_id: e != null && !isNaN(e) ? e : null,
              destination_url: t.destination_url,
              page_id: t.page_id === "" ? null : t.page_id,
              pixel_id: t.pixel_id === "" ? null : t.pixel_id,
              product_set_id: t.product_set_id === "" ? null : t.product_set_id,
              resolved_catalog_id: t.resolved_catalog_id,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_promo_ads_resolved_catalog",
              i = "ProductCatalog",
              l = t[0],
              s = this.getRelayId(l);
            this.updateRecords([s], a, i);
            var u = this.__getGQLParams(l),
              d = o("RelayHooks")
                .fetchQuery(this.__environment, c, u)
                .toPromise()
                .then(function (t) {
                  var n =
                    t == null
                      ? void 0
                      : t.promo_ads_resolved_product_catalog_for_offers;
                  return (
                    o("relay-runtime").commitLocalUpdate(
                      e.__environment,
                      function (e) {
                        var t,
                          r,
                          o,
                          a,
                          i = e.get(s);
                        (i == null ||
                          i.setValue(
                            (t = n == null ? void 0 : n.id) != null ? t : null,
                            "id",
                          ),
                          i == null ||
                            i.setValue(
                              (r = n == null ? void 0 : n.name) != null
                                ? r
                                : null,
                              "name",
                            ),
                          i == null ||
                            i.setValue(
                              (o =
                                n == null
                                  ? void 0
                                  : n.is_crawled_offers_enabled) != null
                                ? o
                                : null,
                              "is_crawled_offers_enabled",
                            ),
                          i == null ||
                            i.setValue(
                              (a =
                                n == null
                                  ? void 0
                                  : n.is_promo_ads_always_on_suitable) != null
                                ? a
                                : null,
                              "is_promo_ads_always_on_suitable",
                            ));
                      },
                    ),
                    t
                  );
                })
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
