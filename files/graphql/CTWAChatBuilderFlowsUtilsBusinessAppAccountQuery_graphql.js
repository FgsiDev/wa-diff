__d(
  "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: { hasClientEdges: !0 },
          name: "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientAdAccount",
              modelResolvers: {
                ClientAdAccount: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount__id.graphql"),
                    n("ClientAdAccount-resolvers").ClientAdAccount,
                    "id",
                    !0,
                  ),
                  path: "selected_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "selected_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "adsUEditorCampaignGroupWhatsAppBusinessAccountsSelector_Fragment",
                  },
                ],
                storageKey: null,
              },
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "selected_ad_account",
                args: null,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    name: "business",
                    args: null,
                    fragment: {
                      kind: "InlineFragment",
                      selections: [
                        {
                          name: "__relay_model_instance",
                          args: null,
                          fragment: {
                            kind: "InlineFragment",
                            selections: [e],
                            type: "ClientAdAccount",
                            abstractKey: null,
                          },
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !1,
                        },
                      ],
                      type: "ClientAdAccount",
                      abstractKey: null,
                    },
                    kind: "RelayResolver",
                    storageKey: null,
                    isOutputType: !0,
                  },
                  e,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "9e529244a5c905fea91c18ada7493a2e",
          id: null,
          metadata: {},
          name: "CTWAChatBuilderFlowsUtilsBusinessAppAccountQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
