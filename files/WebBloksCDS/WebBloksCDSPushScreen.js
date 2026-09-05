__d(
  "WebBloksCDSPushScreen",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i = t.get("app_id"),
        l = t.get("navbar_data"),
        s = t.get("loading_screen"),
        u = t.get("url_relative_path"),
        c = t.get("ttrc_marker_id"),
        d = {
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          loadingNavbar: l,
          loadingScreen: s,
          externalVariables: o(
            "WebBloksScreen",
          ).WebBloksScreen.getExternalVariablesFromBloksScript(
            e,
            n.get("props"),
          ),
        };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: i, markerId: c } },
      );
      var m = o("WebBloksScreen").WebBloksScreen.fromAppId(
        e.objectSet,
        i,
        r,
        d,
        u,
      );
      e.objectSet.navigationManager.push(m);
    }
    l.default = e;
  },
  98,
);
