__d(
  "AdsUEditorCampaignSetContextualTargetingCategoriesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetContextualTargetingCategoriesActionFlux",
    "adsMgmtLogger",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.eligibilityInformation,
              i = t.value,
              l = r("AdsCampaignRecordAccessors").targeting
                .contextual_targeting_categories;
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              var n = {
                categories: i.map(function (e) {
                  return e.name;
                }),
              };
              return (
                r("adsMgmtLogger")(
                  "instream_only_contextual_targeting.change_topics",
                  {
                    new_value: JSON.stringify(n),
                    campaign_id: t,
                    objective: a.objective,
                  },
                  "user_action",
                ),
                o("AdsPlacementReducerUtils").updatePlacementSpec(
                  l.set(r("immutable").fromJS(i), e),
                )
              );
            });
          },
          r("AdsUEditorCampaignSetContextualTargetingCategoriesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
