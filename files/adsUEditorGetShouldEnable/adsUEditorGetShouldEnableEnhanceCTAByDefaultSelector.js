__d(
  "adsUEditorGetShouldEnableEnhanceCTAByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsUEditorCreativeFeatureDefaultConfigUserSettingsSelector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "passAPlusCStickyOptOutForFastTrackGlobalishGK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorCreativeFeaturesEligibilitySelector"),
          r("adsUEditorCreativeFeatureDefaultConfigUserSettingsSelector"),
        ],
        function (t, n) {
          if (r("passAPlusCStickyOptOutForFastTrackGlobalishGK")() && n) {
            var e,
              a,
              i,
              l =
                (e = n.aplusc_sticky_opt_in_status_v2) == null
                  ? void 0
                  : e.find(function (e) {
                      return e.key === "enhance_cta";
                    }),
              s =
                l != null
                  ? ((a = l.value) == null ? void 0 : a.status) === "OPTED_OUT"
                  : ((i = n.aplusc_sticky_opt_in_status) == null ||
                    (i = i.find(function (e) {
                      return e.key === "enhance_cta";
                    })) == null
                      ? void 0
                      : i.value) === "OPTED_OUT";
            if (s)
              return t.mapValue(function () {
                return !1;
              });
          }
          var u = t.mapValue(function (e) {
            return (
              o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                e,
                "ENHANCE_CTA_DEFAULT_ON",
              ) && e.features_eligibility_map.is_aco_sensitive_vertical !== !0
            );
          });
          return u;
        },
        {
          name: i.id + ".adsUEditorGetShouldEnableEnhanceCTAByDefaultSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
