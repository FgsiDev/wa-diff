__d(
  "BillingCheckStepupOptionsAvailabilityStateV2",
  [
    "fbt",
    "BillingCheckStepupOptionsAvailabilityStateV2Query.graphql",
    "BillingWizardDecisionState",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "BillingCheckStepupOptionsAvailabilityStateV2Query.graphql",
            )),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "check_stepup_option_availability_state_v2_decision"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onDecide = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r,
                  o,
                  a,
                  i,
                  l,
                  d,
                  m,
                  p,
                  _,
                  f,
                  g,
                  h,
                  y = t.relay.fetchQuery,
                  C = yield y({
                    query: c,
                    queryName: c.params.name,
                    variables: {
                      deviceCountry: e.deviceCountry,
                      deviceCurrency: e.deviceCurrency,
                      paymentAccountID: e.paymentAccountID,
                    },
                  }),
                  b =
                    ((r =
                      C == null ||
                      (o = C.billable_account_by_asset_id) == null ||
                      (o = o.can_close_old_and_create_new_billable_account) ==
                        null
                        ? void 0
                        : o.can_create) != null
                      ? r
                      : !1) &&
                    ((a =
                      C == null ||
                      (i = C.billable_account_by_asset_id) == null ||
                      (i = i.can_close_old_and_create_new_billable_account) ==
                        null
                        ? void 0
                        : i.environment_supports) != null
                      ? a
                      : !0),
                  v =
                    C == null || (l = C.billable_account_by_asset_id) == null
                      ? void 0
                      : l.boost_enable_status,
                  S = v === "AD_CREATION_ENABLED",
                  R =
                    (C == null ||
                    (d = C.billable_account_by_asset_id) == null ||
                    (d = d.id_verification_status) == null
                      ? void 0
                      : d.status) === "INIT_STEPUP",
                  L =
                    C == null || (m = C.billable_account_by_asset_id) == null
                      ? void 0
                      : m.tax_country_validation_action,
                  E =
                    ((p =
                      C == null ||
                      (_ = C.billable_account_by_asset_id) == null ||
                      (_ = _.billing_flags) == null
                        ? void 0
                        : _.includes("TAX_COUNTRY_MISMATCH")) != null
                      ? p
                      : !1) ||
                    L === "SHOW_STEPUP_OPTIONS" ||
                    L === "SHOW_STEPUP_OPTIONS_SKIPPABLE",
                  k =
                    (f =
                      (g = e.country) != null
                        ? g
                        : C == null ||
                            (h = C.billable_account_by_asset_id) == null ||
                            (h = h.billable_account_tax_info) == null
                          ? void 0
                          : h.business_country_code) != null
                      ? f
                      : "",
                  I = L === "SHOW_STEPUP_OPTIONS_SKIPPABLE";
                return E
                  ? (u || (u = n("Promise"))).resolve({
                      event: "phone_verification",
                      newProps: babelHelpers.extends({}, e, {
                        addPMAvailable: S,
                        country: k,
                        idvAvailable: R,
                        isVerifyCountrySkippable: I,
                      }),
                    })
                  : b
                    ? (u || (u = n("Promise"))).resolve({
                        event: "confirm_location",
                        newProps: babelHelpers.extends({}, e, { country: k }),
                      })
                    : R || S
                      ? (u || (u = n("Promise"))).resolve({
                          event: "stepup_options",
                          newProps: babelHelpers.extends({}, e, { country: k }),
                        })
                      : (u || (u = n("Promise"))).resolve({
                          event: "fail",
                          newProps: babelHelpers.extends({}, e, {
                            status: {
                              body: s._(
                                /*BTDS*/ "You can still use other Meta tools to verify your business location.",
                              ),
                              headline: s._(
                                /*BTDS*/ "Boosting is currently unavailable since we need to verify your business location",
                              ),
                              title: s._(/*BTDS*/ "Boosting unavailable"),
                              type: "LEARN",
                            },
                          }),
                        });
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
    l.default = d;
  },
  226,
);
