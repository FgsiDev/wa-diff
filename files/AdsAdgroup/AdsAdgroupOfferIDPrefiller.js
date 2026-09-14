__d(
  "AdsAdgroupOfferIDPrefiller",
  ["AdsAdgroupPrefillerUtils", "AdsUnifiedCreativeAPIFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "offerID",
        genPaths: function (t) {
          var e,
            n = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
              t,
              r("AdsUnifiedCreativeAPIFields").offerID,
            ),
            a = n.current,
            i = n.original;
          if (!a || !i) return [];
          var l = t.original.adgroup.getIn(i),
            s =
              (e = t.current.campaign.promoted_object) == null
                ? void 0
                : e.offer_id;
          return l && l === s ? [{ current: a, original: i }] : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
