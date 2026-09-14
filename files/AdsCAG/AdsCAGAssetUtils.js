__d(
  "AdsCAGAssetUtils",
  ["emptyArray", "immutable", "memoizeByReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        (n = e.creative_asset_groups_spec) == null || (n = n.groups) == null
          ? void 0
          : n.size) != null
        ? t
        : 0;
    }
    function s() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = new Set(t);
      return function (e) {
        return e.source != null && r.has(e.source);
      };
    }
    var u = r("memoizeByReference")(c);
    function c(e) {
      var t,
        n,
        o,
        a =
          (t =
            e == null || (n = e.creative_asset_groups_spec) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (
        a instanceof r("immutable").List && (a = a.toJS()),
        a == null
          ? r("emptyArray")
          : (o = a.reduce(function (e, t) {
                var n = t.posts;
                return n != null ? [].concat(e, n) : e;
              }, [])) != null
            ? o
            : r("emptyArray")
      );
    }
    var d = r("memoizeByReference")(m);
    function m(e) {
      var t,
        n,
        o,
        a =
          (t =
            e == null || (n = e.creative_asset_groups_spec) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (
        a instanceof r("immutable").List && (a = a.toJS()),
        a == null
          ? r("emptyArray")
          : (o = a.reduce(function (e, t) {
                var n = t.images;
                return n != null ? [].concat(e, n) : e;
              }, [])) != null
            ? o
            : r("emptyArray")
      );
    }
    var p = r("memoizeByReference")(_);
    function _(e) {
      var t,
        n,
        o,
        a =
          (t =
            e == null || (n = e.creative_asset_groups_spec) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (
        a instanceof r("immutable").List && (a = a.toJS()),
        a == null
          ? r("emptyArray")
          : (o = a.reduce(function (e, t) {
                var n = t.videos;
                return n != null ? [].concat(e, n) : e;
              }, [])) != null
            ? o
            : r("emptyArray")
      );
    }
    function f(e) {
      var t = e.hash,
        n = e.image_crops,
        o = e.source,
        a = e.url,
        i = n != null ? [["image_crops", n]] : [];
      return t != null
        ? r("immutable").Map([["hash", t]].concat(i))
        : a != null
          ? r("immutable").Map([["url", a]].concat(i))
          : r("immutable").Map();
    }
    function g(e) {
      return e.map(f);
    }
    function h(e) {
      var t = e.image_url,
        n = e.thumbnail_id,
        o = e.thumbnail_source,
        a = e.video_id;
      return r("immutable")
        .Map([
          ["video_id", a],
          ["thumbnail_id", n],
          ["thumbnail_source", o],
          ["thumbnail_url", t],
        ])
        .filter(Boolean);
    }
    function y(e) {
      return e.map(h);
    }
    function C(e) {
      var t = e.post_id,
        n = e.source_instagram_media_id;
      return r("immutable")
        .Map([
          ["post_id", t],
          ["source_instagram_media_id", n],
        ])
        .filter(Boolean);
    }
    function b(e) {
      return e.map(C);
    }
    function v(e, t) {
      var n, o, a, i;
      if (t == null || t === "all")
        return { imageSpecs: d(e), videoSpecs: p(e), postSpecs: u(e) };
      var l = Number(t),
        s =
          (n = e.creative_asset_groups_spec) == null ? void 0 : n.toJS().groups;
      return s == null || s[l] == null
        ? {
            imageSpecs: r("emptyArray"),
            videoSpecs: r("emptyArray"),
            postSpecs: r("emptyArray"),
          }
        : {
            imageSpecs: (o = s[l].images) != null ? o : [],
            videoSpecs: (a = s[l].videos) != null ? a : [],
            postSpecs: (i = s[l].posts) != null ? i : [],
          };
    }
    function S(e) {
      return e.map(function (e) {
        return r("immutable")
          .Map([
            ["hash", e.hash],
            ["url", e.url],
            ["image_crops", e.image_crops],
          ])
          .filter(Boolean);
      });
    }
    function R(e) {
      return e.map(function (e) {
        return h(e);
      });
    }
    ((l.getCreativeAssetGroupCount = e),
      (l.buildSourceFilter = s),
      (l.getAllPostSpecs = u),
      (l.getAllImageSpecs = d),
      (l.getAllVideoSpecs = p),
      (l.convertImageSpecToImageAsset = f),
      (l.convertImageSpecsToImageAssets = g),
      (l.convertVideoSpecToVideoAsset = h),
      (l.convertImageSpecsToVideoAssets = y),
      (l.convertPostSpecsToPostAssets = b),
      (l.getAssetSpecsAtGroup = v),
      (l.convertCagImageSpecToImageAssets = S),
      (l.convertCagVideoSpecToVideoAssets = R));
  },
  98,
);
