__d(
  "AdsVideoConstraintsUtils",
  ["AdsInstagramMediaSpecs", "AdsVideoConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("AdsInstagramMediaSpecs")
        .MAX_STORY_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_VIDEOS;
    }
    function s() {
      return r("AdsInstagramMediaSpecs")
        .MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS;
    }
    function u() {
      return r("AdsVideoConfig.experimental")
        .instreamVideoDRLongMaxDurationInSecNew;
    }
    function c() {
      return r("AdsVideoConfig.experimental")
        .instreamVideoDRLongMaxDurationInSecToShowNew;
    }
    ((l.getMaxVideoDurationInSecForStories = e),
      (l.getMaxVideoDurationInSecForSingleVideoStream = s),
      (l.getInstreamVideoDRLongMaxDurationInSec = u),
      (l.getInstreamVideoDRLongMaxDurationInSecToShow = c));
  },
  98,
);
