__d(
  "adsDraftClassifyActionablePublishError",
  ["errorCode"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    function u(e) {
      var t = e[3];
      return (
        e.length === 5 &&
        e[0] === "creative" &&
        e[1] === "asset_feed_spec" &&
        e[2] === "link_urls" &&
        typeof t == "string" &&
        /^\d+$/.test(t) &&
        e[4] === "website_url"
      );
    }
    function c(t) {
      return (
        e(t, ["creative", "object_url"]) ||
        e(t, ["creative", "object_story_spec", "link_data", "link"]) ||
        e(t, ["creative", "object_story_spec", "template_data", "link"]) ||
        e(t, [
          "creative",
          "object_story_spec",
          "video_data",
          "call_to_action",
          "value",
          "link",
        ]) ||
        e(t, [
          "creative",
          "object_story_spec",
          "photo_data",
          "call_to_action",
          "value",
          "link",
        ]) ||
        e(t, ["creative", "call_to_action", "value", "link"]) ||
        e(t, [
          "creative",
          "asset_feed_spec",
          "call_to_actions",
          "0",
          "value",
          "link",
        ]) ||
        u(t)
      );
    }
    function d(t) {
      var n = t.blameFieldSpecs,
        r = t.code;
      if (n == null) return null;
      if (r === 2061015) {
        var o = n.find(c);
        return o == null ? null : { cause: "WEBSITE_URL", path: o };
      }
      if (r === 2446289) {
        var a = n.find(function (t) {
          return e(t, ["creative", "object_story_id"]);
        });
        return a == null ? null : { cause: "POST", path: a };
      }
      return null;
    }
    l.default = d;
  },
  98,
);
