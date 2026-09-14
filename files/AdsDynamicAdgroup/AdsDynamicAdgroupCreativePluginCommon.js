__d(
  "AdsDynamicAdgroupCreativePluginCommon",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.adgroup,
        o =
          n == null ||
          (t = n.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.offer_id;
      return r("isTruthy")(o)
        ? new Set(["CAROUSEL"])
        : new Set(["CAROUSEL", "IMAGE"]);
    }
    var s = { getSupportedMediaFormats: e },
      u = s;
    l.default = u;
  },
  98,
);
