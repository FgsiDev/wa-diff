__d(
  "CometUFICommentFollowBadgeWrapper_badge$normalization.graphql",
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
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFICommentFollowBadgeWrapper_badge$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Comment",
            kind: "LinkedField",
            name: "comment",
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
                    name: "__typename",
                    storageKey: null,
                  },
                  e,
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "subscribe_status",
                        storageKey: null,
                      },
                    ],
                    type: "User",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_show_follow_back_to_comment_author",
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
