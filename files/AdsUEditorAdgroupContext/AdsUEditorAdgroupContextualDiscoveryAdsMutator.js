__d(
  "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
  ["AdsAdgroupRecordAccessors", "ContextualMultiAdsActionMetadataType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.keys(r("ContextualMultiAdsActionMetadataType"));
    function s(e, t) {
      var n = e;
      return t.shouldRenderCheckbox !== !0
        ? r("AdsAdgroupRecordAccessors").creative.contextual_multi_ads.delete(n)
        : (t.shouldOptIn === !0
            ? ((n = r(
                "AdsAdgroupRecordAccessors",
              ).creative.contextual_multi_ads.enroll_status.set("OPT_IN", n)),
              (n = u(t.actionMetadataType, n)))
            : t.isExplicitOptOut === !0
              ? ((n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.contextual_multi_ads.enroll_status.set(
                  "OPT_OUT",
                  n,
                )),
                (n = u(t.actionMetadataType, n)))
              : (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.contextual_multi_ads.delete(n)),
          n);
    }
    function u(t, n) {
      var o = n;
      if (t != null && e.includes(t)) {
        var a = e.indexOf(t);
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.contextual_multi_ads.action_metadata.type.set(e[a], n);
      }
      return o;
    }
    l.updateContextualDiscoveryAdsEligibilitySpec = s;
  },
  98,
);
