__d(
  "isBrandedContentFieldEligibleBasedOnAdgroup",
  [
    "AdsAPIAdgroupRecord",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsAssetFeedUtils",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdsUtils",
    "AdsLanguageDialectConverter",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupStaticAdsUsingAFSUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.adgroup,
        a = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e),
        i = o("AdsDynamicAdsUtils").isDynamicAd(n);
      if (o("AdsAPIAdgroupRecordUtils").isTemplateCreative(n) && !i) return !1;
      var l =
        n instanceof r("AdsAPIAdgroupRecord")
          ? n
          : new (r("AdsAPIAdgroupRecord"))(n);
      if (o("AdsAPIAdgroupRecordUtils").isCollectionsAd(l, a) && !i) return !1;
      var s = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(n),
        u = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(n),
        c =
          s == null
            ? null
            : [s].concat(u.toArray()).map(function (e) {
                return r("AdsLanguageDialectConverter")
                  .localizedNamesForDialects[e];
              });
      if (c && c.length > 0) return !1;
      var d = r("adsConvertAdObjectRecordToPlainJS")(n),
        m =
          n.creative != null &&
          o("AdsAssetFeedSimpleFieldCheckUtils").isCreativeWithAssetFeed(
            n.creative,
          ) &&
          !o(
            "AdsAssetFeedUtils",
          ).isAdgroupUsingOnlySupportedOnsiteDestinationsSpecs(d) &&
          !o("AdsAssetFeedUtils").isAdgroupUsingOnlyCTXMultiDestinations(d) &&
          !o(
            "AdsUEditorAdgroupAudiosAdsMutators",
          ).isAdgroupUsingOnlyAudiosAssetFeedFromRecord(d) &&
          !o("AdsUEditorAdgroupBadges").isAdgroupUsingOnlyBadgesAssetFeed(d) &&
          !o(
            "AdsUEditorAdgroupStaticAdsUsingAFSUtils",
          ).isAdgroupUsingOnlyAssetFeedForStaticAds(d) &&
          !o(
            "AdsAssetFeedUtils",
          ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(d),
        p = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(n),
        _ = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(n),
        f = o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(n),
        g = o("AdsAssetFeedUtils").isDOFAdgroupFromRecord(n),
        h =
          (n == null ||
          (t = n.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.call_ads_configuration) != null,
        y = o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(n);
      if (!y) {
        var C;
        return (C = r("qex")._("1169")) != null ? C : !1;
      }
      return !(
        m &&
        !o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoData(n) &&
        !p &&
        !_ &&
        !f &&
        !g &&
        !i &&
        !(h && r("gkx")("1856"))
      );
    }
    l.default = e;
  },
  98,
);
