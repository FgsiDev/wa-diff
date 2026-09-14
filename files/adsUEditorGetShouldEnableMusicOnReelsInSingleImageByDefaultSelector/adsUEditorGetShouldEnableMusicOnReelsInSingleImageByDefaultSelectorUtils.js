__d(
  "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelectorUtils",
  [
    "LoadObject",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
    "musicOnReelsOptOutDefaultStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o(
        "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
      )
        .overrideWithSalesSegmentationDefaultOn_MUSIC_ONLY_DO_NOT_USE_ELSEWHERE(
          e,
          t,
        )
        .mapValue(function (e) {
          var t,
            a,
            l =
              (t = o(
                "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
              )
                .overrideWithPersonalizedRecommendation_MUSIC_ONLY_DO_NOT_USE_ELSEWHERE(
                  e.singleImage,
                  n,
                )
                .getValue()) != null
                ? t
                : o("musicOnReelsOptOutDefaultStatus")
                    .MUSIC_ON_REELS_OPT_OUT_DEFAULT_STATUS.singleImage,
            s =
              (a = o(
                "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
              )
                .overrideWithPersonalizedRecommendation_MUSIC_ONLY_DO_NOT_USE_ELSEWHERE(
                  e.carousel,
                  n,
                )
                .getValue()) != null
                ? a
                : o("musicOnReelsOptOutDefaultStatus")
                    .MUSIC_ON_REELS_OPT_OUT_DEFAULT_STATUS.carousel;
          return r("LoadObject").withValue(
            { singleImage: l, carousel: s },
            { creatorModuleID: i.id },
          );
        });
    }
    l.adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefault = e;
  },
  98,
);
