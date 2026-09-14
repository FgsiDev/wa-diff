__d(
  "AdsCrepeASCOnsiteLeadOdaxPackageConfigPlugin",
  [
    "AdsCrepeASCOnsiteLeadEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "ASCOnsiteLeadOdaxPackageConfig",
        package_id: o("AdsPECrepePackages").ASC_ONSITE_LEAD_ODAX_PACKAGE_ID,
        config: {
          editorModifications: { useDeprecatedStyles: !0 },
          editorStructure: r(
            "AdsCrepeASCOnsiteLeadEditorStructurePackageConfig",
          ),
        },
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
