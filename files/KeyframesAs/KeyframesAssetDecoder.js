__d(
  "KeyframesAssetDecoder",
  [
    "BlobFactory",
    "KeyframesPluginsLoader",
    "KeyframesSchema",
    "KeyframesVideoUtils",
    "Promise",
    "flatbuffers",
    "promiseDone",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("KeyframesSchema").Document,
      s = "medium",
      u = t.URL || t.webkitURL || {};
    function c(e) {
      var t = new (n("flatbuffers").ByteBuffer)(e);
      return l.bufferHasIdentifier(t) ? l.getRootAsDocument(t) : null;
    }
    function d(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new Image();
        ((r.onload = function () {
          return e(r);
        }),
          (r.onerror = function () {
            return n("Decode: error requesting image uri " + t);
          }),
          (r.src = t));
      });
    }
    function m(e) {
      var t = n("KeyframesVideoUtils").createVideo(e);
      return n("KeyframesVideoUtils").loadVideo(t, 0);
    }
    function p(e, n, r) {
      return t.createImageBitmap && !(e instanceof VideoFrame)
        ? e.width < n || e.height < r
          ? f(e, n, r).then(function (e) {
              return t.createImageBitmap(e, 0, 0, n, r).catch(function () {
                return e;
              });
            })
          : t
              .createImageBitmap(e, 0, 0, e.width, e.height, {
                resizeWidth: n,
                resizeHeight: r,
                rezizeQuality: s,
              })
              .catch(function () {
                return f(e, n, r);
              })
        : f(e, n, r);
    }
    function _(t, r, o) {
      return (
        (t.width = r),
        (t.height = o),
        (e || (e = n("Promise"))).resolve(t)
      );
    }
    function f(t, r, o) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = document.createElement("canvas");
        ((n.width = r), (n.height = o));
        var a = n.getContext("2d");
        (a.drawImage(t, 0, 0, r, o), e(n));
      });
    }
    function g(e, t) {
      for (var n = [], r = 0; r < e.length; r++) {
        var o = e[r];
        if (!(o instanceof VideoFrame)) {
          var a = t[r].size().width(),
            i = t[r].size().height();
          if (a !== o.width || i !== o.height) {
            var l = document.createElement("canvas");
            ((l.width = a), (l.height = i));
            var s = l.getContext("2d");
            (s.drawImage(o, 0, 0, a, i), n.push(l));
          } else n.push(o);
        }
      }
      return n;
    }
    function h(t) {
      if (!u.createObjectURL)
        return (e || (e = n("Promise"))).reject("URL API not supported");
      var r = u.createObjectURL(t),
        o = d(r);
      return (
        n("promiseDone")(o, function () {
          return n("requestIdleCallback")(function () {
            return u.revokeObjectURL(r);
          });
        }),
        o
      );
    }
    function y(r) {
      if (n("BlobFactory").isSupported()) {
        var o = r.contentArray();
        if (!o)
          return (e || (e = n("Promise"))).reject(
            "Decode: tried to decode a null bitmap",
          );
        var a = n("BlobFactory").getBlob([o]),
          i = r.size().width(),
          l = r.size().height();
        return t.createImageBitmap
          ? t.createImageBitmap(a, 0, 0, i, l).catch(function () {
              return h(a);
            })
          : h(a);
      }
      return (e || (e = n("Promise"))).reject(
        "Decode: browser does not support bitmap creation",
      );
    }
    function C(t) {
      if (n("BlobFactory").isSupported()) {
        var r = t.size(),
          o = t.contentArray();
        if (!o)
          return (e || (e = n("Promise"))).reject(
            "Decode: tried to decode a null video",
          );
        var a = n("BlobFactory").getBlob([o]);
        if (!u.createObjectURL)
          return (e || (e = n("Promise"))).reject("URL API not supported");
        var i = u.createObjectURL(a),
          l = m(i).then(function (e) {
            return _(e, r.width(), r.height());
          });
        return (
          n("promiseDone")(l, function () {
            n("requestIdleCallback")(function () {
              return u.revokeObjectURL(i);
            });
          }),
          l
        );
      }
      return (e || (e = n("Promise"))).reject(
        "Decode: browser does not support video creation",
      );
    }
    function b(e) {
      for (var t = [], n = e.pluginsLength() - 1; n >= 0; n--)
        t.unshift(e.plugins(n));
      return t.length ? t : null;
    }
    function v(e) {
      for (var t = [], n = e.bitmapsLength() - 1; n >= 0; n--)
        t.unshift(e.bitmaps(n));
      return t;
    }
    function S(e) {
      for (var t = [], n = e.videosLength() - 1; n >= 0; n--)
        t.unshift(e.videos(n));
      return t;
    }
    function R(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n].name();
        r &&
          (t[r] = {
            index: n,
            width: e[n].size().width(),
            height: e[n].size().height(),
          });
      }
      return t;
    }
    function L(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n].name();
        r &&
          (t[r] = {
            index: n,
            width: e[n].size().width(),
            height: e[n].size().height(),
          });
      }
      return t;
    }
    function E(e) {
      for (var t = [], n, r = e.subdocumentsLength() - 1; r >= 0; r--)
        ((n = e.subdocuments(r)), t.unshift(n));
      return t;
    }
    function k(t) {
      var r = c(t);
      return r
        ? I(r)
        : (e || (e = n("Promise"))).reject(
            "Decode: could not create flatbuffer doc",
          );
    }
    function I(t) {
      var r = v(t),
        o = L(r),
        a = S(t),
        i = R(a),
        l = r
          .filter(function (e) {
            return e.contentLength() || !e.name();
          })
          .map(y),
        s = a
          .filter(function (e) {
            return e.contentLength() || !e.name();
          })
          .map(C),
        u = E(t).map(I),
        c = b(t),
        d = c
          ? n("KeyframesPluginsLoader").fromPluginTable(c)
          : (e || (e = n("Promise"))).resolve(null);
      return (e || (e = n("Promise")))
        .all([e.all(l), e.all(s), d, e.all(u)])
        .then(function (e) {
          var n = e[0],
            a = e[1],
            l = e[2],
            s = e[3];
          return {
            bitmaps: g(n, r),
            bitmapNames: o,
            videos: a,
            videoNames: i,
            doc: t,
            pluginsLoader: l,
            subassets: s,
          };
        });
    }
    function T(t) {
      return Uint8Array
        ? (e || (e = n("Promise"))).resolve(new Uint8Array(t))
        : (e || (e = n("Promise"))).reject(
            "Decode: typed arrays not supported",
          );
    }
    function D(t, r, o) {
      if (!t.bitmapNames[r]) {
        var a = Object.keys(t.bitmapNames).join(",");
        return (e || (e = n("Promise"))).reject(
          "Decode: missing replacement bitmap name " +
            r +
            ", available names: " +
            a,
        );
      }
      var i = t.bitmapNames[r],
        l = i.height,
        s = i.index,
        u = i.width;
      return p(o, u, l).then(function (e) {
        t.bitmaps[s] = e;
      });
    }
    function x(t, r, o) {
      if (!t.videoNames[r]) {
        var a = Object.keys(t.videoNames).join(",");
        return (e || (e = n("Promise"))).reject(
          "Decode: missing replacement video name " +
            r +
            ", available names: " +
            a,
        );
      }
      var i = t.videoNames[r],
        l = i.height,
        s = i.index,
        u = i.width;
      return _(o, u, l).then(function (e) {
        t.videos[s] = e;
      });
    }
    function $(e) {
      var t = babelHelpers.extends({}, e);
      return ((t.bitmaps = e.bitmaps.slice()), t);
    }
    var P = {
      awaitForMap: function (r, o) {
        var t = {},
          a = [],
          i = function () {
            var e = l[0],
              r = l[1],
              i = o(r, e);
            (a.push(i),
              n("promiseDone")(i, function (n) {
                return (t[e] = n);
              }));
          };
        for (var l of Object.entries(r)) i();
        return (e || (e = n("Promise"))).all(a).then(function () {
          return t;
        });
      },
      fromDocumentBytes: function (r) {
        return r instanceof ArrayBuffer
          ? T(r).then(k)
          : r instanceof Uint8Array
            ? k(r)
            : (e || (e = n("Promise"))).reject(
                "Decode: unsupported byte container passed",
              );
      },
      replaceBitmapsWithURIs: function (t, n) {
        return P.awaitForMap(n, function (e) {
          return d(e);
        }).then(function (e) {
          return P.replaceBitmapsWithImageSources(t, e);
        });
      },
      replaceBitmapsWithImageSources: function (t, n) {
        var e = $(t);
        return P.awaitForMap(n, function (t, n) {
          return D(e, n, t);
        }).then(function () {
          return e;
        });
      },
      replaceVideosWithURIs: function (t, n) {
        return P.awaitForMap(n, m).then(function (e) {
          return P.replaceVideosWithVideoSources(t, e);
        });
      },
      replaceVideosWithVideoSources: function (t, n) {
        var e = $(t);
        return P.awaitForMap(n, function (t, n) {
          return x(e, n, t);
        }).then(function () {
          return e;
        });
      },
    };
    a.exports = P;
  },
  null,
);
