__d(
  "adsCallToActionFilterTypesForVideoViewObjective",
  ["AdsAccountUtils", "AdsLinkTypeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = r("AdsAccountUtils").hasCapabilityFromList(
        t,
        "CTW_ADS_FOR_NON_MESSAGES_OBJECTIVE",
      );
      return e.filter(function (e) {
        return (
          e.name !== "INTERESTED" &&
          (e.name !== "WHATSAPP_MESSAGE" ||
            (a && o("AdsLinkTypeUtils").isMessagingDestination(n))) &&
          (e.name !== "MESSAGE_PAGE" ||
            o("AdsLinkTypeUtils").isMessagingDestination(n))
        );
      });
    }
    l.default = e;
  },
  98,
);
