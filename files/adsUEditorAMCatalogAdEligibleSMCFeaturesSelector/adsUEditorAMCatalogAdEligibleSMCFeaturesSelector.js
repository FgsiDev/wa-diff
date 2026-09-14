__d(
  "adsUEditorAMCatalogAdEligibleSMCFeaturesSelector",
  [
    "AMCatalogAdEligibleSMCFeaturesParamsRecord",
    "AdCampaignDestination",
    "AdsCampaignRecordAccessors",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUEditorSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAMCatalogAdEligibleSMCFeaturesSelectorUtils",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorSelectedPageSelector",
    "cr:6105",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").destination_type.get,
        ),
        r("AdCampaignDestination").UNDEFINED,
      ),
      s = r("adsCreateStoreSelector")(
        [],
        function () {
          return function () {
            return r("LoadObject").withValue(null, { creatorModuleID: i.id });
          };
        },
        {
          name:
            i.id + ".adsUEditorAMCatalogAdEligibleFeatureVersionEmptySelector",
        },
      ),
      u =
        n("cr:6105") != null
          ? r("adsCreateStoreSelector")(
              [n("cr:6105")],
              function () {
                return function (e) {
                  var t;
                  return (t = n("cr:6105").get(e)) != null ? t : null;
                };
              },
              { name: i.id },
            )
          : s,
      c = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          var e;
          if (t.length === 0) return null;
          var n = t[0],
            a = n.campaign,
            i = n.campaignGroup,
            l =
              a == null || (e = a.promoted_object) == null ? void 0 : e.page_id,
            s = a == null ? void 0 : a.account_id;
          return l != null && s != null
            ? r("AMCatalogAdEligibleSMCFeaturesParamsRecord")({
                pageID: l,
                adAccountID: s,
                featureName: "L1_CATALOG_PRODUCT_SELECTOR_BOOST_POST",
                isCTM: o(
                  "AdsMetadataConnectedSourcesUtils",
                ).isCTMAdByCampaignGroupAndCampaign(a, i),
              })
            : null;
        },
        {
          name:
            i.id +
            ".adsUEditorAMCatalogAdEligibleBoostPostVersionQuerySelector",
        },
      ),
      d = r("adsCreateSelector")(
        [c, r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"), u],
        function (t, n, r) {
          var e;
          if (n.length === 0) return null;
          var a = n[0],
            i = a.campaign,
            l = a.campaignGroup,
            s = o(
              "AdsMetadataConnectedSourcesUtils",
            ).isCTMAdByCampaignGroupAndCampaign(i, l);
          return t == null || t.adAccountID == null || t.pageID == null || !s
            ? null
            : (e = r(t).getValue()) != null
              ? e
              : null;
        },
        {
          name: i.id + ".adsUEditorAMCatalogAdEligibleBoostPostVersionSelector",
        },
      ),
      m = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          u,
          e,
          r("adsUEditorSelectedPageSelector"),
        ],
        function (t, n, r, a) {
          return o(
            "adsUEditorAMCatalogAdEligibleSMCFeaturesSelectorUtils",
          ).adsUEditorAMCatalogAdEligibleQuickCreateVersionInMap(t, n, r, a);
        },
        {
          name:
            i.id +
            ".adsUEditorAMCatalogAdEligibleQuickCreateVersionInMapSelector",
        },
      );
    ((l.adsUEditorAMCatalogAdEligibleBoostPostVersionSelector = d),
      (l.adsUEditorAMCatalogAdEligibleQuickCreateVersionInMapSelector = m));
  },
  98,
);
