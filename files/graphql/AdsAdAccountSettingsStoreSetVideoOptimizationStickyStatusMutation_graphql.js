__d(
  "AdsAdAccountSettingsStoreSetVideoOptimizationStickyStatusMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "SetVideoOptimizationStickyStatusAdsAdAccountSettingsResponsePayload",
            kind: "LinkedField",
            name: "set_video_optimization_sticky_status_ads_ad_account_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdsAdAccountSettings",
                kind: "LinkedField",
                name: "ads_ad_account_settings",
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
                    concreteType:
                      "AdsAdAccountSettingsVideoOptimizationStickyEntry",
                    kind: "LinkedField",
                    name: "video_optimization_sticky_entries",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "optimization",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "status",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "timestamp",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
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
          name: "AdsAdAccountSettingsStoreSetVideoOptimizationStickyStatusMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsAdAccountSettingsStoreSetVideoOptimizationStickyStatusMutation",
          selections: t,
        },
        params: {
          id: "38096061813371664",
          metadata: {},
          name: "AdsAdAccountSettingsStoreSetVideoOptimizationStickyStatusMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
