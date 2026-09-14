__d(
  "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "page_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType: "XFBPromoAdsShopifyOfferSyncingEligibility",
            kind: "LinkedField",
            name: "xfb_shopify_offer_syncing_eligibility",
            plural: !1,
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery",
          selections: t,
        },
        params: {
          id: "36847525264895228",
          metadata: {},
          name: "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
