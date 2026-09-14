__d(
  "AdsUEditorReachFrequencyIsMetaMomentMakerEnabledToggleReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsReachFrequencyIsMetaMomentMakerEnabledToggleActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
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
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).is_meta_moment_maker_enabled.set(t.isEnabled, e);
              },
            );
          },
          r("AdsReachFrequencyIsMetaMomentMakerEnabledToggleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
