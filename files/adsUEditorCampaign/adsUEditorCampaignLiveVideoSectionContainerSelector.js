__d(
  "adsUEditorCampaignLiveVideoSectionContainerSelector",
  [
    "AdCampaignDestination",
    "AdsBulkValueUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignRecordAccessors",
    "AdsUEditorCampaignLiveVideoSectionUtils",
    "AdsUEditorSelectors",
    "Timezone",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignFragmentIDSelector",
    "adsUEditorCampaignIGLiveVideoSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (s = r("adsCreateSelector"))(
        [(u = r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"))],
        function (t) {
          var e;
          return o("AdsBulkValueUtils").getUniformValue(
            o("AdsBulkValueUtils").aggregate(
              (e = t.map(function (e) {
                var t;
                return e == null || (t = e.promoted_object) == null
                  ? void 0
                  : t.live_video_destination;
              })) != null
                ? e
                : [],
            ),
          );
        },
        { name: i.id + ".selectedCampaignGroupL3LVACardDestination" },
      ),
      _ = s(
        [(c = r("adsUEditorAccountSelector")), p],
        function (t, n) {
          var e, r;
          return o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldApplyLVAOptimizedSettings(
            t == null || (e = t.live_video_advertiser_details) == null
              ? void 0
              : e.is_lva_toggle_on,
            t == null || (r = t.live_video_advertiser_details) == null
              ? void 0
              : r.should_default_toggle_on_from_model,
            !0,
            n != null,
          );
        },
        { name: i.id + ".selectedCampaignIsLiveVideoToggleOnSelector" },
      ),
      f = s(
        [(d = r("adsUEditorSelectedCampaignPlainObjectsSelector")), u],
        function (t, n) {
          var e = t[0],
            r = n[0];
          return o("AdsUEditorCampaignLiveVideoSectionUtils").isLVACardVisible(
            e,
            r,
          );
        },
        { name: i.id + ".isLVACardVisibleSelector" },
      ),
      g = s(
        [c, f, p],
        function (t, n, r) {
          var e, a;
          return o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldApplyLVAOptimizedSettings(
            t == null || (e = t.live_video_advertiser_details) == null
              ? void 0
              : e.is_lva_toggle_on,
            t == null || (a = t.live_video_advertiser_details) == null
              ? void 0
              : a.should_default_toggle_on_from_model,
            n,
            r != null,
          );
        },
        { name: i.id + ".shouldApplyLVAOptimizedSettingsSelector" },
      ),
      h = s(
        [d],
        function (t) {
          var e,
            n,
            r = t[0];
          return (e =
            (n = r.live_video_ad_campaign_config) == null
              ? void 0
              : n.live_video_ad_type) != null
            ? e
            : "NONE";
        },
        {
          name:
            i.id + ".adsUEditorLiveVideoAdCampaignConfigAdTypeStateSelector",
        },
      ),
      y = s(
        [
          (m = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").start_time.get,
            ),
          ),
          m(
            e.campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").end_time.get,
            ),
          ),
          m(
            e.campaign.bulkByAccessor(
              r("AdsCampaignRecordAccessors").lifetime_budget.get,
            ),
          ),
          d,
          h,
          r("adsUEditorCampaignIGLiveVideoSelector"),
        ],
        function (t, n, r, o, a, i) {
          var e;
          return C(
            t,
            n,
            r,
            ((e = o[0]) == null ? void 0 : e.live_video_ad_campaign_config) !=
              null,
            a,
            i,
          );
        },
        { name: i.id + ".shouldShowLVAOptimizedSettingsGuidanceSelector" },
      );
    function C(e, t, n, r, a, i) {
      return i
        ? o("AdsCampaignLiveVideoAdsUtils").isSettingOptimizedForLVA(
            o("Timezone").getEnvironmentTimezoneID(),
            e,
            t,
            n,
            !0,
          )
        : r &&
            o("AdsCampaignLiveVideoAdsUtils").isSettingOptimizedForLVA(
              o("Timezone").getEnvironmentTimezoneID(),
              e,
              t,
              n,
              !1,
              a === "SCHEDULED_LIVE",
            );
    }
    var b = s(
        [_, c, p],
        function (t, n, r) {
          var e;
          if (r != null) {
            var o, a;
            return (o =
              (a = n.live_video_advertiser_details) == null
                ? void 0
                : a.lva_default_budget) != null
              ? o
              : 35e3;
          }
          return t
            ? (e = n.live_video_advertiser_details) == null
              ? void 0
              : e.lva_default_budget
            : null;
        },
        { name: i.id + ".liveVideoAdsDefaultBudgetSelector" },
      ),
      v = s(
        [c],
        function (t) {
          var e;
          return (e = t.live_video_advertiser_details) == null
            ? void 0
            : e.lva_default_budget;
        },
        { name: i.id + ".liveVideoAdsDefaultBudgetSelectorWithoutToggle" },
      ),
      S = s(
        [d],
        function (t) {
          var e,
            n = t[0];
          return (
            ((e = n.live_video_ad_campaign_config) == null
              ? void 0
              : e.live_video_ad_type) != null
          );
        },
        {
          name:
            i.id + ".adsUEditorLiveVideoAdCampaignConfigIsToggledStateSelector",
        },
      ),
      R = s(
        [d],
        function (t) {
          var e = t[0];
          return e.created_time != null;
        },
        { name: i.id + ".adsUEditorLiveVideoAdCampaignIsCreatedSelector" },
      ),
      L = s(
        [
          e.campaign.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null ? void 0 : t.page_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id + ".adsUEditorCampaignPageIdSelector" },
      ),
      E = s(
        [
          m(
            e.campaign.bulkByAccessorToJS(function (e) {
              return e.destination_type;
            }),
            r("AdCampaignDestination").UNDEFINED,
          ),
        ],
        function (t) {
          return t;
        },
        { name: i.id + ".adsUEditorLiveVideoAdLiveVideoDestinationSelector" },
      ),
      k = s(
        [u],
        function (t) {
          var e,
            n = t[0];
          return (e = n == null ? void 0 : n.collaborative_ads_partner_info) !=
            null
            ? e
            : null;
        },
        { name: i.id + ".adsUEditorCpasSelectedPartnerSelector" },
      ),
      I = s(
        [u],
        function (t) {
          var e,
            n = t[0];
          return (
            (n == null || (e = n.promoted_object) == null
              ? void 0
              : e.product_catalog_id) != null
          );
        },
        { name: i.id + ".adsUEditorPromoteCatalogSalesIsToggledStateSelector" },
      ),
      T = s(
        [u],
        function (t) {
          var e = t[0];
          return (e == null ? void 0 : e.is_pca_unified) === !0;
        },
        { name: i.id + ".adsUEditorIsPcaUnifiedSelector" },
      ),
      D = r("adsCreateStructuredSelector")(
        {
          accountID: r("adsUEditorAccountIDSelector"),
          fragmentID: r("adsUEditorCampaignFragmentIDSelector"),
          campaignGroupIDs: o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          campaignIDs: r("adsUEditorSelectedCampaignIDsSelector"),
          isToggleOnFromSpec: S,
          isPcaUnified: T,
          campaignCreated: R,
          campaignDestination: E,
          pageID: L,
          cpasSelectedPartner: k,
          promoteCatalogSales: I,
        },
        i.id + ".adsUEditorCampaignLiveVideoSectionContainerSelector",
      );
    ((l.isLVACardVisibleSelector = f),
      (l.shouldApplyLVAOptimizedSettingsSelector = g),
      (l.adsUEditorLiveVideoAdCampaignConfigAdTypeStateSelector = h),
      (l.shouldShowLVAOptimizedSettingsGuidanceSelector = y),
      (l.shouldShowLVAOptimizedSettingsGuidance = C),
      (l.liveVideoAdsDefaultBudgetSelector = b),
      (l.liveVideoAdsDefaultBudgetSelectorWithoutToggle = v),
      (l.adsUEditorCampaignLiveVideoSectionContainerSelector = D));
  },
  98,
);
