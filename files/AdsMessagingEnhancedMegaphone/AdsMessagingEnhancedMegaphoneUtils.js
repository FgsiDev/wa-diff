__d(
  "AdsMessagingEnhancedMegaphoneUtils",
  [
    "FBLogger",
    "GeoIcon.react",
    "geoIPMGatingUtils",
    "meta-brand-block-circle-filled-16",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("geoIPMGatingUtils").shouldShowNewBrandingColors(),
      c = new Set(["error", "warning", "legal"]),
      d = new Set(["success"]),
      m = { error: 3, warning: 2, legal: 1, info: 0, recommend: 0, success: 0 };
    function p(e) {
      e: {
        if (e === "error") return "error";
        if (e === "info") return "info";
        if (e === "legal") return "legal";
        if (e === "recommend") return "recommend";
        if (e === "success") return "success";
        if (e === "warning") return "warning";
        {
          return (
            r("FBLogger")("ads").mustfix("Unexpected severity %s", e),
            "info"
          );
          break e;
        }
      }
    }
    function _(e) {
      return u
        ? c.has(e)
          ? "error"
          : d.has(e)
            ? "success"
            : "indeterminate"
        : c.has(e)
          ? "error"
          : "success";
    }
    function f(e) {
      var t = s.jsx(r("GeoIcon.react"), {
          color: "inverted",
          icon: o("meta-brand-block-circle-filled-16")
            .metaBrandBlockCircleStopFilled16,
        }),
        n = s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-block-circle-filled-16")
            .metaBrandBlockCircleStopFilled16,
        });
      return u ? (c.has(e) ? t : n) : t;
    }
    function g(e) {
      return e.toSorted(function (e, t) {
        return e.isBinding && t.isBinding
          ? m[t.severity] - m[e.severity]
          : e.isBinding
            ? -1
            : t.isBinding
              ? 1
              : m[t.severity] - m[e.severity];
      });
    }
    function h(e) {
      return g(
        e.map(function (e) {
          var t;
          return babelHelpers.extends({}, e, {
            severity: p(e.severity),
            isBinding: (t = e.isBinding) != null ? t : !1,
          });
        }),
      );
    }
    ((l.getMessageStatus = _),
      (l.getMessageIcon = f),
      (l.sortSYDAlerts = g),
      (l.sortBannerMessages = h));
  },
  98,
);
