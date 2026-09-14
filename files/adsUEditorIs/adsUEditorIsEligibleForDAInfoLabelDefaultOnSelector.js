__d(
  "adsUEditorIsEligibleForDAInfoLabelDefaultOnSelector",
  [
    "AdsCreativeFeaturesUtils",
    "AdsMetadataConnectedSourcesUtils",
    "adsCreateSelector",
    "adsUEditorAPlusCStickyOptInL0Selector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorCreativeFeaturesEligibilitySelector"),
          o("adsUEditorAPlusCStickyOptInL0Selector")
            .adsUEditorAPlusCStickyOptInL0Selector,
        ],
        function (t, n) {
          var e = n("product_metadata_automation");
          if (e.getValue() === !1)
            return t.mapValue(function () {
              return !1;
            });
          var r = t.mapValue(function (e) {
              return o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "DA_APLUSC_INFO_LABEL_DEFAULT_ON",
              );
            }),
            a = r.getValue(),
            i = t
              .mapValue(function (e) {
                return e.account_id;
              })
              .getValue(),
            l = t
              .mapValue(function (e) {
                return e.features_eligibility_map.segmentation_group;
              })
              .getValue(),
            s = JSON.stringify({ account_segment_group: l });
          return (
            o(
              "AdsMetadataConnectedSourcesUtils",
            ).logDAInfoLabelEligibilityResult(i, a, s),
            r
          );
        },
        { name: i.id + ".adsUEditorIsEligibleForDAInfoLabelDefaultOnSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
