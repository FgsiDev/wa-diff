__d(
  "adsCampaignPlacementResetMutator",
  ["AdsAppUtils", "AdsMutators", "AdsPlacementReducerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(e, t);
        },
        function (e) {
          return r("AdsAppUtils").isAppObjective(
            t.objective,
            t.promotedObjectType,
          )
            ? o("AdsPlacementReducerUtils").mergeMobilePlacementData(e, t)
            : e;
        },
        function (e) {
          return o("AdsPlacementReducerUtils").mergeBrandSafetyPlacementData(
            e,
            t,
          );
        },
      )(e);
    }
    l.default = e;
  },
  98,
);
