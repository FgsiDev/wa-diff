__d(
  "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataActionFlux",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = t.destinationType,
              l = n.eligibilityInformation;
            return o("AdsMutators").mutateEach(e, a, function (e, t) {
              var n = e,
                a = babelHelpers.extends({}, l, { destinationType: i });
              return (
                (n = o("AdsPlacementReducerUtils").resetPlacement(n, a)),
                r("AdsCampaignRecordAccessors").destination_type.set(i)(n)
              );
            });
          },
          r(
            "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
