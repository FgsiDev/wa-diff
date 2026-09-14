__d(
  "adsUEditorCFDefaultOnAccountEligibilitySelector",
  [
    "AdsAccountSettingsIdProvider",
    "AdsCreativeFlexGKCheckUtils",
    "AdsInterfacesLogger",
    "adsCreateSelector",
    "adsCreativeFlexStickyOptInSelector",
    "adsUserSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsCreativeFlexStickyOptInSelector")
            .adsCreativeFlexStickyOptInSelector,
          r("AdsAccountSettingsIdProvider").toFluxSelector(),
          o("adsUserSettingsSelector").adsUserSettingsSelector,
        ],
        function (t, n, a) {
          var e = o("AdsCreativeFlexGKCheckUtils").isEligibleForSBGDefaultOn(),
            i = o("AdsCreativeFlexGKCheckUtils").isEligibleForNewSBGDefaultOn(),
            l = o(
              "AdsCreativeFlexGKCheckUtils",
            ).isEligibleForSBGStickyDefaultOn();
          if (!l && (e || i)) {
            var s = o(
              "AdsCreativeFlexGKCheckUtils",
            ).getCreativeFlexOptOutStickyThreshold();
            if (s > 0) {
              var u,
                c,
                d = n != null ? a(n).getValue() : null,
                m = d == null ? void 0 : d.creative_flex_opt_in_status,
                p =
                  (u = d == null ? void 0 : d.creative_flex_opt_out_count) !=
                  null
                    ? u
                    : 0,
                _ = m === "OPTED_OUT" && p >= s;
              if (
                (r("AdsInterfacesLogger").log({
                  eventName: "creative_flex_sbg_sticky_strike_gate",
                  data:
                    ((c = {}),
                    (c.status = _ ? "blocked" : "allowed"),
                    (c.source = m != null ? m : "undefined"),
                    (c.old_value = String(p)),
                    (c.new_value = String(s)),
                    (c.metadata = "sbg:" + String(e) + ",new_sbg:" + String(i)),
                    c),
                }),
                _)
              )
                return !1;
            }
            return !0;
          }
          var f = t.getValue();
          return f ? f() : !1;
        },
        { name: i.id + ".adsUEditorCFDefaultOnAccountEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
