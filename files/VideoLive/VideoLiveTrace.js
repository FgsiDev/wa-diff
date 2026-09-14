__d(
  "VideoLiveTrace",
  [
    "DataViewReader",
    "LiveTraceWwwVideoPlayerFalcoEvent",
    "Mp4DASHEventMessageBox",
    "Mp4Demuxer",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "x-fb-video-livetrace-ids",
      s = "x-fb-video-livetrace-parentsource",
      u = "x-fb-video-livetrace-streamtype",
      c = "x-fb-origin-hit",
      d = "x-fb-edge-hit",
      m = "PLY:WWW:",
      p = m + "DL:",
      _ = m + "DIS:",
      f = 1e3,
      g = /[\r\n]+/,
      h = (function () {
        function t(e, t, n) {
          var o = this;
          ((this.$6 = []), (this.$1 = e), (this.$2 = null));
          var a = n + ":" + t.substring(0, 5);
          ((this.$3 = m + a),
            (this.$4 = p + a),
            (this.$5 = _ + a),
            (this.$7 = r("throttle")(function (e) {
              return o.$8(e);
            }, f)));
        }
        var n = t.prototype;
        return (
          (n.setStreamType = function (t) {
            this.$2 = t;
          }),
          (n.$9 = function (t, n, o, a, i, l) {
            var e,
              s = this,
              u = Date.now(),
              c = (e = this.$2) != null ? e : 0;
            r("LiveTraceWwwVideoPlayerFalcoEvent").log(function () {
              return {
                stream_id: s.$1,
                stream_type: c,
                event_name: n,
                event_severity: i,
                event_creation_time: u,
                source: t,
                trace_id: o,
                parent_source: a,
                metadata: l,
              };
            });
          }),
          (n.onUpdateStatus = function (t) {
            this.$7(t);
          }),
          (n.$8 = function (t) {
            for (
              var e = t.position * 1e3, n = this.$6.length - 1;
              n >= 0;
              n--
            ) {
              var r = this.$6[n];
              if (!(r.presentationTimestamp > e)) {
                if (r.displayTimestamp == null) r.displayTimestamp = Date.now();
                else continue;
                this.$9(this.$5, "FRAME", r.traceId, this.$4, "SUCCESS", null);
              }
            }
          }),
          (n.getAndFlushTracedFrames = function () {
            var e,
              t = { currentTimeMs: Date.now(), streamId: this.$1 },
              n = { dl: [], dis: [] },
              r = [];
            return (
              this.$6.forEach(function (e) {
                (e.hasBeenFlushedAsDownloaded ||
                  (n.dl.push({ id: e.traceId, timeMs: e.downloadTimestamp }),
                  (e.hasBeenFlushedAsDownloaded = !0)),
                  e.displayTimestamp != null
                    ? n.dis.push({ id: e.traceId, timeMs: e.displayTimestamp })
                    : r.push(e));
              }),
              (this.$6 = r),
              (t[(e = this.$2) != null ? e : 0] = n),
              n.dl.length > 0 || n.dis.length > 0 ? t : null
            );
          }),
          (n.handleHeadersString = function (t, n) {
            var e = t.trim().split(g);
            this.$10(
              e.map(function (e) {
                var t = e.split(": ");
                return [t.shift().toLowerCase(), t.shift()];
              }),
              n,
            );
          }),
          (n.handleHeaders = function (t, n) {
            this.$10(this.$11(t), n);
          }),
          (n.handleHeadersAndBody = function (t, n, r) {
            this.$12(this.$11(t), n, r);
          }),
          (n.$11 = function (t) {
            var e = [];
            for (var n of t.entries()) e.push(n);
            return e;
          }),
          (n.$13 = function (t) {
            var e = Date.now(),
              n = new Map(),
              o = t.reduce(function (e, t) {
                return e + t.byteLength;
              }, 0),
              a = new Uint8Array(o),
              i = 0;
            t.forEach(function (e) {
              (a.set(e, i), (i += e.byteLength));
            });
            for (
              var l = new (r("Mp4Demuxer"))(
                new DataView(a.buffer, a.byteOffset, a.byteLength),
              );
              !l.atEnd();
            ) {
              var s = l.parseBox();
              if (s.getType() === r("Mp4DASHEventMessageBox").canonicalType) {
                var u = l.parseCanonicalBox(
                  r("Mp4DASHEventMessageBox"),
                  l.parseFullBox(s),
                );
                if (u instanceof r("Mp4DASHEventMessageBox")) {
                  var c,
                    d =
                      (c = u.getEmsgFields()) == null ? void 0 : c.schemeIdUri;
                  if (d != null && d.startsWith("livedash:trace:")) {
                    var m = u.getMessageData(),
                      p = new (r("DataViewReader"))(m).readZeroTerminatedString(
                        m.byteLength,
                      );
                    try {
                      var _ = JSON.parse(p);
                      Array.isArray(_) &&
                        _.filter(function (e) {
                          return Array.isArray(e) && e.length === 2;
                        }).forEach(function (t) {
                          var r = t[0],
                            o = t[1];
                          n.set(r, {
                            displayTimestamp: null,
                            downloadTimestamp: e,
                            hasBeenFlushedAsDownloaded: !1,
                            presentationTimestamp: o,
                            traceId: r,
                          });
                        });
                    } catch (e) {}
                  }
                }
              }
              l.skipBox(s);
            }
            return n;
          }),
          (n.$14 = function (n, r) {
            var t = this,
              o = "null",
              a = Date.now(),
              i = new Map(),
              l = "";
            n.forEach(function (n) {
              var r = n[0].toLowerCase(),
                m = n[1];
              if (r === e && m) {
                var p = m.split(",");
                p.forEach(function (e) {
                  var t = e.split(":"),
                    n = +t[0],
                    r = +t[1];
                  i.set(n, {
                    displayTimestamp: null,
                    downloadTimestamp: a,
                    hasBeenFlushedAsDownloaded: !1,
                    presentationTimestamp: r,
                    traceId: n,
                  });
                });
              }
              (r === s && (l = m),
                t.$2 === null && r === u && (t.$2 = parseInt(m, 10)),
                (r === c || r === d) &&
                  parseInt(m, 10) &&
                  (o = r === c ? "origin" : "edge"));
            });
            var m = r || {};
            return (
              (m.hit = o),
              l !== ""
                ? {
                    tracedFrames: i,
                    eventMetaData: m,
                    parentSource: l,
                    streamType: this.$2,
                  }
                : null
            );
          }),
          (n.$12 = function (t, n, r) {
            var e = this.$14(t, r);
            if (!(e == null || e.parentSource === "")) {
              if (n != null && n.length) {
                var o = this.$13(n);
                o.forEach(function (t, n) {
                  e.tracedFrames.set(n, t);
                });
              }
              this.$6 = this.$6.concat(Array.from(e.tracedFrames.values()));
              var a = e.tracedFrames.keys();
              for (var i of a)
                this.$9(
                  this.$4,
                  "SEGMENT",
                  i,
                  e.parentSource,
                  "SUCCESS",
                  e.eventMetaData,
                );
            }
          }),
          (n.$10 = function (t, n) {
            this.$12(t, null, n);
          }),
          (n.handleXHR = function (t, n) {
            this.handleHeadersString(t.getAllResponseHeaders(), n);
          }),
          (n.getLiveTraceContext = function () {
            return this.$2 != null
              ? { streamId: this.$1, streamType: this.$2, sourceId: this.$3 }
              : null;
          }),
          t
        );
      })();
    l.default = h;
  },
  98,
);
