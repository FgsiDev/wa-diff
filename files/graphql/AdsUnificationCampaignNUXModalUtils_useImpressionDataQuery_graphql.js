__d(
  "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "attribute_types",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scope_ids" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "AdsUnificationCampaignNUXModalUtils_useImpressionData",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery",
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "attribute_types",
                  variableName: "attribute_types",
                },
                {
                  kind: "Variable",
                  name: "scope_ids",
                  variableName: "scope_ids",
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_advertiser_profile_editable_attributes",
              plural: !0,
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "value",
                  plural: !1,
                  selections: [
                    t,
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
          id: "23900444656318652",
          metadata: {},
          name: "AdsUnificationCampaignNUXModalUtils_useImpressionDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
