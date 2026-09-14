__d(
  "adsUEditorAdgroupAPlusCProductExtensionProductSetSelectors",
  [
    "AdAccountProductExtensionsMainProductSetDataProvider",
    "AdToCatalogUtils",
    "AdsAccountStore",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorSelectors",
    "CatalogProductExtensionsMainProductSetDataProvider",
    "LoadObject",
    "adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountUtils",
    "adgroupPCAUnificationProductSetByCatalogUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupPCAUnificationCatalogSelector",
    "adsUEditorAdgroupPEDestinationUrlValueSelector",
    "adsUEditorAdgroupWebsiteUrlValueSelector",
    "adsUEditorCTXSMCCatalogSelector",
    "adsUEditorIsAdgroupEligibleForCtdPeSelector",
    "adsUEditorIsAdgroupEligibleForCtwaPeSelector",
    "adsUEditorPcaUnificationSelectors",
    "adsUEditorSelectedAdgroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorPcaUnificationSelectors")
            .isPcaUnificationWs1EnabledSelector,
          r("adsUEditorAdgroupPCAUnificationCatalogSelector"),
          o("adsUEditorAdgroupWebsiteUrlValueSelector").websiteUrlValueSelector,
          r(
            "CatalogProductExtensionsMainProductSetDataProvider",
          ).toFluxSelector(),
          r("adsUEditorSelectedAdgroupIDsSelector"),
        ],
        function (t, n, r, a, i) {
          return o(
            "adgroupPCAUnificationProductSetByCatalogUtils",
          ).adgroupPCAUnificationProductSetByCatalogLogic(t, n, r, a, i);
        },
        { name: i.id + ".adgroupPCAUnificationProductSetByCatalogSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          o("adsUEditorPcaUnificationSelectors")
            .isPcaUnificationWs1EnabledSelector,
          r("AdsAccountStore").getSelectedAccountID,
          o("adsUEditorCTXSMCCatalogSelector")
            .adsUEditorIsCampaignCTMAdSelector,
          r("adsUEditorIsAdgroupEligibleForCtwaPeSelector"),
          r("adsUEditorIsAdgroupEligibleForCtdPeSelector"),
          r(
            "AdAccountProductExtensionsMainProductSetDataProvider",
          ).toFluxSelector(),
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null ? void 0 : t.pixel_id;
          }),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorAdgroupBulkSelectors").pageID,
            null,
          ),
          o("adsUEditorAdgroupPEDestinationUrlValueSelector")
            .peDestinationUrlValueSelector,
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("adsUEditorAdgroupPCAUnificationCatalogSelector"),
        ],
        function (t, n, a, l, s, u, c, d, m, p, _, f) {
          return o(
            "AdToCatalogUtils",
          ).isPEDefaultingLatencyImprovementEnabled() &&
            _.length > 0 &&
            _.some(function (e) {
              var t = e.adgroup,
                n = e.campaign,
                r = e.campaignGroup;
              return !o(
                "AdsMetadataConnectedSourcesUtils",
              ).isEligibleForCatalogByCampaignAndAdgroup(n, r, t);
            })
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : o(
                "adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountUtils",
              ).adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountLogic(
                t,
                n,
                a,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                f,
              );
        },
        {
          name:
            i.id +
            ".adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountSelector",
        },
      );
    ((l.adgroupPCAUnificationProductSetByCatalogSelector = e),
      (l.adgroupAPlusCProductExtensionFirstEligibleProductSetByAccountSelector =
        s));
  },
  98,
);
