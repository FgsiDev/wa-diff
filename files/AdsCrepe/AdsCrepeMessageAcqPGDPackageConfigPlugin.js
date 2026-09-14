__d(
  "AdsCrepeMessageAcqPGDPackageConfigPlugin",
  [
    "AdsCrepeSBSMessageAcqAllSettingsConstants",
    "AdsCrepeSBSMessagePGDEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "messageAcqPGDOdaxPackageConfig",
        config: {
          editorStructure: r(
            "AdsCrepeSBSMessagePGDEditorStructurePackageConfig",
          ),
          editorModifications: { useDeprecatedStyles: !0 },
          visibility: {
            adgroupVisibility: { keysToAdd: ["sbsMessageTemplateComponent"] },
          },
          content: {
            presetSettings: o("AdsCrepeSBSMessageAcqAllSettingsConstants")
              .SBS_MESSAGE_ACQ_PGD_CREATION_PACKAGE_CAMPAIGN_SETTINGS,
          },
        },
        package_id: o("AdsPECrepePackages").MESSAGE_ACQUISITION_PGD_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function () {
              return !1;
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
