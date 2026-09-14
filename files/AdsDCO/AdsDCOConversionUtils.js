__d(
  "AdsDCOConversionUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "NonURLLinkCTATypes",
    "ShutterstockImageUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(Object.keys(r("NonURLLinkCTATypes")));
    function s(e) {
      var t = e.get("url");
      return (
        typeof t != "string" || !o("ShutterstockImageUtils").isStockImageURL(t)
      );
    }
    function u(e) {
      return typeof e == "string" && e.includes("shutterstock");
    }
    function c(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.thumbnail_url;
      return u(n)
        ? o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.thumbnail_height.delete,
            r("AdsAdgroupRecordAccessors").creative.thumbnail_width.delete,
            r("AdsAdgroupRecordAccessors").creative.thumbnail_url.delete,
          )(e)
        : e;
    }
    function d(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      if (!n) return e;
      var o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.images.set(n.filter(s), e);
      return c(o);
    }
    function m(t) {
      var n;
      if (!o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t)) return t;
      var a =
        ((n = t.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.call_to_action_types) || r("immutable").List([]);
      return (
        (a = a.filter(function (t) {
          return !e.has(t);
        })),
        a.size === 0 &&
          (a = a.push(r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE")),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_action_types.set(a, t)
      );
    }
    ((l.filterDCOUnsupportedImageTypes = d),
      (l.filterDCOUnsupportedCTATypes = m));
  },
  98,
);
