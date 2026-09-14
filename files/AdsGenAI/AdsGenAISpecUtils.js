__d(
  "AdsGenAISpecUtils",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsInterfacesLogger",
    "err",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.media_sourcing_spec;
      return (
        s(n == null ? void 0 : n.images) || s(n == null ? void 0 : n.videos)
      );
    }
    function s(e) {
      return (
        e != null &&
        Array.from(e).some(function (e) {
          return (
            (e instanceof r("immutable").Map ? e.get("source") : e.source) ===
            "gen_ai"
          );
        })
      );
    }
    function u(t) {
      return (
        e(t) ||
        o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasSpecificOrigin(
          t,
          "gen_ai",
        )
      );
    }
    function c(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.generative_asset_spec) == null
          ? void 0
          : t.videos) != null
      );
    }
    function d(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(e, "gen_ai");
    }
    function m(e, t) {
      var n,
        a = o(
          "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
        ).hasSpecificOrigin(e, "gen_ai");
      if (t != null && a) {
        var i;
        r("AdsInterfacesLogger").logOnce({
          data:
            ((i = {}),
            (i.adgroup_id = e == null ? void 0 : e.id),
            (i.event_source = t),
            i),
          eventName: "ads_gen_ai__ineligible_adopted",
        });
      }
      var l =
        (e == null || (n = e.creative) == null
          ? void 0
          : n.generative_asset_spec) != null;
      if (a && !l) {
        var s;
        r("AdsInterfacesLogger").logOnce({
          data:
            ((s = {}),
            (s.adgroup_id = e == null ? void 0 : e.id),
            (s.metadata = JSON.stringify(e == null ? void 0 : e.creative)),
            (s.stack_trace = JSON.stringify(r("err")("").stack)),
            (s.event_source = "missing_gas"),
            s),
          eventName: "ads_gen_ai__ineligible_adopted",
        });
      }
    }
    function p(e) {
      var t = [f];
      return t
        .map(function (t) {
          return t(e);
        })
        .filter(r("isTruthy"));
    }
    function _(e) {
      return e.creative_asset_groups_spec;
    }
    function f(e) {
      return !_(e) && "invalid_cags:nullish_cags";
    }
    ((l.isGenAIAds = u),
      (l.isGenAIAdsWithGeneratedVideo = c),
      (l.hasGenAICAGSpec = d),
      (l.logSpecMismatch = m),
      (l.runFlaggers = p),
      (l.hasCags = f));
  },
  98,
);
