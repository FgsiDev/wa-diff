__d(
  "BillingSelectAutoReloadPresetAmountRow_autoReloadInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "CurrencyAmount",
          kind: "LinkedField",
          name: "reload_amount",
          plural: !1,
          selections: [
            {
              kind: "InlineDataFragmentSpread",
              name: "BillingCurrencyAmount_amount",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "amount_with_offset",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "currency",
                  storageKey: null,
                },
              ],
              args: null,
              argumentDefinitions: [],
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "BillingSelectAutoReloadPresetAmountRow_autoReloadInfo",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBAutoReloadPills",
            kind: "LinkedField",
            name: "auto_reload_pill_amounts",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBAutoReloadPillData",
                kind: "LinkedField",
                name: "pill_one",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBAutoReloadPillData",
                kind: "LinkedField",
                name: "pill_two",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBAutoReloadPillData",
                kind: "LinkedField",
                name: "pill_three",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "BillingAutoReloadInfo",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
