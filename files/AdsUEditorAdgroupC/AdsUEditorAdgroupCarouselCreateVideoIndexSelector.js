__d(
  "AdsUEditorAdgroupCarouselCreateVideoIndexSelector",
  [
    "AdsUEditorAdgroupCarouselCreateVideoIndexProvider",
    "adsCreateSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r(
            "AdsUEditorAdgroupCarouselCreateVideoIndexProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          var e = n.carouselCreateVideoIndexMap;
          return e.get(t[0]);
        },
        { name: i.id + ".AdsUEditorAdgroupCarouselCreateVideoIndexSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
