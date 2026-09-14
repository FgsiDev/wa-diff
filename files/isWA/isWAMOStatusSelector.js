__d(
  "isWAMOStatusSelector",
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
            return o("WAMOStatusAdsManagerUtils").isWAMOStatusSelected(e);
          });
        },
        { name: i.id + ".isWAMOStatusSelector" },
      ),
      s = r("adsChooseSelector")(
        function () {
          return o(
            "WAMOStatusAdsManagerUtils",
          ).isAdAccountEligibleForWAMOStatus();
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
        i.id + ".isWAMOStatusSelectorGated",
      ),
      u = s;
    l.default = u;
  },
  98,
);
