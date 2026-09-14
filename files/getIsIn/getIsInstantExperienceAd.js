__d(
  "getIsInstantExperienceAd",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "https://fb.com/canvas_doc/";
    function l(t, n) {
      if (n) {
        var r,
          o =
            (r = t.creative) == null ||
            (r = r.object_story_spec) == null ||
            (r = r.link_data) == null
              ? void 0
              : r.link;
        return !!(o != null && o.startsWith(e));
      } else {
        var a,
          i =
            (a = t.creative) == null ||
            (a = a.asset_feed_spec) == null ||
            (a = a.link_urls) == null
              ? void 0
              : a.getIn([0, "website_url"]);
        return !!(i != null && i.startsWith(e));
      }
    }
    i.default = l;
  },
  66,
);
