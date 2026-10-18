__d(
  "WAWebCoexV2RelayEligibility",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiDeviceList",
    "WAWebApiVerifiedBusinessName",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2HostedContactUtils",
    "WAWebCoexV2SupportedMsgTypes",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgFanoutTypes",
    "WAWebSendMsgCommonApi",
    "WAWebSignalSessionApi",
    "WAWebSimpleSignalDowngradeStore",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.chatId,
        a = t.stanzaTo;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_coex_simple_signal_enabled",
        ) !== 1 ||
        !n.isUser() ||
        !a.isUser() ||
        o(
          "WAWebSimpleSignalDowngradeStore",
        ).isCoexUserDowngradedFromSimpleSignal(n)
      )
        return null;
      try {
        var i,
          l =
            (i = await o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(n)) == null
              ? void 0
              : i.privacyMode;
        if (l == null) return null;
        var s = o(
          "WAWebApiVerifiedBusinessName",
        ).convertPrivacyModeFromStorageType(l);
        return s == null ||
          s.hostStorage !==
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook
          ? null
          : {
              privacyMode: s,
              stanzaTo: a,
              statelessSessionEnabled: o(
                "WAWebMessagingGatingUtils",
              ).isSimpleSignalEnabled(),
            };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] simple signal: failed to read peer privacy mode",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-simple-signal-privacy-mode-read-failed"),
          null
        );
      }
    }
    function m(e, t) {
      return (
        (e == null ? void 0 : e.statelessSessionEnabled) === !0 &&
        (t.isHosted() ||
          (t.user === e.stanzaTo.user &&
            o("WAWebSendMsgCommonApi").isPrimaryDevice(t)))
      );
    }
    async function p(e, t) {
      await Promise.all(
        t
          .filter(function (t) {
            return !t.isHosted() && m(e, t);
          })
          .map(function (e) {
            return o("WAWebSignalSessionApi").deleteRemoteSession(e);
          }),
      );
    }
    async function _(e) {
      if (!e.isUser() || e.isBot() || e.isFbidBot()) return !1;
      var t =
        ((await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(e)) &&
          !(await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(e))) ||
        (await R());
      return t ? o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() : !1;
    }
    async function f(e, t) {
      if (!b(e, t) || !(await C())) return null;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return n == null
        ? null
        : { agentCopyIsRequired: !0, kind: "user_agent", selfLid: n };
    }
    function g(e) {
      var t = e.hasFbidBotDevice,
        n = e.isBotInvokeMessage,
        r = e.isResendingMsg,
        o = e.isRevokeForMsgFromOrDeliveredToBot,
        a = e.relayPlan;
      return r || a == null || (!n && !o) || !t
        ? null
        : { agentCopyIsRequired: !1, kind: "invoked_agent", relayPlan: a };
    }
    function h(e, t) {
      return (e == null ? void 0 : e.agentCopyIsRequired) === !0 && t === 0;
    }
    async function y(e) {
      var t = e.chat,
        n = e.chatId,
        r = e.msgProtobuf,
        a = e.option,
        i = e.stanzaTo;
      if (!v(r, i, a)) return null;
      var l = await Promise.all([
          C(),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(n),
          o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(n),
        ]),
        u = l[0],
        c = l[1],
        d = l[2];
      if (!u && !c) return null;
      var m = u ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null,
        p = c && !d ? S(t == null ? void 0 : t.accountLid, i) : null,
        _ =
          p != null &&
          (await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(p));
      c &&
        (d || _) &&
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] relay: peer is blocked; dropping peer <to>",
              ])),
          )
          .sendLogs("coexv2-relay-peer-blocked");
      var f = _ ? null : p;
      return m == null && f == null
        ? null
        : { peerLid: f, selfIsCoexV2: u, selfLid: m };
    }
    async function C() {
      try {
        var e = await o("WAWebApiDeviceList").getMyDeviceList();
        return e.devices.some(function (e) {
          return e.isHosted === !0;
        });
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] gate: failed to read self device list",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-self-device-list-read-failed"),
          !1
        );
      }
    }
    function b(e, t) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        e.isFbidBot() &&
        !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(t)
      );
    }
    function v(e, t, n) {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() &&
        n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT &&
        n.isResendingMsg !== !0 &&
        t.isUser() &&
        !t.isBot() &&
        !t.isFbidBot() &&
        o("WAWebCoexV2SupportedMsgTypes").isCoexV2SupportedProtobuf(e)
      );
    }
    function S(e, t) {
      var n =
        e != null && e.isLid() ? e : o("WAWebLidMigrationUtils").toUserLid(t);
      return (
        n == null &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>",
                ])),
            )
            .sendLogs("coexv2-relay-peer-lid-missing"),
        n
      );
    }
    function R() {
      return o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null
        ? Promise.resolve(!1)
        : C();
    }
    ((l.resolveCoexV2SimpleSignalPolicy = d),
      (l.shouldUseCoexV2StatelessSession = m),
      (l.deleteCoexV2SimpleSignalPrimarySessions = p),
      (l.genIsCoexV2RelayEligibleSend = _),
      (l.getCoexV2AgentSendPlan = f),
      (l.getCoexV2InvokedAgentSendPlan = g),
      (l.shouldRejectCoexV2AgentSend = h),
      (l.getCoexV2RelaySendPlan = y),
      (l.isSelfCoexV2Hosted = C));
  },
  98,
);
