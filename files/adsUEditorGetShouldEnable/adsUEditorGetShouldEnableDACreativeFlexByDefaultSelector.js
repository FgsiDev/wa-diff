__d(
  "adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
  [
    "AdsAPlusCFastTrackV2Utils",
    "AdsAccountStore",
    "DAFlexibleFormatUtils",
    "adsCreateSelector",
    "gkx",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount, r("userSettingsSelector")],
        function (t, n) {
          var e;
          if (
            !o("DAFlexibleFormatUtils").passFlexibleFormatAdexGK("silent") ||
            !o("DAFlexibleFormatUtils").passFlexibleFormatAndRelatedMediaAdexGK(
              "silent",
            ) ||
            !o("DAFlexibleFormatUtils").isDACreativeFlexDefaultOnJKEnabled() ||
            o("AdsAPlusCFastTrackV2Utils").isAccountInSensitiveVerticals() ||
            r("gkx")("19445")
          )
            return !1;
          var a = t.getValue(),
            i = o("AdsAPlusCFastTrackV2Utils").isSBGSegment(
              a == null ? void 0 : a.sales_segment_v2,
            );
          if (!i) return !1;
          var l =
            (e = n.getValue()) == null
              ? void 0
              : e.da_creative_flex_opt_in_status;
          return l !== "OPTED_OUT";
        },
        {
          name:
            i.id + ".adsUEditorGetShouldEnableDACreativeFlexByDefaultSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
