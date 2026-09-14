__d(
  "BillingWizardNameUtils.graphql",
  ["BillingWizardNameUtilsRefetch.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "boostDurationInDays" },
        { kind: "RootArgument", name: "budget" },
        { kind: "RootArgument", name: "dailyBudget" },
        { kind: "RootArgument", name: "deviceCountry" },
        { kind: "RootArgument", name: "deviceCurrency" },
        { kind: "RootArgument", name: "paymentAccountID" },
        { kind: "RootArgument", name: "specificEntrypoint" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: [],
          operation: n("BillingWizardNameUtilsRefetch.graphql"),
        },
      },
      name: "BillingWizardNameUtils",
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
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account",
              plural: !1,
              selections: [
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
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
