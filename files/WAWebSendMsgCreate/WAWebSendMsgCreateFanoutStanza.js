__d(
  "WAWebSendMsgCreateFanoutStanza",
  [
    "WABase64",
    "WACryptoHmac",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebCoexV2RelayEligibility",
    "WAWebCoexV2SendContribution",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebContactCollection",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebHandleMsgCommon",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPQGatingUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgBotStanza",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCtwaAttributionNode",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebThreadMsgUtils",
    "WAWebTrustedContactsUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t, n) {
      return {
        ciphertext: t,
        isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
        participant: e,
        type: n,
      };
    }
    async function h(e, t) {
      var n = t.sessionScope;
      if (
        (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT) ||
        t.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT ||
        e.isHosted() ||
        e.isBot() ||
        e.isFbidBot() ||
        !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      )
        return n;
      var r = await o("WAWebSignalSessionApi").hasSignalSessions(
          [e],
          o("WAWebSessionScope").SessionScope.PQ,
        ),
        a = r[0];
      return a ? o("WAWebSessionScope").SessionScope.PQ : n;
    }
    async function y(t, n, a, i, l, u, c, d, m, p, _, f) {
      var y,
        v =
          (m == null ? void 0 : m.kind) === "schedule"
            ? m.originalMediaType
            : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i),
        S = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i),
        R =
          o("WAWebBotBaseGating").isBotEnabled() &&
          ((y = t.invokedBotWid) == null ? void 0 : y.isBot()) === !0,
        L =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebMsgGetters").getIsBotFeedbackMessage(t),
        E =
          o("WAWebBotBaseGating").isBotEnabled() &&
          o("WAWebSendMsgBotStanza").getIsBizBotFeedback(t, n),
        k = (L && n.isBot()) || E,
        I = L && !n.isBot() && !E,
        T = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t),
        D = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(n),
        x = await o("WAWebCoexV2RelayEligibility").getCoexV2AgentSendPlan(n, i),
        $ =
          x != null
            ? x
            : o("WAWebCoexV2RelayEligibility").getCoexV2InvokedAgentSendPlan({
                hasFbidBotDevice: a.some(function (e) {
                  return e.isFbidBot();
                }),
                isBotInvokeMessage: R,
                isResendingMsg: l.isResendingMsg === !0,
                isRevokeForMsgFromOrDeliveredToBot: T,
                relayPlan: _,
              }),
        P = $ != null;
      if (
        l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        a.length === 1 &&
        o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) &&
        !I &&
        !o("WAWebBotUtils").isMetaAiBot(n) &&
        !P
      ) {
        var N = a[0],
          M = o("WAWebUserPrefsMeUser").isMeAccount(N)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, n)
            : i,
          w = M;
        (N.isBot() &&
          k &&
          (w = await o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: M,
            mentionedJidList: t.mentionedJidList,
          })),
          o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
            n,
            N,
            t.subtype,
          ) &&
            (w = await o(
              "WAWebWasaHatchOutboundWrapper",
            ).wrapHatchOutboundMessage({
              currentStanzaId: t.id.id,
              innerMessage: w,
            })));
        var A = o(
            "WAWebCoexV2RelayEligibility",
          ).shouldUseCoexV2StatelessSession(d, N),
          F = await h(N, l),
          O = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
            N,
            0,
            w,
            t,
            c,
            F,
            A,
          ),
          B = O.ciphertext,
          W = O.type,
          q = null;
        (k || D != null) &&
          (q = o("WAWap").wap("bot", {
            type: k ? "feedback" : o("WAWap").DROP_ATTR,
            persona_type: D
              ? o("WAWap").CUSTOM_STRING(D)
              : o("WAWap").DROP_ATTR,
          }));
        var U = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(B) ? !0 : void 0;
        return {
          deviceEncs: p ? [g(N, B, W)] : [],
          shouldHaveIdentity:
            W === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
          body: o("WAWap").wap(
            "enc",
            {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(W),
              session_type: U
                ? o("WAWap").CUSTOM_STRING("pq")
                : o("WAWap").DROP_ATTR,
              state:
                A && W === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                  ? o("WAWap").CUSTOM_STRING("false")
                  : o("WAWap").DROP_ATTR,
              mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(v),
              "decrypt-fail": o(
                "WAWebBackendJobsCommon",
              ).encodeMaybeDecryptFail(
                o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i),
              ),
              native_flow_name: o(
                "WAWebBackendJobsCommon",
              ).encodeMaybeNativeFlowName(S),
            },
            B,
          ),
          botBody: q,
          isPq: U,
        };
      }
      var V = !1,
        H = a.map(async function (r) {
          var a = o("WAWebUserPrefsMeUser").isMeAccount(r)
              ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(
                  i,
                  n,
                )
              : i,
            m =
              l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? o("WAWebWidFactory").asUserWidOrThrow(r)
                : o("WAWebWidFactory").asUserWidOrThrow(n);
          await o("WAWebICDCMetaApi").populateICDCMeta(m, a);
          var _ =
              u == null ? void 0 : u.get(o("WAWebWidToJid").widToUserJid(m)),
            f = _ != null ? o("WAWap").wap("content_binding", null, _) : null;
          try {
            var y = r.isBot() && (R || I || T),
              C = r.isBot() && k,
              L = await b({
                coexV2AgentSend: P,
                content: a,
                isAgentFeedbackCopy: C,
                msg: t,
                shouldFanoutToBot: y,
                wid: r,
              });
            if (
              o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(
                n,
                r,
                t.subtype,
              )
            )
              try {
                L = await o(
                  "WAWebWasaHatchOutboundWrapper",
                ).wrapHatchOutboundMessage({
                  currentStanzaId: t.id.id,
                  innerMessage: L,
                });
              } catch (e) {
                throw e instanceof
                  o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
                  ? e
                  : new (o(
                      "WAWebWasaHatchOutboundWrapper",
                    ).WAWebWasaHatchWrapError)(
                      "WASA Hatch outbound wrap failed",
                      e,
                    );
              }
            var E = o(
                "WAWebCoexV2RelayEligibility",
              ).shouldUseCoexV2StatelessSession(d, r),
              D = await h(r, l),
              x = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                r,
                0,
                L,
                t,
                c,
                D,
                E,
              ),
              $ = x.ciphertext,
              N = x.type;
            N === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (V = !0);
            var M = o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext($)
              ? !0
              : void 0;
            if (P && r.isFbidBot())
              return {
                coexV2AgentCopy: {
                  agentWid: r,
                  encType: N,
                  sharedEnc: o(
                    "WAWebCoexV2SendContribution",
                  ).genCoexV2AgentSharedEncNode({
                    ciphertext: $,
                    mediaType: v,
                    msgProtobuf: i,
                    retryCount: 0,
                    type: N,
                    useStatelessSession: E,
                  }),
                },
                isPq: M,
                node: null,
                shouldFanoutToBot: y,
              };
            var w = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(N),
                session_type: M
                  ? o("WAWap").CUSTOM_STRING("pq")
                  : o("WAWap").DROP_ATTR,
                state:
                  E && N === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                    ? o("WAWap").CUSTOM_STRING("false")
                    : o("WAWap").DROP_ATTR,
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(v),
                "decrypt-fail": o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeDecryptFail(
                  o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i),
                ),
                native_flow_name: o(
                  "WAWebBackendJobsCommon",
                ).encodeMaybeNativeFlowName(S),
              },
              $,
            );
            return {
              deviceEnc: p ? g(r, $, N) : null,
              isPq: M,
              shouldFanoutToBot: y,
              node: o("WAWap").wap(
                "to",
                { jid: o("WAWebCommsWapMd").DEVICE_JID(r) },
                w,
                f,
              ),
            };
          } catch (t) {
            if (
              t instanceof
              o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError
            )
              throw t;
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: encryption fail for ",
                    ": ",
                    "",
                  ])),
                String(r),
                t,
              ),
              o("WAWebSendMsgCommonApi").isPrimaryDevice(r) &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendUserMsg: encryption fail for primary device: ",
                        "",
                      ])),
                    t,
                  )
                  .tags("messaging")
                  .sendLogs("encryption-fail-for-primary-device"),
              null
            );
          }
        }),
        G = await Promise.all(H),
        z = C(G),
        j = z.botSuccessNodes,
        K = z.coexV2AgentCopies,
        Q = z.deviceEncs,
        X = z.isPq,
        Y = z.successNodes;
      if (
        o("WAWebCoexV2RelayEligibility").shouldRejectCoexV2AgentSend(
          $,
          K.length,
        )
      )
        return Promise.reject(
          r("err")(
            "[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy",
          ),
        );
      if (Y.length > 0 || j.length > 0 || K.length > 0) {
        var J,
          Z = o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, n, t),
          ee = o("WAWebCoexV2SendContribution").finalizeCoexV2AgentContribution(
            {
              agentCopies: K,
              agentEngagementType: Z,
              botAttrs: f,
              isFeedback: L,
              msg: t,
              plan: $,
            },
          );
        return (
          (ee == null ? void 0 : ee.seedReceipts) != null &&
            (await ee.seedReceipts()),
          {
            deviceEncs: Q,
            isPq: X,
            body: Y.length > 0 ? o("WAWap").wap("participants", null, Y) : null,
            botBody:
              (J = ee == null ? void 0 : ee.node) != null
                ? J
                : o("WAWebSendMsgBotStanza").genBotFanoutNode({
                    agentEngagementType: Z,
                    botSuccessNodes: j,
                    isBotFeedbackMessage: L,
                    isBotFeedbackMessageInAgentChat: k,
                    personaType: D != null ? D : null,
                  }),
            hasCoexV2RepresentedTargets: ee != null,
            shouldHaveIdentity: V,
          }
        );
      }
      return Promise.reject(
        r("err")(
          "[messaging] encryptAndSendUserMsg: encryption fail for all devices",
        ),
      );
    }
    function C(e) {
      var t = [],
        n = [],
        r = [],
        a = [];
      return (
        e.forEach(function (e) {
          if (e != null) {
            if (e.coexV2AgentCopy != null) {
              r.length === 0
                ? r.push(e.coexV2AgentCopy)
                : o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[coexv2] user:agent send has multiple agent devices; relaying only the first",
                        ])),
                    )
                    .sendLogs("coexv2-user-agent-multi-device-dropped");
              return;
            }
            var i = e.node;
            i != null &&
              (e.shouldFanoutToBot
                ? n.push(i)
                : (t.push(i), e.deviceEnc != null && a.push(e.deviceEnc)));
          }
        }),
        {
          botSuccessNodes: n,
          coexV2AgentCopies: r,
          deviceEncs: a,
          isPq: e.some(function (e) {
            return (e == null ? void 0 : e.isPq) === !0;
          })
            ? !0
            : void 0,
          successNodes: t,
        }
      );
    }
    async function b(e) {
      var t = e.coexV2AgentSend,
        n = e.content,
        r = e.isAgentFeedbackCopy,
        a = r === void 0 ? !1 : r,
        i = e.msg,
        l = e.shouldFanoutToBot,
        s = e.wid,
        u = t && s.isFbidBot();
      if (u)
        return o("WAWebCoexV2SendContribution").prepareCoexV2AgentPayload(n, i);
      var c = n;
      return (
        (l || a) &&
          (c = await o(
            "WAWebE2EProtoGenerator",
          ).updateBotInvokeMsgProtoCopyForCapi({
            message: n,
            botMessageSecret: a ? null : i.botMessageSecret,
            mentionedJidList: i.mentionedJidList,
          })),
        s.isFbidBot() &&
          (c = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(c)),
        s.isBot() && (c = o("WAWebE2EProtoGenerator").updateBotProtobuf(c)),
        c
      );
    }
    async function v(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        p = e.additionalBotBody,
        _ = e.additionalBotShouldHaveIdentity,
        f = _ === void 0 ? !1 : _,
        g = e.chatId,
        h = e.collectDeviceEncs,
        C = h === void 0 ? !1 : h,
        b = e.deviceList,
        v = e.groupData,
        L = e.metricReporter,
        E = e.msgProtobuf,
        k = e.msgRecord,
        I = e.option,
        x = e.scheduledMsgMetadata,
        $ = k.data,
        P = $.from,
        N = $.id,
        M = $.subtype,
        w = $.to,
        A = await o(
          "WAWebCoexV2RelayEligibility",
        ).resolveCoexV2SimpleSignalPolicy({ chatId: g, stanzaTo: w });
      await o(
        "WAWebCoexV2RelayEligibility",
      ).deleteCoexV2SimpleSignalPrimarySessions(A, b);
      try {
        var F, O, B;
        (F = L.sendPerfReporter) == null || F.startPrekeysFetchStage();
        var W = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope:
              I.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
              (I.sessionScope == null ||
                I.sessionScope ===
                  o("WAWebSessionScope").SessionScope.DEFAULT) &&
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
                ? o("WAWebSessionScope").SessionScope.PQ
                : (O = I.sessionScope) != null
                  ? O
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
            wids: b,
          }),
          q = W == null ? void 0 : W.missedPrekeyCount;
        if (q != null) {
          var U;
          (U = L.sendPerfReporter) == null || U.setFetchedPrekeyCount(q);
        }
        ((B = L.sendPerfReporter) == null || B.postPrekeysFetchStage(),
          o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
            count: W == null ? void 0 : W.depletedPrekeyCount,
            prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
              .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
            messageType:
              I.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
                : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
            deviceSizeBucket:
              I.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
                ? r("WAWebWamNumberToSizeBucket")(b.length)
                : null,
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions with error",
              ])),
          )
          .tags("messaging");
      }
      var V = o("WAWebSendMsgBotStanza").getIsBizBotFeedback($, g),
        H =
          (o("WAWebBotBaseGating").isBotEnabled() &&
            o("WAWebMsgGetters").getIsBotFeedbackMessage($) &&
            g.isBot()) ||
          V,
        G = o("WAWebThreadMsgUtils").getMsgAiThread($),
        z =
          G != null
            ? await o("WAWebChatThreadLogging").getThreadIDHMAC(G)
            : null,
        j = o("WAWebSendMsgBotStanza").getBotStanzaAttrs(
          $,
          V,
          G != null ? G.key.id : null,
        ),
        K = b;
      I.isResendingMsg &&
        (K = await o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(
          k,
          T(I, b),
        ));
      var Q = K.map(function (e) {
        return { msgKey: N, receiverId: e };
      });
      (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(Q),
        (t = L.sendPerfReporter) == null || t.startClientEncryptStage());
      var X = await o("WAWebMsgRcatUtils").genContentBindingForMsg($, S(P, K)),
        Y = o("WAWebMsgGetters").getWamEditType($),
        J = o("WAWebChatCollection").ChatCollection.get(g),
        Z = { chat: J, chatId: g, msgProtobuf: E, option: I, stanzaTo: w },
        ee = await o("WAWebCoexV2RelayEligibility").getCoexV2RelaySendPlan(Z),
        te = await y($, w, K, E, I, X, Y, A, x, C, ee, j);
      ((n = L.sendReporter) == null || n.setIsPq(te.isPq),
        (a = L.sendPerfReporter) == null || a.setIsPq(te.isPq),
        (i = L.sendPerfReporter) == null || i.postClientEncryptStage());
      var ne = null;
      if (I.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT) {
        var re =
          (x == null ? void 0 : x.kind) === "schedule"
            ? x.originalMediaType
            : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(E);
        ne = o("WAWap").wap("enc", {
          v: o("WAWap").CUSTOM_STRING(
            o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
          ),
          type: o("WAWap").CUSTOM_STRING(
            o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
          ),
          mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(re),
        });
      }
      var oe = o("WAWebE2EProtoUtils").getBizNativeFlowName(E),
        ae = $.nativeFlowInteractiveMsg,
        ie,
        le = o("WAWebContactCollection").ContactCollection.get(g),
        se =
          (l = A == null ? void 0 : A.privacyMode) != null
            ? l
            : le == null
              ? void 0
              : le.privacyMode;
      if (se != null) {
        var ue;
        ie = (ue = o("WAWap")).wap("biz", {
          host_storage: ue.INT(se.hostStorage),
          actual_actors: ue.INT(se.actualActors),
          privacy_mode_ts: ue.INT(se.privacyModeTs),
          native_flow_name: ue.MAYBE_CUSTOM_STRING(oe),
        });
      }
      var ce,
        de,
        me,
        pe,
        _e = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated();
      if (
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "createFanoutMsgStanza: create fanout for a message. found chat: ",
              ". found contact: ",
              `.
      is lid: `,
              ". lid origin: ",
              ". isLidMigrated: ",
              `
      contact has phone number: `,
              "",
            ])),
          J != null,
          le != null,
          g.isLid(),
          J == null ? void 0 : J.lidOriginType,
          _e,
          (le == null ? void 0 : le.phoneNumber) != null,
        ),
        g.isLid() &&
          (((J == null ? void 0 : J.lidOriginType) == null ||
            (J == null ? void 0 : J.lidOriginType) ===
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) &&
            (le == null ? void 0 : le.shareOwnPn) !== !0 &&
            (le == null ? void 0 : le.phoneNumber) != null &&
            (ce = le == null ? void 0 : le.phoneNumber),
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            (le == null ? void 0 : le.username) != null &&
            (pe = le.username)),
        w.isLid()
          ? _e &&
            (J == null ? void 0 : J.lidOriginType) !==
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
            (me = o("WAWebApiContact").getPhoneNumber(w))
          : w.isUser() &&
            J != null &&
            J.accountLid &&
            ((de = J == null ? void 0 : J.accountLid),
            de.isLid() ||
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "createFanoutMsgStanza: peerRecipientLid is not a LID: ",
                      "",
                    ])),
                  de.toLogString(),
                )
                .sendLogs("peer-recipient-lid-not-lid-fanout")),
        ie == null && oe != null && ae === !0)
      ) {
        var ue;
        ie = (ue = o("WAWap")).wap(
          "biz",
          null,
          ue.wap(
            "interactive",
            { v: "1", type: ue.CUSTOM_STRING("native_flow") },
            ue.wap("native_flow", { name: ue.CUSTOM_STRING(oe) }),
          ),
        );
      } else
        ie == null &&
          oe != null &&
          (ie = o("WAWap").wap("biz", {
            native_flow_name: o("WAWap").CUSTOM_STRING(oe),
          }));
      (I.isResendingMsg ||
        (await o("WAWebSendMsgCommonApi").updateIdentityRange(k, K)),
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode());
      var fe =
          X == null
            ? void 0
            : X.get(
                o("WAWebWidToJid").widToUserJid(
                  o("WAWebWidFactory").asUserWidOrThrow(P),
                ),
              ),
        ge =
          fe != null
            ? o("WAWap").wap("sender_content_binding", null, fe)
            : null,
        he = p != null ? p : te.botBody,
        ye =
          he == null
            ? o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(w)
            : null,
        Ce =
          he == null
            ? o("WAWebSendMsgBotStanza").getBotAgentEngagementType(!1, w, $)
            : null,
        be =
          (I.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT &&
            I.isResendingMsg === !0) ||
          te.hasCoexV2RepresentedTargets === !0
            ? null
            : o("WAWebSendMsgBotStanza").genBotStanzaNode(
                j,
                ye != null ? ye : null,
                Ce,
                G != null,
              ),
        ve = !1,
        Se = null;
      he == null &&
        ((Se = await o(
          "WAWebCoexV2SendContribution",
        ).buildCoexV2RelayContribution({
          botAttrs: j,
          editType: Y,
          msg: $,
          msgProtobuf: E,
          relayPlan: ee,
        })),
        Se != null &&
          ((be = Se.node),
          (ve = Se.shouldHaveIdentity),
          await Se.seedReceipts()));
      var Re = o("WAWebSendMsgMetaNode").genMetaNode({
          chatId: g,
          groupData: v,
          includeAttributes: {
            origin: J == null ? void 0 : J.lidOriginType,
            hashedAiThreadId: z,
            appendHostedSenderIntent:
              Se != null || te.hasCoexV2RepresentedTargets === !0,
            hasPairwisePayload:
              I.fanoutType ===
              o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
            sessionScope: I.sessionScope,
          },
          msgProtobuf: E,
          msgRecord: k,
          scheduledMsgMetadata: x,
        }),
        Le = null;
      if (te.shouldHaveIdentity || f || ve) {
        var Ee = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
        Le = o("WAWap").wap("device-identity", null, Ee);
      }
      var ke = await o(
          "WAWebReportingTokenUtils",
        ).genReportingTokenBodyForStanza($, E, N.toString()),
        Ie = (s = await R(J)) != null ? s : await D(J, g),
        Te;
      v != null &&
        (Te =
          (v == null ? void 0 : v.isLidAddressingMode) === !0
            ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
      var De = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(J),
        xe = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(N.id),
            to: o("WAWebCommsWapMd").CHAT_JID(w),
            type:
              (u = x == null ? void 0 : x.originalStanzaType) != null
                ? u
                : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(E),
            peer_recipient_lid: de
              ? o("WAWebCommsWapMd").USER_JID(de)
              : o("WAWap").DROP_ATTR,
            peer_recipient_pn: me
              ? o("WAWebCommsWapMd").USER_JID(me)
              : o("WAWap").DROP_ATTR,
            peer_recipient_username:
              pe !== void 0
                ? o("WAWap").CUSTOM_STRING(
                    o("WAWebUsernameTypes").serializeUsername(pe),
                  )
                : o("WAWap").DROP_ATTR,
            edit: o("WAWebSendMsgCommonApi").editAttribute(E, M),
            device_fanout:
              I.isResendingMsg === !0 || H ? "false" : o("WAWap").DROP_ATTR,
            recipient_pn: ce
              ? o("WAWebCommsWapMd").USER_JID(ce)
              : o("WAWap").DROP_ATTR,
            addressing_mode:
              Te != null ? o("WAWap").CUSTOM_STRING(Te) : o("WAWap").DROP_ATTR,
          },
          te.body,
          he,
          ne,
          Le,
          ie,
          Re,
          ge,
          be,
          ke,
          Ie,
          De,
        );
      if (!w.isGroup() && !w.isStatus()) {
        var $e;
        ($e = L.sendReporter) == null || $e.setOppositeHasUsername(pe != null);
      }
      var Pe = o("WAWebCommsAckParser").toCoreAckTemplate({
        id: N.id,
        class: "message",
        from: $.to,
        participant: null,
      });
      return { stanza: xe, ackTemplate: Pe, deviceEncs: te.deviceEncs };
    }
    function S(e, t) {
      var n = new Map();
      n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
      for (var r of t)
        n.has(r.user) ||
          n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
      return Array.from(n.values());
    }
    async function R(e) {
      if (e == null) return null;
      var t = e.tcToken,
        n = e.tcTokenTimestamp;
      return t == null ||
        n == null ||
        o("WAWebTrustedContactsUtils").isTokenExpired(
          n,
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        )
        ? null
        : o("WAWap").wap("tctoken", null, t);
    }
    var L = null,
      E = null,
      k = new Map(),
      I = 5;
    function T(e, t) {
      return e.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT
        ? t
        : t.filter(function (e) {
            return !e.isBot();
          });
    }
    async function D(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled") !==
          !0 ||
        !t.isRegularUser()
      )
        return null;
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        "WAWebNctSalt",
      );
      if (n == null)
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] no salt available in IndexedDB",
              ])),
          ),
          null
        );
      var r = e == null ? void 0 : e.accountLid;
      if (r == null)
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] recipientLid is null",
              ])),
          ),
          null
        );
      try {
        var a;
        n === L && E != null
          ? (a = E)
          : ((a = o("WABase64").decodeB64(n)), (L = n), (E = a), k.clear());
        var i = r.toString(),
          l = k.get(i);
        if (l != null) return o("WAWap").wap("cstoken", null, l);
        var s = new Uint8Array(
          await o("WACryptoHmac").hmacSha256(a, new TextEncoder().encode(i)),
        );
        if (k.size >= I) {
          var u = k.keys().next().value;
          u != null && k.delete(u);
        }
        return (k.set(i, s), o("WAWap").wap("cstoken", null, s));
      } catch (e) {
        return (
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[nct-cstoken] generation failed - ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    ((l.classifyFanoutEncNodes = C),
      (l.genBotFanoutContent = b),
      (l.createFanoutMsgStanza = v),
      (l.genCsTokenBody = D));
  },
  98,
);
