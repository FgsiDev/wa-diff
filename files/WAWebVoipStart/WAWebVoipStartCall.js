__d(
  "WAWebVoipStartCall",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAComms",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBuildConstants",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebEnsureVoipInited",
    "WAWebEnvironment",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebNoop",
    "WAWebNotificationIconUtils",
    "WAWebOpenCoexCallingFirstTimeModalUtils",
    "WAWebPageVisibilityRecency",
    "WAWebPipController",
    "WAWebSendMsgDatabaseJob",
    "WAWebSendTcTokenChatAction",
    "WAWebShouldShowCallButtons",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActionWriteCallLogEventUpdateJoinable",
    "WAWebVoipActivityTracker",
    "WAWebVoipBootInitDecision",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOngoingCallJoinDevices",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipOutgoingCallPreSetup",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipOutgoingSetupLatencyStore",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
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
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re = ne || (ne = o("react")),
      oe = "#aa6627",
      ae = 3e4,
      ie = 6e4,
      le = (e = n("cr:17219")) != null ? e : {},
      se = le.getWindowsBridge,
      ue = 5;
    function ce(e, t) {
      return e != null && t != null ? t - e : null;
    }
    function de(e, t) {
      var n = t.coexModalMs,
        r = t.devicePermissionsMs,
        a = t.intentTs,
        i = t.successTs;
      if (!(a == null || i == null)) {
        var l = i - a - (r != null ? r : 0) - (n != null ? n : 0);
        l < 0 ||
          o("WAWebVoipOutgoingSetupLatencyStore").setOutgoingCallSetupActiveMs(
            Math.round(l),
            e,
          );
      }
    }
    function me(e, t) {
      return e().then(
        function () {},
        function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: bundle preload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs(t);
        },
      );
    }
    function pe() {
      return me(
        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
        "voip-preload-group-call-bundle",
      );
    }
    function _e(e) {
      r("WAWebEnvironment").isWindows ||
        (r("WAWebCallCollection").setPendingOutgoingCall({
          abortController: e.abortController,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = he(e);
          return t.status === "started" ? t.readiness : t;
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      if (r("WAWebCallCollection").pendingOutgoingCall != null)
        return (
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: outgoing call already pending; ignoring duplicate start",
                ])),
            )
            .color(oe),
          { notReady: { reason: "duplicate_start" }, status: "not_ready" }
        );
      e.isJoin || o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock();
      var t = new AbortController();
      return (
        _e({
          abortController: t,
          isGroup: e.isGroup,
          isJoin: e.isJoin,
          isVideo: e.isVideo,
        }),
        { abortController: t, readiness: ye(t), status: "started" }
      );
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebEnsureVoipInited").ensureVoipInitialized(
            "call",
            e.signal,
          );
          t.catch(r("WAWebNoop"));
          try {
            yield r("WAPromiseRaceAbort")(t, e.signal);
          } catch (t) {
            if (e.signal.aborted)
              return (
                o("WALogger")
                  .LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call cancelled while waiting for VoIP init",
                      ])),
                  )
                  .color(oe),
                { notReady: { reason: "user_cancelled" }, status: "not_ready" }
              );
            if (
              (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
              t instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError)
            )
              return (
                o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: outgoing call stopped because VoIP init requires reload",
                      ])),
                  )
                  .color(oe),
                {
                  notReady: {
                    reason: "reload_required",
                    reloadReason: t.reason,
                  },
                  status: "not_ready",
                }
              );
            var n = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: outgoing call: VoIP init failed, aborting",
                    ])),
                )
                .catching(n)
                .sendLogs("voip-outgoing-ensure-init-failed"),
              o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(),
              {
                notReady: { initErrorName: n.name, reason: "init_failed" },
                status: "not_ready",
              }
            );
          }
          return (
            o("WAWebVoipGatingUtils").isWebCallingUiEnabled() &&
              r("JSResourceForInteraction")("WAWebVoipSctpPrewarm")
                .__setRef("WAWebVoipStartCall")
                .load()
                .then(
                  function (e) {
                    e();
                  },
                  function (e) {
                    o("WALogger")
                      .WARN(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: outgoing-intent SCTP prewarm module failed to load",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  },
                ),
            { abortController: e, status: "ready" }
          );
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e, t, n, r, o, a) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l, s;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              a === void 0 && (a = null),
              !(yield o("WAWebVoipOutgoingCallConsent").hasOutgoingCallConsent(
                i.entryTrust,
                e,
                t,
              )))
            )
              return (o("WAWebVoipCallIdProvider").resetPendingCallId(), !1);
            var u =
                (l =
                  (s = globalThis.document) == null
                    ? void 0
                    : s.visibilityState) != null
                  ? l
                  : "unknown",
              c = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
                bool: {
                  boot_deferred: o(
                    "WAWebVoipBootInitDecision",
                  ).isDeferredVoipBootInitEnabled(),
                  is_video: t,
                  is_hidden_at_start: u !== "visible",
                  socket_connected_at_start: o("WAComms").isSocketConnected(),
                  voip_init_in_flight_at_start: o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight(),
                  voip_inited_at_start: o(
                    "WAWebVoipInitEventEmitter",
                  ).VoipInitEventEmitter.getIsVoipInited(),
                  was_hidden_within_30s: o(
                    "WAWebPageVisibilityRecency",
                  ).wasDocumentHiddenWithinMs(ae),
                },
                int: {
                  call_from_ui: n != null ? n : 0,
                  ms_since_visibility_visible: Math.round(
                    o("WAWebPageVisibilityRecency").getMsSinceDocumentVisible(),
                  ),
                  last_hidden_duration_ms: Math.round(
                    o("WAWebPageVisibilityRecency").getLastHiddenDurationMs(),
                  ),
                  ms_since_last_socket_rx: Math.round(
                    o("WAComms").getMsSinceLastInboundRx(),
                  ),
                },
                string: { visibility_state_at_start: u },
              });
            try {
              var d = yield Re(c, e, t, n, r, a);
              return d;
            } catch (e) {
              throw (
                c.isActive() &&
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    c,
                    "unexpected_error",
                  ),
                e
              );
            }
          },
        )),
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
          e,
          o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
            .SOCKET_HEALTH_CHECK_START,
        );
        var t = !1;
        ((!o("WAComms").isSocketConnected() ||
          o("WAComms").getMsSinceLastInboundRx() > ie) &&
          (o("WAComms").forceAbortSocketConnection(),
          o("WAComms").forceResetSocketLoop(),
          (t = !0)),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
            bool: { socket_reconnect_triggered: t },
          }),
          o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
            e,
            o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
              .SOCKET_HEALTH_CHECK_END,
          ));
      }
    }
    function Re(e, t, n, r, o, a) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u = o("WAWebVoipOutgoingCallPreSetup").nowMs(),
              c =
                s != null
                  ? s
                  : o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            if (
              (o("WAWebVoipCallIdProvider").resetPendingCallId(),
              o("WAWebVoipCallFromUiStore").setCallFromUi(i),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            )
              return (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                  e,
                  "call_blocked",
                ),
                !1
              );
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking(),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .VOIP_READY_START,
              ));
            var d = yield Ee(e, t, a);
            if (d == null) return !1;
            var m = d.devicePermissionsMs,
              p = d.peerPnWid,
              _ = d.peerWid,
              f = d.signal,
              g = o("WAWebVoipOutgoingCallPreSetup").nowMs();
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .COEX_FIRST_TIME_MODAL_START,
            );
            var h = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingSMBFirstTimeModal(),
              y = yield o(
                "WAWebOpenCoexCallingFirstTimeModalUtils",
              ).maybeShowCoexCallingConsumerFirstTimeModal(t);
            ((h || y) &&
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(
                e,
                { bool: { coex_first_time_modal_shown: !0 } },
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .COEX_FIRST_TIME_MODAL_END,
              ));
            var R = ce(g, o("WAWebVoipOutgoingCallPreSetup").nowMs());
            (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
              e,
              o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                .SETUP_START,
            ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_STACK_INTERFACE_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_FANOUT_LIST_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_GET_TC_TOKEN_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_SEND_TC_TOKEN_START,
              ),
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .SETUP_UI_BUNDLE_PRELOAD_START,
              ),
              a &&
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_VIDEO_BUNDLE_PRELOAD_START,
                ));
            var L = (te || (te = n("Promise"))).all([
              o("WAWebVoipStackInterface")
                .getVoipStackInterface()
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_STACK_INTERFACE_END,
                    ),
                    t
                  );
                }),
              o("WAWebSendMsgDatabaseJob")
                .getFanOutListJob([_])
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_FANOUT_LIST_END,
                    ),
                    t
                  );
                }),
              o("WAWebVoipPeerTcToken")
                .fetchPeerTcToken(t)
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_GET_TC_TOKEN_END,
                    ),
                    t
                  );
                }),
              o("WAWebSendTcTokenChatAction")
                .sendTcToken(_)
                .then(function (t) {
                  return (
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                      e,
                      o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                        .SETUP_SEND_TC_TOKEN_END,
                    ),
                    t
                  );
                }),
              me(
                o("WAWebVoipUiLoadable").requireBundle,
                "voip-start-call-preload-ui",
              ).then(function (t) {
                return (
                  o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                    e,
                    o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                      .SETUP_UI_BUNDLE_PRELOAD_END,
                  ),
                  t
                );
              }),
              a
                ? me(
                    o("WAWebVoipUiVideoCallLoadable").requireBundle,
                    "voip-start-call-preload-video",
                  ).then(function (t) {
                    return (
                      o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                        e,
                        o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                          .SETUP_VIDEO_BUNDLE_PRELOAD_END,
                      ),
                      t
                    );
                  })
                : void 0,
            ]);
            L.catch(r("WAWebNoop"));
            try {
              var E = yield r("WAPromiseRaceAbort")(L, f),
                k = E[0],
                I = E[1],
                T = E[2];
              if (
                (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .SETUP_END,
                ),
                k == null)
              )
                return (
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: voipStackInterface is null",
                        ])),
                    )
                    .sendLogs(
                      "voip: startWAWebVoipCall: voipStackInterface is null",
                    ),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                    e,
                    "voip_stack_interface_null",
                  ),
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  !1
                );
              var D = Xe(I, "callStart");
              if (
                (o("WALogger")
                  .LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipCall: Placing LID call",
                      ])),
                  )
                  .color(oe),
                o("WAWebVoipGatingUtils").isWinHybridPlusEnabled())
              ) {
                var x;
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      'voip: [HYBRID+] placing 1:1 call via "',
                      '" stack (expect "web" = WASM)',
                    ])),
                  (x = k == null ? void 0 : k.type) != null ? x : "null",
                );
              }
              (o("WAWebVoipActivityTracker").trackActivity(
                a
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_VIDEO_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_AUDIO_CALL,
              ),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .USER_INITIATE_OUTGOING_CALL,
                ),
                o("WAWebCoreActionsODS").logCallAttempt(),
                a
                  ? o("WAWebCoreActionsODS").logCallOutgoingVideo()
                  : o("WAWebCoreActionsODS").logCallOutgoingAudio(),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_START,
                ),
                yield k.startCall(
                  _,
                  D,
                  c,
                  a,
                  (p != null ? p : _).toString({ legacy: !0 }),
                  !1,
                  T,
                  i,
                  l,
                  null,
                ),
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                  e,
                  o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                    .START_CALL_END,
                ),
                de(c, {
                  coexModalMs: R,
                  devicePermissionsMs: m,
                  intentTs: u,
                  successTs: o("WAWebVoipOutgoingCallPreSetup").nowMs(),
                }),
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e));
            } catch (t) {
              if (f.aborted)
                return (
                  o("WALogger")
                    .LOG(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipCall: cancelled before signaling",
                        ])),
                    )
                    .color(oe),
                  o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
                    e,
                    "aborted_before_signaling",
                  ),
                  !1
                );
              throw (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
                  e,
                  "setup_or_signaling_error",
                ),
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                t
              );
            }
            return (yield Ke(a), !0);
          },
        )),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t, n) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = he({ isGroup: !1, isJoin: !1, isVideo: n });
            if (r.status === "not_ready")
              return (
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                  e,
                  r.notReady,
                ),
                null
              );
            var a = r.abortController,
              i = r.readiness,
              l = a.signal,
              s = Ie() ? Te(e, t, n, l) : null;
            try {
              var u = yield s == null
                ? De(e, i)
                : $e(e, t, { abortController: a, preSetup: s, readiness: i });
              if (!u) return null;
              o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(
                e,
                o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint
                  .VOIP_READY_END,
              );
              var c = o("WAWebVoipOutgoingCallPreSetup").nowMs();
              Se(e);
              var d = yield s != null
                ? s
                : o("WAWebVoipOutgoingCallPreSetup").runOutgoingCallPreSetup(
                    e,
                    t,
                    n,
                    l,
                  );
              return o(
                "WAWebVoipOutgoingCallPreSetup",
              ).finishOutgoingCallPreSetup(e, t, d, {
                signal: l,
                voipReadyTs: c,
              });
            } catch (t) {
              throw (s != null && Me(e, a), t);
            }
          },
        )),
        ke.apply(this, arguments)
      );
    }
    function Ie() {
      return (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInited() &&
        o(
          "WAWebVoipBootInitDecision",
        ).isDeferredVoipBootEarlyModulePrefetchEnabled()
      );
    }
    function Te(e, t, n, a) {
      (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, {
        bool: { pre_setup_overlapped_voip_init: !0 },
      }),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] intent pre_setup_during_init",
                ])),
            );
          },
        ));
      var i = o("WAWebVoipOutgoingCallPreSetup").runOutgoingCallPreSetup(
        e,
        t,
        n,
        a,
      );
      return (i.catch(r("WAWebNoop")), i);
    }
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield t;
          return n.status === "not_ready"
            ? (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                e,
                n.notReady,
              ),
              !1)
            : !0;
        })),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t, n) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = r.abortController,
              i = r.preSetup,
              l = r.readiness,
              s = a.signal,
              u = yield (te || (te = n("Promise"))).race([l, Ne(i, s)]);
            e: {
              var c = u;
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "ready"
              )
                return !0;
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "not_ready" &&
                "notReady" in c
              ) {
                var d = c.notReady;
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplNotReady(
                  e,
                  d,
                );
                break e;
              }
              if (
                ((typeof c == "object" && c !== null) ||
                  typeof c == "function") &&
                c.status === "stopped" &&
                "stop" in c
              ) {
                var m = c.stop;
                o("WAWebVoipOutgoingCallPreSetup").stopOutgoingCallBeforeSetup(
                  e,
                  t,
                  m,
                  s,
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  c,
              );
            }
            return (a.abort(), !1);
          },
        )),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t) {
      return e.then(
        function (e) {
          return e.status === "stopped" && !t.aborted
            ? e
            : new (te || (te = n("Promise")))(r("WAWebNoop"));
        },
        function (e) {
          if (t.aborted) return new (te || (te = n("Promise")))(r("WAWebNoop"));
          throw e;
        },
      );
    }
    function Me(e, t) {
      var n;
      if (t.signal.aborted) {
        o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(
          e,
          "aborted_before_signaling",
        );
        return;
      }
      (o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(
        e,
        "pre_setup_error",
      ),
        ((n = r("WAWebCallCollection").pendingOutgoingCall) == null
          ? void 0
          : n.abortController) === t &&
          o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
        t.abort());
    }
    function we(e, t, n, r, o, a) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (l === void 0 && (l = 0),
              s === void 0 && (s = 0),
              o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startWAWebVoipCall: Placing Group call",
                    ])),
                )
                .color(oe));
            var u = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
            (o("WAWebVoipCallFromUiStore").setCallFromUi(l),
              o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking(),
              o("WAWebVoipActivityTracker").trackActivity(
                t
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_VIDEO_GROUP_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .START_OUTGOING_AUDIO_GROUP_CALL,
              ),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_INITIATE_OUTGOING_CALL,
              ));
            var c = yield fe({ isGroup: !0, isJoin: !1, isVideo: t });
            if (c.status !== "not_ready") {
              var d = c.abortController.signal,
                m = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t, null, d);
              if (!m) {
                if (d.aborted) return;
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                return;
              }
              var p = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                _ = p
                  ? o("WAWebContactCollection").ContactCollection.get(p)
                  : null,
                f = _ ? o("WAWebFrontendContactGetters").getUsername(_) : null,
                g = (te || (te = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ye(e),
                  me(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-start-group-call-preload-ui",
                  ),
                  t
                    ? me(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video",
                      )
                    : void 0,
                  t
                    ? me(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-start-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              g.catch(r("WAWebNoop"));
              try {
                var h,
                  y = yield r("WAPromiseRaceAbort")(g, d),
                  C = y[0],
                  b = y[1],
                  v = b.gcDeviceJidsCsv,
                  S = b.gcUserJids,
                  I = b.gcUserPnJids;
                yield (te || (te = n("Promise"))).all(
                  S.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var T =
                  (h = i == null ? void 0 : i.toString({ legacy: !0 })) != null
                    ? h
                    : "";
                o("WALogger")
                  .LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startWAWebVoipGroupCall: gid=",
                        " users=",
                        " name=",
                        "",
                      ])),
                    T,
                    S,
                    a,
                  )
                  .color(oe);
                var D = i
                  ? yield o(
                      "WAWebNotificationIconUtils",
                    ).getNotificationIconByWid(
                      i,
                      new AbortController().signal,
                      o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                    )
                  : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
                if (d.aborted) {
                  o("WALogger")
                    .LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(oe);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallAttempt(),
                  t
                    ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo()
                    : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                  yield C == null
                    ? void 0
                    : C.startGroupCall(
                        I.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        S.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        v,
                        u,
                        t,
                        T,
                        !1,
                        "",
                        a,
                        D,
                        l,
                        s,
                        o("WAWebUsernameTypes").serializeMaybeUsername(f),
                      ));
              } catch (e) {
                if (d.aborted) {
                  o("WALogger")
                    .LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCall: cancelled before signaling",
                        ])),
                    )
                    .color(oe);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              yield Ke(t);
            }
          },
        )),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e, t, n, r) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a, i;
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var l = Ve(
              ((a =
                (i = e.groupMetadata) == null
                  ? void 0
                  : i.participants.toArray()) != null
                ? a
                : []
              ).map(function (e) {
                return e.id;
              }),
              "startWAWebVoipGroupCallFromChat",
            );
            if (l == null) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            yield we(l, t, e.name || e.formattedTitle, e.id, n, r);
          },
        )),
        Oe.apply(this, arguments)
      );
    }
    function Be(e, t, n, r, o) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (
              (n === void 0 && (n = 0),
              a === void 0 && (a = 0),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var l = e.filter(function (e) {
              return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            });
            if (l.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (l.length === 1) {
              yield be(l[0].id, t, n, a, null, i);
              return;
            }
            var s = r("WAWebFbtIntlList")(
              l.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
            yield we(
              l.map(function (e) {
                return e.id;
              }),
              t,
              s.toString(),
              void 0,
              n,
              a,
            );
          },
        )),
        We.apply(this, arguments)
      );
    }
    function qe(e, t, n, r, o) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (
              (n === void 0 && (n = 0),
              r === void 0 && (r = 0),
              yield o(
                "WAWebVoipCallBlockedModals",
              ).showCallBlockedModalIfNeeded())
            ) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (e.length === 0) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            var i = Ve(e, "startWAWebVoipGroupCallFromWids");
            if (i == null) {
              o("WAWebVoipCallIdProvider").resetPendingCallId();
              return;
            }
            if (i.length === 1) {
              yield be(i[0], t, n, r, null, a);
              return;
            }
            yield we(i, t, "", void 0, n, r);
          },
        )),
        Ue.apply(this, arguments)
      );
    }
    function Ve(e, t) {
      var n = e.filter(function (e) {
        return o("WAWebShouldShowCallButtons").canBeCallParticipant(e);
      });
      n.length < e.length &&
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                ": dropped ",
                " non-callable participant(s) of ",
                "",
              ])),
            t,
            e.length - n.length,
            e.length,
          )
          .sendLogs("voip-group-call-dropped-non-callable");
      var r = n.filter(function (e) {
        return !o("WAWebUserPrefsMeUser").isMeAccount(e);
      });
      return r.length === 0
        ? (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: ",
                  ": nothing callable in a list of ",
                  "",
                ])),
              t,
              e.length,
            )
            .sendLogs("voip-group-call-no-callable-participants"),
          o("WAWebToastManager").ToastManager.open(
            re.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Couldn't start call. Select someone else to call.",
              ),
            }),
          ),
          null)
        : r;
    }
    function He(e, t) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (t === void 0 &&
            (t = o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .SECOND_NOTIFICATION),
            o("WALogger")
              .LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: callId=",
                    ", lobbyEntryPoint=",
                    "",
                  ])),
                e,
                t,
              )
              .color(oe),
            o("WAWebVoipActivityTracker").startActivityTracking(),
            o("WAWebVoipActivityTracker").startUiActivityTracking(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .USER_JOIN_ONGOING_CALL,
            ));
          var r = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(e);
          if (r == null) {
            (o("WALogger")
              .LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: no call for ",
                    "",
                  ])),
                e,
              )
              .color(oe),
              o("WAWebToastManager").ToastManager.open(
                re.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Call not found."),
                }),
              ),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          var a = r.to;
          if (a == null) {
            (o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingCallByCallId: No chat found for call ID ",
                    "",
                  ])),
                e,
              )
              .color(oe),
              o("WAWebToastManager").ToastManager.open(
                re.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Could not join call."),
                }),
              ),
              o("WAWebVoipActivityTracker").clearAllActivityTracking());
            return;
          }
          var i = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              a,
              "voipNotification",
            ),
            l = i.chat,
            u = (n = r.isVideoCall) != null ? n : !1;
          yield ze({
            callId: e,
            chat: l,
            isDeviceSwitch: !0,
            isVideo: u,
            lobbyEntryPoint: t,
          });
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.callId,
            i = e.chat,
            l = e.isDeviceSwitch,
            u = l === void 0 ? !1 : l,
            c = e.isVideo,
            d = e.joinAndAccept,
            m = d === void 0 ? !1 : d,
            p = e.lobbyEntryPoint,
            _ = p === void 0 ? 0 : p;
          if (
            (o("WAWebVoipCallAudioUnlock").prepareCallAudioElement(),
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded()))
          ) {
            (o("WAWebVoipActivityTracker").startActivityTracking(),
              o("WAWebVoipActivityTracker").startUiActivityTracking());
            var f = yield o(
              "WAWebVoipOngoingCallJoinDevices",
            ).checkOngoingCallJoinDevices(a, c, m);
            if (f == null) {
              o("WAWebVoipActivityTracker").clearAllActivityTracking();
              return;
            }
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            ) {
              var g,
                h =
                  se == null ||
                  (g = se(
                    r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall,
                  )) == null
                    ? void 0
                    : g.voip;
              if (h == null) {
                (o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null",
                      ])),
                  )
                  .color(oe),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
              if (
                !("joinOngoingCall" in h) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2511")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2514")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2515")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2516")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2557")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2558")) ||
                (o("WAWebBuildConstants").WINDOWS_BUILD != null &&
                  o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559"))
              ) {
                (o("WALogger")
                  .LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: joinOngoingWAWebVoipGroupCallPN: unsupported",
                      ])),
                  )
                  .color(oe),
                  o("WAWebVoipActivityTracker").clearAllActivityTracking());
                return;
              }
            }
            var y = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.getByCallId(a);
            if (y == null) {
              (o("WALogger")
                .LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no call ",
                      "",
                    ])),
                  a,
                )
                .color(oe),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            } else if (y.callCreator == null) {
              (o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinOngoingWAWebVoipGroupCallPN: no creator ",
                      "",
                    ])),
                  a,
                )
                .color(oe),
                yield o(
                  "WAWebVoipActionWriteCallLogEventUpdateJoinable",
                ).cleanupJoinableCallLog(a),
                o("WAWebToastManager").ToastManager.open(
                  re.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Could not join call."),
                  }),
                ),
                o("WAWebVoipActivityTracker").clearAllActivityTracking());
              return;
            }
            (o("WALogger")
              .LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: joinOngoingWAWebVoipGroupCallPN: joining",
                  ])),
              )
              .color(oe),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .USER_JOIN_ONGOING_CALL,
              ));
            var C = (t = y.callParticipants) != null ? t : [],
              b = C.map(function (e) {
                var t = o("WAWebLidMigrationUtils").toPn(e.participant);
                return (
                  t == null &&
                    o("WALogger")
                      .ERROR(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null",
                          ])),
                      )
                      .sendLogs(
                        "voip: StartPNCall: group join participant toPn failed",
                      ),
                  t
                );
              }).filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
              v = yield fe({ isGroup: !0, isJoin: !0, isVideo: c });
            if (v.status !== "not_ready") {
              var S = v.abortController.signal,
                R = (te || (te = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  Ye(b, !0),
                  me(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-join-group-call-preload-ui",
                  ),
                  c
                    ? me(
                        o("WAWebVoipUiVideoCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video",
                      )
                    : void 0,
                  c
                    ? me(
                        o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                        "voip-join-group-call-preload-video-group",
                      )
                    : void 0,
                ]);
              R.catch(r("WAWebNoop"));
              try {
                var L,
                  E = yield r("WAPromiseRaceAbort")(R, S),
                  k = E[0],
                  I = E[1],
                  T = I.gcDeviceJidsCsv,
                  D = I.gcUserJids,
                  B = I.gcUserPnJids;
                yield (te || (te = n("Promise"))).all(
                  D.map(function (e) {
                    return o("WAWebSendTcTokenChatAction").sendTcToken(e);
                  }),
                );
                var W = i.id.isGroup() ? i.id.toString({ legacy: !0 }) : "";
                if (
                  (o("WALogger")
                    .LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: startWAWebVoipGroupCallPN: groupJid: ",
                          "",
                        ])),
                      W,
                    )
                    .color(oe),
                  S.aborted)
                ) {
                  o("WALogger")
                    .LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(oe);
                  return;
                }
                (o("WAWebCoreActionsODS").logCallGroupJoin(),
                  yield k == null
                    ? void 0
                    : k.joinOngoingCall(
                        a,
                        r("nullthrows")(y.callCreator).toString({
                          legacy: !0,
                          formatIncludeDevice: !0,
                        }),
                        "",
                        B.map(function (e) {
                          var t;
                          return (t =
                            e == null ? void 0 : e.toString({ legacy: !0 })) !=
                            null
                            ? t
                            : "";
                        }),
                        D.map(function (e) {
                          return e.toString({ legacy: !0 });
                        }),
                        T,
                        c,
                        W,
                        0,
                        !0,
                        (L = y.callLinkToken) != null ? L : "",
                        !1,
                        "",
                        m,
                        i.name || i.formattedTitle,
                        _,
                        u,
                      ));
              } catch (e) {
                if (S.aborted) {
                  o("WALogger")
                    .LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling",
                        ])),
                    )
                    .color(oe);
                  return;
                }
                throw (
                  o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
                  e
                );
              }
              f.afterJoin();
            }
          }
        })),
        je.apply(this, arguments)
      );
    }
    function Ke(e) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if ("permissions" in navigator) {
              if (e) {
                var t = yield navigator.permissions.query({ name: "camera" }),
                  n = t.state === "granted";
                n ||
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: JS doesn't have camera permissions for a video call",
                      ])),
                  );
              }
              var r = yield navigator.permissions.query({ name: "microphone" }),
                a = r.state === "granted";
              a ||
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: JS doesn't have microphone permissions for a call",
                    ])),
                );
            }
          } catch (e) {
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: failed to check device permissions: ",
                  "",
                ])),
              e,
            );
          }
        })),
        Qe.apply(this, arguments)
      );
    }
    function Xe(e, t) {
      return e.length > ue
        ? (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip:",
                ": too many devices, removing companions",
              ])),
            t,
          ),
          e
            .filter(function (e) {
              return !e.isCompanion();
            })
            .map(function (e) {
              return e.toString({ legacy: !0, formatIncludeDevice: !0 });
            }))
        : e.map(function (e) {
            return e.toString({ legacy: !0, formatIncludeDevice: !0 });
          });
    }
    function Ye(e, t) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            a = e.map(function (e) {
              return o("WAWebLidMigrationUtils").toLid(e);
            }),
            i = e.filter(function (e, t) {
              return a[t] == null;
            });
          if (i.length > 0) {
            (o("WALogger")
              .LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getVoipParticipantJids: ",
                    " participants unresolved, attempting usync",
                  ])),
                i.length,
              )
              .color(oe),
              yield (te || (te = n("Promise"))).all(
                i.map(function (e) {
                  return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [e],
                    context: "voip",
                    phash: null,
                  });
                }),
              ),
              (a = e.map(function (e) {
                return o("WAWebLidMigrationUtils").toLid(e);
              })));
            var l = e.filter(function (e, t) {
              return a[t] == null;
            });
            l.length > 0
              ? o("WALogger")
                  .ERROR(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: ",
                        " participants still unresolved after usync, stripping",
                      ])),
                    l.length,
                  )
                  .sendLogs(
                    "voip: getVoipParticipantJids: participants stripped after usync",
                  )
              : o("WALogger")
                  .LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getVoipParticipantJids: usync resolved all participants successfully",
                      ])),
                  )
                  .color(oe);
          }
          var s = [].concat(
              t ? [r] : [],
              a.filter(function (e) {
                return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
            ),
            u = s.map(function (e) {
              return o("WAWebLidMigrationUtils").toPn(e);
            });
          yield (te || (te = n("Promise"))).all(
            s.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              });
            }),
          );
          var c = yield te.all(
              s.map(function (e) {
                return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
              }),
            ),
            d = c.map(function (e) {
              var t = Xe(e, "callStart"),
                n = t.join(",");
              return n;
            });
          return { gcUserJids: s, gcUserPnJids: u, gcDeviceJidsCsv: d };
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(yield o(
              "WAWebVoipCallBlockedModals",
            ).showCallBlockedModalIfNeeded())
          ) {
            o("WALogger").LOG(
              G ||
                (G = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: inviteToCall called for chat: ",
                  "",
                ])),
              e.toString(),
            );
            try {
              var t,
                a = yield rt(e);
              if (a == null) {
                o("WALogger")
                  .ERROR(
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall: LID resolution failed for participant, aborting invite",
                      ])),
                  )
                  .sendLogs("voip: inviteToCall: LID expected but missing");
                return;
              }
              var i = a.lidJid,
                l = a.pnJid,
                s = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
                u = yield (te || (te = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [s],
                    context: "voip",
                    phash: null,
                  }),
                  me(
                    o("WAWebVoipUiLoadable").requireBundle,
                    "voip-invite-to-call-preload-ui",
                  ),
                  me(
                    o("WAWebVoipUiVideoGroupCallLoadable").requireBundle,
                    "voip-invite-to-call-preload-video-group",
                  ),
                ]),
                c = u[0];
              if (!l) {
                var d, m;
                l =
                  (d =
                    (m = o("WAWebLidMigrationUtils").toPn(e)) == null
                      ? void 0
                      : m.toString()) != null
                    ? d
                    : "";
              }
              var p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([s]),
                _ = Xe(p, "inviteToCall");
              (yield c == null ? void 0 : c.inviteToCall(l, i, _),
                o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: inviteToCall completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: inviteToCall failed for ",
                        "",
                      ])),
                    e.toString(),
                  )
                  .catching(r("getErrorSafe")(t)),
                t
              );
            }
          }
        })),
        et.apply(this, arguments)
      );
    }
    function tt(e) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: waveAtParticipant called for chat: ",
                "",
              ])),
            e.toString(),
          );
          try {
            var t,
              a = yield rt(e);
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: LID resolution failed for participant, aborting wave",
                      ])),
                  )
                  .sendLogs(
                    "voip: waveAtParticipant: LID expected but missing",
                  ),
                !1
              );
            var i = a.lidJid,
              l = a.pnJid,
              s = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e,
              u = yield (te || (te = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [s],
                  context: "voip",
                  phash: null,
                }),
              ]),
              c = u[0];
            if (c == null)
              return (
                o("WALogger")
                  .ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: voipStackInterface is null, aborting wave",
                      ])),
                  )
                  .sendLogs(
                    "voip: waveAtParticipant: voipStackInterface is null",
                  ),
                !1
              );
            if (!l) {
              var d, m;
              l =
                (d =
                  (m = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : m.toString()) != null
                  ? d
                  : "";
            }
            var p = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([s]),
              _ = Xe(p, "waveAtParticipant");
            return _.length === 0
              ? (o("WALogger")
                  .ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: waveAtParticipant: no devices resolved for participant, aborting wave",
                      ])),
                  )
                  .sendLogs("voip: waveAtParticipant: empty device list"),
                !1)
              : (yield c.sendWave(l, i, _),
                o("WALogger").LOG(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waveAtParticipant completed successfully for ",
                      "",
                    ])),
                  e.toString(),
                ),
                !0);
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waveAtParticipant failed for ",
                      "",
                    ])),
                  e.toString(),
                )
                .catching(r("getErrorSafe")(t)),
              t
            );
          }
        })),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = "",
            r = "";
          if (e.isLid()) {
            var a, i, l, s;
            ((r =
              (a =
                (i = o("WAWebLidMigrationUtils").toLid(e)) == null
                  ? void 0
                  : i.toString()) != null
                ? a
                : t),
              (n =
                (l =
                  (s = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : s.toString()) != null
                  ? l
                  : ""));
          } else {
            var u, c, d, m;
            if (
              ((n =
                (u =
                  (c = o("WAWebLidMigrationUtils").toPn(e)) == null
                    ? void 0
                    : c.toString()) != null
                  ? u
                  : t),
              (r =
                (d =
                  (m = o("WAWebLidMigrationUtils").toLid(e)) == null
                    ? void 0
                    : m.toString()) != null
                  ? d
                  : ""),
              !r)
            ) {
              var p, _;
              (yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e],
                context: "voip",
                phash: null,
              }),
                (r =
                  (p =
                    (_ = o("WAWebLidMigrationUtils").toLid(e)) == null
                      ? void 0
                      : _.toString()) != null
                    ? p
                    : ""));
            }
          }
          return r ? { lidJid: r, pnJid: n } : null;
        })),
        ot.apply(this, arguments)
      );
    }
    ((l.preloadGroupCallBundle = pe),
      (l.startWAWebVoipCall = be),
      (l.startWAWebVoipGroupCallFromChat = Fe),
      (l.startWAWebVoipGroupCallFromContacts = Be),
      (l.startWAWebVoipGroupCallFromWids = qe),
      (l.joinOngoingCallByCallId = He),
      (l.joinOngoingWAWebVoipGroupCallPN = ze),
      (l.inviteToCall = Ze),
      (l.waveAtParticipant = tt));
  },
  226,
);
