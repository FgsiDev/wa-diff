__d(
  "AdsOnsiteCRMSingleEventOptimizationUtil_leadGenQualityDataSourceConfig.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsOnsiteCRMSingleEventOptimizationUtil_leadGenQualityDataSourceConfig",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "LeadGenQualityDataSourceConfig",
          kind: "LinkedField",
          name: "lead_gen_quality_data_source_config",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "funnel_config_update_surface",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "RecommendedLeadGenFunnel",
              kind: "LinkedField",
              name: "recommended_lead_gen_funnel_config",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "funnel_stages",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdsPixel",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
