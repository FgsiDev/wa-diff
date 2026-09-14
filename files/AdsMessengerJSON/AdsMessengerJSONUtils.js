__d(
  "AdsMessengerJSONUtils",
  ["AdsMessengerJSONMediaFormatType", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("getByPath")(e, ["media_type"]);
    }
    function s(e) {
      return r("getByPath")(e, ["landing_screen_type"]);
    }
    function u(e) {
      return r("getByPath")(e, ["template_id"]);
    }
    function c(e) {
      var t = r("getByPath")(e, [
        "image_format",
        "message",
        "attachment",
        "payload",
        "elements",
      ]);
      return t && t[0];
    }
    function d(e) {
      var t = c(e);
      return t && t.image_hash;
    }
    function m(e) {
      var t = c(e);
      return t && t.title;
    }
    function p(e) {
      var t = c(e);
      return t && t.subtitle;
    }
    function _(e) {
      return r("getByPath")(e, [
        "video_format",
        "message",
        "attachment",
        "payload",
        "attachment_id",
      ]);
    }
    function f(e) {
      return r("getByPath")(e, [
        "text_format",
        "message",
        "attachment",
        "payload",
        "buttons",
      ]);
    }
    function g(e) {
      var t = c(e);
      return t && t.buttons;
    }
    function h(t) {
      var n = e(t);
      switch (n) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return r("getByPath")(t, ["image_format", "message", "text"]);
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return r("getByPath")(t, ["video_format", "message", "text"]);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return y(t)
            ? r("getByPath")(t, ["text_format", "message", "text"])
            : r("getByPath")(t, [
                "text_format",
                "message",
                "attachment",
                "payload",
                "text",
              ]);
        default:
          return null;
      }
    }
    function y(t) {
      var n = e(t);
      return n === r("AdsMessengerJSONMediaFormatType").TEXT
        ? !r("getByPath")(t, ["text_format", "message", "attachment"])
        : !1;
    }
    ((l.getFormat = e),
      (l.getLandingScreenType = s),
      (l.getTemplateID = u),
      (l.getGenericElement = c),
      (l.getImageHash = d),
      (l.getGenericTitle = m),
      (l.getGenericSubtitle = p),
      (l.getVideo = _),
      (l.getTextFormatCTA = f),
      (l.getImageFormatCTA = g),
      (l.getWelcomeMessageText = h),
      (l.isTextWithQR = y));
  },
  98,
);
