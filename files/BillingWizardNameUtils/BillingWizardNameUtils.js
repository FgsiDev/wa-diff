__d(
  "BillingWizardNameUtils",
  [
    "BillingError",
    "BillingWizardNameUtils.graphql",
    "BillingWizardNameUtilsQuery.graphql",
    "RelayHooks",
    "isBillingBelieveAddFundsWizardName",
    "isBillingBelieveAddPmWizardName",
    "isBillingBelievePayNowWizardName",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("BillingWizardNameUtils.graphql")),
      c = s !== void 0 ? s : (s = n("BillingWizardNameUtilsQuery.graphql"));
    function d(e) {
      var t,
        n,
        o,
        a,
        i =
          e == null ||
          (t = e.payment_account) == null ||
          (t = t.billable_account) == null ||
          (t = t.billing_info) == null
            ? void 0
            : t.required_action,
        l = i == null || (n = i.action) == null ? void 0 : n.wizard_props_json,
        s = i == null || (o = i.action) == null ? void 0 : o.wizard_name,
        u =
          (e == null || (a = e.billing_believe_eligibility) == null
            ? void 0
            : a.is_eligible) === !0,
        c =
          u &&
          (r("isBillingBelieveAddPmWizardName")(s) ||
            r("isBillingBelieveAddFundsWizardName")(s) ||
            r("isBillingBelievePayNowWizardName")(s));
      return s == null
        ? { useBelieve: c, wizardName: null }
        : { props: { jsonProps: l }, useBelieve: c, wizardName: s };
    }
    function m(e, t, n, a, i, l) {
      if (t === "" || t === "undefined")
        throw new (r("BillingError"))(
          "Cannot launch fetchWizardNameQuery with invalid account id",
          "required props is missing or invalid",
          {
            event_action: "enter",
            event_result: "failure",
            event_side: "client_side",
          },
          { action: "load", document_name: "wizard" },
          "critical_error",
        );
      return o("RelayHooks")
        .fetchQuery(
          e,
          c,
          {
            budget: n != null ? { amount: n.amount, currency: n.currency } : n,
            deviceCountry: a,
            deviceCurrency: i,
            paymentAccountID: t,
            specificEntrypoint: l,
          },
          { fetchPolicy: "store-or-network" },
        )
        .toPromise()
        .then(d);
    }
    ((l.billingInfoFragment = u),
      (l.formatFromFragment = d),
      (l.fetchWizardNameQuery = m));
  },
  98,
);
