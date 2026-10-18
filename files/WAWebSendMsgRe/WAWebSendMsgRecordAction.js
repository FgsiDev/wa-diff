__d(
  "WAWebSendMsgRecordAction",
  [
    "WAErrors",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonSendProcess",
    "WAWebAfterReadUtils",
    "WAWebBackendErrors",
    "WAWebBlocklistCollection",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactBlockedErrorAction",
    "WAWebContactCollection",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebExternalCtxConfig",
    "WAWebExternalEntryPointPrefs",
    "WAWebFindChatAction",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebGroupMetadataCollection",
    "WAWebHandleMsgError",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMetaAiOpenGroupNux",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNoop",
    "WAWebOutgoingMessageTone",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsBEUtils",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgJob",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebSendNotSpamAction",
    "WAWebSilentPaymentMsg",
    "WAWebSilentProtocolMsg",
    "WAWebSingleEmojiDailyUtils",
    "WAWebThreadMsgUtils",
    "WAWebUpdateUnreadChatAction",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "WAWebUtmBizUtils",
    "WAWebVoipInCallMessageSendLogger",
    "WAWebWamEnumMessageCappingActionType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWebcMessageSendWamEvent",
    "WAWebWid",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    async function h(t) {
      var n;
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendMsgRecord"])),
      );
      var r = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
        t,
        o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      );
      r.sendReporter =
        (n = r.sendReporter) != null ? n : r.createSendReporter();
      var a = t.id.remote,
        i = await o("WAWebFindChatAction").findExistingChat(a, "sendMsgRecord");
      if (i.contact.isEnterprise && !o("WAWebMsgGetters").getIsGroupMsg(t)) {
        var l = o("WAWebUpdateUtmAction").getUtmForChat(a);
        l != null && o("WAWebUtmBizUtils").isUtmValid(i, l) && (t.utm = l);
      }
      return ((t.isNewMsg = !0), k({ type: "message", data: t }, i, r));
    }
    async function y(e) {
      var t = o("WAWebSendMsgMetricReporter").createAddonMetricReporter(
          e,
          o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        ),
        n = await o("WAWebFindChatAction").findExistingChat(
          e.id.remote,
          "sendMsgRecord",
        );
      return k({ type: "addon", data: e }, n, t);
    }
    var C = new Set([
        (g = o("WAWebMsgType")).MSG_TYPE.POLL_UPDATE,
        g.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        g.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        g.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        g.MSG_TYPE.EVENT_RESPONSE,
      ]),
      b = new Set([g.MSG_TYPE.POLL_UPDATE, g.MSG_TYPE.EVENT_RESPONSE]);
    function v(e, t) {
      return r("WAWebWid").isGroup(t)
        ? e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? L(e.data)
          : E(e.data)
        : !1;
    }
    function S(e) {
      return e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
        ? e.data.subtype !==
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit
        : R(e.data);
    }
    function R(e) {
      return e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
        ? e.selectedOptionLocalIds.length > 0
        : b.has(e.type);
    }
    function L(e) {
      return e.forwardedFromWeb === !0
        ? !1
        : e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageEdit ||
            (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT);
    }
    function E(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.REACTION
        ? e.reactionText !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
        : e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted
          ? e.selectedOptionLocalIds.length > 0
          : e.kind === o("WAWebMsgType").MsgKind.PinInChat
            ? e.pinMessageType ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            : C.has(e.type);
    }
    async function k(e, t, n) {
      var a = e.data,
        i = r("nullthrows")(a.to),
        l = a.id,
        f = l.remote;
      (r("WAWebWid").isGroup(f) &&
        (await r("WAWebGroupMetadataCollection").find(f)),
        t.isTrusted() || r("WAWebSendNotSpamAction")(t).catch(r("WAWebNoop")));
      var g =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          ["sender_revoke", "admin_revoke"].includes(a.subtype),
        h = I(a),
        y =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          a.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSetting,
        C =
          o("WAWebMsgGetters").getIsReaction(a) &&
          a.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
      if (
        !o("WAWebMsgGetters").getIsGroupMsg(a) &&
        !g &&
        !C &&
        o("WAWebBlocklistCollection").BlocklistCollection.get(i)
      )
        return Promise.reject(
          new (r("WAWebContactBlockedErrorAction"))(
            "Contact is blocked",
            o("WAWebContactCollection").ContactCollection.assertGet(i),
          ),
        );
      if (
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(t) &&
        a.subtype !== "sender_revoke"
      ) {
        var b;
        if (
          (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "model:msg:createRecord blocked send in ACP2-restricted chat: ",
                "",
              ])),
            a.id.toString(),
          ),
          (b = n.sendReporter) == null ||
            b.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_SEND_PRECONDITION_FAILED,
              isTerminal: !0,
              qplFailReason: "acp2_send_blocked",
            }),
          (n.sendReporter = null),
          e.type === "message")
        ) {
          var R = {
            isSendFailure: !0,
            ack: o("WAWebAck").ACK.FAILED,
            errorCode: o("WAWebErrorType").SendFailureErrorCode.Acp2Restricted,
          };
          (o("WAWebDBUpdateMessageTable").updateMessageTable(l, R),
            e.data.set(R),
            o(
              "WAWebAddOnsUpdateSendStatesAction",
            ).updateAddOnSendStatesForMsgAction(e.data, R));
        } else await o("WAWebAddonSendProcess").markAddonSendFailed(e.data);
        return {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
        };
      }
      var L;
      (g ||
        (L = new (o("WAWebWebcMessageSendWamEvent").WebcMessageSendWamEvent)({
          messageType: o("WAWebWamMsgUtils").getWamMessageType(a),
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(a),
          messageIsForward: !!a.isForwarded,
        })),
        h ||
          o("WAWebUpdateUnreadChatAction").sendSeen({
            chat: t,
            threadId: o("WAWebBotGating").isAiChatThreadsEnabled()
              ? o("WAWebThreadMsgUtils").getMsgAiThread(a)
              : void 0,
          }),
        v(e, f) &&
          (S(e)
            ? o("WAWebMetaAiOpenGroupNux").maybeShowGroupAgentNuxes(t)
            : o(
                "WAWebGroupAgentNonInitiatorNux",
              ).maybeShowGroupAgentNonInitiatorNux(t)));
      var E;
      if (
        r("WAWebWid").isGroup(f) &&
        a.messageSecret == null &&
        o("WAWebSendMsgChatActionUtils").hasGroupAgentParticipant(t)
      ) {
        var k = self.crypto.getRandomValues(new Uint8Array(32));
        e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ? (e.data.set({ messageSecret: k }),
            await o("WAWebDBProcessMessage").updateExistingMessages(
              [o("WAWebMsgDataFromModel").msgDataFromMsgModel(e.data)],
              f,
            ))
          : (E = babelHelpers.extends({}, e.data, { messageSecret: k }));
      }
      return (
        e.type !== "addon" &&
          a.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT &&
          !h &&
          !g &&
          o("WAWebMsgCollection").MsgCollection.trigger("new_msg_sent"),
        Promise.resolve()
          .then(function () {
            return e.type === "message"
              ? T(e.data, n)
              : o("WAWebAddonSendProcess").sendAddonProcess(
                  E != null ? E : e.data,
                  n,
                );
          })
          .then(async function (n) {
            var r =
              l.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(f)
                ? o("WAWebAck").ACK.READ
                : o("WAWebAck").ACK.SENT;
            return (
              e.type === "message" &&
                (e.data.updateAck(r),
                o(
                  "WAWebAddOnsUpdateSendStatesAction",
                ).maybeUpdateAddOnAckForMsgAction(e.data, r)),
              o(
                "WAWebBotGenTypingIndicatorMsg",
              ).maybeGenBotTypingIndicatorMessage(t, a),
              L && (L.markMessageSendT(), L.commit()),
              g ||
                o(
                  "WAWebSingleEmojiDailyUtils",
                ).maybeIncrementSingleEmojiDailyStatsCount(a),
              a.utm != null &&
                o("WAWebUpdateUtmAction").clearUtmAfterMessageSent(f),
              h ||
                o(
                  "WAWebVoipInCallMessageSendLogger",
                ).logInCallMessageSendIfNeeded(t),
              await o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
                a,
              ),
              [
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                o("WAWebMsgType").MSG_TYPE.REACTION,
                o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
              ].includes(a.type) || (t.lastReceivedKey = l),
              !g &&
                !h &&
                o("WAWebOutgoingMessageTone").playOutgoingMessageTone(),
              o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
                o("WAWebExternalEntryPointPrefs").deleteExternalEntryPoint(f),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                t: n.t,
                count: n.count,
              }
            );
          })
          .then(function (t) {
            if (
              t.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              e.type === "message"
            ) {
              var n = e.data.afterReadDuration;
              if (
                n != null &&
                n > 0 &&
                o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                !y
              ) {
                var r = o("WATimeUtils").unixTime() + n;
                (o("WAWebDBUpdateMessageTable").updateMessageTable(l, {
                  expiredTimestamp: r,
                }),
                  e.data.set({ expiredTimestamp: r }));
              }
            }
            return t;
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                var t;
                return (
                  e.status !== 408 &&
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Phone responded ",
                            "",
                          ])),
                        e.status,
                      )
                      .sendLogs("send-not-200"),
                  (t = n.sendReporter) == null ||
                    t.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                      isTerminal: !1,
                      qplFailReason: "server_status_code_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_NETWORK,
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAErrors").BufferTooLargeError,
              function () {
                var e;
                return (
                  (e = n.sendReporter) == null ||
                    e.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG,
                      isTerminal: !0,
                      qplFailReason: "buffer_too_large",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebHandleMsgError").MessageValidationError,
              function () {
                var e;
                return (
                  (e = n.sendReporter) == null ||
                    e.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF,
                      isTerminal: !0,
                      qplFailReason: "message_validation_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebHandleMsgError").MessageSentAckError,
              function (e) {
                var t;
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "model:msg:createRecord dropped msg: ",
                        "",
                      ])),
                    a.id.toString(),
                  ),
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("send-msg-server-nack-error"),
                  (t = n.sendReporter) == null ||
                    t.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                      isTerminal: !0,
                      qplFailReason: "message_sent_ack_error",
                    }),
                  (n.sendReporter = null),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                    ackErrorCode: e.ackErrorCode,
                  }
                );
              },
            ),
          )
          .catch(function (t) {
            var i,
              l = r("getErrorSafe")(t);
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "model:msg:createRecord dropped msg: ",
                    "",
                  ])),
                a.id.toString(),
              ),
              e.type === "message"
                ? o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(l)
                    .tags("messaging")
                    .sendLogs("send-msg-error")
                : o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Got error",
                        ])),
                    )
                    .catching(l)
                    .tags("messaging", "addons")
                    .sendLogs("send-addon-error: " + a.type),
              (i = n.sendReporter) == null ||
                i.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !0,
                  qplFailReason: "unknown_error",
                }),
              (n.sendReporter = null),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          })
      );
    }
    function I(e) {
      return (
        o("WAWebSilentProtocolMsg").isSilentProtocolMsg(e) ||
        o("WAWebSilentPaymentMsg").isSilentPaymentMsg(e)
      );
    }
    async function T(e, t) {
      var n;
      e.isForwarded &&
        (n = o("WAWebMsgUtilsBridge").createMessageForwardMetric(e));
      try {
        var r = await o("WAWebSendMsgJob").encryptAndSendMsg(
          {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
            data: e,
          },
          t,
        );
        if (
          (n && n.then(o("WAWebMsgUtilsBridge").logMessageMetric),
          r.error != null)
        )
          throw new (o("WAWebHandleMsgError").MessageSentAckError)(r.error);
        return { t: parseInt(r.t, 10), count: r.count };
      } catch (t) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "sendMsgRecord: send failure, msg: ",
                "",
              ])),
            e.id.toString(),
          )
          .tags("messaging");
        var a = { isSendFailure: !0 };
        throw (
          t instanceof o("WAWebHandleMsgError").MessageSentAckError &&
            ((a = babelHelpers.extends({}, a, {
              ack: o("WAWebAck").ACK.FAILED,
            })),
            t.ackErrorCode ===
              o("WAWebHandleMsgError").MessageSentAckErrorCode
                .NewChatMessagesCapped &&
              ((a = babelHelpers.extends({}, a, {
                errorCode:
                  o("WAWebErrorType").SendFailureErrorCode
                    .UserReachedMaxMonthlyLimitForNewMessages,
              })),
              o(
                "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
              ).isIndividualNewChatMessageCappingEnabled() &&
                (await o(
                  "WAWebIndividualNewChatMessageCappingLimitUtils",
                ).resetCappingStatus(
                  o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
                    .CAPPED,
                ),
                o("WAWebCmd").Cmd.newChatMessageCappingStateChange(),
                new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
                  messageCappingActionType: o(
                    "WAWebWamEnumMessageCappingActionType",
                  ).MESSAGE_CAPPING_ACTION_TYPE.API,
                  userActionTarget: "nack_received",
                  extraAttributes: JSON.stringify(
                    o(
                      "WAWebIndividualNewChatMessageCappingLimitUtils",
                    ).getCappingData() || {},
                  ),
                }).commit()))),
          o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, a),
          e.set(a),
          o(
            "WAWebAddOnsUpdateSendStatesAction",
          ).updateAddOnSendStatesForMsgAction(e, a),
          t
        );
      }
    }
    ((l.sendMsgRecord = h), (l.sendAddonRecord = y));
  },
  98,
);
