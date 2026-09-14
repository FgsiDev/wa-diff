__d(
  "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery.graphql",
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
              concreteType: "XFBPromoAdsShopifyOfferSyncingEligibility",
              kind: "LinkedField",
              name: "loaded_shopify_offer_syncing_eligibility",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_eligible",
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
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery",
          selections: e,
        },
        params: {
          cacheID: "f7251e9de4538501968e13e105da0023",
          id: null,
          metadata: {},
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
