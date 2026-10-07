__d(
  "WAWebBotMessageSecret",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMsgSecretError",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsmsgMsgSecretCache",
    "WAWebOrphanBotMsgError",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 32,
      f = "Bot Message";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e).readByteArrayView(),
            n = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              f,
              _,
            );
          return n;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.msgInfo.author.isFbidBot() ? S(e, t) : b(e, t);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l = n.msgInfo,
            s = n.msgMeta,
            u = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              t,
            ),
            c = s.targetSenderJid
              ? o("WAWebUserPrefsMeUser").isMeAccount(s.targetSenderJid)
              : !0,
            d = {
              fromMe: c,
              remote: (a = s.targetChatJid) != null ? a : l.chat,
              id: r("nullthrows")(
                s.targetId,
                "decryptMsmsgBotMessage: targetId",
              ),
            };
          l.chat.isGroup() && (d.participant = s.targetSenderJid);
          var m = yield L(d, l),
            p = o("WAWebWidToJid").widToUserJid(
              (i = s.targetSenderJid) != null
                ? i
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            ),
            _ = o("WAWebWidToJid").widToUserJid(
              r("nullthrows")(l.author, "decryptMsmsgBotMessage: author"),
            ),
            f = null,
            g = r("nullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"),
            h = r("nullthrows")(
              u.encPayload,
              "decryptMsmsgBotMessage: encPayload",
            );
          try {
            var y = l.externalId,
              C = yield x({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: y,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(C, g, h, y + "\0" + _);
          } catch (t) {
            var b;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptMsmsgBotMessage: fallback to botEditTargetId: ",
                  "",
                ])),
              t,
            );
            var v = r("nullthrows")(
                (b = n.msgBotInfo) == null ? void 0 : b.botEditTargetId,
                "decryptMsmsgBotMessage: botEditTargetId",
              ),
              S = yield x({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: v,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(S, g, h, v + "\0" + _);
          }
          return f;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i = t.msgBotInfo,
            l = t.msgInfo,
            c = t.msgMeta,
            d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            m = (a = c.targetSenderJid) != null ? a : d,
            p = {
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(m),
              remote: l.chat,
              id: r("nullthrows")(
                c.targetId,
                "decryptMsmsgFbidBotMessage: targetId",
              ),
            };
          if (l.chat.isGroup()) {
            var _;
            p.participant =
              (_ = o("WAWebLidMigrationUtils").toPn(m)) != null ? _ : m;
          }
          var f = yield L(p, l),
            g = l.externalId,
            h = null;
          ((i == null ? void 0 : i.botEditType) ===
            o("WAWebBotTypes").BotMsgEditType.INNER ||
            (i == null ? void 0 : i.botEditType) ===
              o("WAWebBotTypes").BotMsgEditType.LAST) &&
            ((i == null ? void 0 : i.botEditTargetId) != null
              ? ((g = i == null ? void 0 : i.botEditTargetId),
                (h = l.externalId))
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[decryptMsmsgFbidBotMessage] fallback\u2192externalId edit=",
                      "",
                    ])),
                  i == null ? void 0 : i.botEditType,
                ));
          var y = l.metaFrom,
            C = o("WAWebWidToJid").widToUserJid(
              y != null &&
                l.author != null &&
                l.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
                ? y
                : r("nullthrows")(
                    l.author,
                    "decryptMsmsgFbidBotMessage: author",
                  ),
            ),
            b = o("WAWebWidToJid").widToUserJid(m),
            v = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            S = v.encIv,
            R = v.encPayload,
            E = r("nullthrows")(S, "decryptMsmsgFbidBotMessage: encIv"),
            k = r("nullthrows")(R, "decryptMsmsgFbidBotMessage: encPayload");
          function I(e) {
            return T.apply(this, arguments);
          }
          function T() {
            return (
              (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                var t = yield x({
                  decryptSecret: f,
                  messageSecretOriginalUserJid: b,
                  senderJid: C,
                  stanzaId: e,
                });
                return o("WACryptoAesGcm").gcmDecrypt(t, E, k, e + "\0" + C);
              })),
              T.apply(this, arguments)
            );
          }
          try {
            var D = yield I(g);
            return D;
          } catch (e) {
            if (h == null) throw e;
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[decryptMsmsgFbidBotMessage] gcmDecrypt failed primaryStanzaId=",
                    ", fallback\u2192externalId=",
                    ": ",
                    "",
                  ])),
                g,
                h,
                String(e),
              ),
              I(h)
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = new (r("WAWebMsgKey"))(e),
            i = a.toString(),
            l =
              (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(a)) == null
                ? void 0
                : n.toString(),
            s = T(i, l);
          if (s != null) return g(s);
          var u = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([i, l].filter(Boolean)),
            _ = u[0],
            f = u[1],
            h = _ != null ? _ : f;
          if (h == null)
            throw k(t)
              ? (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(i, "no-target-row"))
              : (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row and orphan handling is off",
                      ])),
                  )
                  .tags("messaging")
                  .sendLogs("bot-msmsg-no-target-row", { sampling: 0.01 }),
                new (r("WAWebBotMsgSecretError"))(
                  "decryptMsmsgBotMessage: no target row for the message secret",
                ));
          var y = o("WAWebDBMessageSerialization").messageFromDbRow(h);
          if (o("WAWebCommonMsgUtils").isPlaceholderMsg(y.type) && k(t)) {
            var C =
              _ != null && f != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(f)
                : null;
            if (C == null || o("WAWebCommonMsgUtils").isPlaceholderMsg(C.type))
              throw (
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] placeholder target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(i, "placeholder-target-row")
              );
            y = C;
          }
          D(i, y);
          var b = y.messageSecret;
          if (b == null)
            throw I(t)
              ? (o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] target row without a secret, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(i, "secretless-target-row"))
              : new (r("WAWebBotMsgSecretError"))(
                  "decryptMsmsgBotMessage: decryptSecretBase",
                );
          return g(b);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I(e) || o("WAWebBotGating").isBotOrphanMsgEnabled();
    }
    function I(e) {
      return (
        e.chat.isGroup() &&
        e.author.isBot() &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function T(e, t) {
      var n = o(
        "WAWebMsmsgMsgSecretCache",
      ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(e);
      return n != null || t == null
        ? n
        : o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(t);
    }
    function D(e, t) {
      var n,
        r = t.botGroupParticipant;
      if (
        r != null &&
        !(
          ((n = t.id.remote) == null ? void 0 : n.isGroup()) !== !0 ||
          !o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(r)
        )
      ) {
        var a = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
          t.botGroupParticipants,
          r,
        );
        a != null &&
          o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
            e,
            a.participants,
            a.isLegacySingular,
          );
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.decryptSecret,
            n = e.messageSecretOriginalUserJid,
            r = e.senderJid,
            a = e.stanzaId,
            i = o("WABinary").Binary.build(a, n, r).readBuffer(),
            l = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              i,
              _,
            );
          return l;
        })),
        $.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = g),
      (l.decryptMsmsgBotMessage = y),
      (l.genBotDecryptionKey = x));
  },
  98,
);
