__d(
  "isMessageMarketingCustomAudience",
  [
    "isSubscriberListAudience",
    "isWACACustomAudience",
    "isWASubscriberPoolCustomAudience",
    "isWCACustomAudience",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        o("isSubscriberListAudience").isSubscriberListAudience(e.subtype) ||
        r("isWASubscriberPoolCustomAudience")(e) ||
        (t === !0 && r("isWCACustomAudience")(e)) ||
        (t === !0 && r("isWACACustomAudience")(e))
      );
    }
    l.default = e;
  },
  98,
);
