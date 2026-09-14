__d(
  "AdsConvergenceCreationCompleteUIReducerPlugin",
  [
    "AdsApplicationUtils",
    "AdsCFPlaceOrderProvider",
    "AdsCFPlaceOrderStatus",
    "AdsDataAtom",
    "AdsPERouterHelper",
    "AdsToggleSource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsCFPlaceOrderProvider").toFluxStore(),
      u = {
        reduce: function (n, a) {
          var t = a.campaignGroupIDs;
          return (
            s.getState().status === r("AdsCFPlaceOrderStatus").INITIAL &&
              o("AdsApplicationUtils").isPowerEditor() &&
              t != null &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  var e = r("AdsPERouterHelper").getRouteBuilder();
                  (e
                    .tool("MANAGE_ADS")
                    .section("L3")
                    .tray("EDITOR_DRAWER")
                    .context({ toggleSource: r("AdsToggleSource").create })
                    .setTreeNav(!0)
                    .clearCreationParams()
                    .clearSelectedIDs("ad_set")
                    .clearSelectedIDs("ad")
                    .selectedIDs(t, "campaign"),
                    e.navigate());
                },
              ),
            { isCreating: !1 }
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
