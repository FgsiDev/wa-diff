__d(
  "AdsUEditorWebsiteSummaryEligibilityQueryPlugin_Query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "url" },
        n = { vultureHash: "xQTkcKbVzLvDFTbrfr4-hqTrRVw=" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
              { kind: "Variable", name: "url", variableName: "url" },
            ],
            concreteType: "XFBCreativeMetadataWebSummaryData",
            kind: "LinkedField",
            name: "xfb_creative_metadata_website_summary_fields",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reviews",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "CreativeMeatadataSellingPointData",
                kind: "LinkedField",
                name: "selling_points",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: n,
          name: "AdsUEditorWebsiteSummaryEligibilityQueryPlugin_Query",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsUEditorWebsiteSummaryEligibilityQueryPlugin_Query",
          selections: r,
        },
        params: {
          id: "24329515113388421",
          metadata: n,
          name: "AdsUEditorWebsiteSummaryEligibilityQueryPlugin_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
