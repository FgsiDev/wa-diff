__d(
  "AdsConvergenceAdgroupPluginResolver",
  [
    "AdsConvergenceAdgroupPluginType",
    "AdsConvergenceAdgroupPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsConvergenceAdgroupPlugins").getArray();
      }, o("AdsConvergenceAdgroupPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
