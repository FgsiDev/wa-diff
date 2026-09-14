__d(
  "AdsMetadataManageX2PProductsPlugin",
  [
    "fbt",
    "AdsConnectedSourcesCloseNestedViewAction",
    "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
    "AdsMetadataManageX2PProductsFbt",
    "JSResource",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataManageX2PProductsNestedView.react",
        ).__setRef("AdsMetadataManageX2PProductsPlugin"),
      ),
      d = {
        key: "manageX2PProducts",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataManageX2PProductsNestedView.react",
          ).__setRef("AdsMetadataManageX2PProductsPlugin"),
        ],
        isVisible: function () {
          return !1;
        },
        getHeading: function () {
          return s._(/*BTDS*/ "Manage products");
        },
        getSubheading: function () {
          return s._(/*BTDS*/ "Review and edit the products shown in your ad.");
        },
        MainComponent: function () {
          return null;
        },
        nestedViewType: "dynamic-handlers",
        NestedViewComponent: function () {
          return u.jsx(c, {});
        },
        getNestedViewTitle: function () {
          return s._(/*BTDS*/ "Manage products");
        },
        getNestedViewDescription: function () {
          return o("AdsMetadataManageX2PProductsFbt")
            .MANAGE_X2P_PRODUCTS_DESCRIPTION;
        },
        getNestedViewPrimaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "manageX2PProducts" ? s._(/*BTDS*/ "Save") : null;
        },
        getNestedViewPrimaryClickHandler: function () {
          return function () {
            r("AdsConnectedSourcesCloseNestedViewAction").dispatch(
              {},
              {
                line: "85",
                module: "AdsMetadataManageX2PProductsPlugin.js",
                moduleID: i.id,
              },
            );
          };
        },
        getNestedViewSecondaryButtonLabel: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "manageX2PProducts"
            ? s._(/*BTDS*/ "Back to creative setup")
            : null;
        },
        getNestedViewSecondaryClickHandler: function (t) {
          var e = t.visibleNestedViewComponentPluginKey;
          return e === "manageX2PProducts"
            ? function () {
                r(
                  "AdsConnectedSourcesCloseNestedWithoutSaveViewAction",
                ).dispatch(
                  {},
                  {
                    line: "104",
                    module: "AdsMetadataManageX2PProductsPlugin.js",
                    moduleID: i.id,
                  },
                );
              }
            : null;
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
