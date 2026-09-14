__d(
  "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
  ["adsPlacementAssetMutationRemovePlacementFromCustomization"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e == null
        ? null
        : e.filter(function (e) {
            return e.platform != t.platform || e.position != t.position;
          });
    }
    function s(t, n, o, a) {
      return o.reduce(
        function (t, o) {
          var a = t.adgroup,
            i = t.defaultRulePlacements;
          return {
            adgroup: r(
              "adsPlacementAssetMutationRemovePlacementFromCustomization",
            )(a, n, o, i),
            defaultRulePlacements: e(i, o),
          };
        },
        { adgroup: t, defaultRulePlacements: a },
      ).adgroup;
    }
    l.default = s;
  },
  98,
);
