__d(
  "adsShopLevelActivationFetchAPIUtils",
  [
    "AsyncTypedRequest",
    "XShopsAdsShopLevelActivationCommerceCouponInfoControllerRouteBuilder",
    "XShopsAdsShopLevelActivationCouponAlreadyAppliedToCampaignGroupControllerRouteBuilder",
    "XShopsAdsShopLevelActivationIdentitiesCouponInfoControllerRouteBuilder",
    "adExperienceInfoEnumConversionUtilGraphQLQueryUtil",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = r(
          "XShopsAdsShopLevelActivationCommerceCouponInfoControllerRouteBuilder",
        )
          .buildUri({ ad_account_id: t })
          .toString();
        return new (r("AsyncTypedRequest"))(e).promisePayload();
      },
      s = function (t) {
        var e = r(
          "XShopsAdsShopLevelActivationIdentitiesCouponInfoControllerRouteBuilder",
        )
          .buildUri({
            ad_account_id: t.adAccountId,
            catalog_id: t.catalogId,
            cms_id: t.cmsId,
          })
          .toString();
        return new (r("AsyncTypedRequest"))(e).promisePayload();
      },
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "adExperienceInfoEnumConversionUtilGraphQLQueryUtil",
          ).adExperienceInfoEnumConversionUtilGraphQLQuery(e);
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      c = function (t) {
        var e = r(
          "XShopsAdsShopLevelActivationCouponAlreadyAppliedToCampaignGroupControllerRouteBuilder",
        )
          .buildUri({ campaign_group_id: t })
          .toString();
        return new (r("AsyncTypedRequest"))(e).promisePayload();
      };
    ((l.shopLevelActivationFetchCommerceCouponInfo = e),
      (l.shopLevelActivationFetchIdentitiesCouponInfo = s),
      (l.adsUEditorShopLevelActivationSAIPExperienceInfo = u),
      (l.adsShopLevelActivationFetchCouponAlreadyAppliedToCampaignGroup = c));
  },
  98,
);
