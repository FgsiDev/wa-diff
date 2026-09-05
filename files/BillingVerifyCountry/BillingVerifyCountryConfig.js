__d(
  "BillingVerifyCountryConfig",
  [
    "BillingCheckStepupOptionsAvailabilityStateV2",
    "BillingConfirmLocationState",
    "BillingCountryCurrencyDecisionState",
    "BillingCountryCurrencyState",
    "BillingCreateNewAccountHelpCenterState",
    "BillingCreateNewFromOldState",
    "BillingVerifyCountryPhoneNumberOTPState",
    "BillingVerifyCountryPhoneNumberState",
    "BillingVerifyCountryStepupOptionsStateV2",
    "BillingWizardStatesEnum",
    "BillingWizardTypes",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        entryPoint: "check_stepup_options_availability",
        isRootConfig: !0,
        logging_context: "billingverifycountry",
        name: "VERIFY_COUNTRY",
        required: ["paymentAccountID"],
        states: {
          add_pm: new (o("BillingWizardTypes").RootConfigState)(
            r("JSResourceForInteraction")(
              "BillingAddPaymentMethodConfig",
            ).__setRef("BillingVerifyCountryConfig"),
            "BillingAddPaymentMethodConfig",
            {},
            !0,
          ),
          bw_idv: new (o("BillingWizardTypes").RootConfigState)(
            r("JSResourceForInteraction")(
              "BillingIDVerificationConfig",
            ).__setRef("BillingVerifyCountryConfig"),
            "BillingIDVerificationConfig",
            {},
            !0,
          ),
          check_stepup_options_availability: new (r(
            "BillingCheckStepupOptionsAvailabilityStateV2",
          ))({
            confirm_location: "confirm_location",
            fail: "STATUS",
            phone_verification: "verify_phone",
            stepup_options: "stepup_options",
          }),
          confirm_location: new (r("BillingConfirmLocationState"))({
            onOtherCountry: "create_new_account",
            onRecommendedCountry: "create_new_account",
            onVerifySelfDisclosedCountry: "stepup_options",
          }),
          country_currency_decision_state: new (r(
            "BillingCountryCurrencyDecisionState",
          ))({
            onChangeCountryCurrency: (e = r("BillingWizardStatesEnum"))
              .CURRENCY_CHANGE,
            onFailure: "create_new_from_old",
            onNewAccount: "NEW_ACCOUNT_CREATED",
            onNext: e.DONE,
          }),
          create_new_account: new (r("BillingCountryCurrencyState"))({
            onChangeCountryCurrency: "country_currency_decision_state",
            onNext: e.DONE,
            onWarning: "STATUS",
          }),
          create_new_account_help_center: new (r(
            "BillingCreateNewAccountHelpCenterState",
          ))({ onNext: e.DONE }),
          create_new_from_old: new (r("BillingCreateNewFromOldState"))({
            onNext: "NEW_ACCOUNT_CREATED",
            onWarning: "STATUS",
          }),
          stepup_options: new (r("BillingVerifyCountryStepupOptionsStateV2"))({
            onAddPM: "add_pm",
            onCreateNewAccountHelpCenter: "create_new_account_help_center",
            onIDV: "bw_idv",
          }),
          verify_phone: new (r("BillingVerifyCountryPhoneNumberState"))({
            onDone: e.DONE,
            onNext: "verify_phone_otp",
            onOtherOptions: "stepup_options",
          }),
          verify_phone_otp: new (r("BillingVerifyCountryPhoneNumberOTPState"))({
            onNext: e.DONE,
          }),
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
