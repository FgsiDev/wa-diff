__d(
  "AdsPECrepePackageDataProviderPlugin",
  ["AdsPECrepePackageDataManager", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(
          o("AdsPECrepePackageDataManager").loadPackageData,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
