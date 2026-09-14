__d(
  "adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "fbPageID" },
          { defaultValue: null, kind: "LocalArgument", name: "igUserID" },
          { defaultValue: null, kind: "LocalArgument", name: "isShopsAd" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "fb_page_id",
                variableName: "fbPageID",
              },
              {
                kind: "Variable",
                name: "ig_user_id",
                variableName: "igUserID",
              },
              {
                kind: "Variable",
                name: "is_shops_ad",
                variableName: "isShopsAd",
              },
            ],
            concreteType: "XFBShopsAdsShopifyPromoCodeOutput",
            kind: "LinkedField",
            name: "xfb_is_shopify_seller_shops_ad",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_shopify_seller_shops_ad",
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
          name: "adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery",
          selections: t,
        },
        params: {
          id: "23956608780623258",
          metadata: {},
          name: "adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
