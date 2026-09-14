__d(
  "AdsUEditorCampaignGroupSetLightweightSplitTestReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetLightweightSplitTestActionFlux",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = t.lightweightSplitTest;
                if (
                  e.lightweight_split_test === n ||
                  (r("isFalsey")(n) && r("isFalsey")(e.lightweight_split_test))
                )
                  return e;
                if (r("isFalsey")(n)) {
                  var o = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).lightweight_split_test.delete(e);
                  return (
                    r("isFalsey")(o.lightweight_split_test_options) ||
                      (o = r(
                        "AdsCampaignGroupRecordAccessors",
                      ).lightweight_split_test_options.delete(o)),
                    o
                  );
                } else
                  return r(
                    "AdsCampaignGroupRecordAccessors",
                  ).lightweight_split_test.set(n, e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetLightweightSplitTestActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
