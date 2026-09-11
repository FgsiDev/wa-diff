__d(
  "CometUserUnfollowMutation.graphql",
  ["CometUserUnfollowMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "action_render_location",
          },
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
        ],
        t = [{ kind: "Variable", name: "data", variableName: "input" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = [
          { kind: "Literal", name: "action_type", value: "FOLLOW" },
          {
            kind: "Variable",
            name: "render_location",
            variableName: "action_render_location",
          },
        ],
        i = {
          args: null,
          kind: "FragmentSpread",
          name: "ProfileActionMutationUtils_action",
        },
        l = [
          { kind: "Literal", name: "action_type", value: "FOLLOWING_STATUS" },
        ],
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribe_status",
          storageKey: null,
        },
        u = { kind: "TypeDiscriminator", abstractKey: "__isProfileAction" },
        c = { kind: "Literal", name: "icon_color", value: "fds-black" },
        d = { kind: "Literal", name: "icon_variant", value: "filled" },
        m = { kind: "Variable", name: "scale", variableName: "scale" },
        p = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null,
          },
        ],
        _ = {
          alias: null,
          args: [c, { kind: "Literal", name: "icon_size", value: "16" }, d, m],
          concreteType: "Image",
          kind: "LinkedField",
          name: "icon_image",
          plural: !1,
          selections: p,
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        g = {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_optimistic_update",
              storageKey: null,
            },
          ],
        },
        h = { kind: "Literal", name: "icon_size", value: "20" };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometUserUnfollowMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "ActorUnsubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_unsubscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "unsubscribee",
                  plural: !1,
                  selections: [
                    r,
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: a,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [i],
                          storageKey: null,
                        },
                        {
                          alias: "following_status",
                          args: l,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [
                            i,
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "ProfileCometHeaderActionBarMenuItem_profileAction",
                            },
                          ],
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        s,
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometUserUnfollowMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "ActorUnsubscribeResponsePayload",
              kind: "LinkedField",
              name: "actor_unsubscribe",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "unsubscribee",
                  plural: !1,
                  selections: [
                    r,
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: a,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [r, u, _, o, f, g],
                          storageKey: null,
                        },
                        {
                          alias: "following_status",
                          args: l,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "profile_action",
                          plural: !1,
                          selections: [
                            r,
                            u,
                            _,
                            o,
                            f,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "profile_action_type",
                              storageKey: null,
                            },
                            {
                              alias: "secondary_icon",
                              args: [
                                c,
                                h,
                                {
                                  kind: "Literal",
                                  name: "icon_variant",
                                  value: "outline",
                                },
                                m,
                              ],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "icon_image",
                              plural: !1,
                              selections: p,
                              storageKey: null,
                            },
                            {
                              alias: "active_secondary_icon",
                              args: [c, h, d, m],
                              concreteType: "Image",
                              kind: "LinkedField",
                              name: "icon_image",
                              plural: !1,
                              selections: p,
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_disabled",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_active",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "supported",
                                  value: "34a0Yb",
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "client_handler",
                              plural: !1,
                              selections: [
                                r,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionBlockHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionBlockHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionBlockUserFromGroupHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionBlockUserFromGroupHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionCallHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionCallHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionContactUsHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionContactUsHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionDefaultHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionDefaultHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionEditFriendListHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionEditFriendListHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionEditProfileHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionEditProfileHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionFollowHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionFollowHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionLikeHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionLikeHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionFollowingStatusHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionFollowingStatusHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionFriendRequestHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionFriendRequestHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionInsightsHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionInsightsHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionProfessionalModeRollbackHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionProfessionalModeRollbackHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionProfessionalModeOnboardingHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionProfessionalModeOnboardingHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionProfessionalModeOnboardingUpsellHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionProfessionalModeOnboardingUpsellHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionSwitchProfileModeHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionSwitchProfileModeHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionMessageHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionMessageHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionMessengerAudioCallHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionMessengerAudioCallHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionMessengerVideoCallHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionMessengerVideoCallHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionPreferredInteractionHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionPreferredInteractionHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionReportHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionReportHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionGetSupportHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionGetSupportHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionReportMarketplaceUserHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionReportMarketplaceHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionSeeFirstHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionSeeFirstHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionRemoveMemberHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionRemoveMemberHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionSearchProfileHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionSearchProfileHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionLikeAsYourPageHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionLikeAsYourPageHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionSetContentControlsHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionSetContentControlsHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionMuteMemberHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionMuteMemberHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionTurnOnPostApprovalForMemberHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionTurnOnPostApprovalForMemberHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionInviteAdminHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionInviteAdminHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionInviteModeratorHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionInviteModeratorHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionInviteExpertHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionInviteExpertHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionLeaveGroupHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionLeaveGroupHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionRemoveGroupAdminHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionRemoveGroupAdminHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionRemoveExpertiseShowAsBadgeHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionRemoveExpertiseShowAsBadgeHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionRemoveExpertHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionRemoveExpertHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionEditContextualProfileHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionEditContextualProfileHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionContextualProfileReportBioHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionContextualProfileReportBioHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionPromoteHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionPromoteHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionAdminToolsHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionAdminToolsHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionManageFollowerHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionManageFollowerHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionInviteToFollowHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionInviteToFollowHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionInvitePostReactorsToFollowHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionInvitePostReactorsToFollowHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionBookNowHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionBookNowHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionLockProfileHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionLockProfileHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionDonateNowHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionDonateNowHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionTopFanBadgeSettingHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionTopFanBadgeSettingHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionStartTourHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionStartTourHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionRecurringNotificationsOptInHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionRecurringNotificationsOptInHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionFubsSubscribeHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionFubsSubscribeHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionSwitchRegionHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionSwitchRegionHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometGroupActionManageRolesHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileGroupActionManageRolesHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionCheckInHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionCheckInHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionContextualProfileReportNicknameHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionContextualProfileReportNicknameHandler",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionTrigger_action",
                                      fragmentName:
                                        "ProfileCometActionBlockNicknameHandler_handler",
                                      fragmentPropName: "handler",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionBlockNicknameHandler",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: 'client_handler(supported:"34a0Yb")',
                            },
                            {
                              alias: null,
                              args: [
                                {
                                  kind: "Literal",
                                  name: "supported",
                                  value: "X5gYL",
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "client_logger",
                              plural: !1,
                              selections: [
                                r,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionLogger_action",
                                      fragmentName:
                                        "ProfileCometActionProfessionalModeRollbackLogger_logger",
                                      fragmentPropName: "logger",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionProfessionalModeRollbackLogger",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      args: null,
                                      documentName:
                                        "ProfileCometActionLogger_action",
                                      fragmentName:
                                        "ProfileCometActionProfessionalModeOnboardingLogger_logger",
                                      fragmentPropName: "logger",
                                      kind: "ModuleImport",
                                    },
                                  ],
                                  type: "ProfileActionProfessionalModeOnboardingLogger",
                                  abstractKey: null,
                                },
                              ],
                              storageKey: 'client_logger(supported:"X5gYL")',
                            },
                            g,
                          ],
                          storageKey:
                            'profile_action(action_type:"FOLLOWING_STATUS")',
                        },
                        s,
                      ],
                      type: "User",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("CometUserUnfollowMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometUserUnfollowMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
