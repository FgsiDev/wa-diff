__d(
  "adsUEditorIsAdgroupMultiUploadEligibleSelectorUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCFastTrackV2Utils",
    "AdsAssetFeedUtils",
    "AdsCreativeFeaturesUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeMultiMediaLoggingUtils",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdsUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPromotedObjectTypes",
    "AdsSensitiveVerticalUtils",
    "AdsWizardMediaPickerMultiUploadUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map([
        [
          (s = o("AdsAPIObjectives")).LINK_CLICKS,
          [(e = r("AdsPromotedObjectTypes")).IG_PROFILE_AND_FB_PAGE],
        ],
        [
          s.OUTCOME_ENGAGEMENT,
          [e.PAGE, e.FACEBOOK_PAGE, e.FACEBOOK, e.IG_PROFILE_AND_FB_PAGE],
        ],
        [
          s.OUTCOME_LEADS,
          [e.WEBSITE_AND_INSTANT_FORM, e.WEBSITE_AND_PHONE_CALL],
        ],
        [s.OUTCOME_SALES, [e.WEBSITE_AND_IN_STORE, e.WEBSITE_AND_PHONE_CALL]],
      ]);
    function c(e, t) {
      return r("justknobx")._("5010") || t
        ? !1
        : e != null
          ? e
          : o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
              "silent",
            );
    }
    function d(e, t) {
      var n;
      if (r("gkx")("19240")) return !0;
      if ((e.length > 1 && e.length !== 0) || e.length === 0) return !1;
      var a = e[0],
        i = a.adgroup,
        l = a.campaign,
        s = a.campaignGroup;
      if (i == null || l == null || s == null) return !1;
      if (
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          i,
          "multi_media",
        ) ||
        o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(s, i)
      )
        return !0;
      var c = o("AdsAPICampaignGroupRecordUtils").getObjective(s);
      if (c === o("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY) return !1;
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(c, l);
      if (
        !r("gkx")("2437") &&
        u.has(c) &&
        (n = u.get(c)) != null &&
        n.includes(d)
      )
        return !1;
      var m = o("AdsAssetFeedUtils").isAAAFromRecord(i),
        p = r("gkx")("18926"),
        _ = r("gkx")("24843"),
        f = [];
      return (
        !p &&
          !_ &&
          o("AdsSensitiveVerticalUtils").isAdAccountOnBig6AgencyBlocklist() &&
          f.push("big6_agency_blocklist"),
        !p &&
          !_ &&
          o("AdsAPlusCFastTrackV2Utils").isAccountInSensitiveVerticals() &&
          f.push("sensitive_verticals"),
        m && f.push("smart_app_promotion"),
        o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(i) &&
          !r("gkx")("1637") &&
          f.push("shops_ads"),
        !_ &&
          o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(s) &&
          f.push("regulated_category"),
        o("AdsDynamicAdsUtils").isDynamicAd(i) && f.push("dynamic_ad"),
        (o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(i) ||
          o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(i) != null ||
          o("AdsDLOLanguageUtils").getAddedLanguagesCountFromAdgroup(i) > 0) &&
          f.push("dlo_ad"),
        f.length > 0
          ? (o(
              "AdsCreativeMultiMediaLoggingUtils",
            ).logMultiMediaIneligibilityReasons(
              i == null ? void 0 : i.id,
              f,
              c,
              d,
              t,
            ),
            !1)
          : null
      );
    }
    ((l.adsUEditorIsAdgroupMultiUploadEligible = c),
      (l.adsUEditorIsAdgroupMultiUploadEligibleWithoutGK = d));
  },
  98,
);
