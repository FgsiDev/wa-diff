__d(
  "FriendableProfileRecommendationsUnitItemCard_recommendationsUnitItem.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "FriendableProfileRecommendationsUnitItemCard_recommendationsUnitItem",
        selections: [
          { kind: "RequiredField", field: e, action: "THROW", path: "id" },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            kind: "RequiredField",
            field: {
              alias: null,
              args: null,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: e,
                  action: "THROW",
                  path: "user.id",
                },
                {
                  kind: "RequiredField",
                  field: {
                    alias: null,
                    args: [{ kind: "Literal", name: "site", value: "comet" }],
                    kind: "ScalarField",
                    name: "url",
                    storageKey: 'url(site:"comet")',
                  },
                  action: "THROW",
                  path: "user.url",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "FriendingCometPYMKCard_user",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "user",
          },
        ],
        type: "XFBFriendableProfileRecommendationsUnitItem",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
