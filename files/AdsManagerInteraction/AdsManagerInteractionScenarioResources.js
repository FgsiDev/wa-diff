__d(
  "AdsManagerInteractionScenarioResources",
  ["APOfflineDataWithOverride"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        t === void 0 && (t = null),
        (n = o("APOfflineDataWithOverride").getResources(e, t)) != null ? n : []
      );
    }
    function s(t, n, r) {
      (r === void 0 && (r = null), n.preloadResources(e(t, r)));
    }
    function u(t, n) {
      return (n === void 0 && (n = null), e(t, n).length > 0);
    }
    ((l.preloadResourcesInEntrypoint = s),
      (l.hasResourcesForInteraction = u),
      (l.getStaticResources = e));
  },
  98,
);
