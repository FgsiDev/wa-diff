__d(
  "WebBloksCAAPKCEStore",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = null,
      l = null,
      s = 0;
    function u(e) {
      for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
      return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Uint8Array(32);
          crypto.getRandomValues(e);
          var t = u(e),
            n = yield crypto.subtle.digest(
              "SHA-256",
              new TextEncoder().encode(t),
            ),
            r = u(new Uint8Array(n));
          return { challenge: r, verifier: t };
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return ((s += 1), s);
    }
    function p(t, n) {
      return n !== s ? !1 : ((e = t), (l = n), !0);
    }
    function _() {
      return e;
    }
    function f() {
      if (l === s) {
        g();
        return;
      }
      ((e = null), (l = null));
    }
    function g() {
      ((e = null), (l = null), (s += 1));
    }
    ((i.generatePKCEPair = c),
      (i.beginPKCEMint = m),
      (i.writePKCE = p),
      (i.readPKCE = _),
      (i.clearPKCE = f),
      (i.invalidatePKCE = g));
  },
  66,
);
