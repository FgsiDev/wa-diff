__d(
  "AdsImageBackgroundGenProductSetExplicitOptOutRelayStoreQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "product_set_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "product_set_id",
                    variableName: "product_set_id",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            kind: "ScalarField",
            name: "xfb_ads_image_background_gen_product_set_explicit_opt_out",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsImageBackgroundGenProductSetExplicitOptOutRelayStoreQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsImageBackgroundGenProductSetExplicitOptOutRelayStoreQuery",
          selections: t,
        },
        params: {
          id: "25855445770726610",
          metadata: {},
          name: "AdsImageBackgroundGenProductSetExplicitOptOutRelayStoreQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
