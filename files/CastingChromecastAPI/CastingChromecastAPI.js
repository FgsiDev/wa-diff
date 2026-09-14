__d(
  "CastingChromecastAPI",
  ["ExecutionEnvironment", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 18e4,
      c = [
        "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
        "hfaagokkkhdbgiakmmlclaapfelnkoah",
        "fmfcbgogabcbclcofgocippekhfcmgfj",
        "enhhojjnijigcajfphajepfemndkmdlo",
      ],
      d = null,
      m = function (t) {
        var e = t.appID,
          r = t.receiverListener,
          o = t.sessionListener;
        return h().then(function (t) {
          var a = new t.ApiConfig(
            new t.SessionRequest(e),
            o,
            r,
            t.AutoJoinPolicy.ORIGIN_SCOPED,
            t.DefaultActionPolicy.CAST_THIS_TAB,
          );
          return new (s || (s = n("Promise")))(function (e, n) {
            t.initialize(a, e, n);
          });
        });
      },
      p = function (t) {
        return h().then(function (e) {
          e.addReceiverActionListener(function (n, r) {
            switch (r) {
              case e.ReceiverAction.CAST:
                t.onCast(n);
                break;
              case e.ReceiverAction.STOP:
                t.onStop();
                break;
            }
          });
        });
      },
      _ = function (t) {
        return h().then(function (e) {
          var r = new e.SessionRequest(
            t,
            [e.Capability.VIDEO_OUT, e.Capability.AUDIO_OUT],
            u,
          );
          return new (s || (s = n("Promise")))(function (t, n) {
            e.requestSession(t, n, r);
          });
        });
      },
      f = function (t) {
        return h().then(function (e) {
          return t === e.ReceiverAvailability.AVAILABLE;
        });
      },
      g = function () {
        return h().then(function (e) {
          return e.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
        });
      },
      h = function () {
        return (
          d ||
          (t.chrome
            ? t.chrome.cast && t.chrome.cast.isAvailable
              ? ((d = (s || (s = n("Promise"))).resolve(t.chrome.cast)), d)
              : ((d = (s || (s = n("Promise")))
                  .resolve()
                  .then(function () {
                    return y();
                  })
                  .then(function (o) {
                    return new (s || (s = n("Promise")))(function (n, a) {
                      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                        ((t.chrome.cast = t.chrome.cast || {}),
                          (t.chrome.cast.extensionId = o),
                          (t.__onGCastApiAvailable = function (e, r) {
                            r ? a(r) : n(t.chrome.cast);
                          }));
                        var i = document.createElement("script");
                        if (((i.onerror = a), o == null)) {
                          a({
                            code: "extension_not_available",
                            description: null,
                            details: null,
                          });
                          return;
                        } else i.src = v(o);
                        var l = document.head || document.documentElement;
                        if (l == null) {
                          a({
                            code: "extension_no_casting_script",
                            description: null,
                            details: null,
                          });
                          return;
                        }
                        l.appendChild(i);
                      } else
                        a({
                          code: "not_supported",
                          description: null,
                          details: null,
                        });
                    });
                  })),
                d)
            : ((d = (s || (s = n("Promise"))).reject({
                code: "not_supported",
                description: null,
                details: null,
              })),
              d))
        );
      };
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          for (var e = 0; e < c.length; e++) {
            var t = c[e],
              n = yield b(t);
            if (n) return t;
          }
          return null;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return new (s || (s = n("Promise")))(function (t, n) {
        var r = v(e),
          o = new XMLHttpRequest();
        ((o.onreadystatechange = function () {
          o.readyState === 4 && t(o.status === 200);
        }),
          (o.onerror = function () {
            t(!1);
          }),
          o.open("GET", r, !0),
          o.send());
      });
    }
    function v(e) {
      return "chrome-extension://" + e + "/cast_sender.js";
    }
    var S = {
        addReceiverListener: p,
        getDefaultAppID: g,
        getIsAvailable: f,
        getSession: _,
        initialize: m,
      },
      R = S;
    l.default = R;
  },
  98,
);
