__d(
  "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery.graphql",
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
        n = [
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
                concreteType: "CreativeMeatadataSellingPointData",
                kind: "LinkedField",
                name: "selling_points",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "anchor_text",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "category",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_verbatim",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text_format",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "CreativeMeatadataWebsiteSummaryTextSignalMetadataData",
                    kind: "LinkedField",
                    name: "metadata",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_specific",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_restriction",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_urgent",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_non_valuable",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
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
                kind: "ScalarField",
                name: "page_text_signals_asset_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mgenai_website_entity_id",
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
          metadata: null,
          name: "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery",
          selections: n,
        },
        params: {
          id: "28238054079131603",
          metadata: {},
          name: "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
