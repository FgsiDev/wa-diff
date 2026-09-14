__d(
  "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsWithIABPFragment.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        args: null,
        kind: "FragmentSpread",
        name: "ClientAdAccount____relay_model_instance",
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "AdsUEditorCampaignInstagramSelectors_useBusinessInstagramAccountsWithIABPFragment",
        selections: [
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "business",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").business,
              "__relay_model_instance",
              !0,
            ),
            path: "business",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "account_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("ClientAdAccount____relay_model_instance.graphql"),
              n("ClientAdAccount-resolvers").account_id,
              "__relay_model_instance",
              !0,
            ),
            path: "account_id",
          },
        ],
        type: "ClientAdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
