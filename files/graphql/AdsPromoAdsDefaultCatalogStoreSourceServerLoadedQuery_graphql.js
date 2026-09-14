__d(
  "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ProductCatalog",
              kind: "LinkedField",
              name: "loaded_promo_ads_resolved_catalog",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_crawled_offers_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_promo_ads_always_on_suitable",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery",
          selections: e,
        },
        params: {
          cacheID: "2612938046fd802f559246c764a4dc5a",
          id: null,
          metadata: {},
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
