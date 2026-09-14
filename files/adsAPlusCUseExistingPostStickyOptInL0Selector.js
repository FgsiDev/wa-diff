__d(
  "adsAPlusCUseExistingPostStickyOptInL0Selector",
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
                  if (e.aplusc_epa_opt_in_status === "OPTED_IN") return !0;
                  if (e.aplusc_epa_opt_in_status === "OPTED_OUT") return !1;
                })) != null
            ? e
            : r("LoadObject").withValue(void 0, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsAPlusCUseExistingPostStickyOptInL0Selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
