__d(
  "AdsUEditorCampaignGroupMutationForLightweightBestPracticeOptionsReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetLightweightSplitTestOptionsActionFlux",
    "immutable",
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
                var n,
                  o,
                  a = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).lightweight_split_test.get(e),
                  i = r(
                    "AdsCampaignGroupRecordAccessors",
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
                return r("isFalsey")(a) || r("isFalsey")(l) || u
                  ? r("AdsCampaignGroupRecordAccessors")
                      .lightweight_split_test_options == null
                    ? e
                    : r(
                        "AdsCampaignGroupRecordAccessors",
                      ).lightweight_split_test_options.delete(e)
                  : r(
                      "AdsCampaignGroupRecordAccessors",
                    ).lightweight_split_test_options.set(
                      r("immutable").fromJS(s),
                      e,
                    );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetLightweightSplitTestOptionsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
