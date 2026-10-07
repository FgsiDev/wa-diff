__d(
  "WAWebBotTosIds",
  ["WAWebABProps", "WAWebBotGating", "WAWebBotLogging", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = "20230901",
      s = "20230902",
      u = "20240216",
      c = "20231027",
      d = "20240729",
      m = new Set([e, s, u]);
    function p() {
      return [f(), _()].filter(Boolean);
    }
    function _() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "ai_pdfn_nux_ai_group_muse_non_initiator_notice_id",
        ),
      );
    }
    function f() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "ai_pdfn_nux_ai_group_muse_initiator_notice_id",
        ),
      );
    }
    function g() {
      return h(
        o("WAWebABProps").getABPropConfigValue(
          "ai_pdfn_nux_ai_group_notice_id",
        ),
      );
    }
    function h(e) {
      var t = e.trim();
      if (!/^\d+$/.test(t)) return null;
      var n = Number(t);
      return Number.isSafeInteger(n) && n > 0 ? t : null;
    }
    function y() {
      var t = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        n = t != null && t !== "" ? t : e;
      return n;
    }
    function C() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_shortcut_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : u;
      return t;
    }
    function b() {
      var e = o("WAWebABProps")
          .getABPropConfigValue("ai_pdfn_tos_invoke_notice_id")
          .trim(),
        t = e != null && e !== "" ? e : s;
      return t;
    }
    function v() {
      return u;
    }
    function S() {
      return s;
    }
    function R() {
      return c;
    }
    function L(e) {
      var t = o("WAWebBotGating").getMasterBotNoticeId();
      if (t != null) return t;
      switch (e) {
        case o("WAWebBotLogging").BotEntryPointType.Shortcut:
        case o("WAWebBotLogging").BotEntryPointType.Search:
          return Number(C());
        case o("WAWebBotLogging").BotEntryPointType.Invoke:
          return Number(b());
      }
    }
    function E() {
      return d;
    }
    function k() {
      if (!o("WAWebMobilePlatforms").isSMB()) return null;
      var e = o("WAWebABProps")
        .getABPropConfigValue("smb_meta_ai_tos_notice_id")
        .trim();
      if (!/^\d+$/.test(e)) return null;
      var t = Number(e);
      return Number.isSafeInteger(t) && t > 0 ? t : null;
    }
    ((l.supportedTosNoticeIds = m),
      (l.getMuseGroupTosNoticeIds = p),
      (l.getMuseGroupNonInitiatorNoticeId = _),
      (l.getMetaAiOpenGroupNoticeId = g),
      (l.getBotAgentTosId = y),
      (l.getBotShortcutTosId = C),
      (l.getBotInvokeTosId = b),
      (l.getBotLegacyShortcutTosId = v),
      (l.getBotLegacyInvokeTosId = S),
      (l.getBizBotTosId = R),
      (l.getApplicableBotNoticeId = L),
      (l.getUgcAiStudioTosId = E),
      (l.getBusinessAssistantLegacyNoticeId = k));
  },
  98,
);
