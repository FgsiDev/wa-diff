__d(
  "FBPayVerifyCertChain",
  [
    "XPlatReactCrypto",
    "asyncToGeneratorRuntime",
    "err",
    "promiseWithTimeout",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("FBPayVerifyCertChainPkiJS").__setRef(
        "FBPayVerifyCertChain",
      ),
      s = 1e4;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield r("promiseWithTimeout")(e.load(), { timeout: s });
          if (a == null)
            throw r("err")(
              "verifyCertificateChain: timed out loading FBPayVerifyCertChainPkiJS",
            );
          var i = yield a(t, n),
            l = i.jwk,
            u = i.keyType;
          if (u === "EC")
            return yield o("XPlatReactCrypto").subtleImportKeyJwk(
              l,
              { name: "ECDSA", namedCurve: "P-256" },
              !1,
              ["verify"],
            );
          if (u === "RSA")
            return yield o("XPlatReactCrypto").subtleImportKeyJwk(
              l,
              { hash: "SHA-256", name: "RSA-PSS" },
              !1,
              ["verify"],
            );
          throw r("err")(
            "verifyCertificateChain: unsupported leaf key type " + u,
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.verifyCertificateChain = u;
  },
  98,
);
