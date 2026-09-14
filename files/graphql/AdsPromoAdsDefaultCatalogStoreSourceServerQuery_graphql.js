__d(
  "AdsPromoAdsDefaultCatalogStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adgroup_maybe_draft_id",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "destination_url",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        o = { defaultValue: null, kind: "LocalArgument", name: "pixel_id" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "product_set_id",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "resolved_catalog_id",
        },
        l = { kind: "Variable", name: "page_id", variableName: "page_id" },
        s = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              {
                kind: "Variable",
                name: "ad_catalog",
                variableName: "resolved_catalog_id",
              },
              {
                kind: "Variable",
                name: "adgroup_maybe_draft_id",
                variableName: "adgroup_maybe_draft_id",
              },
              {
                kind: "Variable",
                name: "destination_url",
                variableName: "destination_url",
              },
              l,
              { kind: "Variable", name: "pixel_id", variableName: "pixel_id" },
              {
                kind: "Variable",
                name: "product_set_id",
                variableName: "product_set_id",
              },
            ],
            concreteType: "ProductCatalog",
            kind: "LinkedField",
            name: "promo_ads_resolved_product_catalog_for_offers",
            plural: !1,
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
                args: [l],
                kind: "ScalarField",
                name: "is_promo_ads_always_on_suitable",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a, i],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerQuery",
          selections: s,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, n, o, i, a, t],
          kind: "Operation",
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerQuery",
          selections: s,
        },
        params: {
          id: "28048367121487368",
          metadata: {},
          name: "AdsPromoAdsDefaultCatalogStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
