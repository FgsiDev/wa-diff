__d(
  "AdsUEditorCampaignPlacementApplyDefaultsReducerPlugin",
  [
    "AdsAppUtils",
    "AdsCampaignRawSpecUtils",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPlacementUtils",
    "AdsUEditorCampaignPlacementApplyDefaultsActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null) return e;
      var n = r("AdsPlacementUtils").getDefaultCampaignPlacement(
          babelHelpers.extends({}, t),
        ),
        a = o("AdsCampaignRawSpecUtils").setCampaignPlacement(e, n);
      return (
        r("AdsAppUtils").isAppObjective(t.objective, t.promotedObjectType) &&
          (a = o("AdsPlacementReducerUtils").mergeMobilePlacementData(a, t)),
        (a = o("AdsPlacementReducerUtils").mergeBrandSafetyPlacementData(a, t)),
        a
      );
    }
    var s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (t, n) {
            var r = n.campaignIDs,
              a = n.eligibilityInformationMap;
            return o("AdsMutators").mutateEach(t, r, function (t) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                e(t, a.get(t.id)),
              );
            });
          },
          o("AdsUEditorCampaignPlacementApplyDefaultsActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
