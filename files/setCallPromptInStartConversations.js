__d(
  "setCallPromptInStartConversations",
  ["AdsMessengerConstants", "setByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = t;
      (r("setByPath")(e, ["is_call_prompt_enabled"], !0),
        n === !0
          ? (r("setByPath")(e, ["is_bic_call_prompt_enabled"], !0),
            (i = t != null ? t : ""))
          : a === !0 && r("setByPath")(e, ["is_warm_call_prompt_enabled"], !0));
      var l = [
        ["text_format", "message", "call_prompt_data", "call_prompt_message"],
        ["image_format", "message", "call_prompt_data", "call_prompt_message"],
        ["video_format", "message", "call_prompt_data", "call_prompt_message"],
      ];
      l.forEach(function (t) {
        r("setByPath")(
          e,
          t,
          i != null
            ? i
            : String(
                o("AdsMessengerConstants")
                  .DEFAULT_START_CONVERSATIONS_CALL_PROMPT_MESSAGE,
              ),
        );
      });
    }
    l.default = e;
  },
  98,
);
