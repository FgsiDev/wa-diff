__d(
  "adsUEditorAdgroupSetPageReducerExtraDataSelector",
  [
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupSelectors",
    "adsCreateStructuredSelector",
    "adsPagesInAuthorizationSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupDefaultPagePostSelector",
    "adsUEditorAdgroupHasInstagramPlacementsSelector",
    "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
    "adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
    "adsUEditorAdgroupIsCatalogSelectedSelector",
    "adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector",
    "adsUEditorAdgroupLinkPostFormatSelector",
    "adsUEditorAdgroupProductCatalogIDSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "adsUEditorIsPoliticalCategoryAvailableSelector",
    "adsUEditorUniformBrandedContentSBCAAutoCheckBCSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStructuredSelector")(
        {
          account: r("adsUEditorAccountSelector"),
          defaultPagePost: r("adsUEditorAdgroupDefaultPagePostSelector"),
          getPage: r("AdsPageStore").getSelector,
          hasInstagramPlacements: r(
            "adsUEditorAdgroupHasInstagramPlacementsSelector",
          ),
          isConvertedFromSPA: r(
            "adsUEditorUniformBrandedContentSBCAAutoCheckBCSelector",
          ),
          isPolitcalCategoryAvailable: r(
            "adsUEditorIsPoliticalCategoryAvailableSelector",
          ),
          placementSpecsMap: o("AdsUEditorAdgroupSelectors").placementSpecsMap,
          pagesInAuthorizations: r("adsPagesInAuthorizationSelector"),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          regulatedCategories: o(
            "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
          ).adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          destinationLinkType: o("adsUeditorBulkSelectedLinkTypeSelector")
            .adsUEditorBulkSelectedLinkTypeSelector,
          isShopsAdsIncentiveProgram: o(
            "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
          ).adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector,
          isCTXBrandedContentEligible: r(
            "adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
          ),
          isPVPartnershipAdsEligible: r(
            "adsUEditorAdgroupIsPVPartnershipAdsEligibleSelector",
          ),
          adgroupProductCatalogIDLoadObject: r(
            "adsUEditorAdgroupProductCatalogIDSelector",
          ),
          isCatalogSelected: r("adsUEditorAdgroupIsCatalogSelectedSelector"),
          linkPostFormat: r("adsUEditorAdgroupLinkPostFormatSelector"),
          isPartnershipAdsToggleOn: r(
            "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
          ),
        },
        i.id + ".adsUEditorAdgroupSetPageReducerExtraDataSelector",
      ),
      s = e;
    l.default = s;
  },
  98,
);
