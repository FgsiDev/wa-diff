__d(
  "WebBloksCAAOpenAppIntent",
  [
    "UserAgent",
    "WebBloksCAAPKCEStore",
    "WebBloksErrors",
    "WebBloksScriptDebuggingUtils",
    "WebBloksUtils",
    "getErrorSafe",
    "goURI",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "__JSSDK_PKCE_CHALLENGE__",
      s = /^[A-Za-z0-9_-]{43}$/,
      u = 2e3;
    function c(t, n, a, i, l, u, c) {
      var m;
      if (u != null) {
        d(t, n, u, c);
        return;
      }
      var p = function (r) {
          window.setTimeout(function () {
            t.executeCatch(i, [r, n]);
          });
        },
        _ =
          r("UserAgent").isPlatform("Android") &&
          typeof a == "string" &&
          a.startsWith("intent://");
      if (!_) {
        (l != null && o("WebBloksCAAPKCEStore").invalidatePKCE(),
          p("OpenAppIntent: no usable intent_url"));
        return;
      }
      var f = a.indexOf("#Intent;"),
        g = f === -1 ? a : a.slice(0, f),
        h = f === -1 ? "" : a.slice(f),
        y = new RegExp(
          "([?&]app_switch_code_challenge=)" + e + "(?=&|#|$)",
          "g",
        ),
        C = g.match(y),
        b = (m = C == null ? void 0 : C.length) != null ? m : 0,
        v = "";
      if (l != null) {
        if (b !== 1) {
          (o("WebBloksScriptDebuggingUtils").logScriptError(
            t.bloksContext.objectSet,
            new (o("WebBloksErrors").WebBloksScriptError)(
              "OpenAppIntent: " +
                b +
                " top-level code_challenge placeholders, expected 1",
              t,
            ),
            null,
            t,
          ),
            o("WebBloksCAAPKCEStore").invalidatePKCE(),
            p("OpenAppIntent: invalid PKCE challenge placeholder"));
          return;
        }
        var S = o("WebBloksCAAPKCEStore").readPKCE();
        if (S == null) {
          (o("WebBloksScriptDebuggingUtils").logScriptError(
            t.bloksContext.objectSet,
            new (o("WebBloksErrors").WebBloksScriptError)(
              "OpenAppIntent: verifier requested but no PKCE pair stored",
              t,
            ),
            null,
            t,
          ),
            o("WebBloksCAAPKCEStore").invalidatePKCE(),
            p("OpenAppIntent: no PKCE pair stored"));
          return;
        } else if (s.test(S.challenge))
          try {
            (t.execute(l, [S.verifier, n]), (v = S.challenge));
          } catch (e) {
            o("WebBloksScriptDebuggingUtils").logScriptError(
              t.bloksContext.objectSet,
              new (o("WebBloksErrors").WebBloksScriptError)(
                r("getErrorSafe")(e).message,
                t,
              ),
              l,
              t,
            );
          }
        else {
          (o("WebBloksScriptDebuggingUtils").logScriptError(
            t.bloksContext.objectSet,
            new (o("WebBloksErrors").WebBloksScriptError)(
              "OpenAppIntent: stored PKCE challenge has an invalid format",
              t,
            ),
            null,
            t,
          ),
            o("WebBloksCAAPKCEStore").invalidatePKCE(),
            p("OpenAppIntent: invalid stored PKCE challenge"));
          return;
        }
      }
      l != null && o("WebBloksCAAPKCEStore").clearPKCE();
      try {
        var R =
          g.replace(y, function (e, t) {
            return t + v;
          }) + h;
        r("goURI")(R, !0);
      } catch (e) {
        p("OpenAppIntent: navigation failed");
      }
    }
    function d(e, t, n, a) {
      if (a != null) {
        var i = o("WebBloksUtils").cast(navigator),
          l = i.getInstalledRelatedApps;
        if (l != null) {
          var s = !1,
            c = function (o) {
              s ||
                ((s = !0),
                window.setTimeout(function () {
                  e.executeCatch(n, [o, t]);
                }));
            },
            d = function () {
              s = !0;
            },
            m = window.setTimeout(d, u),
            p;
          try {
            p = l.call(i);
          } catch (e) {
            (window.clearTimeout(m), d());
            return;
          }
          r("promiseDone")(
            p,
            function (e) {
              window.clearTimeout(m);
              var t = e.find(function (e) {
                return e.platform === "play" && a.includes(e.id);
              });
              t != null ? c(t.id) : d();
            },
            function () {
              (window.clearTimeout(m), d());
            },
          );
        }
      }
    }
    l.default = c;
  },
  98,
);
