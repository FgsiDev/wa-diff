__d(
  "AdsUEditorCampaignGroupLVAToggleReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignGroupLVACardDefaultUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsDataAtom",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeAction",
    "AdsUEditorCampaignGroupLVAToggleActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignLiveVideoSectionUtils",
    "adsUEditorAccountSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return t ===
        o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction.OPT_IN &&
        e ===
          o("AdsUEditorCampaignLiveVideoSectionUtils").SHOPEE_BUSINESS_ACCOUNT
        ? o("AdsUEditorCampaignLiveVideoSectionUtils")
            .SHOPEE_LIVE_BUSINESS_ACCOUNT
        : t ===
              o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction.OPT_OUT &&
            e ===
              o("AdsUEditorCampaignLiveVideoSectionUtils")
                .SHOPEE_LIVE_BUSINESS_ACCOUNT
          ? o("AdsUEditorCampaignLiveVideoSectionUtils").SHOPEE_BUSINESS_ACCOUNT
          : null;
    }
    var u = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (t, n, a) {
            var l = a.account,
              u = a.isCBOEnabled;
            return o("AdsMutators").mutateEach(
              t,
              n.campaignGroupIDs,
              function (t) {
                if (r("gkx")("17126")) {
                  var a = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).collaborative_ads_partner_info.get(t),
                    c =
                      typeof (a == null ? void 0 : a.get) == "function"
                        ? a.get("merchant_partner_business_id")
                        : a == null
                          ? void 0
                          : a.merchant_partner_business_id,
                    d = s(c, n.updateAction);
                  if (d != null) {
                    var m = t.id,
                      p = n.hostID;
                    (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                      function () {
                        r(
                          "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeAction",
                        ).dispatch(
                          {
                            campaignGroupIDs: [m],
                            collaborativeAdsPartnerInfo: {
                              merchant_partner_business_id: d,
                              producer_dedicated_ad_account_id: null,
                            },
                            hostID: p,
                          },
                          {
                            line: "98",
                            module:
                              "AdsUEditorCampaignGroupLVAToggleReducerPlugin.js",
                            moduleID: i.id,
                          },
                        );
                      },
                    );
                  }
                }
                return o(
                  "AdsCampaignGroupLVACardDefaultUtils",
                ).setCampaignGroupLiveVideoDestionationWithCampaignDefault(
                  t,
                  n.liveVideoDestination,
                  u,
                  l,
                  n.hostID,
                  n.updateAction,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupLVAToggleActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
