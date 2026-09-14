__d(
  "TV2CommsParseUtils",
  [
    "TV2PhotoAlbumReportedState",
    "TV2UniqueIDs",
    "err",
    "getErrorSafe",
    "getTV2DebuggingEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === null
        ? "null"
        : e === ""
          ? "empty string"
          : Array.isArray(e)
            ? "array"
            : typeof e == "object"
              ? "object with keys: " + JSON.stringify(Object.keys(e).sort())
              : typeof e;
    }
    function s(t, n, o) {
      if (typeof t != "string" || t === "") {
        var a = r("err")(
          "Message parse error: %s expected JSON string, got %s",
          o,
          e(t),
        );
        throw a;
      }
      var i;
      try {
        return ((i = JSON.parse(t)), n(i, o));
      } catch (e) {
        if (
          typeof e == "object" &&
          e != null &&
          "messageFormat" in e &&
          typeof e.messageFormat == "string" &&
          "messageParams" in e &&
          Array.isArray(e.messageParams)
        )
          throw e;
        var l = r("getErrorSafe")(e),
          s = r("err")(
            "Message parse error: %s expected JSON string, got error: %s",
            o,
            l.message,
          );
        throw s;
      }
    }
    function u(t, n) {
      if (typeof t != "object" || t == null) {
        var o = r("err")(
          "Message parse error: %s expected object, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function c(t, n) {
      if (t == null) return null;
      if (typeof t != "object" || t == null) {
        var o = r("err")(
          "Message parse error: %s expected object, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function d(t, n) {
      if (!Array.isArray(t)) {
        var o = r("err")(
          "Message parse error: %s expected array, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function m(t, n) {
      if (!Array.isArray(t)) {
        var o = r("err")(
          "Message parse error: %s expected array, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t.filter(Boolean).map(function (e) {
        return p(e, n);
      });
    }
    function p(t, n) {
      if (typeof t != "string" || t === "") {
        var o = r("err")(
          "Message parse error: %s expected non-empty string, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function _(t, n) {
      if (t == null) return null;
      if (typeof t != "string" || t === "") {
        var o = r("err")(
          "Message parse error: %s expected optional non-empty string, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function f(t, n) {
      if (t == null) return null;
      if (typeof t != "string") {
        var o = r("err")(
          "Message parse error: %s expected optional string, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function g(t, n) {
      if (t == null) return null;
      if (
        !(
          (typeof t == "number" && Number.isFinite(t)) ||
          (typeof t == "string" && t !== "")
        )
      ) {
        var o = r("err")(
          "Message parse error: %s expected optional non-empty string or number, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function h(t, n) {
      if (typeof t != "number" || !Number.isFinite(t)) {
        var o = r("err")(
          "Message parse error: %s expected finite number, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function y(t, n) {
      if (t == null) return null;
      if (typeof t != "number" || !Number.isFinite(t)) {
        var o = r("err")(
          "Message parse error: %s expected optional finite number, got %s",
          n,
          e(t),
        );
        throw o;
      }
      return t;
    }
    function C(e, t) {
      return e === "true" || e === !0;
    }
    function b(e, t, n) {
      return (n === void 0 && (n = !1), e == null ? n : e === !0);
    }
    function v(t, n) {
      if (typeof t != "boolean") {
        var o = r("err")("Parse error: %s expected boolean, got %s", n, e(t));
        throw o;
      }
      return t;
    }
    function S(e, t) {
      var n = e != null ? u(e, t) : null;
      if (n == null) return null;
      var r = p(n.uri, t + ".uri"),
        o = h(n.width, t + ".width"),
        a = h(n.height, t + ".height");
      return { height: a, uri: r, width: o };
    }
    function R(e, t) {
      var n = e != null ? u(e, t) : null;
      if (n == null) return null;
      var r = u(n.image, t + ".image"),
        o = p(r.uri, t + ".image.uri");
      return { uri: o };
    }
    function L(e, t) {
      if (e == null) return null;
      var n = d(e, t);
      return n.map(function (e, t) {
        return p(e, "[" + t + "]");
      });
    }
    function E(e, t) {
      return s(
        e,
        function (e, t) {
          var n = d(e, t);
          return n.map(function (e, n) {
            var r = t + "." + n;
            return I(u(e, r), r);
          });
        },
        t,
      );
    }
    function k(e, t) {
      return s(
        e,
        function (e, t) {
          return I(u(e, t), t);
        },
        t,
      );
    }
    function I(e, n) {
      var a = p(e.access_token, n + ".access_token"),
        i = String(g(e.app_id, n + ".app_id")),
        l = f(e.app_version, n + ".app_version"),
        s = S(e.background_image, n + ".background_image"),
        u = _(e.channel_token, n + ".channel_token"),
        c = _(e.channel_session_id, n + ".channel_session_id"),
        d = f(e.end_cursor, n + ".end_cursor") || null,
        h = b(e.from_next_video_query, n + ".from_next_video_query"),
        y = b(e.is_ad, n + ".is_ad"),
        C = L(
          e.dash_prefetched_representation_ids,
          n + ".dash_prefetched_representation_ids",
        ),
        v = _(e.entry_point, n + ".entry_point"),
        E = _(
          e.player_origin === "" ? null : e.player_origin,
          n + ".player_origin",
        ),
        k = _(
          e.player_suborigin === "" ? null : e.player_suborigin,
          n + ".player_suborigin",
        ),
        I = R(e.preferred_thumbnail, n + ".preferred_thumbnail"),
        T = _(e.video_channel_id, n + ".video_channel_id"),
        D = p(e.root_video_id, n + ".root_video_id"),
        x = r("getTV2DebuggingEnabled")()
          ? /\bvideo_id=([0-9]+)\b/.exec(t.location.search)
          : null,
        $ = x && x[1] ? x[1] : p(e.video_id, n + ".video_id"),
        P =
          e.tracking_codes != null
            ? m(e.tracking_codes, n + ".tracking_codes")
            : null;
      return {
        accessToken: a,
        appID: i,
        appVersion: l,
        backgroundImage: s,
        chainingEnabled: !1,
        channelSessionID: c,
        channelToken: u,
        dashPrefetchedRepresentationIDs: C,
        endCursor: d,
        entryPoint: v,
        fromNextVideoQuery: h,
        isAd: y,
        playerOrigin: E,
        playerSuborigin: k,
        preferredThumbnail: I,
        rootVideoID: D,
        startTimestamp: 0,
        trackingCodes: P,
        videoCastRequestID: o("TV2UniqueIDs").makeTV2VideoCastRequestID(),
        videoChannelID: T,
        videoID: $,
      };
    }
    function T(t, n) {
      var o = u(t, n),
        a = p(o.type, n + ".type");
      switch (a) {
        case "version_response":
          return o;
        case "version_launch_response":
          return o;
        case "experience_state":
          return o;
        case "command_result":
          return o;
        case "duration_change":
          return o;
        case "status_update":
          return o;
        case "experience_status_update":
          return o;
      }
      var i = r("err")(
        "Parse error: %s expected response message type, got %s",
        "parseTV2CommsFBAppOutboundMessageFromObject",
        e(o),
      );
      throw i;
    }
    function D(e) {
      return s(e, T, ".");
    }
    function x(e) {
      return o("TV2PhotoAlbumReportedState").toTV2PhotoAlbumReportedState(e);
    }
    ((l.parseJSONString = s),
      (l.parseObject = u),
      (l.parseOptionalObject = c),
      (l.parseNonEmptyString = p),
      (l.parseOptionalNonEmptyString = _),
      (l.parseNumber = h),
      (l.parseOptionalNumber = y),
      (l.parseOptionalStringishBoolean = C),
      (l.parseBoolean = v),
      (l.parseVideoCastingPayloadBackgroundImage = S),
      (l.parseVideoCastingPayloadPreferredThumbnail = R),
      (l.parseVideoCastingPayloadListJSONAsTV2VideoCastRequestArray = E),
      (l.parseVideoCastingPayloadJSONAsTV2VideoCastRequest = k),
      (l.parseTV2CommsFBAppOutboundMessageFromJSON = D),
      (l.parseCastingReceiverPhotoAlbumReportedState = x));
  },
  98,
);
