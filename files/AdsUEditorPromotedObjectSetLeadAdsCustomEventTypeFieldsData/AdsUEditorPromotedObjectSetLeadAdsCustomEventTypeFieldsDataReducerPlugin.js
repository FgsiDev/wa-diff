__d(
  "AdsUEditorPromotedObjectSetLeadAdsCustomEventTypeFieldsDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsCustomEventTypeFieldsDataActionFlux",
    "immutable",
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
              o("AdsMutators").chain(function (e) {
                return o("AdsMutators").chain(
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.lead_ads_custom_event_type.set(
                    t.leadAdsCustomEventType,
                  ),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.lead_ads_custom_event_str.set(
                    t.leadAdsCustomEventTypeStr,
                  ),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.multi_event_conversion_info.set(
                    t.leadAdsCustomEventType != null
                      ? r("immutable").fromJS({
                          event_type: t.leadAdsCustomEventType,
                          custom_event_name: t.leadAdsCustomEventTypeStr,
                        })
                      : null,
                  ),
                )(e);
              }),
            );
          },
          r(
            "AdsUEditorPromotedObjectSetLeadAdsCustomEventTypeFieldsDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
