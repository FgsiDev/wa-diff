__d(
  "CastingEventReporter",
  ["ConnectedTvLoggingFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$4 = function (e) {
          switch (e.data.type) {
            case "cast_requested":
              (t.logWithAvailableContext({
                event: "cast_requested",
                video_id_override: e.data.videoID,
              }),
                t.$5(e));
              break;
            case "photo_cast_requested":
              (t.logWithAvailableContext({ event: "photo_cast_requested" }),
                t.$5(e));
              break;
            case "cast_failed":
              t.$5(e);
              break;
            case "video_status_update": {
              (t.$6(e.data.receiverInfo, e.data.playerInfo), t.$5(e));
              break;
            }
            default:
              break;
          }
        }),
          (this.$1 = null),
          (this.$2 = null),
          (this.$3 = {
            cast_session_id: e,
            is_google_cast_bg: null,
            third_party_app_id: null,
            tv_os_version: null,
            tv_player_instance_key: null,
            tv_player_version: null,
            tv_session_id: null,
            tv_web_client_revision: null,
          }));
      }
      var t = e.prototype;
      return (
        (t.destroy = function () {
          (this.$1 != null && this.$1(), (this.$1 = null));
        }),
        (t.bindToCastingController = function (t) {
          this.$1 = t.subscribeToCastingEvent(this.$4);
        }),
        (t.logWithAvailableContext = function (t) {
          var e = this;
          r("ConnectedTvLoggingFalcoEvent").log(function () {
            return babelHelpers.extends({}, e.$3, t);
          });
        }),
        (t.$5 = function (t) {
          var e = t.data;
          switch (e.type) {
            case "cast_requested":
              this.$2 = { data: e, timestamp: t.timestamp };
              break;
            case "cast_failed": {
              var n = this.$2;
              (this.logWithAvailableContext({
                event: "cast_failed",
                perf_time_ms: Math.floor(
                  n != null ? t.timestamp - n.timestamp : 0,
                ),
                video_id_override: e.videoID,
              }),
                (this.$2 = null));
              break;
            }
            case "video_status_update": {
              var r = this.$2;
              if (r == null) break;
              var o = r.data.videoID;
              e.videoID === o && e.playbackState === "play"
                ? (this.logWithAvailableContext({
                    event: "cast_started",
                    perf_time_ms: Math.floor(t.timestamp - r.timestamp),
                  }),
                  (this.$2 = null))
                : e.videoID !== o && (this.$2 = null);
              break;
            }
          }
        }),
        (t.$6 = function (t, n) {
          var e,
            r,
            o,
            a,
            i,
            l,
            s =
              (e = t == null ? void 0 : t.third_party_app_id) != null
                ? e
                : null,
            u =
              (t == null ? void 0 : t.cast_receiver_logger_session_id) || null,
            c =
              (r = t == null ? void 0 : t.is_google_cast_bg) != null ? r : null,
            d = (o = t == null ? void 0 : t.os_version) != null ? o : null,
            m =
              (a = t == null ? void 0 : t.web_client_revision) != null
                ? a
                : null,
            p =
              (i = n == null ? void 0 : n.player_instance_key) != null
                ? i
                : null,
            _ = (l = n == null ? void 0 : n.player_version) != null ? l : null;
          this.$3 = babelHelpers.extends({}, this.$3, {
            is_google_cast_bg: c,
            third_party_app_id: s,
            tv_os_version: d,
            tv_player_instance_key: p,
            tv_player_version: _,
            tv_session_id: u,
            tv_web_client_revision: m,
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
