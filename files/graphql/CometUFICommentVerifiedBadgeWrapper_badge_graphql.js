__d(
  "CometUFICommentVerifiedBadgeWrapper_badge.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentVerifiedBadgeWrapper_badge",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Comment",
            kind: "LinkedField",
            name: "comment",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "author",
                  plural: !1,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                      action: "THROW",
                      path: "comment.author.id",
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
                path: "comment.author",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "comment",
        },
      ],
      type: "XFBCommentVerifiedBadge",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
