__d(
  "SYDAccountInfoWidgetContainerV3Query.graphql",
  ["relay-runtime"],
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
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "currency",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset_amount",
            storageKey: null,
          },
        ],
        a = {
          alias: "spend_info",
          args: null,
          concreteType: "AdAccountSpendInfo",
          kind: "LinkedField",
          name: "spend_info_cached",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "CurrencyQuantity",
              kind: "LinkedField",
              name: "amount_spent",
              plural: !1,
              selections: o,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "CurrencyQuantity",
              kind: "LinkedField",
              name: "spend_limit",
              plural: !1,
              selections: o,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: "num_active_campaign_groups",
          args: null,
          kind: "ScalarField",
          name: "num_active_campaign_groups_cached",
          storageKey: null,
        },
        l = {
          alias: "last_7_day_insights_spend",
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "last_7_day_insights_spend_cached",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "amount",
              storageKey: null,
            },
            r,
          ],
          storageKey: null,
        },
        s = {
          alias: "total_learning_phase_spend_ratio",
          args: null,
          kind: "ScalarField",
          name: "total_learning_phase_spend_ratio_cached",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "SYDAccountInfoWidgetContainerV3Query",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [n, r, a, i, l, s],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "SYDAccountInfoWidgetContainerV3Query",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
                r,
                a,
                i,
                l,
                s,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26585771461039291",
          metadata: {},
          name: "SYDAccountInfoWidgetContainerV3Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
