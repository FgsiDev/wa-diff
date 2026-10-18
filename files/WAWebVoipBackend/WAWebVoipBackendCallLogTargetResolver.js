__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebFindChat",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      var n = t.callCreatorWid,
        a = t.callId,
        i = t.groupJid,
        l = t.isCallLink,
        s = t.peerWid,
        u = t.participants,
        m = u === void 0 ? [] : u,
        p,
        _,
        f = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        g = await d({
          callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(n),
        }),
        h = o("WAWebUserPrefsMeUser").isMeAccount(g),
        y = m.filter(function (e) {
          return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
        });
      if (i != null) ((p = i), (_ = g));
      else if (!h) p = g;
      else {
        var C = y.length === 1 ? y[0] : null;
        l !== !0 && C != null && !(await c(C))
          ? (p = await d({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(C),
            }))
          : l !== !0 && s != null && !(await c(s))
            ? (p = await d({
                callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(s),
              }))
            : (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] getCallLogTargetDetails: msg -> self chat",
                  ])),
              ),
              (p = g),
              (f =
                y.length > 0 || s != null
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
      }
      return {
        msgKeyId: a != null ? a : await r("WAWebMsgKey").newId(),
        fromMe: h,
        callCreatorUserWid: g,
        chatId: p,
        participant: _,
        viewMode: f,
      };
    }
    async function c(e) {
      if (!e.isUser()) return !1;
      try {
        var t;
        return o("WAWebContactExternalUserState").isGuestUser(
          (t = await o("WAWebApiContact").getContactRecord(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          )) == null
            ? void 0
            : t.externalUserState,
        );
      } catch (e) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] isGuest: contact read failed, treating as non-guest",
              ])),
          ),
          !1
        );
      }
    }
    async function d(e) {
      var t = e.callDestinationWid,
        n = e.groupJid,
        r = t,
        a =
          !r.isLid() &&
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(),
        i = !n && (r.isLid() || a);
      if (i) {
        o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced());
        var l = await o("WAWebFindChat").findOrCreateLatestChat(
            t,
            "voipCallLog",
          ),
          s = l.chat;
        r = o("WAWebWidFactory").asUserWidOrThrow(s.id);
      }
      return r;
    }
    ((l.getCallLogTargetDetails = u), (l.get1x1CallLidOrPnDestination = d));
  },
  98,
);
