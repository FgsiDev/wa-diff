__d(
  "MobileFeedAdPreview_AttachmentCTAFilledIcons",
  ["ix", "fbicon"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {
        "app-instagram": { asset: s("395480"), assetDark: s("492680") },
        "app-messenger": {
          asset: "/images/messaging/commerce/logo/messenger_icon_grey.png",
          assetDark: s("481156"),
        },
        "app-whatsapp": { asset: s("443813"), assetDark: s("482855") },
        like: { asset: s("363732"), assetDark: s("504123") },
        bookmark: { asset: s("363487"), assetDark: s("481182") },
        follow: { asset: s("397473"), assetDark: s("488985") },
        directions: { asset: s("406884"), assetDark: s("641020") },
        phone: { asset: s("413195"), assetDark: s("494527") },
        star: { asset: s("381172"), assetDark: s("489595") },
      },
      c = {
        "app-instagram": (e = o("fbicon"))._(s("680443"), 16),
        "app-messenger": e._(s("505616"), 16),
        "app-whatsapp": e._(s("686157"), 16),
        like: e._(s("509921"), 16),
        bookmark: e._(s("495586"), 16),
        follow: e._(s("618352"), 16),
        directions: e._(s("635202"), 16),
        phone: e._(s("558160"), 16),
        star: e._(s("479324"), 16),
      };
    function d(e) {
      return u[e];
    }
    function m(e) {
      return c[e];
    }
    ((l.getFilledIcon = d), (l.getFilledIconTetra = m));
  },
  98,
);
