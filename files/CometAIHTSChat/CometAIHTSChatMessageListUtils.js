__d(
  "CometAIHTSChatMessageListUtils",
  ["CometAIChatPerfUtils", "isCometAIHTSThreadsEntrypoint.entrypointutils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
    l.shouldSuppressStaleProgressMessage = e;
  },
  98,
);
