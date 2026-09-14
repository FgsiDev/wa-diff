__d(
  "isOnlyWAMMSelector",
  [
    "AdsUEditorCampaignSelectors",
    "WAMOStatusAdsManagerUtils",
    "adsChooseSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return t.some(function (e) {
            return o(
              "WAMOStatusAdsManagerUtils",
            ).isOnlyMarketingMessagesSelected(e);
          });
        },
        { name: i.id + ".isOnlyWAMMSelector" },
      ),
      s = r("adsChooseSelector")(
        function () {
          return o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForWAMMUnknownAge();
        },
        e,
        r("adsCreateSelector")(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".isOnlyWAMMSelectorGated",
      ),
      u = s;
    l.default = u;
  },
  98,
);
