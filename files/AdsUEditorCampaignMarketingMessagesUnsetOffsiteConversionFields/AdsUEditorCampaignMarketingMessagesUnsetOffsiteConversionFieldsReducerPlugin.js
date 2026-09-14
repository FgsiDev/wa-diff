__d(
  "AdsUEditorCampaignMarketingMessagesUnsetOffsiteConversionFieldsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignMarketingMessagesUnsetOffsiteConversionFieldsActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").promoted_object
                    .custom_event_type.delete,
                  r("AdsCampaignRecordAccessors").promoted_object.pixel_id
                    .delete,
                )(e);
              },
            );
          },
          o(
            "AdsUEditorCampaignMarketingMessagesUnsetOffsiteConversionFieldsActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
