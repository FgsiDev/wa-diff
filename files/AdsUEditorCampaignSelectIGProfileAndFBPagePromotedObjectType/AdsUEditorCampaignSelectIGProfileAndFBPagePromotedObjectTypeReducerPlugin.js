__d(
  "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageUtils",
    "AdsPlacementReducerUtils",
    "AdsProfileVisitPageDefaultingUtils",
    "AdsProfileVisitSABRBudgetUtils",
    "AdsProfileVisitSABRCreationUtils",
    "AdsProfileVisitSABRDefaultedCampaignsProvider",
    "AdsProfileVisitSABRSetMarkerAction",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorPageSelector",
    "AdsUnifiedProfileVisitUtils",
    "adsUEditorAccountSelector",
    "cr:37662",
    "first",
    "isUPVL2InstagramPickerEnabled",
    "nullthrows",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        function (e) {
          var t = e.campaignGroup;
          return t;
        },
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupsByCampaignID: s,
            account: r("adsUEditorAccountSelector"),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            getPageInstagramAccount: r(
              "AdsPageInstagramAccountStore_RELAY",
            ).fluxGetSelector(),
            pagesMapLO: o("AdsUEditorPageSelector").pagesMapSelector,
          },
          function (t, a, l) {
            var s,
              u = a.adgroupIDs,
              c = a.adgroups,
              d = a.campaignIDs,
              m = a.hostID,
              p = a.instagramAccountLoadObject,
              _ = l.account,
              f = l.campaignGroupsByCampaignID,
              g = l.eligibilityInformation,
              h = l.getPageInstagramAccount,
              y = l.pagesMapLO,
              C = babelHelpers.extends({}, g, {
                promotedObjectType: r("AdsPromotedObjectTypes")
                  .IG_PROFILE_AND_FB_PAGE,
              }),
              b = (s = c.getValue()) != null ? s : [],
              v = r("first")(b.filter(Boolean)),
              S = o("AdsPageUtils").getPageID(v),
              R = y == null ? void 0 : y.getValue(),
              L = new Map(),
              E = r("AdsProfileVisitSABRDefaultedCampaignsProvider")(),
              k = o("AdsMutators").mutateEach(t, d, function (e, t) {
                var a = e,
                  l = r("nullthrows")(f.get(t)),
                  s = l.objective,
                  c = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.get(e),
                  g = c != null ? c : S,
                  b =
                    g != null
                      ? o(
                          "AdsProfileVisitPageDefaultingUtils",
                        ).maybeSwapToIGLinkedPage(g, y, h)
                      : g,
                  v = b != null && R != null ? R[b] : null,
                  k =
                    (v == null
                      ? void 0
                      : v.is_instagram_account_backed_page) === !0,
                  I = o(
                    "AdsUnifiedProfileVisitUtils",
                  ).getDefaultSelectedDestination(p, k),
                  T =
                    s === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
                    (o(
                      "AdsReachFrequencyGKUtils",
                    ).isAccountEligibleForProfileAndPageEngagement() ||
                      o(
                        "AdsUnifiedProfileVisitUtils",
                      ).isUPVProfileAndPageEngagementEnabledForIGLogin(_));
                a = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").promoted_object.delete,
                  r("AdsCampaignRecordAccessors").targeting.user_os.delete,
                  r("AdsCampaignRecordAccessors").targeting.user_device.delete,
                  r("AdsCampaignRecordAccessors").targeting
                    .is_whatsapp_destination_ad.delete,
                  r("AdsCampaignRecordAccessors").targeting.app_install_state
                    .delete,
                  r("AdsCampaignRecordAccessors").destination_type.set(I),
                  r("AdsCampaignRecordAccessors").optimization_goal.set(
                    T
                      ? r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT
                      : r("AdsAPIOptimizationGoals").PROFILE_VISIT,
                  ),
                  r(
                    "AdsCampaignRecordAccessors",
                  ).is_dynamic_creative_optimization.set(!1),
                  r("AdsCampaignRecordAccessors").is_dynamic_creative.set(!1),
                )(a);
                var D = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  s,
                  a,
                );
                if (
                  b != null &&
                  ((a = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_id.set(b, a)),
                  r("isUPVL2InstagramPickerEnabled")())
                ) {
                  var x = o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).convertIGIDV2FromStrongTypeToString(
                    o(
                      "AdsInstagramBrandedContentUtils",
                    ).getInstagramUserIDFromPage(b, h),
                  );
                  x != null &&
                    (a = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.instagram_actor_id.set(x, a));
                }
                (b != null &&
                  b !== g &&
                  r("setTimeout")(function () {
                    n("cr:37662").dispatch(
                      { adgroupIDs: u, campaignIDs: d, hostID: m, pageID: b },
                      {
                        line: "250",
                        module:
                          "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  }, 0),
                  (a = o(
                    "AdsUEditorCampaignMutators",
                  ).updateConversionWindowLength(a, s, D)),
                  (a = o("AdsPlacementReducerUtils").resetPlacement(a, C)));
                var $ = E.get(t);
                if (
                  a.daily_budget != null &&
                  ($ == null ? void 0 : $.userEdited) !== !0 &&
                  o(
                    "AdsProfileVisitSABRCreationUtils",
                  ).getIsProfileVisitSABREnabled(
                    _.account_id,
                    s,
                    D,
                    !0,
                    "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeReducerPlugin",
                  )
                ) {
                  var P = a.daily_budget;
                  a = o(
                    "AdsProfileVisitSABRBudgetUtils",
                  ).setDefaultBudgetForCampaign(_, a, s, D);
                  var N = a.daily_budget;
                  N != null &&
                    N !== P &&
                    !E.has(t) &&
                    L.set(t, { prior: P, sabrSet: N });
                }
                return a;
              });
            if (L.size > 0) {
              var I = Array.from(L.keys()),
                T = I.map(function (e) {
                  return r("nullthrows")(L.get(e));
                });
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  r("AdsProfileVisitSABRSetMarkerAction").dispatch(
                    { campaignIDs: I, markers: T, marked: !0 },
                    {
                      line: "325",
                      module:
                        "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            }
            return k;
          },
          r(
            "AdsUEditorCampaignSelectIGProfileAndFBPagePromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
