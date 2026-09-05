__d(
  "BillingAutoReloadPaymentMethodScreenQuery.graphql",
  ["BillingAutoReloadPaymentMethodScreenQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "country" },
        t = { defaultValue: null, kind: "LocalArgument", name: "currency" },
        r = { defaultValue: null, kind: "LocalArgument", name: "intent" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "paymentAccountID",
        },
        a = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "paymentAccountID",
          },
        ],
        i = [
          {
            fields: [
              { kind: "Variable", name: "currency", variableName: "currency" },
              { kind: "Variable", name: "intent", variableName: "intent" },
              {
                kind: "Variable",
                name: "tax_country",
                variableName: "country",
              },
            ],
            kind: "ObjectValue",
            name: "usability_params",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "credential_type",
          storageKey: null,
        },
        u = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "credential_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "last_four_digits",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "card_association_name",
              storageKey: null,
            },
          ],
          type: "ExternalCreditCard",
          abstractKey: null,
        },
        c = [{ kind: "Literal", name: "limit", value: 1 }],
        d = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
        ],
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "BillingAutoReloadPaymentMethodScreenQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "PaymentCredentialDetails",
                  kind: "LinkedField",
                  name: "billing_payment_methods",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "credential",
                      plural: !1,
                      selections: [
                        l,
                        s,
                        u,
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "BillingPaymentIconUtils_paymentCredential",
                          selections: [
                            {
                              kind: "InlineFragment",
                              selections: [
                                {
                                  alias: null,
                                  args: c,
                                  concreteType: "Image",
                                  kind: "LinkedField",
                                  name: "billing_icons",
                                  plural: !0,
                                  selections: [
                                    {
                                      kind: "InlineDataFragmentSpread",
                                      name: "BillingPaymentIconUtils_data",
                                      selections: d,
                                      args: null,
                                      argumentDefinitions: [],
                                    },
                                  ],
                                  storageKey: "billing_icons(limit:1)",
                                },
                              ],
                              type: "BillingPaymentMethod",
                              abstractKey: "__isBillingPaymentMethod",
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
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
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [o, e, t, r],
          kind: "Operation",
          name: "BillingAutoReloadPaymentMethodScreenQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "payment_account",
              plural: !1,
              selections: [
                l,
                {
                  alias: null,
                  args: i,
                  concreteType: "PaymentCredentialDetails",
                  kind: "LinkedField",
                  name: "billing_payment_methods",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "credential",
                      plural: !1,
                      selections: [
                        l,
                        s,
                        u,
                        {
                          kind: "TypeDiscriminator",
                          abstractKey: "__isPaymentCredential",
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: c,
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "billing_icons",
                              plural: !0,
                              selections: d,
                              storageKey: "billing_icons(limit:1)",
                            },
                          ],
                          type: "BillingPaymentMethod",
                          abstractKey: "__isBillingPaymentMethod",
                        },
                        m,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                m,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "BillingAutoReloadPaymentMethodScreenQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BillingAutoReloadPaymentMethodScreenQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
