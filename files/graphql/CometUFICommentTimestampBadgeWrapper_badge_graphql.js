__d(
  "CometUFICommentTimestampBadgeWrapper_badge.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentTimestampBadgeWrapper_badge",
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
                  kind: "ScalarField",
                  name: "created_time",
                  storageKey: null,
                },
                action: "THROW",
                path: "comment.created_time",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "comment",
        },
      ],
      type: "XFBCommentTimestampBadge",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
