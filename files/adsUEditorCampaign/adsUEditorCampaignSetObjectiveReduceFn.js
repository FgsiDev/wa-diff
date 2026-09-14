__d(
  "adsUEditorCampaignSetObjectiveReduceFn",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "adsConvergenceGetDefaultCampaignRecord",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a = n.account,
        i = n.campaignGroupsMap;
      return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
        var l,
          s = i.get(n),
          u = r("adsConvergenceGetDefaultCampaignRecord")(
            a,
            s,
            t.objectiveSpecificDependencies.storeTrafficData,
            t.pageID,
            t.validOptimizationSubEventsByObjective,
            t.objectiveSpecificDependencies.catalogSalesData,
            e,
          );
        return (
          (u = o("AdsMutators").chain(
            (l = r("AdsCampaignRecordAccessors")).name.set(e.name),
            l.id.set(n),
            l.campaign_id.set(e.campaign_id),
            l.status.set(e.status),
          )(u)),
          u
        );
      });
    }
    l.default = e;
  },
  98,
);
