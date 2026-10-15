__d(
  "WAWebInteractiveNativeFlowOrderHeader",
  [
    "WAWebABProps",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebCurrencyUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebInteractiveOrderStatusHeader.react",
    "WAWebMastercardLogoIcon.react",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentPreview",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNativeFlowOrderDetailsHeader",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetailProductLabel",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentBoletoLogoIcon.react",
    "WAWebPaymentDetailsBubbleHeaderLoadable",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebPaymentsGatingUtils",
    "WAWebSimplifiedPaymentHeader.react",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paywithIcon: {
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          verticalAlign: "xxymvpz",
          width: "x1xp8n7a",
          height: "xlup9mm",
          $$css: !0,
        },
        iconDarkBackground: { backgroundColor: "xb1i3fl", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingAll4: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.interactiveHeader,
        n = e.preview,
        a = e.type;
      if (
        a === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        (t == null ? void 0 : t.thumbnail) != null
      )
        return "data:image/jpeg;base64," + t.thumbnail;
      if (n instanceof r("WAWebMediaOpaqueData")) return n.url();
    }
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(18),
        a = null,
        i = e.msgKey,
        l;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((l = [
          (u = o("WAWebMsgGetters")).getType,
          u.getNativeFlowName,
          u.getInteractiveType,
          u.getInteractivePayload,
          u.getNativeFlowButtons,
          u.getInteractiveHeader,
          o("WAWebFrontendMsgGetters").getMediaData,
          u.getIsSentByMe,
          o("WAWebFrontendMsgGetters").getSafeMsg,
        ]),
          (n[0] = l));
      } else l = n[0];
      var d = o("useWAWebMsgValues").useMsgValues(i, l),
        f = d[0],
        g = d[1],
        h = d[2],
        y = d[3],
        C = d[4],
        b = d[5],
        v = d[6],
        S = d[7],
        R = d[8],
        L =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(v, [
            o("WAWebMediaDataGetters").getPreview,
          ])) != null
            ? t
            : [null],
        E = L[0],
        k = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: y,
          interactiveType: h,
          nativeFlowButtons: C,
          nativeFlowName: g,
          type: f,
        }),
        I = _(R),
        T;
      n[1] !== R
        ? ((T = o("WAWebFrontendMsgGetters").getChat(R.unsafe())),
          (n[1] = R),
          (n[2] = T))
        : (T = n[2]);
      var D = T,
        x = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          D,
          k == null ? void 0 : k.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(k),
        );
      if (I == null) return null;
      if (g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        k && (a = p(I, k, S));
      else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (k) {
          var $ =
            f === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            (b == null ? void 0 : b.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(k) && !$)
            a = s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
              amount1000: k.totalAmount * 1e3,
              currency: k.currency,
              isSentByMe: S,
              payIcons: m(D, k),
              orderPaymentStatus: x,
              chat: D,
              isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(D, k),
              msg: I,
              paymentSettings: k.paymentSettings,
              displayType: e.displayType,
            });
          else {
            var P, N;
            ((P =
              (N = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : N.length) != null
              ? P
              : 0) === 0 && (x = null);
            var M;
            n[3] !== $ || n[4] !== i
              ? ((M = $
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msgKey: i,
                    })
                  : void 0),
                (n[3] = $),
                (n[4] = i),
                (n[5] = M))
              : (M = n[5]);
            var w = M,
              A;
            if (n[6] !== b || n[7] !== E || n[8] !== f) {
              var F;
              ((A =
                (F = c({ interactiveHeader: b, preview: E, type: f })) != null
                  ? F
                  : void 0),
                (n[6] = b),
                (n[7] = E),
                (n[8] = f),
                (n[9] = A));
            } else A = n[9];
            a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount({
                amount: k.totalAmount,
                currency: k.currency,
              }),
              documentPreview: w,
              quantity: k.quantity,
              orderId: k.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(k.items),
              numberOfItems: k.items.length,
              isSentByMe: S,
              thumbnail: A,
              payIcons: m(D, k),
              orderPaymentStatus: x,
            });
          }
        }
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var O;
        (n[10] !== i || n[11] !== e.displayType || n[12] !== e.quotedMsg
          ? ((O = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              { displayType: e.displayType, msgKey: i, quotedMsg: e.quotedMsg },
            )),
            (n[10] = i),
            (n[11] = e.displayType),
            (n[12] = e.quotedMsg),
            (n[13] = O))
          : (O = n[13]),
          (a = O));
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var B;
        (n[14] !== i || n[15] !== e.displayType || n[16] !== e.quotedMsg
          ? ((B = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
              displayType: e.displayType,
              msgKey: i,
              quotedMsg: e.quotedMsg,
            })),
            (n[14] = i),
            (n[15] = e.displayType),
            (n[16] = e.quotedMsg),
            (n[17] = B))
          : (B = n[17]),
          (a = B));
      }
      return a;
    }
    function m(e, t) {
      if (
        t == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "br_enable_payment_logos_on_bubble",
        ) ||
        !o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
      )
        return [];
      var n = [];
      if (e.contact.isEnterprise) {
        var r = o("WAWebThemeContext").isDarkTheme(),
          a = [
            u.paywithIcon,
            u.paddingAll4,
            u.marginStart4,
            r && u.iconDarkBackground,
          ];
        (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: a,
            }),
          ),
          o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(t) &&
            n.push(
              s.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                iconXstyle: a,
              }),
            ) &&
            n.push(
              s.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                iconXstyle: a,
              }),
            ),
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(t) &&
            n.push(
              s.jsx(
                o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon,
                { iconXstyle: a },
              ),
            ));
      } else {
        var i = [
          u.paywithIcon,
          u.paddingAll4,
          u.marginStart4,
          u.iconDarkBackground,
        ];
        o("WAWebOrderStatus").isSimplifiedOrder(t) &&
          o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: i,
            }),
          );
      }
      return n;
    }
    function p(e, t, n) {
      return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(
        e.unsafe(),
      )
        ? s.jsx(
            o("WAWebPaymentDetailsBubbleHeaderLoadable")
              .WAWebPaymentDetailsBubbleHeaderLoadable,
            { msgKey: e.id },
          )
        : s.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: n,
            orderInfo: t,
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
        ? e
        : null;
    }
    l.default = d;
  },
  98,
);
