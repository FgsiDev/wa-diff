__d(
  "AdsUEditorDestinationOptimizationUtils",
  [
    "AdsInterfacesLogger",
    "AdsUserSettingsDataManager",
    "DestinationOptimizationUtils.react",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o, a, i) {
      var l = !1,
        s = n == null ? new Map() : n;
      if (t && s.has(o)) {
        var u;
        (r("AdsInterfacesLogger").log({
          eventName: "destination_optimization_DO_sticky_opt_out_disabled",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            {},
            i != null && ((u = {}), (u.adgroup_id = i), u),
          ),
        }),
          s.delete(o),
          (l = !0));
      } else if (!t) {
        var c;
        (r("AdsInterfacesLogger").log({
          eventName: "destination_optimization_DO_sticky_opt_out_enabled",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            {},
            i != null && ((c = {}), (c.adgroup_id = i), c),
          ),
        }),
          s.set(o, (e || (e = r("performanceAbsoluteNow")))()),
          (l = !0));
      }
      l &&
        a != null &&
        r(
          "AdsUserSettingsDataManager",
        ).setDestinationOptimizationOptOutTimestamp(a, s);
    }
    function u(e, t) {
      var n, r;
      if (
        e == null ||
        !o("DestinationOptimizationUtils.react").passDOStickySettingGK(!0)
      )
        return !1;
      var a =
        (n =
          t == null ||
          (r = t.ads_destination_optimization_opt_out_timestamp) == null
            ? void 0
            : r.get(e)) != null
          ? n
          : 0;
      return a > 0;
    }
    ((l.updatedStickySettingForDOToggle = s), (l.shouldStickyOptOutDO = u));
  },
  98,
);
