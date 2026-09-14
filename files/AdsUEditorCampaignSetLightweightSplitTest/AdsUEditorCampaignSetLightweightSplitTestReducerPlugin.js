__d(
  "AdsUEditorCampaignSetLightweightSplitTestReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetLightweightSplitTestActionFlux",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.lightweightSplitTest;
              return n === e.lightweight_split_test ||
                (r("isFalsey")(n) && r("isFalsey")(e.lightweight_split_test))
                ? e
                : r("isFalsey")(n)
                  ? r("isTruthy")(e.lightweight_split_test_options)
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").lightweight_split_test
                          .delete,
                        r("AdsCampaignRecordAccessors")
                          .lightweight_split_test_options.delete,
                      )(e)
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).lightweight_split_test.delete(e)
                  : r("AdsCampaignRecordAccessors").lightweight_split_test.set(
                      n,
                      e,
                    );
            });
          },
          o("AdsUEditorCampaignSetLightweightSplitTestActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
