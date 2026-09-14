__d(
  "AdsProductExtensionsWebsiteCTAUtils",
  ["AdsAPIAdgroupRecordGetWebsiteURL", "AdsAdgroupSemanticFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "NO_BUTTON",
      "MESSAGE_PAGE",
      "WHATSAPP_MESSAGE",
      "INSTAGRAM_MESSAGE",
      "CALL_NOW",
    ]);
    function s(t) {
      return !e.has(t);
    }
    function u(e, t, n) {
      n === void 0 && (n = null);
      var o = r("AdsAdgroupSemanticFields").callToActionType.get(t, e);
      if (o == null) {
        var a,
          i,
          l = (a = n) == null ? void 0 : a.type,
          u = (i = n) == null ? void 0 : i.link;
        return l != null && s(l) && u != null && u !== "";
      }
      var c = typeof o == "string" ? s(o) : o.some(s);
      return c ? r("AdsAPIAdgroupRecordGetWebsiteURL")(e, t) !== "" : !1;
    }
    l.hasWebsiteCTADestination = u;
  },
  98,
);
