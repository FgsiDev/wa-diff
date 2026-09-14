__d(
  "adsUEditorCampaignTargetingCategorySelector",
  [
    "AdsCFNewCampaignFBID",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignRecordAccessors",
    "AdsDynamicTargetingCategories",
    "AdsDynamicTargetingCategoryUIStore",
    "AdsEmptyValue",
    "AdsUEditorSelectors",
    "AdsUEditorUniformProductCatalogVerticalSelectors",
    "CatalogVertical",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
        r("AdsCampaignDraftFragmentStore"),
        function (e) {
          return (
            e.includes(r("AdsCFNewCampaignFBID")) ||
            r("AdsCampaignDraftFragmentStore").isNew(e)
          );
        },
      ),
      s = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").targeting.dynamic_audience_ids.get,
          ),
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").id.get,
          ),
          r("adsStoreToSelector")(r("AdsDynamicTargetingCategoryUIStore")),
          o("AdsUEditorUniformProductCatalogVerticalSelectors")
            .adsUEditorCampaignUniformProductCatalogVerticalSelector,
          e,
        ],
        function (t, n, o, a, i) {
          var e = !(t instanceof r("AdsEmptyValue"));
          if (n instanceof r("AdsEmptyValue"))
            return e
              ? r("AdsDynamicTargetingCategories").RETARGETING
              : r("AdsDynamicTargetingCategories").PROSPECTING;
          var l = n.getValues().some(function (t) {
            var n = o.get(t);
            return n != null
              ? n === r("AdsDynamicTargetingCategories").RETARGETING
              : i(t) && a !== r("CatalogVertical").NONE
                ? !1
                : e;
          });
          return l
            ? r("AdsDynamicTargetingCategories").RETARGETING
            : r("AdsDynamicTargetingCategories").PROSPECTING;
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
