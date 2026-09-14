__d(
  "adsUEditorSelectedPackageConfigSelector",
  [
    "adsCreateSelector",
    "adsPECrepePackageConfigSelector",
    "adsUEditorSelectedPackageConfigIDLoadObjectSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedPackageConfigIDLoadObjectSelector"),
          r("adsPECrepePackageConfigSelector"),
        ],
        function (t, n) {
          return t.mapValue(function (e) {
            return e == null ? null : n(e);
          });
        },
        { name: i.id + ".adsUEditorSelectedPackageConfigSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
