__d(
  "AdsUEditorCampaignMessengerPromotedObjectSetPartnerEventReducerPlugin",
  [
    "AccountAttributionEvent",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignMessengerPromotedObjectSetPartnerEventActionFlux",
    "AdsUEditorCampaignPartnerPlatformEventsUtils",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.selectedConversionEventType,
              i = t.selectedPartnerAccountLinkingID;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = e;
              if (
                ((t = r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.pixel_id.delete(t)),
                (t =
                  a ===
                  o("AdsUEditorCampaignPartnerPlatformEventsUtils")
                    .ConversionEventTypeOptions.PARTNER_PLATFORM_EVENTS
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.partner_account_linking_id.set(i, t)
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.partner_account_linking_id.delete(t)),
                (t =
                  a ===
                  o("AdsUEditorCampaignPartnerPlatformEventsUtils")
                    .ConversionEventTypeOptions.PARTNER_PLATFORM_EVENTS
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.custom_event_type.set("PURCHASE", t)
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.custom_event_type.delete(t)),
                a ===
                  o("AdsUEditorCampaignPartnerPlatformEventsUtils")
                    .ConversionEventTypeOptions.PARTNER_PLATFORM_EVENTS)
              ) {
                t = r("AdsCampaignRecordAccessors").optimization_goal.set(
                  r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                  t,
                );
                var n = [
                  {
                    event_type: r("AccountAttributionEvent").CLICK_THROUGH,
                    window_days: 7,
                  },
                  {
                    event_type: r("AccountAttributionEvent").VIEW_THROUGH,
                    window_days: 1,
                  },
                ];
                t = r("AdsCampaignRecordAccessors").attribution_spec.set(
                  r("immutable").fromJS(n),
                  t,
                );
              }
              return t;
            });
          },
          o(
            "AdsUEditorCampaignMessengerPromotedObjectSetPartnerEventActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
