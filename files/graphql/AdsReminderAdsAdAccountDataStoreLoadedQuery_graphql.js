__d(
  "AdsReminderAdsAdAccountDataStoreLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "manual_opt_out_count",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cool_down_end_date_time",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsReminderAdsAdAccountDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBReminderAdsAdAccountData",
                      kind: "LinkedField",
                      name: "reminder_ad_account_data",
                      plural: !1,
                      selections: [t, n],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsReminderAdsAdAccountDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBReminderAdsAdAccountData",
                      kind: "LinkedField",
                      name: "reminder_ad_account_data",
                      plural: !1,
                      selections: [t, n, e],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "20b2fdba1d0f82ae079236a656b3feda",
          id: null,
          metadata: {},
          name: "AdsReminderAdsAdAccountDataStoreLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
