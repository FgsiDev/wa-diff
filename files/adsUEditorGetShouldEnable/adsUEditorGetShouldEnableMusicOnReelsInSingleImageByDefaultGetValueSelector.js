__d(
  "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
  [
    "adsCreateSelector",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
    "musicOnReelsOptOutDefaultStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o(
            "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector",
          ).adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultSelector,
        ],
        function (t) {
          return function () {
            var e,
              n = t();
            return (e = n.getValue()) != null
              ? e
              : o("musicOnReelsOptOutDefaultStatus")
                  .MUSIC_ON_REELS_OPT_OUT_DEFAULT_STATUS;
          };
        },
        {
          name:
            i.id +
            ".adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
