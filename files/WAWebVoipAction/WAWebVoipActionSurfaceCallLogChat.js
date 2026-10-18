__d(
  "WAWebVoipActionSurfaceCallLogChat",
  [
    "WALogger",
    "WAWebDBUpdateChatTable",
    "WAWebDbErrors",
    "WAWebFindChatAction",
    "WAWebViewMode.flow",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n) {
      if (
        !(
          n.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
          n.viewMode !==
            o("WAWebViewMode.flow").ViewModeType
              .CALL_LOG_OFFLINE_RESUME_PROMOTED
        )
      )
        try {
          var a = await o("WAWebFindChatAction").findOrCreateLatestChat(
              t,
              "voipCallLog",
            ),
            i = a.chat;
          (i.set({ createdLocally: !1 }),
            await o("WAWebDBUpdateChatTable").updateChatTable(i.id, {
              createdLocally: !1,
            }));
        } catch (t) {
          if (t instanceof o("WAWebDbErrors").DbOnLogoutAbort) throw t;
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] failed to surface call log chat in chat list",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-surface-callog-chat-failed");
        }
    }
    l.maybeSurfaceCallLogChatInChatList = s;
  },
  98,
);
