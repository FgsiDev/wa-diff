__d(
  "BillingWizardNameUtilsRefetch.graphql",
  ["BillingWizardNameUtilsRefetch_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "boostDurationInDays",
          },
          { defaultValue: null, kind: "LocalArgument", name: "budget" },
          { defaultValue: null, kind: "LocalArgument", name: "dailyBudget" },
          { defaultValue: null, kind: "LocalArgument", name: "deviceCountry" },
          { defaultValue: null, kind: "LocalArgument", name: "deviceCurrency" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "specificEntrypoint",
          },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
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
          name: "BillingWizardNameUtilsRefetch",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingWizardNameUtils",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingWizardNameUtilsRefetch",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "legacy_account_id",
                  variableName: "paymentAccountID",
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [
                    t,
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "boost_duration_in_days",
                          variableName: "boostDurationInDays",
                        },
                        {
                          kind: "Variable",
                          name: "budget",
                          variableName: "budget",
                        },
                        {
                          kind: "Variable",
                          name: "daily_budget_payment_amount",
                          variableName: "dailyBudget",
                        },
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
                              concreteType:
                                "XFBBillableAccountBillingInfoAction",
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
                    r,
                  ],
                  storageKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("BillingWizardNameUtilsRefetch_facebookRelayOperation"),
          metadata: {},
          name: "BillingWizardNameUtilsRefetch",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
