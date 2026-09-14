__d(
  "AdsConnectedSourcesNestedViewCloseWithoutSaveReducerPlugin",
  ["AdsMetadataManageX2PProductsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e =
              t.visibleNestedViewComponentPluginKey === "catalog" &&
              t.preNestedViewPluginState != null,
            r = e ? t.preNestedViewPluginState : t.pluginState;
          return babelHelpers.extends({}, t, {
            pluginState: babelHelpers.extends({}, r, {
              managedSiteLinksLocalState: null,
              manageX2PProducts: o(
                "AdsMetadataManageX2PProductsUtils",
              ).clearManageX2PProductsPendingState(
                r == null ? void 0 : r.manageX2PProducts,
              ),
            }),
            preNestedViewPluginState: void 0,
            visibleNestedViewComponentPluginKey: null,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
