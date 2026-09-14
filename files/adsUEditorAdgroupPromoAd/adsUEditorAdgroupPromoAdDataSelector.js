__d(
  "adsUEditorAdgroupPromoAdDataSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUtils",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsPageUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorSelectorUtils",
    "AdsUEditorSelectors",
    "PromoAdsAdsManagerAdCreativeUtils",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "isStringNullOrEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (s = r("adsCreateSelector"))(
        [
          (u = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).adgroup.bulkBySemanticField(
              r("AdsAdgroupSemanticFields").pageID.get,
            ),
            null,
          ),
          e.adgroup.valuesByAccessor(
            r("AdsAdgroupRecordAccessors").creative.get,
          ),
        ],
        function (t, n) {
          if (r("isTruthy")(t)) return t;
          if (n[0]) return o("AdsPageUtils").getPageIDFromCreativeField(n[0]);
        },
        { name: i.id + ".pageIdSelector" },
      ),
      d = s(
        [
          e.adgroup.valuesByAccessor(
            r("AdsAdgroupRecordAccessors").creative.get,
          ),
        ],
        function (t) {
          var e;
          return (e = t[0]) == null || (e = e.facebook_branded_content) == null
            ? void 0
            : e.sponsor_page_id;
        },
        { name: i.id + ".secondaryPageIdSelector" },
      ),
      m = s(
        [
          u(
            e.campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").promoted_object.omnichannel_object
                .pixel.get,
            ),
          ),
          u(
            e.campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get,
            ),
          ),
        ],
        function (t, n) {
          var e;
          if (n != null) return n;
          var r =
            t == null || (e = t.first()) == null ? void 0 : e.get("pixel_id");
          return r == null || typeof r != "string" ? null : r;
        },
        { name: i.id + ".pixelIDSelector" },
      ),
      p = u(
        e.campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").promoted_object.product_set_id.get,
        ),
      ),
      _ = s(
        [
          p,
          u(
            e.adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.product_set_id.get,
            ),
          ),
        ],
        function (t, n) {
          return t != null ? t : n;
        },
        { name: i.id + ".productSetIDSelector" },
      ),
      f = s(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = e.adgroup,
              n = o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(e);
            return o(
              "PromoAdsAdsManagerAdCreativeUtils",
            ).getCouponCodeFromAdgroup(
              t,
              n,
              o("PromoAdsAdsManagerAdCreativeUtils").PromoCodeExtractionField
                .PRIMARY_TEXT,
            );
          });
        }),
        { name: i.id + ".l1MessageSelector" },
      ),
      g = s(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = e.adgroup,
              n = o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(e);
            return o(
              "PromoAdsAdsManagerAdCreativeUtils",
            ).getCouponCodeFromAdgroup(
              t,
              n,
              o("PromoAdsAdsManagerAdCreativeUtils").PromoCodeExtractionField
                .HEADLINE,
            );
          });
        }),
        { name: i.id + ".l1HeadlineSelector" },
      ),
      h = s(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
          return e.map(function (e) {
            var t = e.adgroup,
              n = o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(e);
            return o(
              "PromoAdsAdsManagerAdCreativeUtils",
            ).getCouponCodeFromAdgroup(
              t,
              n,
              o("PromoAdsAdsManagerAdCreativeUtils").PromoCodeExtractionField
                .DESCRIPTION,
            );
          });
        }),
        { name: i.id + ".l1DescriptionSelector" },
      ),
      y = s(
        [
          e.adgroup.valuesByAccessor(function (e) {
            return e;
          }),
        ],
        function (t) {
          var e = t[0];
          return e != null && o("AdsAdgroupUtils").isPartnershipAd(e);
        },
        { name: i.id + ".isBrandedContentEnabledSelector" },
      ),
      C = s(
        [f],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, {
            code: "",
            extractionFeatureType: null,
          });
          return e;
        },
        { name: i.id + ".primaryTextCodeSelector" },
      ),
      b = s(
        [g],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, {
            code: "",
            extractionFeatureType: null,
          });
          return e;
        },
        { name: i.id + ".headlineCodeSelector" },
      ),
      v = s(
        [h],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, {
            code: "",
            extractionFeatureType: null,
          });
          return e;
        },
        { name: i.id + ".descriptionCodeSelector" },
      ),
      S = s(
        [C, b, v],
        function (t, n, o) {
          return r("isStringNullOrEmpty")(t.code)
            ? r("isStringNullOrEmpty")(n.code)
              ? r("isStringNullOrEmpty")(o.code)
                ? null
                : babelHelpers.extends({}, o, {
                    source: "AD_CREATIVE_DESCRIPTION",
                  })
              : babelHelpers.extends({}, n, { source: "AD_CREATIVE_HEADLINE" })
            : babelHelpers.extends({}, t, {
                source: "AD_CREATIVE_PRIMARY_TEXT",
              });
        },
        { name: i.id + ".creativeCouponCodeSelector" },
      );
    ((l.pageIdSelector = c),
      (l.secondaryPageIdSelector = d),
      (l.pixelIDSelector = m),
      (l.productSetIDSelector = _),
      (l.isBrandedContentEnabledSelector = y),
      (l.creativeCouponCodeSelector = S));
  },
  98,
);
