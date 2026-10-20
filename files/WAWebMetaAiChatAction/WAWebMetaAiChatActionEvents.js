__d(
  "WAWebMetaAiChatActionEvents",
  [
    "WALogger",
    "WAWebChatActionWamEvent",
    "WAWebMetaAiChatActionIdentity",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatActionChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = t.chatType,
            i = t.chatWid,
            l = t.originLid;
          try {
            var u,
              c = yield o(
                "WAWebMetaAiChatActionIdentity",
              ).getMetaAiConversationThreadId(i, a);
            if (
              ((u = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                ? void 0
                : u.toString()) !== l
            ) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-chat-action] account-changed",
                  ])),
              );
              return;
            }
            var d = a === "META_AI_THREAD" ? r.threadInboxPosition : null,
              m = new (o("WAWebChatActionWamEvent").ChatActionWamEvent)({
                chatActionChatType: o("WAWebWamEnumChatActionChatType")
                  .CHAT_ACTION_CHAT_TYPE[a],
                chatActionEntryPoint: r.entryPoint,
                chatActionType: n,
              });
            (c != null && (m.conversationThreadId = c),
              d != null && (m.threadInboxPosition = d),
              m.commit());
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-chat-action] log-failed",
                  ])),
              )
              .sendLogs("meta-ai-chat-action-log-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.commitMetaAiChatListAction = u;
  },
  98,
);
