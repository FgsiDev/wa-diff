__d(
  "MobileFeedAdPreview_getShouldUseUnifiedFooter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a =
          ((t = e.footer) == null || (t = t.callToAction) == null
            ? void 0
            : t.linkType) === "WHATSAPP_LINK" ||
          ((n = e.footer) == null || (n = n.callToAction) == null
            ? void 0
            : n.linkType) === "WHATSAPP_MESSAGE" ||
          ((r = e.footer) == null || (r = r.callToAction) == null
            ? void 0
            : r.linkType) === "CHAT_ON_WHATSAPP",
        i =
          ((o = e.footer) == null || (o = o.callToAction) == null
            ? void 0
            : o.linkType) === "MESSAGE_PAGE",
        l = e.styleRenderer,
        s = l === "photo";
      return a || i || s;
    }
    i.default = e;
  },
  66,
);
