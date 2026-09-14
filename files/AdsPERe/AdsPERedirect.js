__d(
  "AdsPERedirect",
  [
    "invariant",
    "AdsAccountStore",
    "AdsPERouterHelper",
    "BizSiteIdentifier.brands",
    "BusinessURI.brands",
    "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
    "ads-head-constants",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new Map([
        ["BILLING", m()],
        [
          "CUSTOM_CONVERSIONS",
          (e = o("ads-head-constants")).CUSTOM_CONVERSIONS_LINK,
        ],
        ["PIXELS", e.PIXELS_LINK],
        ["REPORTING", e.REPORTING_LINK],
        ["SETTINGS", e.SETTINGS_LINK],
        ["RULES", e.RULES_LINK],
      ]);
    function c(e, t) {
      var n = r("AdsAccountStore").getSelectedBusinessID(),
        a = o("BizSiteIdentifier.brands").isBizSite()
          ? o("BizSiteIdentifier.brands").createBusinessURL(e, n)
          : r("BusinessURI.brands")(e),
        i = r("AdsAccountStore").getSelectedAccountID();
      if ((a.addQueryData("act", i), t))
        for (var l of Object.entries(t)) {
          var s = l[0],
            u = l[1];
          s === "act" || r("isFalsey")(u) || a.addQueryData(s, u);
        }
      return a.toString();
    }
    function d(e, t) {
      var n = u.get(e);
      (n != null && n !== "") || s(0, 5422);
      var o = c(n, t),
        a = r("AdsPERouterHelper").getRouter();
      a.navigateTo(o, null, null, !0);
    }
    function m() {
      var e = r("AdsAccountStore").getSelectedAccountID(),
        t = r("AdsAccountStore").getSelectedBusinessID(),
        n = r(
          "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
        ).buildUri({
          asset_id: e != null ? e : "",
          business_id: t != null ? t : "",
          placement: "ads_manager",
        });
      return n.toString();
    }
    ((l.toAdsInterfacesToolInSameWindow = d), (l.getPaymentLink = m));
  },
  98,
);
