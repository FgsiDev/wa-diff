__d(
  "NonURLLinkCTATypesUtils",
  ["AdsPACSupportedLinkCTAs", "AdsPromotedObjectTypes", "NonURLLinkCTATypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e == "MESSAGE_PAGE") return !1;
      var o = n === r("AdsPromotedObjectTypes").WHATSAPP;
      return r("AdsPACSupportedLinkCTAs").includes(e) ||
        e === "GET_OFFER" ||
        (o && e == "WHATSAPP_MESSAGE")
        ? !1
        : Object.prototype.hasOwnProperty.call(r("NonURLLinkCTATypes"), e);
    }
    l.isUnsupportedCTA = e;
  },
  98,
);
