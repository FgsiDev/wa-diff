__d(
  "adsTargetingLocationPromotedPageIDSelector",
  [
    "AdsBulkValueUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsEmptyValue",
    "AdsUEditorSelectors",
    "AdsUniformValue",
    "adsCreateSelector",
    "adsUEditorODAXCampaignPageSetParentPageIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").promoted_object.page_id.get,
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.page_id.get,
          ),
          r("adsUEditorODAXCampaignPageSetParentPageIDSelector"),
        ],
        function (t, n, a) {
          var e = o("AdsBulkValueUtils").getUniformValue(t);
          if (e != null) return new (r("AdsUniformValue"))(e);
          var i = o("AdsBulkValueUtils").getUniformValue(n);
          return i != null
            ? new (r("AdsUniformValue"))(i)
            : a != null
              ? new (r("AdsUniformValue"))(a)
              : r("AdsEmptyValue").instance();
        },
        { name: i.id + ".adsTargetingLocationPromotedPageIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
