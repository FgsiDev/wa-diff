__d(
  "getUserSettings",
  ["AdsAccountSettingsIdProvider", "adsUserSettingsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("AdsAccountSettingsIdProvider").toFluxSelector()(),
        n = o("adsUserSettingsSelector").adsUserSettingsSelector(),
        a = t != null ? ((e = n(t)) == null ? void 0 : e.getValue()) : null;
      return a;
    }
    l.default = e;
  },
  98,
);
