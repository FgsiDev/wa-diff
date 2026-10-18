__d(
  "WAWebVoipWebTransportWorkerHandler",
  [
    "SecurePostMessage",
    "WAWebVoipJsWorkerMessageHandlerHelpers",
    "WAWebVoipWasmHeapBuffer",
    "WAWebVoipWebTransportSendRingBuffer",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 262144,
      s = 20,
      u = 512,
      c = 64;
    function d(e, t, n) {
      (t > 0 && "incomingMaxBufferedDatagrams" in e
        ? (e.incomingMaxBufferedDatagrams = t)
        : t > 0 &&
          "incomingHighWaterMark" in e &&
          (e.incomingHighWaterMark = t),
        n > 0 && "outgoingMaxBufferedDatagrams" in e
          ? (e.outgoingMaxBufferedDatagrams = n)
          : n > 0 &&
            "outgoingHighWaterMark" in e &&
            (e.outgoingHighWaterMark = n));
    }
    function m(e, t) {
      if (!(t <= 0 || !("outgoingMaxAge" in e)))
        try {
          e.outgoingMaxAge = t;
        } catch (e) {}
    }
    function p(e) {
      try {
        var t = e.maxDatagramSize;
        return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : null;
      } catch (e) {
        return null;
      }
    }
    var _ = 20,
      f = 256,
      g = 16,
      h = 0,
      y = 256,
      C = 272,
      b = 2049,
      v = 2050,
      S = 2052,
      R = 2053,
      L = new Set([b, S]),
      E = new Set([v, R]),
      k = 3e4,
      I = 32,
      T = new Map(),
      D = 0,
      x = null,
      $ = 0,
      P = 0;
    function N() {
      var e = globalThis.performance;
      if (e == null) return Date.now();
      var t = e.timeOrigin;
      return typeof t == "number" && t > 0 ? t + e.now() : Date.now();
    }
    function M(e) {
      return (
        e.byteLength >= _ &&
        e[4] === 33 &&
        e[5] === 18 &&
        e[6] === 164 &&
        e[7] === 66
      );
    }
    function w(e) {
      return e[0] * 256 + e[1];
    }
    function A(e) {
      return (Math.floor(e / f) % 2) * f + (Math.floor(e / g) % 2) * g;
    }
    function F(e) {
      return E.has(e) ? !1 : L.has(e) || A(e) === h;
    }
    function O(e) {
      if (E.has(e)) return !0;
      var t = A(e);
      return t === y || t === C;
    }
    function B(e) {
      for (var t = "", n = 8; n < _; n++)
        t += e[n].toString(16).padStart(2, "0");
      return t;
    }
    function W(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (t - o < k) break;
        e.delete(r);
      }
      for (; e.size >= I; ) {
        var a = e.keys().next().value;
        if (a == null) return;
        e.delete(a);
      }
    }
    function q(e, t, n) {
      if (!(!M(t) || !F(w(t)))) {
        var r = e.pendingStunRequests,
          o = B(t);
        (r.delete(o), W(r, n), r.set(o, n));
      }
    }
    function U(e, t, n, r) {
      if (!(!M(n) || !O(w(n)))) {
        var a = B(n),
          i = t.pendingStunRequests.get(a);
        if (i != null) {
          t.pendingStunRequests.delete(a);
          var l = Math.round(r - i);
          if (!(!Number.isFinite(l) || l < 0))
            try {
              e.updateIceRtt(l, t.ip, t.port);
            } catch (e) {
              t.hasLoggedIceRttFailure ||
                ((t.hasLoggedIceRttFailure = !0),
                o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                  1,
                  "voip: [WebTransportThread] Failed to publish ICE RTT: " +
                    String(e),
                ));
            }
        }
      }
    }
    function V() {
      var e = 0;
      for (var t of T.values()) {
        var n, r;
        e +=
          t.pendingDatagramBytes +
          ((n =
            (r = t.sendRingConsumer) == null
              ? void 0
              : r.getRawOccupancyBytes()) != null
            ? n
            : 0);
      }
      return e;
    }
    function H() {
      D = Math.max(D, V());
    }
    function G() {
      for (var e of T.values()) return e.voipWasm;
      return null;
    }
    function z() {
      x != null &&
        (self.clearInterval(x), (x = null), (D = 0), ($ = 0), (P = 0));
    }
    function j() {
      var e = V(),
        t = Math.max(D, e);
      if (((D = e), !(t === 0 && e === 0 && $ === 0 && P === 0))) {
        var n = G();
        if (n != null)
          try {
            (n.updateSctpBufferedAmount(t, e), ($ = t), (P = e));
          } catch (e) {
            (z(),
              o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                1,
                "voip: [WebTransportThread] Failed to publish buffered amount: " +
                  String(e),
              ));
          }
      }
    }
    function K() {
      x == null && ((D = V()), (x = self.setInterval(j, s)));
    }
    function Q() {
      x == null || T.size > 0 || z();
    }
    function X(e) {
      r("SecurePostMessage").sendMessageForCurrentOrigin(
        self,
        babelHelpers.extends({ type: "webTransportState" }, e),
      );
    }
    function Y(e) {
      var t = function (n) {
          if (e != null && typeof e == "object" && n in e) return e[n];
        },
        n = t("name"),
        r = t("message"),
        o = t("stack"),
        a = t("source"),
        i = t("streamErrorCode");
      return {
        name: n != null ? String(n) : "unknown",
        message: r != null ? String(r) : String(e),
        stack: o != null ? String(o) : "no-stack",
        source: a != null ? String(a) : "n/a",
        streamErrorCode: typeof i == "number" ? i : null,
      };
    }
    function J(e, t, n) {
      if (n == null) return !1;
      var r = o(
        "WAWebVoipWebTransportSendRingBuffer",
      ).createWebTransportSendRingConsumer(
        n,
        function (t) {
          ue(e, t);
        },
        function (t) {
          var n = Y(t);
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [WebTransportThread] Send ring handler failed on " +
              e +
              ": " +
              n.message +
              " " +
              n.stack,
          );
        },
      );
      return r == null
        ? (o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            2,
            "voip: [WebTransportThread] Send ring rejected on " +
              e +
              "; staying on postMessage",
          ),
          !1)
        : ((t.sendRingConsumer = r), r.start(), !0);
    }
    function Z(e, t) {
      var n = t.sendRingConsumer;
      if (n != null) {
        ((t.sendRingConsumer = null), n.stop());
        var r = n.getStats();
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          3,
          "voip: [WebTransportThread] Send ring stopped on " +
            e +
            " - drained: " +
            r.drainedRecords +
            ", corrupt: " +
            r.corruptRecords +
            ", handlerErrors: " +
            r.handlerErrors,
        );
      }
    }
    function ee(e) {
      var t = e.connectionId,
        n = e.state,
        r = e.voipWasm;
      if (!n.cleaned) {
        ((n.cleaned = !0),
          (n.closing = !0),
          T.get(t) === n && T.delete(t),
          Z(t, n),
          (n.sendQueue = []),
          (n.queuedBytes = 0),
          (n.pendingDatagramBytes = 0),
          n.pendingStunRequests.clear(),
          o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(r, n.wasmBuffer));
        try {
          var a;
          (a = n.reader) == null || a.releaseLock();
        } catch (e) {}
        try {
          var i;
          (i = n.writer) == null || i.releaseLock();
        } catch (e) {}
        try {
          n.transport.close();
        } catch (e) {}
        ((n.reader = null), (n.writer = null), Q());
      }
    }
    function te(e, t, n, r, a) {
      (n.stats.receivedPackets++,
        (n.stats.receivedBytes += r.byteLength),
        U(e, n, r, a),
        n.hasReceivedFirstDatagram ||
          ((n.hasReceivedFirstDatagram = !0),
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            3,
            "voip: [WebTransportThread] First datagram received on dedicated pthread " +
              t +
              ", size=" +
              r.byteLength,
          ),
          X({
            connectionId: t,
            attemptId: n.attemptId,
            event: "first_datagram",
            relayGeneration: n.relayGeneration,
          })));
      var i = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
        e,
        n.wasmBuffer,
        r.byteLength,
      );
      if (i === 0) {
        n.stats.droppedPackets++;
        return;
      }
      (e.GROWABLE_HEAP_U8().set(r, i),
        e.handleOnMessageFromHeap(i, r.byteLength, n.ip, n.port));
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = n.transport.datagrams.readable.getReader();
            n.reader = r;
            try {
              for (; !n.closing; ) {
                var o = yield r.read(),
                  a = o.done,
                  i = o.value,
                  l = N();
                if (a) {
                  !n.cleaned &&
                    T.get(t) === n &&
                    (X({
                      connectionId: t,
                      attemptId: n.attemptId,
                      event: "closed",
                      stats: n.stats,
                    }),
                    ee({ connectionId: t, state: n, voipWasm: e }));
                  return;
                }
                i != null && te(e, t, n, i, l);
              }
            } catch (r) {
              !n.closing &&
                T.get(t) === n &&
                (X({
                  connectionId: t,
                  attemptId: n.attemptId,
                  event: "error",
                  error: Y(r),
                  stats: n.stats,
                }),
                ee({ connectionId: t, state: n, voipWasm: e }));
            }
          },
        )),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t.draining) {
            t.draining = !0;
            try {
              for (; !t.closing && t.sendQueue.length > 0; ) {
                var n = t.sendQueue.shift();
                if (n != null) {
                  t.queuedBytes -= n.byteLength;
                  var r = t.writer;
                  try {
                    if (r == null) {
                      t.stats.droppedPackets++;
                      continue;
                    }
                    var o = new Uint8Array(n),
                      a = t.relayGeneration;
                    yield r.write(o);
                    var i = N(),
                      l = M(o);
                    (q(t, o, i),
                      t.stats.sentPackets++,
                      (t.stats.sentBytes += n.byteLength),
                      t.relayGeneration === a &&
                        !t.hasSentStunTraffic &&
                        l &&
                        ((t.hasSentStunTraffic = !0),
                        X({
                          connectionId: e,
                          attemptId: t.attemptId,
                          event: "first_stun_datagram_sent",
                          relayGeneration: a,
                        })),
                      t.relayGeneration === a &&
                        !t.hasSentRelayTraffic &&
                        !l &&
                        ((t.hasSentRelayTraffic = !0),
                        X({
                          connectionId: e,
                          attemptId: t.attemptId,
                          event: "first_relay_datagram_sent",
                          relayGeneration: a,
                        })));
                  } catch (e) {
                    t.stats.droppedPackets++;
                  } finally {
                    ((t.pendingDatagramBytes = Math.max(
                      0,
                      t.pendingDatagramBytes - n.byteLength,
                    )),
                      H());
                  }
                }
              }
            } finally {
              t.draining = !1;
            }
          }
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t, n, r, o, a, i, l, s) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, _) {
            if (!T.has(t)) {
              var f = self.WebTransport;
              if (f == null) {
                X({
                  connectionId: t,
                  attemptId: l,
                  event: "error",
                  error: {
                    name: "NotSupportedError",
                    message: "WebTransport is not supported in the VoIP worker",
                    stack: "no-stack",
                    source: "n/a",
                    streamErrorCode: null,
                  },
                });
                return;
              }
              var g = null,
                h = null;
              try {
                var y, C, b;
                ((g = new f(n)),
                  d(
                    g.datagrams,
                    (y = _ == null ? void 0 : _.incomingMaxBufferedDatagrams) !=
                      null
                      ? y
                      : u,
                    (C = _ == null ? void 0 : _.outgoingMaxBufferedDatagrams) !=
                      null
                      ? C
                      : c,
                  ),
                  m(
                    g.datagrams,
                    (b = _ == null ? void 0 : _.outgoingMaxAgeMs) != null
                      ? b
                      : 0,
                  ));
                var v = {
                  transport: g,
                  reader: null,
                  writer: null,
                  ip: r,
                  port: a,
                  attemptId: l,
                  sendQueue: [],
                  queuedBytes: 0,
                  pendingDatagramBytes: 0,
                  draining: !1,
                  opened: !1,
                  closing: !1,
                  cleaned: !1,
                  hasReceivedFirstDatagram: !1,
                  hasSentStunTraffic: !1,
                  hasSentRelayTraffic: !1,
                  relayGeneration: i,
                  sendRingConsumer: null,
                  hasLoggedIceRttFailure: !1,
                  pendingStunRequests: new Map(),
                  voipWasm: e,
                  wasmBuffer: o(
                    "WAWebVoipWasmHeapBuffer",
                  ).createHeapBufferState(),
                  stats: {
                    sentPackets: 0,
                    sentBytes: 0,
                    receivedPackets: 0,
                    receivedBytes: 0,
                    droppedPackets: 0,
                  },
                };
                if (
                  ((h = v),
                  T.set(t, v),
                  yield g.ready,
                  v.closing || T.get(t) !== v)
                )
                  return;
                var S = p(g.datagrams);
                (S != null &&
                  ((v.stats.maxDatagramSize = S),
                  o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
                    3,
                    "voip: [WebTransportThread] Max datagram size on " +
                      t +
                      ": " +
                      S,
                  )),
                  (v.writer = g.datagrams.writable.getWriter()),
                  (v.opened = !0),
                  K());
                var R = J(t, v, s);
                (X({
                  connectionId: t,
                  attemptId: l,
                  event: "open",
                  sendRingReady: R,
                }),
                  ne(e, t, v),
                  g.closed
                    .then(function () {
                      !v.closing &&
                        T.get(t) === v &&
                        (X({
                          connectionId: t,
                          attemptId: l,
                          event: "closed",
                          stats: v.stats,
                        }),
                        ee({ connectionId: t, state: v, voipWasm: e }));
                    })
                    .catch(function (n) {
                      !v.closing &&
                        T.get(t) === v &&
                        (X({
                          connectionId: t,
                          attemptId: l,
                          event: "error",
                          error: Y(n),
                          stats: v.stats,
                        }),
                        ee({ connectionId: t, state: v, voipWasm: e }));
                    }));
              } catch (n) {
                var L;
                if (h != null) {
                  var E = !h.cleaned && T.get(t) === h;
                  if ((ee({ connectionId: t, state: h, voipWasm: e }), !E))
                    return;
                } else if (g != null)
                  try {
                    g.close();
                  } catch (e) {}
                X({
                  connectionId: t,
                  attemptId: l,
                  event: "error",
                  error: Y(n),
                  stats: (L = h) == null ? void 0 : L.stats,
                });
              }
            }
          },
        )),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      for (var t of T.values())
        ((t.hasReceivedFirstDatagram = !1),
          (t.hasSentStunTraffic = !1),
          (t.hasSentRelayTraffic = !1),
          (t.relayGeneration = e));
    }
    function ue(t, n) {
      var r = T.get(t);
      if (!(r == null || !r.opened || r.closing)) {
        var o = p(r.transport.datagrams);
        if (o != null && ((r.stats.maxDatagramSize = o), n.byteLength > o)) {
          var a, i;
          (r.stats.droppedPackets++,
            (r.stats.oversizedPackets =
              ((a = r.stats.oversizedPackets) != null ? a : 0) + 1),
            (r.stats.oversizedBytes =
              ((i = r.stats.oversizedBytes) != null ? i : 0) + n.byteLength));
          return;
        }
        if (r.queuedBytes + n.byteLength > e) {
          r.stats.droppedPackets++;
          return;
        }
        (r.sendQueue.push(n),
          (r.queuedBytes += n.byteLength),
          (r.pendingDatagramBytes += n.byteLength),
          H(),
          oe(t, r));
      }
    }
    function ce(e, t) {
      if (t != null) {
        var n = T.get(t);
        n != null &&
          ((n.closing = !0),
          X({
            connectionId: t,
            attemptId: n.attemptId,
            event: "closed",
            stats: n.stats,
          }),
          ee({ connectionId: t, state: n, voipWasm: e }));
        return;
      }
      for (var r of Array.from(T.entries())) {
        var o = r[0],
          a = r[1];
        ((a.closing = !0),
          X({
            connectionId: o,
            attemptId: a.attemptId,
            event: "closed",
            stats: a.stats,
          }),
          ee({ connectionId: o, state: a, voipWasm: e }));
      }
    }
    ((l.openWebTransport = ie),
      (l.resetWebTransportDatagramHealth = se),
      (l.sendWebTransportDatagram = ue),
      (l.closeWebTransport = ce));
  },
  98,
);
