__d(
  "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
  [
    "AdsUEditorCampaignShopAdsUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
        function (t) {
          return t.map(function (e) {
            var t = e.campaign;
            return o(
              "AdsUEditorCampaignShopAdsUtils",
            ).isShopsAdsIncentiveProgram(
              r("adsConvertAdObjectRecordToPlainJS")(t),
            );
          });
        },
        {
          name: i.id + ".adsUEditorCampaignIsShopsAdsIncentiveProgramSelector",
        },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.some(Boolean);
        },
        {
          name:
            i.id + ".adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector",
        },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          return c(t);
        },
        {
          name:
            i.id + ".adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector",
        },
      );
    function c(e) {
      return e.length > 0 && e.every(Boolean);
    }
    ((l.adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector = s),
      (l.adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector = u),
      (l.adsUEditorCampaignIsAllShopsAdsIncentiveProgram = c));
  },
  98,
);
