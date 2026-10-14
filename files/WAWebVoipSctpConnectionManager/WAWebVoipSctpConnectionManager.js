__d(
  "WAWebVoipSctpConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebVoipDtlsCertAcquire",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectQpl",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpBufferDrain",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpConnectionStats",
    "WAWebVoipSctpConnectionTeardown",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpDiagnostics",
    "WAWebVoipSctpFallbackFamilyOutcome",
    "WAWebVoipSctpInboundMessageHandler",
    "WAWebVoipSctpOdsPortLogging",
    "WAWebVoipSctpSendData",
    "WAWebVoipSctpStatsInstrumentation",
    "WAWebVoipSctpWarmStandby",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
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
      re,
      oe,
      ae,
      ie,
      le,
      se = 1e4,
      ue = 1e4;
    function ce() {
      return 2 * se;
    }
    var de = !1;
    function me() {
      o("WAWebVoipSctpWarmStandby").cleanupWebTransportSctpWarmStandby(ke);
    }
    function pe() {
      o(
        "WAWebVoipSctpWarmStandby",
      ).resetWebTransportSctpWarmStandbyAtCallBoundary(ke);
    }
    function _e(e) {
      return o(
        "WAWebVoipSctpWarmStandby",
      ).activateWebTransportSctpWarmStandbyForRelayList(e, ke);
    }
    var fe = 0,
      ge = 0,
      he = !1;
    function ye() {
      he = !0;
    }
    var Ce = new Set(),
      be = new Set();
    function ve(e) {
      (o("WAWebCoreActionsODS").logCallDataChannelRelayError(),
        e === "no_first_response_timeout"
          ? o(
              "WAWebCoreActionsODS",
            ).logCallDataChannelRelayErrorNoFirstResponseTimeout()
          : e === "remote_close"
            ? o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRemoteClose()
            : e === "rx_stall_timeout"
              ? o(
                  "WAWebCoreActionsODS",
                ).logCallDataChannelRelayErrorRxStallTimeout()
              : o("WAWebCoreActionsODS").logCallDataChannelRelayErrorOnError());
    }
    function Se(e) {
      Ce.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_succeeded",
        );
    }
    function Re(e) {
      Ce.delete(e) &&
        o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
          "reconnect_exhausted",
        );
    }
    function Le() {
      var e = [];
      for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
        var n = t[0],
          r = t[1];
        r.peerConnection != null &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
          e.push({ connectionId: n, peerConnection: r.peerConnection });
      }
      return e;
    }
    function Ee(t, n, r, a) {
      var i,
        l,
        c,
        d = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
      if (d == null || !d.isActive()) return !1;
      var m =
          (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(r)) !=
          null
            ? i
            : n.relayConnectionInfo,
        p = (l = m == null ? void 0 : m.ip) != null ? l : "0.0.0.0",
        _ = (c = m == null ? void 0 : m.originalPort) != null ? c : 0,
        f = a != null ? " (" + a + ")" : "";
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] Transferring channel for ",
            "",
            "",
          ])),
        r,
        f,
      );
      var g = d.transferChannel({
        channel: t,
        connectionId: r,
        ip: p,
        port: _,
      });
      return (
        g
          ? ((n.channelTransferred = !0),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Channel ",
                  " transferred to pthread",
                  "",
                ])),
              r,
              f,
            ))
          : ((n.channelTransferred = !1),
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Transfer failed for ",
                  "",
                  ", using main-thread handlers",
                ])),
              r,
              f,
            )),
        g
      );
    }
    function ke(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t)
        try {
          ot(e);
        } catch (t) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Error cleaning up relay connection ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }
    }
    function Ie(e, t, n, r) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (n === void 0 && (n = !1), r === void 0 && (r = !1));
            var a = "wa-web-call",
              i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            if (
              i &&
              (i.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ||
                i.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)
            ) {
              Ae(e.id);
              return;
            }
            (i &&
              i.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
              nt(e.id),
              yield Je(e, a, t, n, r));
          },
        )),
        Te.apply(this, arguments)
      );
    }
    function De(e, t, n) {
      var a = r("justknobx")._("1929");
      o("WAWebVoipSctpSendData").sendData({
        callbacks: {
          failConnection: rt,
          getIceRestartRxInactivityMs: function () {
            return ue;
          },
          getSctpConnectionTimeoutMs: function () {
            return ce();
          },
          restartIceProcess: ut,
        },
        data_: e,
        ip: t,
        port: a
          ? n
          : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
              .TRUE_WEB_CLIENT_RELAY_PORT,
      });
    }
    function xe(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t == null) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelOpened: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (t.stats.connectionReadyTime = Date.now()),
        (t.isReconnecting = !1),
        Se(e),
        t.isWebTransportWarmStandby !== !0 &&
          (o(
            "WAWebVoipSctpFallbackFamilyOutcome",
          ).recordSctpFallbackFamilyOpened(t.relayIp),
          o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened()),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " state updated to Open (notified from pthread)",
            ])),
          e,
        ),
        o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
          "relay",
          Le,
          o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
        ),
        t.connectionTimeout != null &&
          t.connectionTimeout !== 0 &&
          (window.clearTimeout(t.connectionTimeout),
          (t.connectionTimeout = null)),
        o("WAWebVoipTsLogger").logIceConnectionComplete({
          relayId: t.relayId,
          ip: t.relayIp,
          port: t.relayPort,
        }),
        t.isWebTransportWarmStandby !== !0 &&
          o("WAWebVoipSctpBufferDrain").drainBuffer(e),
        Ae(e));
    }
    function $e(e, t, n, r) {
      var a,
        i = e.id;
      if (
        !(
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        )
      ) {
        if (e.isWebTransportWarmStandby === !0) {
          rt(e, t);
          return;
        }
        var l = o("WAWebVoipSctpConnectionState").currentRelayState.get(i),
          s = e.relayConnectionInfo,
          u = l == null && s != null,
          c = l != null ? l : s,
          d =
            (a = o(
              "WAWebVoipSctpConnectionState",
            ).samePathReconnectAttempts.get(i)) != null
              ? a
              : 0;
        if (
          !de &&
          c != null &&
          d <
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS
        ) {
          var m;
          (u &&
            !Ce.has(i) &&
            (Ce.add(i),
            o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
              "transport_failed",
            )),
            o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(
              i,
              d + 1,
            ));
          var h =
            (m = o("WAWebVoipSctpConnectionManagerConstants")
              .SAME_PATH_RECONNECT_BACKOFF_MS[d]) != null
              ? m
              : 0;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: ",
                " Same-path reconnecting ",
                ", reason=",
                " (attempt ",
                "/",
                ", backoff=",
                "ms)",
              ])),
            r,
            i,
            t,
            d + 1,
            o("WAWebVoipSctpConnectionManagerConstants")
              .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
            h,
          ),
            rt(e, n, !0));
          var y = function (n) {
            if (
              (n != null &&
                o(
                  "WAWebVoipSctpConnectionState",
                ).pendingReconnectTimeouts.delete(n),
              !de)
            ) {
              var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                  i,
                ),
                a = e == null;
              (a
                ? (Ce.has(i) ||
                    (Ce.add(i),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "transport_failed",
                    )),
                  o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                    "reconnect_attempted",
                  ))
                : Ce.delete(i),
                Ie(e != null ? e : c, "same_path_reconnect").catch(
                  function (e) {
                    (a && Re(i),
                      o("WALogger").ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: ",
                            " Reconnect failed for ",
                            ", reason=",
                            ": ",
                            "",
                          ])),
                        r,
                        i,
                        t,
                        e,
                      ));
                  },
                ));
            }
          };
          if (h > 0) {
            var C = window.setTimeout(function () {
              return y(C);
            }, h);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
          } else y(null);
        } else
          (de ||
            (c == null
              ? o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ",
                      " No relay info for ",
                      ", cannot same-path reconnect (attempts=",
                      ")",
                    ])),
                  r,
                  i,
                  d,
                )
              : (u && Re(i),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ",
                      " Max same-path reconnect attempts reached for ",
                      " (attempts=",
                      "/",
                      ")",
                    ])),
                  r,
                  i,
                  d,
                  o("WAWebVoipSctpConnectionManagerConstants")
                    .MAX_SAME_PATH_RECONNECT_ATTEMPTS,
                ))),
            rt(e, t));
      }
    }
    function Pe(e) {
      var t = e.id;
      o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e &&
        $e(
          e,
          "data_channel_error",
          "data_channel_error_reconnecting",
          "[DCThread]",
        );
    }
    function Ne(e) {
      $e(
        e,
        "ice_connection_failed",
        "ice_connection_failed_reconnecting",
        "[SCTP]",
      );
    }
    function Me(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (n == null) {
        o("WALogger").WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] handleDataChannelErrored: connection not found for ",
              "",
            ])),
          e,
        );
        return;
      }
      if (
        (o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Connection ",
              " errored (notified from pthread)",
            ])),
          e,
        ),
        ve(t),
        (t === "no_first_response_timeout" || t === "rx_stall_timeout") &&
          n.peerConnection != null)
      ) {
        (o("WALogger").WARN(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] Collecting getStats snapshot for ",
              ", reason=",
              "",
            ])),
          e,
          t,
        ),
          o("WAWebVoipSctpDiagnostics")
            .logPeerConnectionStatsForError({
              connectionId: e,
              errorReason: t,
              peerConnection: n.peerConnection,
              workerStats: n.stats,
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Failed to collect getStats for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t));
            })
            .finally(function () {
              Pe(n);
            }));
        return;
      }
      Pe(n);
    }
    function we(e) {
      return new (le || (le = n("Promise")))(function (t) {
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
      });
    }
    function Ae(e) {
      var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(
        e,
      );
      t != null &&
        (t(),
        o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
    }
    function Fe() {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((de = !0), fe++, ge++);
          try {
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
              "relay",
            );
            var e = Array.from(
              o("WAWebVoipSctpConnectionState").sctpConnections.keys(),
            );
            (o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Cleaning up ",
                  " connections",
                ])),
              e.length,
            ),
              yield o(
                "WAWebVoipSctpDataChannelThreadManager",
              ).stopDataChannelWorker());
            for (var t of e) ke(t);
            (o("WAWebVoipSctpConnectionState").currentRelayState.clear(),
              o("WAWebVoipTsLogger").cleanup(),
              o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] All connections and relay state cleared",
                  ])),
              ));
          } finally {
            for (var n of o("WAWebVoipSctpConnectionState")
              .pendingReconnectTimeouts)
              window.clearTimeout(n);
            o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
            for (var r of o(
              "WAWebVoipSctpConnectionState",
            ).connectionOpenedResolvers.values())
              r();
            (o(
              "WAWebVoipSctpConnectionState",
            ).connectionOpenedResolvers.clear(),
              o(
                "WAWebVoipSctpConnectionState",
              ).samePathReconnectAttempts.clear(),
              Ce.clear(),
              be.clear(),
              o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(),
              o(
                "WAWebVoipSctpWarmStandby",
              ).resetWebTransportSctpWarmStandbyAtCallBoundary(ke),
              (he = !1),
              (de = !1));
          }
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be(e, t) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = fe;
          (o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Staggered creation: ",
                " connections",
              ])),
            e.length,
          ),
            yield qe(e, 0, n, t));
        })),
        We.apply(this, arguments)
      );
    }
    function qe(e, t, n, r) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (!(t >= e.length) && !(de || fe !== r)) {
              var i = e[t];
              if (i != null) {
                var l = i.isEarlyPacketRelayReconnect,
                  s = i.isWebTransportWarmStandby,
                  u = i.relayConnectionInfo;
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Starting staggered connection ",
                      "/",
                      ": ",
                      "",
                    ])),
                  t + 1,
                  e.length,
                  u.id,
                );
                var c = we(u.id);
                if ((Ie(u, a, l, s), t < e.length - 1)) {
                  var d = new (le || (le = n("Promise")))(function (e) {
                    window.setTimeout(
                      e,
                      o("WAWebVoipSctpConnectionManagerConstants")
                        .PER_CONNECTION_STAGGER_DELAY_MS,
                    );
                  });
                  yield le.race([c, d]);
                }
                yield qe(e, t + 1, r, a);
              }
            }
          },
        )),
        Ue.apply(this, arguments)
      );
    }
    function Ve(e, t, n) {
      !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
        t.hasLoggedEarlyPacketRelayEligible === !0 ||
        ((t.hasLoggedEarlyPacketRelayEligible = !0),
        o("WAWebCoreActionsODS").logCallSctpEarlyPacketRelayEligible(n));
    }
    function He(e, t, n) {
      return (
        !o("WAWebVoipSctpConnectionState").currentRelayState.has(e) ||
        t == null ||
        (n &&
          t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None)
      );
    }
    function Ge(e, t) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = (t == null ? void 0 : t.webTransportWarmStandby) === !0;
          if (
            !(
              r &&
              !(yield o(
                "WAWebVoipSctpWarmStandby",
              ).prepareWebTransportSctpWarmStandby())
            )
          ) {
            ((se = je()), (ue = Ke(se)));
            var a =
              o("WAWebVoipSctpConnectionState").currentRelayState.size === 0 ||
              he
                ? "initial"
                : "mid_call_relay_update";
            ((he = !1), fe++);
            var i = o(
                "WAWebVoipSctpWarmStandby",
              ).getWebTransportSctpWarmStandbyRelayState(e),
              l = o("WAWebVoipGatingUtils").isCurrentCallGroup(),
              s = l && e.enable_web_group_early_packet_relay_reconnect === !0;
            for (var u of o("WAWebVoipSctpConnectionState").currentRelayState) {
              var c = u[0],
                d = u[1];
              if (!i.has(c)) {
                var m = o("WAWebVoipSctpConnectionState").sctpConnections.get(
                  c,
                );
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END ||
                (r && (m == null ? void 0 : m.isWebTransportWarmStandby) === !0)
                  ? ke(c)
                  : m != null &&
                    m.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Failed &&
                    m.state !==
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Closed &&
                    ((m.relayConnectionInfo = d),
                    o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent(
                      "retained",
                    ));
              }
            }
            var p = [];
            for (var _ of i) {
              var f = _[0],
                g = _[1],
                h = o("WAWebVoipSctpConnectionState").sctpConnections.get(f);
              Ve(f, h, l);
              var y =
                s &&
                o("WAWebVoipSctpConnectionState").currentRelayState.has(f) &&
                (h == null ? void 0 : h.state) ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.None;
              He(f, h, s) &&
                p.push({
                  relayConnectionInfo: g,
                  isEarlyPacketRelayReconnect: y,
                  isWebTransportWarmStandby: r,
                });
            }
            o("WAWebVoipSctpConnectionState").currentRelayState.clear();
            for (var C of i) {
              var b = C[0],
                v = C[1];
              o("WAWebVoipSctpConnectionState").currentRelayState.set(b, v);
            }
            var S = t == null ? void 0 : t.connectionLimit,
              R =
                S != null && r
                  ? o(
                      "WAWebVoipSctpWarmStandby",
                    ).getWebTransportSctpWarmStandbyConnectionSlots(S)
                  : S,
              L = R == null ? p : p.slice(0, R);
            if (L.length > 0) {
              o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl(!r);
              var E =
                e.enable_web_relay_connection_stagger === !0 &&
                (t == null ? void 0 : t.bypassConnectionStagger) !== !0;
              E
                ? yield Be(L, a)
                : yield (le || (le = n("Promise"))).all(
                    L.map(function (e) {
                      return Ie(
                        e.relayConnectionInfo,
                        a,
                        e.isEarlyPacketRelayReconnect,
                        e.isWebTransportWarmStandby,
                      );
                    }),
                  );
            }
          }
        })),
        ze.apply(this, arguments)
      );
    }
    function je() {
      try {
        return r("justknobx")._("5402") || 1e4;
      } catch (e) {
        return (
          o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] timeout JK unavailable, using fallback=10000: ",
                "",
              ])),
            String(e),
          ),
          1e4
        );
      }
    }
    function Ke(e) {
      try {
        return r("justknobx")._("5558") || e;
      } catch (t) {
        return (
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE restart RX inactivity JK unavailable, using fallback=",
                ": ",
                "",
              ])),
            e,
            String(t),
          ),
          e
        );
      }
    }
    function Qe(e, t, n) {
      (n === void 0 && (n = !1),
        !n &&
          ((e.onopen = function (n) {
            dt(n, t.id, e);
          }),
          (e.onclose = function (e) {
            mt(e, t.id);
          }),
          (e.onmessage = function (e) {
            o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(
              e,
              t,
            );
          }),
          (e.onerror = function (n) {
            o("WALogger").ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Data channel error for ",
                  ":",
                ])),
              t.id,
            );
            var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
            if (r != null && r.channel === e) {
              var a = r;
              (ve(),
                $e(
                  a,
                  "data_channel_error",
                  "data_channel_error_reconnecting",
                  "[SCTP]",
                ));
            }
          })));
    }
    function Xe(e) {
      var t = e.connection,
        n = e.context,
        r = e.peerConnection,
        a = e.relayConnectionInfo,
        i = "pre-negotiated",
        l = babelHelpers.extends(
          {},
          o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
          { priority: "high" },
        ),
        s = r.createDataChannel(i, l);
      s.binaryType = "arraybuffer";
      var u = !1;
      return (
        o(
          "WAWebVoipSctpWarmStandby",
        ).shouldUseMainThreadForWebTransportSctp() ||
        o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled()
          ? o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] DC transfer disabled for ",
                  "",
                ])),
              a.id,
            )
          : (u = Ee(s, t, a.id, n)),
        (t.channel = s),
        Qe(s, a, u),
        s
      );
    }
    function Ye(e, t, n) {
      var r = n != null ? " " + n : "";
      ((e.oniceconnectionstatechange = function () {
        var n = e.iceConnectionState;
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE state->",
              " ",
              "",
              "",
            ])),
          n,
          t,
          r,
        );
        var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
        a &&
          (n === "connected" &&
            ((a.iceConnectedTime = Date.now()),
            o("WAWebVoipSctpOdsPortLogging").logCallIceConnectedForPort(
              a.relayPort,
            ),
            o("WAWebVoipSctpOdsPortLogging").logCallDtlsStartedForPort(
              a.relayPort,
            ),
            a.dtlsStallTimeout != null &&
              window.clearTimeout(a.dtlsStallTimeout),
            (a.dtlsStallTimeout = window.setTimeout(function () {
              a.dtlsStallTimeout = null;
              var n = e.connectionState;
              if (n !== "connected") {
                var i = Date.now() - a.iceConnectedTime;
                (o("WALogger").WARN(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] DTLS stall: ICE connected ",
                      "ms ago (threshold=",
                      "ms) but PC state is '",
                      "' for ",
                      "",
                      "",
                    ])),
                  i,
                  se,
                  n,
                  t,
                  r,
                ),
                  o(
                    "WAWebVoipSctpOdsPortLogging",
                  ).logCallDtlsFailedStallForPort(a.relayPort),
                  $e(a, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]"));
              }
            }, se))),
          n === "failed" &&
            (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(
              a.relayPort,
            ),
            Ne(a)));
      }),
        (e.onconnectionstatechange = function () {
          var n = e.connectionState;
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] PC state->",
                " ",
                "",
                "",
              ])),
            n,
            t,
            r,
          );
          var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
          if (a) {
            if (
              n === "connected" &&
              a.dtlsStallTimeout != null &&
              (window.clearTimeout(a.dtlsStallTimeout),
              (a.dtlsStallTimeout = null),
              o("WAWebVoipSctpOdsPortLogging").logCallDtlsConnectedForPort(
                a.relayPort,
              ),
              a.iceConnectedTime > 0)
            ) {
              var i = Date.now() - a.iceConnectedTime;
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] DTLS handshake completed in ",
                    "ms for ",
                    "",
                    "",
                  ])),
                i,
                t,
                r,
              );
            }
            (n === "connected" &&
              (o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess(
                a.isWebTransportWarmStandby !== !0,
              ),
              a.isEarlyPacketRelayReconnect === !0 &&
                a.hasLoggedEarlyPacketRelayReconnectConnected !== !0 &&
                ((a.hasLoggedEarlyPacketRelayReconnectConnected = !0),
                o(
                  "WAWebCoreActionsODS",
                ).logCallSctpEarlyPacketRelayReconnectEvent("pc_connected")),
              o("WAWebVoipSctpWarmStandby").notifyNativeRelayConnected(a)),
              n === "failed" &&
                o(
                  "WAWebVoipSctpOdsPortLogging",
                ).logCallDtlsFailedPcFailedForPort(a.relayPort));
          }
        }));
    }
    function Je(e, t, n, r, o) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
            (i &&
            i.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
              ? ((i.isEarlyPacketRelayReconnect = r),
                (i.isWebTransportWarmStandby = a),
                (i.hasLoggedEarlyPacketRelayReconnectConnected = !1),
                (i.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Connecting),
                (i.connectionStartTime = Date.now()),
                (i.relayConnectionInfo = e),
                (i.relayId = e.relayId),
                (i.relayIp = e.ip),
                (i.relayPort = e.port),
                i.connectionTimeout != null &&
                  i.connectionTimeout !== 0 &&
                  (window.clearTimeout(i.connectionTimeout),
                  (i.connectionTimeout = null)),
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] early conn->connecting ",
                      " buf=",
                      "",
                    ])),
                  e.id,
                  i.packetBuffer.bufferedBytes,
                ))
              : ((i = {
                  state: o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting,
                  channel: null,
                  peerConnection: null,
                  packetBuffer: o(
                    "WAWebVoipRelayConnectionUtils",
                  ).createPacketBuffer(),
                  id: e.id,
                  relayConnectionInfo: e,
                  connectionTimeout: null,
                  hasReceivedFirstPacket: !1,
                  hasNonStunPacketSent: !1,
                  lastRxPacketTime: 0,
                  stats: o(
                    "WAWebVoipRelayConnectionUtils",
                  ).createEmptyConnectionStats(),
                  isReconnecting: !1,
                  sentMedia: !1,
                  connectionStartTime: Date.now(),
                  channelTransferred: !1,
                  relayId: e.relayId,
                  relayIp: e.ip,
                  relayPort: e.port,
                  iceConnectedTime: 0,
                  dtlsStallTimeout: null,
                  isEarlyPacketRelayReconnect: r,
                  hasLoggedEarlyPacketRelayReconnectConnected: !1,
                  isWebTransportWarmStandby: a,
                }),
                a ||
                  o(
                    "WAWebVoipSctpFallbackFamilyOutcome",
                  ).recordSctpFallbackFamilyAttempt(i.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(i.id, i)),
              r &&
                o(
                  "WAWebCoreActionsODS",
                ).logCallSctpEarlyPacketRelayReconnectEvent("attempted"));
            var l = i;
            i.connectionTimeout = window.setTimeout(function () {
              l.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
                (o("WALogger").WARN(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] Connection timeout (",
                      "ms) in Connecting state for ",
                      "",
                    ])),
                  ce(),
                  e.id,
                ),
                rt(l, "connection_timeout"));
            }, ce());
            var s = !1;
            if (
              (!o(
                "WAWebVoipSctpWarmStandby",
              ).shouldUseMainThreadForWebTransportSctp() &&
                !o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() &&
                (s = yield pt()),
              de)
            )
              return (nt(e.id), Ae(e.id), !1);
            (o("WAWebVoipTsLogger").logIceConnectionStart({
              relayId: e.relayId,
              ip: e.ip,
              port: e.port,
            }),
              o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(
                e.port,
              ));
            try {
              var u,
                c,
                d = {};
              if (
                ((d.certificates = [
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(n),
                ]),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                de)
              )
                return (nt(e.id), Ae(e.id), !1);
              if (tt(i))
                return (
                  o("WALogger").WARN(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after certificate acquisition",
                      ])),
                    e.id,
                  ),
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i),
                  !1
                );
              var m = Date.now(),
                p = new RTCPeerConnection(d),
                _ = Date.now() - m;
              (_ >
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
                o("WALogger").WARN(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] slow RTCPeerConnection ctor ",
                      ": ",
                      "ms",
                    ])),
                  e.id,
                  _,
                ),
                (i.peerConnection = p),
                (p.onicecandidate = function (t) {
                  t.candidate ||
                    o("WALogger").LOG(
                      Q ||
                        (Q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SctpConnectionManager] ICE gathering complete for ",
                          "",
                        ])),
                      e.id,
                    );
                }),
                Ye(p, e.id),
                Xe({
                  connection: i,
                  peerConnection: p,
                  relayConnectionInfo: e,
                }));
              var f = Date.now(),
                g = yield p.createOffer();
              yield p.setLocalDescription(g);
              var h = g.sdp || "",
                y = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(h, e);
              if (
                (yield p.setRemoteDescription({ sdp: y, type: "answer" }),
                tt(i))
              )
                return (
                  o("WALogger").WARN(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [SctpConnectionManager] Aborting stale connect for ",
                        " after setRemoteDescription",
                      ])),
                    e.id,
                  ),
                  o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(i),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).closeConnectionDataChannel(i),
                  o(
                    "WAWebVoipSctpConnectionTeardown",
                  ).detachPeerConnectionHandlers(p),
                  p.close(),
                  (i.peerConnection = null),
                  !1
                );
              var C = Date.now() - f;
              C >
                o("WAWebVoipSctpConnectionManagerConstants")
                  .SLOW_WEBRTC_SETUP_THRESHOLD_MS &&
                o("WALogger").WARN(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpConnectionManager] Slow SDP negotiation for ",
                      ": ",
                      "ms",
                    ])),
                  e.id,
                  C,
                );
              var b = p.iceConnectionState,
                v =
                  (u = (c = i.channel) == null ? void 0 : c.readyState) != null
                    ? u
                    : "unknown";
              return (
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] SDP done ",
                      " DC=",
                      " ICE=",
                      "",
                    ])),
                  e.id,
                  v,
                  b,
                ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SCTP] createDataChannel failed: ",
                      "",
                    ])),
                  e,
                ),
                rt(i, "channel_creation_failed"),
                !1
              );
            }
          },
        )),
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      var t,
        n,
        r = e.stats,
        a = "N/A";
      r.connectionReadyTime !== 0 &&
        e.connectionStartTime > 0 &&
        (a = (r.connectionReadyTime - e.connectionStartTime).toString());
      var i =
        (t =
          (n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id)) ==
          null
            ? void 0
            : n.name) != null
          ? t
          : "N/A";
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [SCTP] stats relay=",
            " id=",
            " txPkt=",
            " rxPkt=",
            " txB=",
            " rxB=",
            "",
          ])),
        i,
        e.id,
        r.sentPackets,
        r.receivedPackets,
        r.sentBytes,
        r.receivedBytes,
      ),
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] stats bufB=",
              " bindT=",
              "ms",
            ])),
          e.packetBuffer.bufferedBytes,
          a,
        ));
    }
    function tt(e) {
      return (
        de || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e
      );
    }
    function nt(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      if (t) {
        (o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
          o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t));
        var n = t.peerConnection;
        (n &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close(),
          (t.peerConnection = null)),
          et(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          (t.isReconnecting == null || !t.isReconnecting) &&
            (o(
              "WAWebVoipSctpOdsPortLogging",
            ).logCallSctpConnectionCleanedUpForPort(t.relayPort),
            o("WAWebVoipSctpConnectionState").sctpConnections.delete(e),
            o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(
              e,
            ),
            o("WAWebVoipSctpConnectionState").sctpConnections.size === 0 &&
              o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource(
                "relay",
              )));
      }
    }
    function rt(e, t, n) {
      (n === void 0 && (n = !1),
        e &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          e.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (n || Re(e.id),
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Failing (closing) connection for ",
                ", reason: ",
                "",
              ])),
            e.id,
            t,
          ),
          o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionFailedForPort(
            e.relayPort,
          ),
          e.relayIp !== "" &&
            o("WAWebVoipTsLogger").logIceConnectionFailed(
              { relayId: e.relayId, ip: e.relayIp, port: e.relayPort },
              1,
            ),
          (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
          nt(e.id),
          Ae(e.id)));
    }
    function ot(e) {
      var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      t &&
        (t.isReconnecting == null || !t.isReconnecting) &&
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
        nt(e),
        Ae(e));
    }
    function at(e, t) {
      return tt(e) || ge !== t;
    }
    function it(e) {
      var t = e.connection,
        n = e.replacementPeerConnection,
        r = e.stage;
      if (
        (o("WALogger").WARN(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Aborting stale ICE restart for ",
              " at ",
              "",
            ])),
          t.id,
          r,
        ),
        o("WAWebCoreActionsODS").logCallSctpIceRestartAbortedStale(r),
        (t.isReconnecting = !1),
        o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t),
        o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id) === t)
      ) {
        (nt(t.id), lt(t.id));
        return;
      }
      (o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t),
        n != null &&
          (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n),
          n.close()),
        (t.peerConnection = null));
    }
    function lt(e) {
      var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e);
      de ||
        t == null ||
        (o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] Reconnecting ",
              " after aborted ICE restart",
            ])),
          e,
        ),
        Ie(t, "same_path_reconnect").catch(function (t) {
          o("WALogger").ERROR(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Reconnect after aborted ICE restart failed for ",
                ": ",
                "",
              ])),
            e,
            t,
          );
        }));
    }
    function st(e) {
      be.has(e) ||
        (be.add(e),
        o("WALogger").WARN(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] ICE restart skip: cleanup in progress ",
              "",
            ])),
          e,
        ),
        o(
          "WAWebCoreActionsODS",
        ).logCallSctpIceRestartSkippedCleanupInProgress());
    }
    function ut(e) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isReconnecting !== !0) {
            if (de) {
              st(e.id);
              return;
            }
            var t = ge;
            if (
              (o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Restarting ICE process for connection ",
                    "",
                  ])),
                e.id,
              ),
              !e.hasNonStunPacketSent)
            ) {
              o("WALogger").WARN(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no non-STUN sent ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var n = o("WAWebVoipSctpConnectionState").currentRelayState.get(
              e.id,
            );
            if (!n) {
              o("WALogger").WARN(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no relay info ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var r = e.peerConnection;
            if (!r) {
              o("WALogger").WARN(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] ICE restart skip: no PC ",
                    "",
                  ])),
                e.id,
              );
              return;
            }
            var a = e.packetBuffer;
            if (
              ((e.isReconnecting = !0),
              (e.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              e.peerConnection)
            ) {
              var i;
              (o("WALogger").LOG(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] Closing previous connection for ",
                    "",
                  ])),
                e.id,
              ),
                window.clearTimeout(
                  (i = e.connectionTimeout) != null ? i : void 0,
                ),
                (e.connectionTimeout = null),
                o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(
                  e,
                ));
              var l = e.peerConnection;
              l &&
                (o(
                  "WAWebVoipSctpConnectionTeardown",
                ).detachPeerConnectionHandlers(l),
                l.close());
            }
            try {
              ((e.hasReceivedFirstPacket = !1), (e.sentMedia = !1));
              var s = {};
              if (
                ((s.certificates = [
                  yield o("WAWebVoipDtlsCertAcquire").acquireDtlsCert(
                    "ice_restart",
                  ),
                ]),
                at(e, t))
              ) {
                it({
                  connection: e,
                  replacementPeerConnection: null,
                  stage: "cert_acquire",
                });
                return;
              }
              var u = new RTCPeerConnection(s);
              ((e.peerConnection = u),
                (e.iceConnectedTime = 0),
                e.dtlsStallTimeout != null &&
                  (window.clearTimeout(e.dtlsStallTimeout),
                  (e.dtlsStallTimeout = null)),
                Ye(u, e.id, "(ICE restart)"),
                Xe({
                  connection: e,
                  context: "ICE restart",
                  peerConnection: u,
                  relayConnectionInfo: n,
                }),
                (e.packetBuffer = a),
                e.isWebTransportWarmStandby !== !0 &&
                  o(
                    "WAWebVoipSctpFallbackFamilyOutcome",
                  ).recordSctpFallbackFamilyAttempt(e.relayIp),
                o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e));
              var c = yield u.createOffer({ iceRestart: !1 });
              yield u.setLocalDescription(c);
              var d = c.sdp || "",
                m = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(d, n);
              if (
                (yield u.setRemoteDescription({ sdp: m, type: "answer" }),
                at(e, t))
              ) {
                it({
                  connection: e,
                  replacementPeerConnection: u,
                  stage: "negotiation",
                });
                return;
              }
              o("WALogger").LOG(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart completed for connection ",
                    "",
                  ])),
                e.id,
              );
            } catch (t) {
              (o("WALogger").ERROR(
                ie ||
                  (ie = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpConnectionManager] ICE restart failed for connection ",
                    ": ",
                    "",
                  ])),
                e.id,
                t,
              ),
                rt(e, "ice_restart_failed"));
            }
          }
        })),
        ct.apply(this, arguments)
      );
    }
    function dt(e, t, n) {
      var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      if (r) {
        var a, i;
        if (r.channel == null || r.channel !== n) {
          o("WALogger").WARN(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] Ignoring stale DataChannel open for ",
                "",
              ])),
            t,
          );
          try {
            n.close();
          } catch (e) {
            o("WALogger").WARN(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Error closing stale DataChannel for ",
                  ": ",
                  "",
                ])),
              t,
              e,
            );
          }
          return;
        }
        if (
          r.state !==
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        )
          return;
        ((r.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
          (r.stats.connectionReadyTime = Date.now()),
          (r.isReconnecting = !1),
          Se(t),
          r.isWebTransportWarmStandby !== !0 &&
            (o(
              "WAWebVoipSctpFallbackFamilyOutcome",
            ).recordSctpFallbackFamilyOpened(r.relayIp),
            o(
              "WAWebVoipTransportFallbackTracker",
            ).notifySctpConnectionOpened()),
          r.connectionTimeout != null &&
            r.connectionTimeout !== 0 &&
            (window.clearTimeout(r.connectionTimeout),
            (r.connectionTimeout = null)),
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource(
            "relay",
            Le,
            o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread,
          ));
        var l =
            r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0,
          s =
            (a =
              (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(
                t,
              )) == null
                ? void 0
                : i.name) != null
              ? a
              : "N/A";
        (o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] DC opened ",
              " relay=",
              " ",
              "ms",
            ])),
          t,
          s,
          l,
        ),
          o("WALogger").LOG(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] ICE done id=",
                " ip=",
                " port=",
                "",
              ])),
            r.relayId,
            r.relayIp,
            r.relayPort,
          ),
          o("WAWebVoipTsLogger").logIceConnectionComplete({
            relayId: r.relayId,
            ip: r.relayIp,
            port: r.relayPort,
          }),
          r.isWebTransportWarmStandby !== !0 &&
            o("WAWebVoipSctpBufferDrain").drainBuffer(t),
          Ae(t));
      }
    }
    function mt(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
      n &&
        (o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpConnectionManager] DataChannel closed by relay for ",
              ", reconnecting",
            ])),
          t,
        ),
        ve("remote_close"),
        $e(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
    }
    function pt() {
      return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(
        function () {
          return se;
        },
      );
    }
    ((l.markSctpEnteredViaWebTransportFallback = o(
      "WAWebVoipSctpFallbackFamilyOutcome",
    ).markSctpEnteredViaWebTransportFallback),
      (l.reportSctpFallbackFamilyOutcome = o(
        "WAWebVoipSctpFallbackFamilyOutcome",
      ).reportSctpFallbackFamilyOutcome),
      (l.resetSctpFallbackFamilyOutcome = o(
        "WAWebVoipSctpFallbackFamilyOutcome",
      ).resetSctpFallbackFamilyOutcome),
      (l.getSctpRelayDebugSummary = o(
        "WAWebVoipSctpConnectionStats",
      ).getSctpRelayDebugSummary),
      (l.mergeWorkerStats = o("WAWebVoipSctpConnectionStats").mergeWorkerStats),
      (l.cleanupWebTransportSctpWarmStandby = me),
      (l.resetWebTransportSctpWarmStandbyAtCallBoundary = pe),
      (l.activateWebTransportSctpWarmStandbyForRelayList = _e),
      (l.markSctpCallIdentityChanged = ye),
      (l.sendWAWebVoipDataToRelay = De),
      (l.handleDataChannelOpened = xe),
      (l.handleDataChannelErrored = Me),
      (l.cleanupAllConnections = Fe),
      (l.handleRelayListUpdate = Ge));
  },
  98,
);
