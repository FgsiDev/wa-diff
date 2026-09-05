__d(
  "BillingAutoReloadUtils",
  [
    "BillingAutoReloadConstants",
    "BillingCurrencyAmount",
    "BillingPaymentModeUtils",
    "BillingPrepayUtils",
    "formatDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return function () {
        return t.content_string_replacement_experiments.enable.read();
      };
    };
    function s(e, t) {
      var n,
        r,
        a,
        i,
        l = function (n) {
          return n.length > 0
            ? o("BillingCurrencyAmount")
                .getFromUserInput(n, e)
                .format({ showSymbol: !0 })
            : n;
        },
        s = o("BillingCurrencyAmount").createZero(e).format({ showSymbol: !0 }),
        u = {
          defaultValue:
            (n =
              (r = t.defaultReloadAmount) == null
                ? void 0
                : r.format({ showSymbol: !0 })) != null
              ? n
              : s,
          onBlur: l,
          required: !0,
          validate: function (r) {
            var n = o("BillingCurrencyAmount").getFromUserInput(r, e),
              a = o("BillingPrepayUtils").validateAmount(
                n,
                t.minFundingAmount,
                t.maxFundingAmount,
                null,
                null,
                null,
                null,
                null,
                "user_reload_amount_validation",
              );
            if (a != null) return { message: a, validationState: "ERROR" };
          },
        },
        c = {
          defaultValue:
            (a =
              (i = t.defaultTriggerAmount) == null
                ? void 0
                : i.format({ showSymbol: !0 })) != null
              ? a
              : s,
          onBlur: l,
          required: !0,
          validate: function (n) {
            var t = o("BillingCurrencyAmount").getFromUserInput(n, e),
              r = o("BillingPrepayUtils").validateAmountForReloadThreshold(
                t,
                "user_reload_threshold_amount_validation",
              );
            if (r != null) return { message: r, validationState: "ERROR" };
          },
        };
      return { reloadAmount: u, triggerAmount: c };
    }
    var u = function (t) {
        return (
          t != null && t.autoReloadToggledOn && t.autoReloadDisabled !== !0
        );
      },
      c = function (t, n) {
        return (
          t === "ACTIVE" &&
          o("BillingPaymentModeUtils").supportsAutoReload(n) &&
          o("BillingPaymentModeUtils").supportsPrepay(n)
        );
      },
      d = function (t, n, r) {
        return {
          shouldShowFailedUI: t === "FAILED",
          shouldShowRetryUI:
            r === "CREDIT_CARD" && t === "ENABLED" && n != null,
        };
      },
      m = function (n, o, a, i, l, s) {
        if ((s === void 0 && (s = !1), n))
          return {
            body: r("BillingAutoReloadConstants").autoReloadOnBody(
              (o != null ? o : "0").toString(),
              (a != null ? a : "0").toString(),
            ),
            headline: r("BillingAutoReloadConstants").autoReloadOnHeadline(s),
            showEditLink: !0,
          };
        var t = e(l);
        return {
          body: i
            ? t()
              ? r("BillingAutoReloadConstants").autoReloadOffRefundBodyRevamp(s)
              : r("BillingAutoReloadConstants").autoReloadOffRefundBody(s)
            : r("BillingAutoReloadConstants").autoReloadOffBody(!1),
          headline: r("BillingAutoReloadConstants").autoReloadOffHeadline(s),
          showEditLink: !1,
        };
      },
      p = function (n, o, a, i, l, s, u, c, d) {
        if (
          (s === void 0 && (s = !1),
          u === void 0 && (u = null),
          c === void 0 && (c = !1),
          d === void 0 && (d = !1),
          n)
        ) {
          var t = (o != null ? o : "0").toString(),
            m = (a != null ? a : "0").toString();
          return {
            body:
              u != null
                ? r("BillingAutoReloadConstants").autoReloadOnBodyV3(
                    t,
                    m,
                    u,
                    c,
                    d,
                    s,
                  )
                : r("BillingAutoReloadConstants").autoReloadOnBody(t, m),
            headline: r("BillingAutoReloadConstants").autoReloadOnHeadline(s),
          };
        }
        var p = e(l);
        return {
          body: i
            ? p()
              ? r("BillingAutoReloadConstants").autoReloadOffRefundBodyRevamp(s)
              : r("BillingAutoReloadConstants").autoReloadOffRefundBody(s)
            : r("BillingAutoReloadConstants").autoReloadOffBodyV3,
          headline: r("BillingAutoReloadConstants").autoReloadTitle(s),
        };
      },
      _ = function (t, n, o, a) {
        if ((a === void 0 && (a = !1), t))
          return {
            body: r("BillingAutoReloadConstants").autoReloadFailedBody(a),
            headline: r("BillingAutoReloadConstants").autoReloadFailedHeadline(
              a,
            ),
            isFailedUI: !0,
          };
        if (n) {
          var e = r("formatDate")(o, "M j"),
            i = r("formatDate")(o, "g:i A");
          return {
            body: r("BillingAutoReloadConstants").autoReloadRetryScheduledBody(
              i,
              e,
            ),
            headline: r("BillingAutoReloadConstants").autoReloadFailedHeadline(
              a,
            ),
            isFailedUI: !1,
          };
        }
        return null;
      },
      f = function (t, n, o, a, i) {
        if ((a === void 0 && (a = !1), i === void 0 && (i = null), t))
          return {
            body: r("BillingAutoReloadConstants").autoReloadFailedBodyV3(a),
            headline: r("BillingAutoReloadConstants").autoReloadOffHeadline(a),
            isFailedUI: !0,
          };
        if (n) {
          var e = r("formatDate")(o, "M j"),
            l = r("formatDate")(o, "g:i A");
          return {
            body:
              i != null
                ? r(
                    "BillingAutoReloadConstants",
                  ).autoReloadRetryScheduledBodyV3(i, l, e)
                : r("BillingAutoReloadConstants").autoReloadRetryScheduledBody(
                    l,
                    e,
                  ),
            headline: r(
              "BillingAutoReloadConstants",
            ).autoReloadPaymentFailedHeadline(a),
            isFailedUI: !1,
          };
        }
        return null;
      };
    ((l.getAutoReloadFieldsConfig = s),
      (l.shouldTurnOnAutoReload = u),
      (l.accountSupportAutoReload = c),
      (l.getAutoReloadFailedExperience = d),
      (l.getPaymentSettingsAutoReloadUI = m),
      (l.getPaymentSettingsAutoReloadUIV3 = p),
      (l.getPaymentSettingsAutoReloadFailedUI = _),
      (l.getPaymentSettingsAutoReloadFailedUIV3 = f));
  },
  98,
);
