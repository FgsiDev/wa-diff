__d(
  "WAWebVoipBootInitScheduler",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBootHiddenPrewarm",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitABPropExposure",
    "err",
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
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = 5e3,
      E = 2147483647,
      k = 0,
      I = null,
      T = null,
      D = null,
      x = "idle",
      $ = null;
    function P(t) {
      if ((t === void 0 && (t = !1), !H())) {
        var n;
        try {
          n = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
        } catch (e) {
          (O(e), U());
          return;
        }
        if (!n) {
          t &&
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_fail_open reason=deferred_gate_disabled",
                    ])),
                );
              },
            ),
            W());
          return;
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          o("WAWebVoipInitABPropExposure").logVoipInitABPropExposures,
        );
        try {
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
          if (r == null) {
            (V(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_ignored reason=self_lid_unavailable",
                      ])),
                  );
                },
              ));
            return;
          }
          if (x !== "idle" && M(I, r)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_ignored reason=already_scheduled state=",
                      "",
                    ])),
                  x,
                );
              },
            );
            return;
          }
          (w(),
            k++,
            (I = r),
            (x = "waiting_offline"),
            (D = J()),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WAWebCoreActionsODS").logCallVoipBootInitDeferred();
              },
            ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] scheduled phase=offline_delivery generation=",
                      "",
                    ])),
                  k,
                );
              },
            ));
          var a = k;
          te(a, r).catch(function (e) {
            (O(e), K(a, r));
          });
        } catch (e) {
          (O(e), U());
        }
      }
    }
    function N() {
      V();
    }
    function M(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function w() {
      (A(), F());
    }
    function A() {
      T != null && (self.clearTimeout(T), (T = null));
    }
    function F() {
      var e = $;
      (($ = null), e == null || e());
    }
    function O(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: deferred boot init scheduler failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-deferred-boot-init-scheduler-error");
        },
      );
    }
    async function B(e, t) {
      var n = e == null ? "fail_open" : "deferred";
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] backend_load_start source=",
                "",
              ])),
            n,
          );
        },
      );
      var r = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
        a = r.WAWebVoipInit;
      if (e != null && !z(e.generation, e.lid)) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] backend_ready ignored reason=stale_schedule",
                ])),
            );
          },
        );
        return;
      }
      if (!(e != null && G()) && !H()) {
        var i = a.VoipInitEventEmitter.getIsVoipInited();
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] init_dispatch trigger=prewarm source=",
                  " already_inited=",
                  "",
                ])),
              n,
              i,
            );
          },
        ),
          await a.initWAWebVoip("prewarm", t),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] init_complete trigger=prewarm source=",
                    " inited=",
                    "",
                  ])),
                n,
                a.VoipInitEventEmitter.getIsVoipInited(),
              );
            },
          ));
      }
    }
    function W(e, t) {
      (e === void 0 && (e = null),
        B(e, t).catch(function (t) {
          (q(e), O(t));
        }));
    }
    function q(e) {
      if (!(e == null || e.generation !== k || I == null || !e.lid.equals(I)))
        try {
          V();
        } catch (e) {
          O(e);
        }
    }
    function U() {
      var e = X("scheduler_error");
      try {
        V();
      } catch (e) {
        O(e);
      }
      (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(
            "scheduler_error",
          );
        },
      ),
        W(null, e));
    }
    function V() {
      try {
        w();
      } finally {
        (k++, (I = null), (D = null), (x = "idle"));
      }
    }
    function H() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (e) {
        O(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=download_disabled state=",
                "",
              ])),
            x,
          );
        },
      );
      try {
        V();
      } catch (e) {
        O(e);
      }
      return !0;
    }
    function G() {
      var e = !0;
      try {
        e = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        O(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=deferred_gate_disabled state=",
                "",
              ])),
            x,
          );
        },
      );
      try {
        V();
      } catch (e) {
        O(e);
      }
      return !0;
    }
    function z(e, t) {
      if (e !== k || I == null || !t.equals(I)) return !1;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      return n == null || !t.equals(n)
        ? (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] schedule_abandon reason=identity_changed state=",
                    "",
                  ])),
                x,
              );
            },
          ),
          V(),
          !1)
        : !0;
    }
    function j(e, t, n) {
      x === "idle" ||
        x === "fired" ||
        !z(t, n) ||
        Q(e, { generation: t, lid: n });
    }
    function K(e, t) {
      x === "idle" ||
        x === "fired" ||
        e !== k ||
        I == null ||
        !t.equals(I) ||
        Q("scheduler_error", { generation: e, lid: t });
    }
    function Q(e, t) {
      if (!(t != null && G()) && !H()) {
        ((x = "fired"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(e);
            },
          ));
        var n = X(e);
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            var t;
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] fire reason=",
                  " wait_ms=",
                  "",
                ])),
              e,
              String((t = n.waitMs) != null ? t : "unavailable"),
            );
          },
        );
        try {
          w();
        } catch (e) {
          O(e);
        }
        W(t, n);
      }
    }
    function X(e) {
      var t = Y();
      return t == null ? { reason: e } : { reason: e, waitMs: t };
    }
    function Y() {
      var e = D;
      if (e == null) return null;
      var t = J();
      return t == null ? null : Math.round(Math.max(0, t - e));
    }
    function J() {
      try {
        return self.performance.now();
      } catch (e) {
        return (O(e), null);
      }
    }
    function Z(e, t) {
      if (z(e, t)) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        );
        if (!Number.isFinite(n))
          throw r("err")("invalid deferred boot max delay");
        if (((x = "armed"), n <= 0)) {
          (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("lazy"),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] armed mode=lazy",
                    ])),
                ));
            },
          ),
            ee(e, t));
          return;
        }
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("deadline"),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] armed mode=deadline max_delay_ms=",
                    "",
                  ])),
                n,
              ));
          },
        ),
          (T = self.setTimeout(
            function () {
              ((T = null), j("deadline", e, t));
            },
            Math.min(n, E),
          )));
      }
    }
    function ee(e, t) {
      try {
        $ = o("WAWebVoipBootHiddenPrewarm").watchForHiddenVoipPrewarm(
          function () {
            j("hidden_prewarm", e, t);
          },
        );
      } catch (e) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] hidden_prewarm watch_failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          },
        );
      }
    }
    async function te(e, t) {
      var n = "complete";
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
            ignoreInit: !0,
          }),
          L,
        );
      } catch (r) {
        if (!z(e, t)) return;
        if (!(r instanceof o("WACustomError").TimeoutError)) {
          (O(r), K(e, t));
          return;
        }
        n = "timeout";
      }
      if (z(e, t)) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] offline_delivery_wait_done outcome=",
                  "",
                ])),
              n,
            );
          },
        );
        try {
          Z(e, t);
        } catch (n) {
          (O(n), K(e, t));
        }
      }
    }
    ((l.scheduleDeferredVoipBootInit = P),
      (l.resetVoipBootInitSchedulerForTesting = N));
  },
  98,
);
