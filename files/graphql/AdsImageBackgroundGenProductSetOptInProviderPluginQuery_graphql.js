__d(
  "AdsImageBackgroundGenProductSetOptInProviderPluginQuery.graphql",
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
            name: "xfb_ads_image_background_gen_product_set_opt_in",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsImageBackgroundGenProductSetOptInProviderPluginQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsImageBackgroundGenProductSetOptInProviderPluginQuery",
          selections: t,
        },
        params: {
          id: "33652600517664169",
          metadata: {},
          name: "AdsImageBackgroundGenProductSetOptInProviderPluginQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
