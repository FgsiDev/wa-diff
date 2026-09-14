__d(
  "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "current_adgroup_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "post_id" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "current_adgroup_id",
                variableName: "current_adgroup_id",
              },
              { kind: "Variable", name: "post_id", variableName: "post_id" },
            ],
            concreteType:
              "XFBXMessengerAdsExistingPostCTASelectorEligibilityTypedController",
            kind: "LinkedField",
            name: "xfb_andromeda_XMessengerAdsExistingPostCTASelectorEligibilityTypedController",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "result",
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
          name: "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery",
          selections: n,
        },
        params: {
          id: "9961468487242767",
          metadata: {},
          name: "MessengerAdsExistingPostCTASelectorEligibilityTypedStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
