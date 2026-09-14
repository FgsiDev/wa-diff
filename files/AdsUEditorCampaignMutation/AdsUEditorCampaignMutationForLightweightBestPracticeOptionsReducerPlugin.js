__d(
  "AdsUEditorCampaignMutationForLightweightBestPracticeOptionsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetLightweightSplitTestOptionsActionFlux",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                o,
                a = r("AdsCampaignRecordAccessors").lightweight_split_test.get(
                  e,
                ),
                i = r(
                  "AdsCampaignRecordAccessors",
                ).lightweight_split_test_options.get(e),
                l = t.lightweightSplitTestOptions,
                s =
                  (n =
                    i == null || (o = i.merge(l)) == null
                      ? void 0
                      : o.toJS()) != null
                    ? n
                    : l,
                u =
                  Object.values(babelHelpers.extends({}, s)).filter(Boolean)
                    .length === 0;
              return r("isFalsey")(a) ||
                r("isFalsey")(l) ||
                u ||
                a === "CREATIVE_MULTICELL_TESTING"
                ? r("AdsCampaignRecordAccessors")
                    .lightweight_split_test_options == null
                  ? e
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).lightweight_split_test_options.delete(e)
                : r(
                    "AdsCampaignRecordAccessors",
                  ).lightweight_split_test_options.set(
                    r("immutable").fromJS(s),
                    e,
                  );
            });
          },
          o("AdsUEditorCampaignSetLightweightSplitTestOptionsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
