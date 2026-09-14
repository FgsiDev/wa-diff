__d(
  "AdsMobileAppAdgroupCreativePluginCommon",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsUEditorAdgroupCreativeFormat",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.campaign,
        o = new Set(["CAROUSEL"]);
      return (
        n.optimization_goal === r("AdsAPIOptimizationGoals").VIDEO_VIEWS
          ? o.add("VIDEO")
          : (((t = n.promoted_object) != null && t.offer_id) || o.add("VIDEO"),
            o.add("IMAGE")),
        o
      );
    }
    function s() {
      return r("immutable").Set(["app_link"]);
    }
    function u(e, t) {
      var n =
          !!e && o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e.adgroup),
        a = e != null ? e : {},
        i = a.campaign;
      if (n) return new Set([r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS]);
      var l = new Set([
        r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS,
        r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE,
        r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO,
      ]);
      return (
        (i == null ? void 0 : i.optimization_goal) ===
          r("AdsAPIOptimizationGoals").APP_INSTALLS &&
          l.add(r("AdsUEditorAdgroupCreativeFormat").SCHEDULED_LIVE_VIDEO),
        l
      );
    }
    var c = {
      getSupportedMediaFormats: e,
      getSupportedCallToActiveValueFields: s,
      getSupportedCanvasCheckboxMediaFormats: u,
    };
    l.default = c;
  },
  98,
);
