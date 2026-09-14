__d(
  "adsUEditorUnifiedAPlusCInitOptInStatusRawSelectFunc",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.mapValue(function (e) {
        return e != null
          ? { shouldOptIn: e, optInSource: "STICKY" }
          : t().mapValue(function (e) {
              return { shouldOptIn: e, optInSource: "DEFAULT" };
            });
      });
    }
    function l(e, t) {
      return t().mapValue(function (t) {
        var n = e.shouldOptIn === !1 && e.optInSource === "DEFAULT";
        return n && t ? { shouldOptIn: !0, optInSource: "DEFAULT" } : e;
      });
    }
    function s(e, t, n) {
      if (e.shouldOptIn === !1) {
        var r = n.getValue();
        return r != null && !(r.VERTICAL === null && r.SQUARE === null)
          ? {
              shouldOptIn: r.VERTICAL === !0 || r.SQUARE === !0,
              optInSource: "CROP_OVERRIDE",
            }
          : { shouldOptIn: t, optInSource: "CROP_OVERRIDE" };
      }
      return e;
    }
    function u(e, t) {
      return t == null
        ? e
        : babelHelpers.extends({}, e, {
            customizations: { text_extraction: t },
          });
    }
    function c(e, t) {
      return e.mapValue(function (e) {
        return e != null
          ? { shouldOptIn: e, optInSource: "STICKY" }
          : { shouldOptIn: t, optInSource: "DEFAULT" };
      });
    }
    ((i.overrideWithSalesSegmentationDefaultOn = e),
      (i.overrideWithPersonalizedRecommendation = l),
      (i.overrideWithPACUpfunnelDefaultOn = s),
      (i.mergeWithTextExtractionDefaultOn = u),
      (i.mergeStickyOptInWithDefaultOn = c));
  },
  66,
);
