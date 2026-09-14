__d(
  "AdsPEDraftPublishCampaignGroupFragmentLogger",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCrepePublishingLogger",
    "AdsDraftProvider",
    "AdsLoadStateUtils_LEGACY",
    "AdsPECampaignGroupSelectors",
    "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
    "AdsPEUploadStore",
    "AdsSmartPromotionTypeUtils",
    "adsDraftGetErrorsByIDFromFragmentStatusData",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, l) {
      var e,
        s = l != null ? l : null,
        u =
          (e = r("AdsPEUploadStore").getState().recommendationData) == null
            ? void 0
            : e.resolutionSubtype;
      return (
        t.forEach(function (e) {
          var t,
            l,
            c,
            d = e.ad_object_id,
            m = e.source,
            p = r("AdsCampaignGroupDraftFragmentStore").isNew(d),
            _ = o(
              "AdsPELoggerLogDraftPublishWillCompleteStoreUtils",
            ).getDeliveryStatus(d, p, "campaign"),
            f = n.draftID,
            g = o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
              r("AdsDraftProvider")().get(f),
            ),
            h = g.account_id,
            y = r("getByPath")(
              n,
              ["response", "fragment_statuses", "data"],
              [],
            ),
            C = r("adsDraftGetErrorsByIDFromFragmentStatusData")(y),
            b = !C.has(d),
            v = e.ad_creation_package_config;
          v != null &&
            (s = o("AdsCrepePublishingLogger").updatePackagePublishStats(
              s,
              v.id,
              "campaign",
              d,
              m,
              p,
              b,
            ));
          var S =
              (t = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  d,
                  { is_skadnetwork_attribution: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : t.is_skadnetwork_attribution,
            R =
              (l = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  d,
                  { smart_promotion_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : l.smart_promotion_type,
            L = r("AdsSmartPromotionTypeUtils")(R),
            E =
              (c = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(d, { bid_strategy: null }, i.id)
                .getValue()) == null
                ? void 0
                : c.bid_strategy;
          if (b) {
            var k = o("AdsPECampaignGroupSelectors")
              .getCachedByFieldsSelector()(
                d,
                {
                  name: null,
                  objective: null,
                  daily_budget: null,
                  lifetime_budget: null,
                  ad_creation_package_config: null,
                  bid_strategy: null,
                  source_recommendation_type: null,
                },
                i.id,
              )
              .getValue();
            if (p) {
              var I,
                T = k == null ? void 0 : k.objective;
              o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                "campaign_group_create_succeed",
                babelHelpers.extends(
                  {
                    action_session_id: r("AdsPEUploadStore").getSessionID(),
                    ad_account_id_explicit: h,
                    campaign_group_id: d,
                    event_source: r("AdsPEUploadStore").getPreviewSource(),
                    fragment_id: e.id,
                    immediate: a,
                    is_campaign_group_budget:
                      !!(k != null && k.daily_budget) ||
                      !!(k != null && k.lifetime_budget),
                    object_creation_source: m,
                    objective: T,
                  },
                  _,
                  {
                    smart_promotion_type: L,
                    is_skadnetwork_attribution: S,
                    solution_ids: [
                      k == null || (I = k.ad_creation_package_config) == null
                        ? void 0
                        : I.id,
                    ],
                    campaign_bid_strategy: E,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends(
                        {},
                        u != null ? { resolution_type: u } : {},
                      ),
                    ),
                  },
                ),
                "campaigngroup_create",
              );
            } else {
              var D;
              o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                "campaign_group_edit_succeed",
                babelHelpers.extends(
                  {
                    action_session_id: r("AdsPEUploadStore").getSessionID(),
                    ad_account_id_explicit: h,
                    campaign_group_id: d,
                    event_source: r("AdsPEUploadStore").getPreviewSource(),
                    fragment_id: e.id,
                    object_creation_source: m,
                  },
                  _,
                  {
                    smart_promotion_type: L,
                    solution_ids: [
                      k == null || (D = k.ad_creation_package_config) == null
                        ? void 0
                        : D.id,
                    ],
                    campaign_bid_strategy: E,
                    subsequent_data: JSON.stringify(
                      babelHelpers.extends(
                        {},
                        u != null ? { resolution_type: u } : {},
                      ),
                    ),
                  },
                ),
                "campaigngroup_edit",
              );
            }
          } else {
            var x = C.get(d);
            p
              ? o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_group_create_fail",
                  babelHelpers.extends(
                    {
                      action_session_id: r("AdsPEUploadStore").getSessionID(),
                      ad_account_id_explicit: h,
                      campaign_group_id: d,
                      error_sub_code: x == null ? void 0 : x.errorSubCode,
                      error_message: x == null ? void 0 : x.errorMessage,
                      event_source: r("AdsPEUploadStore").getPreviewSource(),
                      fragment_id: e.id,
                      immediate: a,
                      object_creation_source: m,
                    },
                    _,
                    {
                      smart_promotion_type: L,
                      campaign_bid_strategy: E,
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {},
                          u != null ? { resolution_type: u } : {},
                        ),
                      ),
                    },
                  ),
                  "campaigngroup_create",
                )
              : o("AdsPELoggerLogDraftPublishWillCompleteStoreUtils").log(
                  "campaign_group_edit_fail",
                  babelHelpers.extends(
                    {
                      action_session_id: r("AdsPEUploadStore").getSessionID(),
                      ad_account_id_explicit: h,
                      campaign_group_id: d,
                      error_sub_code: x == null ? void 0 : x.errorSubCode,
                      error_message: x == null ? void 0 : x.errorMessage,
                      event_source: r("AdsPEUploadStore").getPreviewSource(),
                      fragment_id: e.id,
                      object_creation_source: m,
                    },
                    _,
                    {
                      smart_promotion_type: L,
                      campaign_bid_strategy: E,
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {},
                          u != null ? { resolution_type: u } : {},
                        ),
                      ),
                    },
                  ),
                  "campaigngroup_edit",
                );
          }
        }),
        s
      );
    };
    l.processCampaignGroupFragments = e;
  },
  98,
);
