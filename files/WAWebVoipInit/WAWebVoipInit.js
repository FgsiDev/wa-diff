__d(
  "WAWebVoipInit",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebCountryCodeUtils",
    "WAWebEnvironment",
    "WAWebJoinableCallWamEvent",
    "WAWebPageVisibilityRecency",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackgroundWarmConditions",
    "WAWebVoipBootInitDecision",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCrashRecovery",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipHiddenPrewarmIdleWork",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNetworkMedium",
    "WAWebVoipPthreadGlueFailureTracker",
    "WAWebVoipQplHelpers",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWasmArtifactRegistry",
    "WAWebVoipWasmArtifactSkewErrors",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
    "getErrorSafe",
    "justknobx",
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
      L,
      E,
      k,
      I,
      T = (e = n("cr:17219")) != null ? e : {},
      D = T.getWindowsBridge,
      x = 1,
      $ = 5e3,
      P = 60 * 1e3,
      N = 5e3,
      M,
      w = "prewarm",
      A = null,
      F = null,
      O = null,
      B = null,
      W = !1,
      q = 0,
      U = null,
      V = null,
      H = !1,
      G = !1,
      z = 0,
      j = null;
    async function K(e, t, n, r, a) {
      e === void 0 && (e = "prewarm");
      var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (i == null) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init skipped, selfLid not available yet",
            ])),
        ),
          (W = !0),
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.triggerVoipInitFailure());
        return;
      }
      if (!i.equals(M))
        ((M = i),
          (w = e),
          ce(),
          (A = t),
          (F = n),
          (O = r),
          (B = a),
          await Z(i));
      else {
        if (t != null) {
          var l = w === "prewarm" ? "prewarm_owned" : "intent_owned";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(l);
            },
          );
        }
        J && (await J.promise, Ee(e) && (await K(e, t, n, r, a)));
      }
    }
    function Q() {
      return (
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() &&
        W &&
        q < ue()
      );
    }
    async function X() {
      if (V != null) return await V;
      var e = Y();
      V = e;
      try {
        return await e;
      } finally {
        V === e && (V = null);
      }
    }
    async function Y() {
      if (
        J &&
        (await J.promise,
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())
      )
        return !0;
      if (!Q())
        return o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited();
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (e == null) return !1;
      (q++,
        o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(),
        (M = e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: retrying init after transient failure attempt=",
              " max=",
              "",
            ])),
          q,
          ue(),
        ));
      var t = await Ne(),
        n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
      if (n == null || !e.equals(n))
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: skip retry, identity changed in idle wait",
              ])),
          ),
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        );
      await Z(e, !0, t);
      var r = o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.getIsVoipInited();
      return (
        r
          ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess()
          : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(),
            Q() || o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()),
        r
      );
    }
    var J = null;
    async function Z(e, t, n) {
      if (
        (t === void 0 && (t = !1),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init after me_ready",
            ])),
        ),
        !(
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError() && !t
        ))
      ) {
        if (
          J &&
          (await J.promise,
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited() ||
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError())
        ) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init already done, ignoring duplicate call",
              ])),
          );
          return;
        }
        J = new (o("WAResolvable").Resolvable)();
        var a = A,
          i = be(a, t);
        (!t &&
          a != null &&
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFired(a.reason);
            },
          ),
          o("WAWebVoipQplHelpers").startVoipInitQpl(ge()),
          de(t, n),
          pe(t));
        try {
          var l, s, u;
          if (
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitAttemptStarted(
              w === "prewarm" &&
                (!t ||
                  o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() != null),
            ),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.markVoipInitTrigger(he(a)),
            o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling())
          ) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped due to unsupported browser",
                ])),
            ),
              o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(),
              o("WAWebVoipQplHelpers").endVoipInitQplFail(
                "unsupported_browser",
              ),
              (W = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          (Te(),
            o(
              "WAWebVoipBrowserAudioStatus",
            ).preDetectBrowserAudioCapabilities());
          var c = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((c == null ? void 0 : c.type) === "windows") {
            var y = null;
            try {
              y = await o("WAPromiseTimeout").promiseTimeout(
                o("WAWebCountryCodeUtils").getMyCallingCode(),
                $,
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getMyCallingCode failed or timed out, using fallback: ",
                      "",
                    ])),
                  String(e),
                )
                .sendLogs("voip-get-self-country-code-failed");
            }
            try {
              await c.setSelfCountryCode(y != null ? y : "");
            } catch (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setSelfCountryCode failed, continuing init: ",
                      "",
                    ])),
                  String(e),
                )
                .sendLogs("voip-set-self-country-code-failed");
            }
          }
          var C = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            b = C != null && !C.isLid() ? C : null,
            v = b != null ? o("WAWebWidFactory").asUserWidOrThrow(b) : null,
            S =
              c == null
                ? void 0
                : c.voipInit(
                    (l = b == null ? void 0 : b.toString({ legacy: !0 })) !=
                      null
                      ? l
                      : "",
                    (s = v == null ? void 0 : v.toString({ legacy: !0 })) !=
                      null
                      ? s
                      : "",
                    e.toString({ legacy: !0 }),
                  );
          if (
            (await Promise.all([
              S,
              c == null
                ? void 0
                : c.setHideMyIp(
                    (u = o("WAWebUserPrefsGeneral").getUserPrivacySettings()
                      .disallowAllP2p) != null
                      ? u
                      : !1,
                  ),
            ]),
            (c == null ? void 0 : c.type) === "web")
          )
            var R = new (o("WAWebCallWamEvent").CallWamEvent)(),
              L = new (o("WAWebJoinableCallWamEvent").JoinableCallWamEvent)();
          try {
            o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
          } catch (e) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: network medium monitoring failed to start: ",
                  "",
                ])),
              e,
            );
          }
          if (
            ((c == null ? void 0 : c.type) === "web" &&
              o("WAWebVoipCrashRecovery").initCrashRecovery(),
            (c == null ? void 0 : c.type) === "windows")
          ) {
            var E;
            D == null ||
              (E = D(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit)) ==
                null ||
              (E = E.voip) == null ||
              E.setHandlers(c.callbacks);
          }
          (ve(i),
            ce(),
            Se(i),
            o("WAWebVoipQplHelpers").endVoipInitQplSuccess({
              bool: { download_only: !1 },
            }));
        } catch (e) {
          o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error", oe(e));
          var k = e instanceof Error ? e.message : String(e),
            I =
              r("WAWebEnvironment").isWindows &&
              k.includes(
                "Attempted to create Web stack in Windows environment",
              );
          if (I) {
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: init skipped on Windows Hybrid due to mis-resolve",
                ])),
            ),
              (W = !1),
              o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.triggerVoipInitFailure());
            return;
          }
          Re(t, i);
          var T = ee(e);
          (se(e, T, t), Ie(e, i));
          var x =
            (T && te()) ||
            o(
              "WAWebVoipPthreadGlueFailureTracker",
            ).hasTerminalPthreadGlueFailure();
          ((W = !x),
            x &&
              o("WAWebBackendApi").frontendFireAndForget(
                "markVoipWasmArtifactUnavailable",
              ),
            Le(i, T),
            Te());
        } finally {
          var P;
          (o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitAttemptEnded(),
            (P = J) == null || P.resolve(),
            (J = null));
        }
      }
    }
    function ee(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e),
        n =
          t.includes("LinkError") &&
          t.includes("function import requires a callable");
      return (
        n ||
        t.includes("No EM_ASM constant found") ||
        t.includes(
          o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
        )
      );
    }
    function te() {
      try {
        return r("justknobx")._("5809");
      } catch (e) {
        return !0;
      }
    }
    function ne(e) {
      return e.includes("stack interface load timed out")
        ? "stack_interface_load"
        : e.includes("timeout waiting for RPC ready")
          ? "worker_rpc_ready"
          : e.includes(
                o("WAWebVoipWasmArtifactSkewErrors")
                  .WORKER_GLUE_BUILD_MISMATCH_TOKEN,
              )
            ? "worker_glue_handshake"
            : e.includes(
                  o("WAWebVoipWasmArtifactSkewErrors")
                    .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
                )
              ? "worker_glue_load"
              : e.includes("No EM_ASM constant found")
                ? "wasm_runtime"
                : e.includes("LinkError") || e.includes("WebAssembly")
                  ? "wasm_instantiate"
                  : "init";
    }
    function re(e) {
      return e.includes(
        o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
      )
        ? "worker_glue_skew"
        : e.includes(
              o("WAWebVoipWasmArtifactSkewErrors")
                .PINNED_WORKER_GLUE_LOAD_FAILED_TOKEN,
            )
          ? "worker_glue_pinned_load_failed"
          : e.includes("__cxa_current_primary_exception")
            ? "missing_cxa_primary_exception"
            : e.includes("fd_sync")
              ? "missing_fd_sync"
              : e.includes("invoke_")
                ? "missing_invoke_trampoline"
                : e.includes("No EM_ASM constant found")
                  ? "missing_em_asm"
                  : e.includes("LinkError")
                    ? "linkerror_other"
                    : "other";
    }
    function oe(e) {
      var t = e instanceof Error ? e.name + ": " + e.message : String(e);
      return {
        int: {
          failure_fingerprint_code: ie(re(t)),
          failure_phase_code: ae(ne(t)),
        },
      };
    }
    function ae(e) {
      return e === "stack_interface_load"
        ? 1
        : e === "worker_rpc_ready"
          ? 2
          : e === "worker_glue_handshake"
            ? 3
            : e === "worker_glue_load"
              ? 4
              : e === "wasm_runtime"
                ? 5
                : e === "wasm_instantiate"
                  ? 6
                  : e === "init"
                    ? 7
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    function ie(e) {
      return e === "worker_glue_skew"
        ? 1
        : e === "worker_glue_pinned_load_failed"
          ? 2
          : e === "missing_cxa_primary_exception"
            ? 3
            : e === "missing_fd_sync"
              ? 4
              : e === "missing_invoke_trampoline"
                ? 5
                : e === "missing_em_asm"
                  ? 6
                  : e === "linkerror_other"
                    ? 7
                    : e === "other"
                      ? 8
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function le() {
      var e;
      return (e = o(
        "WAWebVoipWasmArtifactRegistry",
      ).getSelectedVoipWasmUri()) != null
        ? e
        : "unknown";
    }
    function se(e, t, n) {
      var r = e instanceof Error ? e.name + ": " + e.message : String(e);
      (t &&
        !n &&
        (o("WAWebCoreActionsODS").logCallVoipInitWasmContractMismatch(),
        r.includes(
          o("WAWebVoipWasmArtifactSkewErrors").WORKER_GLUE_BUILD_MISMATCH_TOKEN,
        ) &&
          o(
            "WAWebCoreActionsODS",
          ).logCallVoipInitWasmArtifactWorkerGlueSkewDetected()),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failure artifacts phase=",
              " fingerprint=",
              " expectedWasmUri=",
              "",
            ])),
          ne(r),
          re(r),
          le(),
        ));
    }
    function ue() {
      if (U == null)
        try {
          U = Math.max(0, r("justknobx")._("4786"));
        } catch (e) {
          (o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init retry count JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            x,
            String(e),
          ),
            (U = x));
        }
      return U;
    }
    function ce() {
      ((W = !1),
        (q = 0),
        (U = null),
        (V = null),
        (z = 0),
        (A = null),
        (F = null),
        (O = null),
        (B = null));
    }
    function de(e, t) {
      try {
        (o("WAWebVoipQplHelpers").voipInitQplAnnotateStart({
          bootDecision: o(
            "WAWebVoipBootInitDecision",
          ).getVoipBootInitDecision(),
          isRetry: e,
        }),
          o("WAWebVoipQplHelpers").voipInitQplAnnotateTrigger(me(e)),
          t != null &&
            o("WAWebVoipQplHelpers").voipInitQplAnnotateRetryIdleWait(t));
      } catch (e) {
        o("WALogger")
          .WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: init start annotation failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function me(e) {
      var t;
      return (t = e ? null : B) != null
        ? t
        : o("WAWebPageVisibilityRecency").snapshotPageVisibility();
    }
    function pe(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          !e &&
            o("WAWebVoipBootInitDecision").getVoipBootInitDecision() ===
              "deferred" &&
            o("WAWebCoreActionsODS").logCallVoipInitDeferredStart(_e());
        },
      );
    }
    function _e() {
      return w === "call"
        ? "call"
        : w === "incoming"
          ? fe(F)
          : w === "prewarm"
            ? A == null
              ? "prewarm_unscheduled"
              : "prewarm_scheduled"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    w,
                );
              })();
    }
    function fe(e) {
      return e == null
        ? "incoming_other"
        : e.isGroup
          ? "incoming_group"
          : e.msgType !== o("WAWebVoipSignalingEnums").TYPE.OFFER
            ? "incoming_other"
            : e.isCallEnded
              ? "incoming_offer_ended"
              : e.isFreshOffer
                ? "incoming_offer_fresh"
                : "incoming_offer_queued_30s_plus";
    }
    function ge() {
      var e = { trigger_code: ye(w) };
      O != null && (e.intent_backend_load_ms = O);
      var t = { trigger_source: w },
        n = A;
      n != null &&
        ((t.boot_defer_reason = n.reason),
        (e.boot_defer_reason_code = Ce(n.reason)),
        n.waitMs != null && (e.boot_defer_wait_ms = n.waitMs));
      var r = F;
      return r == null
        ? { int: e, string: t }
        : ((e.incoming_msg_type = r.msgType),
          (e.incoming_queued_ms = r.queuedMs),
          (t.incoming_payload_tag = r.payloadTag),
          {
            bool: {
              incoming_call_ended: r.isCallEnded,
              incoming_fresh_offer: r.isFreshOffer,
              incoming_is_group: r.isGroup,
              incoming_offline: r.isOffline,
            },
            int: e,
            string: t,
          });
    }
    function he(e) {
      var t;
      return w === "prewarm"
        ? (t = e == null ? void 0 : e.reason) != null
          ? t
          : "boot"
        : w === "call"
          ? "call"
          : w === "incoming"
            ? "incoming"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    w,
                );
              })();
    }
    function ye(e) {
      return e === "prewarm"
        ? 1
        : e === "call"
          ? 2
          : e === "incoming"
            ? 3
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function Ce(e) {
      return e === "deadline"
        ? 1
        : e === "scheduler_error"
          ? 2
          : e === "hidden_prewarm"
            ? 3
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function be(e, t) {
      return !t && (e == null ? void 0 : e.reason) === "hidden_prewarm";
    }
    function ve(e) {
      (e &&
        o("WAWebVoipHiddenPrewarmIdleWork").watchTabFromHiddenPrewarmSuccess(),
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.triggerVoipInitSuccess(e));
    }
    function Se(e) {
      (o("WAWebCoreActionsODS").logCallVoipInitSuccess(), e && ke("success"));
    }
    function Re(e, t) {
      t ? ke("failure") : e || o("WAWebCoreActionsODS").logCallVoipInitError();
    }
    function Le(e, t) {
      if (e && W) {
        ((M = null),
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.markVoipInitUntried(),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] hidden_prewarm init failed, VoIP left untried",
                  ])),
              );
            },
          ));
        return;
      }
      o(
        "WAWebVoipInitEventEmitter",
      ).VoipInitEventEmitter.triggerVoipInitFailure(
        t ? "wasm_contract_mismatch" : null,
      );
    }
    function Ee(e) {
      return (
        e !== "prewarm" &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError()
      );
    }
    function ke(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          var t = !document.hidden && document.hasFocus();
          (o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmInit(e),
            t &&
              o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmInit(
                "ended_visible",
              ),
            e === "success" &&
              o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmPostInit(
                document.hidden ? "hidden" : "visible",
              ),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] hidden_prewarm init_end outcome=",
                  " visible_focused=",
                  "",
                ])),
              e,
              String(t),
            ));
        },
      );
    }
    function Ie(e, t) {
      var n = o("WALogger").ERROR(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "voip: init failed: ",
              "",
            ])),
          e,
        ),
        r = t ? n.tags("non-sad") : n;
      r.sendLogs("voip: init-failed");
    }
    function Te() {
      H ||
        ((H = !0),
        (G = document.hidden),
        document.addEventListener("visibilitychange", function () {
          var e = G && !document.hidden;
          ((G = document.hidden),
            e &&
              De().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: visibility init check failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-visibility-init-failed");
              }));
        }));
    }
    async function De() {
      if (j != null) return await j;
      var e = xe();
      j = e;
      try {
        return await e;
      } finally {
        j === e && (j = null);
      }
    }
    async function xe() {
      if (
        !document.hidden &&
        (J && (await J.promise),
        !(
          document.hidden ||
          o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ) &&
          o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError())
      ) {
        if (!$e()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        if (!Q()) {
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
          return;
        }
        var e = V != null;
        if (e) {
          (o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed(),
            await X());
          return;
        }
        (Pe(),
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: retrying init after tab became visible",
              ])),
          ),
          o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt());
        var t = await X();
        t && o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
      }
    }
    function $e() {
      return z === 0 || Date.now() - z >= P;
    }
    function Pe() {
      z = Date.now();
    }
    async function Ne() {
      var e = document.hidden;
      e && o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitStartedHidden();
      var t = self.performance.now();
      await o("WAWebVoipBackgroundWarmConditions").waitForIdleCallback(Me(e));
      var n = {
        endedHidden: document.hidden,
        startedHidden: e,
        waitMs: Math.round(self.performance.now() - t),
      };
      return (Ae(n), n);
    }
    function Me(e) {
      return e && we()
        ? o("WAWebVoipHiddenPrewarmIdleWork").HIDDEN_TAB_IDLE_FALLBACK_MS
        : null;
    }
    function we() {
      try {
        return o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootHiddenPrewarmEnabled();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: hidden prewarm gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function Ae(e) {
      var t = e.endedHidden,
        n = e.startedHidden,
        r = e.waitMs;
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "voip: init retry idle wait ms=",
            " started_hidden=",
            " ended_hidden=",
            "",
          ])),
        r,
        String(n),
        String(t),
      ),
        n &&
          (o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenEnded(),
          r >= N &&
            o("WAWebCoreActionsODS").logCallVoipInitRetryIdleWaitHiddenLong()));
    }
    ((l.VoipInitEventEmitter = o(
      "WAWebVoipInitEventEmitter",
    ).VoipInitEventEmitter),
      (l.initWAWebVoip = K),
      (l.canRetryWAWebVoipInitAfterFailure = Q),
      (l.retryWAWebVoipInitAfterFailure = X));
  },
  98,
);
