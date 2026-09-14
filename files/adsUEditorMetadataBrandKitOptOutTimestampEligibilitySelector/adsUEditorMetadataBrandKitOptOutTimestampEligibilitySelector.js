__d(
  "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector",
  [
    "adsCreateSelector",
    "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelectorUtils",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (t) {
        return o(
          "adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelectorUtils",
        ).adsUEditorMetadataBrandKitOptOutTimestampEligibility(t);
      },
      {
        name:
          i.id +
          ".adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector",
      },
    );
    l.adsUEditorMetadataBrandKitOptOutTimestampEligibilitySelector = e;
  },
  98,
);
