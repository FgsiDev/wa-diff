__d(
  "AdsInstreamCapabilityUtils",
  [
    "AdsAPIObjectives",
    "AdsAppUtilsShared",
    "AdsPagePostProvider",
    "AdsPlacementAssetCustomizationTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function s(e, t) {
      if (!e || t == null) return !1;
      var n = o("AdsAppUtilsShared").isAppInstall(t),
        a = t === r("AdsAPIObjectives").CONVERSIONS,
        i = t === r("AdsAPIObjectives").LINK_CLICKS,
        l = t === r("AdsAPIObjectives").POST_ENGAGEMENT,
        s = t === r("AdsAPIObjectives").REACH,
        u =
          t === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
          t === r("AdsAPIObjectives").BRAND_AWARENESS,
        c = t === r("AdsAPIObjectives").MESSAGES,
        d = t === r("AdsAPIObjectives").LEAD_GENERATION,
        m = t === r("AdsAPIObjectives").VIDEO_VIEWS;
      return n || a || i || l || m || s || c || d || u;
    }
    function u(e) {
      var t = e === r("AdsAPIObjectives").LINK_CLICKS,
        n =
          e === r("AdsAPIObjectives").CONVERSIONS ||
          e === r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
        o = e === r("AdsAPIObjectives").APP_INSTALLS,
        a = e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
        i = e === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY;
      return t || n || o || i || a;
    }
    function c(e) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").WEBSITE_CONVERSIONS ||
        e === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function d(e) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").WEBSITE_CONVERSIONS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        e === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ||
        e === r("AdsAPIObjectives").REACH ||
        (r("gkx")("22311") && e === r("AdsAPIObjectives").POST_ENGAGEMENT) ||
        e === r("AdsAPIObjectives").MESSAGES ||
        !1
      );
    }
    function m(e, t) {
      switch (e) {
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatImage:
          return !1;
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo:
          return (
            t === r("AdsAPIObjectives").CONVERSIONS ||
            t === r("AdsAPIObjectives").WEBSITE_CONVERSIONS ||
            t === r("AdsAPIObjectives").LINK_CLICKS ||
            t === r("AdsAPIObjectives").BRAND_AWARENESS ||
            t === r("AdsAPIObjectives").POST_ENGAGEMENT ||
            t === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ||
            t === r("AdsAPIObjectives").VIDEO_VIEWS ||
            t === r("AdsAPIObjectives").REACH
          );
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatCarousel:
          return !1;
      }
      return !1;
    }
    function p(e, t) {
      switch (e) {
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatImage:
          return (
            t === r("AdsAPIObjectives").CONVERSIONS ||
            t === r("AdsAPIObjectives").WEBSITE_CONVERSIONS ||
            t === r("AdsAPIObjectives").APP_INSTALLS ||
            t === r("AdsAPIObjectives").REACH ||
            t === r("AdsAPIObjectives").LEAD_GENERATION ||
            t === r("AdsAPIObjectives").LINK_CLICKS ||
            t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
            t === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ||
            (t === r("AdsAPIObjectives").POST_ENGAGEMENT &&
              r("gkx")("22311")) ||
            t === r("AdsAPIObjectives").MESSAGES ||
            !1
          );
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatVideo:
          return (
            t === r("AdsAPIObjectives").CONVERSIONS ||
            t === r("AdsAPIObjectives").WEBSITE_CONVERSIONS ||
            t === r("AdsAPIObjectives").VIDEO_VIEWS ||
            t === r("AdsAPIObjectives").POST_ENGAGEMENT ||
            t === r("AdsAPIObjectives").LINK_CLICKS ||
            t === r("AdsAPIObjectives").APP_INSTALLS ||
            t === r("AdsAPIObjectives").BRAND_AWARENESS ||
            t === r("AdsAPIObjectives").REACH ||
            t === r("AdsAPIObjectives").LEAD_GENERATION ||
            t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
            t === r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY ||
            t === r("AdsAPIObjectives").MESSAGES ||
            !1
          );
        case o("AdsPlacementAssetCustomizationTypes")
          .AdsPlacementCustomizationMediaFormatCarousel:
          return u(t);
      }
      return !1;
    }
    function _(e) {
      var t;
      if (e == null) return !1;
      var n = r("AdsPagePostProvider")().get(e);
      return (
        n.isDone() &&
        ((t = n.getValue()) == null ? void 0 : t.is_broadcast) === !0 &&
        r("gkx")("12584")
      );
    }
    ((l.isEligibleForInstreamCollectionAds = e),
      (l.isEligibleForInstreamLongVideoAds = s),
      (l.isEligibleForInstreamImageCarouselAds = u),
      (l.isEligibleForDesktopInstreamNonInterruptiveAds = c),
      (l.isEligibleForMobileInstreamNonInterruptiveAds = d),
      (l.isEligibleForDesktopInstreamInPlayerAds = m),
      (l.isEligibleForMobileInstreamInPlayerAds = p),
      (l.isEligibleForLiveVideoAds = _));
  },
  98,
);
