__d(
  "AdsDLOFieldUtils",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsDLOLanguageUtils",
    "AdsImageIDUtils",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      var i = e || r("immutable").List(),
        l = i.findEntry(function (e) {
          return m(e.get(n), a);
        }),
        s = l ? l[0] : i.size,
        u = l ? l[1] : r("immutable").Map();
      return (
        (u = o !== null ? u.set(t, o) : u.remove(t)),
        (u = u.set(
          n,
          r("immutable").List.of(r("immutable").Map().set("name", a)),
        )),
        i.set(s, u)
      );
    }
    function u(t, n, r) {
      var a,
        i =
          (a = t.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.link_urls,
        l = e(i, "website_url", "adlabels", n, r),
        s = o("AdsAssetFeedFieldUtils").getDefaultIndexForAsset(t, "link_urls"),
        u = "";
      return (
        !i || s === i.size
          ? (u = n)
          : (u =
              o("AdsAssetFeedFieldUtils").getAssetAtIndex(
                i,
                "display_url",
                s,
              ) ||
              n ||
              ""),
        e(l, "display_url", "adlabels", u, r)
      );
    }
    function c(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      return n
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images.set(
            n.remove(
              o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "images"),
            ),
            e,
          )
        : e;
    }
    function d(e, t) {
      var n,
        a = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(e),
        i = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        l = a.filter(function (e) {
          return e !== i;
        });
      if (!o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e))
        return r("immutable").OrderedMap();
      var u =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.images;
      if (!u) return r("immutable").OrderedMap();
      var c = o("AdsAssetFeedFieldUtils").getAssetMapForLabels(
        u,
        "adlabels",
        l,
      );
      return c.map(function (e) {
        var n = e.get("hash"),
          a = e.get("url");
        return r("isTruthy")(n)
          ? (typeof n == "string" || s(0, 4533),
            o("AdsImageIDUtils").getImageID({ hash: n, accountID: t }))
          : (typeof a == "string" || s(0, 4534),
            o("AdsImageIDUtils").getImageID({ url: a, accountID: t }));
      });
    }
    function m(e, t) {
      return e === void 0
        ? !1
        : (e instanceof r("immutable").List || s(0, 4530),
          e.findIndex(function (e) {
            return (
              e instanceof r("immutable").Map || s(0, 1235),
              e.get("name") === t
            );
          }) !== -1);
    }
    function p(e, t) {
      return f(e, "deeplink_url", t);
    }
    function _(e, t) {
      return f(e, "display_url", t);
    }
    function f(e, t, n) {
      var a;
      if (!o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) return e;
      var i =
        (a = e.creative) == null || (a = a.asset_feed_spec) == null
          ? void 0
          : a.link_urls;
      if (i == null) return e;
      var l = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        u =
          l != null
            ? o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
                e,
                l,
                "link_url_label",
              )
            : null,
        c = i.map(function (e) {
          var o = e.get("adlabels");
          o instanceof r("immutable").List || s(0, 13691);
          var a =
            o.findIndex(function (e) {
              return e.get("name") === u;
            }) !== -1;
          if (a) return e;
          var i = e.get("website_url");
          return n !== "" && i !== "" && i != null ? e.set(t, n) : e.delete(t);
        });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.link_urls.set(c, e);
    }
    function g(e) {
      if (e.length === 0) return null;
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n >= 48 && n >= 1470 && n <= 1920) return "rtl";
      }
      return "ltr";
    }
    ((l.updateFieldValueForLabel = e),
      (l.updateLinkURLForLabel = u),
      (l.removeDefaultImage = c),
      (l.getAdditionalDLOImageIDsByLanguage = d),
      (l.setDeeplinkURLforNonDefaultLinkURLs = p),
      (l.setDisplayURLforNonDefaultLinkURLs = _),
      (l.getTextDirection = g));
  },
  98,
);
