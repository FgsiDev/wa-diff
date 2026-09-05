__d(
  "BillingVerifyCountryPhoneNumberState",
  [
    "BillingVerifyCountryPhoneNumberScreen.react",
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
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "verify_country_phone_number_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingVerifyCountryPhoneNumberScreen.react").query),
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
                cta_text_raw_string: t,
              });
          }),
          (n.onDisplay = function (t, n) {
            var e = this,
              a = function (r, o, a) {
                var t = "";
                return (
                  o === "SMS"
                    ? (t = "Send by text (SMS)")
                    : o === "PHONE_CALL"
                      ? (t = "Call phone")
                      : o === "WHATSAPP" && (t = "Send by Whatsapp"),
                  e.logEvent(t),
                  n("onNext", {
                    challengeType: o,
                    fullPhoneNumber: a,
                    phoneVerificationSubmissionID: r,
                  })
                );
              },
              i = function () {
                return (
                  r("BillingWizardRootUPLogger") == null ||
                    r("BillingWizardRootUPLogger").logClickEvent(
                      "choose_another_way_button",
                      { cta_text: "Choose another way to verify" },
                    ),
                  n("onOtherOptions")
                );
              },
              l = function () {
                return (
                  r("BillingWizardRootUPLogger") == null ||
                    r("BillingWizardRootUPLogger").logClickEvent(
                      "skip_button",
                      { cta_text: "Skip" },
                    ),
                  n("onDone")
                );
              };
            return s.jsx(
              o("BillingVerifyCountryPhoneNumberScreen.react")
                .BillingVerifyCountryPhoneNumberScreen,
              babelHelpers.extends({}, t, {
                onNext: a,
                onOtherOptions: i,
                onSkip: l,
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
