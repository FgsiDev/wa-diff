__d(
  "AdsCrepeLWIGraduationWebTrafficPackagePlugin",
  [
    "AdsCrepeSBSWebTrafficAllSettingsConstants",
    "AdsLWIGraduationAMOnboardingGatingUtils",
    "AdsPECrepePackages",
    "GraduationCreationPackageGatingUtil",
    "adsCreateSelector",
    "isTrafficCreationPackageDeprecatedUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "lwiGraduationWebTrafficPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          content: {
            presetSettings: o("AdsCrepeSBSWebTrafficAllSettingsConstants")
              .SBS_WEB_TRAFFIC_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").LWI_GRADUATION_WEB_TRAFFIC_PACKAGE_ID,
        visibilitySelector: function () {
          return o(
            "isTrafficCreationPackageDeprecatedUtil",
          ).isTrafficCreationPackageDeprecatedUtil()
            ? r("adsCreateSelector")(
                [],
                function () {
                  return !1;
                },
                { name: i.id },
              )
            : r("adsCreateSelector")(
                [],
                function (t) {
                  return o(
                    "GraduationCreationPackageGatingUtil",
                  ).enableLWIBaselineAudience() ||
                    o(
                      "GraduationCreationPackageGatingUtil",
                    ).enableGraduationExpansionToInternationalLowSpenders()
                    ? !o(
                        "GraduationCreationPackageGatingUtil",
                      ).shouldHideForBAUTransition("WEB_TRAFFIC")
                    : o(
                        "AdsLWIGraduationAMOnboardingGatingUtils",
                      ).enableObjectiveSelectorOnboarding() ||
                        o(
                          "AdsLWIGraduationAMOnboardingGatingUtils",
                        ).isLWIAudienceExpansionEnabled();
                },
                { name: i.id },
              );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
