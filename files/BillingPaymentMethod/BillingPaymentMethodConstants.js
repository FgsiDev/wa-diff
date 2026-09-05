__d(
  "BillingPaymentMethodConstants",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        addNewPaymentMethod: s._(/*BTDS*/ "Add new payment method"),
        addPaymentInfoHeadline: s._(/*BTDS*/ "Add payment information"),
        bmIndiaTokenizationNoticeBody: s._(
          /*BTDS*/ "If you select India as the country\/region, your payment method can only be used by accounts in India. For non-Indian accounts, add it again and select another country\/region.",
        ),
        bmIndiaTokenizationNoticeHeadline: s._(
          /*BTDS*/ "Payment method can only be used in India",
        ),
        bmNoticeBody: s._(
          /*BTDS*/ "Your Business Manager payment method will be your default payment method and used to pay for all ads on your account.",
        ),
        bmNoticeHeadline: s._(/*BTDS*/ "Add business payment method"),
        bmOption: s._(/*BTDS*/ "Business payment method"),
        boletoInstructions: s._(
          /*BTDS*/ "Instructions for paying with boleto are on the last page of your PDF invoice.",
        ),
        boletoOption: s._(/*BTDS*/ "Boleto"),
        changeHeadline: function (t) {
          return s._(/*BTDS*/ "Changing default payment method");
        },
        changeMessage: function (t) {
          var e = "payments";
          return (
            t === "ADS" && (e = "ads"),
            s._(
              /*BTDS*/ "The payment method you select will become your default. This means it'll be charged for all {payment type} on your account.",
              [s._param("payment type", e)],
            )
          );
        },
        changeMessageRefresh: s._(
          /*BTDS*/ "Your default payment method will be used to pay for all ads running on your account. Changes to your default payment method will automatically be applied to all active ads.",
        ),
        changePMHeadline: s._(/*BTDS*/ "Change payment method"),
        couponOption: s._(/*BTDS*/ "Ad credit"),
        creditCardOption: s._(/*BTDS*/ "Debit or credit card"),
        defaultPaymentMethod: s._(/*BTDS*/ "Default payment method"),
        directDebitMetaText: function (t) {
          return s._(
            /*BTDS*/ "You'll be redirected to our payment partner Trustly, Inc. to connect your bank account. Meta will share your ad account ID, country, and currency with Trustly. Trustly will use this info based on its {link (Trustly privacy policy)} and {link (Trustly terms of use)}.",
            [
              s._param(
                "link (Trustly privacy policy)",
                u.jsx(t, {
                  href: "https://www.trustly.net/us/privacy-policy",
                  inline: !0,
                  label: s._(/*BTDS*/ "privacy policy"),
                  level: 4,
                }),
              ),
              s._param(
                "link (Trustly terms of use)",
                u.jsx(t, {
                  href: "https://www.trustly.net/us/terms-of-use",
                  inline: !0,
                  label: s._(/*BTDS*/ "terms of use"),
                  level: 4,
                }),
              ),
            ],
          );
        },
        directDebitOption: s._(/*BTDS*/ "Online banking"),
        editHeadline: s._(/*BTDS*/ "Edit payment method"),
        extendedCreditOption: s._(/*BTDS*/ "Credit line"),
        inlineCreditCardFormHeadline: s._(/*BTDS*/ "Other options"),
        makeDefaultButtonLabel: function (t) {
          return s._(/*BTDS*/ "Set as default");
        },
        miTransitionNotice: s._(
          /*BTDS*/ "Edits to your monthly invoice will go into effect at the beginning of the next calendar month.",
        ),
        nextButtonLabel: s._(/*BTDS*/ "Next"),
        payManuallyOption: s._(/*BTDS*/ "Pay with wire transfer"),
        paypalOption: s._(/*BTDS*/ "PayPal"),
        requestECItem: function (t) {
          return t
            ? s._(/*BTDS*/ "Request business funds")
            : s._(/*BTDS*/ "Apply for monthly invoicing");
        },
        requestECOption: function (t) {
          return t
            ? s._(/*BTDS*/ "Available funds")
            : s._(/*BTDS*/ "Monthly invoicing");
        },
        saveBizCardButtonLabel: s._(/*BTDS*/ "Save"),
        sectionBMHeadline: s._(/*BTDS*/ "Payment method"),
        sectionHeadline: s._(/*BTDS*/ "Add payment method"),
        selectBMPMHeadline: s._(/*BTDS*/ "Business payment methods"),
        selectPMHeadline: s._(/*BTDS*/ "Select payment method"),
        upiOption: s._(/*BTDS*/ "UPI"),
        wireTransferInstructions: s._(
          /*BTDS*/ "Instructions for wire transfer are at the bottom of your PDF invoice.",
        ),
        wireTransferOption: s._(/*BTDS*/ "Wire transfer"),
        yourPMHeadline: s._(/*BTDS*/ "Your payment methods"),
      },
      d = c;
    l.default = d;
  },
  226,
);
