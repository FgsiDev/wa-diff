__d(
  "AdsExistingPostDefaultingUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsCFPreloadingLogger",
    "AdsClickToMessageSABRBudgetDefaultStoreUtils",
    "AdsDataAtom",
    "AdsExistingPostCTXDefaultingUtils",
    "AdsExistingPostLiveShoppingDefaultingUtils",
    "AdsInstagramMediaV2DataProvider",
    "AdsInterfacesLogger",
    "AdsPagePostUtils",
    "AdsPostDefaultingAction",
    "AdsPostDefaultingBehavior",
    "ClickToWhatsAppFeatureGating",
    "IGFAFeatureGating",
    "adsCallToActionIsCTASupportedByObjective",
    "adsInstagramPostConvertV2MediaToFBPagePost",
    "cr:12173",
    "cr:1885",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "new_advertisers",
      u = r("AdsInstagramMediaV2DataProvider").toFluxSelector();
    function c(e) {
      var t = u().get(e);
      return t.isDone() && t.hasValue()
        ? r("adsInstagramPostConvertV2MediaToFBPagePost")(t.getValueEnforcing())
        : null;
    }
    var d = function (t) {
        return c(t);
      },
      m = function (t, n) {
        var e = r("gkx")("9058"),
          a =
            n.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
            n.objective === r("AdsAPIObjectives").LEAD_GENERATION;
        return (
          !o("IGFAFeatureGating").passesIgXmaDogfoodingGK() &&
          a &&
          (!o("AdsClickToMessageSABRBudgetDefaultStoreUtils").hasCtxAdsInL28(
            t,
          ) ||
            e)
        );
      },
      p = function (t, n) {
        var e = { post: null, isIGPost: !1 };
        try {
          if (!t || !n) return e;
          var r = o(
            "AdsExistingPostLiveShoppingDefaultingUtils",
          ).getPostFromPagePostID(
            (n != null ? n : "") + "_" + (t != null ? t : ""),
          );
          if (
            r &&
            !o(
              "AdsExistingPostLiveShoppingDefaultingUtils",
            ).getIsPartnershipAdPost(r)
          )
            return { post: r, isIGPost: !1 };
          var a = d(t != null ? t : "");
          return a &&
            !o(
              "AdsExistingPostLiveShoppingDefaultingUtils",
            ).getIsPartnershipAdPost(a)
            ? { post: a, isIGPost: !0 }
            : e;
        } catch (t) {
          return e;
        }
      },
      _ = function (t, n) {
        return r("gkx")("17693")
          ? t !== r("AdsAPIObjectives").APP_INSTALLS
          : !1;
      },
      f = 255;
    function g(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ig_post_defaulting_filtered",
        data:
          ((o = {}),
          (o.page_id = String(e != null ? e : "")),
          (o.objective = t),
          (o.module_name = n),
          o),
      });
    }
    function h(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ig_post_defaulting_filtered",
        data:
          ((i = {}),
          (i.page_post_id = e.id),
          (i.page_id = String(t != null ? t : "")),
          (i.objective = n),
          (i.module_name = o),
          (i.event_source = a != null ? a : "unknown"),
          i),
      });
    }
    function y(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "fb_post_defaulting_skipped_ineligible",
        data:
          ((a = {}),
          (a.page_post_id = e.id),
          (a.page_id = String(t != null ? t : "")),
          (a.objective = n),
          (a.module_name = o),
          a),
      });
    }
    function C(e, t) {
      if (!e.message) return "no_caption";
      if (e.message.length > f) return "caption_too_long";
      if (e.type === "video" && !e.has_fb_copy) return "video_no_fb_copy";
      if (t != null) {
        var n,
          o = (n = e.call_to_action) == null ? void 0 : n.type;
        if (o != null && !r("adsCallToActionIsCTASupportedByObjective")(t, o))
          return "incompatible_cta";
      }
      return null;
    }
    function b(e, t, n, r) {
      var o = C(e, t);
      return (o != null && h(e, n, t, o, r), o);
    }
    function v(e, t, n) {
      return b(e, t, n) == null;
    }
    function S(e, t, o) {
      var a = (o == null ? void 0 : o.pageID) != null ? String(o.pageID) : null;
      if (t != null) {
        var i,
          l = (i = e.call_to_action) == null ? void 0 : i.type;
        if (l != null && !r("adsCallToActionIsCTASupportedByObjective")(t, l))
          return (y(e, a, t, "incompatible_cta"), !1);
      }
      if (
        (o == null ? void 0 : o.instagramActorID) != null &&
        (o == null ? void 0 : o.pageID) != null
      ) {
        var s,
          u =
            n("cr:12173") == null ||
            (s = n("cr:12173").getLoadObject(o.pageID)) == null
              ? void 0
              : s.getValue();
        if (u != null && u.connected_instagram_account == null)
          return (y(e, a, t, "no_connected_ig_account"), !1);
      }
      return !0;
    }
    var R = function (t, n, a, i, l, s) {
        var e = {
            ctaAtDefaulting: null,
            postsReturned: t.recommended_posts.length,
            postsFiltered: 0,
            filterReasons: [],
            postsRaceCondition: 0,
            postsRaceConditionIG: 0,
            postsRaceConditionFB: 0,
          },
          u = t.recommended_posts.find(function (t) {
            var u;
            if (t.is_ig_media === !0) {
              var c,
                m = d((c = t.post_id) != null ? c : "");
              if (m == null) {
                var p;
                return (
                  e.postsRaceCondition++,
                  e.postsRaceConditionIG++,
                  r("AdsInterfacesLogger").logOnce({
                    eventName: "ig_post_defaulting_batch_load_race_condition",
                    data:
                      ((p = {}),
                      (p.page_post_id = t.post_id),
                      (p.page_id = String(n != null ? n : "")),
                      p),
                  }),
                  !1
                );
              }
              if (
                o(
                  "AdsExistingPostLiveShoppingDefaultingUtils",
                ).getIsPartnershipAdPost(m)
              )
                return (
                  e.postsFiltered++,
                  e.filterReasons.includes("partnership_ad") ||
                    e.filterReasons.push("partnership_ad"),
                  !1
                );
              if (!v(m, a, String(n != null ? n : "")))
                return (
                  e.postsFiltered++,
                  e.filterReasons.includes("ig_ineligible") ||
                    e.filterReasons.push("ig_ineligible"),
                  !1
                );
              var _ = o("AdsPagePostUtils").isVisible(
                m,
                a,
                i,
                null,
                null,
                l,
                s,
              );
              if (!_)
                (e.postsFiltered++,
                  e.filterReasons.includes("not_visible") ||
                    e.filterReasons.push("not_visible"));
              else {
                var f, g;
                e.ctaAtDefaulting =
                  (f = (g = m.call_to_action) == null ? void 0 : g.type) != null
                    ? f
                    : null;
              }
              return _;
            }
            var h = o(
              "AdsExistingPostLiveShoppingDefaultingUtils",
            ).getPostFromPagePostID(
              (n != null ? n : "") + "_" + ((u = t.post_id) != null ? u : ""),
            );
            if (h == null) {
              var y;
              return (
                e.postsRaceCondition++,
                e.postsRaceConditionFB++,
                r("AdsInterfacesLogger").logOnce({
                  eventName: "fb_post_defaulting_batch_load_race_condition",
                  data:
                    ((y = {}),
                    (y.page_post_id = t.post_id),
                    (y.page_id = String(n != null ? n : "")),
                    y),
                }),
                !1
              );
            }
            if (!S(h, a))
              return (
                e.postsFiltered++,
                e.filterReasons.includes("fb_ineligible") ||
                  e.filterReasons.push("fb_ineligible"),
                !1
              );
            var C = o("AdsPagePostUtils").isVisible(h, a, i, null, null, l, s);
            if (!C)
              (e.postsFiltered++,
                e.filterReasons.includes("not_visible") ||
                  e.filterReasons.push("not_visible"));
            else {
              var b, R;
              e.ctaAtDefaulting =
                (b = (R = h.call_to_action) == null ? void 0 : R.type) != null
                  ? b
                  : null;
            }
            return C;
          });
        return { post: u != null ? u : null, stats: e };
      },
      L = function (t, n, r) {
        return o(
          "AdsExistingPostCTXDefaultingUtils",
        ).isEligibleForDefaultToExistingPostForCTX(t, n, !1, r)
          ? {
              shouldDefault: o(
                "AdsExistingPostCTXDefaultingUtils",
              ).isCTXExistingPostDefaultingEnabledByQE(r),
            }
          : null;
      },
      E = function (t, n, r) {
        return m(t, r)
          ? {
              shouldDefault:
                o(
                  "ClickToWhatsAppFeatureGating",
                ).getTestGroupForExistingPostDefaultingCTWA(n) === s,
            }
          : { shouldDefault: !1 };
      },
      k = function (t, a, i, l, s) {
        var e;
        if (t == null) return (g(null, a, "page_id_null"), null);
        var u =
          n("cr:12173") == null
            ? void 0
            : n("cr:12173").getLoadObject(t).getValue();
        if (u == null) return (g(String(t), a, "page_not_loaded"), null);
        if (!_(a, i)) return (g(String(t), a, "ineligible_objective"), null);
        var c = u.suggested_posts_v2;
        if (c == null) return (g(String(t), a, "suggested_posts_null"), null);
        var d = c.recommended_posts.some(function (e) {
            return e.is_ig_media === !0;
          }),
          m = c.recommended_posts.some(function (e) {
            return e.is_ig_media !== !0;
          });
        if (
          (o("AdsCFPreloadingLogger").logCFPreloadedDataReadAttempt(
            "recommended-ig-posts",
          ),
          d)
        ) {
          var p;
          r("AdsInterfacesLogger").logOnce({
            eventName: "ig_post_defaulting_attempt",
            data: ((p = {}), (p.page_id = String(t)), p),
          });
        }
        if (m) {
          var f;
          r("AdsInterfacesLogger").logOnce({
            eventName: "fb_post_defaulting_attempt",
            data: ((f = {}), (f.page_id = String(t)), f),
          });
        }
        var h = R(c, t, a, i, l, s),
          y = h.post,
          C = h.stats,
          b =
            y != null
              ? y.is_ig_media === !0
                ? "defaulted_ig_post"
                : "defaulted_fb_post"
              : C.postsReturned === 0
                ? "no_posts"
                : C.postsFiltered > 0
                  ? "all_filtered"
                  : "race_condition_all";
        if (
          c.recommended_posts.some(function (e) {
            return e.is_ig_media === !0;
          })
        ) {
          var v,
            S,
            L = !0,
            E = {
              trigger: "initial_load",
              posts_returned: C.postsReturned,
              posts_filtered: C.postsFiltered,
              filter_reasons: C.filterReasons,
              posts_race_condition: C.postsRaceCondition,
              posts_race_condition_ig: C.postsRaceConditionIG,
              posts_race_condition_fb: C.postsRaceConditionFB,
              defaulted_post_id:
                (v = y == null ? void 0 : y.post_id) != null ? v : null,
              is_ig_post: L,
              recommendation_source: c.recommendation_source,
              cta_at_defaulting: C.ctaAtDefaulting,
            };
          r("AdsInterfacesLogger").log({
            eventName: "ig_post_defaulting_attempt_summary",
            data:
              ((S = {}),
              (S.page_id = String(t)),
              (S.objective = a),
              (S.module_name = b),
              (S.event_source = JSON.stringify(E)),
              S),
          });
        }
        return y == null
          ? null
          : y.is_ig_media === !0
            ? { shouldDefault: !1 }
            : (r("AdsInterfacesLogger").logOnce({
                eventName: "fb_post_defaulting_success",
                data:
                  ((e = {}),
                  (e.page_post_id = y.post_id),
                  (e.page_id = String(t)),
                  e),
              }),
              { shouldDefault: !1 });
      },
      I = function (a, l, s, u, c, d, m, p, _) {
        var t;
        p === void 0 && (p = !1);
        var f = d != null ? d : u.objective,
          g =
            _ != null
              ? _
              : o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  u.objective,
                  s,
                ),
          h =
            n("cr:1885") == null ||
            (t = n("cr:1885").resolve({
              objective: f,
              promotedObjectType: g,
            })) == null
              ? void 0
              : t.getPostDefaultingBehavior();
        if (h === r("AdsPostDefaultingBehavior").NO_DEFAULTING)
          return { shouldDefault: !1 };
        var y =
          h === r("AdsPostDefaultingBehavior").SUGGESTED_POSTS_ONLY ||
          (h == null && p);
        (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("AdsPostDefaultingAction").dispatch(
            { isPostDefaulted: !1 },
            {
              line: "632",
              module: "AdsExistingPostDefaultingUtils.js",
              moduleID: i.id,
            },
          );
        });
        try {
          if (a == null) return { shouldDefault: !1 };
          if (y) {
            var C;
            return (C = k(
              a,
              u.objective,
              s.optimization_goal,
              s.destination_type,
              g,
            )) != null
              ? C
              : { shouldDefault: !1 };
          }
          var b = o(
            "AdsExistingPostLiveShoppingDefaultingUtils",
          ).handleLiveVideoDefaulting(a, l, c, d, m);
          if (b) return b;
          var v = L(a, s.destination_type, u.objective);
          if (v) return v;
          var S = k(a, u.objective, s.optimization_goal, s.destination_type, g);
          return S || E(a, l, u);
        } catch (e) {
          return { shouldDefault: !1 };
        }
      };
    ((l.getPostFromPostId = p),
      (l.getIGPostIneligibilityReason = C),
      (l.checkIGPostEligibilityForDefaulting = b),
      (l.isIGPostEligibleForDefaulting = v),
      (l.isFBPostEligibleForDefaulting = S),
      (l.shouldDefaultToExistingPost = I));
  },
  98,
);
