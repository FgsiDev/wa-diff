__d(
  "WAWebCryptoDecryptMedia",
  [
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebCommonTaskScheduler",
    "WAWebMediaFileErrors",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 10,
      _ = 3e3;
    async function f(t) {
      var n = t.ciphertextHmac,
        a = t.debugString,
        i = t.expectedPlaintextHash,
        l = t.mediaKeys,
        c = o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_media_decryption_enabled",
        );
      await r("WAWebCommonTaskScheduler").yield();
      var d = { mediaKeys: l };
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "decryptMedia: [",
              "] start",
            ])),
          a,
        ),
        n.byteLength < p)
      )
        throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
          "ciphertext too short: " + n.byteLength,
        );
      var m = l.encKey,
        _ = l.iv,
        f = l.macKey,
        b = o("WATypedArraysCast").castTypedArrays(Uint8Array, n);
      try {
        var v = o("WAWebABProps").getABPropConfigValue(
            "web_media_compute_in_worker_enabled",
          ),
          S = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            new Uint8Array(_),
            b.subarray(0, 0 - p),
          ]);
        return await (
          v
            ? y({ macKey: f, data: S, truncateLength: p })
            : o("WACryptoHmac").hmacSha256(f, S, p)
        )
          .then(async function (e) {
            var t = b.buffer.slice(0 - p);
            if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
              throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                "decryptMedia: " +
                  o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR,
              );
            c && (await r("WAWebCommonTaskScheduler").yield());
            var n = b.subarray(0, 0 - p);
            return v
              ? g({ encKey: m, iv: _, ciphertext: n })
              : h({ encKey: m, iv: _, ciphertext: n });
          })
          .then(async function (e) {
            if (i == null) return e;
            c && (await r("WAWebCommonTaskScheduler").yield());
            var t = v
              ? await C(e)
              : await o("WAMediaCalculateFilehash").calculateFilehash(e);
            if (t !== i)
              throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                "decryptMedia: " +
                  o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success",
                  ])),
                a,
              ),
              e
            );
          });
      } catch (e) {
        if (
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "decryptMedia: [",
                "] error",
              ])),
            a,
          ),
          e instanceof o("WAWebMediaFileErrors").MediaDecryptionError)
        )
          throw e;
        var R = r("getErrorSafe")(e);
        throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
          "decryption error: " + String(R) + "; stack: " + R.stack,
        );
      }
    }
    async function g(e) {
      var t = e.ciphertext,
        n = e.encKey,
        r = e.iv,
        a = await o("WAPromiseTimeout")
          .promiseTimeout(
            o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
            _,
            "[media][crypto] backend worker bridge timed out",
          )
          .catch(function (e) {
            if (e instanceof o("WACustomError").TimeoutError) return null;
            throw e;
          });
      if (a == null) {
        var i = o("WAWebABPropsCache").isABPropConfigsReady(),
          l = o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady();
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media][crypto] worker bridge timeout, fallback to main ",
                "",
              ])),
            { isABPropsReady: i, isBridgeReady: l },
          ),
          h({ encKey: n, iv: r, ciphertext: t })
        );
      }
      return a.sendAndReceive(
        "crypto",
        "aesCbcDecrypt",
        { encKey: n, iv: r, ciphertext: t },
        !1,
        void 0,
        void 0,
        [t.buffer],
      );
    }
    async function h(e) {
      var t = e.ciphertext,
        n = e.encKey,
        r = e.iv;
      return o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
    }
    async function y(e) {
      var t = e.data,
        n = e.macKey,
        r = e.truncateLength,
        a = await o("WAPromiseTimeout")
          .promiseTimeout(
            o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
            _,
            "[media][crypto] backend worker bridge timed out (hmac)",
          )
          .catch(function (e) {
            if (e instanceof o("WACustomError").TimeoutError) return null;
            throw e;
          });
      return a == null
        ? (o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[media][crypto] bridge timeout (hmac), main fallback",
              ])),
          ),
          o("WACryptoHmac").hmacSha256(n, t, r))
        : a.sendAndReceive(
            "crypto",
            "hmacSha256",
            { macKey: n, data: t, truncateLength: r },
            !1,
            void 0,
            void 0,
            [t.buffer],
          );
    }
    async function C(e) {
      var t = await o("WAPromiseTimeout")
        .promiseTimeout(
          o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
          _,
          "[media][crypto] backend worker bridge timed out (filehash)",
        )
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError) return null;
          throw e;
        });
      return t == null
        ? (o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[media][crypto] bridge timeout (filehash), main fallback",
              ])),
          ),
          o("WAMediaCalculateFilehash").calculateFilehash(e))
        : t.sendAndReceive("crypto", "sha256Base64", { data: e });
    }
    l.default = f;
  },
  98,
);
