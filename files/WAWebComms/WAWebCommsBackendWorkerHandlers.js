__d(
  "WAWebCommsBackendWorkerHandlers",
  [
    "Promise",
    "WAComms",
    "WADeprecatedSendIq",
    "WAGzip",
    "WALogger",
    "WATransferableResult",
    "WAWap",
    "WAWebCommsConfigWorker",
    "WAWebPageLoadLogging",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, a) {
      var i = function (a) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms][worker] route ",
                " failed",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(a))
          .sendLogs("comms-worker-handler-error");
      };
      return function () {
        var e;
        try {
          e = a.apply(void 0, arguments);
        } catch (e) {
          throw (i(e), e);
        }
        return e instanceof (s || (s = n("Promise")))
          ? e.catch(function (e) {
              throw (i(e), e);
            })
          : e;
      };
    }
    function c(e, t) {
      var r,
        a = function (t) {
          return (s || (s = n("Promise"))).resolve(t);
        },
        i = new Map(),
        l = function () {
          return o("WAComms").singletonOrThrowIfUninitialized(
            "comms-worker-proxy",
          );
        };
      return {
        sendIq: u(
          "sendIq",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.abortToken,
                  r = e.attachToSocket,
                  s = e.iq,
                  u = e.timeoutSeconds,
                  c = e.type;
                yield t;
                var d = yield o("WAWap").decodeStanza(s, a),
                  m = new AbortController();
                i.set(n, m);
                try {
                  var p = yield l().sendIq({
                      attachToSocket: r,
                      iq: d,
                      signal: m.signal,
                      timeoutSeconds: u,
                      type: c,
                    }),
                    _ = o("WAWap").encodeStanza(p);
                  return o("WATransferableResult").withTransferables(_, [
                    _.buffer,
                  ]);
                } finally {
                  i.delete(n);
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        abortSendIq: u(
          "abortSendIq",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n,
                  r = e.abortToken;
                (yield t, (n = i.get(r)) == null || n.abort());
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        callStanza: u(
          "callStanza",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.flags,
                  r = e.stanza;
                yield t;
                var i = yield o("WAWap").decodeStanza(r, a);
                yield l().callStanza(i, n);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        castStanza: u(
          "castStanza",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.flags,
                  r = e.stanza;
                yield t;
                var i = yield o("WAWap").decodeStanza(r, a);
                l().castStanza(i, n);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        sendPing: u(
          "sendPing",
          (r = n("asyncToGeneratorRuntime")).asyncToGenerator(function* () {
            return (yield t, l().sendPing());
          }),
        ),
        waitForNetworkHealth: u(
          "waitForNetworkHealth",
          r.asyncToGenerator(function* () {
            return (yield t, l().waitForNetworkHealth());
          }),
        ),
        startHandlingRequests: u(
          "startHandlingRequests",
          r.asyncToGenerator(function* () {
            return (yield t, l().startHandlingRequests());
          }),
        ),
        socketLoopIteration: u(
          "socketLoopIteration",
          r.asyncToGenerator(function* () {
            return (yield t, l().socketLoopIteration());
          }),
        ),
        softCloseSocket: u(
          "softCloseSocket",
          r.asyncToGenerator(function* () {
            var e, n;
            (yield t, (e = (n = l()).softCloseSocket) == null || e.call(n));
          }),
        ),
        stopComms: u(
          "stopComms",
          r.asyncToGenerator(function* () {
            return (yield t, l().stopComms());
          }),
        ),
        closeSocket: u(
          "closeSocket",
          r.asyncToGenerator(function* () {
            return (yield t, l().closeSocket());
          }),
        ),
        closeSocketInDebugMode: u(
          "closeSocketInDebugMode",
          r.asyncToGenerator(function* () {
            return (yield t, l().closeSocketInDebugMode());
          }),
        ),
        closeSocketAndPreventRetry: u(
          "closeSocketAndPreventRetry",
          r.asyncToGenerator(function* () {
            return (yield t, l().closeSocketAndPreventRetry());
          }),
        ),
        closeSocketAndPause: u(
          "closeSocketAndPause",
          r.asyncToGenerator(function* () {
            return (yield t, l().closeSocketAndPause());
          }),
        ),
        closeSocketAndResume: u(
          "closeSocketAndResume",
          r.asyncToGenerator(function* () {
            return (yield t, l().closeSocketAndResume());
          }),
        ),
        openSocketLoop: u(
          "openSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, l().openSocketLoop());
          }),
        ),
        maybeResetSocketLoop: u(
          "maybeResetSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, l().maybeResetSocketLoop());
          }),
        ),
        forceResetSocketLoop: u(
          "forceResetSocketLoop",
          r.asyncToGenerator(function* () {
            return (yield t, l().forceResetSocketLoop());
          }),
        ),
        forceAbortSocketConnection: u(
          "forceAbortSocketConnection",
          r.asyncToGenerator(function* () {
            return (yield t, l().forceAbortSocketConnection());
          }),
        ),
        onStreamErrorReceived: u(
          "onStreamErrorReceived",
          r.asyncToGenerator(function* () {
            return (yield t, l().onStreamErrorReceived());
          }),
        ),
        cancelDeadSocketTimer: u(
          "cancelDeadSocketTimer",
          r.asyncToGenerator(function* () {
            return (yield t, l().cancelDeadSocketTimer());
          }),
        ),
        deprecatedSendStanzaAndReturnAck: u(
          "deprecatedSendStanzaAndReturnAck",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.expectedAck,
                  r = e.stanza;
                yield t;
                var i = yield o("WAWap").decodeStanza(r, a),
                  l = yield o(
                    "WADeprecatedSendIq",
                  ).deprecatedSendStanzaAndReturnAck(i, n),
                  s = o("WAWap").encodeStanza(l);
                return o("WATransferableResult").withTransferables(s, [
                  s.buffer,
                ]);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        createComms: u(
          "createComms",
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                var i = r.passive,
                  l = r.pull;
                (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "createCommsWaitForWorkerState",
                ),
                  yield t,
                  o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                    "createCommsWaitForWorkerState",
                  ));
                var u = o("WAWebCommsConfigWorker").getCommsConfig({
                  passive: i,
                  pull: l,
                });
                o("WAComms").startComms(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t, n, r) {
                        var i = o("WAWap").encodeStanza(t),
                          l = yield e.sendAndReceive(
                            "mainthread_comms",
                            "handleStanza",
                            { stanza: i, socketId: n, size: r },
                            !0,
                            void 0,
                            void 0,
                            [i.buffer],
                          );
                        return l instanceof Uint8Array
                          ? o("WAWap").decodeStanza(l, a)
                          : l;
                      },
                    );
                    return function (e, n, r) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  u,
                  function (e) {
                    return (s || (s = n("Promise"))).resolve(
                      o("WAGzip").inflate(e),
                    );
                  },
                  !1,
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        ),
      };
    }
    l.createCommsWorkerHandlers = c;
  },
  98,
);
