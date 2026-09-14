__d(
  "AdsFacebookEventAdUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n;
      if (t) {
        var r,
          o,
          a =
            ((r = e.creative) == null ||
            (r = r.object_story_spec) == null ||
            (r = r.link_data) == null ||
            (r = r.call_to_action) == null
              ? void 0
              : r.type) ||
            ((o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.video_data) == null ||
            (o = o.call_to_action) == null
              ? void 0
              : o.type);
        return a != null && a === "BUY_TICKETS";
      }
      var i =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.call_to_action_types;
      return i == null ? !1 : i.contains("BUY_TICKETS");
    }
    i.getIsFacebookEventAd = e;
  },
  66,
);
