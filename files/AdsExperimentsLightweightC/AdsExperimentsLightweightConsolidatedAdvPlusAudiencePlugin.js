__d(
  "AdsExperimentsLightweightConsolidatedAdvPlusAudiencePlugin",
  [
    "fbt",
    "ix",
    "AdsExperiments2026QEUtils",
    "AdsExperimentsRecommendedTestsRankingUtil",
    "IPB4BImage.react",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = {
        eligibilityConfig: r("immutable").Map({}),
        getAdObjectLevel: function () {
          return "campaign";
        },
        getName: function () {
          return s._(/*BTDS*/ "Advantage+ audience");
        },
        getLoggingEntryPoint: function (t) {
          return "LightweightRecommendedTestsABTModal";
        },
        getTestRecommendationConfig: function () {
          return {
            description: s._(
              /*BTDS*/ "Learn how consolidating ad sets into a single ad set with Advantage+ turned on for audience impacts performance. Choose an eligible campaign to copy it and automatically apply those changes.",
            ),
            getUpsellContent: function () {
              return {
                label: s._(
                  /*BTDS*/ "Potential outcome of using Advantage+ audience",
                ),
                summary: s._(/*BTDS*/ "33\u0025 lower cost per result"),
                tooltipDescription: s._(
                  /*BTDS*/ "This result is based on experiments run between May 2, 2023 and June 26, 2023. The experiments compared the results of ad sets delivered using Advantage+ audience versus the original audience for 16 advertisers. Results may vary.",
                ),
              };
            },
            icon: c.jsx(r("IPB4BImage.react"), { src: u("869765") }),
            name: s._(
              /*BTDS*/ "Consolidate ad sets and turn on Advantage+ for audience",
            ),
            opportunityScore: o("AdsExperimentsRecommendedTestsRankingUtil")
              .ADVANTAGE_PLUS_AUDIENCE_TEST_OPPORTUNITY_SCORE,
          };
        },
        getUnificationName: function () {
          return s._(/*BTDS*/ "audience");
        },
        isVisibleForAdvertiser: function (t, n) {
          return o(
            "AdsExperiments2026QEUtils",
          ).getIsEligibleForMarSciTestRecommendations();
        },
        key: "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE",
        type: "lightweightABTest",
      },
      m = d;
    l.default = m;
  },
  226,
);
