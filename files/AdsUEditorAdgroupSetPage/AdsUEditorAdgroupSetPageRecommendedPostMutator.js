__d(
  "AdsUEditorAdgroupSetPageRecommendedPostMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsDataAtom",
    "AdsExistingPostDefaultingGatingUtils",
    "AdsInterfacesLoggerUtils",
    "AdsODAXUtils",
    "AdsPostDefaultingAction",
    "AdsPostDefaultingRetentionUtils",
    "AdsUEditorAdgroupExistingPostDefaultingMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "cr:9968",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, l, s, u, c, d, m, p) {
      (m === void 0 && (m = "page_switch"), p === void 0 && (p = !1));
      try {
        var _, f, g, h;
        if (
          ((_ = a.creative) == null ? void 0 : _.object_story_id) != null ||
          ((f = a.creative) == null ? void 0 : f.source_instagram_media_id) !=
            null ||
          o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(a)
        )
          return a;
        var y = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: l,
            campaignGroup: s,
          }),
          C = o("AdsODAXUtils").maybeTranslateObjective(
            s.objective,
            y,
            l.optimization_goal,
          ),
          b = o("AdsPostDefaultingRetentionUtils").getRecommendedPost(
            d(c),
            t,
            l,
            s,
            C,
            y,
            m,
            (g = a.creative) == null ? void 0 : g.instagram_actor_id,
          ),
          v = b.isIGPost,
          S = b.post,
          R = b.recommendationSource;
        if (S == null) return a;
        var L =
          m === "manual_existing_post_switch" || (m === "page_switch" && p);
        if (!L) return a;
        if (v)
          return o(
            "AdsExistingPostDefaultingGatingUtils",
          ).isBoostOnAML1IGDefaultingEnabled({ logExposure: !0 })
            ? ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  (r("AdsPostDefaultingAction").dispatch(
                    {
                      isPostDefaulted: !0,
                      pageID: String(c),
                      postID: S.id,
                      isIGMedia: !0,
                      recommendationSource: R,
                    },
                    {
                      line: "136",
                      module:
                        "AdsUEditorAdgroupSetPageRecommendedPostMutator.js",
                      moduleID: i.id,
                    },
                  ),
                    n("cr:9968")());
                },
              ),
              o("AdsUEditorAdgroupExistingPostDefaultingMutators").setPost(
                c,
                S,
                !0,
                t,
                a,
                l,
                s,
                C,
                y,
              ))
            : a;
        if (
          l.optimization_goal === r("AdsAPIOptimizationGoals").VALUE &&
          ((h = l.promoted_object) == null ? void 0 : h.pixel_id) != null
        )
          return a;
        if (S.page_id != null && String(S.page_id) !== String(c)) {
          var E;
          return (
            o("AdsInterfacesLoggerUtils").logException(
              r("err")("fb_post_defaulting_page_mismatch"),
              ((E = {}),
              (E.module_name =
                "AdsUEditorAdgroupSetPageRecommendedPostMutator"),
              (E.page_id = c),
              E),
            ),
            a
          );
        }
        return !r("justknobx")._("494") ||
          !o(
            "AdsExistingPostDefaultingGatingUtils",
          ).isBoostOnAML1FBDefaultingEnabled({ logExposure: !0 })
          ? a
          : ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              var e;
              (r("AdsPostDefaultingAction").dispatch(
                {
                  isPostDefaulted: !0,
                  pageID: String(c),
                  postID: (e = S.id) == null ? void 0 : e.split("_")[1],
                  isIGMedia: !1,
                  recommendationSource: R,
                },
                {
                  line: "204",
                  module: "AdsUEditorAdgroupSetPageRecommendedPostMutator.js",
                  moduleID: i.id,
                },
              ),
                n("cr:9968")());
            }),
            o("AdsUEditorAdgroupExistingPostDefaultingMutators").setPost(
              c,
              S,
              !1,
              t,
              a,
              l,
              s,
              C,
              y,
            ));
      } catch (e) {
        var k;
        return (
          o("AdsInterfacesLoggerUtils").logException(
            e,
            ((k = {}),
            (k.module_name = "AdsUEditorAdgroupSetPageRecommendedPostMutator"),
            (k.objective = s.objective),
            (k.page_id = c),
            k),
          ),
          a
        );
      }
    }
    function u(e, t, n, r, a, i, l, u) {
      var c = l != null ? l : o("AdsAPIAdgroupRecordUtils").getPageID(n, i);
      return e !== !0 || c == null
        ? n
        : s(t, n, r, a, i, c, u, "manual_existing_post_switch");
    }
    ((l.setRecommendedPost = s), (l.setRecommendedPostAfterManualSwitch = u));
  },
  98,
);
