__d(
  "WAWebApplyBrazilPaymentStateUpdates",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebBrazilPaymentStateUpdateRules",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebFindBrazilPaymentRequestMsg",
    "WAWebHandleSingleMsg",
    "WAWebHideBrazilPaymentReceiptImage",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 1e3,
      f = /^[A-Za-z0-9-]{1,64}$/;
    function g(t) {
      return t.reduce(function (t, n) {
        return t.then(function (t) {
          return h(n)
            .catch(function (t) {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[br-payment-state] failed to apply an update",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("br-payment-state-apply-failed"),
                !1
              );
            })
            .then(function (e) {
              return t && e;
            });
        });
      }, Promise.resolve(!0));
    }
    async function h(e) {
      var t = o(
        "WAWebBrazilPaymentStateUpdatePayload",
      ).getBrazilPaymentStateUpdate(e);
      if (t == null) return !0;
      var n = await o(
          "WAWebFindBrazilPaymentRequestMsg",
        ).findBrazilPaymentRequestMsg(e.id.remote, t.paymentMsgId),
        r = n.paymentMsg;
      if (r == null) return !n.isPending;
      var a = e.id.fromMe === r.id.fromMe;
      if (!o("WAWebBrazilPaymentStateUpdateRules").isAllowedStatusUpdate(t, a))
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] rejecting a status only the requester can set",
              ])),
          ),
          !0
        );
      var i = o("WAWebBrazilPaymentStateUpdateRules").hasAcceptedReceiptUpdate(
          t,
          a,
        ),
        l = o("WAWebBrazilPaymentStateUpdateRules").getUpdateTimestampMs(
          t,
          E(e) * _,
        ),
        c = await o("WAWebBrazilPaymentStateDb").updateStoredBrazilPaymentState(
          r.id,
          function (e) {
            return o(
              "WAWebBrazilPaymentStateUpdateRules",
            ).getNextBrazilPaymentState(e, t, a, l);
          },
        );
      return c == null
        ? (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not write the update to the payment message",
                ])),
            )
            .sendLogs("br-payment-state-write-failed"),
          !1)
        : (y(r.id, c.updatedPayload),
          i &&
            (await C({
              paymentMsgKey: r.id,
              update: t,
              updateMsg: e,
              write: c,
            })),
          !0);
    }
    function y(e, t) {
      t != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "updateBrazilPaymentStateMsgs",
          { updates: [{ msgKey: e, interactivePayload: t }] },
        );
    }
    async function C(e) {
      var t = e.paymentMsgKey,
        n = e.update,
        r = e.updateMsg,
        a = e.write,
        i = n.receiptMsgId;
      i != null &&
        (await o(
          "WAWebHideBrazilPaymentReceiptImage",
        ).hideBrazilPaymentReceiptImage(r.id.remote, r.id.fromMe, i),
        R(r, a, i) &&
          (await v({
            chatId: r.id.remote,
            paymentMsgKey: t,
            receiptMsgId: i,
            t: E(r),
          })));
    }
    function b(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !1,
        remote: e,
        id: "BRRECEIPTADDED" + t,
      });
    }
    async function v(e) {
      var t = e.chatId,
        n = e.paymentMsgKey,
        a = e.receiptMsgId,
        i = e.t,
        l = b(t, a);
      try {
        if (await S(l)) return;
        var s = o("WAWebContactSystemMsg").genNotificationMsg(t, {
          id: l,
          type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
          kind: o("WAWebMsgType").MsgKind.Notification,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .BrazilPaymentReceiptAdded,
          templateParams: [n.toString()],
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: i,
        });
        if (
          (await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
            chatId: t,
            newMsg: s,
            handleSingleMsgOrigin: "brazilPaymentReceiptAdded",
          }),
          !(await S(l)))
        ) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] the receipt notice was not stored",
                ])),
            )
            .sendLogs("br-payment-state-receipt-notice-not-stored");
          return;
        }
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[br-payment-state] added the receipt notice",
            ])),
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not add the receipt notice",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-receipt-notice-failed");
      }
    }
    async function S(e) {
      var t = await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(
          [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)]
            .filter(Boolean)
            .map(String),
          !1,
        );
      return t.some(Boolean);
    }
    function R(e, t, n) {
      var o = t.next;
      return (
        !e.id.fromMe && o.receiptMsgId === n && L(n) && r("justknobx")._("6447")
      );
    }
    function L(e) {
      return f.test(e)
        ? !0
        : (o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] no receipt notice for an unexpected receipt id",
                ])),
            )
            .sendLogs("br-payment-state-receipt-notice-bad-id"),
          !1);
    }
    function E(e) {
      var t;
      return (t = e.t) != null ? t : o("WATimeUtils").unixTime();
    }
    ((l.applyBrazilPaymentStateUpdates = g), (l.getReceiptAddedNoticeKey = b));
  },
  98,
);
