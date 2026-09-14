__d(
  "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAccountStore",
    "AdsAdDestinationUrlUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUtils",
    "AdsCanvasAdUtils",
    "AdsPageUtils",
    "AdsPromoAdsDefaultCatalogStore",
    "AdsPromoAdsPageOfferItemsGKStore",
    "AdsPromotedObjectTypeUIProvider",
    "IncentivesAdsManagerUtils",
    "LoadObject",
    "PromoAdsAdSpecUtils",
    "PromoAdsAdsManagerGatingAndExperimentUtils",
    "PromoAdsAdsManagerUtils",
    "PromoAdsEmailCaptureUnificationGatingUtils",
    "PromoAdsFieldEligibilityUtils",
    "PromoAdsOfferSourceConstants",
    "catalogEnrollTypesToIgnoreForPE",
    "cr:11512",
    "cr:11513",
    "cr:12147",
    "cr:4083",
    "cr:4850",
    "cr:5587",
    "cr:6613",
    "cr:6654",
    "cr:6794",
    "cr:6802",
    "cr:7486",
    "nullthrows",
    "promoAdCouponCodeSourceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var r, o, a, i, l;
      t === void 0 && (t = !0);
      var s =
        n("cr:4083") == null || (r = n("cr:4083").getRecord(e)) == null
          ? void 0
          : r.getValue();
      if (s == null) return !1;
      var u = s.adset_id,
        d =
          u != null &&
          (o =
            n("cr:5587") == null || (a = n("cr:5587").getRecord(u)) == null
              ? void 0
              : a.getValue()) != null
            ? o
            : null,
        m = s.campaign_id,
        p =
          m != null &&
          (i =
            n("cr:6802") == null || (l = n("cr:6802").getRecord(m)) == null
              ? void 0
              : l.getValue()) != null
            ? i
            : null;
      return c(s, d, p, t);
    }
    function s(e, t) {
      var r, o, a, i, l;
      t === void 0 && (t = !0);
      var s =
        n("cr:11512") == null || (r = n("cr:11512").getRecord(e)) == null
          ? void 0
          : r.getValue();
      if (s == null) return !1;
      var u = s.adset_id,
        c =
          u != null &&
          (o =
            n("cr:11513") == null || (a = n("cr:11513").getRecord(u)) == null
              ? void 0
              : a.getValue()) != null
            ? o
            : null,
        d = s.campaign_id,
        p =
          d != null &&
          (i =
            n("cr:12147") == null || (l = n("cr:12147").getRecord(d)) == null
              ? void 0
              : l.getValue()) != null
            ? i
            : null;
      return m(s, c, p, t);
    }
    function u(e, t) {
      var r, o, a, i, l;
      t === void 0 && (t = !0);
      var s =
        n("cr:11512") == null || (r = n("cr:11512").getRecord(e)) == null
          ? void 0
          : r.getValue();
      if (s == null) return !1;
      var u = s.adset_id,
        c =
          u != null &&
          (o =
            n("cr:11513") == null || (a = n("cr:11513").getRecord(u)) == null
              ? void 0
              : a.getValue()) != null
            ? o
            : null,
        m = s.campaign_id,
        p =
          m != null &&
          (i =
            n("cr:12147") == null || (l = n("cr:12147").getRecord(m)) == null
              ? void 0
              : l.getValue()) != null
            ? i
            : null;
      return d(s, c, p, t);
    }
    function c(e, t, a, i, l, s) {
      var u, c;
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = {}),
        s === void 0 && (s = !1),
        t != null && a != null)
      ) {
        var d,
          m =
            (d = r("AdsAccountStore").getSelectedAccount().getValue()) != null
              ? d
              : null;
        if (
          !o("PromoAdsFieldEligibilityUtils").shouldShowPromoAdField(
            { adgroup: e, campaign: t, campaignGroup: a },
            m,
          )
        )
          return !1;
        var _ = o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
          t,
          a,
          r("AdsPromotedObjectTypeUIProvider")
            .toFluxStore()
            .getState()
            .get(t.id),
        );
        if (o("IncentivesAdsManagerUtils").isOmniPromoAdExperience(_))
          return !1;
      }
      if (
        (l.ignoreBrandedContent !== !0 &&
          o("AdsAdgroupUtils").isPartnershipAd(e)) ||
        r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.upcoming_events.at(0)
          .get(e) != null ||
        o(
          "PromoAdsAdsManagerGatingAndExperimentUtils",
        ).isSensitiveTierAdvertiser()
      )
        return !1;
      if (l.ignoreCatalogCheck !== !0) {
        var f,
          g,
          h,
          y = p(e, t, a),
          C = i
            ? y.hasValue()
              ? ((f = y.getValue()) == null ? void 0 : f.id) != null
              : !y.hasError()
            : y.hasValue() &&
              ((g = y.getValue()) == null ? void 0 : g.id) != null;
        if (
          !C ||
          (y.hasValue() &&
            ((h = y.getValue()) == null
              ? void 0
              : h.is_promo_ads_always_on_suitable) === !1)
        )
          return !1;
      }
      var b =
        n("cr:7486") == null || (u = n("cr:7486").get(e.id)) == null
          ? void 0
          : u.getValue();
      return (b == null ? void 0 : b.is_always_on_enabled_promo) === !0 ||
        ((c = n("cr:4850") == null ? void 0 : n("cr:4850").isNew(e.id)) !=
          null &&
          c)
        ? o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isPromoAdsAlwaysOnEnabled(s)
        : !1;
    }
    function d(e, t, a, i, l) {
      var s, u, c, d, m, p, _;
      if (
        (i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        !o(
          "PromoAdsEmailCaptureUnificationGatingUtils",
        ).isEmailCaptureOfferUnificationEnabled() ||
          o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isSensitiveTierAdvertiser() ||
          t == null ||
          a == null)
      )
        return !1;
      var f =
          (s = r("AdsAccountStore").getSelectedAccount().getValue()) != null
            ? s
            : null,
        g = o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
          t,
          a,
          r("AdsPromotedObjectTypeUIProvider")
            .toFluxStore()
            .getState()
            .get(t.id),
        );
      if (
        o("IncentivesAdsManagerUtils").isOmniPromoAdExperience(g) ||
        o("AdsAdgroupUtils").isPartnershipAd(e) ||
        r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.upcoming_events.at(0)
          .get(e) != null
      )
        return !1;
      var h = o("AdsPageUtils").getPageID(e);
      if (h == null) return !1;
      var y = b(e, t, a),
        C = y.getter,
        v = C(),
        S = i
          ? v.hasValue()
            ? v.getValue() != null
            : !v.hasError()
          : v.hasValue() && v.getValue() != null;
      if (!S) return !1;
      var R = i && v.isLoading(),
        L =
          v.hasValue() &&
          (u = (c = v.getValue()) == null ? void 0 : c.id) != null
            ? u
            : null;
      if (
        v.hasValue() &&
        ((d = v.getValue()) == null
          ? void 0
          : d.is_promo_ads_always_on_suitable) === !1
      )
        return !1;
      var E = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(t, e),
        k = E.pixelID,
        I = E.productSetID,
        T = R
          ? null
          : n("cr:6654") == null
            ? void 0
            : n("cr:6654").get({
                account_id: e.account_id,
                page_id: h,
                pixel_id: k != null ? k : null,
                catalog_id: L,
                product_set_id: I != null ? I : null,
              }),
        D =
          R ||
          (i && ((m = T == null ? void 0 : T.isLoading()) != null ? m : !1));
      if (
        !o("PromoAdsAdsManagerUtils").shouldShowEmailCaptureFieldForAdgroup(
          e.id,
          o("PromoAdsFieldEligibilityUtils").shouldShowPromoAdField(
            { adgroup: e, campaign: t, campaignGroup: a },
            f,
          ),
          T == null ? void 0 : T.getValue(),
          g,
          !1,
          D,
        )
      )
        return !1;
      var x =
        n("cr:6794") == null || (p = n("cr:6794").get(e.id)) == null
          ? void 0
          : p.getValue();
      return (x == null ? void 0 : x.is_always_on_enabled_email) === !0 ||
        ((_ = n("cr:6613") == null ? void 0 : n("cr:6613").isNew(e.id)) !=
          null &&
          _)
        ? o(
            "PromoAdsAdsManagerGatingAndExperimentUtils",
          ).isEmailCaptureAlwaysOnEnabled(l)
        : !1;
    }
    function m(e, t, r, a, i) {
      var l, s, u, c;
      if (
        (a === void 0 && (a = !1), i === void 0 && (i = !1), !d(e, t, r, a, i))
      )
        return !1;
      var m = o("AdsPageUtils").getPageID(e);
      if (m == null) return !1;
      var p = b(e, t != null ? t : null, r != null ? r : null),
        _ = p.getter,
        f = _();
      if (f.isLoading()) return a;
      var g =
          f.hasValue() &&
          (l = (s = f.getValue()) == null ? void 0 : s.id) != null
            ? l
            : null,
        h = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(
          t != null ? t : null,
          e,
        ),
        y = h.pixelID,
        C = h.productSetID,
        v =
          n("cr:6654") == null
            ? void 0
            : n("cr:6654").get({
                account_id: e.account_id,
                page_id: m,
                pixel_id: y != null ? y : null,
                catalog_id: g,
                product_set_id: C != null ? C : null,
              });
      return a && (u = v == null ? void 0 : v.isLoading()) != null && u
        ? !0
        : (v == null || (c = v.getValue()) == null
            ? void 0
            : c.is_email_capture_opted_in) === !0;
    }
    function p(e, t, n) {
      if (o("AdsAdgroupUtils").isPartnershipAd(e))
        return r("LoadObject").withValue(null, { creatorModuleID: i.id });
      var a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.get(
          e,
        ),
        l = a != null && o("promoAdCouponCodeSourceUtils").isPromoAdOptedIn(a),
        s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.get(
          e,
        );
      if (l && s == null)
        return r("LoadObject").withValue(null, { creatorModuleID: i.id });
      var u = b(e, t, n).getter();
      return u.hasError()
        ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
        : u;
    }
    function _(e, t, n) {
      return p(e, t, n).mapValue(function (e) {
        var t;
        return (t = e == null ? void 0 : e.id) != null ? t : null;
      });
    }
    function f(e, t, n, r) {
      var o = y(e, t, n, r)();
      return o.mapValue(function (e) {
        var t;
        return (t =
          e == null
            ? void 0
            : e.map(function (e) {
                return e.id;
              })) != null
          ? t
          : [];
      });
    }
    function g(e, t, n, r) {
      return y(e, t, n, r)();
    }
    function h(e, t, n, r) {
      var a = g(e, t, n, r),
        i = o("AdsCanvasAdUtils").getDestinationLinkFromAdgroup(e),
        l = o("IncentivesAdsManagerUtils").getDomainFromURL(i);
      return a.mapValue(function (e) {
        return v(e, l);
      });
    }
    function y(e, t, n, a) {
      var l =
        n != null
          ? r("AdsAdgroupSemanticFields").pageID.get(n, e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.page_id.get(e);
      if ((l == null && (l = o("AdsPageUtils").getPageID(e)), l == null))
        return function () {
          return r("LoadObject").withValue([], { creatorModuleID: i.id });
        };
      var s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.facebook_branded_content.sponsor_page_id.get(e),
        u = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(t, e),
        c = u.pixelID,
        d = u.productSetID;
      return function () {
        return r("AdsPromoAdsPageOfferItemsGKStore").get({
          account_id: e.account_id,
          ad_spec_coupon_codes: null,
          catalog_id: a != null ? a : null,
          page_id: r("nullthrows")(
            l,
            "pageID should not be null at this point",
          ),
          pixel_id: c,
          product_set_id: d,
          secondary_page_id: s,
          sources: o("PromoAdsOfferSourceConstants")
            .PROMO_ADS_OFFER_FETCHING_SOURCES,
        });
      };
    }
    function C(e, t, n, a) {
      var i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g =
          (i =
            (l =
              (s =
                n == null || (u = n.promoted_object) == null
                  ? void 0
                  : u.product_catalog_id) != null
                ? s
                : t == null || (c = t.promoted_object) == null
                  ? void 0
                  : c.product_catalog_id) != null
              ? l
              : a) != null
            ? i
            : null,
        h = o("PromoAdsAdSpecUtils").getPixelProductSetFromAdObjects(t, e),
        y = h.pixelID,
        C = h.productSetID,
        b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.catalog.action_metadata.type.get(e),
        v =
          b != null &&
          o(
            "catalogEnrollTypesToIgnoreForPE",
          ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(b)
            ? null
            : (d = r("AdsAdgroupRecordAccessors").creative
                  .creative_sourcing_spec.associated_product_set_id) == null
              ? void 0
              : d.get(e),
        S = (m = C != null ? C : v) != null ? m : null,
        R =
          (p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.page_id.get(e)) != null
            ? p
            : o("AdsPageUtils").getPageID(e);
      if (g == null && S == null && R == null) return null;
      var L = o("AdsAdDestinationUrlUtils").getAdDestinationUrl(
        e == null || (_ = e.creative) == null ? void 0 : _.object_story_spec,
      );
      return {
        account_id: e.account_id,
        adgroup_maybe_draft_id: (f = e.id) != null ? f : null,
        destination_url: L != null ? L : null,
        page_id: R,
        pixel_id: y != null ? y : null,
        product_set_id: S,
        resolved_catalog_id: g,
      };
    }
    function b(e, t, n, o) {
      var a = r("AdsPromoAdsDefaultCatalogStore"),
        l = C(e, t, n, o);
      return l == null
        ? {
            store: a,
            getter: function () {
              return r("LoadObject").withValue(null, { creatorModuleID: i.id });
            },
          }
        : {
            store: a,
            getter: function () {
              return a.get(l);
            },
          };
    }
    function v(e, t) {
      return e == null || e.length === 0
        ? []
        : t == null
          ? e
          : e.filter(function (e) {
              var n = e.promo_ads_domain_validation_status;
              if (n == null || n.length === 0) return !0;
              var r = n.find(function (e) {
                return (e == null ? void 0 : e.domain) === t;
              });
              if (r == null) return !0;
              var o = r.validation_status;
              return o == null || o !== "VERIFIED_NOT_WORKING";
            });
    }
    ((l.isPromoAdsAlwaysOnByAdgroupId = e),
      (l.isEmailCaptureOptedInAlwaysOnByAdgroupId = s),
      (l.isEmailCaptureAlwaysOnByAdgroupId = u),
      (l.isPromoAdsAlwaysOnForAdgroup = c),
      (l.isEmailCaptureAlwaysOnForAdgroup = d),
      (l.isEmailCaptureOptedInAlwaysOnForAdgroup = m),
      (l.getResolvedPromoCodesCatalogIdForAd = _),
      (l.getAllowedPromoOfferIDFromAdObjects = f),
      (l.getAllowedPromoOfferDataFromAdObjects = g),
      (l.getAllowedPromoOfferDataFromAdObjectsWithValidationFiltering = h),
      (l.getResolvedCatalogIdForAd = b));
  },
  98,
);
