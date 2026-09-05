__d(
  "BillingConfirmLocationScreenQuery.graphql",
  ["BillingConfirmLocationScreenQuery_facebookRelayOperation"],
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
          kind: "ScalarField",
          name: "business_country_code",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null,
          },
        ],
        l = {
          alias: null,
          args: null,
          concreteType: "XFBBillingOptionListItem",
          kind: "LinkedField",
          name: "country_validation_recommended_country_option",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "XFBBillingOptionListItem",
          kind: "LinkedField",
          name: "account_credential_country_options",
          plural: !0,
          selections: i,
          storageKey: null,
        },
        u = {
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
        c = {
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
          ],
          storageKey: null,
        },
        d = {
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
          ],
          type: "AdAccount",
          abstractKey: null,
        },
        m = {
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
          name: "BillingConfirmLocationScreenQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account_tax_info",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
                l,
                s,
                u,
                c,
                d,
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
          name: "BillingConfirmLocationScreenQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                m,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "billable_account_tax_info",
                  plural: !1,
                  selections: [m, a],
                  storageKey: null,
                },
                l,
                s,
                u,
                c,
                d,
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
          id: n("BillingConfirmLocationScreenQuery_facebookRelayOperation"),
          metadata: {},
          name: "BillingConfirmLocationScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
