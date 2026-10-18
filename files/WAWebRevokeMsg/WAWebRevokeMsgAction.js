__d(
  "WAWebRevokeMsgAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonProcessRevoke",
    "WAWebApiChat",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebFtsClient",
    "WAWebMedia",
    "WAWebMessageSendPerfReporter",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRequestDeleteAddOns",
    "WAWebRevoke",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSendRevokeMessageWamEvent",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStateUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n, r) {
      var a,
        i,
        l,
        s = e.data,
        u = o("WAWebFrontendMsgGetters").getChat(s),
        c =
          (a = u == null || (i = u.id) == null ? void 0 : i.toString()) != null
            ? a
            : "",
        d = (u == null || (l = u.contact) == null ? void 0 : l.isHosted) === !0,
        m =
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() === !0,
        p =
          e.type === "message"
            ? g({
                clearMedia: n,
                record: {
                  type: "message",
                  data: o("WAWebStateUtils").unproxy(e.data),
                },
                type: t,
                viewMode: r,
              })
            : g({ clearMedia: n, record: e, type: t, viewMode: r });
      return p.then(function (e) {
        return (
          e.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexDeleteAlert(
              c,
              d,
            ) &&
            (o("WAWebCoexEditDeleteAlertUtils").markCoexDeleteAlertShown(c),
            o("WAWebOpenCoexEditDeleteAlertModal").openCoexDeleteAlertModal(m)),
          e
        );
      });
    }
    function f(e, t) {
      return S(o("WAWebStateUtils").unproxy(e), t);
    }
    async function g(t) {
      var n,
        a = t.clearMedia,
        i = t.isAssociatedBotPluginRevoke,
        l = i === void 0 ? !1 : i,
        c = t.record,
        d = t.type,
        m = t.viewMode,
        p = m === void 0 ? o("WAWebViewMode.flow").ViewModeType.VISIBLE : m,
        _ = c.data;
      if (
        d === o("WAWebCmd").Revoke.Sender &&
        !_.id.fromMe &&
        !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(_)
      )
        return Promise.reject(r("err")("revoking received message"));
      var g =
          _.id.remote.isGroup() && c.type === "addon"
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        h =
          _.id.remote.isGroup() &&
          ((n = o("WAWebFrontendMsgGetters").getChat(_).groupMetadata) == null
            ? void 0
            : n.isLidAddressingMode),
        y = void 0;
      _.id.remote.isGroup() &&
        (y = h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : g);
      var S = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: _.id.remote,
          fromMe: !0,
          participant: y,
        }),
        R = v(d),
        L = o("WATimeUtils").unixTime(),
        E = L - o("WAWebMsgGetters").getT(_),
        k = {
          id: S,
          from: h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : g,
          to: _.id.remote,
          author: y,
          t: L,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
          subtype: v(d),
          protocolMessageKey: _.id,
          clearMedia: !!a,
          local: !0,
          revokeDuration: E,
          revokeTimestamp: L,
          viewMode: p,
        };
      if (c.type === "addon")
        return o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var t = c.data;
              if (t.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted)
                throw r("err")(
                  "_sendRevoke: only decrypted comment can be revoked from the UI",
                );
              var n = babelHelpers.extends({}, k, {
                  kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
                  targetMessageKey: t.parentMsgKey,
                  revokeAddonType: t.type,
                }),
                a = await o("WAWebSendMsgRecordAction").sendAddonRecord(n),
                i = a.messageSendResult;
              return (
                i === o("WAWebSendMsgResultAction").SendMsgResult.OK
                  ? (new (o(
                      "WAWebSendRevokeMessageWamEvent",
                    ).SendRevokeMessageWamEvent)({
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(_),
                      messageMediaType:
                        o("WAWebWamMsgUtils").getWamMediaType(_),
                      revokeSendDelay: E,
                    }).commit(),
                    await o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                      babelHelpers.extends({}, n, {
                        t: o("WAWebMsgGetters").getT(_),
                        ack: o("WAWebAck").ACK.SENT,
                      }),
                      t,
                    ))
                  : o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to send revoke addon",
                          ])),
                      )
                      .tags("addons", "messaging")
                      .sendLogs("failedSendRevokeMsg: " + t.type),
                a
              );
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted();
      var I = babelHelpers.extends({}, k),
        T = C(_, d);
      if (
        (T.length > 0 && (I.botGroupParticipants = T),
        o("WAWebBotBaseGating").isBotEnabled())
      ) {
        var D = b(_);
        if (D != null) {
          var x;
          D =
            (x = o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).getDeprecatedPnChatForFbidInvoke(D)) != null
              ? x
              : D;
        }
        ((I.botRespOrInvocationRevokeBotWid = D),
          _.botTargetSenderJid instanceof r("WAWebWid") &&
            (I.botTargetSenderJid = _.botTargetSenderJid));
      }
      var $ = new (o("WAWebMsgModel").Msg)(I);
      return (
        ($.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: $.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType($),
          messageType: o("WAWebWamMsgUtils").getWamMessageType($),
        })),
        $.wamMessageSendPerfReporter.setIsRevokeMessage(!0),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              try {
                var e, t;
                ((e = $.wamMessageSendPerfReporter) == null ||
                  e.startSavedStage(),
                  await o("WAWebDBProcessMessage").storeMessages(
                    [I],
                    o("WAWebFrontendMsgGetters").getChat(_).id,
                  ),
                  (t = $.wamMessageSendPerfReporter) == null ||
                    t.postSavedStage());
              } catch (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "_sendRevoke: failed to storeMessages into storage",
                        ])),
                    )
                    .verbose()
                    .sendLogs("storeMessages failed"),
                  e
                );
              }
              var n = await o("WAWebSendMsgRecordAction").sendMsgRecord($),
                a = n.messageSendResult;
              if (l)
                throw (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "_sendRevoke path for associated with bot plugin msg",
                      ])),
                  ),
                  r("err")("Expected exit for associated with bot plugin msg")
                );
              return a === o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? (new (o(
                    "WAWebSendRevokeMessageWamEvent",
                  ).SendRevokeMessageWamEvent)({
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(_),
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(_),
                    revokeSendDelay: E,
                  }).commit(),
                  o("WAWebDBProcessRevokeMsgs")
                    .processRevokeMsgsAndGetCleanupEligibleKeys([
                      {
                        revokeMsgKey: _.id,
                        newMsgKey: S,
                        timestamp: o("WAWebMsgGetters").getT(_),
                        revokeTimestamp: L,
                        subtype: R,
                        sender: g,
                        viewMode: $.viewMode,
                      },
                    ])
                    .then(async function (e) {
                      return e.has(_.id.toString())
                        ? (o(
                            "WAWebUpdateLastAddOnPreviewChatAction",
                          ).deleteModelsForLastAddOnPreview([_.id.toString()]),
                          await o(
                            "WAWebRequestDeleteAddOns",
                          ).requestDeleteAddOns(
                            o("WAWebFrontendMsgGetters")
                              .getChat(_)
                              .id.toString(),
                            [_.id.toString()],
                          ),
                          f(c.data, {
                            msgKey: S,
                            subtype: R,
                            sender: g,
                            revokeTimestamp: L,
                            viewMode: $.viewMode,
                          }),
                          {
                            messageSendResult: o("WAWebSendMsgResultAction")
                              .SendMsgResult.OK,
                          })
                        : {
                            messageSendResult: o("WAWebSendMsgResultAction")
                              .SendMsgResult.ERROR_UNKNOWN,
                          };
                    }))
                : Promise.resolve({
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  });
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    function h(e, t) {
      g({
        clearMedia: !1,
        isAssociatedBotPluginRevoke: !0,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        type: t,
      }).catch(function (e) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[bot revoke] sendAssociatedBotPluginRevoke: ",
              "",
            ])),
          e instanceof Error ? e.message : String(e),
        );
      });
    }
    function y(e, t, n) {
      return g({
        clearMedia: n,
        isAssociatedBotPluginRevoke: !1,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        type: t,
      });
    }
    function C(e, t) {
      var n,
        r = o("WAWebMsgGetters").getSender(e),
        a = [].concat(
          (n = e.botGroupParticipants) != null ? n : [],
          t === o("WAWebCmd").Revoke.Admin && r != null ? [r] : [],
        ),
        i = new Map();
      return (
        a.forEach(function (e) {
          e.isUser() &&
            o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e) &&
            i.set(e.toString(), e);
        }),
        Array.from(i.values())
      );
    }
    function b(e) {
      var t,
        n = function (n) {
          return (
            n.isBot() &&
            !(
              e.id.remote.isGroup() &&
              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n)
            )
          );
        },
        r = o("WAWebMsgGetters").getSender(e);
      if (r != null && r.isBot()) return n(r) ? r : null;
      var a = (t = e.mentionedJidList) == null ? void 0 : t.find(n);
      return a != null && e.isForwarded !== !0 ? a : null;
    }
    function v(e) {
      switch (e) {
        case o("WAWebCmd").Revoke.Sender:
          return "sender_revoke";
        case o("WAWebCmd").Revoke.Admin:
          return "admin_revoke";
      }
    }
    function S(e, t) {
      var n,
        a,
        i,
        l = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      if (
        !o("WAWebRevoke").isWithinRevokeWindow({
          revokedMsgKey: e.id,
          revokedMsgTimestamp: e.t,
          revokeTimestamp: o("WATimeUtils").unixTime(),
        })
      ) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "revoke: outside of revoke window, ",
              " has not been revoked",
            ])),
          e.id.toString(),
        );
        return;
      }
      (o("WAWebMsgModelUtils").typeIsMms(e) && o("WAWebMedia").deregisterMsg(e),
        l == null || l.removeFromCollection(e),
        e.trigger("revoked"),
        o("WAWebMsgGetters").clearMsgGetterCacheFor(e),
        o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(e));
      var s = e.getCollection(),
        u = e.id,
        c = o("WAWebRevoke").getMsgKeyAfterRevoke({
          originalKey: u,
          revokeKey: t.msgKey,
        }),
        _ = e.getMsgChunk();
      (_ && _.replaceId(u, c),
        e.forEachThreadMsgChunk(function (e) {
          e.replaceId(u, c);
        }),
        s.replaceId(u, c));
      var g = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1,
        h = (a = l == null ? void 0 : l.isActiveUnreadMsg(e)) != null ? a : !1,
        y = e.associationType,
        C = o("WAWebViewModeUtils").getRevokedViewMode(
          e.viewMode,
          y,
          (i = t.viewMode) != null
            ? i
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        );
      if (y != null) {
        var b = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(y);
        b &&
          b.processorType ===
            o("WAWebAssociationProcessorConstants").AssociationProcessorType
              .WithDetachedMessages &&
          e.detachAssociatedMsg();
      }
      var v = {
        isOverwrittenByRevoke: !0,
        id: c,
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        revokeSender: t.sender,
        revokeTimestamp: t.revokeTimestamp,
        protocolMessageKey: u,
        body: void 0,
        caption: void 0,
        clientUrl: void 0,
        deprecatedMms3Url: void 0,
        loc: void 0,
        lat: void 0,
        lng: void 0,
        isLive: void 0,
        accuracy: void 0,
        speed: void 0,
        degrees: void 0,
        comment: void 0,
        sequence: void 0,
        shareDuration: void 0,
        finalLat: void 0,
        finalLng: void 0,
        finalAccuracy: void 0,
        finalThumbnail: void 0,
        finalSpeed: void 0,
        finalDegrees: void 0,
        finalTimeOffset: void 0,
        title: void 0,
        description: void 0,
        matchedText: void 0,
        thumbnail: void 0,
        richPreviewType: void 0,
        doNotPlayInline: void 0,
        paymentLinkMetadata: void 0,
        quotedMsg: void 0,
        quotedStanzaID: void 0,
        quotedRemoteJid: void 0,
        quotedParticipant: void 0,
        mediaData: void 0,
        mentionedJidList: void 0,
        groupMentions: void 0,
        vcardList: void 0,
        star: !1,
        kicState: void 0,
        kicTimestampMs: void 0,
        kicKey: void 0,
        errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
        isSendFailure: !1,
        viewMode: C,
        associationType: void 0,
        parentMsgKey: void 0,
      };
      if ((e.set(v), e.trigger("change:msgKey", { newKey: c, oldKey: u }), l)) {
        var S;
        (u.equals(l.lastReceivedKey) && (l.lastReceivedKey = c),
          (S = l.composeQuotedMsg) != null &&
            S.id.equals(u) &&
            (l.composeQuotedMsg = null),
          g &&
            ((l.unreadCount = Math.max(l.unreadCount - 1, 0)),
            (l.unreadDividerOffset += 1),
            o("WAWebApiChat")
              .reduceChatUnreadCount(l.id.toString())
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "revokeInternal: failed to reduce chat unread count",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("reduceChatUnreadCount failed");
              })),
          h && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0)));
      }
      if (r("WAWebWid").isBroadcast(u.remote)) {
        var R = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u),
          L = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(c);
        if (!R || !L || R.length !== L.length) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "cannot fanout revoke: ",
                " ",
                "",
              ])),
            String(R),
            String(L),
          );
          return;
        }
        (R.forEach(function (e, n) {
          var r = s.get(e);
          r && f(r, { msgKey: L[n], subtype: t.subtype, sender: t.sender });
        }),
          o("WAWebFtsClient")
            .ftsClient.purge([String(e.rowId)])
            .catch(r("WAWebNoop")));
        var E = l ? l.id.toString() : e.id.remote.toString();
        (o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview([u.toString()]),
          o("WAWebRequestDeleteAddOns").requestDeleteAddOnsFireAndForget(
            E.toString(),
            [u.toString()],
          ));
      }
    }
    ((l.sendRevoke = _),
      (l.revoke = f),
      (l.sendAssociatedBotPluginRevoke = h),
      (l.sendAssociatedChildMsgRevoke = y));
  },
  98,
);
