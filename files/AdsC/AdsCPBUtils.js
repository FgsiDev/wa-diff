__d(
  "AdsCPBUtils",
  ["AdsAPIObjectives", "AdsAPITargetFields", "AdsPlacementAPISpecReaderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (
        e !== r("AdsAPIObjectives").VIDEO_VIEWS &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          ((n = {}), (n[r("AdsAPITargetFields").PUBLISHER_PLATFORMS] = t), n),
          "audience_network",
        )
      );
    }
    function s(t, n) {
      var r,
        o,
        a = t.objective,
        i =
          (r = (o = n.targeting) == null ? void 0 : o.publisher_platforms) !=
          null
            ? r
            : [];
      return e(a, i);
    }
    l.isCPBCampaign = s;
  },
  98,
);
