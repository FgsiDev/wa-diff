__d(
  "AdsCrepeADV1nmPrototypeOdaxPackageConfigPlugin",
  [
    "AdsCrepeADV1nmPrototypeOdaxEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelectorWithValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ADV1nmPrototypeODAXPackageConfig",
        package_id: o("AdsPECrepePackages").ADV_1NM_PROTOTYPE_ODAX_PACKAGE_ID,
        config: {
          visibility: { campaignVisibility: { keysToAdd: [] } },
          editorStructure: r(
            "AdsCrepeADV1nmPrototypeOdaxEditorStructurePackageConfig",
          ),
        },
        visibilitySelector: function () {
          return r("adsCreateSelectorWithValue")(!1);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
