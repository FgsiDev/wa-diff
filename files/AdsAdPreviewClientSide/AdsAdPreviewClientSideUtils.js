__d(
  "AdsAdPreviewClientSideUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdPreviewRenderSpecUtils",
    "AdsClientSidePreviewWhitelistConfig.experimental",
    "AdsPreviewConsistencyContainerTypes",
    "AdsPreviewsPlugins",
    "URI",
    "first",
    "last",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useRef,
      c = r(
        "AdsClientSidePreviewWhitelistConfig.experimental",
      ).ENTRYPOINT_WHITELIST.concat(
        o("AdsPreviewConsistencyContainerTypes")
          .AD_CLIENT_CONSISTENCY_CONTAINER_CLIENT,
      ),
      d = new Set(["original"]);
    function m(e) {
      return (
        (e.adCreativeOptimizationType == null ||
          e.adCreativeOptimizationType === 0) &&
        (e.adCreativeOptimizationOptionValue == null ||
          e.adCreativeOptimizationOptionValue === 0) &&
        (e.adCreativeOptimizationMulti == null ||
          e.adCreativeOptimizationMulti.length === 0)
      );
    }
    function p(e) {
      var t;
      if (e == null) return !0;
      if (((t = e.config) == null ? void 0 : t.type) === "dco-media") {
        var n = e.config,
          o = n.fieldPath,
          a = n.index;
        return (
          a === 0 &&
          o === r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES
        );
      }
      return d.has(e.pluginKey);
    }
    function _(e, t, n, a, i, l, s, u) {
      return (
        !i &&
        o("AdsAdPreviewRenderSpecUtils").isRenderSpecSupported(t) &&
        c.includes(n) &&
        m(l) &&
        p(s) &&
        r("AdsPreviewsPlugins")
          .withShape({ apiFormat: e })
          .getOne()
          .isClientSideSupported(t, n, a, u)
      );
    }
    function f(e, t, n, r, o, a, i) {
      return (a === void 0 && (a = {}), _(e, t, n, r, o, a, i, !1));
    }
    function g(e, t, n, r, o, a) {
      return _(e, t, n, r, o, {}, a, !0);
    }
    function h(t, n) {
      var o,
        a = new (e || (e = r("URI")))(t).getPath(),
        i = new e(n).getPath(),
        l = u(null);
      return (
        i === ((o = l.current) == null ? void 0 : o.renderSpecMediaBaseURL) ||
          (l.current = { mediaURL: n, renderSpecMediaBaseURL: a }),
        l.current
      );
    }
    function y() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      var a = n.filter(Boolean);
      if (a.length === 0) return null;
      var i =
        new Set(
          a.map(function (t) {
            return new (e || (e = r("URI")))(t).getPath();
          }),
        ).size === 1;
      return i ? r("last")(a) : r("first")(a);
    }
    ((l.isClientSideSupported = f),
      (l.isClientSideSupportedBypassGK = g),
      (l.useCachedMediaURL = h),
      (l.getUrlByPriorityUnlessAllHaveTheSameBaseURL = y));
  },
  98,
);
