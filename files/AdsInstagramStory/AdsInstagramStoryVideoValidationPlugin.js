__d(
  "AdsInstagramStoryVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramStories",
        getErrors: function (t, n, r, a, i, l, s) {
          var e = s == null ? void 0 : s.story;
          return o("AdsVideoValidationMigrationUtils").validateInstagramStory(
            t,
            n,
            l,
            e,
          );
        },
        platform: "instagram",
        position: "story",
      },
      s = e;
    l.default = s;
  },
  98,
);
