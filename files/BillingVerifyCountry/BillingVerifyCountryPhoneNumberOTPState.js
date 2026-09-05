__d(
  "BillingVerifyCountryPhoneNumberOTPState",
  [
    "BillingVerifyCountryPhoneNumberOTPScreen.react",
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "verify_country_phone_number_otp_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.logEvent = function (t) {
            r("BillingWizardRootUPLogger") == null ||
              r("BillingWizardRootUPLogger").logClickEvent("submit_button", {
                cta_text: t,
              });
          }),
          (n.onDisplay = function (t, n) {
            var e = this,
              o = function (r) {
                return (e.logEvent("Next"), n("onNext", { status: r }));
              };
            return s.jsx(
              r("BillingVerifyCountryPhoneNumberOTPScreen.react"),
              babelHelpers.extends({}, t, { onNext: o }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
