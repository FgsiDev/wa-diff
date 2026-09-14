__d(
  "shouldShowUnknownAgeSelector",
  [
    "WAMOStatusAdsManagerUtils",
    "adsChooseSelector",
    "adsCreateSelector",
    "isOnlyWAMMSelector",
    "isWAMOStatusSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("isWAMOStatusSelector"), r("isOnlyWAMMSelector")],
        function (t, n) {
          return t || n;
        },
        { name: i.id + ".shouldShowUnknownAgeSelector" },
      ),
      s = r("adsChooseSelector")(
        function () {
          return (
            o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() ||
            o(
              "WAMOStatusAdsManagerUtils",
            ).isAdAccountEligibleForWAMMUnknownAge()
          );
        },
        e,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".shouldShowUnknownAgeSelectorGated",
      ),
      u = s;
    l.default = u;
  },
  98,
);
