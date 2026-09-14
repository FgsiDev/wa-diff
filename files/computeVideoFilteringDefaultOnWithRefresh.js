__d(
  "computeVideoFilteringDefaultOnWithRefresh",
  [
    "LoadObject",
    "adsUEditorGetShouldEnableAutoflowByDefaultSelector",
    "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.enableDefaultOn,
        n = e.enableStickyOptIn,
        a = e.extendedOptoutHandlingEnabled,
        l = e.isOptoutRefreshEligible,
        s = e.optOutInThisSession,
        u = e.stickyValue,
        c = e.truthfulActionTypeEnabled,
        d = n ? u === !1 || (u == null && !t) : !t,
        m = u === !1 || (a && u == null),
        p = l && d && m && !s;
      if (p) return { shouldOptIn: !0, optInSource: "REFRESH" };
      if (!n) {
        var _ = c && u === !1 ? "STICKY" : "DEFAULT";
        return { shouldOptIn: t, optInSource: _ };
      }
      var f = o(
          "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
        ).mergeStickyOptInWithDefaultOn(
          r("LoadObject").withValue(u, { creatorModuleID: i.id }),
          t,
        ),
        g = f.getValue();
      return g == null
        ? o("adsUEditorGetShouldEnableAutoflowByDefaultSelector")
            .AUTOFLOW_OPT_OUT_DEFAULT_STATUS
        : g;
    }
    l.default = e;
  },
  98,
);
