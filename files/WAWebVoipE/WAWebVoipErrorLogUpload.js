__d(
  "WAWebVoipErrorLogUpload",
  [
    "WALogger",
    "WAWebCrashlog",
    "WAWebEnvironment",
    "WAWebUA",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipTransportFallbackTracker",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportConnectionManager",
    "WAWebWamEnumCallResultType",
    "getErrorSafe",
    "gkx",
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
      b = 6,
      v = 10,
      S = 0.1,
      R = 0.01,
      L = 0.1,
      E = 0.001,
      k = 8,
      I = 5e3,
      T = "voip-group-call-cer",
      D = 0.1,
      x = 3,
      $ = 3e4,
      P = null,
      N = new Set(),
      M = !1,
      w = !1,
      A = null;
    function F(e) {
      if (P == null)
        try {
          var t,
            n,
            r = JSON.parse(e);
          P =
            (t =
              r == null || (n = r.call_info) == null
                ? void 0
                : n.call_result) != null
              ? t
              : null;
        } catch (e) {
          P = null;
        }
    }
    function O() {
      ((M = !1), (w = !1));
    }
    function B() {
      if (
        ((M = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Web client entered reconnecting",
            ])),
        ),
        !w)
      ) {
        w = !0;
        var t = o(
            "WAWebVoipWebTransportCallSummary",
          ).getWtCallSummaryIfCurrent(),
          n = t.attempts
            .slice(-k)
            .map(function (e) {
              var t,
                n = e.outcome == null ? "pending" : e.outcome;
              return (
                e.connectionId +
                ":" +
                n +
                ":" +
                ((t = e.likelyCause) != null ? t : "none")
              );
            })
            .join("|");
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: reconnecting transport path previousWebTransportOpened=",
              " fallbackToSctp=",
              "",
            ])),
          String(t.numOpened > 0),
          String(o("WAWebVoipTransportFallbackTracker").hasFallbackTriggered()),
        ),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting SCTP relays ",
                "",
              ])),
            o("WAWebVoipSctpConnectionManager").getSctpRelayDebugSummary(),
          ),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport relays ",
                "",
              ])),
            o(
              "WAWebVoipWebTransportConnectionManager",
            ).getWebTransportRelayDebugSummary(),
          ),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: reconnecting WebTransport history attempts=",
                " opened=",
                " details=",
                "",
              ])),
            String(t.numRelayAttempts),
            String(t.numOpened),
            n || "none",
          ));
      }
    }
    function W() {
      var e = M;
      ((M = !1),
        !(!e || !r("WAWebEnvironment").isWeb || !z()) &&
          (q(),
          (A = window.setTimeout(function () {
            ((A = null),
              r("gkx")("26258")
                ? o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: uploading reconnecting logs",
                        ])),
                    )
                    .sendLogs("voip-call-reconnecting", {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                      sampling: E,
                    })
                : o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: uploading reconnecting testing logs",
                        ])),
                    )
                    .sendLogs("voip-call-reconnecting-testing", {
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                      sampling: E,
                    }));
          }, I))));
    }
    function q() {
      A != null && (window.clearTimeout(A), (A = null));
    }
    function U(e) {
      if (!z()) return null;
      var t = e === b || e === v;
      if (!t) return null;
      var n = o("WAWebUA").UA.browser.toLowerCase() || "unknown",
        r = o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall(),
        a = r ? "webtransport-" : "",
        i = e === b ? "setup-error" : "accepted-but-not-connected",
        l = o("WAWebUA").UA.isChrome ? R : S,
        s = r && e === v ? L : l;
      return { reason: "voip-call-error-" + n + "-" + a + i, sampling: s };
    }
    function V() {
      var e,
        t = P;
      if (((P = null), !!r("WAWebEnvironment").isWeb && t != null)) {
        var n = U(t);
        if (n != null) {
          q();
          var a = n.reason,
            i = n.sampling;
          r("gkx")("26258") || (a = a + "-testing");
          var l = (e = document.visibilityState) != null ? e : "unknown",
            s = document.hasFocus();
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] upload result=",
                " reason=",
                " rate=",
                " vis=",
                " focus=",
                "",
              ])),
            t,
            a,
            i,
            l,
            String(s),
          ),
            window.setTimeout(function () {
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: uploading error logs: ",
                      "",
                    ])),
                  a,
                )
                .sendLogs(a, {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: i,
                });
            }, I));
        }
      }
    }
    function H(e) {
      var t,
        n,
        a =
          (e.groupCallTotalCallTSinceCallStart != null &&
            e.groupCallTotalCallTSinceCallStart > 0) ||
          (e.callT != null && e.callT > 0);
      if (
        !(
          !r("WAWebEnvironment").isWeb ||
          e.callEndReconnecting !== !0 ||
          e.callResult !==
            o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.CONNECTED ||
          !a ||
          e.groupCallIsLastSegment !== !0 ||
          e.maxConnectedParticipants < x ||
          !z()
        )
      ) {
        var i =
          ((t = e.callId) != null ? t : "unknown-call") +
          ":" +
          String((n = e.groupCallSegmentIdx) != null ? n : "unknown-segment");
        if (!N.has(i)) {
          N.add(i);
          var l = D,
            s = r("gkx")("26258") ? T : T + "-testing",
            u = G(e);
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] scheduling group CER log upload reason=",
                " rate=",
                "",
              ])),
            s,
            l,
          ),
            self.setTimeout(function () {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: uploading group CER logs: ",
                    "",
                  ])),
                s,
              ),
                o("WAWebCrashlog")
                  .upload({
                    reason: s,
                    clientSamplingRate: l,
                    fromTimestamp: u,
                    hasTaggedMessage: !1,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: group CER log upload failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  })
                  .finally(function () {
                    N.delete(i);
                  }));
            }, I));
        }
      }
    }
    function G(e) {
      var t = e.groupCallTotalCallTSinceCallStart,
        n = t != null && t >= 0 ? t : e.callT;
      if (!(n == null || n < 0)) return Math.max(0, Date.now() - n - $);
    }
    function z() {
      try {
        return r("justknobx")._("5297");
      } catch (e) {
        return (
          o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: investigation log upload JK unavailable, using fallback=true: ",
                "",
              ])),
            String(e),
          ),
          !0
        );
      }
    }
    ((l.captureWamCallResult = F),
      (l.resetReconnectingStateForNewCall = O),
      (l.recordCallReconnectingStateForLogs = B),
      (l.maybeUploadReconnectingLogs = W),
      (l.maybeUploadErrorLogs = V),
      (l.maybeUploadGroupCallCerLogs = H));
  },
  98,
);
