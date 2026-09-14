__d(
  "AdsMobileAppInstallsAdgroupCreativePluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsMobileAppAdgroupCreativePluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsMobileAppAdgroupCreativePluginCommon"),
        {
          getSupportedMediaFormats: function (t) {
            var e = t.adgroup;
            return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
              ? new Set(["IMAGE", "CAROUSEL"])
              : r(
                  "AdsMobileAppAdgroupCreativePluginCommon",
                ).getSupportedMediaFormats(t);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
