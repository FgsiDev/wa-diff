__d(
  "CometUFICommentFollowBadgeWrapper_badge.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentFollowBadgeWrapper_badge",
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
                args: null,
                kind: "FragmentSpread",
                name: "CometUFICommentInlineFollowCTA_comment",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
          path: "comment",
        },
      ],
      type: "XFBCommentFollowBadge",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
