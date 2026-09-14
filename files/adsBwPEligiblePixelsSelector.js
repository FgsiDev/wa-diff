__d(
  "adsBwPEligiblePixelsSelector",
  ["adsCreateSelector", "adsSignalsPixelsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsSignalsPixelsSelector")],
        function (t) {
          return t.mapValue(function (e) {
            return e == null
              ? void 0
              : e.filter(function (e) {
                  return e.isBWPEligible;
                });
          });
        },
        { name: i.id + ".adsBwPEligiblePixelsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
