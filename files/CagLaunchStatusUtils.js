__d(
  "CagLaunchStatusUtils",
  [
    "AdsAPIObjectives",
    "AdsDynamicAdsUtils",
    "AdsPromotedObjectTypes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null;
    }
    function s(t, n) {
      if (r("justknobx")._("2245")) return !1;
      var a =
        (!o("AdsDynamicAdsUtils").areAllDynamicAds(
          t.bulkProductSetID,
          t.promotedObjectType,
        ) ||
          t.isCollaborativeAdCampaign) &&
        t.objective.getValues().every(function (e, n) {
          var o = t.promotedObjectType
            ? t.promotedObjectType.getValueForIndex(n)
            : null;
          return (
            (e === r("AdsAPIObjectives").OUTCOME_SALES &&
              (o === r("AdsPromotedObjectTypes").PIXEL ||
                o === r("AdsPromotedObjectTypes").WEBSITE ||
                o === r("AdsPromotedObjectTypes").MOBILE_APP)) ||
            e === r("AdsAPIObjectives").APP_INSTALLS ||
            (e === r("AdsAPIObjectives").OUTCOME_SALES &&
              t.isClickToMessagingDestination === !0) ||
            (e === r("AdsAPIObjectives").OUTCOME_SALES &&
              o === r("AdsPromotedObjectTypes").PHONE_CALL) ||
            (e === r("AdsAPIObjectives").OUTCOME_SALES &&
              o === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL)
          );
        });
      return a && e(t.account, n) && !t.isDCOAdgroup;
    }
    function u(t, n, o) {
      return r("justknobx")._("2245") || !e(t, !1)
        ? !1
        : ((n === r("AdsAPIObjectives").OUTCOME_SALES ||
            n === r("AdsAPIObjectives").CONVERSIONS) &&
            (o === r("AdsPromotedObjectTypes").PIXEL ||
              o === r("AdsPromotedObjectTypes").WEBSITE ||
              o === r("AdsPromotedObjectTypes").MOBILE_APP)) ||
            n === r("AdsAPIObjectives").APP_INSTALLS;
    }
    ((l.checkPassGKByAdAccount = e),
      (l.shouldShowFlexibleFormatForCAG = s),
      (l.isEligibleForCAGFlow = u));
  },
  98,
);
