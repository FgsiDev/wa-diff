__d(
  "A2UIAssetIcons",
  ["ix", "fbicon"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "app-whatsapp"
        ? o("fbicon")._(s("726969"), 20)
        : e === "briefcase"
          ? o("fbicon")._(s("481905"), 20)
          : e === "envelope"
            ? o("fbicon")._(s("495079"), 20)
            : e === "messages"
              ? o("fbicon")._(s("542883"), 20)
              : null;
    }
    function u(e) {
      return e == null
        ? null
        : e === "CONTENT"
          ? o("fbicon")._(s("481799"), 20)
          : o("fbicon")._(s("481905"), 20);
    }
    function c(e) {
      switch (e) {
        case "red":
          return o("fbicon")._(s("478231"), 12);
        case "gray":
          return o("fbicon")._(s("1595891"), 12);
        default:
          return o("fbicon")._(s("477812"), 12);
      }
    }
    ((l.getChoiceIcon = e),
      (l.getPlaceholderIcon = u),
      (l.getStatusBadgeIcon = c));
  },
  98,
);
