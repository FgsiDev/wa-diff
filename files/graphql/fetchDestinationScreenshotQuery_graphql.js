__d(
  "fetchDestinationScreenshotQuery.graphql",
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
              { kind: "Variable", name: "source_url", variableName: "url" },
            ],
            concreteType: "XFBDestinationScreenshotData",
            kind: "LinkedField",
            name: "xfb_creative_metadata_destination_screenshot",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_eligible",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "screenshot_image_hash",
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
          name: "fetchDestinationScreenshotQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "fetchDestinationScreenshotQuery",
          selections: n,
        },
        params: {
          id: "37920379954275365",
          metadata: {},
          name: "fetchDestinationScreenshotQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
