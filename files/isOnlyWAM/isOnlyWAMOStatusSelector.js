__d(
  "isOnlyWAMOStatusSelector",
  [
    "AdsUEditorCampaignSelectors",
    "WAMOStatusAdsManagerUtils",
    "adsChooseSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationSelector],
        function (t) {
          return o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelected(t);
        },
        { name: i.id + ".isOnlyWAMOStatusSelector" },
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
        i.id + ".isOnlyWAMOStatusSelectorGated",
      ),
      u = s;
    l.default = u;
  },
  98,
);
