__d(
  "FriendingCometPYMKCard_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "scale" },
        { defaultValue: 230, kind: "LocalArgument", name: "size" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "FriendingCometPYMKCard_user",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "friendship_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        {
          alias: null,
          args: [
            { kind: "Variable", name: "height", variableName: "size" },
            { kind: "Variable", name: "scale", variableName: "scale" },
            { kind: "Variable", name: "width", variableName: "size" },
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
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "social_context",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: [{ kind: "Literal", name: "iconSize", value: 16 }],
          kind: "FragmentSpread",
          name: "FriendingCometMutualFriendsSocialContext_user",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
