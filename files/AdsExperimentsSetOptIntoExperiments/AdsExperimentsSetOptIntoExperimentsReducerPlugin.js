__d(
  "AdsExperimentsSetOptIntoExperimentsReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsDataAtom",
    "AdsExperimentsSetOptIntoExperimentsActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "adsExperimentsDeleteStudyAndDispatchAdgroupSetFreeformTestAction",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return n.optIntoExperiments
              ? o("AdsMutators").mutateEach(
                  t,
                  n.campaignGroupIDs,
                  function (e) {
                    return r(
                      "AdsCampaignGroupRecordAccessors",
                    ).is_opted_into_experiments.set(n.optIntoExperiments, e);
                  },
                )
              : o("AdsMutators").mutateEach(
                  t,
                  n.campaignGroupIDs,
                  function (t) {
                    if (r("isFalsey")(n.isStudyPublished)) {
                      var o,
                        a =
                          (o = r(
                            "AdsCampaignGroupRecordAccessors",
                          ).ab_test_config.get(t)) == null
                            ? void 0
                            : o.toJS();
                      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                        function () {
                          var e, t;
                          r(
                            "adsExperimentsDeleteStudyAndDispatchAdgroupSetFreeformTestAction",
                          )(
                            a == null || (e = a.creative_multicell_test) == null
                              ? void 0
                              : e.study_id,
                            a == null || (t = a.creative_multicell_test) == null
                              ? void 0
                              : t.adgroup_ids,
                          );
                        },
                      );
                    }
                    return r("AdsCampaignGroupRecordAccessors")
                      .is_opted_into_experiments.set(null, t)
                      .delete("ab_test_config")
                      .delete("lightweight_split_test")
                      .delete("lightweight_split_test_options");
                  },
                );
          },
          o("AdsExperimentsSetOptIntoExperimentsActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
