__d(
  "adsMgmtGetInsightsTableActionsOptionalData",
  ["adsMgmtCurrentNavigationEvent", "adsMgmtPreviousNavigationEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        { action_type: e },
        t,
        r("adsMgmtPreviousNavigationEvent")(),
        r("adsMgmtCurrentNavigationEvent")(),
      );
    }
    l.default = e;
  },
  98,
);
