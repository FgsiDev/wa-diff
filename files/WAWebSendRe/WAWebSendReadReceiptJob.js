__d(
  "WAWebSendReadReceiptJob",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebCoexV2SendReceipt",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebHandlePlaceholderWam",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterStatusViewReceiptUtils",
    "WAWebPrivacySettings",
    "WAWebQbmMessageReadLogEvent",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumReadSource",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
    function p(e) {
      return e == null || e <= 0 ? null : e;
    }
    function _(e, t) {
      return e.isNewsletter() ||
        (e.isStatus() && t != null && t.isPSA()) ||
        r("WAWebWid").isPSA(e)
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
        : e.isGroup()
          ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
          : o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts ===
              o("WAWebPrivacySettings").ALL_NONE.none
            ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF
            : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ;
    }
    function f(e) {
      return e.isGroup() &&
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts !==
          o("WAWebPrivacySettings").ALL_NONE.none &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF;
    }
    function g(e) {
      var t = e.botEditType,
        n = e.chat,
        r = e.sender;
      return (
        (t === o("WAWebBotTypes").BotMsgEditType.FIRST ||
          t === o("WAWebBotTypes").BotMsgEditType.INNER) &&
        n.isGroup() &&
        r.isBot() &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    async function h(t, n, a) {
      o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["markChatRead"])),
      );
      var i = Date.now().toString(),
        l = String(t.id),
        s = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryPendingReadReceiptMsgRows(l, a);
      s.sort(function (e, t) {
        var n = e.rowId || 0,
          r = t.rowId || 0;
        return n - r;
      });
      var u = n ? String(n) : null,
        c = s.length - 1;
      if (u) {
        for (c; c >= 0 && s[c].id !== u; c--);
        c < 0 && (c = s.length - 1);
      }
      var d = null,
        m = [];
      for (c; c >= 0; c--) {
        var h = s[c],
          y = t.msgs.get(h.id);
        (y &&
          r("WAWebWid").isPSA(t.id) &&
          o("WAWebWamChatPSALogger").logChatPSARead(y),
          y &&
            o("WAWebQbmMessageReadLogEvent").logQbmMessageRead({
              msg: y,
              chat: t,
              readSource: o("WAWebWamEnumReadSource").READ_SOURCE.CHAT,
            }),
          h.rowId != null && (d == null || h.rowId > d) && (d = h.rowId));
        var C = r("WAWebMsgKey").fromString(h.id);
        if (h.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityViewEvent([h]);
          continue;
        }
        if (h.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
          var v = h.broadcastId || h.from,
            S = h.author || h.from;
          m.push({
            id: C.id,
            sender: o("WAWebWidFactory").createWidFromWidLike(S),
            senderWithDevice:
              h.senderWithDevice != null
                ? o("WAWebWidFactory").createWidFromWidLike(h.senderWithDevice)
                : null,
            metaFrom:
              h.metaFrom != null
                ? o("WAWebWidFactory").createWidFromWidLike(h.metaFrom)
                : null,
            chat: o("WAWebWidFactory").createWidFromWidLike(v),
            serverStoreTimeMicros: p(h.serverStoreTimeMicros),
            botEditType: h.botEditType,
          });
        }
      }
      var R = L(
          t.id,
          m.filter(function (e) {
            return !g(e);
          }),
        ),
        k = R.coexV2Reads,
        I = R.coexV2Recipient,
        T = R.regularReads,
        D = b(T),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3];
      return (
        await Promise.all(
          [].concat(
            Array.from(x.keys(), function (e) {
              var n = x.get(e);
              if (n) {
                var r;
                return (
                  t.trusted
                    ? (r = _(t.id))
                    : (r = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                        .READ_SELF),
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: e,
                    type: r,
                    t: i,
                    groupedReceipt: n,
                    threadId: o("WAWebBotUtils").isMetaAiBot(t.id) ? a : void 0,
                    maxStsByAuthor: P.get(e),
                  })
                );
              }
            }),
            Array.from($.keys(), function (e) {
              var t = $.get(e);
              if (t)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: f(e),
                  t: i,
                  groupedReceipt: t,
                  maxStsByAuthor: N.get(e),
                });
            }),
          ),
        ),
        await E({
          chatId: t.id,
          coexV2Reads: k,
          coexV2Recipient: I,
          t: i,
          trusted: t.trusted,
        }),
        o("WAWebApiChat").markMessageAndChatAsRead({
          lastReadRowId: d,
          chatId: l,
          keepChatUnread: !1,
          threadId: a,
        })
      );
    }
    async function y(e, t, n) {
      var a = e.id;
      if (!o("WAWebMsgGetters").getIsStatus(e)) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "markStatusRead: message is not a status.",
            ])),
        );
        return;
      }
      var i = o("WAWebMsgGetters").getIsNewsletterStatus(e),
        l = o("WAWebMsgGetters").getIsGroupStatus(e) || i ? e.id.remote : m,
        c = a.fromMe && !r("justknobx")._("5152"),
        d = (n == null || n.sendReceipt === !0) && !c;
      if (d) {
        var p = i ? l : r("nullthrows")(a.participant);
        if (
          (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: l,
            type: _(l, i ? void 0 : p),
            t: String(t),
            receiptClass: i ? "status" : void 0,
            isStatusReceipt: !0,
            groupedReceipt: new Map([[p, [a.id]]]),
          }),
          i)
        ) {
          var f = e.serverId;
          f != null &&
            o("WAWebNewsletterStatusViewReceiptUtils")
              .sendNewsletterStatusViewReceipt(l, a, f)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] view receipt send failed",
                      ])),
                  )
                  .sendLogs("newsletter-status-view-receipt-fail");
              });
        }
      }
      var g = { ack: o("WAWebAck").ACK.READ };
      a.participant && a.participant.isPSA() && (g.statusPSAReadTimestamp = t);
      var h = [babelHelpers.extends({ id: a.toString() }, g)],
        y = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
      (y && h.push(babelHelpers.extends({ id: y.toString() }, g)),
        await o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(h));
    }
    async function C(e) {
      var t = String(o("WATimeUtils").unixTime()),
        n = b(
          e
            .filter(function (e) {
              return !o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender);
            })
            .map(function (e) {
              return {
                chat: e.msgKey.remote,
                sender: o("WAWebWidFactory").createWidFromWidLike(e.sender),
                id: e.msgKey.id,
              };
            }),
        ),
        r = n[0];
      await Promise.all(
        Array.from(r.keys(), function (e) {
          var n = r.get(e);
          if (n)
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
              t,
              groupedReceipt: n,
            });
        }),
      );
    }
    function b(e) {
      var t = new Map(),
        n = new Map(),
        r = new Map(),
        o = new Map();
      return (
        e.forEach(function (e) {
          var a,
            i,
            l = e.chat,
            s = e.id,
            u = e.sender,
            c = e.serverStoreTimeMicros,
            d = !l.isBot() && u.isBot(),
            m = d ? n : t,
            p = d ? o : r,
            _ = (a = m.get(l)) != null ? a : new Map(),
            f = (i = _.get(u)) != null ? i : [];
          if ((f.push(s), _.set(u, f), m.set(l, _), c != null && c > 0)) {
            var g,
              h,
              y = (g = p.get(l)) != null ? g : new Map(),
              C = (h = y.get(u)) != null ? h : 0;
            (c > C && y.set(u, c), p.set(l, y));
          }
        }),
        [t, n, r, o]
      );
    }
    async function v(e, t, n) {
      var a = String(e),
        i = o("WAWebBotUtils").isMetaAiBot(e),
        l = await o(
          "WAWebDBPendingReadReceiptQueries",
        ).queryUnreadEditedMsgRows(a, i ? n : void 0);
      if (!l.length) return { fullyReadThreadIds: [] };
      var s = new Set(),
        u = l.map(function (t) {
          var a = r("WAWebMsgKey").fromString(t.latestEditMsgKey),
            i = t.author || t.from;
          if (n == null)
            for (var l of o("WAWebDBMessageUtils").getThreadIdsFromMessage(t))
              s.add(l.toString());
          else s.add(n.toString());
          return {
            id: a.id,
            sender: o("WAWebWidFactory").createWidFromWidLike(i),
            senderWithDevice:
              t.senderWithDevice != null
                ? o("WAWebWidFactory").createWidFromWidLike(t.senderWithDevice)
                : null,
            metaFrom:
              t.metaFrom != null
                ? o("WAWebWidFactory").createWidFromWidLike(t.metaFrom)
                : null,
            chat: o("WAWebWidFactory").createWidFromWidLike(e),
            serverStoreTimeMicros: p(t.serverStoreTimeMicros),
            botEditType: t.botEditType,
          };
        }),
        c = L(
          e,
          u.filter(function (e) {
            return !g(e);
          }),
        ),
        d = c.coexV2Reads,
        m = c.coexV2Recipient,
        h = c.regularReads,
        y = b(h),
        C = y[0],
        v = y[1],
        S = y[2],
        R = y[3],
        k = C.get(e),
        I = v.get(e),
        T = Date.now().toString();
      if (k) {
        var D;
        (t.trusted
          ? (D = _(e))
          : (D = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF),
          await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
            to: e,
            type: D,
            t: T,
            groupedReceipt: k,
            threadId: o("WAWebBotUtils").isMetaAiBot(e) ? n : void 0,
            maxStsByAuthor: S.get(e),
          }));
      }
      (I &&
        (await o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
          to: e,
          type: f(e),
          t: T,
          groupedReceipt: I,
          maxStsByAuthor: R.get(e),
        })),
        await E({
          chatId: e,
          coexV2Reads: d,
          coexV2Recipient: m,
          t: T,
          trusted: t.trusted,
        }));
      var x = l.map(function (e) {
          return r("WAWebMsgKey").fromString(e.latestEditMsgKey);
        }),
        $ = await o("WAWebApiChat").markEditedMessageAndChatAsRead({
          chatId: e,
          readMsgKeys: x,
          threadId: n,
        });
      return $;
    }
    function S(e) {
      return (
        e.senderWithDevice != null &&
        e.senderWithDevice.equals(
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ) &&
        e.metaFrom != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom)
      );
    }
    function R(e) {
      var t = null;
      for (var n of e) {
        var r = n.serverStoreTimeMicros;
        r != null && (t == null || r > t) && (t = r);
      }
      return t;
    }
    function L(e, t) {
      var n = { coexV2Reads: [], coexV2Recipient: null, regularReads: t };
      if (
        !t.some(S) ||
        !e.isUser() ||
        e.isBot() ||
        o("WAWebUserPrefsMeUser").isSerializedWidMe(String(e)) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      )
        return n;
      var a;
      try {
        a = r("nullthrows")(
          o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(e),
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] no represented LID for the read receipt",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-read-receipt-lid-unresolved"),
          n
        );
      }
      var i = [],
        l = [];
      for (var s of t) S(s) ? i.push(s) : l.push(s);
      return { coexV2Reads: i, coexV2Recipient: a, regularReads: l };
    }
    async function E(e) {
      var t = e.chatId,
        n = e.coexV2Reads,
        a = e.coexV2Recipient,
        i = e.t,
        l = e.trusted;
      if (!(a == null || n.length === 0))
        try {
          await o("WAWebCoexV2SendReceipt").sendCoexV2ReadReceipt({
            externalIds: n.map(function (e) {
              return e.id;
            }),
            isReadSelf:
              !l ||
              _(t) === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF,
            maxSts: R(n),
            recipient: a,
            t: i,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to send read receipt",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-read-receipt-error");
        }
    }
    ((l.getReadReceiptType = _),
      (l.getAgentReadReceiptType = f),
      (l.markChatRead = h),
      (l.markStatusRead = y),
      (l.sendAddOnReadReceipts = C),
      (l.groupMsgIdsByChatThenSender = b),
      (l.markEditedMsgsRead = v));
  },
  98,
);
