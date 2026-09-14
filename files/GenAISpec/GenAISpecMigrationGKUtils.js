__d(
  "GenAISpecMigrationGKUtils",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11719");
    }
    function s() {
      return r("gkx")("12320");
    }
    function u() {
      return r("justknobx")._("4405");
    }
    function c() {
      return r("gkx")("9080");
    }
    function d() {
      return r("gkx")("10678");
    }
    function m() {
      return r("justknobx")._("5268");
    }
    function p() {
      return r("justknobx")._("5719");
    }
    function _() {
      return r("gkx")("17548");
    }
    ((l.isMSSOnlyWriteEnabled = e),
      (l.isDualWriteEnabled = s),
      (l.isVideoDualWriteEnabled = u),
      (l.isMSSReadEnabled = c),
      (l.isDualReadEnabled = d),
      (l.isMSSReadDisabledForAllOptedInImages = m),
      (l.isSeedImageDisabledForNonMMU = p),
      (l.shouldSkipGenAICagOriginWrite = _));
  },
  98,
);
