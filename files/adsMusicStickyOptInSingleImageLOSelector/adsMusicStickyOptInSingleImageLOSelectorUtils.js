__d(
  "adsMusicStickyOptInSingleImageLOSelectorUtils",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (n =
        e == null
          ? void 0
          : e.mapValue(function (e) {
              return s(e, t);
            })) != null
        ? n
        : r("LoadObject").withValue(void 0, { creatorModuleID: i.id });
    }
    function s(e, t) {
      var n,
        r,
        o = new Map();
      if (!t) return (o.set("single_image", !0), o.set("carousel", !0), o);
      var a =
          e == null ||
          (n = e.creative_feature_default_config) == null ||
          (n = n.aplusc_sticky_opt_in_status_v2) == null
            ? void 0
            : n.find(function (e) {
                return (e == null ? void 0 : e.key) === "audio";
              }),
        i = a == null || (r = a.value) == null ? void 0 : r.status;
      return (
        i === "OPTED_IN"
          ? (o.set("single_image", !0), o.set("carousel", !0))
          : i === "OPTED_OUT" &&
            (o.set("single_image", !1), o.set("carousel", !1)),
        o
      );
    }
    ((l.adsMusicStickyOptInSingleImageLO = e),
      (l.adsMusicStickyOptInSingleImageLORelay = s));
  },
  98,
);
