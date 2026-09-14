__d(
  "AdsInteractivePollRemoveSpecUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = e,
        i =
          (t = a) == null || (t = t.creative) == null
            ? void 0
            : t.interactive_components_spec;
      i != null &&
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.interactive_components_spec.delete(a));
      var l =
        (n = a) == null ||
        (n = n.creative) == null ||
        (n = n.asset_feed_spec) == null
          ? void 0
          : n.videos;
      return l != null
        ? l.reduce(function (e, t, n) {
            var a = o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(
              r("immutable").fromJS(t),
            );
            return a != null
              ? o(
                  "adsAssetFeedSpecRemoveAssetFieldAtIndex",
                ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
                  e,
                  "videos",
                  n,
                  "interactive_components_spec",
                )
              : e;
          }, a)
        : a;
    }
    l.removeFbFeedVideoPollSpecFromAdgroupRecord = e;
  },
  98,
);
