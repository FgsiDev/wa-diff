__d(
  "adsCallToActionFilterTypesForReminderAds",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set([
        "GET_OFFER",
        "GET_SHOWTIMES",
        "LEARN_MORE",
        "LISTEN_NOW",
        "SEE_DETAILS",
        "SHOP_NOW",
        "SIGN_UP",
        "SUBSCRIBE",
        "JOIN_LIVE_VIDEO",
        "WATCH_MORE",
      ]),
      s = r("immutable").Set(
        [].concat(Array.from(e), [
          "NO_BUTTON",
          "APPLY_NOW",
          "BOOK_TRAVEL",
          "CONTACT_US",
          "DOWNLOAD",
          "GET_QUOTE",
          "ORDER_NOW",
          "PLAY_GAME",
          "REQUEST_TIME",
          "SEE_MENU",
        ]),
      );
    function u(t) {
      return t.filter(function (t) {
        return e.has(t.name);
      });
    }
    function c(e) {
      return e == null || s.has(e);
    }
    ((l.adsCallToActionFilterTypesForReminderAds = u),
      (l.isCTATypeCompatibleWithUpcomingEvent = c));
  },
  98,
);
