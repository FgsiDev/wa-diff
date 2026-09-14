__d(
  "adsProductAudienceSpecsHasSameProductAudience",
  [
    "AdsAudienceBehaviorUtils",
    "AdsDynamicTargetingPackagePlugins",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsDynamicTargetingPackagePlugins").get(t).defaultFields;
      if (e.length !== n.length) return !1;
      for (var a = 0; a < n.length; a++) {
        var i = e[a],
          l = n[a];
        for (var s of ["inclusions", "exclusions"]) {
          var u = i[s] || [],
            c = l[s] || [];
          if (u.length !== c.length) return !1;
          for (var d = 0; d < c.length; d++) {
            var m = r("getByPath")(
                o("AdsAudienceBehaviorUtils").parseBehaviorRule(c[d]),
                ["event", "eq"],
              ),
              p = r("getByPath")(
                o("AdsAudienceBehaviorUtils").parseBehaviorRule(u[d]),
                ["event", "eq"],
              );
            if (p !== m) return !1;
          }
        }
      }
      return !0;
    }
    l.default = e;
  },
  98,
);
