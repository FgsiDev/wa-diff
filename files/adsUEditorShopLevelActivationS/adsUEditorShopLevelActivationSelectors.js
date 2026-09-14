__d(
  "adsUEditorShopLevelActivationSelectors",
  [
    "AdsAccountStore",
    "AdsCampaignGroupRecordAccessors",
    "AdsUEditorSelectors",
    "LoadObject",
    "ShopsAdsShopLevelActivationCouponAlreadyAppliedToCampaignGroupProvider",
    "ShopsAdsShopLevelActivationIdentitiesCouponInfoProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsShopLevelActivationIdentitiesUtil",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorShopLevelActivationSAIPAdAccountExperienceInfoSelector",
    "isFalsey",
    "selectedCommerceMerchantSettingsIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          o("adsUEditorShopLevelActivationSAIPAdAccountExperienceInfoSelector")
            .shopLevelActivationSAIPExperienceLOSelector,
        ],
        function (t) {
          return u(t);
        },
        { name: i.id + ".adsUEditorShopLevelActivationExperienceSelector" },
      );
    function u(e) {
      return e.match({
        loading: function () {
          return null;
        },
        error: function () {
          return null;
        },
        loaded: function (t) {
          return t;
        },
      });
    }
    var c = e(
      [
        o("adsUEditorShopLevelActivationSAIPAdAccountExperienceInfoSelector")
          .shopLevelActivationSAIPExperiencesLOSelector,
      ],
      function (t) {
        return d(t);
      },
      { name: i.id + ".adsUEditorShopLevelActivationExperiencesSelector" },
    );
    function d(e) {
      return e.match({
        loading: function () {
          return [];
        },
        error: function () {
          return [];
        },
        loaded: function (t) {
          return t;
        },
      });
    }
    var m = e(
      [
        c,
        r(
          "ShopsAdsShopLevelActivationCouponAlreadyAppliedToCampaignGroupProvider",
        ).toFluxSelector(),
        o("adsUEditorSelectedCampaignGroupIDsSelector")
          .adsUEditorSelectedCampaignGroupIDsSelector,
      ],
      function (t, n, r) {
        var e = function () {
          var e;
          return (e = n.get(r[0]).getValue()) == null
            ? void 0
            : e.coupon_applied;
        };
        return p(t, e, r);
      },
      { name: i.id + ".canUseShopLevelActivationForCampaignGroupSelector" },
    );
    function p(e, t, n) {
      return r("isFalsey")(e) || e.length === 0 || n.length !== 1
        ? !1
        : t() !== !0;
    }
    var _ = e(
      [r("AdsAccountStore").getSelectedAccountID],
      function (t) {
        return f(t);
      },
      {
        name:
          i.id +
          ".adsUEditorShopLevelActivationIdentitiesCouponInfoAdAccountFilterSelector",
      },
    );
    function f(e) {
      return e == null ? null : { adAccountId: e };
    }
    var g = e(
      [
        r("AdsAccountStore").getSelectedAccountID,
        r("selectedCommerceMerchantSettingsIDSelector"),
        r("adsGetUniformValueSelector")(
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessor(
            r("AdsCampaignGroupRecordAccessors").promoted_object
              .product_catalog_id.get,
          ),
        ),
        c,
      ],
      function (t, n, r, o) {
        return h(t, n, r, o);
      },
      {
        name:
          i.id +
          ".adsUEditorShopLevelActivationIdentitiesCouponInfoAllFilterSelector",
      },
    );
    function h(e, t, n, r) {
      return e == null || (t == null && n == null)
        ? null
        : {
            adAccountId: e,
            catalogId: n != null ? n : void 0,
            cmsId: t != null ? t : void 0,
          };
    }
    function y(e, t, n) {
      return !e || t == null
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : o(
            "adsShopLevelActivationIdentitiesUtil",
          ).getShopLevelActivationIdentitiesCouponInfo(n, t);
    }
    var C = e(
      [
        m,
        _,
        r(
          "ShopsAdsShopLevelActivationIdentitiesCouponInfoProvider",
        ).toFluxSelector(),
      ],
      function (t, n, r) {
        return b(t, n, r);
      },
      {
        name:
          i.id +
          ".adsUEditorShopLevelActivationAdAccountIdentitiesCouponInfoSelector",
      },
    );
    function b(e, t, n) {
      return !e || t == null
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : o(
            "adsShopLevelActivationIdentitiesUtil",
          ).getShopLevelActivationIdentitiesCouponInfo(n, t);
    }
    var v = e(
      [
        m,
        g,
        r(
          "ShopsAdsShopLevelActivationIdentitiesCouponInfoProvider",
        ).toFluxSelector(),
      ],
      function (t, n, r) {
        return S(t, n, r);
      },
      {
        name:
          i.id +
          ".adsUEditorShopLevelActivationCommerceIdentitiesCouponInfoSelector",
      },
    );
    function S(e, t, n) {
      return !e || t == null
        ? r("LoadObject").empty({ creatorModuleID: i.id })
        : o(
            "adsShopLevelActivationIdentitiesUtil",
          ).getShopLevelActivationIdentitiesCouponInfo(n, t);
    }
    ((l.adsUEditorShopLevelActivationExperienceSelector = s),
      (l.adsUEditorShopLevelActivationExperience = u),
      (l.adsUEditorShopLevelActivationExperiencesSelector = c),
      (l.adsUEditorShopLevelActivationExperiences = d),
      (l.canUseShopLevelActivationForCampaignGroupSelector = m),
      (l.canUseShopLevelActivationForCampaignGroup = p),
      (l.adsUEditorShopLevelActivationIdentitiesCouponInfoAdAccountFilterSelector =
        _),
      (l.adsUEditorShopLevelActivationIdentitiesCouponInfoAdAccountFilter = f),
      (l.adsUEditorShopLevelActivationIdentitiesCouponInfoAllFilterSelector =
        g),
      (l.adsUEditorShopLevelActivationIdentitiesCouponInfoAllFilter = h),
      (l.adsUEditorShopLevelActivationIdentitiesCouponInfoSelectorAdAccountFilterLogic =
        y),
      (l.adsUEditorShopLevelActivationAdAccountIdentitiesCouponInfoSelector =
        C),
      (l.adsUEditorShopLevelActivationAdAccountIdentitiesCouponInfo = b),
      (l.adsUEditorShopLevelActivationCommerceIdentitiesCouponInfoSelector = v),
      (l.adsUEditorShopLevelActivationCommerceIdentitiesCouponInfo = S));
  },
  98,
);
