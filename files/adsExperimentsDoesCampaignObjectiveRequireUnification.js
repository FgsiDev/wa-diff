__d(
  "adsExperimentsDoesCampaignObjectiveRequireUnification",
  ["AdsAPIObjectives", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Set([
        (e = r("AdsAPIObjectives")).APP_INSTALLS,
        e.LEAD_GENERATION,
        e.OUTCOME_LEADS,
        e.OUTCOME_SALES,
      ]);
    function u(e) {
      return s.has(e);
    }
    l.default = u;
  },
  98,
);
