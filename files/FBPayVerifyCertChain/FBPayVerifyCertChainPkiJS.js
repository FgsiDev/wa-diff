__d(
  "FBPayVerifyCertChainPkiJS",
  [
    "asyncToGeneratorRuntime",
    "base64Binary",
    "err",
    "promiseWithTimeout",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "FBPayVerifyCertChainPkiJS",
      ),
      s = r("requireDeferred")("pkijs").__setRef("FBPayVerifyCertChainPkiJS"),
      u = 1e4,
      c = "2.5.29.19";
    function d(e) {
      var t,
        n,
        r =
          (t = e.extensions) == null
            ? void 0
            : t.find(function (e) {
                return e.extnID === c;
              });
      return (r == null || (n = r.parsedValue) == null ? void 0 : n.cA) === !0;
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.length === 0)
            throw r("err")("verifyCertChainPkiJS: empty certificate chain");
          var a = yield r("promiseWithTimeout")(e.load(), { timeout: u });
          if (a == null)
            throw r("err")("verifyCertChainPkiJS: timed out loading asn1js");
          var i = yield r("promiseWithTimeout")(s.load(), { timeout: u });
          if (i == null)
            throw r("err")("verifyCertChainPkiJS: timed out loading pkijs");
          var l = typeof a == "function" ? a().fromBER : a.fromBER,
            c = function (t) {
              var e = o("base64Binary").decode(t),
                n = new ArrayBuffer(e.byteLength);
              return (
                new Uint8Array(n).set(e),
                new i.Certificate({ schema: l(n).result })
              );
            },
            m = c(n),
            p = t.map(c);
          if (d(p[0]))
            throw r("err")(
              "verifyCertChainPkiJS: leaf certificate is a CA, not an end entity",
            );
          var _ = new i.CertificateChainValidationEngine({
              certs: p.slice().reverse(),
              trustedCerts: [m],
            }),
            f = yield _.verify();
          if (f.result !== !0)
            throw r("err")(
              "verifyCertChainPkiJS: chain did not validate to the trust anchor: " +
                f.resultMessage,
            );
          var g = p[0].subjectPublicKeyInfo;
          if (g == null)
            throw r("err")(
              "verifyCertChainPkiJS: leaf certificate has no public key",
            );
          if (g.toJSON == null)
            throw r("err")(
              "verifyCertChainPkiJS: leaf public key is not serializable",
            );
          var h = g.toJSON();
          if (h.kty == null)
            throw r("err")(
              "verifyCertChainPkiJS: leaf public key has no key type",
            );
          return { jwk: h, keyType: h.kty };
        })),
        p.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
