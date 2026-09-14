__d(
  "adsUEditorContextualDiscoveryAdsEligibilitySpecStatusSelector",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupRecordAccessors",
    "AdsContextualDiscoveryAdsUtils",
    "adsCreateSelector",
    "adsUEditorMultiAdsStickyOptOutSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupsSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "adsUEditorSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsUEditorSelectedAdgroupsSelector"),
          r("adsUEditorSelectedCampaignsSelector"),
          r("adsUEditorSelectedCampaignGroupsSelector"),
          r("adsUEditorMultiAdsStickyOptOutSelector"),
        ],
        function (t, n, a, i, l) {
          if (t == null || t.length < 1) return { shouldOptIn: !0 };
          var e = n.filter(function (e) {
            return t.includes(e.id);
          });
          if (e == null || e.length < 1) return { shouldOptIn: !0 };
          var s = a.filter(function (t) {
            return t.id === e[0].adset_id;
          });
          if (s == null || s.length < 1) return { shouldOptIn: !0 };
          var u = i.filter(function (t) {
            return t.id === e[0].campaign_id;
          });
          if (u == null || u.length < 1) return { shouldOptIn: !0 };
          if (
            r("AdsAdgroupDraftFragmentStore").isNew(t[0]) &&
            !o("AdsContextualDiscoveryAdsUtils").isDuplicateFlow(e[0])
          ) {
            var c = l().getValue() === !0;
            return c
              ? { shouldOptIn: !1, isExplicitOptOut: !0 }
              : { shouldOptIn: !0 };
          } else {
            var d,
              m =
                (d = r("AdsAdgroupRecordAccessors").creative) == null ||
                (d = d.contextual_multi_ads) == null
                  ? void 0
                  : d.enroll_status.get(e[0]),
              p = m === "OPT_IN",
              _ = m === "OPT_OUT";
            return { shouldOptIn: p, isExplicitOptOut: _ };
          }
        },
        {
          name:
            i.id +
            ".adsUEditorContextualDiscoveryAdsEligibilitySpecStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
