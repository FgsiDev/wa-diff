__d(
  "AdsPostDefaultingRetentionUtils",
  [
    "AdsCFPreloadingLogger",
    "AdsExistingPostDefaultingUtils",
    "AdsInterfacesLogger",
    "AdsPagePostUtils",
    "AdsPostDefaultingValidationUtils",
    "FBLogger",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
      if (n != null) return n;
      try {
        var a;
        return o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(
          (a = e.creative) == null ? void 0 : a.object_story_id,
        );
      } catch (e) {
        return (
          r("FBLogger")("ads")
            .catching(r("getErrorSafe")(e))
            .warn("Unable to parse FB post ID"),
          null
        );
      }
    }
    function s(e, t, n, r, a, i, l, s) {
      var c, d, m, p, _;
      o("AdsCFPreloadingLogger").logCFPreloadedDataReadAttempt(
        "recommended-posts",
      );
      var f =
          (c =
            (d = e.suggested_posts_v2) == null
              ? void 0
              : d.recommendation_source) != null
            ? c
            : null,
        g =
          (m = e.suggested_posts_v2) == null ||
          (m = m.recommended_posts) == null
            ? void 0
            : m.slice().sort(function (e, t) {
                var n, r, o, a;
                return e.intent_score !== t.intent_score
                  ? ((n = t.intent_score) != null ? n : 0) -
                      ((r = e.intent_score) != null ? r : 0)
                  : ((o = e.post_id) != null ? o : "") >
                      ((a = t.post_id) != null ? a : "")
                    ? 1
                    : -1;
              });
      if (g == null)
        return (
          u(l != null ? l : "unknown", "no_posts", e.id, a, {
            ctaAtDefaulting: null,
            postsReturned: 0,
            postsFiltered: 0,
            filterReasons: [],
            defaultedPostId: null,
            isIGPost: !1,
            recommendationSource: f,
          }),
          { post: null, isIGPost: !1, recommendationSource: f }
        );
      var h = 0,
        y = [];
      for (var C of g) {
        var b,
          v,
          S = o("AdsExistingPostDefaultingUtils").getPostFromPostId(
            C.post_id,
            e.id,
          ),
          R = S.isIGPost,
          L = S.post;
        if (L == null) {
          (h++, y.includes("post_not_in_store") || y.push("post_not_in_store"));
          continue;
        }
        var E = R
          ? o(
              "AdsExistingPostDefaultingUtils",
            ).checkIGPostEligibilityForDefaulting(L, a, e.id, l)
          : null;
        if (E != null) {
          (h++,
            y.includes("ig_ineligible") || y.push("ig_ineligible"),
            y.includes(E) || y.push(E));
          continue;
        }
        if (
          !R &&
          !o("AdsExistingPostDefaultingUtils").isFBPostEligibleForDefaulting(
            L,
            a,
            { instagramActorID: s, pageID: e.id },
          )
        ) {
          (h++, y.includes("fb_ineligible") || y.push("fb_ineligible"));
          continue;
        }
        var k = o("AdsPostDefaultingValidationUtils").validatePost(
          R,
          L,
          t,
          n,
          r,
          a,
          i,
        );
        if (k.length > 0) {
          (h++, y.includes("validation_error") || y.push("validation_error"));
          continue;
        }
        var I = l != null ? l : "unknown";
        return (
          u(I, R ? "defaulted_ig_post" : "defaulted_fb_post", e.id, a, {
            ctaAtDefaulting:
              (b = (v = L.call_to_action) == null ? void 0 : v.type) != null
                ? b
                : null,
            postsReturned: g.length,
            postsFiltered: h,
            filterReasons: y,
            defaultedPostId: L.id,
            isIGPost: R,
            recommendationSource: f,
          }),
          { post: L, isIGPost: R, recommendationSource: f }
        );
      }
      var T = l != null ? l : "unknown";
      return (
        u(T, "all_filtered", e.id, a, {
          ctaAtDefaulting: null,
          postsReturned: g.length,
          postsFiltered: h,
          filterReasons: y,
          defaultedPostId: null,
          isIGPost: ((p = g[0]) == null ? void 0 : p.is_ig_media) === !0,
          recommendationSource: f,
        }),
        {
          post: null,
          isIGPost: ((_ = g[0]) == null ? void 0 : _.is_ig_media) === !0,
          recommendationSource: f,
        }
      );
    }
    function u(e, t, n, o, a) {
      var i;
      if (!(!a.isIGPost && t !== "no_posts")) {
        var l = {
          trigger: e,
          posts_returned: a.postsReturned,
          posts_filtered: a.postsFiltered,
          filter_reasons: a.filterReasons,
          defaulted_post_id: a.defaultedPostId,
          is_ig_post: a.isIGPost,
          cta_at_defaulting: a.ctaAtDefaulting,
          recommendation_source: a.recommendationSource,
        };
        r("AdsInterfacesLogger").log({
          eventName: "ig_post_defaulting_attempt_summary",
          data:
            ((i = {}),
            (i.page_id = String(n != null ? n : "")),
            (i.objective = o),
            (i.module_name = t),
            (i.event_source = JSON.stringify(l)),
            i),
        });
      }
    }
    ((l.getPostID = e), (l.getRecommendedPost = s));
  },
  98,
);
