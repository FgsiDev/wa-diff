__d(
  "AdsImageSpecsForAdgroupUtils",
  [
    "AdImageSpecsUtils",
    "AdImageSpecsUtilsV2",
    "AdsBrandAwarenessUtils",
    "adsGetCreativeTypeByCreativeFields",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = r("adsGetCreativeTypeByCreativeFields")(
          (n = e.creative) == null ? void 0 : n.object_type,
        ),
        i = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(t),
        l = o("AdImageSpecsUtilsV2").getCropImageSpecsForAdTypeV2(a, [i]),
        s = o("AdImageSpecsUtils").getDisabledCropImageSpecsForAdType(
          l,
          a,
          o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e.toJS()),
        );
      return { imageSpecs: l, disabledSpecs: s };
    }
    l.getImageSpecsForAdgroup = e;
  },
  98,
);
