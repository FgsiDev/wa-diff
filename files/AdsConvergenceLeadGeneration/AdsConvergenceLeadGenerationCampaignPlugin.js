__d(
  "AdsConvergenceLeadGenerationCampaignPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceDefaultCampaignPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceDefaultCampaignPlugin"), {
        type: "convergenceCampaign",
        key: "campaign/lead-generation",
        pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        __mergeObjectiveSpecificStaticDefaults: function (t, n) {
          return r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
            n == null ? void 0 : n.pageID,
            t,
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
