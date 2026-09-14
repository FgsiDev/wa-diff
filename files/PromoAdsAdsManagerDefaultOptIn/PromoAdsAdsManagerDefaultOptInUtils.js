__d(
  "PromoAdsAdsManagerDefaultOptInUtils",
  [
    "IncentivesAdsManagerUtils",
    "PromoAdsAdsManagerDefaultOptInStoreUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u) {
      var c,
        d = a.includes("AD_CREATIVE_MANUAL_COUPON_CODES"),
        m = n.every(function (t) {
          var n = t.adgroup,
            r = t.campaign,
            a = t.campaignGroup,
            i = { campaign: r, campaignGroup: a, adgroup: n };
          return o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(i, e, !1);
        }),
        p = (c = o(
          "PromoAdsAdsManagerUtils",
        )).shouldEnablePromoAdToggleByDefault(e, r.getValue());
      return {
        shouldShowPromoAdField: m,
        shouldEnablePromoAdToggleByDefaultInvalidReason: p,
        creativeCouponCodeSourcePair: t,
        promoAdsDefaultOptInExclusiveAdgroupIDs:
          c.getPromoAdsDefaultOptInExclusiveAdgroupIDs(n, e, s, i),
        promoAdsDefaultOptInOldAdgroupIDs: c.getOldAdgroupIDs(n),
        promoAdsDefaultOptInEditedNotOptedInAdgroupIDs: o(
          "PromoAdsAdsManagerDefaultOptInStoreUtils",
        ).getEditedNotOptedInAdgroupIDs(n),
        emailCaptureDefaultOptInExclusiveAdgroupIDs:
          c.getEmailCaptureDefaultOptInExclusiveAdgroupIDs(n, e, s, l),
        emailCaptureDefaultOptInEditedNotOptedInAdgroupIDs: o(
          "PromoAdsAdsManagerDefaultOptInStoreUtils",
        ).getEmailCaptureEditedNotOptedInAdgroupIDs(n),
        promoAdAccountStickyStoreLoadObject: r,
        isManualCodeExists: d,
        commonLogData: u,
      };
    }
    function s(e, t, n, r) {
      return n ||
        (r &&
          o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsSuppressDOIOnEditEnabled())
        ? !1
        : e ===
            o("IncentivesAdsManagerUtils")
              .ShouldEnablePromoAdToggleByDefaultStatus
              .AD_ACCOUNT_IS_IN_COOLDOWN
          ? c(t)
          : e == null;
    }
    function u(e, t, n, r) {
      var a, i;
      if (
        n == null ||
        !o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(e, t, !1)
      )
        return !1;
      var l = e.adgroup.id;
      return s(
        n.shouldEnablePromoAdToggleByDefaultInvalidReason,
        r,
        ((a = n.promoAdsDefaultOptInExclusiveAdgroupIDs) == null
          ? void 0
          : a.includes(l)) === !0,
        ((i = n.promoAdsDefaultOptInEditedNotOptedInAdgroupIDs) == null
          ? void 0
          : i.includes(l)) === !0,
      );
    }
    function c(e) {
      return (e == null ? void 0 : e.code) == null
        ? !1
        : (e == null ? void 0 : e.source) === "AD_CREATIVE_DESCRIPTION" ||
            (e == null ? void 0 : e.source) === "AD_CREATIVE_HEADLINE" ||
            (e == null ? void 0 : e.source) === "AD_CREATIVE_PRIMARY_TEXT";
    }
    ((l.getPromoAdsDefaultOptInStatus = e),
      (l.isPromoAdsAdgroupEligibleForDefaultOptIn = s),
      (l.isAdgroupEligibleForPromoDefaultOptIn = u));
  },
  98,
);
