__d(
  "createFeedCometMentionsDataEntryWithTagSuggestion_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: { mask: !1 },
      name: "createFeedCometMentionsDataEntryWithTagSuggestion_data",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "User",
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: "photo",
                  args: [
                    { kind: "Literal", name: "height", value: 40 },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 40 },
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
              type: "Profile",
              abstractKey: "__isProfile",
            },
          ],
          storageKey: null,
        },
      ],
      type: "SuggestedWithTagsEdge",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
