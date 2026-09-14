__d(
  "AdsUEditorCampaignLeadAdsCLOMutators",
  ["AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsCampaignRecordAccessors")).promoted_object
          .lead_ads_offsite_conversion_type.delete,
        t.promoted_object.lead_ads_form_event_source_type.delete,
        t.promoted_object.lead_ads_custom_event_type.delete,
        t.promoted_object.lead_ads_custom_event_str.delete,
        t.promoted_object.anchor_event_config.delete,
        t.promoted_object.multi_event_conversion_info.delete,
        t.promoted_object.lead_ads_follow_up_event.delete,
        t.promoted_object.lead_ads_quality_volume_setting.delete,
      )(e);
    }
    l.clearLeadAdsCLOConversionFields = e;
  },
  98,
);
