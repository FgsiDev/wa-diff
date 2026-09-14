__d(
  "adsAPlusCCarouselCDAStickyOptInL0Selector",
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
                  var t, n, r, o;
                  if (e.aplusc_carousel_cda_opt_in_status === "OPTED_IN")
                    return !0;
                  if (e.aplusc_carousel_cda_opt_in_status === "OPTED_OUT")
                    return !1;
                  var a = e.creative_feature_default_config,
                    i =
                      a == null ||
                      (t = a.aplusc_sticky_opt_in_status_v2) == null
                        ? void 0
                        : t.find(function (e) {
                            return e.key === "description_automation";
                          });
                  if (
                    (i == null || (n = i.value) == null ? void 0 : n.status) ===
                    "OPTED_IN"
                  )
                    return !0;
                  if (
                    (i == null || (r = i.value) == null ? void 0 : r.status) ===
                    "OPTED_OUT"
                  )
                    return !1;
                  var l =
                    a == null || (o = a.aplusc_sticky_opt_in_status) == null
                      ? void 0
                      : o.find(function (e) {
                          return e.key === "description_automation";
                        });
                  if ((l == null ? void 0 : l.value) === "OPTED_IN") return !0;
                  if ((l == null ? void 0 : l.value) === "OPTED_OUT") return !1;
                })) != null
            ? e
            : r("LoadObject").withValue(void 0, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsAPlusCCarouselCDAStickyOptInL0Selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
