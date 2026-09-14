__d(
  "AdsVideoBundleTestSeedMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        video_filtering: r("AdsAdgroupRecordAccessors").creative
          .degrees_of_freedom_spec.creative_features_spec.video_filtering,
        video_uncrop: r("AdsAdgroupRecordAccessors").creative
          .degrees_of_freedom_spec.creative_features_spec.video_uncrop,
        video_auto_crop: r("AdsAdgroupRecordAccessors").creative
          .degrees_of_freedom_spec.creative_features_spec.video_auto_crop,
      },
      s = { DEFAULT: "DEFAULT", MANUAL: "MANUAL", REFRESH: "REFRESH" },
      u = "video_filtering";
    function c(t) {
      if (!r("gkx")("20098")) return t;
      var n =
        typeof window != "undefined"
          ? new URLSearchParams(window.location.search).get("cfp_seed")
          : null;
      if (n == null) return t;
      var a = n.split(":"),
        i = a[0],
        l = a[1],
        c = e[i],
        d = s[l];
      return c == null || d == null || (d === "REFRESH" && i !== u)
        ? t
        : o("AdsMutators").chain(
            c.enroll_status.set("OPT_OUT"),
            c.action_metadata.type.set(d),
          )(t);
    }
    l.default = c;
  },
  98,
);
