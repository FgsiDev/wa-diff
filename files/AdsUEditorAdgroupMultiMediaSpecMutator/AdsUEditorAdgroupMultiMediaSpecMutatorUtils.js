__d(
  "AdsUEditorAdgroupMultiMediaSpecMutatorUtils",
  [
    "AdsImageIDUtils",
    "AdsUEditorBaseAssetPickerUtils",
    "AdsVideoStore",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (e.type !== "IMAGE" || t == null) return null;
      var a = o("AdsUEditorBaseAssetPickerUtils").getAdsImageID(
        { imageHash: e.id, imageURL: e.url },
        t,
      );
      if (a == null) return null;
      var l = {
        height: 0,
        width: 0,
        url: (n = e.url) != null ? n : "",
        isSphericalPhoto: !1,
      };
      return {
        type: "image",
        id: a,
        asset: r("LoadObject").withValue(l, { creatorModuleID: i.id }),
        crops: null,
        trimmingParams: null,
      };
    }
    function s(e) {
      if (e.type !== "VIDEO") return null;
      var t = r("AdsVideoStore").get(e.id);
      return t == null
        ? null
        : {
            type: "video",
            id: e.id,
            asset: t,
            crops: null,
            trimmingParams: null,
          };
    }
    function u(e, t) {
      var n = t.entrySeq().find(function (t) {
        var n = t[0];
        if (n.type === "image") {
          var r = o("AdsImageIDUtils").getImageHashFromID(n.id);
          return r === e;
        }
        return !1;
      });
      return n ? n[0] : null;
    }
    function c(e, t) {
      var n = t.entrySeq().find(function (t) {
        var n = t[0];
        return n.type === "video" ? n.id === e : !1;
      });
      return n ? n[0] : null;
    }
    function d(t, n, r, a) {
      var i = new Set(
          n
            .filter(function (e) {
              return e.type === "IMAGE";
            })
            .map(function (e) {
              return e.id;
            }),
        ),
        l = t.filter(function (e) {
          if ((e == null ? void 0 : e.type) === "image") {
            var t = o("AdsImageIDUtils").getImageHashFromID(e.id);
            return t != null && i.has(t);
          }
          return !1;
        }),
        s = new Set(
          l
            .map(function (e) {
              return (e == null ? void 0 : e.type) === "image"
                ? o("AdsImageIDUtils").getImageHashFromID(e.id)
                : null;
            })
            .filter(Boolean),
        ),
        c = n
          .filter(function (e) {
            return e.type === "IMAGE" && !s.has(e.id);
          })
          .map(function (t) {
            var n = u(t.id, r);
            return n != null ? n : e(t, a);
          })
          .filter(Boolean);
      return [].concat(l, c);
    }
    function m(e, t, n) {
      var r = new Set(
          t
            .filter(function (e) {
              return e.type === "VIDEO";
            })
            .map(function (e) {
              return e.id;
            }),
        ),
        o = e.filter(function (e) {
          return (e == null ? void 0 : e.type) === "video"
            ? r.has(String(e.id))
            : !1;
        }),
        a = new Set(
          o
            .map(function (e) {
              return (e == null ? void 0 : e.type) === "video"
                ? String(e.id)
                : null;
            })
            .filter(Boolean),
        ),
        i = t
          .filter(function (e) {
            return e.type === "VIDEO" && !a.has(e.id);
          })
          .map(function (e) {
            var t = c(e.id, n);
            return t != null ? t : s(e);
          })
          .filter(Boolean);
      return [].concat(o, i);
    }
    ((l.filterRelatedMediaImages = d), (l.filterRelatedMediaVideos = m));
  },
  98,
);
