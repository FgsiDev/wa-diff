__d(
  "adsAutoflowStickyOptInLOSelector",
  [
    "LoadObject",
    "adsCreateSelector",
    "adsShouldIgnoreStickySettingSelector",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("userSettingsSelector"), r("adsShouldIgnoreStickySettingSelector")],
        function (t, n) {
          var e;
          return n
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : (e =
                  t == null
                    ? void 0
                    : t.mapValue(function (e) {
                        if (e.autoflow_lite_opt_in_status === "OPTED_IN")
                          return !0;
                        if (e.autoflow_lite_opt_in_status === "OPTED_OUT")
                          return !1;
                      })) != null
              ? e
              : r("LoadObject").withValue(void 0, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsAutoflowStickyOptInLOSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
