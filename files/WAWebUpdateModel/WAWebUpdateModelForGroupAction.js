__d(
  "WAWebUpdateModelForGroupAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatSeenBridge",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebEphemeralityUtils",
    "WAWebGroupGatingUtils",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebInvalidateEventsAction",
    "WAWebLeaveReasonType",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRemoveFromFavoritesAction",
    "WAWebUpdateModelsForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t, a) {
      var i = t.chatId,
        l = o("WAWebChatCollection").ChatCollection.get(i);
      if (!l) return (d || (d = n("Promise"))).resolve();
      var m = r("nullthrows")(l.groupMetadata),
        p = t.author,
        _ = t.ts;
      switch (a.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT: {
          var f = { name: a.subject };
          (l.contact.set(f), m.set("subject", a.subject));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!a.jid) break;
          var g = r("WAWebGroupMetadataCollection").assertGet(a.jid);
          if (g.participants.iAmAdmin()) {
            var h = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !1 };
            });
            g.participants.add(h, { merge: !0 });
          } else
            g.participants.remove(
              a.participants.map(function (e) {
                return e.id;
              }),
            );
          if (
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            })
          ) {
            var y = g.participants
              .filter(function (e) {
                return !e.isAdmin;
              })
              .map(function (e) {
                return e.id;
              });
            g.participants.remove(y);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!a.jid) break;
          var C = r("WAWebGroupMetadataCollection").assertGet(a.jid),
            b = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !0 };
            });
          C.participants.add(b, { merge: !0 });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            m.groupAdder == null && m.set("groupAdder", t.author);
            var v = a.participants.some(function (e) {
                return e.id.isLid();
              }),
              S = o("WAWebGroupMetadataGetters").getIsCag(m),
              R = !!m.isLidAddressingMode;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var L = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() &&
                L.includeOpenMetabot &&
                (m.isOpenBotGroup = !0),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  L.includeTeeMetabot &&
                  (m.isTeeBotGroup = !0));
            }
            if (v && !S && !R) break;
          }
          var E = [],
            k = new Set();
          m.participants.iAmAdmin() ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE
            ? ((E = a.participants.map(function (e) {
                var t = e.id;
                return t;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.isAdmin,
                  r = e.lid;
                (n && k.add(t.toString()),
                  !(r == null || t.isLid()) && m.participants.remove(r));
              }))
            : a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
              ((E = a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? t : n;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.lid;
                n == null || t.isLid() || m.participants.remove(t);
              }));
          var I = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.groupHistorySentState];
              }),
            ),
            T = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.joinTime];
              }),
            ),
            D = E.map(function (e) {
              var t = I.get(e.toString()),
                n = T.get(e.toString()),
                r = {};
              return (
                t != null && (r.groupHistorySentState = t),
                n != null && n > 0 && (r.joinTime = n),
                babelHelpers.extends(
                  {
                    id: e,
                    isAdmin:
                      a.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
                      (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
                        k.has(e.toString())),
                  },
                  r,
                )
              );
            });
          if (
            (m.participants.add(D, { merge: !0 }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (E.forEach(function (e) {
                (m.pastParticipants.remove(e),
                  o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                    m.pastParticipants.reset());
              }),
              m.membershipApprovalMode &&
                E.forEach(function (e) {
                  m.membershipApprovalRequests.remove(e);
                }),
              E.forEach(function (e) {
                r("WAWebGroupMetadataCollection").trigger(
                  "group_participant_change_" + e.toString(),
                  { gid: l.id, collectionIsStale: !0 },
                );
              }),
              a.isParentGroup === !0 &&
                r("WAWebCommunityActivityCollection").add({
                  id: i.toString(),
                  communityId: i,
                  type: o("WAWebCommunityActivityModel").ActivityTypeType
                    .NEW_COMMUNITY,
                  timestamp: _ != null ? _ : o("WATimeUtils").unixTime(),
                })),
            E.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            }))
          )
            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
              if (
                o("WAWebGroupMetadataGetters").getGroupType(m) ===
                o("WAWebGroupType").GroupType.COMMUNITY
              ) {
                var x = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                  m.id.toString(),
                );
                o("WAWebNuxAction")
                  .resetNux(x)
                  .catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[groups] resetNux failed on community admin promote: ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("group-action-promote-reset-nux-failed");
                  });
              }
              m.membershipApprovalMode &&
                o(
                  "WAWebGroupGetMembershipApprovalRequestsJob",
                ).queryAndUpdateGroupMembershipApprovalRequests(l.id);
            } else
              a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
                m.membershipApprovalRequests.reset();
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var $,
            P = !1,
            N = [],
            M = [];
          if (
            (a.participants.forEach(function (e) {
              var n = e.id,
                r = e.isAdmin,
                a = e.lid,
                i = o("WAWebUserPrefsMeUser").isMeAccount(n);
              (a != null && i && r === !0 && N.push(a),
                N.push(n),
                M.push({
                  id: n,
                  leaveTs: _,
                  leaveReason: n.equals(t.author)
                    ? o("WAWebLeaveReasonType").LeaveReason.Left
                    : o("WAWebLeaveReasonType").LeaveReason.Removed,
                }),
                i && (P = !0));
            }),
            m.participants.remove(N),
            m.pastParticipants.add(M),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled())
          )
            try {
              var w = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                w.includeOpenMetabot
              ) {
                var A = m.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                A || (m.isOpenBotGroup = !1);
              }
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                w.includeTeeMetabot
              ) {
                var F = m.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                F || (m.isTeeBotGroup = !1);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot groups] prev participant state check err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-groups-error-previous-participant-state");
            }
          (a.reason ===
            o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
            m.participants.add(
              a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? { id: t } : { id: n };
              }),
              { merge: !0 },
            ),
            a.participants.forEach(function (e) {
              r("WAWebGroupMetadataCollection").trigger(
                "group_participant_change_" + e.id.toString(),
                { gid: l.id },
              );
            }),
            P &&
              (o(
                "WAWebPollsInvalidateChatPollMsgsAction",
              ).invalidateChatPollMsgs(l),
              o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l),
              o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
                l.id,
                { suppressToast: !0 },
              )));
          var O =
            ($ = m.getParentGroupChat()) == null ? void 0 : $.groupMetadata;
          (o("WAWebGroupMetadataGetters").getIsCag(m) &&
            (O == null || O.participants.remove(N),
            O == null || O.pastParticipants.add(M)),
            !m.isParentGroupParticipant() &&
              m.parentGroup &&
              (O == null || O.trigger("exitParentGroup"),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(m.parentGroup)));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (p && a.participants && a.participants.length > 0) {
            var B = p,
              W = a.participants[0].id,
              q = m.participants.remove(B),
              U = !1,
              V = !1;
            q.length && q[0] && ((U = q[0].isAdmin), (V = q[0].isSuperAdmin));
            var H = { id: W, isAdmin: U, isSuperAdmin: V };
            m.participants.add(H);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          a.code
            ? (m.inviteCode = a.code)
            : o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "model:chat:handleGroupAction:invalid invite code: ",
                    " for ",
                    "",
                  ])),
                a.code,
                l.id.toString(),
              );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          m.set({
            desc: a.desc,
            descId: a.descId,
            descTime: a.descTime,
            descOwner: p == null ? void 0 : p.toString(),
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          if (m.descId === a.descId) {
            m.set({
              desc: void 0,
              descId: void 0,
              descTime: void 0,
              descOwner: void 0,
            });
            break;
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          m.restrict = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var G = !!a.value;
          (G &&
            !m.suspended &&
            o("WAWebGroupMetadataGetters").getGroupType(m) ===
              o("WAWebGroupType").GroupType.DEFAULT &&
            m.participants.iAmAdmin() &&
            o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled() &&
            ((l.unreadCount = -1),
            o("WAWebChatSeenBridge").markConversationUnseen(i)),
            (m.suspended = G),
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).maybeUpdateModelsForCommunitySuspendedStatus(i, G));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          ((m.suspendAppealStatus = a.appealStatus),
            (m.suspendAppealUpdateTime = a.appealUpdateTime));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          m.announce = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          m.noFrequentlyForwarded = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var z =
            o("WAWebAfterReadUtils").isAfterReadEnabled() &&
            o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
          (z
            ? ((m.ephemeralDuration = o(
                "WAWebAfterReadUtils",
              ).getAfterReadFallbackDuration()),
              (m.afterReadDuration = a.duration))
            : ((m.ephemeralDuration = a.duration),
              (m.afterReadDuration = null)),
            (m.disappearingModeTrigger = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTrigger(a.trigger)),
            (m.disappearingModeInitiatedByMe = a.initiatedByMe));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var j = [];
          (a.participants.forEach(function (e) {
            var t = e.id;
            m.pendingParticipants.get(t) && j.push(t);
          }),
            m.pendingParticipants.remove(j));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE:
          a.reason === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
            ? o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForIntegrityDeactivateCommunity(i)
            : a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ? o(
                  "WAWebUpdateModelsForCommunityAction",
                ).updateModelsForDeactivateCommunity(i)
              : (m.terminated = !0);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          ((m.growthLockExpiration = void 0), (m.growthLockType = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          a.type === "invite" &&
            ((m.growthLockExpiration = a.expiration),
            (m.growthLockType = a.type));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          m.parentGroup = a.groupDatas[0].id;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
            parentGroupId: l.id,
            subgroups: a.groupDatas,
            timestamp: _,
            author: t.author,
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          m.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupLink({
              parentGroupId: m.parentGroup,
              subgroups: a.groupDatas,
              timestamp: _,
              author: t.author,
            });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          m.parentGroup = void 0;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          o(
            "WAWebUpdateModelsForCommunityAction",
          ).updateModelsForSubgroupUnlink(l.id, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          m.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupUnlink(m.parentGroup, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((m.membershipApprovalMode = !!a.value),
            a.value || m.membershipApprovalRequests.reset());
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS: {
          (m.set("reportToAdminMode", a.value),
            a.value || m.set("lastReportToAdminTimestamp", null));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED: {
          m.set("lastReportToAdminTimestamp", a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var K = a.requests.map(function (e) {
            return {
              id: e.wid,
              t: _,
              addedBy: r("nullthrows")(p),
              requestMethod: a.requestMethod,
              parentGroupId: a.parentGroupId,
            };
          });
          m.membershipApprovalRequests.add(K);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          a.requests.forEach(function (e) {
            m.membershipApprovalRequests.remove(e);
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          m.allowNonAdminSubGroupCreation = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
          m.subgroupSuggestions.add(
            {
              id: o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(a.id, a.owner),
              groupId: a.id,
              parentGroupId: a.parentGroupId,
              subject: a.subject,
              desc: a.description,
              owner: a.owner,
              t: a.t,
              isExistingGroup: a.isExistingGroup,
              participantCount: a.participantCount,
            },
            { merge: !0 },
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
          m.subgroupSuggestions.remove(
            a.subgroupSuggestions.map(function (e) {
              var t = e.id,
                n = e.owner;
              return o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(t, n);
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER: {
          var Q = r("compactMap")(a.subgroupSuggestions, function (e) {
            return m.subgroupSuggestions.get(
              o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e, a.oldOwner),
            );
          });
          (m.subgroupSuggestions.remove(Q),
            m.subgroupSuggestions.add(
              Q.map(function (e) {
                return {
                  id: o(
                    "WAWebCommunitySubgroupSuggestionsUtils",
                  ).getSubgroupSuggestionId(e.groupId, a.newOwner),
                  groupId: e.groupId,
                  parentGroupId: e.parentGroupId,
                  subject: e.subject,
                  desc: e.desc,
                  owner: a.newOwner,
                  t: e.t,
                  isExistingGroup: e.isExistingGroup,
                  participantCount: e.participantCount,
                };
              }),
              { merge: !0 },
            ));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          m.memberAddMode = a.memberAddMode;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          m.memberLinkMode = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          m.generalChatAutoAddDisabled = !0;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          var X = a.newOwner,
            Y = a.oldOwner,
            J = new Set([X.toString()]),
            Z = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(X),
            );
          Z != null && J.add(Z.toString());
          var ee = new Set();
          if (Y) {
            ee.add(Y.toString());
            var te = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(Y),
            );
            if (
              (te && ee.add(te.toString()),
              o("WAWebUserPrefsMeUser").isMeAccount(Y))
            ) {
              var ne = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                m.id.toString(),
              );
              o("WAWebNuxAction").dismissNux(ne);
            }
          }
          var re = [];
          (m.participants.forEach(function (e) {
            var t = e.id.toString();
            ee.has(t)
              ? re.push({ id: e.id, isAdmin: !0, isSuperAdmin: !1 })
              : J.has(t) &&
                re.push({ id: e.id, isAdmin: !0, isSuperAdmin: !0 });
          }),
            (m.owner = X),
            m.participants.add(re, { merge: !0 }));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          m.hiddenSubgroup = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          m.groupSafetyCheck = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          m.memberShareGroupHistoryMode = a.value;
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "unhandled group notif action in handleGroupAction",
                ])),
            )
            .tags("groups");
          break;
      }
      return (d || (d = n("Promise"))).resolve();
    }
    l.updateModelForGroupAction = m;
  },
  98,
);
