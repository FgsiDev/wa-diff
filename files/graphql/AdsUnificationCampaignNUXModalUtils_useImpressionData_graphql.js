__d(
  "AdsUnificationCampaignNUXModalUtils_useImpressionData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "attribute_types" },
        { kind: "RootArgument", name: "scope_ids" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "AdsUnificationCampaignNUXModalUtils_useImpressionData",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "attribute_types",
              variableName: "attribute_types",
            },
            { kind: "Variable", name: "scope_ids", variableName: "scope_ids" },
          ],
          concreteType: null,
          kind: "LinkedField",
          name: "xfb_advertiser_profile_editable_attributes",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "value",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "as_boolean",
                      storageKey: null,
                    },
                  ],
                  type: "XFBAdvertiserProfileBooleanBasedAttributeValue",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "as_integer",
                      storageKey: null,
                    },
                  ],
                  type: "XFBAdvertiserProfileIntegerBasedAttributeValue",
                  abstractKey: null,
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
