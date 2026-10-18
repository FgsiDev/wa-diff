__d(
  "WAWebSendMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizShowOrderEphemeralSystemAction",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotLoggingUtils",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBRevokeInviteV4",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return h(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function f(e, t) {
      return b(o("WAWebStateUtils").unproxy(e), t);
    }
    async function g(e, t) {
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e,
          "voipCallLog",
        ),
        r = n.chat,
        a = o("WAWebMsgCollection").MsgCollection.add(
          babelHelpers.extends({}, t),
        )[0];
      if (a) {
        var i = async function (n) {
          return (
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: r.id,
              newMsg: t,
              handleSingleMsgOrigin: "voipNotification",
            }),
            { msg: n }
          );
        };
        return C(r, i(a));
      }
      return Promise.resolve(null);
    }
    function h(t, n, a) {
      (a === void 0 && (a = void 0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "_addAndSendMsgToChat start chatId: ",
              "",
            ])),
          t.id.toLogString(),
        ));
      var i,
        l = Promise.resolve(n).then(async function (e) {
          var n, a, l, _, f, g;
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "_addAndSendMsgToChat consistent msg id? ",
                ". ",
                ", ",
                "",
              ])),
            t.id.equals(e.id.remote),
            t.id.toLogString(),
            (n = e.id.remote) == null ? void 0 : n.toLogString(),
          ),
            await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              t,
              e,
              "addAndSendMsgToChat",
            ));
          var h = o(
              "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
            ).getPrivacyModeFromModel(t.id),
            C = await o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(e),
            b = C[0],
            v = C[1];
          o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, e, { threadIds: b }),
          );
          var S =
              (a = e.botModeSelection) != null
                ? a
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    e,
                  ),
            R =
              (l =
                (_ = e.botModeOverride) != null
                  ? _
                  : o(
                      "WAWebMaybeGetBotModeSelection",
                    ).maybeGetBotDynamicModeSelection(t, e)) != null
                ? l
                : void 0,
            L = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
            E = babelHelpers.extends({}, e, {
              messageSecret: (await y(t, e))
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : e.messageSecret,
              agentId: o("WAWebBizAgentAction").getAgentId(e),
              threadIds:
                (f = o(
                  "WAWebMaybeGetAppendedViewRepliesThreadId",
                ).maybeGetAppendedViewRepliesThreadId(
                  babelHelpers.extends({}, e, { threadIds: b }),
                )) != null
                  ? f
                  : b,
              aiThreadInfo: v,
              botModeSelection: S,
              botModeOverride: R,
              botMetricsMetadata: L,
            });
          h && (E.privacyModeWhenSent = h);
          var k = await o(
              "WAWebSendMsgChatActionUtils",
            ).maybeDisableEphemeralityForMsg(t, E),
            I = k.msgData,
            T = k.systemMsgs,
            D = new (o("WAWebMsgModel").Msg)(I),
            x = o("WAWebMsgCollection").MsgCollection.add(D)[0];
          if (x) {
            var $, P;
            i = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(x, t.id);
            var N = !!(($ = t.groupMetadata) != null && $.isLidAddressingMode),
              M = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                t.id,
                o("WAWebWamMsgUtils").msgIsLid(x, t.id, N),
              );
            if (
              ((x.wamMessageSendReporter = new (o(
                "WAWebMessageSendReporter",
              ).MessageSendReporter)(
                x,
                babelHelpers.extends({}, M, {
                  frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                    .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                }),
              )),
              (x.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: x.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(x),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(x),
              })),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat before system messages ",
                    "",
                  ])),
                t.id.toLogString(),
              ),
              (g = await r("WAWebEmptyChatSystemMsg")(x, t)),
              !g)
            ) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat before ephemeral system messages",
                  ])),
              );
              var w = o(
                "WAWebBizShowOrderEphemeralSystemAction",
              ).getMaybeSystemMsgForOrderEphemeralExemption(x, t);
              w && (g = [w]);
            }
            T && (g = [].concat(g != null ? g : [], T));
            var A = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              t,
              "opus-send-msg-fail",
            );
            (A && (g = [A].concat(g != null ? g : [])),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat after system messages",
                  ])),
              ));
            var F = g ? [].concat(g, [I]) : [I];
            return (
              (P = x.wamMessageSendPerfReporter) == null || P.startSavedStage(),
              o("WAWebDBProcessMessage")
                .storeMessages(F, t.id)
                .then(function () {
                  var e;
                  if (
                    ((e = x.wamMessageSendPerfReporter) == null ||
                      e.postSavedStage(),
                    o("WAWebThreadMsgUtils").isThreadMsg(I) &&
                      o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([I]),
                    x.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                  ) {
                    var t = parseInt(x.inviteCodeExp, 10),
                      n = x.from.isLid()
                        ? o("WAWebLidMigrationUtils").toLid(x.to)
                        : x.to;
                    if (!n) {
                      var r = o(
                        "WAWebLid1X1MigrationGating",
                      ).Lid1X1MigrationUtils.isLidMigrated();
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-invites] isLidMigrated: ",
                            "",
                          ])),
                        r,
                      );
                      var a =
                        "[group-invites] failed to get lid mapping when revoking existing duplicate group invite";
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "",
                            ])),
                          a,
                        )
                        .sendLogs(a);
                      return;
                    }
                    return o("WAWebDBRevokeInviteV4")
                      .revokeGroupInviteV4({
                        expiration: t,
                        from: x.from.toString(),
                        groupId: x.inviteGrp,
                        to: n.toString(),
                      })
                      .then(function () {
                        return o(
                          "WAWebApiGroupInviteV4Store",
                        ).persistGroupInviteV4Msg(x.id.toString(), {
                          id: x.id.toString(),
                          from: x.from.toString(),
                          to: n.toString(),
                          groupId: x.inviteGrp,
                          expiration: t,
                          expired: o("WATimeUtils").unixTime() >= t,
                        });
                      });
                  }
                })
                .then(function () {
                  return x.waitForPrep().then(function () {
                    return g ? { msg: x, systemMsgs: g } : { msg: x };
                  });
                })
            );
          }
          throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", E);
        }),
        _ = C(
          t,
          l.then(function (e) {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.SendMessage,
              ),
              e
            );
          }),
        ),
        f = a
          ? _.then(a).then(function () {
              return _;
            })
          : _,
        g = b(t, f).then(function (e) {
          return (
            e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (i == null || i()),
            e
          );
        });
      return [_, g];
    }
    async function y(e, t) {
      return t.messageSecret != null
        ? !1
        : o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(t.type, t.subtype)
          ? !0
          : o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(e.id);
    }
    function C(e, t) {
      return e.addQueue
        .enqueue(t)
        .then(async function (t) {
          var n,
            r = t.msg,
            a = t.systemMsgs;
          if (
            ((n = r.wamMessageSendPerfReporter) == null ||
              n.startRenderedStage(),
            a)
          ) {
            var i = a.map(function (e) {
              return new (o("WAWebMsgModel").Msg)(e);
            });
            e.msgs.add(i);
          }
          var l = e.msgs.add(r)[0];
          return (
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              l,
            ]),
            l
          );
        })
        .then(function (t) {
          var n;
          return (
            (e.createdLocally = !1),
            (n = t.wamMessageSendPerfReporter) == null || n.postRenderedStage(),
            t
          );
        });
    }
    function b(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            var n = await e.sendQueue.enqueue(t);
            return o("WAWebSendMsgRecordAction").sendMsgRecord(n);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.addAndSendMsgToChat = _),
      (l.resendMsgToChat = f),
      (l.addVoipCallLogMsgToChat = g));
  },
  98,
);
