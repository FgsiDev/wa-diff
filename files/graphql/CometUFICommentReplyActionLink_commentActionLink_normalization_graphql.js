__d(
  "CometUFICommentReplyActionLink_commentActionLink$normalization.graphql",
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
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        n = [t];
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFICommentReplyActionLink_commentActionLink$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Comment",
            kind: "LinkedField",
            name: "comment",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "Comment",
                kind: "LinkedField",
                name: "comment_parent",
                plural: !1,
                selections: [e],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_author_weak_reference",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "legacy_fbid",
                storageKey: null,
              },
              t,
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
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: n,
                    type: "Event",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: n,
                    type: "Group",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: n,
                    type: "Page",
                    abstractKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: n,
                    type: "User",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: [
                      {
                        kind: "Variable",
                        name: "use_default_actor",
                        variableName: "useDefaultActor",
                      },
                    ],
                    kind: "ScalarField",
                    name: "comment_composer_placeholder",
                    storageKey: null,
                  },
                  e,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_live_video_comment",
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
