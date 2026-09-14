__d(
  "AdsAdgroupWebAndAppPACMutatorUtils",
  [
    "AdsAssetFeedMutationUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWebAndApp3COUtils",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = a;
      if (
        o("AdsWebAndApp3COUtils").is3COPACAllowed(
          e == null ? void 0 : e.objective,
          r("adsConvertAdObjectRecordToPlainJS")(t),
        )
      )
        for (
          var l,
            u = s(i),
            c =
              (l = i.creative) == null || (l = l.asset_feed_spec) == null
                ? void 0
                : l.link_urls,
            d = 0;
          d < ((m = c == null ? void 0 : c.size) != null ? m : 0);
          d++
        ) {
          var m, p;
          (c == null ? void 0 : c.get(d)) != null &&
            (c == null || (p = c.get(d)) == null
              ? void 0
              : p.omnichannel_link_spec) == null &&
            (i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              i,
              n,
              r("AdsUnifiedCreativeAPIFields").linkURL,
              d,
              "omnichannel_link_spec",
              u,
            ));
        }
      return (
        (i = o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
          i,
          n,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          "adlabels",
        )),
        i
      );
    }
    function s(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.omnichannel_link_spec;
      return (n == null ? void 0 : n.web) != null
        ? n
        : n == null
          ? void 0
          : n.setIn(["web", "url"], "");
    }
    l.addOmniChannelLinkSpecForPACMutator = e;
  },
  98,
);
