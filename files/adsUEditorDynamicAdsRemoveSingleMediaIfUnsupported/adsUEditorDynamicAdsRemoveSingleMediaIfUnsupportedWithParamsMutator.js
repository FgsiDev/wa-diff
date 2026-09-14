__d(
  "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupportedWithParamsMutator",
  [
    "AdsDynamicAdsFormatUtils",
    "AdsLinkPostFormat",
    "ClickToWhatsAppFeatureGating",
    "adsSupportsDynamicAdsSingleImageFormat",
    "adsUEditorRemoveDynamicAdsSpecificCreativeFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      (u === void 0 && (u = !1), c === void 0 && (c = !1));
      var d =
          s != null
            ? s
            : o("AdsDynamicAdsFormatUtils").getDynamicAdLinkPostFormat(e),
        m = o("ClickToWhatsAppFeatureGating").isEligibleForCTXAdvantageCatalog(
          t.destination_type,
          !1,
        );
      return r("adsSupportsDynamicAdsSingleImageFormat")(n, a, i, l, u, c, m) ||
        d !== r("AdsLinkPostFormat").SINGLE
        ? e
        : r("adsUEditorRemoveDynamicAdsSpecificCreativeFields")(e);
    }
    l.default = e;
  },
  98,
);
