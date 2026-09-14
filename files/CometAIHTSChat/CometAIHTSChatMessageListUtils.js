__d(
  "CometAIHTSChatMessageListUtils",
  [
    "CometAIChatPerfUtils",
    "isCometAIHTSThreadsEntrypoint.entrypointutils",
    "isStringNullOrWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t.every(function (t) {
        return e.has(t);
      });
    }
    function s(e) {
      var t,
        n,
        a,
        i,
        l = e.entrypoint,
        s = e.isAxonBot,
        u = e.isCurrentAssistantMessage,
        c = e.message;
      return !s ||
        !r("isCometAIHTSThreadsEntrypoint.entrypointutils")(l) ||
        c == null ||
        c.user !== "ASSISTANT" ||
        u
        ? !1
        : o("CometAIChatPerfUtils").isAgentTyping(c.streaming_state) &&
            (c.text == null || c.text.trim() === "") &&
            ((t = (n = c.attachments) == null ? void 0 : n.length) != null
              ? t
              : 0) === 0 &&
            ((a =
              (i = c.composed_text_v2) == null || (i = i.nodes_js) == null
                ? void 0
                : i.length) != null
              ? a
              : 0) === 0;
    }
    function u(e) {
      var t = e.attachmentCount,
        n = e.entrypoint,
        a = e.isAgentActivelyResponding,
        i = e.streamingDisplayText,
        l = e.streamingState,
        s = e.text,
        u = e.thinkingHeadingCount,
        c = e.user;
      return (
        n === "ig_comet_ai_axon_mv" &&
        !a &&
        c === "ASSISTANT" &&
        o("CometAIChatPerfUtils").isAgentTyping(l) &&
        r("isStringNullOrWhitespaceOnly")(s) &&
        r("isStringNullOrWhitespaceOnly")(i) &&
        t === 0 &&
        u === 0
      );
    }
    function c(e, t, n) {
      for (var r = t + 1; r < e.length; r++) {
        var o,
          a = (o = e[r]) == null ? void 0 : o.node;
        if (a != null && !n(a)) return a;
      }
      return null;
    }
    ((l.haveAllMessagesPainted = e),
      (l.shouldSuppressStaleProgressMessage = s),
      (l.shouldHideStaleEmptyAssistantMessage = u),
      (l.getNextMessageNode = c));
  },
  98,
);
