__d(
  "AdsPromoAdsAdAccountDataLoaderQuery.graphql",
  ["AdAccount-promo_ads_data-resolver"],
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
          name: "AdsPromoAdsAdAccountDataLoaderQuery",
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
                      name: "AdAccountPromoAdsDataResolver",
                    },
                    kind: "RelayResolver",
                    name: "promo_ads_data",
                    resolverModule: n("AdAccount-promo_ads_data-resolver")
                      .promo_ads_data,
                    path: "ad_account.promo_ads_data",
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
          name: "AdsPromoAdsAdAccountDataLoaderQuery",
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
                  name: "promo_ads_data",
                  args: null,
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBPromoAdsAdAccountData",
                        kind: "LinkedField",
                        name: "promo_ad_account_data",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_always_on_detected_offers_upsell_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_always_on_l1_notice_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_ec_detected_offers_upsell_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_ec_shops_only_upsell_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "turn_off_promo_count",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_pre_click_notification_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_default_on_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_default_on_blocked",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_default_on_in_cooldown",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_email_capture_default_on_eligible",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_email_capture_default_on_in_cooldown",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_promo_ad_account_shop_email_capture_upsell_eligible",
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
          id: "27260176786988579",
          metadata: {},
          name: "AdsPromoAdsAdAccountDataLoaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
