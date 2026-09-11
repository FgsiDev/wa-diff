__d(
  "FBKeyframesLoggedSession",
  [
    "BanzaiLogger",
    "CurrentUser",
    "FunnelLogger",
    "KeyframesPerformanceLog",
    "KeyframesPluginsLoader",
    "KeyframesVersion",
    "once",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = "KEYFRAMES_FUNNEL",
      c = "KeyframesFramePerfLoggerConfig",
      d = 2,
      m = 9e18,
      p = {
        appid: 256281040558,
        appversion: null,
        connection_class: null,
        country: null,
        deviceid: null,
        extras: null,
        isemployee: r("CurrentUser").isEmployee() ? 1 : 0,
        name: "keyframes_frame_perf_report",
        vc: null,
        year_class: null,
      };
    function _(e) {
      return parseInt(e.match(/[a-f0-9]+$/gi), 16);
    }
    function f() {
      var t = (e || (e = r("performanceNow")))();
      return function () {
        return Math.floor((e || (e = r("performanceNow")))() - t);
      };
    }
    function g() {
      return { value: Date.now() };
    }
    var h = (function () {
      function e(t, n) {
        var a = this;
        ((this.$2 = !1),
          (this.$3 = 0),
          (this.$5 = 1),
          (this.$11 = o("KeyframesVersion").getCurrentVersion()),
          (this.$15 = function (t) {
            if ((a.$13("play_ended"), a.$3++, a.$3 === a.$5)) {
              var n = babelHelpers.extends({}, t, p, {
                animation_duration: String(t.animation_duration),
                asset_id:
                  a.$6.assetID != null && a.$6.assetID !== ""
                    ? a.$6.assetID
                    : null,
                asset_name:
                  a.$6.assetID != null && a.$6.assetID !== ""
                    ? null
                    : a.$6.assetName,
                display_refresh_rate: String(t.display_refresh_rate),
                keyframes_version: a.$11,
                project_name: a.$6.projectName,
                session_id: a.$9,
              });
              (e.performanceLoggingMethod(n), a.$5 < m && (a.$5 *= d));
            }
          }),
          (this.$16 = function (e) {
            switch (e) {
              case "start":
                a.$13("play_started");
                return;
              case "pause":
                a.$13("play_ended");
                return;
            }
          }),
          (this.$10 = n || g()),
          (this.$6 = t),
          (this.$9 = r("uuidv4")()),
          (this.$4 = _(this.$9)));
      }
      e.performanceLoggingMethod = function (t) {
        r("BanzaiLogger").log(c, t);
      };
      var t = e.prototype;
      return (
        (t.startDecode = function (t) {
          var e = this;
          if (!this.$1) {
            (this.$12(), this.$13("asset_decode_started", t));
            var n = f();
            this.$1 = r("once")(function (t, r) {
              e.$13("asset_decode_ended", t, {
                "time_since:asset_decode_started": n(),
                plugins_decoded: r || [],
              });
            });
          }
          return this.$1;
        }),
        (t.error = function (t) {
          (this.$12(),
            this.$1
              ? this.$14("asset_decode_failed", t)
              : this.$14("asset_request_failed", t));
        }),
        (t.getUUID = function () {
          return this.$9;
        }),
        (t.getInstanceID = function () {
          return this.$4;
        }),
        (t.getPerformanceLogIfEnabled = function () {
          var e = this;
          if (!this.$7) {
            var t = this.$12(),
              n = new (r("KeyframesPerformanceLog"))(this.$15, this.$16);
            (n.onNextFrame(function () {
              return e.$13("first_frame_rendered", g(), {
                "time_since:session_started": t(),
              });
            }),
              (this.$7 = n));
          }
          return this.$7;
        }),
        (t.$12 = function () {
          return (
            this.$8 ||
              (o("FunnelLogger").startFunnelAtTime(u, this.$10.value, this.$4),
              this.$13("session_started", this.$10, {
                supported_plugins: Object.keys(
                  r("KeyframesPluginsLoader").getSupportedPlugins(),
                ),
              }),
              (this.$8 = f())),
            this.$8
          );
        }),
        (t.$13 = function (t, n, r) {
          ((n = n || g()),
            this.$2 ||
              o("FunnelLogger").appendActionAtTimeWithPayload(
                u,
                n.value,
                this.$4,
                t,
                babelHelpers.extends({}, this.$17(), r),
              ));
        }),
        (t.$14 = function (t, n) {
          ((n = n || g()),
            this.$2 ||
              (this.$13("session_failed", n, { fail_reason: t }),
              o("FunnelLogger").endFunnelAtTime(u, n.value, this.$4),
              (this.$2 = !0)));
        }),
        (t.$17 = function () {
          return {
            asset_id:
              this.$6.assetID != null && this.$6.assetID !== ""
                ? this.$6.assetID
                : null,
            asset_name:
              this.$6.assetID != null && this.$6.assetID !== ""
                ? null
                : this.$6.assetName,
            asset_source: "network",
            keyframes_version: this.$11,
            project_name: this.$6.projectName,
            session_id: this.$9,
          };
        }),
        e
      );
    })();
    l.default = h;
  },
  98,
);
