__d(
  "AdsCrepeASCOffsiteLeadOdaxPackageConfigPlugin",
  [
    "AdsCrepeASCOffsiteLeadEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelectorWithValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ASCOffsiteLeadOdaxPackageConfig",
        package_id: o("AdsPECrepePackages").ASC_OFFSITE_LEAD_ODAX_PACKAGE_ID,
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          editorStructure: r(
            "AdsCrepeASCOffsiteLeadEditorStructurePackageConfig",
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
