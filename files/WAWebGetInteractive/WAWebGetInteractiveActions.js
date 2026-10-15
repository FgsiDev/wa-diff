__d(
  "WAWebGetInteractiveActions",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailAction",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrAddPixKeyMessageGating",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebBrAddPixKeySavedMarker",
    "WAWebBrOptionsToPayActions",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBrSenderPixKeyAttribution",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebExternalLink.react",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveCtaActions",
    "WAWebGetMessageWithLinkAction",
    "WAWebGetQuickPayAction",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderExpansionAction",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentDetailsBubbleActions",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentsGatingUtils",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.canCompose,
        n = e.msg,
        a = e.orderPaymentStatus,
        i = a === void 0 ? null : a,
        l = e.uimContext,
        s = n.interactivePayload,
        u = n.interactiveType,
        c = n.nativeFlowName;
      if (!s) return null;
      var _ = [];
      switch (u) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT: {
          var f = s;
          _.push(y(f));
          break;
        }
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (
            typeof t == "boolean" &&
            (t || c === r("WAWebInteractiveMessagesNativeFlowName").CTA_URL)
          ) {
            if (
              c === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ) {
              var b = o("WAWebOrderDetails").getOrderInfo(n);
              if (!b) return null;
              _.push.apply(_, C(n, b));
            } else if (
              c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ) {
              var v,
                S = o("WAWebOrderDetails").getOrderInfo(n);
              if (!S) return null;
              var R = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
                L = o("WAWebOrderStatus").findOrderStatus(R, S.referenceId),
                E = o("WAWebOrderExpansionAction").getOrderUpdateStatusAction({
                  chat: R,
                  msg: n,
                  orderInfo: S,
                  orderStatus: L,
                  uimContext: l,
                });
              E && _.push(E);
              var k = L === o("WAWebOrderStatus").OrderStatus.Pending,
                I = i == null;
              if (
                (R.contact.isEnterprise ||
                  ((v = R.contact) == null ? void 0 : v.isHosted) === !0) &&
                o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(R)
              ) {
                var T = I ? p(S, n, R) : [g(n, l, !0)];
                T.length === 0 ? _.push(g(n, l, !k)) : _.push.apply(_, T);
              } else if (o("WAWebOrderStatus").isPaymentRequest(R, S)) {
                var D = h(n, S);
                D != null && _.push(D);
              } else {
                var x = null;
                (o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(R) &&
                  o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(S) &&
                  (x = o(
                    "WAWebGetBrazilnteractiveActions",
                  ).getCopyPixStaticCodeInteractiveAction(n, S)),
                  _.push(x != null ? x : g(n, l, !k)));
              }
              if (!o("WAWebMsgGetters").getIsSentByMe(n)) {
                var $ = o("WAWebGetQuickPayAction").getQuickPayAction(
                  n,
                  S.type,
                  !k,
                );
                $ && _.push($);
              }
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK
            ) {
              var P = o(
                "WAWebGetMessageWithLinkAction",
              ).getOpenMessageWithLinkAction(n);
              P && _.push(P);
            } else if (
              c ===
              r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT
            ) {
              var N = d(n);
              N && _.push(N);
            }
            if (
              c != null &&
              o(
                "WAWebBizTemplateAndInteractiveMessagesUtils",
              ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(c)
            ) {
              var M = o(
                "WAWebGetInteractiveCtaActions",
              ).getNativeFlowCtasFromInteractiveMsg(n);
              M != null && _.push.apply(_, m(M, n));
            }
          }
          break;
        case r("WAWebInteractiveMessageType").CAROUSEL:
          break;
      }
      return _;
    }
    function d(e) {
      if (e.id.fromMe || !o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled())
        return null;
      var t = o("WAWebBrAddPixKeyMessageOffer").getAddPixKeyMessageOffer(e);
      return t == null
        ? null
        : o("WAWebBrAddPixKeyMessageOffer").isAddPixKeyMessageOfferSaved(e)
          ? {
              label: s._(/*BTDS*/ "View Pix key"),
              onClick: function () {
                o(
                  "WAWebBrAddPixKeyMessageGating",
                ).isAddPixKeyMessageEnabled() &&
                  o(
                    "WAWebBrSavePartnerPixKeyFeature",
                  ).openSavedPixKeyFromMessage();
              },
              testid: "br_view_pix_key_message_action",
            }
          : {
              label: s._(/*BTDS*/ "Add Pix key"),
              onClick: function () {
                o(
                  "WAWebBrAddPixKeyMessageGating",
                ).isAddPixKeyMessageEnabled() &&
                  o(
                    "WAWebBrSavePartnerPixKeyFeature",
                  ).openAddPixKeyMessageScreen(
                    t,
                    o(
                      "WAWebBrSenderPixKeyAttribution",
                    ).resolveSenderPixKeyAttribution(e.senderObj),
                    o(
                      "WAWebBrAddPixKeyPartnerDirectory",
                    ).addPixKeyPartnerCatalogIdForSender([
                      o("WAWebMsgGetters").getSender(e.unsafe()),
                    ]),
                    function (t) {
                      o(
                        "WAWebBrAddPixKeySavedMarker",
                      ).markAddPixKeyMessageSaved(e.id, t);
                    },
                  );
              },
              testid: "br_add_pix_key_message_action",
            };
    }
    function m(e, t) {
      var n;
      return (n = o(
        "WAWebBrOptionsToPayActions",
      ).getPaymentRequestOptionsToPayActions(e, t)) != null
        ? n
        : r("WAWebGetInteractiveActionsFromButtons")(e, t);
    }
    function p(e, t, n) {
      var r;
      return (r = o(
        "WAWebBrOptionsToPayActions",
      ).getOrderDetailsOptionsToPayActions(e, t, n)) != null
        ? r
        : _(e, t, n);
    }
    function _(e, t, n) {
      var r = [],
        a = 2;
      return (
        o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyPixCodeInteractiveAction({ msg: t, orderInfo: e }),
          ),
        o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getOpenPaymentLinkInteractiveAction({ msg: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(n) &&
          o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(e) &&
          r.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getCopyBoletoCodeInteractiveAction({ msg: t, orderInfo: e }),
          ),
        r.length < a &&
          o("WAWebBrPaymentSettingsUtils").hasValidCard(e) &&
          r.push(f()),
        r
      );
    }
    function f() {
      return {
        label: s._(/*BTDS*/ "Pay with card"),
        onClick: function () {
          r("WAWebShowMessageActionFallbackErrorAction")({
            title: s._(/*BTDS*/ "Charges can't be paid with cards on {=m1}", [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ]),
            body: s._(
              /*BTDS*/ "Use WhatsApp on your phone to pay for this charge with a card.",
            ),
          });
        },
      };
    }
    function g(e, t, n) {
      var a = function () {
        return o("WAWebMsgGetters").getIsSentByMe(e) || n
          ? s._(/*BTDS*/ "View details")
          : o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
                o("WAWebMsgGetters").getSender(e),
              ) &&
              o("WAWebPaymentsGatingUtils").isWidInPaymentsCountry(
                o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              )
            ? s._(/*BTDS*/ "Review and pay")
            : s._(/*BTDS*/ "View details");
      };
      return {
        label: a(),
        onClick: function () {
          o("WAWebMsgGetters").getIsSentByMe(e) ||
          o(
            "WAWebOrdersExpansionCountries",
          ).getConsumerOrdersExpansionAllowedCountries()
            ? o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
                e,
                t,
                r("WAWebBizEntryPoint").FROM_CHAT,
              )
            : r("WAWebShowMessageActionFallbackErrorAction")({
                title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
                  s._implicitParam(
                    "=m1",
                    u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
                body: s._(
                  /*BTDS*/ "Use WhatsApp on your phone to view this order.",
                ),
              });
        },
      };
    }
    function h(e, t) {
      return o("WAWebMsgGetters").getIsSentByMe(e)
        ? null
        : o(
            "WAWebGetBrazilnteractiveActions",
          ).getCopyPixStaticCodeInteractiveAction(e, t);
    }
    function y(e) {
      var t = e.id;
      return {
        label: s._(/*BTDS*/ "View shop"),
        onClick: function () {
          if (t == null)
            return void r("WAWebShowMessageActionFallbackErrorAction")();
          o("WAWebExternalLink.react").openExternalLink(
            "https://facebook.com/" + t + "/shop/",
          );
        },
      };
    }
    function C(e, t) {
      return o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledForMsg(
        e.unsafe(),
      )
        ? o("WAWebPaymentDetailsBubbleActions").getPaymentDetailsBubbleActions(
            e,
            t,
          )
        : [
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getPaymentInfoOrderDetailsInteractiveAction(t, e),
          ];
    }
    l.default = c;
  },
  226,
);
