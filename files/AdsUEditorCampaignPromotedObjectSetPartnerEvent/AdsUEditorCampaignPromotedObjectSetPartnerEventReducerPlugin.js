__d(
  "AdsUEditorCampaignPromotedObjectSetPartnerEventReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPartnerPlatformEventsUtils",
    "AdsUEditorCampaignPromotedObjectSetPartnerEventActionFlux",
    "AdsUEditorCampaignReducerUtils",
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
              return (
                (t = r(
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
                t
              );
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetPartnerEventActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
