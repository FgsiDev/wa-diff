__d(
  "AdsUEditorCampaignGroupEnableMetaCheckoutConfigReducerPlugin",
  [
    "AdsAPICampaignGroupMCExperienceConfigRecord",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupEnableMetaCheckoutExperienceActionFlux",
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
                var n = {
                  is_campaign_enabled: t.isCampaignEnabled,
                  is_terms_signed: t.isTermsSigned,
                  is_user_manually_toggle_mc_off: !1,
                  merchant_type: t.merchantType,
                };
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).mc_experience_config.set(
                  new (r("AdsAPICampaignGroupMCExperienceConfigRecord"))(n),
                  e,
                );
              },
            );
          },
          r("AdsUEditorCampaignGroupEnableMetaCheckoutExperienceActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
