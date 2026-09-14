__d(
  "AdsTargetingAccountControlInfoReverseInteropSelector",
  [
    "AdsTargetingAccountControlInfoReverseInteropSelectorUtils",
    "L4SettingsBusinessConstraintsAudienceControlsSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("L4SettingsBusinessConstraintsAudienceControlsSelector")],
        function (t) {
          return o(
            "AdsTargetingAccountControlInfoReverseInteropSelectorUtils",
          ).getL4SettingsBusinessConstraintsAudienceControls(t);
        },
        {
          name: i.id + ".AdsTargetingAccountControlInfoReverseInteropSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
