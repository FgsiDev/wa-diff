__d(
  "TV2PhotoAlbumReportedState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return m(JSON.parse(e), y("TV2PhotoAlbumReportedState"));
    }
    function l(e) {
      return JSON.stringify(p(e, y("TV2PhotoAlbumReportedState")), null, 2);
    }
    function s(e, t, n) {
      throw (
        n === void 0 && (n = ""),
        Error(
          n
            ? 'Invalid value for key "' +
                n +
                '". Expected type ' +
                JSON.stringify(e) +
                " but got " +
                JSON.stringify(t)
            : "Invalid value " +
                JSON.stringify(t) +
                " for type " +
                JSON.stringify(e),
        )
      );
    }
    function u(e) {
      if (e.jsonToJS === void 0) {
        var t = {};
        (e.props.forEach(function (e) {
          return (t[e.json] = { key: e.js, typ: e.typ });
        }),
          (e.jsonToJS = t));
      }
      return e.jsonToJS;
    }
    function c(e) {
      if (e.jsToJSON === void 0) {
        var t = {};
        (e.props.forEach(function (e) {
          return (t[e.js] = { key: e.json, typ: e.typ });
        }),
          (e.jsToJSON = t));
      }
      return e.jsToJSON;
    }
    function d(e, t, n, r) {
      r === void 0 && (r = "");
      function o(e, t) {
        return typeof e == typeof t ? t : s(e, t, r);
      }
      function a(e, t) {
        for (var r = e.length, o = 0; o < r; o++) {
          var a = e[o];
          try {
            return d(t, a, n);
          } catch (e) {}
        }
        return s(e, t);
      }
      function i(e, t) {
        return e.indexOf(t) !== -1 ? t : s(e, t);
      }
      function l(e, t) {
        return Array.isArray(t)
          ? t.map(function (t) {
              return d(t, e, n);
            })
          : s("array", t);
      }
      function u(e) {
        if (e === null) return null;
        var t = new Date(e);
        return isNaN(t.valueOf()) ? s("Date", e) : t;
      }
      function c(e, t, r) {
        if (r === null || typeof r != "object" || Array.isArray(r))
          return s("object", r);
        var o = {};
        return (
          Object.getOwnPropertyNames(e).forEach(function (t) {
            var a = e[t],
              i = Object.prototype.hasOwnProperty.call(r, t) ? r[t] : void 0;
            o[a.key] = d(i, a.typ, n, a.key);
          }),
          Object.getOwnPropertyNames(r).forEach(function (a) {
            Object.prototype.hasOwnProperty.call(e, a) ||
              (o[a] = d(r[a], t, n, a));
          }),
          o
        );
      }
      if (t === "any") return e;
      if (t === null) return e === null ? e : s(t, e);
      if (t === !1) return s(t, e);
      for (; typeof t == "object" && t.ref !== void 0; ) t = C[t.ref];
      return Array.isArray(t)
        ? i(t, e)
        : typeof t == "object"
          ? Object.prototype.hasOwnProperty.call(t, "unionMembers")
            ? a(t.unionMembers, e)
            : Object.prototype.hasOwnProperty.call(t, "arrayItems")
              ? l(t.arrayItems, e)
              : Object.prototype.hasOwnProperty.call(t, "props")
                ? c(n(t), t.additional, e)
                : s(t, e)
          : t === Date && typeof e != "number"
            ? u(e)
            : o(t, e);
    }
    function m(e, t) {
      return d(e, t, u);
    }
    function p(e, t) {
      return d(e, t, c);
    }
    function _(e) {
      return { arrayItems: e };
    }
    function f() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return { unionMembers: t };
    }
    function g(e, t) {
      return { props: e, additional: t };
    }
    function h(e) {
      return { props: [], additional: e };
    }
    function y(e) {
      return { ref: e };
    }
    var C = {
      TV2PhotoAlbumReportedState: g(
        [
          {
            json: "media_parameters",
            js: "media_parameters",
            typ: y("MediaParameters"),
          },
          { json: "media_state", js: "media_state", typ: y("MediaState") },
        ],
        "any",
      ),
      MediaParameters: g(
        [{ json: "album_id", js: "album_id", typ: "" }],
        "any",
      ),
      MediaState: g(
        [
          {
            json: "photo_state",
            js: "photo_state",
            typ: f(void 0, y("PhotoMediaState")),
          },
          {
            json: "video_state",
            js: "video_state",
            typ: f(void 0, y("VideoMediaState")),
          },
        ],
        "any",
      ),
      PhotoMediaState: g(
        [
          { json: "duration_ms", js: "duration_ms", typ: 3.14 },
          { json: "photo_id", js: "photo_id", typ: "" },
          {
            json: "photo_playback_state",
            js: "photo_playback_state",
            typ: y("PhotoPlaybackState"),
          },
          { json: "position_ms", js: "position_ms", typ: 3.14 },
        ],
        "any",
      ),
      VideoMediaState: g(
        [
          { json: "duration_ms", js: "duration_ms", typ: 3.14 },
          { json: "position_ms", js: "position_ms", typ: 3.14 },
          { json: "video_id", js: "video_id", typ: "" },
          {
            json: "video_playback_state",
            js: "video_playback_state",
            typ: y("VideoPlaybackState"),
          },
        ],
        "any",
      ),
      PhotoPlaybackState: ["paused", "play"],
      VideoPlaybackState: ["ended", "paused", "play", "seeking", "unknown"],
    };
    a.exports = {
      TV2PhotoAlbumReportedStateToJson: l,
      toTV2PhotoAlbumReportedState: e,
    };
  },
  null,
);
