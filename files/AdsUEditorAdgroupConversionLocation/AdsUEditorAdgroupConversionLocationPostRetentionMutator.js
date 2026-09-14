__d(
  "AdsUEditorAdgroupConversionLocationPostRetentionMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsDataAtom",
    "AdsExistingPostDefaultingUtils",
    "AdsInterfacesLoggerUtils",
    "AdsODAXUtils",
    "AdsPostDefaultingAction",
    "AdsPostDefaultingExperimentUtils",
    "AdsPostDefaultingRetentionUtils",
    "AdsPostDefaultingValidationUtils",
    "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
    "AdsUEditorAdgroupExistingPostDefaultingMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n, r;
      return o("AdsPostDefaultingExperimentUtils").isEnabled()
        ? {
            isExistingPostAd: o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
            postID: o("AdsPostDefaultingRetentionUtils").getPostID(e),
            pageID: o("AdsAPIAdgroupRecordUtils").getPageID(e, t),
            instagramActorID:
              (n = e.creative) == null ? void 0 : n.instagram_actor_id,
            instagramUserID:
              (r = e.creative) == null ? void 0 : r.instagram_user_id,
          }
        : null;
    }
    function u(e, t, n, r, a, i, l, s) {
      if (t != null) {
        var u = o("AdsExistingPostDefaultingUtils").getPostFromPostId(t, e),
          c = u.isIGPost,
          d = u.post;
        if (d != null) {
          var m = o("AdsPostDefaultingValidationUtils").validatePost(
            c,
            d,
            n,
            r,
            a,
            i,
            l,
          );
          if (m.length <= 0)
            return { isIGPost: c, post: d, recommendationSource: null };
        }
      }
      return s == null
        ? { post: null, isIGPost: !1, recommendationSource: null }
        : o("AdsPostDefaultingRetentionUtils").getRecommendedPost(
            s(e),
            n,
            r,
            a,
            i,
            l,
            "conversion_location_change",
          );
    }
    function c(t) {
      var n = t.account,
        a = t.adgroup,
        l = t.campaign,
        s = t.campaignGroup,
        c = t.getPage,
        d = t.originalData,
        m = t.specPathPlugin;
      try {
        if (d == null) return null;
        var p = d.pageID,
          _ = d.postID;
        if (!d.isExistingPostAd || p == null) return null;
        var f = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: l,
            campaignGroup: s,
          }),
          g = o("AdsODAXUtils").maybeTranslateObjective(
            s.objective,
            f,
            l.optimization_goal,
          ),
          h = u(p, _, n, l, s, g, f, c),
          y = h.isIGPost,
          C = h.post,
          b = h.recommendationSource;
        if (C == null) return null;
        if (!r("justknobx")._("5514")) return a;
        var v = o(
          "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
        ).initExistingPostAd(
          p,
          d.instagramActorID,
          d.instagramUserID,
          a,
          l,
          s,
          m,
        );
        return (
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            var e;
            r("AdsPostDefaultingAction").dispatch(
              {
                isPostDefaulted: !0,
                pageID: String(p),
                postID: y
                  ? C.id
                  : (e = C.id) == null
                    ? void 0
                    : e.split("_")[1],
                isIGMedia: y,
                recommendationSource: b,
              },
              {
                line: "189",
                module:
                  "AdsUEditorAdgroupConversionLocationPostRetentionMutator.js",
                moduleID: i.id,
              },
            );
          }),
          o("AdsUEditorAdgroupExistingPostDefaultingMutators").setPost(
            p,
            C,
            y,
            n,
            v,
            l,
            s,
            g,
            f,
          )
        );
      } catch (e) {
        var S;
        return (
          o("AdsInterfacesLoggerUtils").logException(
            e,
            ((S = {}),
            (S.module_name =
              "AdsUEditorAdgroupConversionLocationPostRetentionMutator"),
            (S.objective = s.objective),
            (S.page_id = d == null ? void 0 : d.pageID),
            S),
          ),
          a
        );
      }
    }
    function d(e) {
      var t;
      return (t = c(e)) != null ? t : e.adgroup;
    }
    ((l.createExistingPostRetentionOriginalData = s),
      (l.tryRetainExistingPost = c),
      (l.retainExistingPost = d));
  },
  98,
);
