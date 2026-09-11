__d(
  "CometUFICommentActionLinkLoggingUtils",
  ["FBFeedLocations", "getJSEnumSafe", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
      "CometUfiCommentActionLinksFalcoEvent",
    ).__setRef("CometUFICommentActionLinkLoggingUtils");
    function s(t) {
      var n = t.actionLinkType,
        o = t.feedLocation;
      e.onReady(function (e) {
        e.log(function () {
          return {
            action_link_type: n,
            event_type: "CLICK",
            feed_location: r("getJSEnumSafe")(r("FBFeedLocations"), o),
          };
        });
      });
    }
    function u(t) {
      var n = t.actionLinkType,
        o = t.feedLocation;
      e.onReady(function (e) {
        e.log(function () {
          return {
            action_link_type: n,
            event_type: "HOVER",
            feed_location: r("getJSEnumSafe")(r("FBFeedLocations"), o),
          };
        });
      });
    }
    ((l.logCommentActionLinkClick = s), (l.logCommentActionLinkHover = u));
  },
  98,
);
