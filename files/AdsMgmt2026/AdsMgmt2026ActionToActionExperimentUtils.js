__d(
  "AdsMgmt2026ActionToActionExperimentUtils",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("3482") || r("gkx")("7563");
    }
    function s() {
      return r("gkx")("3482") || r("gkx")("7577");
    }
    function u() {
      return r("gkx")("6850");
    }
    function c() {
      return r("gkx")("6860");
    }
    function d() {
      return !0;
    }
    function m() {
      return r("justknobx")._("1594");
    }
    function p() {
      return s() && !r("justknobx")._("3395");
    }
    ((l.getIsAccountInA2A = e),
      (l.getIsAccountInA2AWithoutExposure = s),
      (l.getIsAccountInA2AMar2026 = u),
      (l.getIsAccountInA2AMar2026WithoutExposure = c),
      (l.getIsA2AAccountLevelCheckEnabled = d),
      (l.getIsSwitchA2AFlagAnchorAttributionSettingEnabled = m),
      (l.getIsAnchorEventsEnabled = p));
  },
  98,
);
