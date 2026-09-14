__d(
  "AdsImportToastCardUtils",
  ["AdsImportCompleteToastCardUtils", "AdsPEServerImportActions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i;
      o("AdsPEServerImportActions").addToastCard({
        id: (i = o("AdsImportCompleteToastCardUtils")).getToastCardID(
          e.toString(),
        ),
        cardType: "success",
        canDismiss: !0,
        dismissTimer: i.DISMISS_TIMER,
        "data-testid": "import-success-toast",
        header: i.TOAST_CARD_HEADER,
        bodyText: i.getToastCardBody(t, n, r, a),
        useCase: "importSuccess",
      });
    }
    l.showSuccessToastCard = e;
  },
  98,
);
