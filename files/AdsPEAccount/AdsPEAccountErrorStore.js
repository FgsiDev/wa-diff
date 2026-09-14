__d(
  "AdsPEAccountErrorStore",
  [
    "errorCode",
    "fbt",
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsDraftSelectionStore",
    "AdsError",
    "AdsPEAccountUtils",
    "AdsPEErrorDismissAccountErrorActionFlux",
    "AdsPEPurgeArchiveActions",
    "AdsPERedirect",
    "AdsSAIPTopErrorExperiencesUtil",
    "AdsSelectorUtils",
    "FluxDerivedStore",
    "GeoButton.react",
    "GeoButtonGroup.react",
    "GeoLink.react",
    "QPLUserFlow",
    "XAdsAccountAdvertisingAccessControllerRouteBuilder",
    "adsCreateStoreSelector",
    "adsFormatErrorMessage",
    "adsMgmtIsCommonCampaignTableSectionSelector",
    "adsPaymentsPaymentMethodIsCreditCardExpired",
    "adsPrimaryCreditCardExpirationSelector",
    "adsUEditorShopLevelActivationSAIPHomebannerSelectors",
    "geoMargin",
    "immutable",
    "isFalsey",
    "isTruthy",
    "qpl",
    "react",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m = c || (c = o("react")),
      p = [
        "archived_adgroup_count",
        "archived_campaign_count",
        "archived_campaign_group_count",
      ],
      _ = [].concat(
        r("AdsAccountStore").getSelectedAccount.getStores(),
        (d || (d = o("AdsSelectorUtils"))).getStores([
          r("adsPrimaryCreditCardExpirationSelector"),
          o("adsUEditorShopLevelActivationSAIPHomebannerSelectors")
            .adsUEditorShopLevelActivationSAIPHomebannerSelector,
          o("adsMgmtIsCommonCampaignTableSectionSelector")
            .adsMgmtIsCommonCampaignTableSectionSelector,
        ]),
        [r("AdsDraftSelectionStore")],
      ),
      f = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getLatestForCurrentAccountSelector = r("adsCreateStoreSelector")(
              [n, r("AdsAccountStore")],
              function () {
                var e = r("AdsAccountStore").getSelectedAccountID();
                if (r("isFalsey")(e)) return null;
                var t = n.get(e).last();
                return t && !n.isErrorDismissed(e, t) ? t : null;
              },
              { name: i.id },
            )),
            (n.hasCreditCardExpiredForCurrentAccountSelector = r(
              "adsCreateStoreSelector",
            )(
              [n, r("AdsAccountStore")],
              function () {
                var e = r("AdsAccountStore").getSelectedAccountID();
                if (r("isFalsey")(e)) return !1;
                var t = n.get(e).get("credit_card_expired");
                return t != null && !n.isErrorDismissed(e, t);
              },
              { name: i.id },
            )),
            (n.$AdsPEAccountErrorStore$p_1 = r("immutable").Map()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getStores = function () {
            return _;
          }),
          (a.__getData = function (t) {
            var e = r("adsPrimaryCreditCardExpirationSelector")(t),
              n = o(
                "adsUEditorShopLevelActivationSAIPHomebannerSelectors",
              ).adsUEditorShopLevelActivationSAIPHomebannerSelector();
            return {
              accountLoadObject: r("AdsAccountStore").getSelectedAccount(),
              accountID: t,
              draftID: r("AdsDraftSelectionStore").getCached(t),
              primaryCreditCardExpiration: e,
              SAIPActivationData: n,
              buttonRef: m.createRef(),
            };
          }),
          (a.__computeResult = function (t, n) {
            var e = n.SAIPActivationData,
              a = n.accountLoadObject,
              i = n.buttonRef,
              l = n.draftID,
              s = n.primaryCreditCardExpiration,
              c = [],
              d = a.getValue();
            if (r("isTruthy")(e)) {
              var p = e.cmsID,
                _ = e.couponAmount,
                f = e.eligibleSAIPExperiences,
                g = e.optimizedOnboardingRecommendations;
              r("QPLUserFlow").startFromNavStart(r("qpl")._(544220891, "1560"));
              var h = o(
                "AdsSAIPTopErrorExperiencesUtil",
              ).getContentForEligibleExperience(f, _, g, p);
              if (r("isTruthy")(h) && r("isTruthy")(h.errorKey)) {
                var y = h.body,
                  C = h.heading,
                  b = h.onClick,
                  v = h.primaryButtonLabel,
                  S = h.secondaryButtonLabel,
                  R = h.secondaryOnClick,
                  L = h.statusOverride,
                  E = m.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    label: v,
                    onClick: b,
                    variant: "primary",
                    xstyle: r("geoMargin").top8,
                  }),
                  k =
                    S != null && R != null
                      ? m.jsx(r("GeoButton.react"), {
                          "data-testid": void 0,
                          label: S,
                          onClick: R,
                          variant: "default",
                          xstyle: r("geoMargin").top8,
                        })
                      : null;
                c.push(
                  r("AdsError").createRecommendation(h.errorKey, y, {
                    buttonRef: i,
                    statusOverride: L,
                    title: C,
                    ctaButton: m.jsxs(r("GeoButtonGroup.react"), {
                      containerRef: i,
                      children: [E, k],
                    }),
                  }),
                );
              }
            }
            s != null &&
              r("adsPaymentsPaymentMethodIsCreditCardExpired")(s) &&
              c.push(
                r("AdsError").createError(
                  "credit_card_expired",
                  u._(
                    /*BTDS*/ "The credit card used for this ad account has expired. Please go to {=m1} to update your payment method.",
                    [
                      u._implicitParam(
                        "=m1",
                        m.jsx(r("GeoLink.react"), {
                          href: o("AdsPERedirect").getPaymentLink(),
                          target: "_blank",
                          children: u._(/*BTDS*/ "Billing"),
                        }),
                      ),
                    ],
                  ),
                ),
              );
            var I = this.$AdsPEAccountErrorStore$p_2(a),
              T = I.needsPurge,
              D = I.totalItemsToPurge;
            if (T) {
              var x = function () {
                  d && o("AdsPEPurgeArchiveActions").showDialog(d, D);
                },
                $ = u._(
                  /*BTDS*/ "You've reached the storage limit of deleted items that can be archived in Ads Manager. You'll need to {=remove some} before you can delete more.",
                  [
                    u._param(
                      "=remove some",
                      m.jsx(r("GeoLink.react"), {
                        onClick: x,
                        children: u._(/*BTDS*/ "remove some"),
                      }),
                    ),
                  ],
                );
              c.push(r("AdsError").createError("too_many_archived_items", $));
            }
            l &&
              l.hasError() &&
              c.push(
                r("AdsError").createError(
                  "draft_error",
                  u._(
                    /*BTDS*/ "Unable to create draft: {error message}. You will be unable to modify any ads in this account.",
                    [
                      u._param(
                        "error message",
                        r("adsFormatErrorMessage")(l.getError()),
                      ),
                    ],
                  ),
                ),
              );
            var P = d == null ? void 0 : d.account_status,
              N = r(
                "XAdsAccountAdvertisingAccessControllerRouteBuilder",
              ).buildURL({
                callsite: 2,
                enforcement: 4,
                id: d == null ? void 0 : d.account_id,
              }),
              M = u._(/*BTDS*/ "See details");
            return (
              P === 101 &&
                c.push(
                  r("AdsError").createError(
                    1885316,
                    u._(
                      /*BTDS*/ "You can't use this Business Account to advertise. Select {=m2} to learn why, or request a review if you believe it was incorrectly restricted.",
                      [
                        u._implicitParam(
                          "=m2",
                          m.jsx("b", { children: u._(/*BTDS*/ "See details") }),
                        ),
                      ],
                    ),
                    {
                      level: null,
                      title: u._(
                        /*BTDS*/ "We restricted your Business Account",
                      ),
                      ctaButton: m.jsx(r("GeoButton.react"), {
                        href: N,
                        label: M,
                      }),
                    },
                  ),
                ),
              r("immutable").OrderedMap(
                c.map(function (e) {
                  return [e.key, e];
                }),
              )
            );
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
          }),
          (a.__onDispatch = function (n) {
            t.prototype.__onDispatch.call(this, n);
            var e = n.action;
            switch (e.type) {
              case o("AdsPEErrorDismissAccountErrorActionFlux").actionType:
                this.$AdsPEAccountErrorStore$p_3(e.accountID, e.errorKey);
                break;
            }
          }),
          (a.isErrorDismissed = function (t, n) {
            var e;
            return !!(
              (e = this.$AdsPEAccountErrorStore$p_1.get(t)) != null &&
              e.has(n.key)
            );
          }),
          (a.$AdsPEAccountErrorStore$p_3 = function (t, n) {
            var e = this.$AdsPEAccountErrorStore$p_1,
              o = e.get(t) || r("immutable").Set();
            ((this.$AdsPEAccountErrorStore$p_1 = e.set(t, o.add(n))),
              this.__emitChange());
          }),
          (a.$AdsPEAccountErrorStore$p_2 = function (t) {
            var e = t.getValue();
            if (t.isLoading() || e == null)
              return { needsPurge: !1, totalItemsToPurge: 0 };
            var n = o("AdsPEAccountUtils").getArchiveInfo(),
              r = n.finalArchiveSize,
              a = n.hardArchiveLimit,
              i = n.warnArchiveSize,
              l = !1,
              s = 0;
            return (
              p.forEach(function (t) {
                (+e[t] > i || +e[t] >= a) && (l = !0);
                var n = Math.max(+e[t] - r, 0);
                s += n;
              }),
              { needsPurge: l, totalItemsToPurge: s }
            );
          }),
          n
        );
      })(r("FluxDerivedStore"));
    f.__moduleID = i.id;
    var g = new f();
    l.default = g;
  },
  226,
);
