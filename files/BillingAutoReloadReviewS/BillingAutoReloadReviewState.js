__d(
  "BillingAutoReloadReviewState",
  ["BillingAutoReloadReviewScreen.react", "BillingWizardDisplayState", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "auto_reload_review_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingAutoReloadReviewScreen.react").query),
            (t.fetchPolicy = "store-or-network"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t) {
                return n("onNext", { attemptCharge: t, shouldTurnOn: !0 });
              },
              r = function () {
                n("onEditAmount", { cameFromReview: !0 });
              },
              a = function () {
                n("onEditPaymentMethod");
              },
              i = t.status,
              l =
                i != null && i.type === "ERROR"
                  ? {
                      body: typeof i.body == "function" ? null : i.body,
                      headline:
                        typeof i.headline == "function" ? null : i.headline,
                    }
                  : null,
              u =
                l != null
                  ? babelHelpers.extends({}, t.wrapperProps, { status: void 0 })
                  : t.wrapperProps;
            return s.jsx(
              o("BillingAutoReloadReviewScreen.react")
                .BillingAutoReloadReviewScreen,
              babelHelpers.extends({}, t, {
                chargeFailureStatus: l,
                onEditAmount: r,
                onEditPaymentMethod: a,
                onSubmit: e,
                wrapperProps: u,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
