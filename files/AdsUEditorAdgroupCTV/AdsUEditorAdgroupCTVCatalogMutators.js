__d(
  "AdsUEditorAdgroupCTVCatalogMutators",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "adsUEditorRemoveDynamicAdsSpecificCreativeFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!o("AdsDynamicAdsUtils").isDynamicAd(e)) return e;
      var a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          n.objective,
          t,
        ),
        i = o("AdsODAXUtils").maybeTranslateObjective(
          n.objective,
          a,
          t.optimization_goal,
        ),
        l = o(
          "AdsUEditorAdgroupDynamicMutators",
        ).transformAdgroupFromTemplateToSingleMediaLinkData(e, t, n, i);
      return (
        (l = r("adsUEditorRemoveDynamicAdsSpecificCreativeFields")(l)),
        (l = o("AdsAdgroupLinkPostFormatMutators").changeToSingleLinkPostFormat(
          i,
          l,
          a,
          t,
          n,
        )),
        (l = r("AdsAdgroupRecordAccessors").creative.shop_spec.delete(l)),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.delete(l)),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.standard_enhancements_catalog.delete(
          l,
        )),
        (l = o(
          "AdsAdgroupConnectedSourcesMutators",
        ).setConnectedSourcesCatalogEnrollStatusMutator(
          l,
          null,
          !1,
          "MANUAL",
          null,
          null,
        )),
        l
      );
    }
    l.maybeConvertCatalogAdToManualSingleVideo = e;
  },
  98,
);
