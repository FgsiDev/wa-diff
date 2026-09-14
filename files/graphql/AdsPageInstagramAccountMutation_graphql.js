__d(
  "AdsPageInstagramAccountMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "page_id" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            concreteType: "XFBCreatePBIAResponse",
            kind: "LinkedField",
            name: "xfb_create_page_backed_instagram_accounts",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "iguser_v2_id",
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
          metadata: null,
          name: "AdsPageInstagramAccountMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsPageInstagramAccountMutation",
          selections: t,
        },
        params: {
          id: "25221386390872351",
          metadata: {},
          name: "AdsPageInstagramAccountMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
