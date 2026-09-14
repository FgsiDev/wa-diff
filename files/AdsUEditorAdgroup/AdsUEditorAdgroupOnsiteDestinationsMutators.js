__d(
  "AdsUEditorAdgroupOnsiteDestinationsMutators",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsImageIDClasses",
    "AdsSAIPAllowAllSpecUtils",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorBaseAssetPickerUtils",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "FBLogger",
    "ODS",
    "RecommendedDestinationsUtils",
    "ShopAdsOnsiteSmartDestinationDetectionCommon",
    "filterNulls",
    "first",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n;
      return o("AdsDynamicAdsUtils").isDynamicAd(e)
        ? !1
        : ((n = e.creative) == null || (n = n.destination_spec) == null
              ? void 0
              : n.destination_type) === "WEBSITE_AND_SHOP"
          ? !0
          : t === "website_and_shops" ||
            o("AdsSAIPAllowAllSpecUtils").isStaticCarouselMdsaAdgroup(e, !0);
    }
    function u(e, t, n, a) {
      var i = o("AdsAPIAdgroupRecordUtils").getImageData(e, t),
        l = i == null ? void 0 : i.imageHash,
        s = i == null ? void 0 : i.imageURL,
        u = null;
      s != null &&
        (u = o("RecommendedDestinationsUtils").getPictureFBIDFromCDNURL(s));
      var c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.video_id.get(e),
        d = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, t);
      return E(n, a, d, [e.id], l, u, c, null, null, "single_media");
    }
    function c(t) {
      var n;
      return ((n = t.creative) == null ||
      (n = n.portrait_customizations) == null
        ? void 0
        : n.carousel_delivery_mode) == null ||
        o("AdsChildAttachmentsUtils").isCarouselAd(t)
        ? t
        : r("justknobx")._("4187")
          ? ((e || (e = o("ODS"))).bumpEntityKey(
              68,
              "shop_ads_carousel_delivery_mode",
              "kill_switch_skipped",
            ),
            t)
          : ((e || (e = o("ODS"))).bumpEntityKey(
              68,
              "shop_ads_carousel_delivery_mode",
              "stripped_non_carousel",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.portrait_customizations.carousel_delivery_mode.delete(
              t,
            ));
    }
    function d(e, t, n, r, a, i, l, u) {
      var d = c(e);
      return s(d, n)
        ? g(d, t, r, a, i, l, u)
        : o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestination(d);
    }
    function m(e, t) {
      return e == null && t;
    }
    function p(e, t) {
      return t && !(e != null && e.length > 0);
    }
    function _(e, t) {
      var n, r, o, a;
      return (
        t &&
        (e == null ||
        (n = e.facebookStorefront) == null ||
        (n = n.commerce_merchant_settings) == null
          ? void 0
          : n.id) != null &&
        (e == null ||
        (r = e.instagramStorefront) == null ||
        (r = r.commerce_merchant_settings) == null
          ? void 0
          : r.id) != null &&
        (e == null ||
        (o = e.facebookStorefront) == null ||
        (o = o.commerce_merchant_settings) == null
          ? void 0
          : o.id) !==
          (e == null ||
          (a = e.instagramStorefront) == null ||
          (a = a.commerce_merchant_settings) == null
            ? void 0
            : a.id)
      );
    }
    function f(e, t) {
      return o("AdsAssetFeedUtils").isAdgroupUsingSomeOnsiteDestinations(e)
        ? T(e, t)
        : e;
    }
    function g(e, t, n, r, a, i, l) {
      if (m(n, a))
        return o(
          "AdsUEditorAdgroupShopAdsUtils",
        ).deleteAssetFeedSpecOnsiteDestination(e);
      var s = h(n);
      if (p(s, a))
        return o(
          "AdsUEditorAdgroupShopAdsUtils",
        ).deleteAssetFeedSpecOnsiteDestination(e);
      if (_(n, a)) return e;
      var u = y(e, s != null && s.length > 0 ? s : [], r, l);
      return f(u, i);
    }
    function h(e) {
      return e == null
        ? null
        : o("AdsUEditorAdgroupShopAdsUtils").toStorefrontIDs(e);
    }
    function y(e, t, n, o) {
      var a = b(t, "storefront_shop_id", o === "MANUAL" ? o : null);
      return (
        n != null && (a = b([n.destinationValue], n.destinationType, o)),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.onsite_destinations.set(a, e)
      );
    }
    function C(e, t) {
      var n,
        r =
          (n = t.promoted_object) == null || (n = n.omnichannel_object) == null
            ? void 0
            : n.onsite;
      return r != null && r.size > 0 && r.first().has("onboarding_state")
        ? e
        : o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
    }
    function b(e, t, n) {
      return r("immutable")
        .Set(e)
        .map(function (e) {
          var o, a;
          return n != null
            ? r("immutable").Map(((o = {}), (o[t] = e), (o.source = n), o))
            : r("immutable").Map(((a = {}), (a[t] = e), a));
        })
        .toList();
    }
    function v(e, t, n, o) {
      var a, i, l;
      if (
        ((a = e.creative) == null || (a = a.shop_spec) == null
          ? void 0
          : a.shop_id) != null
      ) {
        var s, u;
        return {
          facebookStorefront: {
            id:
              (s = e.creative) == null || (s = s.shop_spec) == null
                ? void 0
                : s.shop_id,
          },
          instagramStorefront: {
            id:
              (u = e.creative) == null || (u = u.shop_spec) == null
                ? void 0
                : u.shop_id,
          },
        };
      }
      var c = r("AdsAdgroupSemanticFields").instagramActorID.get(t, e),
        d = c != null ? (n == null ? void 0 : n.get(c)) : null;
      o != null &&
        ((i = d) == null || (i = i.commerce_merchant_settings) == null
          ? void 0
          : i.id) !== o &&
        (d = null);
      var m = r("AdsAdgroupSemanticFields").pageID.get(t, e),
        p = n == null ? void 0 : n.get(m);
      return (
        o != null &&
          ((l = p) == null || (l = l.commerce_merchant_settings) == null
            ? void 0
            : l.id) !== o &&
          (p = null),
        { facebookStorefront: p, instagramStorefront: d }
      );
    }
    function S(e) {
      var t, n;
      return e
        ? r("filterNulls")(
            ((t = e.facebookStorefront) == null ? void 0 : t.id) ===
              ((n = e.instagramStorefront) == null ? void 0 : n.id)
              ? [e.facebookStorefront]
              : [e.facebookStorefront, e.instagramStorefront],
          )
        : [];
    }
    function R(e, t, n, a, i, l, s, u, c, d, m) {
      var p,
        _,
        f = (p = e.commerce_merchant_settings) == null ? void 0 : p.id;
      if (f == null)
        return (
          r("FBLogger")("shops_ads_creation", "storefront_has_no_cms").mustfix(
            "Storefront (%s) has no CMS ID.",
            e.id,
          ),
          null
        );
      var g =
        t == null
          ? void 0
          : t.get(
              o(
                "AdsUEditorCrossChannelShopsAdsCommon",
              ).WebsiteDestinationWithCMSFactory({
                adgroup_ids: r("immutable").List(a),
                commerce_merchant_settings_id: f,
                image_hash: i,
                image_id: l,
                fb_post_id: u,
                ig_post_id: c,
                ad_format_usecase: d,
                video_id: s,
                storefront_ids: r("immutable").Set([e.id]),
                website_url: n,
                source: m != null ? m : null,
              }),
            );
      return (_ = g == null ? void 0 : g.getValue()) != null ? _ : [];
    }
    function L(e, t, n, o, a, i, l, s, u, c, d) {
      var m = S(e);
      return r("filterNulls")(
        m.flatMap(function (e) {
          return R(e, t, n, o, a, i, l, s, u, c, d);
        }),
      );
    }
    function E(e, t, n, o, a, i, l, s, u, c, d) {
      var m = L(e, t, n, o, a, i, l, s, u, c, d);
      return r("first")(m);
    }
    function k(e) {
      var t,
        n =
          ((t = e.creative) == null ||
          (t = t.asset_feed_spec) == null ||
          (t = t.onsite_destinations) == null
            ? void 0
            : t.filter(function (e) {
                return !e.has("auto_optimization");
              })) || r("immutable").List([]),
        o = n.push(r("immutable").Map().set("auto_optimization", "OPT_IN"));
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.onsite_destinations.set(o, e);
    }
    function I(e) {
      var t,
        n =
          ((t = e.creative) == null ||
          (t = t.asset_feed_spec) == null ||
          (t = t.onsite_destinations) == null
            ? void 0
            : t.filter(function (e) {
                return !e.has("auto_optimization");
              })) || r("immutable").List([]);
      return n.size === 0
        ? o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestination(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.onsite_destinations.set(n, e);
    }
    function T(e, t) {
      return t ? k(e) : I(e);
    }
    function D(e, t, n, a, i, l, s, u, c, m, p) {
      var _;
      if (!a || !x(e)) return e;
      var f =
          (_ = o("AdsAPIAdgroupRecordUtils").getImageData(e, n)) == null
            ? void 0
            : _.imageHash,
        g = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.video_id.get(e),
        h = null,
        y = o("AdsUEditorBaseAssetPickerUtils").getBaseImageAssetFromAdgroup(
          e,
          i,
          l,
        ),
        C = y == null ? void 0 : y.baseAsset.id;
      C &&
        C instanceof o("AdsImageIDClasses").AdsExternalImageID &&
        (h = C.getFacebookID());
      var b = E(
        u,
        s,
        c,
        m,
        f,
        h,
        g,
        null,
        null,
        "single_media",
        "DEFAULTED_FROM_URL",
      );
      return d(e, t, p, u, b, !0, !0, "DEFAULTED_FROM_URL");
    }
    function x(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.onsite_destinations;
      return (n =
        r == null
          ? void 0
          : r.every(function (e) {
              return e.get("source") !== "MANUAL";
            })) != null
        ? n
        : !0;
    }
    function $(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.destination_spec) == null
            ? void 0
            : t.destination_type;
      return n === "WEBSITE_AND_SHOP";
    }
    function P(e) {
      var t = e.get("shop_collection_product_set_id") == null,
        n = e.get("details_page_product_id") == null,
        r = !o(
          "ShopAdsOnsiteSmartDestinationDetectionCommon",
        ).DESTINATION_SOURCES_NOT_TO_OVERRIDE.includes(e.get("source"));
      return t && n && r;
    }
    function N(e) {
      return e == null ? !0 : e.every(P);
    }
    function M(e) {
      return $(e);
    }
    function w(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.onsite_destinations;
      return n == null ? M(e) : N(n);
    }
    function A(e, t, n, a, i, l, s, u, c) {
      if (!w(e)) return e;
      var m =
          a != null
            ? o("RecommendedDestinationsUtils").getPictureFBIDFromCDNURL(a)
            : null,
        p = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, n),
        _ = E(
          u,
          s,
          p,
          c,
          i,
          m,
          l,
          null,
          null,
          "single_media",
          "DEFAULTED_FROM_MEDIA",
        );
      return d(e, t, "website_and_shops", u, _, !1, !0, "DEFAULTED_FROM_MEDIA");
    }
    ((l.getSuggestedOnsiteDestinationDetails = u),
      (l.updateOnsiteDestinationsWithLinkType = d),
      (l.cleanOnsiteDestinationsForSelectPixelPromotedObjectType = C),
      (l.getStorefrontsForAdgroup = v),
      (l.getFirstDestinationID = E),
      (l.setOnsiteDestinationOptimizationOptIn = k),
      (l.setOnsiteDestinationOptimizationOptOut = I),
      (l.maySetOnsiteDestinationOptimizationInDestinations = T),
      (l.updateOnsiteDestinationsForWebsiteURLUpdate = D),
      (l.maybeUpdateOnsiteDestinationsForImageOrVideo = A));
  },
  98,
);
