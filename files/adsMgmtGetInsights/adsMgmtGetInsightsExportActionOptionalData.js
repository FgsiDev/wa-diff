__d(
  "adsMgmtGetInsightsExportActionOptionalData",
  ["adsMgmtCurrentNavigationEvent", "adsMgmtSubsectionForCreativeOverview"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        n === void 0 && (n = {}),
        babelHelpers.extends(
          { action_type: e, scenario_duration: t },
          n,
          r("adsMgmtCurrentNavigationEvent")(),
          r("adsMgmtSubsectionForCreativeOverview")(),
        )
      );
    }
    l.default = e;
  },
  98,
);
