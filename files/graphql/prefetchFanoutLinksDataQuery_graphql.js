__d(
  "prefetchFanoutLinksDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "skip" },
        n = { defaultValue: null, kind: "LocalArgument", name: "url" },
        r = [
          {
            condition: "skip",
            kind: "Condition",
            passingValue: !1,
            selections: [
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
                concreteType: "XFBFanoutLinkData",
                kind: "LinkedField",
                name: "xfb_fanout_links_by_url",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verbatim_title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "description",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "fanout_link",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "featured_offering_asset_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mgenai_website_entity_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBFeaturedOfferingImageData",
                    kind: "LinkedField",
                    name: "image",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "image_url",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "prefetchFanoutLinksDataQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, t, e],
          kind: "Operation",
          name: "prefetchFanoutLinksDataQuery",
          selections: r,
        },
        params: {
          id: "28618158007777083",
          metadata: {},
          name: "prefetchFanoutLinksDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
