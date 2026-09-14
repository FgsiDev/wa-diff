__d(
  "isWACACustomAudience",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.rule_v2) != null
            ? t
            : e == null
              ? void 0
              : e.rule;
      return n == null
        ? !1
        : n.includes("WhatsappMessageDelivery") ||
            n.includes("CtaWhatsappClick");
    }
    i.default = e;
  },
  66,
);
