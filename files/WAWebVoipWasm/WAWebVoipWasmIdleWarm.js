__d(
  "WAWebVoipWasmIdleWarm",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebCoreActionsODS",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipQplHelpers",
    "WAWebVoipWasmArtifactGating",
    "WAWebVoipWasmFetchTarget",
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
      p = 5e3,
      _ = 3e4,
      f = 5e3,
      g = !1;
    function h(t) {
      g ||
        ((g = !0),
        o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState(
          "scheduled",
        ),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] wasm_idle_warm scheduled source=",
                  "",
                ])),
              t,
            );
          },
        ),
        C().catch(b));
    }
    function y() {
      g = !1;
    }
    async function C() {
      await v();
      var e = E();
      if (e != null) {
        (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("skipped"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarmSkip(e),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] wasm_idle_warm skip reason=",
                      "",
                    ])),
                  e,
                ));
            },
          ));
        return;
      }
      var t = await o("WAWebVoipWasmArtifactGating").selectVoipWasmArtifacts(),
        n = o("WAWebVoipWasmFetchTarget").getVoipWasmFetchTarget(t);
      if (n == null) throw r("err")("VoIP WASM URL unavailable");
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("fetching"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("started"),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm start content_addressed=",
                    "",
                  ])),
                t.useContentAddressedWasm,
              ));
          },
        ));
      var a = self.performance.now(),
        i = await I(n),
        l = Math.round(self.performance.now() - a);
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("complete"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("complete"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm complete bytes=",
                    " ms=",
                    "",
                  ])),
                i,
                l,
              ));
          },
        ));
    }
    function b(e) {
      (o("WAWebVoipQplHelpers").voipInitQplRecordWasmIdleWarmState("failed"),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipWasmIdleWarm("failed"),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] wasm_idle_warm failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)));
          },
        ));
    }
    async function v() {
      await o(
        "WAWebVoipBackgroundWarmConditions",
      ).waitForCurrentOfflineDeliveryEnd();
      var e = !1,
        t = function () {
          e = !0;
        };
      o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryStateReset(t);
      var n = await S().finally(function () {
        return o("WAWebBackendEventBus").BackendEventBus.off(
          o("WAWebBackendEventBusTypes").BackendEvent
            .OFFLINE_DELIVERY_STATE_RESET,
          t,
        );
      });
      if (
        !(
          n &&
          !e &&
          o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        )
      )
        return (
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] wasm_idle_warm rearm reason=",
                    "",
                  ])),
                n ? "offline_delivery" : "late_timer",
              );
            },
          ),
          v()
        );
    }
    async function S() {
      return document.hidden ? R(p) : (await R(_)) && L();
    }
    function R(e) {
      var t = Date.now() + e;
      return new Promise(function (n) {
        self.setTimeout(function () {
          return n(o("WAWebVoipBackgroundWarmConditions").didFireOnTime(t));
        }, e);
      });
    }
    async function L() {
      var e = Date.now() + f;
      return (
        await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(f),
        o("WAWebVoipBackgroundWarmConditions").didFireOnTime(e)
      );
    }
    function E() {
      return k()
        ? o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
          ? "inited"
          : o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight()
            ? "init_in_flight"
            : navigator.onLine
              ? o("WAWebVoipBackgroundWarmConditions").isConstrainedNetwork()
                ? "constrained_network"
                : null
              : "offline"
        : "disabled";
    }
    function k() {
      return (
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        o("WAWebVoipGatingUtils").isVoipDownloadEnabled() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    async function I(e) {
      var t = e.init,
        n = e.url,
        o = await self.fetch(
          n,
          babelHelpers.extends({}, t, { priority: "low" }),
        );
      if (!o.ok) throw r("err")("VoIP WASM warm got HTTP " + o.status);
      var a = o.body;
      if (a == null) throw r("err")("VoIP WASM warm response has no body");
      return T(a.getReader(), 0);
    }
    async function T(e, t) {
      var n = await e.read(),
        r = n.done,
        o = n.value;
      return r || o == null ? t : T(e, t + o.byteLength);
    }
    ((l.scheduleVoipWasmIdleWarm = h), (l.resetVoipWasmIdleWarmForTesting = y));
  },
  98,
);
