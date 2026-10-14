__d(
  "WAWebVoipJoinDeviceRecovery",
  [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
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
      h = 1e4,
      y = 3e4;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || !D(t.getState()) || r("WAWebEnvironment").isWindows)
            return null;
          var n = {
              camera: e.camera,
              microphone: e.microphone && !t.selfMicMuted,
            },
            a = yield R(n);
          return !a.isRecoveryNeeded ||
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled() ||
            (I(a), E(a) || !k(a))
            ? null
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: joining without waiting for devices, microphone off=",
                    ", camera off=",
                    "",
                  ])),
                String(a.isMicrophoneOff),
                String(a.isCameraOff),
              ),
              {
                acceptMuted: a.isMicrophoneOff,
                acceptWithoutCamera: a.isCameraOff || a.neverAsked.microphone,
                afterAccept: x(a, n, t),
              });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (t == null || !D(t.getState())) return null;
          var i = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            l = i[0],
            s = i[1],
            u = T(l);
          return u == null
            ? null
            : (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
              a
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone unavailable before joining (",
                        "), joining muted, waits for the guide=",
                        "",
                      ])),
                    l,
                    String(u),
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone refused before joining (",
                        "), joining muted, waits for the guide=",
                        "",
                      ])),
                    l,
                    String(u),
                  ),
              !a &&
                e.microphone &&
                !t.selfMicMuted &&
                o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(
                  t.id,
                ),
              {
                acceptMuted: !0,
                acceptWithoutCamera: s !== "granted",
                afterAccept: r("WAWebNoop"),
                waitsForGuideClick: u,
              });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            r = t[0],
            a = t[1],
            i = {
              camera: a === "prompt",
              microphone: e.microphone && r === "prompt",
            },
            l = r === "denied" || r === "prompt";
          return {
            isCameraOff: a !== "granted",
            isMicrophoneNeverAsked: r === "prompt",
            isMicrophoneOff: l,
            isRecoveryNeeded: l || i.camera,
            neverAsked: i,
          };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return o("WAWebUA").UA.isWebkit && e.isMicrophoneNeverAsked;
    }
    function k(e) {
      return (
        !e.isMicrophoneOff || o("WAWebVoipCallAudioUnlock").canStartCallAudio()
      );
    }
    function I(e) {
      o("WAWebUA").UA.isWebkit &&
        e.isMicrophoneOff &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function T(e) {
      return (e !== "denied" && e !== "prompt") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : !o("WAWebVoipCallAudioUnlock").canStartCallAudio();
    }
    function D(e) {
      return (
        o("WAWebVoipCallStateUtils").isCallIncoming(e) ||
        e === o("WAWebVoipWaCallEnums").CallState.Rejoining
      );
    }
    function x(t, n, a) {
      var i = t.neverAsked;
      if (!i.camera && !i.microphone) return r("WAWebNoop");
      var l = t.isMicrophoneOff
        ? o("WAWebVoipDevicePermissionRequest").requestVoipDevicePermissions(i)
        : null;
      return (
        l != null &&
          o("WAWebVoipAudioCaptureAndPlayback").adoptGrantedMicrophoneStream(
            l.then(function (e) {
              var t = e.microphoneStream;
              return t;
            }),
            function () {
              return r("WAWebCallCollection").activeCall === a;
            },
          ),
        function () {
          var s,
            u = P(
              (s =
                l == null
                  ? void 0
                  : l.then(function (e) {
                      return ($(t, a, e), e.granted);
                    })) != null
                ? s
                : N(i, a),
            );
          u.then(function (e) {
            return e == null ? void 0 : w(t, n, a, e);
          }).catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning on devices allowed after joining failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          });
        }
      );
    }
    function $(e, t, n) {
      var a = n.isRefused;
      e.neverAsked.microphone &&
        a &&
        r("WAWebCallCollection").activeCall === t &&
        o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
    }
    function P(e) {
      var t = Date.now();
      return e.then(function (e) {
        var n = Date.now() - t;
        return e == null || n <= y
          ? e
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: devices allowed ",
                  "ms after joining, leaving them off",
                ])),
              n,
            ),
            null);
      });
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield V();
          if (!n || r("WAWebCallCollection").activeCall !== t) return null;
          var a = yield o(
              "WAWebVoipDevicePermissionRequest",
            ).requestVoipDevicePermissions(e),
            i = a.granted;
          return i;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield F(t, r),
              a =
                t.microphone &&
                e.isMicrophoneOff &&
                o.microphone &&
                (yield V());
            (o.camera && (yield B(n)), a && (yield q(n)));
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            a = r[0],
            i = r[1];
          return {
            camera: t.camera || i === "granted",
            microphone: t.microphone || a === "granted",
          };
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: camera allowed after joining, turning video on",
                ])),
            );
            var n = yield t.setCallVideoMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning video on after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: microphone allowed and live after joining, unmuting",
                ])),
            );
            var n = yield t.setCallMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: unmuting after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return new (g || (g = n("Promise")))(function (e) {
        if (
          o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
          "active"
        ) {
          e(!0);
          return;
        }
        var t = r("WAWebNoop"),
          n = window.setTimeout(function () {
            (t(), e(!1));
          }, h);
        t = o("WAWebVoipMicrophoneInputState").subscribeToMicrophoneInput(
          function () {
            o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
              "active" && (window.clearTimeout(n), t(), e(!0));
          },
        );
      });
    }
    ((l.getDeviceRecoveryJoin = C), (l.getRefusedPromptJoin = v));
  },
  98,
);
