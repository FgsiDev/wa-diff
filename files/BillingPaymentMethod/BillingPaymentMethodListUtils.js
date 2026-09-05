__d(
  "BillingPaymentMethodListUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        EXTENDED_CREDIT: 1,
        CREDIT_CARD: 2,
        NEW_CREDIT_CARD: 3,
        BM_OPTION: 4,
        PAYPAL_BA: 5,
        NEW_PAYPAL_BA: 6,
        DIRECT_DEBIT: 7,
        NEW_DIRECT_DEBIT: 8,
        ALT_PAY: 9,
        FB_TOKEN: 98,
        DUMMY: 99,
      },
      l = {
        DIRECT_DEBIT: 1,
        EXTENDED_CREDIT: 2,
        CREDIT_CARD: 3,
        NEW_CREDIT_CARD: 4,
        BM_OPTION: 5,
        PAYPAL_BA: 6,
        NEW_PAYPAL_BA: 7,
        NEW_DIRECT_DEBIT: 8,
        ALT_PAY: 9,
        FB_TOKEN: 98,
        DUMMY: 99,
      },
      s = {
        AdAccountAppleIAPOption: "APPLE_IAP",
        AdAccountNewCreditCardBusinessOption: "BM_OPTION",
        AdAccountNewCreditCardOption: "NEW_CREDIT_CARD",
        AdAccountNewDirectDebitV2Option: "NEW_DIRECT_DEBIT",
        AdAccountNewExtendedCreditBusinessOption: "BM_OPTION",
        AdAccountNewPaypalOption: "NEW_PAYPAL_BA",
        AdAccountNewTokenOption: "FB_TOKEN",
        BillableAccountAttachSharedStoredBalanceBusinessOption: "BM_OPTION",
        PaymentAccountRequestNewCreditLineOption: "NEW_EXTENDED_CREDIT",
      };
    function u(e) {
      return e === "IN";
    }
    function c(e) {
      return e === "VN";
    }
    function d(e) {
      return (
        e === "ID" ||
        e === "MY" ||
        e === "TH" ||
        e === "EG" ||
        e === "NG" ||
        e === "BR"
      );
    }
    function m(e, t, n, r, o) {
      if (t !== 3) return !1;
      if (n === !0) {
        if (c(r) && o != null)
          return (
            e.billing_add_pm_ranking__logging.dummy_param.read(),
            o.MFT_IREV_SHIPPING_GK_2026H1_AD_ACCOUNT_ID_V1.read()
          );
        if (d(r)) return e.billing_pm_ranking_expansion.should_rank.read();
        if (u(r)) return e.billing_add_pm_ranking.should_rank.read();
      }
      return !1;
    }
    function p(e) {
      return e.direct_debit_upsell.enabled.read();
    }
    var _ = function (t) {
      return function () {
        return t.content_string_replacement_experiments.enable.read();
      };
    };
    function f(e) {
      if (e == null || e.length === 0) return !1;
      var t = e[0];
      return (t == null ? void 0 : t.credential_type) === "CREDIT_CARD";
    }
    ((i.defaultOrder = e),
      (i.directDebitFirstOrder = l),
      (i.typenameToTypeMap = s),
      (i.shouldRankPaymentMethodsEnabled = m),
      (i.shouldTopRankDirectDebitForPaymentMethodsRanking = p),
      (i.getShouldReplaceCouponNeedsPaymentMethod = _),
      (i.isTopRankedPaymentMethodCreditCard = f));
  },
  66,
);
