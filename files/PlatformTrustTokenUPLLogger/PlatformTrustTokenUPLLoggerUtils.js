__d(
  "PlatformTrustTokenUPLLoggerUtils",
  ["FBPayUPLSessionIDGenerator", "PlatformTrustTokenUPLLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "ADS_MANAGER":
          return "ads_manager";
        case "BILLING":
          return "billing";
        case "BILLING_HUB":
          return "billing_hub";
        case "BILLING_WIZARD":
          return "billing_wizard";
        case "IAP_ADS_BILLING":
          return "iap_ads_billing";
        case "MOR_BILLING_OMEGA_INVOICE":
          return "mor_billing_omega_invoice";
        case "NMOR_FB_SHOP_ADS":
          return "nmor_shop_ads_fb";
        case "IG_NMOR_SHOP_ADS":
          return "nmor_shop_ads_ig";
        case "MOR_ADS_AFA":
          return "mor_ads_afa";
        case "MOR_ADS_AUTH":
          return "mor_ads_auth";
        case "MOR_ADS_CONSENT":
          return "mor_ads_consent";
        case "MOR_ADS_INVOICE":
          return "mor_ads_invoice";
        case "MOR_ADS_CONSENT_AFA":
          return "mor_ads_consent_afa";
        case "MOR_ADS_RISK_3DS_AUTHENTICATION":
          return "mor_ads_risk_3ds_authentication";
        case "MOR_OCULUS_LAUNCH_V1":
          return "mor_oculus_launch_v1";
        case "MOR_OCULUS_LAUNCH_V2":
          return "mor_oculus_launch_v2";
        case "NMOR_PAGES_COMMERCE":
          return "nmor_pages_commerce";
        case "PAYMENT_SETTINGS":
          return "payment_settings";
        case "MOR_P2P_TRANSFER":
          return "mor_p2p_transfer";
        case "FBPAY_HUB":
          return "fbpay_hub";
        case "ECP":
          return "ecp";
        case "META_PAY_WALLET":
          return "meta_pay_wallet";
        case "TRUST_BINDING":
          return "trust_binding";
        case "META_CHECKOUT_SDK":
          return "meta_checkout_sdk";
        case "NMOR_C2C_CHECKOUT_EXPERIENCES":
          return "nmor_c2c_checkout_experiences";
        case "PTT_GENERATION_TOOL":
          return "ptt_generation_tool";
        default:
          return "unknown";
      }
    }
    function s(t, n, o, a) {
      var i = o != null ? o : n == null ? void 0 : n.getSessionID(),
        l = e(t),
        s =
          n != null
            ? n
            : new (r("PlatformTrustTokenUPLLogger"))(void 0, i, l, a);
      return (n != null && a != null && n.setPlatformAndProductType(l, a), s);
    }
    ((l.sessionIDGenerator = o(
      "FBPayUPLSessionIDGenerator",
    ).sessionIDGenerator),
      (l.convertPaymentTypeToProductType = e),
      (l.getOrCreatePttLogger = s));
  },
  98,
);
