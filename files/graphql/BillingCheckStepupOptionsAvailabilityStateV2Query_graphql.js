__d(
  "BillingCheckStepupOptionsAvailabilityStateV2Query.graphql",
  ["BillingCheckStepupOptionsAvailabilityStateV2Query_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "deviceCountry",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "deviceCurrency",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        o = [
          {
            kind: "Variable",
            name: "asset_id",
            variableName: "paymentAccountID",
          },
        ],
        a = {
          alias: null,
          args: null,
          concreteType: "XFBTKyxAuthenticationStatus",
          kind: "LinkedField",
          name: "id_verification_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "BillingCanCreateNewFromOldInfo",
          kind: "LinkedField",
          name: "can_close_old_and_create_new_billable_account",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "can_create",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "environment_supports",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "app_store_country",
                  variableName: "deviceCountry",
                },
                {
                  kind: "Variable",
                  name: "app_store_currency",
                  variableName: "deviceCurrency",
                },
              ],
              kind: "ScalarField",
              name: "boost_enable_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tax_country_validation_action",
              storageKey: null,
            },
          ],
          type: "AdAccount",
          abstractKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_country_code",
          storageKey: null,
        },
        u = {
          alias: null,
          args: [
            {
              kind: "Literal",
              name: "requested_flags",
              value: ["TAX_COUNTRY_MISMATCH"],
            },
          ],
          kind: "ScalarField",
          name: "billing_flags",
          storageKey: 'billing_flags(requested_flags:["TAX_COUNTRY_MISMATCH"])',
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "BillingCheckStepupOptionsAvailabilityStateV2Query",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                a,
                i,
                l,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account_tax_info",
                  plural: !1,
                  selections: [s],
                  storageKey: null,
                },
                u,
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, t],
          kind: "Operation",
          name: "BillingCheckStepupOptionsAvailabilityStateV2Query",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                c,
                a,
                i,
                l,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account_tax_info",
                  plural: !1,
                  selections: [c, s],
                  storageKey: null,
                },
                u,
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
          id: n(
            "BillingCheckStepupOptionsAvailabilityStateV2Query_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingCheckStepupOptionsAvailabilityStateV2Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
