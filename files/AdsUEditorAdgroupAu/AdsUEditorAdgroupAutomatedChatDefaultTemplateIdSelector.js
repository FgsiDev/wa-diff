__d(
  "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
  ["AdsPageStore", "adsCreateSelector", "logCTXAutomatedChatEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("AdsPageStore").getSelector],
      function (t) {
        return function (e) {
          var n = null;
          if (e != null) {
            var o, a, i;
            if (
              ((n = t(e)),
              ((o = n) == null
                ? void 0
                : o.is_eligible_for_automated_chat_defaulting) === !1 &&
                r("logCTXAutomatedChatEvent")(
                  "ctx_automated_chat_defaulting_drop_off",
                  "not_eligible_for_defaulting",
                ),
              ((a = n) == null
                ? void 0
                : a.automated_chat_default_template_id) == null &&
                r("logCTXAutomatedChatEvent")(
                  "ctx_automated_chat_defaulting_drop_off",
                  "empty_default_template_id",
                ),
              ((i = n) == null
                ? void 0
                : i.is_eligible_for_automated_chat_defaulting) === !0)
            ) {
              var l;
              return {
                defaultTemplateId:
                  (l = n) == null
                    ? void 0
                    : l.automated_chat_default_template_id,
              };
            }
          }
          return { defaultTemplateId: null };
        };
      },
      { name: i.id },
    );
    l.AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector = e;
  },
  98,
);
