__d(
  "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdgroupContextualDiscoveryAdsOptInSelector",
    "adsUEditorContextualDiscoveryAdsEligibilitySpecStatusSelector",
    "adsUEditorIsAccountEligibleForAdsDefaultOnSelector",
    "adsUEditorMultiAdsActionMetadataSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorIsAccountEligibleForAdsDefaultOnSelector"),
          r("adsUEditorContextualDiscoveryAdsEligibilitySpecStatusSelector"),
          r("adsUEditorAdgroupContextualDiscoveryAdsOptInSelector"),
          r("adsUEditorMultiAdsActionMetadataSelector"),
        ],
        function (t, n, r, o) {
          var e;
          return {
            shouldOptIn:
              ((e = t()) == null ? void 0 : e.getValue()) === !0 &&
              n.shouldOptIn &&
              r === !0,
            isExplicitOptOut: n.isExplicitOptOut,
            shouldRenderCheckbox: r,
            actionMetadataType: o().getValue(),
          };
        },
        {
          name:
            i.id +
            ".adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
