__d(
  "WebBloksCDSOpenScreen",
  [
    "WebBloksCDSBottomSheetContainer.react",
    "WebBloksCDSScreenModeContext.react",
    "WebBloksScreen",
    "react",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a, i) {
      var l = t.get("app_id"),
        u = t.get("navbar_data"),
        c = t.get("loading_screen"),
        d = t.get("url_relative_path"),
        m = t.get("ttrc_marker_id"),
        p = n.get("mode"),
        _ = ["half_sheet", "flexible_sheet", "auto_sheet"].includes(p),
        f;
      _ &&
        (f = function (t) {
          return s.jsx(r("WebBloksCDSScreenModeContext.react").Provider, {
            value: p,
            children: s.jsx(r("WebBloksCDSBottomSheetContainer.react"), {
              context: i,
              children: t,
            }),
          });
        });
      var g = {
        initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
        isModal: _,
        loadingNavbar: u,
        loadingScreen: c,
        outerScreenComponent: f,
        ownerContext: e,
        externalVariables: o(
          "WebBloksScreen",
        ).WebBloksScreen.getExternalVariablesFromBloksScript(e, n.get("props")),
      };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: l, markerId: m } },
      );
      var h = o("WebBloksScreen").WebBloksScreen.fromAppId(
          e.objectSet,
          l,
          a,
          g,
          d,
        ),
        y = n.getExpression("on_dismiss");
      (y != null && h.setDismissCallback(y),
        e.objectSet.navigationManager.open(h));
    }
    l.default = u;
  },
  98,
);
