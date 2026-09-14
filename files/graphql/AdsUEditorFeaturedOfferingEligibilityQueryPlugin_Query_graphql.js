__d(
  "AdsUEditorFeaturedOfferingEligibilityQueryPlugin_Query.graphql",
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
            concreteType: "XFBFanoutLinkData",
            kind: "LinkedField",
            name: "xfb_fanout_links_by_url",
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
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "AdsUEditorFeaturedOfferingEligibilityQueryPlugin_Query",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsUEditorFeaturedOfferingEligibilityQueryPlugin_Query",
          selections: n,
        },
        params: {
          id: "27958937503718988",
          metadata: {},
          name: "AdsUEditorFeaturedOfferingEligibilityQueryPlugin_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
