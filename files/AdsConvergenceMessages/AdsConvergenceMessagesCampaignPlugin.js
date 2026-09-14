__d(
  "AdsConvergenceMessagesCampaignPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceDefaultCampaignPlugin",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "FBLogger",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceDefaultCampaignPlugin"), {
        type: "convergenceCampaign",
        key: "campaign/messages",
        pivots: { objective: r("AdsAPIObjectives").MESSAGES },
        __mergeObjectiveSpecificStaticDefaults: function (t, n) {
          return t.withMutations(function (e) {
            var t = n == null ? void 0 : n.pageID;
            return (
              !r("isFalsey")(t) &&
                r("AdsCampaignRecordAccessors").promoted_object.page_id.get(
                  e,
                ) == null &&
                (r("AdsPageStore").getLoadObject(t),
                r("AdsPageInstagramAccountStore_RELAY").get(t),
                r("FBLogger")(
                  "unified_creation",
                  "page_defaulting_in_convergence_campaign_plugin",
                ).info("Default page id: %s", t),
                r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
                  t,
                  e,
                )),
              e
            );
          });
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
