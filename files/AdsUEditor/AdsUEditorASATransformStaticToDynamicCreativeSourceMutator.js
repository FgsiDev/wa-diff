__d(
  "AdsUEditorASATransformStaticToDynamicCreativeSourceMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdGroupLocalStoreExtensionMutators",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupLocalStoreExtensionUtils",
    "AdsAdgroupMMTMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUtils",
    "AdsAssetFeedUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsLinkPostFormat",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupDynamicMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "FBLogger",
    "adsAutomaticFlowMutationSetDoFSpec",
    "isFalsey",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccount,
        n = e.adgroup,
        a = e.bizAIEligibility,
        i = e.catalogItemType,
        l = e.disablePAC,
        s = e.getPage,
        u = e.isShopAdsBundleAvailable,
        c = e.parentData,
        d = e.productSetID,
        m = e.productSetVertical,
        p = e.promoAdDefaultOptinStatus,
        _ = e.userSettings;
      if (o("AdsDynamicAdsUtils").isDynamicAd(n)) return n;
      var f = r("nullthrows")(c.get(n.id)),
        g = f.campaign,
        h = f.campaignGroup,
        y = f.specPlugin;
      if (h == null)
        return (
          r("FBLogger")("dpa").mustfix(
            "Parent campaign group in reducer should not have been null",
          ),
          n
        );
      var C = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(n, y),
        b =
          C === r("AdsLinkPostFormat").SINGLE ||
          C === r("AdsLinkPostFormat").COLLECTIONS,
        v =
          b && o("AdsFlexibleFormatAdexUtils").passFormatSelectorMergeDAPhase1()
            ? r("AdsLinkPostFormat").MULTIPLE
            : C,
        S = n;
      return (
        r("isFalsey")(n.lightweight_split_test) ||
          (S = r("AdsAdgroupRecordAccessors").lightweight_split_test.delete(n)),
        r("isFalsey")(S.lightweight_split_test_options) ||
          (S = r(
            "AdsAdgroupRecordAccessors",
          ).lightweight_split_test_options.delete(S)),
        o("AdsAdgroupUtils").isMMTAdgroup(n) &&
          (S = o("AdsAdgroupMMTMutators").adsMMTImageToVideoMutationSetDoFSpec(
            S,
            !1,
          )),
        (o("AdsAdgroupUtils").isCarouselToVideoAdgroup(n) ||
          o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup(n) ||
          o("AdsAssetFeedUtils").hasCreativeFeaturesAdgroup(n)) &&
          (S = o("adsAutomaticFlowMutationSetDoFSpec").adsDeleteDoFSpecMutator(
            S,
          )),
        (S = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).adsDeleteGenAIAssetSpecMutator(S)),
        (S = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(S)),
        (S = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMultiMediaContentFromMSS(S)),
        (S = o(
          "AdsAdgroupConnectedSourcesMutators",
        ).adsDeleteConnectedSourceCatalogMutator(S)),
        o(
          "AdsAdgroupLocalStoreExtensionUtils",
        ).isEligibleForLocalStoreExtensionByCampaignAndAdgroup(g, h, n) &&
          (S = o(
            "AdsAdGroupLocalStoreExtensionMutators",
          ).adsDeleteLocalStoreExtensionMutator(S)),
        v === r("AdsLinkPostFormat").MULTIPLE
          ? o(
              "AdsUEditorAdgroupDynamicCarouselMutators",
            ).transformStaticToDynamicCarouselMedia(
              S,
              { campaignGroup: h, campaign: g },
              y,
              l,
              d,
              m,
              u,
              s,
              p,
              t,
              i,
              a,
            )
          : v === r("AdsLinkPostFormat").COLLECTIONS
            ? o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupFromStaticToDynamicCollectionMedia(
                S,
                d,
                { campaignGroup: h, campaign: g },
                y,
              )
            : (v === r("AdsLinkPostFormat").FLEXIBLE &&
                (S = o(
                  "AdsAdgroupLinkPostFormatMutators",
                ).removeCreativeAssetGroupsSpecField(S)),
              o(
                "AdsUEditorAdgroupDynamicMutators",
              ).transformAdgroupFromStaticToDynamicSingleMedia(
                S,
                { campaignGroup: h, campaign: g },
                d,
                m,
                y,
                p,
                _,
                i,
                a,
              ))
      );
    }
    l.default = e;
  },
  98,
);
