__d(
  "adsAdsManagerWABASelector",
  [
    "adsBusinessWABAV2BootloadedSelector",
    "adsCreateSelector",
    "filterAdsManagerWABAV2",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsBusinessWABAV2BootloadedSelector")],
        function (t) {
          return t.mapValue(function (e) {
            return r("filterAdsManagerWABAV2")(e != null ? e : []);
          });
        },
        { name: i.id + ".adsAdsManagerWABASelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
