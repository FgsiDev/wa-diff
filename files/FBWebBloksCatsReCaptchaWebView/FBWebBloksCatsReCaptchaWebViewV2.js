__d(
  "FBWebBloksCatsReCaptchaWebViewV2",
  [
    "ReCaptcha.react",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l;
      t[0] !== n
        ? ((l = n.getExpression("callback")), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] !== n
        ? ((c = n.get("captcha_client_config_name")), (t[2] = n), (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] !== i || t[5] !== n.styleId
        ? ((m = i(n.styleId)), (t[4] = i), (t[5] = n.styleId), (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { pointerEvents: "auto" }), (t[7] = p))
        : (p = t[7]);
      var _ = d != null ? d : void 0,
        f;
      t[8] !== u || t[9] !== a || t[10] !== n
        ? ((f = function (t) {
            u != null && a.executeCatch(n, u, [t]);
          }),
          (t[8] = u),
          (t[9] = a),
          (t[10] = n),
          (t[11] = f))
        : (f = t[11]);
      var g;
      t[12] !== _ || t[13] !== f
        ? ((g = s.jsx(r("ReCaptcha.react"), {
            captchaClientConfigName: _,
            onSolutionTokenReceived: f,
          })),
          (t[12] = _),
          (t[13] = f),
          (t[14] = g))
        : (g = t[14]);
      var h;
      return (
        t[15] !== m || t[16] !== g
          ? ((h = s.jsx(
              "div",
              babelHelpers.extends({}, m, { style: p, children: g }),
            )),
            (t[15] = m),
            (t[16] = g),
            (t[17] = h))
          : (h = t[17]),
        h
      );
    }
    l.default = u;
  },
  98,
);
