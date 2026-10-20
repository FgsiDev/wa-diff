__d(
  "WAWebMetaAiChatActionLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebMetaAiThreadChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatActionEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebMetaAiChatActionEvents").__setRef(
        "WAWebMetaAiChatActionLogger",
      );
    function u(e) {
      return e.isUser()
        ? o("WAWebBotUtils").isMetaAiBot(e)
          ? "META_AI"
          : o("WAWebMetaAiThreadChat").isMetaAiThreadChat(e)
            ? "META_AI_THREAD"
            : null
        : null;
    }
    function c(e, t) {
      return e != null && !e.isEmptyQuery()
        ? {
            entryPoint: o("WAWebWamEnumChatActionEntryPoint")
              .CHAT_ACTION_ENTRY_POINT.SEARCH_LIST,
            threadInboxPosition: null,
          }
        : t == null
          ? null
          : {
              entryPoint: o("WAWebWamEnumChatActionEntryPoint")
                .CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST,
              threadInboxPosition: t,
            };
    }
    function d(e, t, n) {
      var r;
      if (n == null) return null;
      var a = u(e),
        i =
          (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : r.toString();
      if (
        a == null ||
        i == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "ai_chat_action_logging_addition_enabled",
        )
      )
        return null;
      var l = m();
      return {
        commit: function () {
          return l.then(function (r) {
            return r == null
              ? void 0
              : r.commitMetaAiChatListAction(
                  { chatWid: e, chatType: a, originLid: i },
                  t,
                  n,
                );
          });
        },
      };
    }
    function m() {
      return s.load().catch(function () {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-chat-action] load-failed",
                ])),
            )
            .sendLogs("meta-ai-chat-action-load-failed"),
          null
        );
      });
    }
    ((l.resolveMetaAiChatActionChatType = u),
      (l.getMetaAiChatListRow = c),
      (l.startMetaAiChatListAction = d));
  },
  98,
);
