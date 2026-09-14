__d(
  "AdsCrepeLWIGraduationEngagementPackagePlugin",
  [
    "AdsCrepeSBSMessageAcqAllSettingsConstants",
    "AdsLWIGraduationAMOnboardingGatingUtils",
    "AdsPECrepePackages",
    "GraduationCreationPackageGatingUtil",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "lwiGraduationEngagementPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          content: {
            presetSettings: o("AdsCrepeSBSMessageAcqAllSettingsConstants")
              .SBS_MESSAGE_ACQ_PGD_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages").LWI_GRADUATION_ENGAGEMENT_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
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
                  ).shouldHideForBAUTransition("ENGAGEMENT")
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
