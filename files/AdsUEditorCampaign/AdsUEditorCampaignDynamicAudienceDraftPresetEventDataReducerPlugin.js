__d(
  "AdsUEditorCampaignDynamicAudienceDraftPresetEventDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsDynamicTargetingCategories",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.targetingCategory ===
              r("AdsDynamicTargetingCategories").PROSPECTING &&
              t.audiencePreset === "EMPTY_AUDIENCE"
              ? o("AdsMutators").mutateEach(e, t.ids, function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.excluded_dynamic_audience_ids.delete(e);
                })
              : e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
