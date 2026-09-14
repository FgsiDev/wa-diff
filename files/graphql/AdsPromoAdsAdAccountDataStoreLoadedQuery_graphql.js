__d(
  "AdsPromoAdsAdAccountDataStoreLoadedQuery.graphql",
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
          name: "turn_off_promo_count",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_default_on_eligible",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_default_on_blocked",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_default_on_in_cooldown",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_email_capture_default_on_eligible",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_email_capture_default_on_in_cooldown",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_promo_ad_account_shop_email_capture_upsell_eligible",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsAdAccountDataStoreLoadedQuery",
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
                      concreteType: "XFBPromoAdsAdAccountData",
                      kind: "LinkedField",
                      name: "promo_ad_account_data",
                      plural: !1,
                      selections: [t, n, r, o, a, i, l],
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
          name: "AdsPromoAdsAdAccountDataStoreLoadedQuery",
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
                      concreteType: "XFBPromoAdsAdAccountData",
                      kind: "LinkedField",
                      name: "promo_ad_account_data",
                      plural: !1,
                      selections: [t, n, r, o, a, i, l, e],
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
          cacheID: "d7516f92492e9112a08069d20a66278c",
          id: null,
          metadata: {},
          name: "AdsPromoAdsAdAccountDataStoreLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
