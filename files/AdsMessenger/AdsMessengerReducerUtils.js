__d(
  "AdsMessengerReducerUtils",
  [
    "fbt",
    "AdsGetDefaultGreetingText",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLandingScreenType",
    "FBLogger",
    "getByPath",
    "getErrorSafe",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (e == null) return !0;
      var t = u(e);
      if (!t) return !0;
      var n =
          r("getByPath")(t, ["version"]) === null
            ? null
            : Number(r("getByPath")(t, ["version"])),
        o =
          r("getByPath")(t, ["media_type"]) === null
            ? null
            : String(r("getByPath")(t, ["media_type"]));
      if (n !== 2 || o !== "image") return !1;
      var a = r("getByPath")(t, [
          "image_format",
          "message",
          "attachment",
          "payload",
          "elements",
        ]),
        i = a && a[0];
      return !!(i && !i.image_hash);
    }
    function u(e) {
      try {
        if (e != null) return JSON.parse(e);
      } catch (e) {
        return (
          r("FBLogger")("ads")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to parse JSON message"),
          null
        );
      }
      return null;
    }
    function c(e, t, n, o, a, i, l, s, c) {
      var p = u(l);
      p || (p = f(n, c, a, "visual_editor", t));
      var _ = d(p),
        g = _ && _[0];
      return (
        (g.image_hash = e + ":" + o),
        (g.title = g.title || s || i),
        r("setByPath")(
          p,
          ["image_format", "message", "attachment", "payload", "elements"],
          [g],
        ),
        l != null &&
          m(l) === "welcome_message" &&
          r("setByPath")(p, ["image_format", "message", "text"], l),
        JSON.stringify(p)
      );
    }
    function d(e) {
      var t = r("getByPath")(e, [
        "image_format",
        "message",
        "attachment",
        "payload",
        "elements",
      ]);
      return t;
    }
    function m(e) {
      var t = "welcome_message";
      if (e == null) return t;
      try {
        return (JSON.parse(e), "json_blob");
      } catch (e) {
        return t;
      }
    }
    function p(e) {
      return e ? e.messenger_ads_default_quick_replies : null;
    }
    function _() {
      return r("AdsMessengerJSONMediaFormatType").TEXT;
    }
    function f(e, t, n, a, i) {
      i === void 0 && (i = r("AdsMessengerJSONMediaFormatType").IMAGE);
      var l = [];
      if (e == null) {
        var u =
          t === !0
            ? s._(/*BTDS*/ "I'd like to learn more")
            : s._(/*BTDS*/ "I'm interested");
        l.push({ title: u, content_type: "text" });
      } else
        for (var c = 0; c < e.length; c++)
          l.push({ title: e[c], content_type: "text" });
      var d = o("AdsGetDefaultGreetingText").getDefaultGreetingText(n);
      return {
        type: "VISUAL_EDITOR",
        version: 2,
        landing_screen_type: r("AdsMessengerVisualEditorLandingScreenType")
          .WELCOME_MESSAGE,
        media_type: i,
        image_format: {
          message: {
            customer_action_type: r(
              "AdsMessengerVisualEditorCustomerActionType",
            ).QUICK_REPLIES,
            attachment: {
              type: "template",
              payload: {
                template_type: "generic",
                elements: [{ title: "", buttons: [] }],
              },
            },
            quick_replies: l,
            text: d,
          },
        },
        text_format: {
          customer_action_type: r("AdsMessengerVisualEditorCustomerActionType")
            .QUICK_REPLIES,
          message: { quick_replies: l, text: d },
        },
        video_format: {
          customer_action_type: r("AdsMessengerVisualEditorCustomerActionType")
            .QUICK_REPLIES,
          message: {
            attachment: { type: "video", payload: {} },
            quick_replies: l,
            text: d,
          },
        },
        user_edit: !1,
        surface: a,
      };
    }
    ((l.shouldSetDefaultWelcomeMessage = e),
      (l.parseJSONMessage = u),
      (l.setDefaultWelcomeMessage = c),
      (l.getMessageTypeFromMessage = m),
      (l.getDefaultQuickReplies = p),
      (l.getWelcomeMessageDefaultMediaFormat = _),
      (l.getVisualEditorDefaultJSON = f));
  },
  226,
);
