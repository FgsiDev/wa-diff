__d(
  "AdsPreflightRecommendationPluginType",
  ["$InternalEnum", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "CREATION_FLOW_EDITOR",
        "CREATION_FLOW_INLINE_TAGGING",
        "CREATION_FLOW_PFR_HUB",
        "CREATION_FLOW_PRE_PUBLISH_PROMPT",
        "CREATION_FLOW_OPTIMAL_DEFAULTS_AWARENESS",
        "SYD_GUIDANCE_HUB",
      ]),
      c = n("$InternalEnum")({
        RECOMMENDATION: "recommendation",
        RECOMMENDATION_NEW_PRODUCT_AND_FEATURES:
          "recommendation_new_product_and_features",
        WARNING: "warning",
        ERROR: "error",
      });
    ((l.PFRPluginSurfaces = u), (l.PFRGuidanceTypes = c));
  },
  98,
);
