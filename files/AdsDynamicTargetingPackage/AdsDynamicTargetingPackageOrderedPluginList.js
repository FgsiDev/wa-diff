__d(
  "AdsDynamicTargetingPackageOrderedPluginList",
  ["AdsDynamicTargetingPackagePlugins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "VIEWED_ADDED_TO_CART_NOT_PURCHASED",
        "ADDED_TO_CART_NOT_PURCHASED",
        "UP_SELL",
        "CROSS_SELL",
        "CUSTOM_COMBINATION",
        "EXCLUDE_PURCHASED",
        "NO_EXCLUSION",
        "EXCLUDE_CUSTOM",
      ],
      s = r("AdsDynamicTargetingPackagePlugins").sort(function (t, n) {
        return e.indexOf(t.key) - e.indexOf(n.key);
      }),
      u = s;
    l.default = u;
  },
  98,
);
