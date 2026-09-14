__d(
  "adsExperimentsGetLightweightStudyLevelAdObjectID",
  [
    "AdsExperimentsBudgetUtils",
    "FBLogger",
    "adsExperimentsGetLightweightABTestingPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsExperimentsGetLightweightABTestingPlugin")(t);
      if (n != null)
        return t === "VALUE_OPTIMIZATION_GOAL"
          ? o("AdsExperimentsBudgetUtils").isCBOEnabled(
              e.campaignGroupDurationRelatedParams,
            )
            ? e.campaignGroupID
            : e.id
          : n.getAdObjectLevel() === "campaign" ||
              n.getAdObjectLevel() === "ad_set"
            ? e.id
            : e.campaignID;
      switch (t) {
        case "ADVANTAGE_PLUS_CREATIVE":
        case "STANDARD_ENHANCEMENT":
        case "DYNAMIC_ADS":
        case "CREATIVE_MULTICELL_TESTING":
          return e.campaignID;
        case "ADVANTAGE_PLUS_AUDIENCE":
        case "AUTOMATIC_PLACEMENT":
          return e.id;
        case "GUIDANCE_DUPLICATION":
        case "ADVANTAGE_SHOPPING_CAMPAIGN":
          return e.id;
        case "CREATIVE_PRIMARY_TEXT_GEN":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test text gen only uses plugin system",
          );
        case "CREATIVE_IMAGE_GEN":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test image gen only uses plugin system",
          );
        case "ADVANTAGE_PLUS_CREATIVE_ENHANCEMENTS":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test creative enhancements only uses plugin system",
          );
        case "GUIDANCE_MFR":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test guidance mfr only uses plugin system",
          );
        case "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test consolidated advantage+ audience only uses plugin system",
          );
        case "L2_DUPLICATION_UPGRADE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test L2 duplication upgrade only uses plugin system",
          );
        case "L3_DUPLICATION_UPGRADE":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test L3 duplication upgrade only uses plugin system",
          );
        case "VALUE_OPTIMIZATION_GOAL":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test value optimization goal only uses plugin system",
          );
        case "LEAD_GEN_FORM":
          throw r("FBLogger")("ads_experiments").mustfixThrow(
            "lightweight test lead gen form only uses plugin system",
          );
      }
    }
    l.default = e;
  },
  98,
);
