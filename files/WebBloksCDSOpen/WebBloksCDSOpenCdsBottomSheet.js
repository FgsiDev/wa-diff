__d(
  "WebBloksCDSOpenCdsBottomSheet",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = t.get("app_id"),
        i = t.get("navbar_data"),
        l = t.get("loading_screen"),
        s = t.get("ttrc_marker_id"),
        u = {
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          loadingNavbar: i,
          loadingScreen: l,
        };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: a, markerId: s } },
      );
      var c = o("WebBloksScreen").WebBloksScreen.fromAppId(
        e.objectSet,
        a,
        r,
        u,
      );
      e.objectSet.navigationManager.open(c);
    }
    l.default = e;
  },
  98,
);
