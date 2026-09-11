__d(
  "FriendableProfileRecommendationsUnitItemCard_recommendationsUnitItem$normalization.graphql",
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
        },
        t = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        r = { kind: "Variable", name: "scale", variableName: "scale" },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "FriendableProfileRecommendationsUnitItemCard_recommendationsUnitItem$normalization",
        selections: [
          e,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [
              e,
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "friendship_status",
                storageKey: null,
              },
              n,
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 230 },
                  r,
                  { kind: "Literal", name: "width", value: 230 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: o,
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
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "social_context_top_mutual_friends",
                plural: !0,
                selections: [
                  e,
                  n,
                  t,
                  {
                    alias: null,
                    args: [
                      { kind: "Literal", name: "height", value: 16 },
                      r,
                      { kind: "Literal", name: "width", value: 16 },
                    ],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: o,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
