__d(
  "adsUEditorCrepePackageIDSelector",
  ["adsCreateSelector", "adsUEditorSelectedPackageConfigSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedPackageConfigSelector")],
        function (t) {
          return t.mapValue(function (e) {
            return e == null ? void 0 : e.package_id;
          });
        },
        { name: i.id + ".adsUEditorCrepePackageIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
