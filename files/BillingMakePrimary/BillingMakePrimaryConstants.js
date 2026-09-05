__d(
  "BillingMakePrimaryConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        body: function (t, n) {
          return n === "AdAccount"
            ? s._(
                /*BTDS*/ "If you set {payment method name} as your default payment method, it will be used to pay for all ads on this ad account.",
                [s._param("payment method name", t)],
              )
            : s._(
                /*BTDS*/ "If you set {payment method name} as your default payment method, it will be used to pay on this account.",
                [s._param("payment method name", t)],
              );
        },
        bodyHybrid: function (n) {
          var t;
          return (n == null ||
          (t = n.jit_funding_source_v2_sorter) == null ||
          (t = t.use_card_scores) == null
            ? void 0
            : t.read({ do_not_log_exposure_iknowwhatimdoing: !0 })) === !0
            ? e.bodyHybridJITCredentialSorting
            : s._(
                /*BTDS*/ "Your default payment method will be charged before other saved payment methods if you don't have any available funds.",
              );
        },
        bodyHybridJITCredentialSorting: s._(
          /*BTDS*/ "We may use any of your payment methods saved in your account. Based on your transaction history, we may charge your alternative cards before using your default card.",
        ),
        bodyOnBalanceRemaining: function (t, n, r) {
          var e;
          return r != null &&
            (e = r.billing_terms_outstanding_balance) != null &&
            (e = e.use_outstanding_balance) != null &&
            e.read()
            ? s._(
                /*BTDS*/ "Before you can make {payment method name} your default payment method, you'll need to use it to pay your outstanding balance of {amount}.",
                [s._param("payment method name", t), s._param("amount", n)],
              )
            : s._(
                /*BTDS*/ "Before you can make {payment method name} your default payment method, you'll need to use it to pay your current balance of {amount}.",
                [s._param("payment method name", t), s._param("amount", n)],
              );
        },
        bodyOnBalanceRemainingWithPrepayFunds: function (t, n, r) {
          var e;
          return r != null &&
            (e = r.billing_terms_outstanding_balance) != null &&
            (e = e.use_outstanding_balance) != null &&
            e.read()
            ? s._(
                /*BTDS*/ "Before you can make {payment method name} your default payment method, you'll need to use it to pay your outstanding balance of {amount}. We'll use any ad credits or funds first.",
                [s._param("payment method name", t), s._param("amount", n)],
              )
            : s._(
                /*BTDS*/ "Before you can make {payment method name} your default payment method, you'll need to use it to pay your current balance of {amount}. We'll use any ad credits or funds first.",
                [s._param("payment method name", t), s._param("amount", n)],
              );
        },
        button: s._(/*BTDS*/ "Set as default"),
        defaultPMLabel: s._(/*BTDS*/ "your payment method"),
        headline: s._(/*BTDS*/ "Set as default"),
        headlineHybrid: function (t) {
          return s._(/*BTDS*/ "Set {payment method name} as your default", [
            s._param("payment method name", t),
          ]);
        },
        headlineOnBalanceRemaining: function (t, n) {
          var e;
          return n != null &&
            (e = n.billing_terms_outstanding_balance) != null &&
            (e = e.use_outstanding_balance) != null &&
            e.read()
            ? s._(
                /*BTDS*/ "Pay your outstanding balance to set {payment method name} as default",
                [s._param("payment method name", t)],
              )
            : s._(
                /*BTDS*/ "Pay your current balance to set {payment method name} as default",
                [s._param("payment method name", t)],
              );
        },
        nextButton: s._(/*BTDS*/ "Next"),
        title: s._(/*BTDS*/ "Update payment method"),
      },
      u = e;
    l.default = u;
  },
  226,
);
