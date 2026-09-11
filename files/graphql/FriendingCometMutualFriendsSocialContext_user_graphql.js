__d(
  "FriendingCometMutualFriendsSocialContext_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: 16, kind: "LocalArgument", name: "iconSize" },
          { kind: "RootArgument", name: "scale" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "FriendingCometMutualFriendsSocialContext_user",
        selections: [
          e,
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "social_context_top_mutual_friends",
            plural: !0,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: [{ kind: "Literal", name: "site", value: "comet" }],
                kind: "ScalarField",
                name: "url",
                storageKey: 'url(site:"comet")',
              },
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "height",
                    variableName: "iconSize",
                  },
                  { kind: "Variable", name: "scale", variableName: "scale" },
                  { kind: "Variable", name: "width", variableName: "iconSize" },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "User",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
