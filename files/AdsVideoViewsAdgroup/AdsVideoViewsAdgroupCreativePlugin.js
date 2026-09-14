__d(
  "AdsVideoViewsAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsInstagramApplicabilityUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e) return !1;
      var t = o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e.toJS()),
        n = r(
          "AdsInstagramApplicabilityUtils",
        ).placementSpecHasInstagramStoryPlacementOnly(t),
        a =
          e.optimization_goal ===
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS;
      return n && !a;
    }
    var s = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "video-views",
        pivots: { objective: r("AdsAPIObjectives").VIDEO_VIEWS },
        getSupportedMediaFormats: function (n) {
          var t = n.campaign;
          return e(t) ? new Set(["CAROUSEL", "VIDEO"]) : new Set(["VIDEO"]);
        },
        getVideoLPPFormat: function (t) {
          var e;
          return r("isTruthy")(
            (e = t.adgroup.creative) == null ||
              (e = e.object_story_spec) == null ||
              (e = e.video_data) == null ||
              (e = e.call_to_action) == null ||
              (e = e.value) == null
              ? void 0
              : e.link,
          )
            ? "VIDEO_LPP"
            : null;
        },
        getSupportedCanvasCheckboxMediaFormats: function () {
          return new Set([r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO]);
        },
        allowUsingExistingPost: function () {
          return !0;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
