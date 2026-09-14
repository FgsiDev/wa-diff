__d(
  "AdsInsightsCreativeGenerationInsightsUtils",
  ["fbt", "gkx", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = function () {
        var e;
        return r("gkx")("17257")
          ? !0
          : (e = r("qex")._("1837")) != null
            ? e
            : !1;
      },
      d = s._(/*BTDS*/ "Related recommendation"),
      m = s._(/*BTDS*/ "See inspiration"),
      p = s._(/*BTDS*/ "Learn more"),
      _ = s._(/*BTDS*/ "Update ad imagery"),
      f = s._(/*BTDS*/ "Upload new media"),
      g = s._(/*BTDS*/ "Upload new media for this ad set for better results"),
      h = function (t) {
        return t != null ? Math.abs(Math.round(t * 100)) : null;
      },
      y = s._(/*BTDS*/ "in reach"),
      C = s._(
        /*BTDS*/ "Add new and diverse creative to better engage audiences and drive strong performance.",
      ),
      b = s._(/*BTDS*/ "Your creative diversity is low"),
      v = s._(/*BTDS*/ "Low creative diversity"),
      S = s._(/*BTDS*/ "Average daily reach"),
      R = s._(
        /*BTDS*/ "Add new and diverse creative to better engage audiences and boost performance.",
      ),
      L = s._(
        /*BTDS*/ "Choose up to 10 media to improve diversity and we'll crop them for your selected placements. You can also upload multiple aspect ratio variations of the same creative and we'll show them in the appropriate placements.",
      ),
      E = s._(
        /*BTDS*/ "Choose new media to improve diversity and reduce creative fatigue. You can also upload multiple aspect ratio variations of the same creative and we'll show them in the appropriate placements.",
      ),
      k = s._(
        /*BTDS*/ "Ads with more media often perform better. Related media adds assets from your active campaigns that match this ad's message to boost creative diversity.",
      ),
      I = s._(
        /*BTDS*/ "Crops from each media's original ad are applied automatically and performance can be viewed as a Breakdown under Creative after publishing.",
      ),
      T =
        ((u = {}),
        (u.creative_diversity_label =
          ((e = {}),
          (e.creative_diversity_label = { title: b, description: C }),
          (e.reach = { title: b, description: R }),
          e)),
        u),
      D = function (t) {
        return v;
      },
      x = function (t, n) {
        return t.find(function (e) {
          var t;
          return (
            e.recommendation_type === "gen_ai_mvp" &&
            (e == null ||
            (t = e.campaigns_ids) == null ||
            (t = t.nodes) == null ||
            (t = t.map(function (e) {
              return e == null ? void 0 : e.id;
            })) == null
              ? void 0
              : t.includes(n))
          );
        });
      };
    ((l.isCreativeDiversityExperimentEnabled = c),
      (l.RELATED_RECOMMENDATION_FBT = d),
      (l.SEE_INSPIRATION_FBT = m),
      (l.LEARN_MORE_FBT = p),
      (l.UPDATE_AD_IMAGERY_FBT = _),
      (l.UPLOAD_NEW_MEDIA_FBT = f),
      (l.UPLOAD_NEW_MEDIA_FOR_BETTER_RESULTS_FBT = g),
      (l.getCreativeDiversityReachDecreasePercentage = h),
      (l.CREATIVE_DIVERSITY_IN_REACH_FBT = y),
      (l.AVERAGE_DAILY_REACH_FBT = S),
      (l.UPLOAD_MEDIA_MULTI_MEDIA_DESCRIPTION_FBT = L),
      (l.UPLOAD_MEDIA_SINGLE_MEDIA_DESCRIPTION_FBT = E),
      (l.RELATED_MEDIA_DESCRIPTION_FBT = k),
      (l.RELATED_MEDIA_CROPS_INFO_FBT = I),
      (l.CreativeGenerationPopoverContentMap = T),
      (l.getRelatedMediaHeader = D),
      (l.getGenAIRecommendation = x));
  },
  226,
);
