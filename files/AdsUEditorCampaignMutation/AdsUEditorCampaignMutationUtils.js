__d(
  "AdsUEditorCampaignMutationUtils",
  ["AdsCampaignRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return r("AdsCampaignRecordAccessors").name.set(n, e);
      });
    }
    l.setNameForEach = e;
  },
  98,
);
