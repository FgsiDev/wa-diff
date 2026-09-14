__d(
  "AdsReminderAdsAdAccountDataLoaderQuery.graphql",
  ["AdAccount-reminder_ads_data-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsReminderAdsAdAccountDataLoaderQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "AdAccount",
                kind: "LinkedField",
                name: "ad_account",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "AdAccountReminderAdsDataResolver",
                    },
                    kind: "RelayResolver",
                    name: "reminder_ads_data",
                    resolverModule: n("AdAccount-reminder_ads_data-resolver")
                      .reminder_ads_data,
                    path: "ad_account.reminder_ads_data",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsReminderAdsAdAccountDataLoaderQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  name: "reminder_ads_data",
                  args: null,
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBReminderAdsAdAccountData",
                        kind: "LinkedField",
                        name: "reminder_ad_account_data",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "manual_opt_out_count",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "cool_down_end_date_time",
                            storageKey: null,
                          },
                          r,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: "AdAccount",
                    abstractKey: null,
                  },
                  kind: "RelayResolver",
                  storageKey: null,
                  isOutputType: !0,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "23928358793520479",
          metadata: {},
          name: "AdsReminderAdsAdAccountDataLoaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
