__d(
  "CometUFICommentInlineFollowCTA_comment.graphql",
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
        name: "CometUFICommentInlineFollowCTA_comment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "author",
            plural: !1,
            selections: [
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
        type: "Comment",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
