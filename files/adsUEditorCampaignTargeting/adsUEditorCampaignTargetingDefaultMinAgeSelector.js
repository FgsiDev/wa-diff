__d(
  "adsUEditorCampaignTargetingDefaultMinAgeSelector",
  [
    "AdsTargetingAccountControlInfoSelector",
    "AdsTargetingAgeUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("AdsTargetingAccountControlInfoSelector"),
        ],
        function (t, n) {
          return o("AdsTargetingAgeUtils").getDefaultMinAge(t, n);
        },
        { name: i.id + ".adsUEditorCampaignTargetingDefaultMinAgeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
