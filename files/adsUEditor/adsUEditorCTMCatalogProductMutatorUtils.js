__d(
  "adsUEditorCTMCatalogProductMutatorUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMetadataConnectedSourcesUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return ["0"];
    }
    function s() {
      return r("immutable").List(
        Array.from(["0"]).map(function (e) {
          return r("immutable").Map({
            product_id: e,
            product_source: "MANUAL",
          });
        }),
      );
    }
    function u(e, t, n) {
      var r = n.get(t);
      if (r == null) return e;
      var o = r.campaign,
        a = r.campaignGroup;
      return c(e, o, a);
    }
    function c(e, t, n) {
      var a = e,
        i = o(
          "AdsMetadataConnectedSourcesUtils",
        ).isCTMAdByCampaignGroupAndCampaign(t, n),
        l = o("AdsAssetFeedUtils").isClickToMultiDestAds(e);
      return (
        !i || l === !0
          ? (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.product_data.delete(a))
          : (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.product_data.set(s(), a)),
        a
      );
    }
    ((l.getPlaceholderProductID = e),
      (l.getPlaceholderProductData = s),
      (l.mayBeDeleteProductDataFromAdgroupAndParentData = u));
  },
  98,
);
