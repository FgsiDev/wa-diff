__d(
  "WAWebSyncdDecryptMutationsWrapper",
  [
    "WALogger",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATextEncoding").newTextDecoder();
    function m(e, t) {
      return _(
        t.records.map(function (e) {
          return {
            record: e,
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
          };
        }),
        e,
      );
    }
    function p(e, t) {
      return _(t.mutations, e);
    }
    async function _(t, n) {
      return Promise.all(
        t.map(function (e) {
          return g(n, e.operation, e.record);
        }),
      ).catch(function (r) {
        if (r instanceof o("WAWebSyncdError").SyncdFatalError) {
          var a = t
              .filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              })
              .map(f),
            i = t
              .filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                );
              })
              .map(f);
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] decrypt fatal ",
                " SET=",
                " REMOVE=",
                "",
              ])),
            n,
            a,
            i,
          );
        }
        throw r;
      });
    }
    function f(e) {
      var t = o("WAWebSyncdCryptoUtils")
          .arrayBufferToHexPadded(e.record.index.blob)
          .slice(-16),
        n = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WAWebSyncdKeyTypes").fromSyncKeyId(e.record.keyId.id),
        );
      return "[keyId: " + n + ", mac: " + t + "]";
    }
    async function g(e, t, n) {
      var r = n.keyId.id,
        a = await o("WAWebSyncdKeyCache").getKeyData(r);
      if (!a) {
        if (
          t ===
          o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
        ) {
          var i = o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
            o("WAWebSyncdKeyTypes").fromSyncKeyId(r),
          );
          if (
            o("WAWebABProps").getABPropConfigValue(
              "web_request_missing_keys_for_removes",
            )
          )
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no key data for remove mutation with key id ",
                    "",
                  ])),
                i,
              ),
              new (o("WAWebSyncdError").SyncdMissingKeyError)()
            );
          var l = o("WAWebSyncdCryptoUtils")
            .arrayBufferToHexPadded(n.index.blob)
            .slice(-16);
          throw (
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] no key for REMOVE keyId=",
                  " mac=",
                  "",
                ])),
              i,
              l,
            ),
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "exception: no key data for remove mutations",
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(
              "no key data for remove mutations",
            )
          );
        }
        throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
      }
      try {
        var m = await o(
            "WAWebSyncdEncryptionManager",
          ).WASyncdEncryptionManager.decryptMutation(e, r, a, t, n),
          p = m.index,
          _ = m.indexMac,
          f = m.plaintext,
          g = m.valueMac,
          h = m.version;
        return {
          index: d.decode(p),
          version: h,
          keyId: r,
          operation: t,
          indexMac: _,
          valueMac: g,
          collection: e,
          binarySyncData: f,
        };
      } catch (e) {
        var y = e instanceof Error ? e.message : String(e);
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: decryption failed: ",
                  "",
                ])),
              y,
            )
            .sendLogs("syncd: decryption failed"),
          e
        );
      }
    }
    ((l.tryDecryptSnapshot = m), (l.tryDecryptPatch = p));
  },
  98,
);
