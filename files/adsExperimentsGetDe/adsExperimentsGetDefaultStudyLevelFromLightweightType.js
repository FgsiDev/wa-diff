__d(
  "adsExperimentsGetDefaultStudyLevelFromLightweightType",
  ["AdsExperimentsLightweightABPluginGatingUtil", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e === "CREATIVE_MULTICELL_TESTING") return "ad_set";
      var t = r("AdsExperimentsLightweightABPluginGatingUtil")(),
        n = t == null ? void 0 : t.getByMixed(e);
      if (n != null)
        switch (n.getAdObjectLevel()) {
          case "campaign":
            return "campaign";
          case "ad_set":
          case "ad":
            return "ad_set";
        }
      return (
        t != null &&
          r("FBLogger")("ads_experiments").mustfix(
            "Unhandled lightweight type in getDefaultStudyLevel: %s",
            String(e),
          ),
        "ad_set"
      );
    }
    l.default = e;
  },
  98,
);
