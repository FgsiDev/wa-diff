__d(
  "WAWebSendTextMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizBotTosUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotLoggingUtils",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebChatGetters",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataGetters",
    "WAWebHatchCommandMetadataUtils",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNonJidMentionType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPresenceChatAction",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebProductCatalogLogEvents",
    "WAWebQuestionsGatingUtils",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["initiatedBy"],
      s,
      u,
      c;
    function d(e, t) {
      return o(
        "WAWebRichTextFormatMessageSendLogger",
      ).maybeCreateRichTextFormatMessageSendCommit(e, t);
    }
    async function m(e, t, n) {
      n === void 0 && (n = {});
      var r = o("WAWebStateUtils").unproxy(e),
        a = await p(r, t, n);
      if (a) {
        await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
        var i = await o(
            "WAWebSendMsgChatActionUtils",
          ).maybeDisableEphemeralityForMsg(r, a),
          l = i.msgData,
          s = i.systemMsgs;
        return _(r, l, s, {
          skipRichTextFormatLogging: n.skipRichTextFormatLogging,
        });
      }
    }
    async function p(t, n, a) {
      var i, l, c, d, m, p;
      a === void 0 && (a = {});
      var _ = (n || "").trim();
      if (_ === "") return null;
      var g = a,
        h = g.aiMediaCollectionInfo,
        y = g.aiThreadInfo,
        C = g.ctwaContext,
        b = g.encryptedCommentFields,
        v = g.groupMentions,
        S = g.isQuestion,
        R = g.isWamoSub,
        L = g.linkPreview,
        E = g.mentionedJidList,
        k = g.paymentLinkMetadata,
        I = g.questionReplyQuotedMessage,
        T = g.quotedMsg,
        D = g.quotedMsgAdminGroupJid,
        x = g.quotedMsgAdminGroupSubject,
        $ = g.quotedMsgAdminParentGroupJid,
        P = g.selectedCarouselCardIndex,
        N = g.selectedId,
        M = g.selectedIndex,
        w = g.threadIds;
      o("WAWebPresenceChatAction").clearPresence(t);
      var A;
      if (T) A = T.msgContextInfo(t.id);
      else if (D != null && x != null && $ != null)
        A = {
          quotedRemoteJid: D,
          quotedGroupSubject: x,
          quotedParentGroupJid: $,
        };
      else if (D != null) A = { quotedRemoteJid: D };
      else if (S === !0)
        if (
          o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
            o("WAWebMsgType").MSG_TYPE.CHAT,
          )
        )
          A = { isQuestion: !0 };
        else
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[questions] Unsupported question message type: ",
                    "",
                  ])),
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
              .tags("questions")
              .sendLogs(
                "questions-unsupported-message-type-" +
                  o("WAWebMsgType").MSG_TYPE.CHAT,
              ),
            null
          );
      else if (I)
        if (
          o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(
            o("WAWebMsgType").MSG_TYPE.CHAT,
          )
        )
          A = { questionReplyQuotedMessage: I };
        else
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[questions] Unsupported question reply message type: ",
                    "",
                  ])),
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
              .tags("questions")
              .sendLogs(
                "questions-unsupported-reply-message-type-" +
                  o("WAWebMsgType").MSG_TYPE.CHAT,
              ),
            null
          );
      var F;
      if (t.limitSharing != null) {
        var O = t.limitSharing,
          B = O.initiatedBy,
          W = babelHelpers.objectWithoutPropertiesLoose(O, e);
        ((F = babelHelpers.extends({}, W, {
          initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(B),
        })),
          r("WAWebWid").isGroup(t.id) &&
            typeof F.trigger == "string" &&
            (F.trigger = o(
              "WAWebLimitSharingPropMappingUtils",
            ).getLimitSharingTriggerFromGroupSettingsChange(F.trigger)));
      }
      var q = babelHelpers.extends({}, L),
        U = babelHelpers.extends(
          {},
          q,
          A,
          {
            mentionedJidList: E,
            groupMentions: v,
            ctwaContext: C,
            body: _,
            isSpoiler:
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(_) &&
              o("WAWebABProps").getABPropConfigValue(
                "is_spoiler_rich_format_sender_enabled",
              ),
            subtype: r("isEmptyObject")(q) ? null : "url",
            urlText: t.urlText,
            urlNumber: t.urlNumber,
            botMsgBodyType: a.botMsgBodyType,
          },
          await o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
          {
            paymentLinkMetadata: k,
            limitSharing: F,
            threadIds: w,
            aiThreadInfo: y,
            aiMediaCollectionInfo: h,
          },
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
        ),
        V = await o(
          "WAWebMaybeGetAppendedAiThreadAttributes",
        ).maybeGetAppendedAiThreadAttributes(U),
        H = V[0],
        G = V[1];
      (o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
        t,
        babelHelpers.extends({}, U, { threadIds: H }),
      ),
        (U.threadIds = H),
        (U.aiThreadInfo = G),
        (U.threadIds =
          (i = o(
            "WAWebMaybeGetAppendedViewRepliesThreadId",
          ).maybeGetAppendedViewRepliesThreadId(U)) != null
            ? i
            : U.threadIds),
        (U.botModeSelection =
          (l = U.botModeSelection) != null
            ? l
            : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                t,
                U,
              )),
        (U.botModeOverride =
          (c = U.botModeOverride) != null
            ? c
            : o(
                "WAWebMaybeGetBotModeSelection",
              ).maybeGetBotDynamicModeSelection(t, U)),
        t.urlText && (t.urlText = void 0),
        t.urlNumber && (t.urlNumber = void 0),
        M != null &&
          ((U.type = "template_button_reply"),
          (U.selectedId = N),
          (U.selectedIndex = M),
          (U.selectedCarouselCardIndex = P)));
      var z = o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(
        t.id,
      );
      if (
        (z != null && (U.privacyModeWhenSent = z),
        (U.agentId = o("WAWebBizAgentAction").getAgentId(U)),
        o("WAWebBotBaseGating").isBotEnabled() &&
          (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
            ((d = t.groupMetadata) == null ? void 0 : d.isOpenBotGroup) !== !0))
      ) {
        var j = f(t, E);
        if (j != null) {
          U.invokedBotWid = j;
          var K = T == null ? void 0 : T.botTargetSenderJid;
          K != null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(K) &&
            (U.botTargetSenderJid = T == null ? void 0 : T.botTargetSenderJid);
        }
      }
      var Q = t.isCAGAdmin(),
        X = U.subtype === "url",
        Y = !!(
          o("WAWebBotBaseGating").isBotEnabled() &&
          (m = U.invokedBotWid) != null &&
          m.isBot()
        ),
        J = !!(
          U.to.isBot() &&
          (o("WAWebBotBaseGating").isBotEnabled() || U.to.isSupportAgentBot())
        ),
        Z =
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(U.type, U.subtype),
        ee =
          U.messageSecret == null &&
          (await o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(
            U.to,
          ));
      ((Q || X || Y || J || Z || ee) &&
        (U.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        (Y ||
          (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) ===
              !0)) &&
          (U.botMessageSecret = await o(
            "WAWebBotMessageSecret",
          ).genBotMsgSecretFromMsgSecret(U.messageSecret)));
      var te = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(
        t.groupMetadata,
      );
      if ((te != null && (U.botGroupParticipant = te), Y || J)) {
        var ne;
        if ((Y ? (ne = U.invokedBotWid) : J && (ne = U.to), ne != null)) {
          var re,
            oe =
              (re = o("WAWebBotProfileCollection").BotProfileCollection.get(
                ne,
              )) == null
                ? void 0
                : re.personaId;
          oe != null && (U.botPersonaId = oe);
        }
      }
      var ae = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(U);
      U.botMetricsMetadata = ae;
      var ie = o("WAWebHatchCommandMetadataUtils").resolveHatchCommandMetadata(
        _,
        t.id,
      );
      (ie != null && (U.botCommandMetadata = ie),
        T &&
          T.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(
            T,
            T.sessionId,
          ),
        b &&
          ((U.type = o("WAWebMsgType").MSG_TYPE.COMMENT),
          (U.encIv = b == null ? void 0 : b.encIv),
          (U.encPayload = b == null ? void 0 : b.encPayload),
          (U.targetMessageKey = b == null ? void 0 : b.targetMessageKey)),
        R === !0 &&
          o("WAWebChatGetters").getIsNewsletter(t) &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isWamoSubCreatorExperienceSupported() &&
          (U.isWamoSub = !0));
      var le = 0;
      return (
        a.maybeNonJidMentioned === !0 &&
          /@all\b/g.test(_) &&
          (le |= r("WAWebNonJidMentionType").MENTION_ALL),
        le > 0 && (U.nonJidMentions = le),
        U
      );
    }
    async function _(e, t, n, a) {
      var i, l, s, u;
      (a === void 0 && (a = {}),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "addAndSendTextMsg chat: ",
              "",
            ])),
          e.id.toLogString(),
        ),
        await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
          e,
          t,
          "addAndSendTextMsg",
        ));
      var d = new (o("WAWebMsgModel").Msg)(t),
        m =
          a.skipRichTextFormatLogging === !0
            ? null
            : o(
                "WAWebRichTextFormatMessageSendLogger",
              ).maybeCreateRichTextFormatMessageSendCommit(d, e.id),
        p = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
          e,
          "opus-send-text-fail",
        ),
        _ = []
          .concat(
            p ? [p] : [],
            (i = await r("WAWebEmptyChatSystemMsg")(d, e)) != null ? i : [],
            n != null ? n : [],
          )
          .filter(Boolean),
        f = !!((l = e.groupMetadata) != null && l.isLidAddressingMode),
        g = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
          e.id,
          o("WAWebWamMsgUtils").msgIsLid(t, e.id, f),
        );
      ((d.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(
        d,
        babelHelpers.extends({}, g, {
          frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        }),
      )),
        (d.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: d.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(d),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(d),
        })),
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.SendMessage,
        ),
        (s = d.wamMessageSendPerfReporter) == null || s.startRenderedStage(),
        _.length > 0 && e.msgs.add(_),
        e.msgs.add(d),
        o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [d]),
        (u = d.wamMessageSendPerfReporter) == null || u.postRenderedStage(),
        (e.createdLocally = !1));
      var h = _.length > 0 ? [].concat(_, [t]) : [t],
        y = await o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var n, r;
              ((n = d.wamMessageSendPerfReporter) == null ||
                n.startSavedStage(),
                await o("WAWebDBProcessMessage").storeMessages(h, e.id),
                (r = d.wamMessageSendPerfReporter) == null ||
                  r.postSavedStage(),
                o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                  (await o(
                    "WAWebDBThreadMetadataBulkHelper",
                  ).persistNewMessagesThreadMetadataInBulk([t])));
              var a = await o("WAWebSendMsgRecordAction").sendMsgRecord(d);
              return a;
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted();
      return (
        (y == null ? void 0 : y.messageSendResult) ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          (m == null || m()),
        y
      );
    }
    function f(e, t) {
      return t == null
        ? void 0
        : t.find(function (t) {
            return t.isBot() && g(e, t);
          });
    }
    function g(e, t) {
      if (!e.id.isGroup()) return !0;
      var n = e.groupMetadata;
      return o("WAWebBotGroupGatingUtils").isGroupBotInvokeAllowed(
        t,
        n == null ||
          n.announce === !0 ||
          o("WAWebGroupMetadataGetters").getIsCag(n),
      );
    }
    ((l.maybeCreateTextMsgRichTextFormatSendCommit = d),
      (l.sendTextMsgToChat = m),
      (l.createTextMsgData = p),
      (l.addAndSendTextMsg = _),
      (l.getInvokedBotWid = f));
  },
  98,
);
