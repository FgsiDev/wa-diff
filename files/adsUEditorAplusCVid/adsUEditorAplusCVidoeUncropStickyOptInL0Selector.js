__d(
  "adsUEditorAplusCVidoeUncropStickyOptInL0Selector",
  ["LoadObject", "adsCreateSelector", "userSettingsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("userSettingsSelector")],
      function (t) {
        var e;
        return (e =
          t == null
            ? void 0
            : t.mapValue(function (e) {
                var t,
                  n,
                  r,
                  o,
                  a = e.aplusc_videouncrop_opt_in_status;
                if (a === "OPTED_IN") return !0;
                if (a === "OPTED_OUT") return !1;
                var i = e.creative_feature_default_config,
                  l =
                    i == null || (t = i.aplusc_sticky_opt_in_status_v2) == null
                      ? void 0
                      : t.find(function (e) {
                          return e.key === "video_uncrop";
                        });
                if (
                  (l == null || (n = l.value) == null ? void 0 : n.status) ===
                  "OPTED_IN"
                )
                  return !0;
                if (
                  (l == null || (r = l.value) == null ? void 0 : r.status) ===
                  "OPTED_OUT"
                )
                  return !1;
                var s =
                  i == null || (o = i.aplusc_sticky_opt_in_status) == null
                    ? void 0
                    : o.find(function (e) {
                        return e.key === "video_uncrop";
                      });
                return (s == null ? void 0 : s.value) === "OPTED_IN"
                  ? !0
                  : (s == null ? void 0 : s.value) === "OPTED_OUT"
                    ? !1
                    : null;
              })) != null
          ? e
          : r("LoadObject").withValue(null, { creatorModuleID: i.id });
      },
      { name: i.id + ".adsUEditorAplusCVideoUncropStickyOptInL0Selector" },
    );
    l.adsUEditorAplusCVideoUncropStickyOptInL0Selector = e;
  },
  98,
);
