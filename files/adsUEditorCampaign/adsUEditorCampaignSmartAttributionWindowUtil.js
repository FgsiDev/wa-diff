__d(
  "adsUEditorCampaignSmartAttributionWindowUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return t == null
        ? null
        : e
            .get({
              appID: t,
              optimizationGoal: n,
              appEventOptimizationType: "",
            })
            .getValue();
    }
    i.getSmartAttributionWindowData = e;
  },
  66,
);
