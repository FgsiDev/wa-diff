__d(
  "WAWebNativeFlowMessage",
  [
    "fbt",
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebCopyToClipboard",
    "WAWebEmojiText.react",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebGetQuickPayAction",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveNativeFlowOrderHeader",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "WDSIconIcContentCopy.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["menu"],
      c,
      d = c || (c = o("react")),
      m = { marginBottom6: { marginBottom: "xzueoph", $$css: !0 } },
      p = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(41),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l,
        c;
      if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var _;
        t[0] !== i
          ? ((_ = o("WAWebOrderDetails").getOrderInfo(i)),
            (t[0] = i),
            (t[1] = _))
          : (_ = t[1]);
        var g = _;
        if (g) {
          var C;
          t[2] !== i
            ? ((C = o("WAWebMsgGetters").getIsSentByMe(i.unsafe())),
              (t[2] = i),
              (t[3] = C))
            : (C = t[3]);
          var b;
          (t[4] !== g || t[5] !== C
            ? ((b = d.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                isSentByMe: C,
                orderInfo: g,
              })),
              (t[4] = g),
              (t[5] = C),
              (t[6] = b))
            : (b = t[6]),
            (l = b));
          var v;
          t[7] !== i || t[8] !== g
            ? ((v = y(g, i)), (t[7] = i), (t[8] = g), (t[9] = v))
            : (v = t[9]);
          var S;
          (t[10] !== v ? ((S = [v]), (t[10] = v), (t[11] = S)) : (S = t[11]),
            (c = S));
        }
      } else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      )
        if (t[12] !== a || t[13] !== i) {
          var R = o("WAWebOrderDetails").getOrderInfo(i),
            L = R == null ? void 0 : R.referenceId,
            E =
              L != null &&
              o("WAWebOrderStatus").findOrderStatus(
                o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
                L,
              ) === o("WAWebOrderStatus").OrderStatus.Pending,
            k;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[16] = k))
            : (k = t[16]);
          var I;
          (t[17] !== a || t[18] !== i.id
            ? ((I = d.jsx(
                "div",
                babelHelpers.extends({}, k, {
                  children: d.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                    msgKey: i.id,
                    displayType: a,
                  }),
                }),
              )),
              (t[17] = a),
              (t[18] = i.id),
              (t[19] = I))
            : (I = t[19]),
            (l = I));
          var T;
          t[20] !== E
            ? ((T = E
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details")),
              (t[20] = E),
              (t[21] = T))
            : (T = t[21]);
          var D;
          (t[22] !== T
            ? ((D = { label: T, onClick: h }), (t[22] = T), (t[23] = D))
            : (D = t[23]),
            (c = [D]));
          var x = R == null ? void 0 : R.type;
          if (!o("WAWebMsgGetters").getIsSentByMe(i.unsafe())) {
            var $ = o("WAWebGetQuickPayAction").getQuickPayAction(i, x, !E);
            if ($ != null) {
              var P;
              if (t[24] !== $) {
                var N = $.menu,
                  M = babelHelpers.objectWithoutPropertiesLoose($, u);
                ((P = M), (t[24] = $), (t[25] = P));
              } else P = t[25];
              c.push(P);
            }
          }
          ((t[12] = a), (t[13] = i), (t[14] = l), (t[15] = c));
        } else ((l = t[14]), (c = t[15]));
      else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var w;
        t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
            (t[26] = w))
          : (w = t[26]);
        var A;
        (t[27] !== a || t[28] !== i.id
          ? ((A = d.jsx(
              "div",
              babelHelpers.extends({}, w, {
                children: d.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                  msgKey: i.id,
                  displayType: a,
                }),
              }),
            )),
            (t[27] = a),
            (t[28] = i.id),
            (t[29] = A))
          : (A = t[29]),
          (l = A));
      } else {
        var F;
        (t[30] !== i
          ? ((F = r("isStringNullOrEmpty")(i.title)
              ? null
              : d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: i.title,
                  selectable: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
                  direction: o("WAWebFrontendMsgGetters").getDir(i.unsafe()),
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(i.unsafe()) !==
                    r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [m.marginBottom6, p.headerTitle],
                })),
            (t[30] = i),
            (t[31] = F))
          : (F = t[31]),
          (l = F));
        var O;
        if (t[32] !== i.nativeFlowButtons) {
          var B;
          ((O = (B = i.nativeFlowButtons) == null ? void 0 : B.map(f)),
            (t[32] = i.nativeFlowButtons),
            (t[33] = O));
        } else O = t[33];
        c = O;
      }
      var W =
          i.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        q;
      return (
        t[34] !== c ||
        t[35] !== n ||
        t[36] !== a ||
        t[37] !== l ||
        t[38] !== i ||
        t[39] !== W
          ? ((q = d.jsx(r("WAWebInteractiveBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayFooter: W,
              header: l,
              displayType: a,
              actions: c,
            })),
            (t[34] = c),
            (t[35] = n),
            (t[36] = a),
            (t[37] = l),
            (t[38] = i),
            (t[39] = W),
            (t[40] = q))
          : (q = t[40]),
        q
      );
    }
    function f(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: g,
      };
    }
    function g() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function h() {
      return r("WAWebShowMessageActionFallbackErrorAction")({
        title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
          s._implicitParam(
            "=m1",
            d.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        body: s._(/*BTDS*/ "Use WhatsApp on your phone to view this order."),
      });
    }
    function y(e, t) {
      var n = e.paymentSettings;
      return {
        label: s._(/*BTDS*/ "Copy Pix key"),
        onClick: function () {
          var e,
            r,
            a =
              n == null ||
              (e = n.at(0)) == null ||
              (e =
                e[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ]) == null
                ? void 0
                : e.key,
            i = o("WAWebUserPrefsTypes").PixKeyType.cast(
              n == null ||
                (r = n.at(0)) == null ||
                (r =
                  r[
                    o("WAWebBizOrderDetailsParams").PaymentSettingType
                      .PIX_STATIC_CODE
                  ]) == null
                ? void 0
                : r.keyType,
            );
          if (
            a == null ||
            !o("WAWebCopyToClipboard").copyTextToClipboard(
              o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(a, i),
            )
          ) {
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't copy Pix key"),
              }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Pix key copied"),
            }),
          ),
            C(t));
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function C(t) {
      var n;
      if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
        var a = r("WAWebPonyfillsCryptoRandomUUID")(),
          i = (n = t.senderObj) == null ? void 0 : n.id.toJid(),
          l = o("WAWebContactUtils").getMaybeBizPlatformForLogging(i),
          s = l === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
          u = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
          c = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(u.id)
          ].toLowerCase(),
          d = new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: s
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : l,
            businessOwnerJid: i,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              s
                ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chat_type: c,
                    is_cta_available: !0,
                    accepted_payment_method: ["pix"],
                    payment_method_choice: "pix",
                    order_funnel_id: a,
                    referral: "chat_attachment",
                  }
                : { order_funnel_id: a },
            ),
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.COPY_PIX_KEY,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          });
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["CopyPixKey Log"])),
        ),
          d.commit(),
          o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
            isLoggingEnabled: o(
              "WAWebBizFrontendGatingUtils",
            ).isCopyPixKeyBuyerLoggingEnabled(i),
            psFunnelId: a,
            attributes: s
              ? {
                  cta: "p2p_pix",
                  flow: "P2P",
                  chatType: c,
                  isCtaAvailable: !0,
                  acceptedPaymentMethod: ["pix"],
                  paymentMethodChoice: "pix",
                  referral: "chat_attachment",
                }
              : {
                  cta: "copy_pix_key",
                  isCtaAvailable: !0,
                  paymentMethodChoice: "pix",
                  p2pFlow: "PIX_KEY",
                  currency: "BRL",
                  isTemplate: !1,
                  acceptedPaymentMethod: ["pix"],
                  messageType: "payment_info",
                  chatType: c,
                },
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .COPY_PIX_KEY,
            bizPlatform: s
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : l,
          }));
      }
    }
    l.default = _;
  },
  226,
);
