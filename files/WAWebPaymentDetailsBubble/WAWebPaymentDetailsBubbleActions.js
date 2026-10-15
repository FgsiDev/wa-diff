__d(
  "WAWebPaymentDetailsBubbleActions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrazilPaymentState",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebLazyLoadedRetriable",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy",
    "WAWebPaymentDetailsStrings",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcAdd.react",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebPaymentDetailsDialogs.react")
          .__setRef("WAWebPaymentDetailsBubbleActions")
          .load();
      }, "WAWebPaymentDetailsDialogs");
    function d(e, t) {
      var n = e.unsafe(),
        a = o("WAWebPaymentDetailsModels").getPaymentDetailsPov(n.id.fromMe),
        i = o("WAWebBrazilPaymentState").getBrazilPaymentState(
          n.interactivePayload,
        ),
        l = o("WAWebBrazilPaymentState").getPaymentDetailsStatus(i),
        s = o("WAWebFrontendContactGetters").getFormattedName(
          o("WAWebFrontendMsgGetters").getChat(n).contact,
        ),
        u = [];
      return (
        o("WAWebPaymentDetailsStatusPolicy").canMarkAsPaid(a, l) &&
          u.push({
            label: o("WAWebPaymentDetailsStrings").getMarkAsPaidLabel(),
            onClick: function () {
              m(function (e) {
                var t = e.confirmMarkAsPaid;
                return t(n, s);
              }, o("WAWebPaymentDetailsStrings").getMarkAsPaidFailedToast);
            },
            testid: "payment-details-bubble-mark-as-paid",
          }),
        o("WAWebPaymentDetailsStatusPolicy").showsCopyPixKeyCta(a, l) &&
          u.push(
            o(
              "WAWebGetBrazilnteractiveActions",
            ).getPaymentInfoOrderDetailsInteractiveAction(t, e),
          ),
        o("WAWebPaymentDetailsStatusPolicy").canAttachReceipt(
          a,
          i.receiptMsgId,
        ) &&
          u.push({
            label: o("WAWebPaymentDetailsStrings").getAddReceiptLabel(),
            Icon: r("WDSIconIcAdd.react"),
            onClick: function () {
              m(function (e) {
                var t = e.openAddReceiptDialog;
                return t(n, s);
              }, o("WAWebPaymentDetailsStrings").getAddReceiptFailedToast);
            },
            testid: "payment-details-bubble-add-receipt",
          }),
        u
      );
    }
    function m(t, n) {
      c()
        .then(t)
        .catch(function (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-details] could not open a payment details dialog",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("payment-details-dialogs-load-failed"),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: n() }),
            ));
        });
    }
    l.getPaymentDetailsBubbleActions = d;
  },
  98,
);
