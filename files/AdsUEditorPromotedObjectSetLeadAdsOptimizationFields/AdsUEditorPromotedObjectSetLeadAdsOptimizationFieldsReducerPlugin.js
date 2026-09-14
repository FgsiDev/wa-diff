__d(
  "AdsUEditorPromotedObjectSetLeadAdsOptimizationFieldsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsOptimizationFieldsDataActionFlux",
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
              var n,
                a =
                  (n = e.promoted_object) == null
                    ? void 0
                    : n.lead_ads_form_event_source_type;
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.lead_ads_form_event_source_type.set(
                  t.leadAdsFormEventSourceType,
                ),
                t.adsSignalSourceType === void 0
                  ? function (e) {
                      return e;
                    }
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.ads_signal_source_type.set(
                      t.adsSignalSourceType,
                    ),
                function (e) {
                  return e.merge(s(t, a)(e));
                },
              )(e);
            }),
          );
        },
        o("AdsUEditorPromotedObjectSetLeadAdsOptimizationFieldsDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t) {
      return function (n) {
        if (
          t === "onsite_crm_single_event" &&
          e.leadAdsFormEventSourceType == null
        ) {
          var a;
          return o("AdsMutators").chain(
            (a = r("AdsCampaignRecordAccessors")).promoted_object
              .custom_event_str.delete,
            a.promoted_object.lead_ads_follow_up_event.delete,
            a.promoted_object.page_whatsapp_number_id.delete,
            a.promoted_object.whats_app_business_phone_number_id.delete,
          )(n);
        }
        switch (e.leadAdsFormEventSourceType) {
          case "inferred":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
                .delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .lead_ads_follow_up_event.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .page_whatsapp_number_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .whats_app_business_phone_number_id.delete,
            )(n);
          case "onsite_crm":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
                .delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .lead_ads_follow_up_event.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .page_whatsapp_number_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .whats_app_business_phone_number_id.delete,
            )(n);
          case "onsite_web":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .lead_ads_follow_up_event.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .page_whatsapp_number_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .whats_app_business_phone_number_id.delete,
            )(n);
          case "meta_source":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
                .delete,
              r("AdsCampaignRecordAccessors").promoted_object.custom_event_str
                .delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .offline_conversion_data_set_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .lead_ads_follow_up_event.delete,
            )(n);
          default:
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object
                .lead_ads_follow_up_event.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .page_whatsapp_number_id.delete,
              r("AdsCampaignRecordAccessors").promoted_object
                .whats_app_business_phone_number_id.delete,
            )(n);
        }
      };
    }
    var u = e;
    l.default = u;
  },
  98,
);
