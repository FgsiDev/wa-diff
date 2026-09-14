__d(
  "AdsUEditorCampaignWebsitePromotedObjectSelectors",
  [
    "AdsCampaignRecordAccessors",
    "AdsUEditorSelectors",
    "AdsUniformValue",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("adsCreateStructuredSelector")(
        {
          anchor_event_config: (u = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).campaign.bulkByAccessorToJS(
              function (e) {
                var t;
                return (t = e.promoted_object) == null
                  ? void 0
                  : t.anchor_event_config;
              },
            ),
          ),
          custom_conversion_id: u(
            e.campaign.bulkByAccessor(
              (s = r("AdsCampaignRecordAccessors")).promoted_object
                .custom_conversion_id.get,
            ),
          ),
          custom_event_str: u(
            e.campaign.bulkByAccessor(s.promoted_object.custom_event_str.get),
          ),
          custom_event_type: u(
            e.campaign.bulkByAccessor(s.promoted_object.custom_event_type.get),
          ),
          dataset_split_ids: u(
            e.campaign.bulkByAccessor(s.promoted_object.dataset_split_ids.get),
          ),
          lead_ads_custom_event_str: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.lead_ads_custom_event_str.get,
            ),
          ),
          lead_ads_custom_event_type: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.lead_ads_custom_event_type.get,
            ),
          ),
          lead_ads_form_event_source_type: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.lead_ads_form_event_source_type.get,
            ),
          ),
          lead_ads_offsite_conversion_type: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.lead_ads_offsite_conversion_type.get,
            ),
          ),
          mcme_conversion_id: u(
            e.campaign.bulkByAccessor(s.promoted_object.mcme_conversion_id.get),
          ),
          multi_event_conversion_info: u(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.multi_event_conversion_info;
            }),
          ),
          multi_event_product: u(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.multi_event_product;
            }),
          ),
          offsite_conversion_event_id: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.offsite_conversion_event_id.get,
            ),
          ),
          pixel_aggregation_rule: u(
            e.campaign.bulkByAccessor(
              s.promoted_object.pixel_aggregation_rule.get,
            ),
          ),
          pixel_id: u(
            e.campaign.bulkByAccessor(s.promoted_object.pixel_id.get),
          ),
          pixel_rule: u(
            e.campaign.bulkByAccessor(s.promoted_object.pixel_rule.get),
          ),
          post_conversions: u(
            e.campaign.bulkByAccessor(s.promoted_object.post_conversions.get),
          ),
          product_set_id: u(
            e.campaign.bulkByAccessor(s.promoted_object.product_set_id.get),
          ),
          retention_days: u(
            e.campaign.bulkByAccessor(s.promoted_object.retention_days.get),
          ),
        },
        i.id + ".websitePromotedObjectSelector",
      ),
      d = r("adsCreateSelector")(
        [
          r("adsCreateStructuredSelector")(
            {
              customConversionID: e.campaign.bulkByAccessor(
                s.promoted_object.custom_conversion_id.get,
              ),
              customEventType: e.campaign.bulkByAccessor(
                s.promoted_object.custom_event_type.get,
              ),
              pixelID: e.campaign.bulkByAccessor(
                s.promoted_object.pixel_id.get,
              ),
              pixelRule: e.campaign.bulkByAccessor(
                s.promoted_object.pixel_rule.get,
              ),
            },
            i.id,
          ),
        ],
        function (t) {
          var e = t.customConversionID,
            n = t.customEventType,
            o = t.pixelID,
            a = t.pixelRule;
          return (
            o instanceof r("AdsUniformValue") &&
            n instanceof r("AdsUniformValue") &&
            a instanceof r("AdsUniformValue") &&
            e instanceof r("AdsUniformValue")
          );
        },
        { name: i.id + ".isUniformSelector" },
      );
    ((l.websitePromotedObjectSelector = c), (l.isUniformSelector = d));
  },
  98,
);
