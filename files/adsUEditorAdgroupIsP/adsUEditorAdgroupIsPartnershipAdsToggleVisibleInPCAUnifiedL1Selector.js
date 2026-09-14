__d(
  "adsUEditorAdgroupIsPartnershipAdsToggleVisibleInPCAUnifiedL1Selector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              r = e.campaignGroup;
            return (
              o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
              o(
                "AdsPCAUnifiedFormatEligibilityUtils",
              ).isEligiblePCAUnifiedL1EvenIfMissingSentinel(r, n)
            );
          });
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupIsPartnershipAdsToggleVisibleInPCAUnifiedL1Selector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
