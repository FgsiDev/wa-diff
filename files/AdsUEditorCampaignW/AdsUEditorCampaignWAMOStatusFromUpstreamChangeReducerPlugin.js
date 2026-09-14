__d(
  "AdsUEditorCampaignWAMOStatusFromUpstreamChangeReducerPlugin",
  [
    "AdsAPITargetFields",
    "AdsAutomatedAdSpecMutationReason",
    "AdsAutomatedAdSpecMutationUseCaseName",
    "AdsCampaignRawSpecUtils",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsTargetingAccountControlInfoSelector",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetUserAgeUnknownAction",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeActionFlux",
    "AdsValidationConsts",
    "WAMOStatusAdsManagerUtils",
    "adsAutomatedAdSpecMutation",
    "justknobx",
    "shouldShowUnknownAgeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationMap,
            shouldShowUnknownAge: r("shouldShowUnknownAgeSelector"),
            accountControlInfo: r("AdsTargetingAccountControlInfoSelector"),
          },
          function (e, t, n) {
            var a,
              i,
              l = n.accountControlInfo,
              s = n.eligibilityInformationMap,
              u = n.shouldShowUnknownAge;
            if (
              !o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus()
            )
              return e;
            var m =
                (a =
                  l == null || (i = l.audience_controls) == null
                    ? void 0
                    : i.age_min) != null
                  ? a
                  : r("AdsValidationConsts").minWAMOStatusAge,
              p = m === r("AdsValidationConsts").minWAMOStatusAge;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                r = e.getIn(["targeting", "user_age_unknown"]),
                a = o("AdsCampaignRawSpecUtils").isAutomaticPlacements(e),
                i = s.get(e.id),
                l =
                  e.saved_audience_id != null ||
                  ((n = e.saved_audience) == null ? void 0 : n.id) != null;
              return (c(a, e.id, t.hostID, i, u, r, p, l), d(a, i, e));
            });
          },
          [
            r("AdsUEditorCampaignWAMOStatusFromUpstreamChangeActionFlux")
              .actionType,
          ],
        ),
      },
      u = s;
    function c(t, n, a, l, s, u, c, d) {
      var m = t
        ? !s
        : l != null &&
          r("AdsPlacementsWhatsAppStatusPositionPlugin").getIneligibilityReason(
            l,
          ) !== null;
      m && u != null
        ? (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
              r("justknobx")._("515"),
              {
                useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
                  .ADS_CAMPAIGN_SET_USER_AGE_UNKNOWN_WAMO_CLEANUP,
                campaignIDs: [n],
                mutationFn: function () {
                  r("AdsUEditorCampaignSetUserAgeUnknownAction").dispatch(
                    { campaignIDs: [n], hostID: a, value: null },
                    {
                      line: "159",
                      module:
                        "AdsUEditorCampaignWAMOStatusFromUpstreamChangeReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                reasons: new Set([
                  r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
                ]),
              },
            );
          })
        : t &&
          s &&
          u == null &&
          c &&
          d === !1 &&
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
              r("justknobx")._("515"),
              {
                useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
                  .ADS_CAMPAIGN_SET_USER_AGE_UNKNOWN_WAMO_DEFAULT,
                campaignIDs: [n],
                mutationFn: function () {
                  r("AdsUEditorCampaignSetUserAgeUnknownAction").dispatch(
                    { campaignIDs: [n], hostID: a, value: !0 },
                    {
                      line: "190",
                      module:
                        "AdsUEditorCampaignWAMOStatusFromUpstreamChangeReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
                reasons: new Set([
                  r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
                  r("AdsAutomatedAdSpecMutationReason").PRODUCT_DEFAULTING,
                ]),
              },
            );
          });
    }
    function d(e, t, n) {
      return !e &&
        t != null &&
        o("WAMOStatusAdsManagerUtils").isWAMOStatusSelected(t) &&
        r("AdsPlacementsWhatsAppStatusPositionPlugin").getIneligibilityReason(
          t,
        ) !== null
        ? o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelected(t)
          ? o("AdsPlacementReducerUtils").resetPlacement(n, t)
          : o("AdsPlacementReducerUtils").updatePlacementSpec(
              o("AdsPlacementAPISpecWriterUtils").removeGroupAnyway(
                n,
                "whatsapp/status",
                t,
                r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                "whatsapp",
              ),
            )
        : n;
    }
    l.default = u;
  },
  98,
);
