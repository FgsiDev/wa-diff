__d(
  "CometUFICommentBodyNameAndBadgesExperimental_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "feedLocation" }],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentBodyNameAndBadgesExperimental_renderer",
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
              args: [
                {
                  kind: "Variable",
                  name: "feed_location",
                  variableName: "feedLocation",
                },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "comet_comment_author_badges",
              plural: !0,
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
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentIdentityBadgesWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentIdentityBadges",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentLiveOrGamingIdentityBadgesWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentLiveOrGamingIdentityBadges",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName: "CometUFICommentVerifiedBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentVerifiedBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentTimestampBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentTimestampBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName: "CometUFICommentFollowBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentFollowBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentUserSignalBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentUserSignalBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentGenAITransparencyBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentGenAITransparencyBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName: "CometUFICommentPinnedBadge_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentPinnedBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentLiveVODTimestampBadgeWrapper_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentLiveVODTimestampBadge",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: null,
                      documentName:
                        "CometUFICommentBodyNameAndBadgesExperimental_renderer",
                      fragmentName:
                        "CometUFICommentReactedByContentOwnerBadge_badge",
                      fragmentPropName: "badge",
                      kind: "ModuleImport",
                    },
                  ],
                  type: "XFBCommentReactedByContentOwnerBadge",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBCometCommentNameAndBadgesExperimentalRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
