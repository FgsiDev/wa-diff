__d(
  "BillingWizardNameUtilsQuery.graphql",
  ["BillingWizardNameUtilsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "budget" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "deviceCountry",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "deviceCurrency",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "specificEntrypoint",
        },
        i = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "payment_legacy_account_id",
              variableName: "paymentAccountID",
            },
          ],
          concreteType: "BillingBelieveEligibility",
          kind: "LinkedField",
          name: "billing_believe_eligibility",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_eligible",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        s = {
          alias: null,
          args: [
            { kind: "Variable", name: "budget", variableName: "budget" },
            {
              kind: "Variable",
              name: "device_country",
              variableName: "deviceCountry",
            },
            {
              kind: "Variable",
              name: "device_currency",
              variableName: "deviceCurrency",
            },
            {
              kind: "Variable",
              name: "specific_entrypoint",
              variableName: "specificEntrypoint",
            },
          ],
          concreteType: "XFBBillableAccountBillingInfo",
          kind: "LinkedField",
          name: "billing_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBBillableAccountRequiredAction",
              kind: "LinkedField",
              name: "required_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBBillableAccountBillingInfoAction",
                  kind: "LinkedField",
                  name: "action",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "wizard_name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "wizard_props_json",
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
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o, a],
          kind: "Fragment",
          metadata: null,
          name: "BillingWizardNameUtilsQuery",
          selections: [
            i,
            {
              alias: null,
              args: l,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [s],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [o, e, t, r, a],
          kind: "Operation",
          name: "BillingWizardNameUtilsQuery",
          selections: [
            i,
            {
              alias: null,
              args: l,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                u,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [u, s, c],
                  storageKey: null,
                },
                c,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingWizardNameUtilsQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingWizardNameUtilsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
