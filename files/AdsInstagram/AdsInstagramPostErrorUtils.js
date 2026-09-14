__d(
  "AdsInstagramPostErrorUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIObjectives",
    "AdsAudioSwapModalConstants",
    "AdsBuyingTypes",
    "AdsError",
    "AdsErrorUtils",
    "AdsErrorsCTAStrings",
    "AdsInstagramErrorUtils",
    "AdsInstagramShoppingAdsUtils",
    "BrandedContentAdsUtils",
    "GeoLink.react",
    "LiveVideoPostUtil",
    "adsProductTagsIntegrityUtils",
    "emptyArray",
    "emptyObject",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d = e || (e = o("react"));
    function m(e, t, n, a, i, l, s, u, d) {
      (n === void 0 && (n = []),
        l === void 0 && (l = !0),
        s === void 0 && (s = !1),
        d === void 0 && (d = !1));
      var m = [];
      if (o("LiveVideoPostUtil").isLiveVideoAndEligibleForUsabilityFix(t))
        return m;
      if (!t.is_instagram_eligible && t.instagram_eligibility !== "eligible") {
        var _ = o("AdsInstagramErrorUtils")
          .getIneligibilityReason(t.instagram_eligibility, e)
          .toString();
        t.instagram_eligibility !== "ineligible_video_length" &&
          m.push(
            new (r("AdsError"))(1815390, _, {
              cta: r("AdsErrorsCTAStrings").INELIGIBLE_IG_POST_CTA,
              level: r("AdsError").Level.WARN,
            }),
          );
      } else if (
        t.type === "carousel" &&
        (d ||
          !n.every(function (t) {
            return h(t, e);
          }))
      ) {
        var f = c
          ._(
            /*BTDS*/ "The selected objective doesn't support ads including carousel.",
          )
          .toString();
        m.push(
          new (r("AdsError"))(2238092, f, { level: r("AdsError").Level.WARN }),
        );
      } else if (
        t.has_product_tags &&
        t.boost_eligibility !== "HAS_PINNED_PRODUCTS" &&
        t.boost_eligibility !== "IS_REELS_WITH_PRODUCT_TAG"
      ) {
        var g = p(e, t, n, l);
        m = m.concat(g);
      } else if (
        t.boost_eligibility === "IS_REELS_WITH_THIRD_PARTY_CAMERA_EFFECTS"
      ) {
        var b = o("AdsInstagramErrorUtils").getBoostIneligibilityError(
          "IS_REELS_WITH_THIRD_PARTY_CAMERA_EFFECTS",
          e,
        );
        b != null && m.push(b);
      } else {
        if (t.boost_eligibility === "IS_REELS_WITH_CAMERA_EFFECTS") return m;
        if (t.boost_eligibility !== "ELIGIBLE") {
          var v = o("AdsInstagramErrorUtils").getBoostIneligibilityError(
            t.boost_eligibility,
            e,
          );
          if (v != null) {
            var S = v.key === 2875034;
            if (S) {
              var R = r("gkx")("22333");
              (!R || !r("justknobx")._("1338")) && m.push(v);
            } else if (v.key === 2875030) {
              var L =
                t.has_sponsors === !0 ||
                t.sponsor_tags != null ||
                t.coauthor_producers != null;
              if (!L && !l) {
                var E,
                  k = (E = r("gkx")("3697")) != null ? E : !1;
                if (!k) m.push(v);
                else {
                  var I = new (r("AdsError"))(
                    2875030,
                    t.has_fb_copy
                      ? o(
                          "AdsAudioSwapModalConstants",
                        ).AUDIO_SWAP_MODAL_CONSTANTS.AUDIO_ALREADY_SWAPPED_DESCRIPTION.toString()
                      : o(
                          "AdsAudioSwapModalConstants",
                        ).AUDIO_SWAP_MODAL_CONSTANTS.DISABLED_AUDIO_DESCRIPTION.toString(),
                    { level: "notify" },
                  );
                  m.push(I);
                }
              } else {
                var T,
                  D,
                  x,
                  $ =
                    (T = t == null ? void 0 : t.partnership_ads_identities) !=
                    null
                      ? T
                      : r("emptyObject"),
                  P = $.secondary_identities,
                  N =
                    l &&
                    ((D = P == null ? void 0 : P.length) != null ? D : 0) > 1,
                  M =
                    P != null &&
                    o(
                      "BrandedContentAdsUtils",
                    ).hasUpgradedPAPermissionForAudioSwap(
                      t,
                      N
                        ? null
                        : P == null || (x = P[0].ig_user) == null
                          ? void 0
                          : x.id,
                    ),
                  w = C(t, M, !1);
                w != null ? m.push(w) : m.push(v);
              }
            } else m.push(v);
          }
        } else if (t.has_upcoming_event) {
          var A = y();
          A && m.push(A);
        }
      }
      return m;
    }
    function p(e, t, n, a) {
      var i = [];
      if (
        n.every(function (e) {
          return o("AdsInstagramShoppingAdsUtils").isValidShoppingAdObjective(
            e,
          );
        })
      ) {
        if (t.review_status_for_shopping_ads === "REJECTED_BY_MEDIA_REVIEW") {
          var s = c
            ._(
              /*BTDS*/ "This Instagram post can't be used for ads because its media has failed review.",
            )
            .toString();
          i.push(
            new (r("AdsError"))(2238145, s, {
              level: r("AdsError").Level.WARN,
            }),
          );
        } else if (
          t.review_status_for_shopping_ads === "REJECTED_BY_PRODUCTS_REVIEW"
        ) {
          var u,
            d = c
              ._(
                /*BTDS*/ "This post can't be used for ads because it includes a tag for a product that has been rejected.",
              )
              .toString(),
            m = f(t),
            p =
              m == null || (u = m[0]) == null || (u = u.product_catalog) == null
                ? void 0
                : u.id,
            _ = Array.from(
              new Set(
                m == null
                  ? void 0
                  : m.map(function (e) {
                      var t = e.retailer_id;
                      return t;
                    }),
              ),
            );
          i.push(
            new (r("AdsError"))(2238069, d, {
              level: r("AdsError").Level.WARN,
              cta: c._(/*BTDS*/ "Request Review"),
              field:
                p != null && _ != null
                  ? o("adsProductTagsIntegrityUtils")
                      .makeCommerceManagerProductsUri(p, _)
                      .toString()
                  : null,
            }),
          );
        } else if (t.review_status_for_shopping_ads === "PENDING") {
          var g = c
            ._(
              /*BTDS*/ "This post isn't available for ads because it includes a tag for a product that is being reviewed.",
            )
            .toString();
          i.push(
            new (r("AdsError"))(2238068, g, {
              level: r("AdsError").Level.WARN,
            }),
          );
        } else if (t.has_media_with_all_deleted_products) {
          var h = c
            ._(
              /*BTDS*/ "There's a problem with the product tags in this post. Check your post and update or remove any broken tags.",
            )
            .toString();
          i.push(
            new (r("AdsError"))(2238067, h, {
              level: r("AdsError").Level.WARN,
            }),
          );
        }
      } else {
        var l = c
          ._(
            /*BTDS*/ "Shopping posts aren't available for the selected ad objective.",
          )
          .toString();
        i.push(
          new (r("AdsError"))(2238080, l, { level: r("AdsError").Level.WARN }),
        );
      }
      return i;
    }
    function _(e, t, n, a, i, l, s, u, c, d, p, _) {
      (c === void 0 && (c = !0),
        d === void 0 && (d = !1),
        _ === void 0 && (_ = !1));
      var f = new Map();
      return (
        t &&
          t.forEach(function (t) {
            f.set(t.id, m(e, t, a, i || r("emptyArray"), u, c, d, p, _));
          }),
        f.forEach(function (e, t) {
          (n || []).includes(r("AdsBuyingTypes").RESERVED) ||
            (l
              ? f.set(t, e)
              : f.set(
                  t,
                  o("AdsErrorUtils").giveRecommendationsForSoftErrors(e, s),
                ));
        }),
        f
      );
    }
    function f(e) {
      var t, n;
      if (e.type === "carousel") {
        var r,
          o = [];
        return (
          e == null ||
            (r = e.children_media) == null ||
            r.forEach(function (e) {
              var t, n;
              o.push.apply(
                o,
                g(
                  (t =
                    e == null || (n = e.tagged_products) == null
                      ? void 0
                      : n.data) != null
                    ? t
                    : [],
                ),
              );
            }),
          o
        );
      }
      return g(
        (t = (n = e.tagged_products) == null ? void 0 : n.data) != null
          ? t
          : [],
      );
    }
    function g(e) {
      return e.filter(function (e) {
        return !o("adsProductTagsIntegrityUtils").eligibleForTagging(e);
      });
    }
    function h(e, t) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").APP_INSTALLS ||
        e === r("AdsAPIObjectives").MESSAGES ||
        e === r("AdsAPIObjectives").POST_ENGAGEMENT
      );
    }
    function y() {
      var e = c._(/*BTDS*/ "Posts with Reminders can't be used as ads. {=m1}", [
        c._implicitParam(
          "=m1",
          d.jsx(r("GeoLink.react"), {
            href: "https://www.facebook.com/business/help/205464642380454",
            target: "_blank",
            children: c._(
              /*BTDS*/ "{newline}{newline2} Learn how to create reminder ads",
              [
                c._param("newline", d.jsx("br", {})),
                c._param("newline2", d.jsx("br", {})),
              ],
            ),
          }),
        ),
      ]);
      return new (r("AdsError"))(2238228, e, {
        level: r("AdsError").Level.WARN,
      });
    }
    function C(e, t, n) {
      var a;
      if (
        (t === void 0 && (t = !1), n === void 0 && (n = !1), e.type !== "video")
      )
        return null;
      var i =
        (a = e.partnership_ads_boost_eligibility_errors) == null
          ? void 0
          : a.find(function (e) {
              return Object.values(e).includes(2875030);
            });
      return r("isFalsey")(i)
        ? null
        : t
          ? r("isTruthy")(e.has_fb_copy)
            ? new (r("AdsError"))(
                3867170,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "This post uses licensed music that can't be used in ads for legal reasons. The music used for your previous ad featuring this post will be used again. The original post won't be changed.",
                  );
                }, {}),
                { level: "notify" },
              )
            : new (r("AdsError"))(
                3867171,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "This post uses licensed music that can't be used in ads for legal reasons. You can choose different music for the ad and the original post will retain its original music.",
                  );
                }, {}),
                { level: "notify" },
              )
          : r("isTruthy")(n)
            ? new (r("AdsError"))(
                3867169,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Reels with copyright music created before 9\/12\/2024 cannot be boosted without new partnership ad permissions. You can request a new ad code from your partner to use this reel.",
                  );
                }, {}),
                { level: "warn" },
              )
            : new (r("AdsError"))(
                3867168,
                o(
                  "AdsAudioSwapModalConstants",
                ).AUDIO_SWAP_MODAL_CONSTANTS.PARTNERSHIP_ADS_DOES_NOT_HAVE_PERMISSION_CAPABILITY.toString(),
                { level: "warn" },
              );
    }
    ((l.getErrorsForSinglePost = m),
      (l.getErrorsForShoppingPost = p),
      (l.getErrorsForAllPosts = _),
      (l.isValidCarouselAdObjective = h),
      (l.getErrorsForUpcomingEventPosts = y),
      (l.getPartnershipAdsAudioSwapError = C));
  },
  226,
);
