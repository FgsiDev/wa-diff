__d(
  "CometUFICommentThumbsDownActionLink_commentActionLink.graphql",
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
        name: "CometUFICommentThumbsDownActionLink_commentActionLink",
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
                e,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "viewer_comment_vote_state",
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
                    e,
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "use_default_actor",
                          variableName: "useDefaultActor",
                        },
                      ],
                      concreteType: "FeedbackReactionInfo",
                      kind: "LinkedField",
                      name: "viewer_feedback_reaction_info",
                      plural: !1,
                      selections: [e],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            action: "THROW",
            path: "comment",
          },
        ],
        type: "XFBCommentThumbsDownActionLink",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
