__d(
  "WAWebPaymentDetailsGating",
  [
    "WAWebBrazilPaymentState",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
    "WAWebPaymentsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.id.remote;
      return (
        t.isUser() &&
        !t.isBot() &&
        (!o("WAWebMobilePlatforms").isSMB() || e.id.fromMe) &&
        o("WAWebBrazilPaymentState").isReceiptAndStateStamped(u(e)) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function s(e) {
      return (
        (!o("WAWebMobilePlatforms").isSMB() || e) &&
        o("WAWebPaymentsGatingUtils").isBrazilPaymentDetailsAvailable()
      );
    }
    function u(e) {
      var t;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO &&
        (t = e.interactivePayload) != null &&
        t.buttons
      ) {
        var n = e.interactivePayload;
        return n;
      }
      return null;
    }
    ((l.isPaymentDetailsEnabledForMsg = e),
      (l.isPaymentDetailsEnabledForReceiptNotice = s),
      (l.getPaymentInfoPayload = u));
  },
  98,
);
