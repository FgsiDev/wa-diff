__d(
  "AdsUEditorCampaignRevertStudyAffectingChangesReducerPlugin",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignRevertStudyAffectingChangesActionFlux",
    "DateTime",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var i,
                  l =
                    (i = t.changedFieldsByCampaignIDMap.get(n)) != null
                      ? i
                      : [];
                return o("AdsMutators").chain.apply(
                  o("AdsMutators"),
                  l.map(function (e) {
                    return e === "start_time" &&
                      r("AdsCampaignDraftFragmentStore").isNew(n)
                      ? r("AdsCampaignRecordAccessors").start_time.set(
                          r("DateTime").now(a.timezone_id).toISOString(),
                        )
                      : r("AdsCampaignRecordAccessors")[e].delete;
                  }),
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignRevertStudyAffectingChangesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
