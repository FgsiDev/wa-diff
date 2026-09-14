__d(
  "adsCallToActionFilterTypesForInstagramLiveVideoAds",
  ["AdsLinkTypeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "MESSAGE_PAGE",
      "WHATSAPP_MESSAGE",
      "INSTAGRAM_MESSAGE",
      "CALL_NOW",
      "DIAL_CODE",
      "GET_SHOWTIMES",
      "LISTEN_NOW",
      "PLAY_GAME",
      "REQUEST_TIME",
      "SEE_MENU",
      "SIGN_UP",
      "JOIN_LIVE_VIDEO",
    ];
    function s(t, n, r) {
      var a = o("AdsLinkTypeUtils").isInstagramLiveWhatsappLinkTypeSelected(
          n,
          r,
        ),
        i = o("AdsLinkTypeUtils").isInstagramLiveVideoDestinationInEffect(n, r);
      return t.filter(function (t) {
        return (
          (!e.includes(t.name) || (t.name === "WHATSAPP_MESSAGE" && a)) &&
          (t.name !== "WATCH_LIVE_VIDEO" || i)
        );
      });
    }
    l.default = s;
  },
  98,
);
