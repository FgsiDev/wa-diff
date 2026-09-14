__d(
  "adsMessageMarketingWabaListSelector",
  ["adsCreateSelector", "adsMessageMarketingWABASelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsMessageMarketingWABASelector")],
      function (t) {
        return s(t);
      },
      { name: i.id + ".adsMessageMarketingWabaListSelector" },
    );
    function s(e) {
      var t;
      return (t = e.getValue()) != null ? t : [];
    }
    ((l.adsMessageMarketingWabaList = s),
      (l.adsMessageMarketingWabaListSelector = e));
  },
  98,
);
