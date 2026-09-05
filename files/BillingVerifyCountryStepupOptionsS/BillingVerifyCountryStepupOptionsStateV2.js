__d(
  "BillingVerifyCountryStepupOptionsStateV2",
  [
    "BillingVerifyCountryStepupOptionsScreenV2.react",
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
            (t.name = "verify_country_stepup_options_state_display_v2"),
            (t.mapPropsToQuery = function (e) {
              var t = e.deviceCountry,
                n = e.deviceCurrency,
                r = e.paymentAccountID;
              return {
                deviceCountry: t,
                deviceCurrency: n,
                paymentAccountID: r,
              };
            }),
            (t.query = o(
              "BillingVerifyCountryStepupOptionsScreenV2.react",
            ).query),
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
                cta: t,
              });
          }),
          (n.onDisplay = function (t, n) {
            var e = this,
              r = function () {
                return (
                  e.logEvent("Add a payment method"),
                  n("onAddPM", {
                    creditCard: void 0,
                    selectedStepupOption: "add_pm",
                    taxCountryVerificationMethod: void 0,
                  })
                );
              },
              a = function () {
                return (
                  e.logEvent("Upload ID"),
                  n("onIDV", {
                    authenticatable_entity_id: t.paymentAccountID,
                    selectedStepupOption: "idv",
                  })
                );
              },
              i = function () {
                return (
                  e.logEvent(
                    "Learn more about changing your business location",
                  ),
                  n("onCreateNewAccountHelpCenter", {})
                );
              };
            return s.jsx(
              o("BillingVerifyCountryStepupOptionsScreenV2.react")
                .BillingVerifyCountryStepupOptionsScreenV2,
              babelHelpers.extends({}, t, {
                onAddPM: r,
                onCreateNewAccountHelpCenter: i,
                onIDV: a,
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
