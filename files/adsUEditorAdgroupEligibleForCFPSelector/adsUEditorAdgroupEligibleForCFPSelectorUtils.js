__d(
  "adsUEditorAdgroupEligibleForCFPSelectorUtils",
  ["AdsAutomaticFlowUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.map(function (e) {
        return o("AdsAutomaticFlowUtils").isEligibleForAutomaticFlowLite(t, e);
      });
      return s(r, n);
    }
    function s(e, t) {
      return t
        ? !0
        : e.every(function (e) {
            return e === !0;
          });
    }
    ((l.adsUEditorAdgroupEligibleForCFP = e),
      (l.adsUEditorAdgroupEligibleForCFPHelper = s));
  },
  98,
);
