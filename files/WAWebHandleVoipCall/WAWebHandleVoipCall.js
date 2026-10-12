__d(
  "WAWebHandleVoipCall",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCallLogMsgData.flow",
    "WAWebCommsWapMd",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebHandleVoipOfferNotice",
    "WAWebJidToWid",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCalleeOfferToRingStore",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipDeferredBootStaleCalls",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipIncomingOfferRoute",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipLidUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipSendGroupCallRekeyRetryReceiptJob",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "cr:6324",
    "err",
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
      P = (e = n("cr:6324")) != null ? e : {},
      N = P.maybeOverrideJestE2ERelayEndpoints,
      M = "incoming";
    function w(e) {
      var t = o("WAWebVoipSignalingEnums").TYPE;
      return t[e.tag().toUpperCase()] || o("WAWebVoipSignalingEnums").TYPE.NONE;
    }
    var A = new (r("WADeprecatedWapParser"))("callParser", function (e) {
      var t, n, a, i, l, s, u;
      e.assertTag("call");
      var c = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
        d = e.hasAttr("sender_lid")
          ? o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender_lid"))
          : null,
        m = e.mapFirstChild(function (e) {
          return e;
        });
      if (!m) throw r("err")("Unrecognized call stanza");
      var p = m.attrString("call-id"),
        _ = o("WAWebJidToWid").jidWithTypeToWid(
          m.attrJidWithType("call-creator"),
        ),
        f = m.hasAttr("group-jid")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("group-jid"))
          : null,
        g = m.hasAttr("caller_pn")
          ? o("WAWebJidToWid").jidWithTypeToWid(m.attrJidWithType("caller_pn"))
          : null,
        h = m.maybeAttrString("username"),
        y = m.maybeAttrString("caller_country_code"),
        C = m.maybeAttrString("notify"),
        b =
          (t = m.maybeChild("group_info")) == null
            ? void 0
            : t.mapChildren(function (e) {
                var t,
                  n,
                  r =
                    (t =
                      (n = e.maybeAttrString("push_name")) != null
                        ? n
                        : e.maybeAttrString("guest_name")) != null
                      ? t
                      : null;
                return {
                  jid: o("WAWebJidToWid").jidWithTypeToWid(
                    e.attrJidWithType("jid"),
                  ),
                  user_pn: e.hasAttr("user_pn")
                    ? o("WAWebJidToWid").jidWithTypeToWid(
                        e.attrJidWithType("user_pn"),
                      )
                    : null,
                  username: e.maybeAttrString("username"),
                  push_name: r,
                  account_kind: e.maybeAttrString("account_kind"),
                  guest_name: r,
                };
              }),
        v = babelHelpers.extends(
          {
            call_id: p,
            call_creator: _,
            caller_pn: g,
            peer_jid: c,
            peer_platform: (n = e.maybeAttrString("platform")) != null ? n : "",
            peer_app_version:
              (a = e.maybeAttrString("version")) != null ? a : "0",
            is_offline: e.hasAttr("offline"),
          },
          F(m),
          {
            type: w(m),
            common: { call_id: p, peer_jid: c.toString(), type: String(w(m)) },
            group_jid: f,
            caller_username: h,
            caller_country_code: y,
            caller_push_name: C,
            isVideoCall: m.hasChild("video"),
            silence_reason:
              (i =
                (l = m.maybeChild("silence")) == null
                  ? void 0
                  : l.maybeAttrString("reason")) != null
                ? i
                : void 0,
            t:
              (s = e.maybeAttrTime("t")) != null
                ? s
                : o("WATimeUtils").castToUnixTime(0),
            e: o("WATimeUtils").castUnixTimeToMillisTime(
              (u = e.maybeAttrTime("e")) != null
                ? u
                : o("WATimeUtils").castToUnixTime(0),
            ),
            group_info_updates: b,
          },
        );
      return {
        from: c,
        senderLid: d,
        stanzaId: e.attrString("id"),
        payloadTag: m.tag(),
        message: v,
        callCreator: _,
        voipNode: m,
      };
    });
    function F(e) {
      return e.tag() === "terminate"
        ? {
            has_terminate_transaction_id: !1,
            is_call_ended: !1,
            terminate_reason: e.maybeAttrString("reason"),
          }
        : O(e);
    }
    function O(e) {
      if (e.maybeAttrString("is_call_ended") !== "1")
        return {
          has_terminate_transaction_id: !1,
          is_call_ended: !1,
          terminate_reason: null,
        };
      var t = e.maybeChild("terminate_hint");
      return t == null
        ? {
            has_terminate_transaction_id: !1,
            is_call_ended: !0,
            terminate_reason: e.maybeAttrString("terminate_reason"),
          }
        : {
            has_terminate_transaction_id: t.hasAttr("terminate_transaction_id"),
            is_call_ended: !0,
            terminate_reason: t.maybeAttrString("terminate_reason"),
          };
    }
    function B(e) {
      var t = A.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          null)
        : t.success;
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebVoipGatingUtils").isCallingEnabled()) return !1;
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          )
            return !0;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    "",
                  ])),
                M,
              );
            },
          );
          var e = yield o("WAWebVoipBackendLoadable")
              .requireVoipJsBackend()
              .catch(function (e) {
                throw (
                  o(
                    "WAWebVoipDeferredBootLogging",
                  ).safelyLogVoipDeferredBootEvent(function () {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] intent backend_load_failed trigger=",
                            "",
                          ])),
                        M,
                      )
                      .sendLogs("voip: backend-load-failed-on-stanza");
                  }),
                  e
                );
              }),
            t = e.WAWebVoipInit;
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent backend_ready trigger=",
                    "",
                  ])),
                M,
              );
            },
          );
          var n = !1;
          try {
            if (t.VoipInitEventEmitter.getIsVoipInited())
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=concurrent_init retry_requested=false",
                      ])),
                    M,
                  );
                }),
                !0
              );
            if (
              (yield t.initWAWebVoip(M),
              !t.VoipInitEventEmitter.getIsVoipInited() &&
                t.VoipInitEventEmitter.getDidVoipInitError() &&
                ((n = !0),
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    M,
                  );
                }),
                yield t.retryWAWebVoipInitAfterFailure()),
              t.VoipInitEventEmitter.getIsVoipInited())
            )
              return (
                o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_ready trigger=",
                        " source=intent_init retry_requested=",
                        "",
                      ])),
                    M,
                    n,
                  );
                }),
                !0
              );
          } catch (e) {
            return (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [deferred-boot] intent init_failed trigger=",
                          "",
                        ])),
                      M,
                    )
                    .sendLogs("voip: init-failed-on-stanza");
                },
              ),
              !1
            );
          }
          if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
            var r;
            return (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_terminal trigger=",
                        " result=unsupported retry_requested=",
                        "",
                      ])),
                    M,
                    n,
                  );
                },
              ),
              o("WALogger")
                .LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: skip call stanza, unsupported browser: ",
                      "",
                    ])),
                  (r = o(
                    "WAWebVoipGatingUtils",
                  ).getUnsupportedBrowserReason()) != null
                    ? r
                    : "unknown",
                )
                .sendLogs("voip-call-stanza-unsupported-browser", {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: 0.01,
                }),
              !1
            );
          }
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_terminal trigger=",
                      " result=not_inited retry_requested=",
                      "",
                    ])),
                  M,
                  n,
                );
              },
            ),
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to initialize VoIP",
                  ])),
              )
              .sendLogs("voip: init-resolved-not-inited-on-stanza"),
            !1
          );
        })),
        q.apply(this, arguments)
      );
    }
    var U = null;
    function V() {
      U = null;
    }
    function H(e) {
      return e ? "available" : "fallback";
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ((j(), U != null)) return "reload_required";
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipStackUnresponsive()
          )
            return (
              e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
                o("WAWebCoreActionsODS").logCallIncomingHeldStackUnresponsive(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive",
                      ])),
                    M,
                  );
                },
              ),
              "reload_required"
            );
          var t = e.type === o("WAWebVoipSignalingEnums").TYPE.OFFER;
          e.type === o("WAWebVoipSignalingEnums").TYPE.TERMINATE &&
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          var r = W().then(H);
          if (!t) return r;
          var a = o("WAWebBackendApi")
            .frontendSendAndReceive("startVoipInitReloadRecovery", {
              callId: e.call_id,
              canRing: o("WAWebVoipIncomingOfferRoute").isFreshIncomingOffer(e),
            })
            .then(
              function (e) {
                return e === "artifact_unavailable"
                  ? "artifact_reload_required"
                  : e === "cancelled"
                    ? r
                    : e === "unavailable"
                      ? "reload_required"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
              },
              function () {
                return r;
              },
            );
          try {
            var i = yield ($ || ($ = n("Promise"))).race([r, a]);
            return K(i);
          } finally {
            o("WAWebBackendApi").frontendFireAndForget(
              "finishVoipInitReloadRecovery",
              { callId: e.call_id },
            );
          }
        })),
        z.apply(this, arguments)
      );
    }
    function j() {
      U === "artifact" &&
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() &&
        (U = null);
    }
    function K(e) {
      e: {
        if (e === "artifact_reload_required") {
          var t = o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=artifact_reload_required inited=",
                      "",
                    ])),
                  M,
                  t,
                );
              },
            ),
            t || (U = "artifact"),
            "reload_required"
          );
          break e;
        }
        if (e === "reload_required") {
          return (
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent blocked trigger=",
                      " reason=reload_required",
                    ])),
                  M,
                );
              },
            ),
            (U = "stuck"),
            "reload_required"
          );
          break e;
        }
        if (e === "available") return "available";
        if (e === "fallback") return "fallback";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function Q(e) {
      return (
        e === o("WAWebVoipSignalingEnums").TYPE.OFFER ||
        e === o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY ||
        e === o("WAWebVoipSignalingEnums").TYPE.ACCEPT ||
        e === o("WAWebVoipSignalingEnums").TYPE.REJECT
      );
    }
    function X(e, t, n, r, o) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            if (!i)
              return (
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: ENC_REKEY received while VoIP stack is unavailable, returning NO_ACK",
                    ])),
                ),
                "NO_ACK"
              );
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: received ENC_REKEY stanza from ",
                  ", call_id=",
                  ", stanzaId=",
                  "",
                ])),
              t.toString(),
              s != null ? s : "unknown",
              n,
            );
            try {
              var u = yield o(
                  "WAWebVoipHandleIncomingSignalingMessage",
                ).handleVoipIncomingEncRekey(e, a),
                c = u.retryCount,
                d = u.shouldRetry;
              d
                ? (o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ENC_REKEY requires retry, retryCount=",
                        ", sending retry receipt",
                      ])),
                    String(c != null ? c : 0),
                  ),
                  yield r("WAWebVoipSendGroupCallRekeyRetryReceiptJob")(
                    n,
                    e,
                    c,
                  ))
                : le({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY,
                  });
            } catch (e) {
              o("WALogger").ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: ENC_REKEY handling failed: ",
                    "",
                  ])),
                e,
              );
            }
            return "NO_ACK";
          },
        )),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r, o) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.call_creator,
              s = e.call_id;
            switch (e.type) {
              case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (
                  (le({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: e.type,
                  }),
                  i)
                ) {
                  var u = yield o(
                    "WAWebVoipBackendLoadable",
                  ).requireVoipJsBackend();
                  yield u.WAWebHandleVoipCallOffer.handleVoipCallOffer(e, a);
                } else
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, a, !1);
                return "NO_ACK";
              case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
                return X(e, t, n, a, i);
              case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
              case o("WAWebVoipSignalingEnums").TYPE.REJECT:
                return (
                  le({
                    callCreator: l,
                    callId: s,
                    from: t,
                    stanzaId: n,
                    type: e.type,
                  }),
                  yield o(
                    "WAWebVoipHandleIncomingSignalingMessage",
                  ).handleVoipIncomingSignalingMessage(e, a, i),
                  "NO_ACK"
                );
              default:
                throw r("err")("Unexpected receipt-bearing call message");
            }
          },
        )),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canUseVoipStack,
            a = e.from,
            i = e.message,
            l = e.node,
            s = e.payloadTag,
            u = e.stanzaId,
            c = e.voipNode;
          if (
            t &&
            o("WAWebVoipGatingUtils").isGroupCallMessage(i) &&
            !o("WAWebVoipGatingUtils").isGroupCallingEnabled()
          ) {
            var d,
              m =
                i.group_jid != null
                  ? { isGroup: !0, groupJid: i.group_jid }
                  : { isGroup: !0, groupJid: null };
            return (
              o("WAWebBackendApi").frontendFireAndForget(
                "generateCallLogOfferNotice",
                babelHelpers.extends(
                  {
                    callCreatorWid: i.call_creator,
                    offerTime: i.t,
                    isVideo: (d = i.isVideoCall) != null ? d : !1,
                    callId: i.call_id,
                    isOffline: i.is_offline,
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                      .Missed,
                  },
                  m,
                ),
              ),
              ($ || ($ = n("Promise"))).resolve("NO_ACK")
            );
          }
          if (Q(i.type)) return J(i, a, u, c, t);
          switch (i.type) {
            case o("WAWebVoipSignalingEnums").TYPE.OFFER_NOTICE:
              return r("WAWebEnvironment").isWindows &&
                !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
                ? (o("WALogger").ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "handleVoipIncomingSignalingMessage: offer notice unsupported on win",
                      ])),
                  ),
                  ($ || ($ = n("Promise"))).resolve("NO_ACK"))
                : r("WAWebHandleVoipOfferNotice")(l);
            default:
              return (
                yield o(
                  "WAWebVoipHandleIncomingSignalingMessage",
                ).handleVoipIncomingSignalingMessage(i, c, t),
                se({ ackString: s, from: a, stanzaId: u })
              );
          }
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          N == null || N(e);
          var t = B(e);
          if (t == null) return ($ || ($ = n("Promise"))).resolve("NO_ACK");
          var a = t.from,
            i = t.message,
            l = t.payloadTag,
            s = t.senderLid,
            u = t.stanzaId,
            c = t.voipNode,
            d = o("WAWebVoipDeferredBootStaleCalls").claimStaleCallStanza(i, l);
          i.type === o("WAWebVoipSignalingEnums").TYPE.OFFER &&
            o("WAWebVoipCallStateUtils").isCallTerminal(
              o("WAWebVoipLocalCallStateStore").getLocalCallState(),
            ) &&
            o("WAWebVoipCalleeOfferToRingStore").recordCalleeOfferReceived(
              i.call_id,
            );
          try {
            (s != null &&
              (a.isLid() &&
                o("WALogger")
                  .ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCall: sender_lid in a lid call",
                      ])),
                  )
                  .sendLogs("lid-call-sender-lid"),
              s.isUser() &&
                (yield o(
                  "WAWebVoipLidUtils",
                ).attemptPersistLidMappingAndUserAttributes({
                  jid: s,
                  phoneNumber: a.isUser() ? a : null,
                  flushImmediately: !0,
                }))),
              yield o(
                "WAWebVoipLidUtils",
              ).persistAttributesAndLidMappingsForCall(i));
          } catch (e) {
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: identity persistence failed, continuing to dispatch",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-identity-persistence-failed", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                sampling: 0.01,
              });
          }
          return (
            o("WAWebVoipGatingUtils").isGuestViewer() &&
              i.group_info_updates != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "hydrateGuestParticipantContacts",
                {
                  participants: i.group_info_updates.map(function (e) {
                    return {
                      jid: e.jid,
                      pushName: e.push_name,
                      username: e.username,
                      isGuestUser:
                        o("WAWebVoipWaCallEnums").wireStringToAccountKind(
                          e.account_kind,
                        ) === o("WAWebVoipWaCallEnums").AccountKind.Guest,
                    };
                  }),
                },
              ),
            oe(
              {
                from: a,
                message: i,
                node: e,
                payloadTag: l,
                stanzaId: u,
                voipNode: c,
              },
              d,
            )
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t != null) return ie(t, e);
          var n = yield G(e.message);
          return n === "reload_required"
            ? (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: retaining call stanza until user reloads, type=",
                    "",
                  ])),
                e.payloadTag,
              ),
              "NO_ACK")
            : ee(
                babelHelpers.extends({}, e, {
                  canUseVoipStack: n === "available",
                }),
              );
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      var n = t.from,
        r = t.message,
        a = t.payloadTag,
        i = t.stanzaId,
        l = t.voipNode,
        s = Q(r.type);
      return (
        s &&
          le({
            callCreator: r.call_creator,
            callId: r.call_id,
            from: n,
            stanzaId: i,
            type: r.type,
          }),
        o("WAWebVoipDeferredBootStaleCalls").writeStaleCallLog(e, r, l),
        s ? "NO_ACK" : se({ ackString: a, from: n, stanzaId: i })
      );
    }
    function le(e) {
      var t = e.callCreator,
        n = e.callId,
        r = e.from,
        a = e.stanzaId,
        i = e.type,
        l;
      switch (i) {
        case o("WAWebVoipSignalingEnums").TYPE.OFFER:
          l = o("WAWap").wap("offer", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ENC_REKEY:
          l = o("WAWap").wap("enc_rekey", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.ACCEPT:
          l = o("WAWap").wap("accept", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
        case o("WAWebVoipSignalingEnums").TYPE.REJECT:
          l = o("WAWap").wap("reject", {
            "call-id": o("WAWap").CUSTOM_STRING(n),
            "call-creator": o("WAWebCommsWapMd").JID(t),
          });
          break;
      }
      o("WADeprecatedSendIq").deprecatedCastStanza(
        o("WAWap").wap(
          "receipt",
          { to: o("WAWebCommsWapMd").JID(r), id: o("WAWap").CUSTOM_STRING(a) },
          l,
        ),
      );
    }
    function se(e) {
      var t = e.ackString,
        n = e.from,
        r = e.stanzaId;
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").JID(n),
        id: o("WAWap").CUSTOM_STRING(r),
        class: "call",
        type: o("WAWap").MAYBE_CUSTOM_STRING(t),
      });
    }
    ((l.parseCallNode = B),
      (l.canUseVoipStackForCallMessage = W),
      (l.resetVoipInitReloadRequiredForTest = V),
      (l.handleCall = ne));
  },
  98,
);
