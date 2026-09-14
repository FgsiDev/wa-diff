__d(
  "adsIsIGLoginSelector",
  ["AdsAccountStore", "AdsManagerIGLoginUtils", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          if (t.hasValue()) {
            var e = t.getValueEnforcing();
            return o("AdsManagerIGLoginUtils").getIsIGLogin(e);
          }
          return !1;
        },
        { name: i.id + ".adsIsIGLoginSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
