__d(
  "BillingMakePrimaryStatusConstants",
  ["fbt", "BillingMakePrimaryConstants"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        failureBody: function (t) {
          return s._(
            /*BTDS*/ "We weren't able to set {payment method} as your default payment method. Please try again.",
            [s._param("payment method", t)],
          );
        },
        failureHeadline: function (t) {
          return s._(/*BTDS*/ "Couldn't update {payment method}", [
            s._param("payment method", t),
          ]);
        },
        failureTitle: s._(/*BTDS*/ "Update unsuccessful"),
        successAddHeadline: function (t, n) {
          return function (e, r) {
            return r === "MV4B" &&
              (n == null ? void 0 : n.onAddNewPrimaryPM) === !0
              ? s._(/*BTDS*/ "Payment method replaced")
              : s._(/*BTDS*/ "{payment method} added", [
                  s._param("payment method", t),
                ]);
          };
        },
        successBody: function (t, n, r) {
          return function (e, o) {
            return o === "MV4B"
              ? (r == null ? void 0 : r.onAddNewPrimaryPM) === !0
                ? n
                  ? s._(
                      /*BTDS*/ "You added {payment method} as a payment method for Meta Verified. You can now remove your original payment method.",
                      [s._param("payment method", t)],
                    )
                  : s._(
                      /*BTDS*/ "You added {payment method} as a payment method for Meta Verified. You can now remove your original payment method.",
                      [s._param("payment method", t)],
                    )
                : n
                  ? s._(
                      /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                      [s._param("payment method", t)],
                    )
                  : s._(
                      /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                      [s._param("payment method", t)],
                    )
              : o === "WORKPLACE"
                ? n
                  ? s._(
                      /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                      [s._param("payment method", t)],
                    )
                  : s._(
                      /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                      [s._param("payment method", t)],
                    )
                : o === "DEVELOPER"
                  ? n
                    ? s._(
                        /*BTDS*/ "{payment method} is now the default payment method. It will be charged first for all usage costs on this account. To make changes, go to Billing.",
                        [s._param("payment method", t)],
                      )
                    : s._(
                        /*BTDS*/ "{payment method} is now the default payment method. It will be charged first for all usage costs on this account. To make changes, go to Billing.",
                        [s._param("payment method", t)],
                      )
                  : o === "BIZ_AI"
                    ? (r == null ? void 0 : r.onAddNewPrimaryPM) === !0
                      ? n
                        ? s._(
                            /*BTDS*/ "You added {payment method} as a payment method for Business AI. You can now remove your original payment method.",
                            [s._param("payment method", t)],
                          )
                        : s._(
                            /*BTDS*/ "You added {payment method} as a payment method for Business AI. You can now remove your original payment method.",
                            [s._param("payment method", t)],
                          )
                      : n
                        ? s._(
                            /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                            [s._param("payment method", t)],
                          )
                        : s._(
                            /*BTDS*/ "{payment method} is now the default payment method on your account. To make changes, go to Payment settings.",
                            [s._param("payment method", t)],
                          )
                    : n
                      ? s._(
                          /*BTDS*/ "{payment method} is now the default payment method. It will be charged first for all ads on this account. To make changes, go to Payment settings.",
                          [s._param("payment method", t)],
                        )
                      : s._(
                          /*BTDS*/ "{payment method} is now the default payment method. It will be charged first for all ads on this account. To make changes, go to Payment settings.",
                          [s._param("payment method", t)],
                        );
          };
        },
        successBodyHybrid: function (t, n) {
          var e;
          return (n == null ||
          (e = n.jit_funding_source_v2_sorter) == null ||
          (e = e.use_card_scores) == null
            ? void 0
            : e.read({ do_not_log_exposure_iknowwhatimdoing: !0 })) === !0
            ? r("BillingMakePrimaryConstants").bodyHybridJITCredentialSorting
            : s._(
                /*BTDS*/ "Your {payment method} will be charged first if you don't have any available funds remaining.",
                [s._param("payment method", t)],
              );
        },
        successBodySSB: s._(
          /*BTDS*/ "These funds can be used to pay for ads for this account and all other connected accounts.",
        ),
        successHeadline: function (t) {
          return s._(/*BTDS*/ "{payment method}", [
            s._param("payment method", t),
          ]);
        },
        successHeadlineHybrid: function (t) {
          return s._(/*BTDS*/ "{payment method} is now your default", [
            s._param("payment method", t),
          ]);
        },
        successHeadlineSSB: function (t, n) {
          return s._(
            /*BTDS*/ "{account name} account connected to {payment method}",
            [s._param("account name", n), s._param("payment method", t)],
          );
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
