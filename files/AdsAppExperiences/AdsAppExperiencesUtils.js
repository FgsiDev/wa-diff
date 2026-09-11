__d(
  "AdsAppExperiencesUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAppExperiencesLoggerUtils",
    "AdsBuyingTypes",
    "AdsRegulatedCategory",
    "AdsSensitiveVerticalUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !(
        e == null ||
        e.length === 0 ||
        e.includes(r("AdsRegulatedCategory").NONE)
      );
    }
    function s(e) {
      return e != null && e !== r("AdsBuyingTypes").AUCTION;
    }
    function u(t, n, r, o, a) {
      return !(s(n) || e(t) || r === !0 || o === !1 || a === !1);
    }
    function c(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        s =
          (n =
            (r = l == null || (o = l.link_data) == null ? void 0 : o.link) !=
            null
              ? r
              : l == null ||
                  (a = l.video_data) == null ||
                  (a = a.call_to_action) == null ||
                  (a = a.value) == null
                ? void 0
                : a.link) != null
            ? n
            : e == null || (i = e.creative) == null
              ? void 0
              : i.link_url;
      return s != null && s !== "";
    }
    function d(e) {
      return e == null ? !1 : Array.isArray(e) ? e.length > 0 : e.size > 0;
    }
    function m(e) {
      return e != null && e !== "";
    }
    function p(e, t) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof r("immutable").Map
          ? e.get(t)
          : e[t];
    }
    function _(e) {
      if (e == null) return !1;
      var t;
      if (Array.isArray(e)) t = e;
      else if (e instanceof r("immutable").List) t = e.toArray();
      else return !0;
      if (t.length === 0) return !1;
      var n = t.some(function (e) {
        return p(e, "is_checked") != null;
      });
      return n
        ? t.some(function (e) {
            return p(e, "is_checked") === !0;
          })
        : !0;
    }
    function f(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      if (n == null) return !1;
      if (n instanceof r("immutable").Map) {
        var o = n.get("extension_specs");
        return (
          o instanceof r("immutable").List &&
          o.some(function (e) {
            return (
              e instanceof r("immutable").Map &&
              e.get("extension_type") === "product_extensions" &&
              e.get("virtual_pset_id") != null
            );
          })
        );
      }
      var a = n.extension_specs;
      return (
        Array.isArray(a) &&
        a.some(function (e) {
          return (
            (e == null ? void 0 : e.extension_type) === "product_extensions" &&
            (e == null ? void 0 : e.virtual_pset_id) != null
          );
        })
      );
    }
    function g(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.associated_product_set_id) != null ||
        (N(!0) && f(e))
      );
    }
    function h(e) {
      return {
        website_summaries: e.hasWebsiteSummary,
        website_media: e.hasWebsiteMedia || e.hasFeaturedOfferingMedia,
        website_screenshot: e.hasWebsiteScreenshot,
        website_form: e.hasWebsiteForm,
        app_info: e.hasAppInfoMedia || e.hasAppInfoOverview || e.hasAppReviews,
        app_reviews: e.hasAppReviews,
        products: e.hasProductSet,
      };
    }
    function y(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        p =
          e == null || (n = e.creative) == null
            ? void 0
            : n.creative_sourcing_spec,
        _ = p == null ? void 0 : p.website_summary_spec,
        f = p == null ? void 0 : p.website_media_spec,
        y = p == null ? void 0 : p.featured_offering_spec,
        C = p == null ? void 0 : p.app_info_spec,
        b = c(e);
      return h({
        hasAppInfoMedia:
          m(C == null || (r = C.media) == null ? void 0 : r.icon_image_url) ||
          d(C == null || (o = C.media) == null ? void 0 : o.screenshot_urls),
        hasAppInfoOverview:
          m(
            C == null || (a = C.app_information) == null ? void 0 : a.app_name,
          ) ||
          m(
            C == null || (i = C.app_information) == null
              ? void 0
              : i.app_author,
          ) ||
          m(
            C == null || (l = C.app_information) == null
              ? void 0
              : l.app_category,
          ),
        hasAppReviews:
          m(
            C == null || (s = C.ratings_and_reviews) == null
              ? void 0
              : s.star_reviews,
          ) ||
          m(
            C == null || (u = C.ratings_and_reviews) == null
              ? void 0
              : u.ratings,
          ),
        hasFeaturedOfferingMedia:
          (y == null ? void 0 : y.adex_had_data) === !0 ||
          d(y == null ? void 0 : y.media),
        hasProductSet: g(e),
        hasWebsiteForm: b && t,
        hasWebsiteMedia:
          (f == null ? void 0 : f.adex_had_data) === !0 ||
          d(f == null ? void 0 : f.media),
        hasWebsiteScreenshot: b,
        hasWebsiteSummary:
          (_ == null ? void 0 : _.is_summary_text_available) === !0 ||
          (_ == null ? void 0 : _.is_selling_points_available) === !0 ||
          d(_ == null ? void 0 : _.selling_points) ||
          m(_ == null ? void 0 : _.summary_text),
      });
    }
    function C(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION
      );
    }
    function b(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        p,
        _ =
          e == null || (t = e.creative) == null
            ? void 0
            : t.creative_sourcing_spec,
        f = _ == null ? void 0 : _.app_info_spec,
        g = _ == null ? void 0 : _.website_summary_spec,
        h =
          d(g == null ? void 0 : g.selling_points) ||
          m(g == null ? void 0 : g.summary_text),
        y =
          m(f == null || (n = f.media) == null ? void 0 : n.icon_image_url) ||
          d(f == null || (r = f.media) == null ? void 0 : r.screenshot_urls) ||
          m(
            f == null || (o = f.app_information) == null ? void 0 : o.app_name,
          ) ||
          m(
            f == null || (a = f.app_information) == null
              ? void 0
              : a.app_author,
          ) ||
          m(
            f == null || (i = f.app_information) == null
              ? void 0
              : i.app_category,
          ) ||
          m(
            f == null || (l = f.ratings_and_reviews) == null
              ? void 0
              : l.star_reviews,
          ) ||
          m(
            f == null || (s = f.ratings_and_reviews) == null
              ? void 0
              : s.ratings,
          );
      return (
        (S(e) && h) ||
        (E(e) && y) ||
        (k(e) &&
          d(
            f == null || (u = f.ratings_and_reviews) == null
              ? void 0
              : u.top_reviews,
          )) ||
        (T(e) &&
          d(
            _ == null || (c = _.website_media_spec) == null ? void 0 : c.media,
          )) ||
        (D(e) &&
          d(
            _ == null || (p = _.featured_offering_spec) == null
              ? void 0
              : p.media,
          )) ||
        I(e)
      );
    }
    function v(e, t, n) {
      var r = y(e, C(t == null ? void 0 : t.objective)),
        a = c(e),
        i = b(e) || a,
        l = S(e) || E(e) || I(e) || T(e) || a;
      if (!i && !l) return !1;
      var s = u(
        t == null ? void 0 : t.special_ad_categories,
        t == null ? void 0 : t.buying_type,
        e != null ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) : !1,
        null,
        null,
      );
      return (
        n != null &&
          o("AdsAppExperiencesLoggerUtils").logAppExperiencesModalEligible(
            n,
            s,
            r,
            "precondition",
          ),
        s ? (N() ? i : l) : !1
      );
    }
    function S(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.website_summary_spec;
      if ((n == null ? void 0 : n.enroll_status) !== "OPT_IN") return !1;
      var r = n == null ? void 0 : n.subfeatures;
      return r == null
        ? !1
        : Array.isArray(r)
          ? r.some(function (e) {
              return (
                (e.feature_name === "selling_points" ||
                  e.feature_name === "reviews") &&
                e.enroll_status === "OPT_IN"
              );
            })
          : r.some(function (e) {
              return (
                (e.get("feature_name") === "selling_points" ||
                  e.get("feature_name") === "reviews") &&
                e.get("enroll_status") === "OPT_IN"
              );
            });
    }
    function R(e) {
      return (e == null ? void 0 : e.enroll_status) === "OPT_IN";
    }
    function L(e) {
      var t;
      return (
        (e == null || (t = e.ratings_and_reviews) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function E(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.app_info_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function k(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.app_info_spec) == null ||
        (t = t.ratings_and_reviews) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function I(e) {
      var t;
      return (
        g(e) &&
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function T(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.website_media_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function D(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.featured_offering_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function x(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("26702") === !0 : r("gkx")("26703") === !0
      );
    }
    function $(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.featured_offering_spec;
      return P(
        n == null ? void 0 : n.enroll_status,
        n == null ? void 0 : n.media,
      );
    }
    function P(e, t) {
      return e === "OPT_IN" && d(t);
    }
    function N(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("19052") === !0 : r("gkx")("19074") === !0
      );
    }
    function M(e) {
      var t,
        n,
        r,
        o = e == null || (t = e.media) == null ? void 0 : t.icon_image_url,
        a =
          (n =
            e == null || (r = e.media) == null ? void 0 : r.screenshot_urls) !=
          null
            ? n
            : [];
      return (
        (o != null && o !== "") ||
        a.some(function (e) {
          return e != null && e !== "";
        })
      );
    }
    function w(e) {
      var t,
        n,
        r,
        o = e == null || (t = e.app_information) == null ? void 0 : t.app_name,
        a =
          e == null || (n = e.app_information) == null ? void 0 : n.app_author,
        i =
          e == null || (r = e.app_information) == null
            ? void 0
            : r.app_category;
      return (
        (o != null && o !== "") ||
        (a != null && a !== "") ||
        (i != null && i !== "")
      );
    }
    function A(e) {
      var t,
        n,
        r =
          e == null || (t = e.ratings_and_reviews) == null
            ? void 0
            : t.star_reviews,
        o =
          e == null || (n = e.ratings_and_reviews) == null ? void 0 : n.ratings;
      return (r != null && r !== "") || (o != null && o !== "");
    }
    function F(e) {
      var t,
        n = M(e);
      return (
        (N(!0) ||
          (e == null || (t = e.media) == null ? void 0 : t.enroll_status) ===
            "OPT_IN") &&
        n
      );
    }
    function O(e) {
      var t,
        n = w(e);
      return (
        (N(!0) ||
          (e == null || (t = e.app_information) == null
            ? void 0
            : t.enroll_status) === "OPT_IN") &&
        n
      );
    }
    function B(e) {
      var t,
        n = A(e);
      return (
        (N(!0) ||
          (e == null || (t = e.ratings_and_reviews) == null
            ? void 0
            : t.enroll_status) === "OPT_IN") &&
        n
      );
    }
    function W(e) {
      var t, n;
      return (
        ((t =
          e == null ||
          (n = e.ratings_and_reviews) == null ||
          (n = n.top_reviews) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function q(e) {
      var t,
        n,
        r =
          ((e == null || (t = e.media) == null ? void 0 : t.enroll_status) ===
            "OPT_IN" &&
            M(e)) ||
          ((e == null || (n = e.app_information) == null
            ? void 0
            : n.enroll_status) === "OPT_IN" &&
            w(e)) ||
          (L(e) && A(e));
      return R(e) && r;
    }
    function U(e, t, n, r) {
      var a = n === "website_screenshot" || n === "website_form";
      if (
        a &&
        (!r || o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals())
      )
        return !1;
      var i =
        t === "details_to_ad_layout"
          ? e.aplusAdsWithBenefits
          : t === "show_summaries"
            ? null
            : t === "reveal_details"
              ? e.aplusRevealDetailsOverTime
              : t === "show_spotlights"
                ? e.aplusShowDestinationBlurbs
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      return i != null
        ? i === "OPT_IN"
        : n === "app_info"
          ? e.app_info
          : n === "app_reviews"
            ? e.app_reviews
            : n === "products"
              ? e.products
              : n === "website_media"
                ? e.website_media
                : n === "website_screenshot" || n === "website_form";
    }
    function V(e, t, n, r, o) {
      var a;
      if (r === "website_summaries" || !U(t, n, r, o)) return !1;
      var i =
          n === "details_to_ad_layout"
            ? e == null
              ? void 0
              : e.details_to_ad_layout
            : n === "reveal_details"
              ? e == null
                ? void 0
                : e.reveal_details
              : n === "show_spotlights"
                ? e == null
                  ? void 0
                  : e.show_spotlights
                : null,
        l =
          i == null || (a = i.data_sources) == null
            ? void 0
            : a.find(function (e) {
                return e.feature_name === r;
              });
      return l != null ? l.enroll_status === "OPT_IN" : !0;
    }
    function H(e, t, n) {
      return e
        ? t == null || (t === "OPT_OUT" && n === "DEFAULT")
          ? "OPT_IN"
          : null
        : t === "OPT_IN"
          ? "OPT_OUT"
          : null;
    }
    ((l.isAdSetupEligibleForAppExperiences = u),
      (l.hasSelectedAppReview = _),
      (l.buildAppExperiencesSourceDataExistence = h),
      (l.getAppExperiencesSourceDataExistence = y),
      (l.isAppExperiencesLeadCampaign = C),
      (l.isAdgroupEligibleForAppExperiences = v),
      (l.isWebsiteSummaryDataOptedIn = S),
      (l.appInfoSpecIsOptedIn = R),
      (l.appReviewsSpecIsOptedIn = L),
      (l.isAppInfoOptedIn = E),
      (l.isAppReviewsOptedIn = k),
      (l.isCatalogOptedIn = I),
      (l.isWebsiteMediaOptedIn = T),
      (l.isFeaturedOfferingOptedIn = D),
      (l.isAppExperiencesRevealDetailsWriteEnabled = x),
      (l.isFeaturedOfferingDataOptedIn = $),
      (l.isFeaturedOfferingDataOptedInFromSpec = P),
      (l.isAppExperiencesM3MoreAdSourcesEnabled = N),
      (l.appInfoHasMediaContent = M),
      (l.appInfoHasOverviewContent = w),
      (l.appInfoHasRatingsContent = A),
      (l.appInfoHasMedia = F),
      (l.appInfoHasOverview = O),
      (l.appInfoHasRatings = B),
      (l.appInfoHasTopReviews = W),
      (l.appInfoSpecHasData = q),
      (l.resolveAdditionalSourceEnrollStatus = V),
      (l.computeAdditionalSourceCascadeEnrollStatus = H));
  },
  98,
);
