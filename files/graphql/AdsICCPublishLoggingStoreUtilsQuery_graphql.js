__d(
  "AdsICCPublishLoggingStoreUtilsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBInformedCampaignCreationResult",
            kind: "LinkedField",
            name: "xfb_informed_campaign_creation_prediction",
            plural: !1,
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "AdsICCPublishLoggingStoreUtilsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsICCPublishLoggingStoreUtilsQuery",
          selections: t,
        },
        params: {
          id: "28213860774905096",
          metadata: {},
          name: "AdsICCPublishLoggingStoreUtilsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
