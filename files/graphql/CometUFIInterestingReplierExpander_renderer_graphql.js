__d(
  "CometUFIInterestingReplierExpander_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "CometUFIInterestingReplierExpander_renderer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "interesting_reply",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "author",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: "profilePictureForReplyExpander",
                  args: [
                    { kind: "Literal", name: "height", value: 24 },
                    { kind: "Variable", name: "scale", variableName: "scale" },
                    { kind: "Literal", name: "width", value: 24 },
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
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "gender",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [{ kind: "Literal", name: "size", value: 24 }],
                      kind: "ScalarField",
                      name: "ufi_silhouette_uri",
                      storageKey: "ufi_silhouette_uri(size:24)",
                    },
                    {
                      kind: "ClientExtension",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "availability",
                          storageKey: null,
                        },
                      ],
                    },
                  ],
                  type: "User",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "created_time",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBInterestingReplierInlineRepliesExpanderRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
