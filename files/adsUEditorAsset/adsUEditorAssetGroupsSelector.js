__d(
  "adsUEditorAssetGroupsSelector",
  [
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").placementSpecs],
        function (t) {
          return o("AdsPlacementAssetUtils")
            .getAssetGroupsFromPlacements(
              o(
                "AdsPlacementAPISpecReaderUtils",
              ).getAssetCustomizationPlacementsFromPlacementSpecs(t),
            )
            .toSet();
        },
        {
          equal: r("immutable").is,
          name: i.id + ".adsUEditorAssetGroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
