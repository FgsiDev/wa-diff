__d(
  "AdsAccountStatusValidator",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAccountPaths",
    "AdsAbstractValidator",
    "AdsAccountBillingWizardDialogueAction",
    "AdsAccountErrorsLoggingUtils",
    "AdsError",
    "AdsMgmtAccountReactivationContent",
    "AdsStackedErrorsCardUtils",
    "BanhammerEnforcementText",
    "URI",
    "XAdsAccountAdvertisingAccessControllerRouteBuilder",
    "errorSummary",
    "expandPaths",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m =
        ((e = {}),
        (e[101] = {
          errorCode: 3065003,
          errorDesc: u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your account is closed and can't be used to run ads. You can create a new ad account or make this one active again",
            );
          }, {}),
          errorSummary: (d = r("errorSummary"))._(function (e) {
            return e._(/*BTDS*/ "Account Closed");
          }),
        }),
        (e[100] = {
          errorCode: 3065004,
          errorDesc: u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your account is currently pending closure and is unabled to run ads. You can cancel closing your account to run ads again.",
            );
          }, {}),
          errorSummary: d._(function (e) {
            return e._(/*BTDS*/ "Account Pending Closure");
          }),
        }),
        (e[3] = {
          errorCode: 3065005,
          errorDesc: u._(function (e, t) {
            return e._(
              /*BTDS*/ "This ad account has a balance that needs to be paid before you can publish. Please verify your billing information is up to date.",
            );
          }, {}),
          errorSummary: d._(function (e) {
            return e._(/*BTDS*/ "Account unsettled");
          }),
        }),
        (e[2] = {
          errorCode: 3065002,
          errorDesc: u._(function (e, t) {
            return e._(
              /*BTDS*/ "Account has been disabled. You can't use this account to create ads.",
            );
          }, {}),
          errorSummary: d._(function (e) {
            return e._(/*BTDS*/ "Account Disabled");
          }),
        }),
        e),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getName = function () {
            return i.id;
          }),
          (n.getDependencies = function () {
            return {
              account: r("expandPaths")([
                r("AdsAPIAccountPaths").ACCOUNT_ID,
                r("AdsAPIAccountPaths").ACCOUNT_STATUS,
                r("AdsAPIAccountPaths").IS_CLOSED_BY_ADVERTISER_COMPROMISE_BOT,
              ]),
            };
          }),
          (n.shouldValidate = function (t) {
            var e = t.account;
            return (e == null ? void 0 : e.account_status) != null;
          }),
          (n.validate = function (t) {
            var e = t.account,
              n = [];
            return (
              e != null &&
                e.account_status &&
                (e.account_status === 101 ||
                  e.account_status === 100 ||
                  e.account_status === 3 ||
                  e.account_status === 2) &&
                n.push(
                  this.$AdsAccountStatusValidator$p_1(
                    e.account_id,
                    e.account_status,
                    e.is_closed_by_advertiser_compromise_bot,
                  ),
                ),
              n
            );
          }),
          (n.$AdsAccountStatusValidator$p_1 = function (t, n, a) {
            var e = m[n].errorCode,
              l = m[n].errorDesc,
              s =
                n === 2
                  ? r("BanhammerEnforcementText").SEE_DETAILS_LINK_TEXT()
                  : r("AdsMgmtAccountReactivationContent")[n].actionButtonLabel,
              u =
                n === 2
                  ? function () {
                      o("AdsAccountErrorsLoggingUtils").logAccountErrorCTAClick(
                        {
                          accountStatus: n,
                          context: o("AdsAccountErrorsLoggingUtils")
                            .PublishBlockCTAContext.RHR,
                        },
                      );
                      var e = r(
                        "XAdsAccountAdvertisingAccessControllerRouteBuilder",
                      ).buildURL({ callsite: 1, id: t, enforcement: 4 });
                      (c || (c = r("URI"))).goURIOnNewWindow(e);
                    }
                  : function () {
                      (o(
                        "AdsAccountErrorsLoggingUtils",
                      ).logAccountErrorCTAClick({
                        accountStatus: n,
                        context: o("AdsAccountErrorsLoggingUtils")
                          .PublishBlockCTAContext.RHR,
                      }),
                        r("AdsAccountBillingWizardDialogueAction").dispatch(
                          { isDialogShown: !0 },
                          {
                            line: "145",
                            module: "AdsAccountStatusValidator.js",
                            moduleID: i.id,
                          },
                        ));
                    },
              d =
                n === 2
                  ? o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType.LINK
                  : o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType.MODAL;
            if (a === !0) {
              var p = "Your account is closed to prevent compromise";
              return new (r("AdsError"))(e, p, {
                level: r("AdsError").Level.WARN,
                title: m[n].errorSummary,
              });
            }
            return new (r("AdsError"))(e, l, {
              cta: s,
              level: r("AdsError").Level.WARN,
              customCTA: u,
              customCTAType: d,
              title: m[n].errorSummary,
              additionalInfo: String(n),
            });
          }),
          t
        );
      })(r("AdsAbstractValidator")),
      _ = new p();
    l.default = _;
  },
  226,
);
