__d(
  "AdsCrepePaidMessagingPackageConfigPlugin",
  [
    "AdsCrepePaidMessagingEditorStructurePackageConfig",
    "AdsPECrepePackages",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "crepePackageConfig",
        key: "paidMessagingPackageConfig",
        config: {
          editorStructure: r(
            "AdsCrepePaidMessagingEditorStructurePackageConfig",
          ),
          editorModifications: {
            isNavAutoScrollingEnabled: r("gkx")("21201"),
            isPackageInfoSectionHidden: !0,
            isTopHeaderHidden: !r("gkx")("21201"),
          },
        },
        package_id: o("AdsPECrepePackages").PAID_MESSAGING_PACKAGE_ID,
        visibilitySelector: function () {
          return r("adsCreateSelector")(
            [],
            function (t) {
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
