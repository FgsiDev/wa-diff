__d(
  "BillingMakePrimaryState",
  [
    "BillingError",
    "BillingMIBillingInfoUtils",
    "BillingMakePrimaryStateMutation.graphql",
    "BillingMakePrimaryStatusConstants",
    "BillingPaymentMethodDisplayUtils",
    "BillingWizardDecisionState",
    "BillingWizardRootUPLogger",
    "asyncToGeneratorRuntime",
    "buildBillingErrorMessageforRecovery",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("BillingMakePrimaryStateMutation.graphql")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "make_primary_state_decision"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onDecide = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = t.qe,
                  i = t.relay,
                  l = e.isHybrid,
                  u = e.miInfo,
                  c = e.paymentAccountID,
                  d = e.paymentMethodID,
                  m = e.shouldDisplayFailureStatus,
                  p = e.usedExistingPM;
                if (d == null)
                  throw new (r("BillingError"))(
                    "BillingMakePrimaryState:onDecide was called without a paymentMethodID",
                    "required parameter is missing or invalid",
                    { event_action: "enter", event_side: "client_side" },
                    { action: "load", document_name: "make_primary_state" },
                    "critical_error",
                  );
                var _ = o(
                    "BillingPaymentMethodDisplayUtils",
                  ).paymentMethodDisplayQuery(i, d),
                  f = {
                    billable_account_payment_legacy_account_id: c,
                    mi_info: u
                      ? o(
                          "BillingMIBillingInfoUtils",
                        ).convertToMIInfoGraphQLObject(
                          babelHelpers.extends({}, u),
                        )
                      : void 0,
                    primary_funding_id: d,
                    upl_logging_data: babelHelpers.extends(
                      {},
                      r("BillingWizardRootUPLogger").getLoggingData(
                        s.params.name,
                      ),
                    ),
                  };
                try {
                  var g,
                    h = yield i.commitMutation(
                      { mutation: s, variables: { input: f } },
                      {
                        event_data: o(
                          "BillingMIBillingInfoUtils",
                        ).createUpdateMiInfoEventData(u),
                      },
                    ),
                    y = o(
                      "BillingPaymentMethodDisplayUtils",
                    ).getPaymentMethodDisplayFromQuery(yield _),
                    C;
                  p === !0
                    ? (C =
                        l === !0
                          ? r(
                              "BillingMakePrimaryStatusConstants",
                            ).successHeadlineHybrid(y)
                          : r(
                              "BillingMakePrimaryStatusConstants",
                            ).successHeadline(y))
                    : (C = r(
                        "BillingMakePrimaryStatusConstants",
                      ).successAddHeadline(y, e));
                  var b = a.usability_flow107_t213933791.update_default.read(),
                    v =
                      l === !0
                        ? r(
                            "BillingMakePrimaryStatusConstants",
                          ).successBodyHybrid(y, a)
                        : r("BillingMakePrimaryStatusConstants").successBody(
                            y,
                            b,
                            e,
                          );
                  return (
                    e.changePFSPaymentAmountBody != null &&
                      (v = e.changePFSPaymentAmountBody),
                    (h == null || (g = h.billable_account_update) == null
                      ? void 0
                      : g.tax_country_verification_method) ===
                    "SHOW_STEPUP_OPTIONS"
                      ? {
                          event: "onVerifyCountry",
                          newProps: babelHelpers.extends({}, e),
                        }
                      : {
                          event: "onNext",
                          newProps: babelHelpers.extends({}, e, {
                            status: { body: v, headline: C, type: "SUCCESS" },
                          }),
                        }
                  );
                } catch (t) {
                  var S,
                    R,
                    L,
                    E,
                    k,
                    I = r("getErrorSafe")(t),
                    T =
                      I instanceof r("BillingError")
                        ? I
                        : new (r("BillingError"))(
                            I.message,
                            "server side mutation failure",
                            {
                              event_action: "mutation",
                              event_side: "server_side",
                            },
                            {
                              action: "load",
                              document_name: "make_primary_state",
                            },
                          ),
                    D = o(
                      "BillingPaymentMethodDisplayUtils",
                    ).getPaymentMethodDisplayFromQuery(yield _),
                    x = r("buildBillingErrorMessageforRecovery")(
                      T == null || (S = T.errorPayload) == null
                        ? void 0
                        : S.exception_code,
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {},
                      ),
                    );
                  if (
                    ((T.summary =
                      (R =
                        x == null || (L = x.title) == null
                          ? void 0
                          : L.toString()) != null
                        ? R
                        : r("BillingMakePrimaryStatusConstants")
                            .failureHeadline(D)
                            .toString()),
                    (T.description =
                      (E =
                        x == null || (k = x.body) == null
                          ? void 0
                          : k.toString()) != null
                        ? E
                        : r("BillingMakePrimaryStatusConstants")
                            .failureBody(D)
                            .toString()),
                    m === !0)
                  ) {
                    var $,
                      P = x != null ? "recovery_message" : "per_state_default";
                    return (
                      r("BillingWizardRootUPLogger").logBillingPayloadError(
                        T.type,
                        T.errorPayload,
                        {
                          content_source: P,
                          displayed_body: String(T.description),
                          displayed_headline: String(T.summary),
                          error_code: String(
                            ($ = T.errorPayload.exception_code) != null
                              ? $
                              : "",
                          ),
                          source_state: this.name,
                        },
                      ),
                      {
                        event: "onError",
                        newProps: babelHelpers.extends({}, e, {
                          status: {
                            body: T.description,
                            headline: T.summary,
                            type: "ERROR",
                          },
                        }),
                      }
                    );
                  }
                  throw T;
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = u;
  },
  98,
);
