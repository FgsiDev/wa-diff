__d(
  "adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "ShopsAdsActivationExperienceConstants",
    "ShopsAdsShopLevelActivationIdentitiesCouponInfoProvider",
    "adsCreateSelector",
    "adsShopLevelActivationIdentitiesUtil",
    "adsUEditorShopLevelActivationSelectors",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorShopLevelActivationSelectors")
          .adsUEditorShopLevelActivationCommerceIdentitiesCouponInfoSelector,
        o("adsUEditorShopLevelActivationSelectors")
          .adsUEditorShopLevelActivationExperiencesSelector,
      ],
      function (t, n) {
        return s(t, n);
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector",
      },
    );
    function s(e, t) {
      return e.match({
        loading: function () {
          return null;
        },
        error: function () {
          return null;
        },
        loaded: function (n) {
          if (n.isEmpty()) return null;
          var e = Array.from(n.entries())[0],
            o = e[0],
            a = e[1];
          if (!t.includes("COUPONLESS_ACTIVATION") && r("isFalsey")(a))
            return null;
          var i = o.fb_page_id,
            l = o.ig_user_id,
            s = o.ig_user_fbidv2,
            u = o.shop_ids;
          return {
            fb_page_id: i,
            ig_user_fbidv2: s,
            ig_user_id: l,
            shop_ids: u,
          };
        },
      });
    }
    var u = function (t) {
      return r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccount,
          r(
            "ShopsAdsShopLevelActivationIdentitiesCouponInfoProvider",
          ).toFluxSelector(),
          o("adsUEditorShopLevelActivationSelectors")
            .adsUEditorShopLevelActivationExperiencesSelector,
        ],
        function (n, a, l) {
          var e = n.getValue();
          if (
            e == null ||
            t == null ||
            !l.some(function (e) {
              return o(
                "ShopsAdsActivationExperienceConstants",
              ).SHOPS_ADS_ACTIVATION_COUPON_EXPERIENCES.includes(e);
            })
          )
            return r("LoadObject").withValue(r("immutable").Map(), {
              creatorModuleID: i.id,
            });
          var s = null;
          if (
            (r("isTruthy")(t.catalogId)
              ? (s = { adAccountId: e.account_id, catalogId: t.catalogId })
              : r("isTruthy")(t.cmsId) &&
                (s = { adAccountId: e.account_id, cmsId: t.cmsId }),
            r("isFalsey")(s))
          )
            return r("LoadObject").withValue(r("immutable").Map(), {
              creatorModuleID: i.id,
            });
          var u = o(
            "adsShopLevelActivationIdentitiesUtil",
          ).getShopLevelActivationIdentitiesCouponInfo(a, s);
          return u;
        },
        { name: i.id },
      );
    };
    ((l.adsUEditorAdgroupShopLevelActivationIdentitiesDefaultingSelector = e),
      (l.adsUEditorShopLevelActivationIdentitiesDefaultingSelector = u));
  },
  98,
);
