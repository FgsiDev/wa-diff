__d(
  "AdsUEditorCampaignLeadGenMessengerDefaultSpecReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementReducerUtils",
    "AdsUEditorAdgroupLeadGenFormatSwitchActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            buyingTypes: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
            objectives: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.buyingTypes,
              l = n.eligibilityInformation,
              s = n.objectives;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var u = r("AdsCampaignRecordAccessors").optimization_goal.get(
                  e,
                );
                return (e.destination_type ===
                  r("AdCampaignDestination").PHONE_CALL &&
                  t.changingPage === !0) ||
                  (e.destination_type === r("AdCampaignDestination").ON_AD &&
                    u === r("AdsAPIOptimizationGoals").QUALITY_LEAD &&
                    t.changingPage === !0)
                  ? e
                  : o("AdsMutators").chain(
                      t.campaignDestination ===
                        r("AdCampaignDestination").MESSENGER
                        ? r("AdsCampaignRecordAccessors").destination_type.set(
                            r("AdCampaignDestination").MESSENGER,
                          )
                        : e.destination_type ===
                            r("AdCampaignDestination").ON_AD
                          ? r(
                              "AdsCampaignRecordAccessors",
                            ).destination_type.set(
                              r("AdCampaignDestination").ON_AD,
                            )
                          : t.campaignDestination ===
                              r("AdCampaignDestination").LEAD_FORM_MESSENGER
                            ? r(
                                "AdsCampaignRecordAccessors",
                              ).destination_type.set(
                                r("AdCampaignDestination").LEAD_FORM_MESSENGER,
                              )
                            : t.campaignDestination ===
                                r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
                              ? r(
                                  "AdsCampaignRecordAccessors",
                                ).destination_type.set(
                                  r("AdCampaignDestination")
                                    .LEAD_FROM_IG_DIRECT,
                                )
                              : r("AdsCampaignRecordAccessors").destination_type
                                  .delete,
                      function (e) {
                        return t.campaignDestination !==
                          r("AdCampaignDestination").PHONE_CALL
                          ? r(
                              "AdsCampaignRecordAccessors",
                            ).optimization_goal.set(
                              r("AdsAPIOptimizationGoals").LEAD_GENERATION,
                            )(e)
                          : e;
                      },
                      function (e) {
                        var t = o(
                          "AdsPlacementAPISpecReaderUtils",
                        ).isDefaultPlacements(l);
                        if (t) {
                          var u, c;
                          return o("AdsPlacementReducerUtils").resetPlacement(
                            e,
                            {
                              objective: s.get(n),
                              buyingType: i.get(n),
                              capabilities: a.capabilities,
                              promotedObjectType: o(
                                "AdsAPICampaignRecordUtils",
                              ).getPromotedObjectType(s.get(n), e),
                              objectStoreURL:
                                (u = e.promoted_object) == null
                                  ? void 0
                                  : u.object_store_url,
                              containsOffer: !!(
                                (c = e.promoted_object) != null && c.offer_id
                              ),
                              targetingDirectInstallDevices:
                                !!e.targeting.direct_install_devices,
                              spec: {},
                            },
                          );
                        } else {
                          var d,
                            m,
                            p,
                            _,
                            f,
                            g,
                            h = {
                              objective: s.get(n),
                              buyingType: i.get(n),
                              capabilities: a.capabilities,
                              promotedObjectType: o(
                                "AdsAPICampaignRecordUtils",
                              ).getPromotedObjectType(s.get(n), e),
                              objectStoreURL:
                                (d = e.promoted_object) == null
                                  ? void 0
                                  : d.object_store_url,
                              containsOffer: !!(
                                (m = e.promoted_object) != null && m.offer_id
                              ),
                              targetingDirectInstallDevices:
                                !!e.targeting.direct_install_devices,
                              spec: {},
                            },
                            y =
                              (p = e.targeting) == null
                                ? void 0
                                : p.publisher_platforms,
                            C =
                              (_ = e.targeting) == null
                                ? void 0
                                : _.facebook_positions,
                            b =
                              (f = e.targeting) == null
                                ? void 0
                                : f.messenger_positions,
                            v = o(
                              "AdsPlacementAPISpecDefaultsUtils",
                            ).getPositionsForPlatform("facebook", h),
                            S = o(
                              "AdsPlacementAPISpecDefaultsUtils",
                            ).getPositionsForPlatform("messenger", h),
                            R =
                              C == null
                                ? void 0
                                : C.filter(function (e) {
                                    return v == null ? void 0 : v.has(e);
                                  }),
                            L =
                              b == null
                                ? void 0
                                : b.filter(function (e) {
                                    return S == null ? void 0 : S.has(e);
                                  }),
                            E = e;
                          if ((R == null ? void 0 : R.size) !== 0)
                            E = r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.facebook_positions.set(R, E);
                          else {
                            var k;
                            E = o("AdsMutators").chain(
                              r(
                                "AdsCampaignRecordAccessors",
                              ).targeting.publisher_platforms.set(
                                (k = y) == null
                                  ? void 0
                                  : k.filter(function (e) {
                                      return e !== "facebook";
                                    }),
                              ),
                              r("AdsCampaignRecordAccessors").targeting
                                .facebook_positions.delete,
                            )(E);
                          }
                          if (
                            ((y =
                              (g = E.targeting) == null
                                ? void 0
                                : g.publisher_platforms),
                            (L == null ? void 0 : L.size) !== 0)
                          )
                            E = r(
                              "AdsCampaignRecordAccessors",
                            ).targeting.messenger_positions.set(L, E);
                          else {
                            var I;
                            E = o("AdsMutators").chain(
                              r(
                                "AdsCampaignRecordAccessors",
                              ).targeting.publisher_platforms.set(
                                (I = y) == null
                                  ? void 0
                                  : I.filter(function (e) {
                                      return e !== "messenger";
                                    }),
                              ),
                              r("AdsCampaignRecordAccessors").targeting
                                .messenger_positions.delete,
                            )(E);
                          }
                          return E;
                        }
                      },
                    )(e);
              },
            );
          },
          [o("AdsUEditorAdgroupLeadGenFormatSwitchActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
