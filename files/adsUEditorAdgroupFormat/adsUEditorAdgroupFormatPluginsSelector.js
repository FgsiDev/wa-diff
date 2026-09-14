__d(
  "adsUEditorAdgroupFormatPluginsSelector",
  [
    "AdsFormatPluginUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupFormatEligibilityInfoSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdgroupFormatEligibilityInfoSelector")],
        function (t) {
          return o("AdsFormatPluginUtils").getOrderedAndEnabledFormatPlugins(t);
        },
        { name: i.id + ".adsUEditorAdgroupFormatPluginsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
