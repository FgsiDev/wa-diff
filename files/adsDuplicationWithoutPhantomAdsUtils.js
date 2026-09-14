__d(
  "adsDuplicationWithoutPhantomAdsUtils",
  ["DateTime", "Timezone", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["campaign", "ad_set"],
      s = 120;
    function u(e, t) {
      if (e == null || t == null) return !1;
      var n = r("DateTime")
        .fromISOString(e, o("Timezone").UTC)
        .secondsUntil(r("DateTime").fromISOString(t, o("Timezone").UTC));
      return n < s;
    }
    function c(e, t) {
      return e === "PAUSED" || t === "completed";
    }
    function d() {
      return (r("gkx")("26688"), r("qex")._("2121") === !0);
    }
    function m() {
      return r("gkx")("8161");
    }
    ((l.ELIGIBLE_DUPLICATION_LEVELS = e),
      (l.wasNeverEditedAfterCreation = u),
      (l.hasStoppedRunning = c),
      (l.isDuplicateWithoutPhantomAdsCheckboxEnabled = d),
      (l.isDuplicateWithoutPhantomAdsQueryEnabled = m));
  },
  98,
);
