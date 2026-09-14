__d(
  "adsUEditorGetShouldEnableVideoFilteringByDefaultSelector",
  [
    "AdsCreativeFeaturesUtils",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAplusCVideoFilteringStickyOptInL0Selector",
    "adsUEditorCreativeFeaturesEligibilitySelector",
    "adsUEditorGetShouldEnableVideoFilteringStickyOptInSelector",
    "adsUEditorVideoFilteringOptoutRefreshEligibilitySelector",
    "computeVideoFilteringDefaultOnWithRefresh",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Math.floor(Date.now() / 1e3),
      s = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [
            r("adsUEditorCreativeFeaturesEligibilitySelector"),
            r("adsUEditorGetShouldEnableVideoFilteringStickyOptInSelector"),
            o("adsUEditorAplusCVideoFilteringStickyOptInL0Selector")
              .adsUEditorAplusCVideoFilterStickyOptInL0Selector,
            r("adsUEditorVideoFilteringOptoutRefreshEligibilitySelector"),
            r("userSettingsSelector"),
          ],
          function (n, a, i, l, s) {
            var t,
              u,
              c = n.mapValue(function (e) {
                return (
                  o("AdsCreativeFeaturesUtils").isCreativeFeatureEligible(
                    e,
                    "VIDEO_FILTERING_DEFAULT_ON",
                  ) &&
                  e.features_eligibility_map.is_aco_sensitive_vertical !== !0
                );
              }),
              d = c.getValue() === !0,
              m = a(),
              p =
                s == null ||
                (t = s.getValue()) == null ||
                (t = t.creative_feature_default_config) == null
                  ? void 0
                  : t.aplusc_sticky_opt_in_status_v2,
              _ =
                p == null ||
                (u = p.find(function (e) {
                  return e.key === "video_filtering";
                })) == null ||
                (u = u.value) == null
                  ? void 0
                  : u.latest_action_timestamp,
              f = _ != null && _ > e;
            return r("computeVideoFilteringDefaultOnWithRefresh")({
              enableDefaultOn: d,
              enableStickyOptIn: m,
              stickyValue: i.getValue(),
              isOptoutRefreshEligible: l,
              optOutInThisSession: f,
              extendedOptoutHandlingEnabled: !0,
              truthfulActionTypeEnabled: !0,
            });
          },
          { name: i.id },
        ),
      ),
      u = s;
    l.default = u;
  },
  98,
);
