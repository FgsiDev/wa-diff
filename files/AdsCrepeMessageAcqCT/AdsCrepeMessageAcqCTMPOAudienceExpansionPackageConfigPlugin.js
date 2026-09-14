__d(
  "AdsCrepeMessageAcqCTMPOAudienceExpansionPackageConfigPlugin",
  [
    "AdsAccountStore",
    "AdsCrepeSBSMessageAcqAllSettingsConstants",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "adsCreateSelectorWithValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelectorWithValue")(!1),
      s = {
        type: "crepePackageConfig",
        key: "messageAcqCTMPOAudienceExpansionPackageConfig",
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: {
            adgroupVisibility: { keysToAdd: ["sbsMessageTemplateComponent"] },
          },
          content: {
            presetSettings: o("AdsCrepeSBSMessageAcqAllSettingsConstants")
              .SBS_MESSAGE_ACQ_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id:
          o("AdsPECrepePackages")
            .MESSAGE_ACQUISITION_CTMPO_AUDIENCE_EXPANSION_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [e, r("AdsAccountStore").getSelectedAccount],
            function (t, n) {
              return (t && u(n.getValue()), t);
            },
            { name: i.id },
          );
        },
      },
      u = function (t) {},
      c = s;
    l.default = c;
  },
  98,
);
