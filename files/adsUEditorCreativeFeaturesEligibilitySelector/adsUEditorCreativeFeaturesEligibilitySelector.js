__d(
  "adsUEditorCreativeFeaturesEligibilitySelector",
  [
    "AdsCreativeFeaturesEligibilityDataProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorCreativeFeaturesEligibilitySelectorUtils",
    "adsUEditorInjectEditingCampaignContext",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountIDSelector"),
          r("adsUEditorInjectEditingCampaignContext")(
            r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
          ),
          r("AdsCreativeFeaturesEligibilityDataProvider").toFluxSelector(),
        ],
        function (t, n, r) {
          return o(
            "adsUEditorCreativeFeaturesEligibilitySelectorUtils",
          ).adsUEditorCreativeFeaturesEligibility(t, n, r);
        },
        { name: i.id + ".adsUEditorCreativeFeaturesEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
