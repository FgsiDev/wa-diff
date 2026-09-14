__d(
  "AdsCrepeSBGLeadGenOdaxPackageConfigPlugin",
  [
    "AdsCrepeSBGLeadGenAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "adsCreateSelectorWithValue",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelectorWithValue")("BAU"),
      s = {
        type: "crepePackageConfig",
        key: "sbgLeadGenOdaxPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          content: {
            presetSettings: o("AdsCrepeSBGLeadGenAllSettingsConstants")
              .SBG_LEAD_GEN_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id: o("AdsPECrepePackages").SBG_LEAD_GEN_POST_ODAX_PACKAGE_ID,
        eligibleCrepeForPitchReinforcement: !0,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              if ((r("gkx")("21776") || r("gkx")("3466")) && r("gkx")("1502"))
                return !0;
              if (
                (r("gkx")("3467") || r("gkx")("21776") || r("gkx")("3468")) &&
                r("gkx")("1502") &&
                !r("gkx")("3469")
              ) {
                var t = e;
                return t.call() !== "BAU";
              } else return !1;
            },
            { name: i.id },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
