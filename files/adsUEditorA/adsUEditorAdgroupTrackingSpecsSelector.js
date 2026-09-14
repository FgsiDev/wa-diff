__d(
  "adsUEditorAdgroupTrackingSpecsSelector",
  ["adsCreateSelector", "adsUEditorSelectedAdgroupsSelector", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupsSelector")],
        function (t) {
          return r("immutable").Map(
            t.map(function (e) {
              var t = e.id,
                n = e.tracking_specs && e.tracking_specs.toJS();
              return [t, n];
            }),
          );
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
