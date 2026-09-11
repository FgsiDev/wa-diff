__d(
  "CometUFICommentReplyActionLink_commentActionLink.graphql",
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
        argumentDefinitions: [
          { kind: "RootArgument", name: "useDefaultActor" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometUFICommentReplyActionLink_commentActionLink",
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
                  field: e,
                  action: "THROW",
                  path: "comment.id",
                },
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
                  args: [
                    {
                      kind: "Variable",
                      name: "useDefaultActor",
                      variableName: "useDefaultActor",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "useCometUFIReplyActionConfig_comment",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useCometUFICommentReplyLiveVideoViewerLogger_comment",
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "comment",
          },
        ],
        type: "XFBCommentReplyActionLink",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
