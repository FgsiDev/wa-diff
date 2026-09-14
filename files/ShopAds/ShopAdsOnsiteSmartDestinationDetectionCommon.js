__d(
  "ShopAdsOnsiteSmartDestinationDetectionCommon",
  [
    "AdsUEditorShopAdsLoggerUtils",
    "AsyncTypedRequest",
    "Cache",
    "LoadObject",
    "XCrossChannelShopsAdsOnsiteDestinationControllerRouteBuilder",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = ["DEFAULTED_FROM_URL", "MANUAL"];
    function u(t) {
      var n = d.get(t);
      if (
        (o("AdsUEditorShopAdsLoggerUtils").logCachedSDDRecommendationsRequests(
          t,
          d.has(t),
        ),
        n)
      )
        return n;
      var a = new (r("AsyncTypedRequest"))(t)
        .setMethod("GET")
        .setReadOnly(!0)
        .promisePayload();
      return (d.set(t, a, null, e), a);
    }
    function c(e, t, n, a) {
      n(function (e) {
        return e.set(t, r("LoadObject").loading({ creatorModuleID: i.id }));
      });
      var l = t.ad_format_usecase,
        s = t.adgroup_ids,
        c = t.commerce_merchant_settings_id,
        m = t.fb_post_id,
        p = t.ig_post_id,
        _ = t.image_hash,
        f = t.image_id,
        g = t.storefront_ids,
        h = t.video_id,
        y = t.website_url,
        C = {};
      (l != null && (C = babelHelpers.extends({ ad_format_usecase: l }, C)),
        _ != null && (C = babelHelpers.extends({ image_hash: _ }, C)),
        h != null && (C = babelHelpers.extends({ video_id: h }, C)),
        m != null && (C = babelHelpers.extends({ post_id: m }, C)),
        p != null && (C = babelHelpers.extends({ ig_post_id: p }, C)),
        f != null && (C = babelHelpers.extends({ image_id: f }, C)));
      var b = r("XCrossChannelShopsAdsOnsiteDestinationControllerRouteBuilder")
        .buildURL(
          babelHelpers.extends(
            {
              ad_account_id: e,
              adgroup_ids: Array.from(s),
              commerce_merchant_settings_id: c,
              storefront_ids: Array.from(g),
              link_url: y,
            },
            C,
          ),
        )
        .toString();
      r("promiseDone")(
        u(b),
        function (e) {
          (n(function (n) {
            return n.set(
              t,
              r("LoadObject").withValue(e.recommendations, {
                creatorModuleID: i.id,
              }),
            );
          }),
            a != null && a(t, e.recommendations),
            o(
              "AdsUEditorShopAdsLoggerUtils",
            ).logStaticShopAdsSDDRecommendations(C, e.recommendations));
        },
        function (e) {
          (n(function (n) {
            return n.set(
              t,
              r("LoadObject").withError(e, { creatorModuleID: i.id }),
            );
          }),
            d.delete(b));
        },
      );
    }
    var d = new (r("Cache"))();
    ((l.DESTINATION_SOURCES_NOT_TO_OVERRIDE = s),
      (l.getShopAdsOnsiteSmartDestinationDetectionPrediction = c));
  },
  98,
);
