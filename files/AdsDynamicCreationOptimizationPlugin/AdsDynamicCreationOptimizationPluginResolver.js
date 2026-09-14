__d(
  "AdsDynamicCreationOptimizationPluginResolver",
  [
    "AdsDynamicCreationOptimizationPluginType",
    "AdsDynamicCreationOptimizationPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsDynamicCreationOptimizationPlugins").getArray();
      }, o("AdsDynamicCreationOptimizationPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
