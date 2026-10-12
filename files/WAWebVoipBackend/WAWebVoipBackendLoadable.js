__d(
  "WAWebVoipBackendLoadable",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 5e3,
      g = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (_ || (_ = n("Promise"))).all([
              r("JSResourceForInteraction")("WAWebVoipInit")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
              r("JSResourceForInteraction")("WAWebHandleVoipCallOffer")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
            ]),
            t = e[0],
            o = e[1];
          return { WAWebVoipInit: t, WAWebHandleVoipCallOffer: o };
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function h() {
      try {
        if (
          !o("WAWebVoipGatingUtils").isVoipDownloadEnabled() ||
          o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()
        )
          return null;
      } catch (t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] boot backend prefetch gate failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          },
        );
      }
      return g();
    }
    function y(e) {
      var t;
      try {
        if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled())
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] boot_gate source=",
                      " decision=skip reason=download_disabled",
                    ])),
                  e,
                );
              },
            ),
            (_ || (_ = n("Promise"))).resolve()
          );
        t = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (t) {
        return (v(t, "gate", e), b(e, !0));
      }
      return (
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] boot_gate source=",
                  " decision=",
                  "",
                ])),
              e,
              t ? "deferred" : "eager",
            );
          },
        ),
        t ? (S(e), R(e), (_ || (_ = n("Promise"))).resolve()) : b(e)
      );
    }
    function C(e) {
      try {
        return !o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (t) {
        return (v(t, "gate", e), !1);
      }
    }
    function b(e, t) {
      return (
        t === void 0 && (t = !1),
        g().then(function (n) {
          var r = n.WAWebVoipInit;
          if (!(t && C(e))) return r.initWAWebVoip();
        })
      );
    }
    function v(e, t, n) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] failed stage=",
                  " source=",
                  "",
                ])),
              t,
              n,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-deferred-boot-failed");
        },
      );
    }
    function S(e) {
      (_ || (_ = n("Promise")))
        .resolve()
        .then(function () {
          return o("WAPromiseTimeout").promiseTimeout(
            r("JSResourceForInteraction")("WAWebVoipBootInitScheduler")
              .__setRef("WAWebVoipBackendLoadable")
              .load(),
            f,
          );
        })
        .then(function (e) {
          var t = e.scheduleDeferredVoipBootInit;
          t(!0);
        })
        .catch(function (t) {
          (t instanceof o("WACustomError").TimeoutError
            ? o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_fail_open source=",
                        " reason=scheduler_load_timeout",
                      ])),
                    e,
                  );
                },
              )
            : v(t, "scheduler", e),
            C(e) ||
              b(e, !0).catch(function (t) {
                v(t, "fallback", e);
              }));
        });
    }
    function R(e) {
      var t;
      try {
        t = o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled();
      } catch (t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_module_prefetch gate_failed source=",
                    "",
                  ])),
                e,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-deferred-boot-early-prefetch-gate-failed");
          },
        );
        return;
      }
      t &&
        (_ || (_ = n("Promise")))
          .resolve()
          .then(function () {
            return r("JSResourceForInteraction")("WAWebVoipBootStackPrefetch")
              .__setRef("WAWebVoipBackendLoadable")
              .load();
          })
          .then(function (t) {
            var n = t.prefetchDeferredVoipBootModules;
            return n(e);
          })
          .catch(function (t) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] early_module_prefetch trigger_failed source=",
                        "",
                      ])),
                    e,
                  )
                  .catching(r("getErrorSafe")(t));
              },
            );
          });
    }
    ((l.requireVoipJsBackend = g),
      (l.prefetchVoipJsBackendAtBoot = h),
      (l.initializeVoipFromBootGate = y));
  },
  98,
);
