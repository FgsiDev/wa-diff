__d(
  "AdsCanvasAppAdgroupCreativePluginCommon",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new Set(["IMAGE", "CAROUSEL", "VIDEO"]);
    }
    function s() {
      return r("immutable").Set(["app_link"]);
    }
    var u = {
      getSupportedMediaFormats: e,
      getSupportedCallToActiveValueFields: s,
    };
    l.default = u;
  },
  98,
);
