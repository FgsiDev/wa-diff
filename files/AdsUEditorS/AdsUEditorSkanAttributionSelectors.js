__d(
  "AdsUEditorSkanAttributionSelectors",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          o("AdsUEditorCampaignSelectors").campaigns.somePlainObject(
            o("AdsAPICampaignRecordUtils").isSKAdNetworkCampaignAttribution,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".isL2SkanAttributionSelector" },
      ),
      u = e(
        [
          o("AdsUEditorCampaignSelectors").campaigns.somePlainObject(
            o("AdsAPICampaignRecordUtils").isAEMCampaignAttribution,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".isL2AEMAttributionSelector" },
      ),
      c = e(
        [
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.somePlainObject(
            o("AdsAPICampaignGroupRecordUtils").isSKAdNetworkAttribution,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".isL3SkanAttributionSelector" },
      ),
      d = e(
        [s, c],
        function (t, n) {
          return n && t;
        },
        { name: i.id + ".isSkanCampaignAttributionSelector" },
      ),
      m = e(
        [u, c],
        function (t, n) {
          return n && t;
        },
        { name: i.id + ".isAemCampaignAttributionSelector" },
      ),
      p = e(
        [s, c],
        function (t, n) {
          return n || t;
        },
        { name: i.id + ".isL2OrL3SkanAtrributionSelector" },
      );
    ((l.isSkanCampaignAttributionSelector = d),
      (l.isAemCampaignAttributionSelector = m),
      (l.isL2OrL3SkanAtrributionSelector = p));
  },
  98,
);
