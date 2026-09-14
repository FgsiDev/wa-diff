__d(
  "AdsUEditorAdgroupCallAdsMutators",
  [
    "AdsClickToCallDynamicAdsUtils",
    "AdsPCAUnificationUtils",
    "AdsUEditorAdgroupDynamicMutators",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      if (
        o("AdsClickToCallDynamicAdsUtils").isDynamicCallAdEligible(e, t) &&
        (l == null ? void 0 : l.getValue()) != null
      ) {
        var u = r("nullthrows")(a.get(i.id)),
          c = u.campaign,
          d = u.campaignGroup,
          m = u.specPlugin;
        if (
          o(
            "AdsPCAUnificationUtils",
          ).isPcaUnificationEnabledAndL3CatalogNotSelected(d)
        )
          return i;
        var p = { campaign: c, campaignGroup: d, adgroup: i };
        return o(
          "AdsUEditorAdgroupDynamicMutators",
        ).transformAdgroupFromStaticToDynamicSingleMedia(
          i,
          p,
          l.getValue(),
          s.getValue(),
          m,
        );
      } else return i;
    }
    l.defaultPhoneCallAdgroupFromStaticToDynamicSingleMedia = e;
  },
  98,
);
