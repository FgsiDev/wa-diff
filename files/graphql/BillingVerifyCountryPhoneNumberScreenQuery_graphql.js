__d(
  "BillingVerifyCountryPhoneNumberScreenQuery.graphql",
  ["BillingVerifyCountryPhoneNumberScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        r = {
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
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "country_spoofing_blocking_enforcement_date_short",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "tax_country_phone_dialing_prefix",
              storageKey: null,
            },
          ],
          type: "AdAccount",
          abstractKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = {
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
          name: "BillingVerifyCountryPhoneNumberScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [o],
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "BillingVerifyCountryPhoneNumberScreenQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                a,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account",
                  plural: !1,
                  selections: [a, o, i],
                  storageKey: null,
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingVerifyCountryPhoneNumberScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingVerifyCountryPhoneNumberScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
