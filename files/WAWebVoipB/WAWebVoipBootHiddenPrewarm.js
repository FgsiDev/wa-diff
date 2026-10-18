__d(
  "WAWebVoipBootHiddenPrewarm",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBrowserApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebStreamModel",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 6e4,
      f = 4e3,
      g = 6e4;
    function h(t) {
      var n = C();
      if (n != null)
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmSkip(n),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] hidden_prewarm skip reason=",
                      "",
                    ])),
                  n,
                ));
            },
          ),
          r("WAWebNoop")
        );
      var a = new y(t);
      return (
        a.start(),
        function () {
          return a.stop();
        }
      );
    }
    var y = (function () {
      function e(e) {
        var t = this;
        ((this.$1 = 0),
          (this.$2 = !0),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$7 = null),
          (this.$8 = function () {
            (t.$1++, t.$11(), t.$9());
          }),
          (this.$10 = function () {
            (self.removeEventListener("online", t.$10), (t.$5 = !1), t.$9());
          }),
          (this.$15 = function (e) {
            (t.stop(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmEnd(
                    "error",
                  ),
                    o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] hidden_prewarm failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)));
                },
              ));
          }),
          (this.$6 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          (document.addEventListener("visibilitychange", this.$8),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o(
                  "WAWebCoreActionsODS",
                ).logCallVoipBootHiddenPrewarmWatching(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] hidden_prewarm watching hidden=",
                        "",
                      ])),
                    String(document.hidden),
                  ));
              },
            ));
          try {
            this.$9();
          } catch (e) {
            throw (this.stop(), e);
          }
        }),
        (t.stop = function () {
          ((this.$2 = !1),
            document.removeEventListener("visibilitychange", this.$8),
            self.removeEventListener("online", this.$10),
            this.$11());
        }),
        (t.$9 = function () {
          var e = this;
          if (this.$12()) {
            if (
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            ) {
              this.$13();
              return;
            }
            var t = this.$1,
              n = Date.now() + _;
            this.$7 = self.setTimeout(function () {
              ((e.$7 = null), e.$14(t, n).catch(e.$15));
            }, _);
          }
        }),
        (t.$12 = function () {
          return (
            this.$2 &&
            document.hidden &&
            this.$7 == null &&
            !this.$3 &&
            !this.$5
          );
        }),
        (t.$13 = function () {
          var e = this;
          this.$4 ||
            ((this.$4 = !0),
            o("WAWebVoipBackgroundWarmConditions")
              .waitForCurrentOfflineDeliveryEnd()
              .then(function () {
                ((e.$4 = !1), e.$9());
              })
              .catch(this.$15));
        }),
        (t.$16 = function () {
          ((this.$5 = !0), self.addEventListener("online", this.$10));
        }),
        (t.$14 = async function (t, n) {
          if (!(!this.$17(t) || this.$18() || this.$19(n))) {
            var e = Date.now(),
              r = await this.$20();
            !r ||
              this.$21(t) ||
              this.$18() ||
              this.$19(e) ||
              (this.$22("started"), this.$6());
          }
        }),
        (t.$20 = async function () {
          this.$3 = !0;
          try {
            return (await o("WAPromiseTimeout").promiseTimeout(k(), g), !0);
          } catch (e) {
            return (this.$23(e), !1);
          } finally {
            this.$3 = !1;
          }
        }),
        (t.$21 = function (t) {
          return this.$2
            ? this.$17(t)
              ? !1
              : (o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmLoad(
                    "visible",
                  ),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm wait reason=visible",
                        ])),
                    ));
                }),
                this.$9(),
                !0)
            : (this.$22("stopped"), !0);
        }),
        (t.$19 = function (t) {
          var e = S(t);
          return e == null
            ? !1
            : (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmRearm(
                    e,
                  ),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm rearm reason=",
                          "",
                        ])),
                      e,
                    ));
                },
              ),
              e === "offline" ? this.$16() : this.$9(),
              !0);
        }),
        (t.$17 = function (t) {
          return this.$2 && this.$1 === t && document.hidden;
        }),
        (t.$18 = function () {
          var e = b();
          return e == null ? !1 : (this.$22(e), !0);
        }),
        (t.$22 = function (t) {
          (this.stop(),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (t !== "started" &&
                  t !== "stopped" &&
                  o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmEnd(t),
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] hidden_prewarm end reason=",
                        "",
                      ])),
                    t,
                  ));
              },
            ));
        }),
        (t.$23 = function (t) {
          this.stop();
          var e = R(t);
          (e === "chunk_failed" &&
            o("WAWebBackendApi").frontendFireAndForget(
              "markVoipChunkUnavailable",
            ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmLoad(e),
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] hidden_prewarm load_failed reason=",
                          "",
                        ])),
                      e,
                    )
                    .catching(r("getErrorSafe")(t)));
              },
            ));
        }),
        (t.$11 = function () {
          this.$7 != null && (self.clearTimeout(this.$7), (this.$7 = null));
        }),
        e
      );
    })();
    function C() {
      return E()
        ? "low_memory"
        : L()
          ? o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
            ? "unsupported"
            : o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
              ? "constrained_network"
              : null
          : "disabled";
    }
    function b() {
      return L()
        ? o("WAWebStreamModel").Stream.isHardRefresh
          ? "hard_refresh"
          : o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
            ? "constrained_network"
            : v()
        : "disabled";
    }
    function v() {
      return o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited()
        ? "inited"
        : o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
          ? "init_in_flight"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError()
            ? "init_errored"
            : null;
    }
    function S(e) {
      return o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
        ? o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
          ? navigator.onLine
            ? null
            : "offline"
          : "offline_delivery"
        : "late_timer";
    }
    function R(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? "chunk_failed"
        : e instanceof o("WACustomError").TimeoutError
          ? "timeout"
          : "failed";
    }
    function L() {
      return (
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o("WAWebVoipBootInitDecision").isDeferredVoipBootHiddenPrewarmEnabled()
      );
    }
    function E() {
      var e = o("WAWebBrowserApi").getMemClass();
      return e != null && e <= f;
    }
    function k() {
      return Promise.all(
        o("WAWebVoipColdPathEarlyStart")
          .getVoipColdPathModuleLoads(
            !0,
            o("WAWebVoipBackendLoadable").requireVoipJsBackendFailFast,
          )
          .map(function (e) {
            var t = e.load;
            return t();
          }),
      );
    }
    l.watchForHiddenVoipPrewarm = h;
  },
  98,
);
