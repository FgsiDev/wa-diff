__d(
  "AdsAdgroupCreativePluginResolver",
  [
    "AdsAdgroupCreativePluginType",
    "AdsAdgroupCreativePlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsAdgroupCreativePlugins").getArray();
      }, o("AdsAdgroupCreativePluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
