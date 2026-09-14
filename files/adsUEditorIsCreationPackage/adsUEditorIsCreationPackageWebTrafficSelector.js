__d(
  "adsUEditorIsCreationPackageWebTrafficSelector",
  [
    "AdsPECrepePackages",
    "adsCreateSelector",
    "adsUEditorCrepePackageIDSelector",
    "adsUEditorSelectedPackageConfigIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedPackageConfigIDSelector")],
        function (t) {
          return t != null;
        },
        { name: i.id + ".adsUEditorIsWebTrafficCreationPackageSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorCrepePackageIDSelector"), e],
        function (t, n) {
          var e = t == null ? void 0 : t.value;
          return (
            n &&
            e != null &&
            [
              o("AdsPECrepePackages").WEB_TRAFFIC_ACQUISITION_PACKAGE_ID,
              o("AdsPECrepePackages")
                .WEB_TRAFFIC_ACQUISITION_POST_ODAX_PACKAGE_ID,
            ].includes(e)
          );
        },
        { name: i.id + ".isSBSWebTrafficCreationPackageSelector" },
      );
    l.isSBSWebTrafficCreationPackageSelector = s;
  },
  98,
);
