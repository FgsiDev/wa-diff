__d(
  "AdsUEditorCampaignDynamicAudienceBatchCreatedReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDynamicAudienceBatchCreatedActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return t.isExcludedDynamicAudience
                ? o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.excluded_dynamic_audience_ids.set(
                      r("immutable").List(t.dynamicAudienceIds),
                    ),
                    r("AdsCampaignRecordAccessors").targeting
                      .dynamic_audience_ids.delete,
                  )(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.dynamic_audience_ids.set(
                      r("immutable").List(t.dynamicAudienceIds),
                    ),
                    r("AdsCampaignRecordAccessors").targeting
                      .excluded_dynamic_audience_ids.delete,
                  )(e);
            });
          },
          o("AdsUEditorCampaignDynamicAudienceBatchCreatedActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
