__d(
  "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
  [
    "AdsUEditorAdgroupTransformationsGKSelector",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsMusicStickyOptInSingleImageLOSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelectorUtils",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.map(function (e) {
        var n = !0,
          o = !0,
          a = "default_for_account",
          l = "default_for_account";
        if (e != null) {
          var s = e.get("single_image"),
            u = e.get("carousel");
          (s != null && t && ((n = s), (a = "sticky")),
            u != null && t && ((o = u), (l = "sticky")));
        }
        return r("LoadObject").withValue(
          {
            singleImage: { shouldOptIn: n, optInSource: a },
            carousel: { shouldOptIn: o, optInSource: l },
          },
          { creatorModuleID: i.id },
        );
      });
    }
    function s(e, t) {
      return t().mapValue(function (t) {
        return e.shouldOptIn !== !1 || !t
          ? e
          : e.optInSource === "default_for_account"
            ? { shouldOptIn: !0, optInSource: "default_for_account" }
            : e;
      });
    }
    var u = r("adsCreateThunkSelector")(
      r("adsCreateSelector")(
        [
          r("adsMusicStickyOptInSingleImageLOSelector"),
          r(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByMLRecommendationSelector",
          ),
        ],
        function (t, n) {
          return o(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelectorUtils",
          ).adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefault(
            t,
            o(
              "AdsUEditorAdgroupTransformationsGKSelector",
            ).isMusicDefaultStickyOptOut(),
            n,
          );
        },
        { name: i.id },
      ),
    );
    ((l.overrideWithSalesSegmentationDefaultOn_MUSIC_ONLY_DO_NOT_USE_ELSEWHERE =
      e),
      (l.overrideWithPersonalizedRecommendation_MUSIC_ONLY_DO_NOT_USE_ELSEWHERE =
        s),
      (l.adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector =
        u));
  },
  98,
);
