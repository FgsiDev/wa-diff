__d(
  "WAWebEncryptAndSendGroupMsg",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBUpdateMessageTable",
    "WAWebE2EProtoGenerator",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgRcatUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSendGroupDirectJob",
    "WAWebSendGroupMsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebSendMsgTypes",
    "WAWebStatusSessionGatingUtils",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebSendGroupSkmsgJob").__setRef(
        "WAWebEncryptAndSendGroupMsg",
      );
    function p(t) {
      var n,
        r = t.metricReporter,
        a = t.msgProtobuf,
        i = t.msgRecord,
        l = t.scheduledMsgMetadata,
        d = i.data,
        p = d.id,
        g = d.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            p,
          )
          .tags("messaging"),
        (n = r.sendPerfReporter) == null || n.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          g.toString(),
          async function () {
            var e, t, n, C, v, S, R;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                p,
              )
              .tags("messaging"),
              (e = r.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = r.sendPerfReporter) == null || t.startReadyToSendStage());
            var L = h(a),
              E = b(a),
              k = y(a),
              I = await o("WAWebGroupMsgSendUtils").getParticipantRecord(
                g.toString(),
              ),
              T = await o("WAWebGroupMsgSendUtils").getGroupData(
                g.toString(),
                I,
                i,
              );
            ((n = r.sendReporter) == null || n.setGroupData(T),
              (C = r.sendPerfReporter) == null || C.setGroupData(T));
            var D =
                (v =
                  I == null
                    ? void 0
                    : I.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? v
                  : [],
              x = await o("WAWebMsgRcatUtils").genContentBindingForMsg(d, D),
              $ = !!T.isLidAddressingMode,
              P;
            if (T.isCag === !0) {
              var N,
                M = !!T.amIAdmin;
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  M ? "admin" : "non-admin",
                )
                .tags("messaging");
              var w =
                a == null ||
                (N = a.messageHistoryBundle) == null ||
                (N = N.messageHistoryMetadata) == null
                  ? void 0
                  : N.historyReceivers;
              if (w != null && w.length > 0) {
                var A = await o(
                    "WAWebApiParticipantStore",
                  ).getGroupSenderKeyListFromParticipantRecord(g, I),
                  F = function (t) {
                    return t.map(
                      o("WAWebLidMigrationUtils").toAddressingModeFactory($),
                    );
                  },
                  O = await o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    w.map(o("WAWebWidFactory").createWid),
                    A,
                    { normalizeAddressingModeFn: F, isLidAddressingMode: $ },
                  );
                P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                  O,
                  T,
                );
              } else
                P = await o("WAWebSendGroupMsgJob").getCagMessageSendList({
                  editedMsgKey: E,
                  groupId: g,
                  isAdmin: M,
                  isLidAddressingMode: $,
                  keptMessageKey: k,
                  msgRecord: i,
                  participantRecord: I,
                  revokeMsgKey: L,
                });
            } else {
              var B;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(T),
                  I == null ? void 0 : I.participants.length,
                )
                .tags("messaging");
              var W = await o("WAWebSendGroupMsgJob").getMessageSendList(
                g,
                I,
                L,
                E,
                $,
                a == null ||
                  (B = a.messageHistoryBundle) == null ||
                  (B = B.messageHistoryMetadata) == null
                  ? void 0
                  : B.historyReceivers,
              );
              P = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(
                W,
                T,
              );
            }
            var q = L != null ? _(D, d.botGroupParticipants, T) : [],
              U;
            L != null
              ? (U = {
                  configuredGroupAgentParticipants: q,
                  resolvedGroupAgentParticipants: q,
                })
              : P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.SKMSG
                ? (U = await o(
                    "WAWebResolveGroupAgentParticipants",
                  ).resolveGroupAgentFanoutForGroupSend(T))
                : (U = {
                    configuredGroupAgentParticipants: [],
                    resolvedGroupAgentParticipants: [],
                  });
            var V =
                d.isGroupStatus === !0
                  ? o("WAWebStatusSessionGatingUtils").getStatusSessionScope()
                  : void 0,
              H =
                (T == null ? void 0 : T.isCapiGroup) === !0
                  ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(
                      a,
                    )
                  : a,
              G = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
                o(
                  "WAWebRemoveQuotedAttachmentMediaFields",
                ).isGroupWithAgentParticipant(T)
                  ? o(
                      "WAWebRemoveQuotedAttachmentMediaFields",
                    ).removeQuotedAttachmentMediaFields(H)
                  : H,
                (S = T.groupAgentParticipants) != null ? S : [],
              );
            if (
              (await f({
                groupAgentFanout: U,
                groupMsgProtobuf: G,
                isOpenBotGroup: T.isOpenBotGroup === !0,
                isRevoke: L != null,
                msgRecord: i,
              }),
              P.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT)
            ) {
              var z,
                j,
                K = [null, !1];
              if (L != null) {
                var Q = await m.load(),
                  X = Q.createBotFanoutNode;
                K = await X({
                  configuredGroupAgentParticipants: q,
                  encMediaType: null,
                  groupAgentParticipants: q,
                  isOpenBotGroupSend: q.some(
                    o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid,
                  ),
                  isScheduledMessage: !1,
                  msg: d,
                  msgProtobuf: G,
                  shouldGateInvokedBot: !1,
                });
              }
              var Y = K,
                J = Y[0],
                Z = Y[1],
                ee = P,
                te = ee.deviceList;
              return (
                (z = r.sendReporter) == null || z.setDeviceCount(te.length),
                (j = r.sendPerfReporter) == null || j.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
                  additionalBotBody: J,
                  additionalBotShouldHaveIdentity: Z,
                  deviceList: te,
                  groupData: T,
                  metricReporter: r,
                  msgProtobuf: G,
                  msgRecord: i,
                  scheduledMsgMetadata: l,
                  sessionScope: V,
                })
              );
            }
            var ne = P,
              re = ne.senderKeyList;
            (R = r.sendReporter) == null ||
              R.setDeviceCount(re.skList.length + re.skDistribList.length);
            var oe = await m.load(),
              ae = oe.encryptAndSendSenderKeyMsg;
            return ae(i, G, re, T, r, x, l, U, V);
          },
        )
      );
    }
    function _(e, t, n) {
      if (
        n.isCag === !0 ||
        (n.isAnnouncementGroup === !0 &&
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
      )
        return [];
      var r = new Map();
      return (
        [].concat(e, t != null ? t : []).forEach(function (e) {
          e.isUser() &&
            o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e) &&
            r.set(e.toString(), e);
        }),
        Array.from(r.values())
      );
    }
    async function f(e) {
      var t = e.groupAgentFanout,
        n = e.groupMsgProtobuf,
        a = e.isOpenBotGroup,
        i = e.isRevoke,
        l = e.msgRecord;
      if (
        !(
          i ||
          l.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
          l.data.botGroupParticipants != null
        )
      ) {
        var s =
          a ||
          l.data.invokedBotWid != null ||
          t.configuredGroupAgentParticipants.length > 0;
        if (s) {
          var u = g(n, t.resolvedGroupAgentParticipants);
          try {
            await o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
              botGroupParticipants: u,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[encryptAndSendGroupMsg] failed to persist original agent targets",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("group-send-persist-original-agents-failed");
          }
          l.data.set({ botGroupParticipants: u });
        }
      }
    }
    function g(e, t) {
      var n,
        r,
        a =
          (n =
            (r = e.messageContextInfo) == null ||
            (r = r.botMetadata) == null ||
            (r = r.botGroupMetadata) == null
              ? void 0
              : r.participantsMetadata) != null
            ? n
            : [],
        i = [
          o("WAWebBotUtils").META_BOT_FBID_WID,
          o("WAWebBotUtils").META_BOT_TEE_FBID_WID,
        ].concat(t);
      return a.flatMap(function (e) {
        var t = e.botFbid,
          n = i.find(function (e) {
            return e.toString() === (t != null ? t : "") + "@bot";
          });
        return n != null ? [n] : [];
      });
    }
    function h(e) {
      var t = e.protocolMessage,
        n = null;
      if (
        (t == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        t != null &&
        t.key
      ) {
        var a = t.key,
          i = a.id,
          l = a.participant,
          s = a.remoteJid;
        !r("isStringNullOrEmpty")(s) &&
          !r("isStringNullOrEmpty")(i) &&
          !r("isStringNullOrEmpty")(l) &&
          (n = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(s),
            fromMe: !0,
            id: i,
            participant: o("WAWebWidFactory").createWid(l),
          }));
      }
      return n;
    }
    function y(e) {
      var t = e.keepInChatMessage;
      if (t != null && t.key) {
        var n = t.key,
          a = n.id,
          i = n.participant,
          l = n.remoteJid;
        if (
          !r("isStringNullOrEmpty")(l) &&
          !r("isStringNullOrEmpty")(a) &&
          !r("isStringNullOrEmpty")(i)
        ) {
          var s = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(l),
            fromMe: !0,
            id: a,
            participant: o("WAWebWidFactory").createWid(i),
          });
          return s;
        }
      }
      return null;
    }
    function C(e) {
      var t = e.id,
        n = e.participant,
        a = e.remoteJid;
      return r("isStringNullOrEmpty")(a) ||
        r("isStringNullOrEmpty")(t) ||
        r("isStringNullOrEmpty")(n)
        ? null
        : new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(a),
            fromMe: !0,
            id: t,
            participant: o("WAWebWidFactory").createWid(n),
          });
    }
    function b(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = C(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = C(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    l.encryptAndSendGroupMsg = p;
  },
  98,
);
