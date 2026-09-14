__d(
  "AdsUEditorWebsiteMediaEligibilityQueryPlugin_Query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountId",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "url" },
        n = { vultureHash: "G-yVCGN03iZIdnNb8EngiMSzWiY=" },
        r = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountId",
              },
              {
                kind: "Literal",
                name: "caller",
                value: "website_eligibility_query",
              },
              { kind: "Variable", name: "url", variableName: "url" },
            ],
            concreteType: "XFBCreativeMetadataWebsiteMediaData",
            kind: "LinkedField",
            name: "xfb_creative_metadata_website_media_fields",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBCreativeMetadataWebsiteMediaItem",
                kind: "LinkedField",
                name: "media",
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
          name: "AdsUEditorWebsiteMediaEligibilityQueryPlugin_Query",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsUEditorWebsiteMediaEligibilityQueryPlugin_Query",
          selections: r,
        },
        params: {
          id: "25593938626870340",
          metadata: n,
          name: "AdsUEditorWebsiteMediaEligibilityQueryPlugin_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
