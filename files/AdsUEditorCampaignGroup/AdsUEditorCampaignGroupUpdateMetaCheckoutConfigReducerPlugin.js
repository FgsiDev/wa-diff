__d(
  "AdsUEditorCampaignGroupUpdateMetaCheckoutConfigReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsGraphAPI",
    "AdsMutators",
    "AdsUEditorCampaignGroupMetaCheckoutExperienceActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "WebApiApplication",
    "promiseDone",
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
                if (
                  r("AdsCampaignGroupRecordAccessors").mc_experience_config !=
                    null &&
                  r("AdsCampaignGroupRecordAccessors").mc_experience_config
                    .merchant_type != null
                ) {
                  var n = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).mc_experience_config.is_campaign_enabled.set(
                    t.isCampaignEnabled,
                    e,
                  );
                  if (
                    ((n = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).mc_experience_config.is_user_manually_toggle_mc_off.set(
                      t.isUserManualToggleOff,
                      n,
                    )),
                    !o("AdsAPICampaignGroupRecordUtils").isNewCampaignGroupID(
                      e.id,
                    ))
                  ) {
                    var a,
                      l,
                      s,
                      u = o("WebApiApplication").getAccessToken();
                    r("promiseDone")(
                      o("AdsGraphAPI")
                        .get(i.id)
                        .object("campaign_group", e.id)
                        .post({
                          mc_experience_config: {
                            is_campaign_enabled: t.isCampaignEnabled,
                            is_terms_signed:
                              (a = n) == null ||
                              (a = a.mc_experience_config) == null
                                ? void 0
                                : a.get("is_terms_signed", !1),
                            is_user_manually_toggle_mc_off:
                              (l = n) == null ||
                              (l = l.mc_experience_config) == null
                                ? void 0
                                : l.get("is_user_manually_toggle_mc_off"),
                            merchant_type:
                              (s = n) == null ||
                              (s = s.mc_experience_config) == null
                                ? void 0
                                : s.get("merchant_type"),
                          },
                          access_token: u,
                        }),
                      function (e) {
                        return n;
                      },
                      function (t) {
                        return e;
                      },
                    );
                  }
                  return n;
                }
                return e;
              },
            );
          },
          r("AdsUEditorCampaignGroupMetaCheckoutExperienceActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
