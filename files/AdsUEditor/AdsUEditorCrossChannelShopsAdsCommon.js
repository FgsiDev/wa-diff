__d(
  "AdsUEditorCrossChannelShopsAdsCommon",
  [
    "GraphAPIFieldUtils",
    "ImmutableRecordWithV4Types",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "id",
        "title",
        "shop_status",
        (e = o("GraphAPIFieldUtils")).getFieldWithSubfields(
          "commerce_merchant_settings",
          [
            "id",
            "shop_ads_capabilities",
            "shop_catalog",
            "display_name",
            "onsite_checkout_enabled_countries",
            "onsite_checkout_enabled_for_shops_ads_supported_countries",
            "offsite_iab_checkout_enabled_countries",
          ],
        ),
        e.getFieldWithSubfields("page", ["id", "name", "picture"]),
        e.getFieldWithSubfields("ig_user", [
          "id",
          "username",
          "legacy_instagram_user_id",
          "profile_picture_url",
          "profile_picture",
        ]),
        e.getFieldWithSubfields("workspace", ["id"]),
      ],
      u = [
        "id",
        "name",
        e.getFieldWithSubfields("commerce_merchant_settings", [
          "id",
          "shop_ads_capabilities",
          e.getFieldWithSubfields("shops", [
            "shop_status",
            "fb_sales_channel",
            e.getFieldWithSubfields("ig_sales_channel", [
              e.getFieldWithSubfields("ig_user", [
                "id",
                "legacy_instagram_user_id",
                "username",
              ]),
            ]),
          ]),
          "display_name",
          "onsite_checkout_enabled_countries",
          "onsite_checkout_enabled_for_shops_ads_supported_countries",
          "offsite_iab_checkout_enabled_countries",
          e.getFieldWithSubfields("shop_catalog", ["id"]),
        ]),
        e.getFieldWithParameterizedSubfields(
          "has_multiple_partner_integrations_for_platform",
          { platform: "SHOPIFY" },
        ),
      ],
      c = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.map(function (e) {
            return e.adgroup.id;
          });
        },
        { name: i.id + ".adsUEditorAdgroupIDsSelector" },
      ),
      d = [],
      m = o("ImmutableRecordWithV4Types").Record({
        website_url: null,
        commerce_merchant_settings_id: null,
        image_hash: null,
        image_id: null,
        fb_post_id: null,
        ig_post_id: null,
        video_id: null,
        ad_format_usecase: "unknown",
        adgroup_ids: r("immutable").List(d),
        storefront_ids: r("immutable").Set(d),
        source: null,
      });
    function p(e, t) {
      var n, r;
      return (
        e == null ||
        t == null ||
        ((n = e.shop_catalog) == null ? void 0 : n.id) ===
          ((r = t.shop_catalog) == null ? void 0 : r.id)
      );
    }
    function _(e, t) {
      var n,
        r,
        o = e.facebookStorefront,
        a = e.instagramStorefront;
      if (o == null && a == null) return !1;
      var i =
          (o == null ||
          (n = o.commerce_merchant_settings) == null ||
          (n = n.shop_ads_capabilities) == null
            ? void 0
            : n.includes(t)) === !0,
        l =
          (a == null ||
          (r = a.commerce_merchant_settings) == null ||
          (r = r.shop_ads_capabilities) == null
            ? void 0
            : r.includes(t)) === !0;
      return i || l;
    }
    function f(e) {
      return _(e, "OFFSITE_IAB_CHECKOUT_ENABLED");
    }
    function g(e) {
      if (e.shop_status == null) return null;
      var t = { id: e.id, shop_status: e.shop_status };
      return (
        e.page != null &&
          (t = babelHelpers.extends({}, t, {
            fb_sales_channel: { fb_page: { id: e.page.id, name: e.page.name } },
          })),
        e.ig_user != null &&
          (t = babelHelpers.extends({}, t, {
            ig_sales_channel: {
              ig_user: {
                id: e.ig_user.id,
                legacy_instagram_user_id: e.ig_user.legacy_instagram_user_id,
                username: e.ig_user.username,
              },
            },
          })),
        t
      );
    }
    ((l.STOREFRONT_FIELDS = s),
      (l.PRODUCT_CATALOG_FIELDS = u),
      (l.adsUEditorAdgroupIDsSelector = c),
      (l.WebsiteDestinationWithCMSFactory = m),
      (l.areCatalogsMatching = p),
      (l.hasAnyOffsiteIABCheckoutStorefront = f),
      (l.getShopQueryTypeFromStorefrontType = g));
  },
  98,
);
