__d(
  "CastingChromecastScanner",
  [
    "CastingChromecastAPIWrapper",
    "CastingChromecastSession",
    "CastingErrorUtils",
    "ConnectedTvLoggingFalcoEvent",
    "Promise",
    "err",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "promiseDone",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e, t) {
          ((this.$6 = null),
            (this.$7 = []),
            (this.$8 = []),
            (this.$9 = []),
            (this.$10 = []),
            (this.$11 = []),
            (this.$12 = []),
            (this.$13 = []),
            (this.$14 = []),
            (this.$15 = []),
            (this.$1 = e),
            (this.$2 = t),
            (this.$4 = !1),
            (this.$3 = !1),
            (this.$5 = new Set()));
        }
        var a = t.prototype;
        return (
          (a.init = function () {
            return this.$6 != null
              ? (s || (s = n("Promise"))).reject(
                  r("err")("Scanner can only be initialized once."),
                )
              : ((this.$6 = this.$16()), this.$6);
          }),
          (a.ready = function () {
            return this.$6 == null
              ? (s || (s = n("Promise"))).reject(
                  r("err")("Scanner should be initialized."),
                )
              : this.$6;
          }),
          (a.hasSupport = function () {
            return this.$3;
          }),
          (a.hasFoundReceiver = function () {
            return this.$4;
          }),
          (a.getSession = function () {
            var e = this;
            return this.$4
              ? (this.$13.slice().forEach(function (e) {
                  e();
                }),
                this.$17()
                  .then(function (t) {
                    var n = e.$18(t);
                    return (
                      e.$5.add(n),
                      e.$14.slice().forEach(function (e) {
                        e(n);
                      }),
                      n
                    );
                  })
                  .catch(function (t) {
                    throw (
                      e.$10.slice().forEach(function (e) {
                        e();
                      }),
                      e.$11.slice().forEach(function (e) {
                        e();
                      }),
                      t
                    );
                  }))
              : (s || (s = n("Promise"))).reject(
                  r("err")("No receivers found"),
                );
          }),
          (a.$16 = function () {
            var e = this;
            return (
              (this.$3 = !0),
              this.$19()
                .then(function (t) {
                  return e.$20();
                })
                .then(function (t) {
                  e.$9.slice().forEach(function (e) {
                    e();
                  });
                })
                .then(function (t) {
                  return e.$21();
                })
                .catch(function (t) {
                  var n = r("getErrorSafe")(t);
                  throw (
                    !o("CastingErrorUtils").isChromecastError(
                      n,
                      "not_supported",
                    ) &&
                      !o("CastingErrorUtils").isChromecastError(
                        n,
                        "extension_not_available",
                      ) &&
                      !o("CastingErrorUtils").isChromecastError(
                        n,
                        "extension_no_casting_script",
                      ) &&
                      e.$8.slice().forEach(function (e) {
                        e(n, "CastingChromecastScanner._init");
                      }),
                    t
                  );
                })
            );
          }),
          (a.$21 = function () {
            var e = this,
              t = this.$1;
            if (t == null)
              return (s || (s = n("Promise"))).reject(
                r("err")("App ID is not defined"),
              );
            var o = function (n) {
                var t = e.$18(n);
                e.$14.slice().forEach(function (e) {
                  e(t);
                });
              },
              a = function (n) {
                r("promiseDone")(
                  r("CastingChromecastAPIWrapper")
                    .getIsAvailable(n)
                    .then(function (t) {
                      ((e.$4 = t),
                        e.$15.slice().forEach(function (t) {
                          t({ foundReceiver: e.$4 });
                        }));
                    }),
                );
              };
            return r("CastingChromecastAPIWrapper")
              .initialize({ appID: t, receiverListener: a, sessionListener: o })
              .then(function () {})
              .catch(function (t) {
                throw (
                  e.$8.slice().forEach(function (e) {
                    e(
                      r("getErrorSafe")(t),
                      "CastingChromecastScanner._initializeApi",
                    );
                  }),
                  t
                );
              });
          }),
          (a.$19 = function () {
            var e = this;
            return this.$1 != null
              ? (s || (s = n("Promise"))).resolve()
              : r("CastingChromecastAPIWrapper")
                  .getDefaultAppID()
                  .then(function (t) {
                    e.$1 = t;
                  });
          }),
          (a.$17 = function () {
            var t = this.$1;
            if (t == null)
              return (s || (s = n("Promise"))).reject(
                r("err")("App ID is not defined"),
              );
            var o = (e || (e = r("performanceAbsoluteNow")))();
            return (
              r("ConnectedTvLoggingFalcoEvent").log(function () {
                return { event: "sender_session_requested" };
              }),
              r("CastingChromecastAPIWrapper")
                .getSession(t)
                .then(function (t) {
                  return (
                    r("ConnectedTvLoggingFalcoEvent").log(function () {
                      return {
                        event: "sender_session_started",
                        perf_time_ms: Math.floor(
                          (e || (e = r("performanceAbsoluteNow")))() - o,
                        ),
                      };
                    }),
                    t
                  );
                })
                .catch(function (t) {
                  throw (
                    r("ConnectedTvLoggingFalcoEvent").log(function () {
                      return {
                        event: "sender_session_failed",
                        perf_time_ms: Math.floor(
                          (e || (e = r("performanceAbsoluteNow")))() - o,
                        ),
                        session_failure_code:
                          typeof t.code == "string" ? t.code : null,
                        session_failure_description: t.description,
                      };
                    }),
                    t
                  );
                })
            );
          }),
          (a.$18 = function (t) {
            var e = this,
              n = new (r("CastingChromecastSession"))(
                this.$1 || "",
                this.$2 || "",
                t,
              ),
              o = n.onDisconnecting(function () {
                e.$12.slice().forEach(function (e) {
                  e();
                });
              }),
              a = n.onError(function (t, n) {
                e.$8.slice().forEach(function (e) {
                  e(t, n);
                });
              }),
              i = n.onDisconnected(function () {
                (e.$11.slice().forEach(function (e) {
                  e();
                }),
                  e.$5.delete(n),
                  o.remove(),
                  a.remove(),
                  i.remove());
              });
            return n;
          }),
          (a.$20 = function () {
            var e = this;
            return r("CastingChromecastAPIWrapper").addReceiverListener({
              onCast: function (n) {
                e.$7.slice().forEach(function (e) {
                  e(n);
                });
              },
              onStop: function () {
                e.$5.forEach(function (e) {
                  return e.disconnect();
                });
              },
            });
          }),
          (a.onCast = function (t) {
            var e = this.$7;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onError = function (t) {
            var e = this.$8;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onInit = function (t) {
            var e = this.$9;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionCancelled = function (t) {
            var e = this.$10;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionDisconnected = function (t) {
            var e = this.$11;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionDisconnecting = function (t) {
            var e = this.$12;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionRequested = function (t) {
            var e = this.$13;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onSessionStarted = function (t) {
            var e = this.$14;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          (a.onStatusChanged = function (t) {
            var e = this.$15;
            return (
              e.push(t),
              {
                remove: function () {
                  r("removeFromArray")(e, t);
                },
              }
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
