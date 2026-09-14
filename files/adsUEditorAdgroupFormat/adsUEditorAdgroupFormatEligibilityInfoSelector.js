__d(
  "adsUEditorAdgroupFormatEligibilityInfoSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsEmptyValue",
    "AdsSAFRSelectors",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupsAreASASelectors",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsIsIGLoginSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorCampaignDestinationTypeSelector",
    "adsUEditorCampaignIsCollaborativeAdsSelector",
    "adsUEditorCampaignIsRetargetingSelector",
    "adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector",
    "adsUEditorCampaignSomeHaveOfferSelector",
    "adsUEditorCampaignsOptimizationGoalsSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorIsClickToMarketplaceAdgroupSelector",
    "adsUEditorIsCreationPackageSelector",
    "adsUEditorIsCreationPackageWebTrafficSelector",
    "adsUEditorIsDCOAdgroupSelector",
    "adsUEditorProductCatalogVerticalSelector",
    "adsUEditorRFCampaignHaveStoriesCarouselSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [
          (e = o("AdsUEditorSelectors")).campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.product_set_id.get,
          ),
          e.adgroup.bulkByAccessor(
            r("AdsAdgroupRecordAccessors").creative.product_set_id.get,
          ),
        ],
        function (t, n) {
          return t instanceof r("AdsEmptyValue") ? n : t;
        },
        { name: i.id + ".bulkProductSetIDSelector" },
      ),
      u = r("adsCreateSelector")(
        [
          o("adsUEditorCampaignDestinationTypeSelector")
            .adsUEditorCampaignDestinationTypeSelector,
        ],
        function (t) {
          return o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(t);
        },
        {
          name:
            i.id + ".adsUEditorAdgroupIsClickToMessagingDestinationSelector",
        },
      ),
      c = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup);
          });
        },
        { name: i.id + ".adsUEditorAdgroupIsExistingPostAdSelector" },
      ),
      d = r("adsCreateStructuredSelector")(
        {
          account: r("adsUEditorAccountSelector"),
          bulkCampaignDestination: e.campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").destination_type.get,
          ),
          bulkProductSetID: s,
          bulkPlacePageSetID: e.campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.place_page_set_id
              .get,
          ),
          bulkBuyingType: e.campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").buying_type.get,
          ),
          catalogVertical: r("adsUEditorProductCatalogVerticalSelector"),
          hasOffer: r("adsUEditorCampaignSomeHaveOfferSelector"),
          hostID: r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          isASACampaign: o("AdsUEditorCampaignGroupsAreASASelectors")
            .areSomeCampaignGroupsASASelector,
          isSAIPAllowAllOptions: o(
            "adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector",
          ).adsUEditorCampaignSAIPAllowAllOptionsEligibleSelector,
          isDCOAdgroup: r("adsUEditorIsDCOAdgroupSelector"),
          isReelsTrendingAdsEnabled: e.campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").is_reels_trending_ads_enabled
              .get,
          ),
          isRetargeting: r("adsUEditorCampaignIsRetargetingSelector"),
          isSBGConversionAcquisitionCreationPackage: o(
            "adsUEditorIsCreationPackageSelector",
          ).isSBGConversionAcquisitionCreationPackageSelector,
          isWebTrafficCreationPackage: o(
            "adsUEditorIsCreationPackageWebTrafficSelector",
          ).isSBSWebTrafficCreationPackageSelector,
          isCollaborativeAdCampaign: r(
            "adsUEditorCampaignIsCollaborativeAdsSelector",
          ),
          objective: e.campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").objective.get,
          ),
          full_funnel_objective: e.campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null
              ? void 0
              : t.full_funnel_objective;
          }),
          optimizationGoals: r("adsUEditorCampaignsOptimizationGoalsSelector"),
          placementSpecs: o("AdsUEditorCampaignSelectors").placementSpecs,
          promotedObjectType: o(
            "AdsUEditorAdgroupBulkSelectors",
          ).selectorByAdObjectsFn(
            o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
          ),
          promotedObjectTypeVariation: e.campaign.bulkByAccessor(
            o("AdsAPICampaignRecordUtils")
              .getDerivedPromotedObjectTypeWithVariation,
          ),
          isClickToMarketplaceEnabled: r(
            "adsUEditorIsClickToMarketplaceAdgroupSelector",
          ),
          isRFStoriesCarouselFormatSelected: r(
            "adsUEditorRFCampaignHaveStoriesCarouselSelector",
          ),
          adsFormatSAFRConfig: o("AdsSAFRSelectors").adsFormatConfigSelector,
          adgroupIDs: r("adsUEditorSelectedAdgroupIDsSelector"),
          isIGLogin: r("adsIsIGLoginSelector"),
          isAdAndMessageMarketingCampaign: r(
            "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
          ),
          isClickToMessagingDestination: u,
          isExistingPostAd: c,
        },
        i.id + ".adsUEditorAdgroupFormatEligibilityInfoSelector",
      ),
      m = d;
    l.default = m;
  },
  98,
);
