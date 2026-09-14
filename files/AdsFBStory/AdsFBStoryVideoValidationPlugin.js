__d(
  "AdsFBStoryVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "fbStories",
        getErrors: function (t, n) {
          return o("AdsVideoValidationMigrationUtils").validateFBStory(t, n);
        },
        platform: "facebook",
        position: "story",
      },
      s = e;
    l.default = s;
  },
  98,
);
