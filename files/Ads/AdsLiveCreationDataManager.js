__d(
  "AdsLiveCreationDataManager",
  [
    "invariant",
    "AdDraftFragmentSource",
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAdgroupCreation",
    "AdsAdgroupSpecUtils",
    "AdsBuyingTypes",
    "AdsCampaignCombinedStore",
    "AdsCampaignCreation",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupCreation",
    "AdsChildAttachmentsUtils",
    "AdsConversionPixelStore",
    "AdsCopyCopyDataAction",
    "AdsCopyDuplicateParentCreationCompletedDataAction",
    "AdsCreateCompletedAction",
    "AdsCreateCompletedFromAudienceDataAction",
    "AdsDraftFragmentUtils",
    "AdsDraftSelectionStore",
    "AdsFlatPageSetStoreKey",
    "AdsInterfacesCreationSectionMode",
    "AdsLinkPostFormat",
    "AdsLoadStateUtils_LEGACY",
    "AdsLocalAwarenessUtils",
    "AdsNewIDs",
    "AdsPENewIDs_DEPRECATED",
    "AdsPageOfferStore",
    "AdsPageStore",
    "AdsPixelListStore",
    "AdsPixelProvider",
    "AdsPlannerSkipPlanCreationInterpolate",
    "AdsProgressiveDisclosureUtils",
    "AdsReachFrequencyFlowActions",
    "AdsReachFrequencyFlowSetIsEditModeAction",
    "AdsReachFrequencyPromiseUtils",
    "AdsSpendCapUtils",
    "AdsToplineProvider",
    "AdsUserProvider",
    "ApiAdObjectTypes",
    "CurrentUser",
    "FBLogger",
    "LocationConstants",
    "Promise",
    "adsCampaignGetBudgetMode",
    "adsPageSetStoreSelectorForODS",
    "adsPromotedObjectTypeSelector_LEGACY",
    "adsStorePromiseAsyncGetForSyncStore",
    "deleteByPath",
    "isEmpty",
    "justknobx",
    "mergeDeep",
    "mergeHelpers",
    "nullthrows",
    "promiseAllByKey",
    "promiseDone",
    "promiseStoreGet",
    "setByPath",
    "trimObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.createAd = function (t, o, a, i, l) {
            var e = this,
              c = "",
              d = "";
            r("promiseDone")(
              this.$1(o, a, [i])
                .then(function (e) {
                  return (
                    (d = e.campaign),
                    (u || (u = n("Promise"))).all(e.ad_set)
                  );
                })
                .then(function (r) {
                  return (
                    r.length === 1 || s(0, 3904),
                    (c = r[0]),
                    (u || (u = n("Promise"))).all(
                      t.map(function (t) {
                        return e.__createAd(t, o, d, c, l);
                      }),
                    )
                  );
                }),
              function (t) {
                return e.$2(d, c, a, i, t, o);
              },
            );
          }),
          (a.$2 = function (t, o, a, i, l, s) {
            var e = this;
            return (u || (u = n("Promise"))).resolve().then(
              function () {
                return e.$3(
                  s.source || r("AdDraftFragmentSource").CLICK_AD_CREATE,
                  !!s.createdInCF,
                  { campaignGroupData: a, campaignGroupID: t },
                  { campaignData: i, campaignID: o },
                  l,
                );
              },
              function (e) {
                r("FBLogger")("ads").mustfix("Error during ad creation");
              },
            );
          }),
          (a.createCampaign = function (t, a, l) {
            var e = this,
              c = "";
            r("promiseDone")(
              this.$1(t, a, [l]).then(function (e) {
                return (
                  (c = e.campaign),
                  (u || (u = n("Promise"))).all(e.ad_set)
                );
              }),
              function (n) {
                n.length === 1 || s(0, 3905);
                var u = n[0];
                (a.buyingType === r("AdsBuyingTypes").RESERVED &&
                  (o("AdsReachFrequencyFlowActions").initNew(
                    t.account,
                    c,
                    u,
                    a.objective,
                    null,
                    r("AdsPlannerSkipPlanCreationInterpolate"),
                    !1,
                    a.is_reels_trending_ads_enabled,
                    a.is_meta_moment_maker_enabled,
                  ),
                  r("AdsReachFrequencyFlowSetIsEditModeAction").dispatch(
                    { ids: [u], isEditMode: !t.createdInCF },
                    {
                      line: "258",
                      module: "AdsLiveCreationDataManager.js",
                      moduleID: i.id,
                    },
                  )),
                  e.$3(
                    t.source ||
                      r("AdDraftFragmentSource").CLICK_CAMPAIGN_CREATE,
                    !!t.createdInCF,
                    { campaignGroupData: a, campaignGroupID: c },
                    { campaignData: l, campaignID: u },
                  ));
              },
              function (e) {
                return r("FBLogger")("ads").mustfix(
                  "Error during campaign creation",
                );
              },
            );
          }),
          (a.duplicateAdgroups = function (t, o, a, l, s, c) {
            var e = this,
              d = "";
            r("promiseDone")(
              this.$1(t, o, a).then(function (e) {
                return (
                  (d = e.campaign),
                  (u || (u = n("Promise"))).all(e.ad_set)
                );
              }),
              function (n) {
                return (
                  r(
                    "AdsCopyDuplicateParentCreationCompletedDataAction",
                  ).dispatch(
                    {
                      campaignGroupID: o.mode === "NEW" ? d : null,
                      campaignsData: a,
                      creationSource: r("AdDraftFragmentSource")
                        .CLICK_AD_DUPLICATE,
                    },
                    {
                      line: "300",
                      module: "AdsLiveCreationDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                  e.__duplicateAdgroups(l, d || void 0, n, t, s, c)
                );
              },
            );
          }),
          (a.duplicateCampaign = function (t, n, o, a, l) {
            var e = this;
            r("promiseDone")(this.$4(t, n), function (s) {
              return (
                r("AdsCopyDuplicateParentCreationCompletedDataAction").dispatch(
                  {
                    campaignGroupID: n.mode === "NEW" ? s : null,
                    campaignsData: [],
                    creationSource: r("AdDraftFragmentSource")
                      .CLICK_CAMPAIGN_DUPLICATE,
                  },
                  {
                    line: "336",
                    module: "AdsLiveCreationDataManager.js",
                    moduleID: i.id,
                  },
                ),
                e.__duplicateCampaign(o, s || void 0, t, a, l)
              );
            });
          }),
          (a.$3 = function (t, n, a, l, s) {
            var e =
                a.campaignGroupData.mode ===
                r("AdsInterfacesCreationSectionMode").NEW
                  ? [a.campaignGroupID]
                  : null,
              u = l && l.campaignData.isNew ? [l.campaignID] : null,
              c = s && s.filter(o("AdsPENewIDs_DEPRECATED").isNew);
            if (l && l.campaignData.audienceIDs) {
              var d = l.campaignData.audienceIDs;
              r("AdsCreateCompletedFromAudienceDataAction").dispatch(
                { audienceIDs: d },
                {
                  line: "391",
                  module: "AdsLiveCreationDataManager.js",
                  moduleID: i.id,
                },
              );
            }
            r("AdsCreateCompletedAction").dispatch(
              {
                campaignGroupIDs: e,
                campaignIDs: u,
                adgroupIDs: c,
                creationSource: t,
                createdInCF: n,
              },
              {
                line: "396",
                module: "AdsLiveCreationDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__canUseSpendCap = function (t, n) {
            return o("AdsSpendCapUtils").canNewCampaignGroupUseSpendCap(
              n.buyingType,
              t.account.capabilities.includes("DIRECT_SALES"),
            );
          }),
          (a.$1 = function (t, n, a) {
            var e = this,
              i,
              l = this.$4(t, n),
              s = l.then(function (i) {
                var l,
                  s =
                    n.promotedObject &&
                    o("AdsLocalAwarenessUtils").isADLACampaign(
                      n.objective,
                      (l = n.promotedObject) == null ? void 0 : l.page_id,
                    ) &&
                    n.objective === r("AdsAPIObjectives").STORE_VISITS
                      ? n.promotedObject.page_id
                      : null,
                  u = [];
                return (
                  a.forEach(function (n) {
                    return u.push(e.$5(i, t, n, s));
                  }),
                  u
                );
              }),
              u = ((i = {}), (i.campaign = l), (i.ad_set = s), i);
            return r("promiseAllByKey")(u);
          }),
          (a.$4 = function (t, o) {
            if (
              (o.mode === r("AdsInterfacesCreationSectionMode").NEW ||
                o.mode === r("AdsInterfacesCreationSectionMode").SAME ||
                o.id ||
                s(0, 3906, o),
              o.mode === r("AdsInterfacesCreationSectionMode").NEW)
            )
              return this.__createCampaignGroup(t, o);
            if (o.mode === r("AdsInterfacesCreationSectionMode").EXISTING) {
              var e = o.id;
              return (e || s(0, 3907), (u || (u = n("Promise"))).resolve(e));
            } else if (o.mode === r("AdsInterfacesCreationSectionMode").SAME) {
              var a;
              return (u || (u = n("Promise"))).resolve(
                (a = o == null ? void 0 : o.id) != null ? a : "",
              );
            }
            s(0, 3908);
          }),
          (a.$5 = function (t, o, a, i) {
            var e = this;
            if (
              (a.mode === r("AdsInterfacesCreationSectionMode").NEW ||
                a.mode === r("AdsInterfacesCreationSectionMode").SAME ||
                a.id ||
                s(0, 3909, a),
              a.mode === r("AdsInterfacesCreationSectionMode").NEW)
            )
              return i
                ? this.$6(i, o).then(function (n) {
                    n || s(0, 3910);
                    var r = babelHelpers.extends({}, a);
                    return (
                      (r.promotedObject = { place_page_set_id: n }),
                      e.__createCampaign(t, o, r)
                    );
                  })
                : this.__createCampaign(t, o, a);
            if (a.mode === r("AdsInterfacesCreationSectionMode").EXISTING)
              return (
                a.id || s(0, 3911),
                (u || (u = n("Promise"))).resolve(a.id)
              );
            if (a.mode === r("AdsInterfacesCreationSectionMode").SAME)
              return (u || (u = n("Promise"))).resolve("");
            s(0, 3912);
          }),
          (a.$6 = function (t, n) {
            return r("promiseStoreGet")(
              r("adsPageSetStoreSelectorForODS").getStores(),
              function () {
                return r("adsPageSetStoreSelectorForODS")(
                  new (r("AdsFlatPageSetStoreKey"))({
                    accountID: n.accountID,
                    dlaParentPageID: t,
                  }),
                );
              },
            );
          }),
          (a.__createAd = function (t, a, i, l, s) {
            var e = this;
            if (!(i && l)) {
              var c = new Error(
                "campaignGroupID or campaignID are missing for ad draft creation",
              );
              throw (c.stack, c);
            }
            var d = r("AdsLinkPostFormat").SINGLE,
              m = r("AdsUserProvider")().get(r("CurrentUser").getAccountID());
            if (m.isDone() && m.hasValue()) {
              var p = m.getValueEnforcing();
              if (p.ads_user_settings) {
                var _ = s(p.ads_user_settings.id);
                if (_) {
                  var f = _.getValue();
                  f && (d = f.get("last_used_post_format"));
                }
              }
            }
            var g = r("promiseStoreGet")(
                r("AdsCampaignCombinedStore"),
                function () {
                  return r("AdsCampaignCombinedStore").getObject(l);
                },
              ),
              h = r("promiseStoreGet")(
                r("AdsCampaignGroupCombinedStore"),
                function () {
                  return r("AdsCampaignGroupCombinedStore").getObject(i);
                },
              );
            return r("promiseAllByKey")({
              account: r("promiseStoreGet")(
                r("AdsAccountStore"),
                r("AdsAccountStore").getSelectedAccount,
              ),
              campaign: g,
              campaignGroup: h,
              topline: a.toplineID
                ? r("adsStorePromiseAsyncGetForSyncStore")(
                    r("AdsToplineProvider").toFluxStore(),
                    function () {
                      return o(
                        "AdsLoadStateUtils_LEGACY",
                      ).fromLoadObjectTreatEmptyAsLoading(
                        r("AdsToplineProvider")().get(
                          r("nullthrows")(a.toplineID),
                        ),
                      );
                    },
                  )
                : null,
              rfPrediction: g.then(function (t) {
                return e.$7(t);
              }),
              offer: g.then(function (t) {
                var n;
                return e.$8(
                  (n = t.promoted_object) == null ? void 0 : n.offer_id,
                );
              }),
              page: (u || (u = n("Promise"))).all([g, h]).then(function (t) {
                var n,
                  r,
                  o = t[0],
                  a = t[1],
                  i =
                    ((n = o.promoted_object) == null ? void 0 : n.page_id) ||
                    ((r = a.promoted_object) == null ? void 0 : r.page_id);
                return i ? e.$9(i) : null;
              }),
              conversionPixel: this.$10(r("AdsConversionPixelStore")),
              facebookPixel: this.$10(r("AdsPixelProvider").toFluxStore()),
              facebookPixelList: r("AdsPixelListStore").getFor(a.accountID),
              promotedObjectType: g.then(function (e) {
                return r("adsPromotedObjectTypeSelector_LEGACY")(l);
              }),
            }).then(function (e) {
              var n,
                i,
                l = e.account,
                s = e.campaign,
                u = e.campaignGroup,
                c = e.offer,
                m = e.page,
                p = e.promotedObjectType,
                _ = e.rfPrediction,
                f = e.topline,
                g = t.extraData ? r("trimObject")(t.extraData) : null,
                h = d;
              g &&
                ((h = r("AdsLinkPostFormat").SINGLE),
                o("AdsChildAttachmentsUtils").isCarouselAd(g)
                  ? (h = r("AdsLinkPostFormat").MULTIPLE)
                  : o("AdsAdgroupSpecUtils").getVideoData(g) && (h = null));
              var y = o("AdsAdgroupCreation").getDefaults(
                  s,
                  u,
                  l,
                  f,
                  _,
                  h,
                  m,
                  p,
                  c,
                ),
                C = babelHelpers.extends({}, y, {
                  ad_creation_source: a.source,
                  name: t.name,
                  tempID: o("AdsNewIDs").newNegativeID(),
                }),
                b = r("mergeDeep")(
                  C,
                  g,
                  r("mergeHelpers").ArrayStrategies.Clobber,
                );
              return (
                g != null &&
                  (n = g.creative) != null &&
                  n.object_story_id &&
                  (r("deleteByPath")(
                    b,
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_ID,
                  ),
                  r("deleteByPath")(
                    b,
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
                  )),
                (g == null || (i = g.creative) == null
                  ? void 0
                  : i.object_type) === r("ApiAdObjectTypes").DOMAIN &&
                  r("deleteByPath")(
                    b,
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
                  ),
                t.objectStoryID &&
                  (r("deleteByPath")(
                    b,
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
                  ),
                  r("setByPath")(
                    b,
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
                    t.objectStoryID,
                  )),
                o("AdsDraftFragmentUtils")
                  .createFragment("ad", b, !1, a.source)
                  .then(function (e) {
                    return e.objectID;
                  })
              );
            });
          }),
          (a.$10 = function (t) {
            return r("adsStorePromiseAsyncGetForSyncStore")(
              t,
              function () {
                return t.getPixels();
              },
              function () {
                return t.isListLoaded();
              },
            );
          }),
          (a.$7 = function (t) {
            var e = t.rf_prediction_id;
            return e
              ? o("AdsReachFrequencyPromiseUtils").promisePrediction(e)
              : null;
          }),
          (a.$8 = function (t) {
            return t
              ? r("adsStorePromiseAsyncGetForSyncStore")(
                  r("AdsPageOfferStore"),
                  function () {
                    return r("AdsPageOfferStore").get(r("nullthrows")(t));
                  },
                )
              : null;
          }),
          (a.$9 = function (t) {
            return t
              ? r("adsStorePromiseAsyncGetForSyncStore")(
                  r("AdsPageStore"),
                  function () {
                    return r("AdsPageStore").getLoadObject(r("nullthrows")(t));
                  },
                )
              : null;
          }),
          (a.__createCampaignGroup = function (t, n) {
            var e = this;
            return r("promiseAllByKey")({
              accountLoadObject: r("adsStorePromiseAsyncGetForSyncStore")(
                r("AdsAccountStore").getSelectedAccount.getStores()[0],
                function () {
                  return r("AdsAccountStore").getSelectedAccount();
                },
              ),
              topline: t.toplineID
                ? r("adsStorePromiseAsyncGetForSyncStore")(
                    r("AdsToplineProvider").toFluxStore(),
                    function () {
                      return o(
                        "AdsLoadStateUtils_LEGACY",
                      ).fromLoadObjectTreatEmptyAsLoading(
                        r("AdsToplineProvider")().get(
                          r("nullthrows")(t.toplineID),
                        ),
                      );
                    },
                  )
                : null,
            }).then(function (a) {
              var i = a.accountLoadObject,
                l = a.topline,
                s = babelHelpers.extends(
                  {},
                  o("AdsCampaignGroupCreation").getDefaults(
                    i.getValueEnforcing(),
                    l,
                  ),
                  {
                    buying_type: n.buyingType,
                    campaign_group_creation_source: t.source,
                    can_use_spend_cap: e.__canUseSpendCap(t, n),
                    name: n.name,
                    objective: n.objective,
                    promoted_object: n.promotedObject || null,
                    tempID: o("AdsNewIDs").newNegativeID(),
                    bid_strategy: n.bidStrategy,
                    daily_budget: n.dailyBudget,
                    is_autobid: n.isAutobid,
                    is_average_price_pacing: n.isAveragePricePacing,
                    is_odax_campaign_group: n.isODAXCampaignGroup || null,
                    is_pca_unified: n.is_pca_unified || !1,
                    is_full_funnel: n.is_full_funnel || !1,
                    is_meta_moment_maker_enabled:
                      n.is_meta_moment_maker_enabled || !1,
                    is_reels_trending_ads_enabled:
                      n.is_reels_trending_ads_enabled || !1,
                    lifetime_budget: n.lifetimeBudget,
                    pacing_type: n.pacingType,
                  },
                ),
                u = o(
                  "AdsProgressiveDisclosureUtils",
                ).getEligibleAutomationUnifiedCampaignType(n.objective);
              return (
                r("justknobx")._("3695") &&
                  u != null &&
                  n.mode === r("AdsInterfacesCreationSectionMode").NEW &&
                  (s = babelHelpers.extends({}, s, {
                    automation_unified_campaign_type: u,
                  })),
                o("AdsDraftFragmentUtils")
                  .createFragment("campaign", s, !1, t.source)
                  .then(function (e) {
                    return e.objectID;
                  })
              );
            });
          }),
          (a.__createCampaign = function (a, i, l) {
            var t = this,
              s = r("promiseStoreGet")(
                r("AdsAccountStore"),
                r("AdsAccountStore").getSelectedAccount,
              ),
              c = r("promiseStoreGet")(
                r("AdsCampaignGroupCombinedStore"),
                function () {
                  return r("AdsCampaignGroupCombinedStore").getObject(a);
                },
              ),
              d = i.toplineID;
            return r("promiseAllByKey")({
              account: s,
              campaignGroup: c,
              topline: d
                ? r("adsStorePromiseAsyncGetForSyncStore")(
                    r("AdsToplineProvider").toFluxStore(),
                    function () {
                      return o(
                        "AdsLoadStateUtils_LEGACY",
                      ).fromLoadObjectTreatEmptyAsLoading(
                        r("AdsToplineProvider")().get(d),
                      );
                    },
                  )
                : (u || (u = n("Promise"))).resolve(null),
              page: c.then(function (e) {
                var n;
                return t.$9(
                  (l.promotedObject && l.promotedObject.page_id) ||
                    ((n = e.promoted_object) == null ? void 0 : n.page_id),
                );
              }),
              commonCreationData: (u || (u = n("Promise"))).resolve(i),
            })
              .then(function (e) {
                return r("promiseAllByKey")({
                  defaultSpec: o("AdsCampaignCreation").getDefaults(
                    e.campaignGroup,
                    e.account,
                    e.topline,
                  ),
                  campaignGroup: (u || (u = n("Promise"))).resolve(
                    e.campaignGroup,
                  ),
                  commonCreationData: u.resolve(e.commonCreationData),
                  account: e.account,
                });
              })
              .then(function (n) {
                var i,
                  s = n.campaignGroup,
                  u = n.commonCreationData,
                  c = n.defaultSpec,
                  d,
                  m = null;
                if (l.extraData) {
                  var p = babelHelpers.extends({}, l.extraData);
                  (p.start_time === 0 && (p.start_time = null),
                    p.end_time === 0 && (p.end_time = null),
                    p.daily_budget
                      ? delete c.lifetime_budget
                      : p.lifetime_budget && delete c.daily_budget,
                    (m = r("trimObject")(p)));
                }
                var _ = l.targeting ? { targeting: l.targeting } : null,
                  f = (i = c.promoted_object) != null ? i : {};
                if (
                  ((d = babelHelpers.extends(
                    {},
                    c,
                    {
                      campaign_creation_source: u.source,
                      is_dynamic_creative_optimization:
                        u.isDynamicCreativeOptimization,
                      accountID: u.accountID,
                      tempID: o("AdsNewIDs").newNegativeID(),
                      name: l.name,
                      promoted_object: babelHelpers.extends(
                        {},
                        f,
                        l.promotedObject,
                      ),
                    },
                    _,
                    m,
                  )),
                  u.destinationCampaignGroupObjective ===
                    r("AdsAPIObjectives").MESSAGES &&
                    l.destinationType &&
                    (d.destination_type = l.destinationType),
                  d.targeting.geo_locations &&
                    d.targeting.geo_locations.location_types === void 0 &&
                    (d.targeting.geo_locations.location_types =
                      o("LocationConstants").DEFAULT_LOCATION_TYPES),
                  (d = t.__updateTargetingSpecByObjective(d, a)),
                  (d = t.__maybeUseOriginalCampaignSpec(
                    d,
                    l,
                    a,
                    s,
                    u.source,
                    l.mode,
                  )),
                  (e || (e = r("isEmpty")))(d.dsa_beneficiary))
                ) {
                  var g;
                  d = babelHelpers.extends({}, d, {
                    dsa_beneficiary:
                      (g = u.dsaBeneficiary) != null ? g : void 0,
                  });
                }
                if ((e || (e = r("isEmpty")))(d.dsa_payor)) {
                  var h;
                  d = babelHelpers.extends({}, d, {
                    dsa_payor: (h = u.dsaPayor) != null ? h : void 0,
                  });
                }
                return o("AdsDraftFragmentUtils")
                  .createFragment("ad_set", d, !1, u.source)
                  .then(function (e) {
                    return e.objectID;
                  });
              });
          }),
          (a.__maybeUseOriginalCampaignSpec = function (t, n, a, i, l, s) {
            var e;
            if (
              l !== r("AdDraftFragmentSource").CLICK_AD_DUPLICATE ||
              s !== r("AdsInterfacesCreationSectionMode").NEW ||
              n.campaignSpec == null
            )
              return t;
            var u = babelHelpers.extends(
                {},
                n.campaignSpec,
                ((e = {}),
                (e.campaign_id = a),
                (e.campaign_creation_source = l),
                e),
              ),
              c = r("adsCampaignGetBudgetMode")(
                u.daily_budget,
                u.lifetime_budget,
              ),
              d = o("AdsAPICampaignGroupRecordUtils").hasBudget(i);
            return (
              c != null &&
                d &&
                (delete u.daily_budget,
                delete u.lifetime_budget,
                delete u.pacing_type,
                delete u.is_autobid),
              u.shops_ads_metadata_tags != null &&
                delete u.shops_ads_metadata_tags,
              u
            );
          }),
          (a.__updateTargetingSpecByObjective = function (t, n) {
            var e = r("AdsCampaignGroupCombinedStore").getObject(n).getValue();
            if (
              (e == null ? void 0 : e.objective) ===
              r("AdsAPIObjectives").PAGE_LIKES
            ) {
              var o = t.promoted_object.page_id;
              if (o) {
                var a,
                  i =
                    (a = r("AdsPageStore").getLoadObject(o)) == null
                      ? void 0
                      : a.getValue();
                i &&
                  (t.targeting.excluded_connections = [
                    { id: i.id, name: i.name },
                  ]);
              }
            }
            return t;
          }),
          (a.__duplicateAdgroups = function (t, n, o, a, l, s) {
            var e = r("AdsDraftSelectionStore").getOrThrow(a.accountID),
              u = {
                campaignMode: a.campaignMode,
                destinationCampaignGroupObjective:
                  a.destinationCampaignGroupObjective,
                convertToMultiAdvertiserAdsAdgroup:
                  a.convertToMultiAdvertiserAdsAdgroup,
                count: a.duplicateCount || 1,
                images: a.duplicateImages,
                isDuplicateTurnOnAdsStatus: a.isDuplicateTurnOnAdsStatus,
                shouldIncludeComment: a.shouldIncludeComment,
                duplicationCtaUpgradeOptInRecommendations:
                  a.duplicationCtaUpgradeOptInRecommendations,
                duplicationAutomatedChatUpgradeRecommendations:
                  a.duplicationAutomatedChatUpgradeRecommendations,
                dsaBeneficiary: a.dsaBeneficiary,
                dsaPayor: a.dsaPayor,
                campaignGroupID: n,
                isOptedInForCreativeTesting: a.isOptedInForCreativeTesting,
                shouldIncludeMMPlacement: a.shouldIncludeMMPlacement,
                newAdgroupName: a.newAdgroupName,
                preCacheUUID: a.preCacheUUID,
              },
              c = [];
            (o.forEach(function (n, r) {
              var o = {
                ids: t,
                accountID: a.accountID,
                draftID: e,
                newParentID: n,
                extraData: u,
                requestID: r,
              };
              c.push(o);
            }),
              r("AdsCopyCopyDataAction").dispatch(
                {
                  copyRequests: c,
                  familyLineCounts: l,
                  level: "ad",
                  source: a.copySource,
                  onCopyCompleted: s,
                },
                {
                  line: "1301",
                  module: "AdsLiveCreationDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__duplicateCampaign = function (t, n, o, a, l) {
            var e = r("AdsDraftSelectionStore").getOrThrow(o.accountID),
              s = {
                ids: t,
                accountID: o.accountID,
                draftID: e,
                newParentID: n,
                extraData: {
                  broadGeoUpsellToggle: o.broadGeoUpsellToggle,
                  campaignIDsToAddFacebookProfileFeedPlacement:
                    o.campaignIDsToAddFacebookProfileFeedPlacement,
                  campaignIDsToAddInstagramReelsPlacement:
                    o.campaignIDsToAddInstagramReelsPlacement,
                  campaignIDsToAddReelsPlacement:
                    o.campaignIDsToAddReelsPlacement,
                  campaignIDsToAddInstreamVideoPlacement:
                    o.campaignIDsToAddInstreamVideoPlacement,
                  campaignIDsToAddInstagramExploreHomePlacement:
                    o.campaignIDsToAddInstagramExploreHomePlacement,
                  campaignIDsToAddInstagramLeadGenUpsellPlacements:
                    o.campaignIDsToAddInstagramLeadGenUpsellPlacements,
                  campaignIDsToAddMessengerPlacement:
                    o.campaignIDsToAddMessengerPlacement,
                  campaignIDsToAddWhatsAppDestination:
                    o.campaignIDsToAddWhatsAppDestination,
                  campaignIDsToAddMessengerDestination:
                    o.campaignIDsToAddMessengerDestination,
                  campaignIDsToRollbackTargetingPGDIndividualSetting:
                    o.campaignIDsToRollbackTargetingPGDIndividualSetting,
                  convertToConversionLeadOptimizationGoal:
                    o.convertToConversionLeadOptimizationGoal,
                  convertToLeadGenerationOptimizationGoal:
                    o.convertToLeadGenerationOptimizationGoal,
                  convertToPurchaseOptimizationGoal:
                    o.convertToPurchaseOptimizationGoal,
                  convertToMultiAdvertiserAdsAdgroup:
                    o.convertToMultiAdvertiserAdsAdgroup,
                  count: o.duplicateCount || 1,
                  custom_event_type: o.custom_event_type,
                  dsaBeneficiary: o.dsaBeneficiary,
                  dsaPayor: o.dsaPayor,
                  regionalRegulatedCategories: o.regionalRegulatedCategories,
                  odaxMigrationData: o.odaxMigrationData,
                  phantomAdgroupIDsToRemove: o.phantomAdgroupIDsToRemove,
                  preCacheUUID: o.preCacheUUID,
                  isDuplicateTurnOnAdsStatus: o.isDuplicateTurnOnAdsStatus,
                  shouldIncludeComment: o.shouldIncludeComment,
                  shopAdsUpsell: o.shopAdsUpsell,
                  isEligibleForBAUToPGDStandardDuplication:
                    o.isEligibleForBAUToPGDStandardDuplication,
                  turnOnEngagedViewAttribution: o.turnOnEngagedViewAttribution,
                  duplicationCtaUpgradeOptInRecommendations:
                    o.duplicationCtaUpgradeOptInRecommendations,
                  duplicationBudgetRecommendations:
                    o.duplicationBudgetRecommendations,
                  duplicationAutomatedChatUpgradeRecommendations:
                    o.duplicationAutomatedChatUpgradeRecommendations,
                  campaignGroupID: n,
                  duplicationDCOptimizationUpgradeRecommendations:
                    o.duplicationDCOptimizationUpgradeRecommendations,
                  campaignIDsToTurnOnAdvantageAudienceTargetingAutomation:
                    o.campaignIDsToTurnOnAdvantageAudienceTargetingAutomation,
                  campaignIDsToTurnOnAdvantagePlacements:
                    o.campaignIDsToTurnOnAdvantagePlacements,
                  advantagePlusCreativeCatalogDuplicationEligibleAdgroup:
                    o.advantagePlusCreativeCatalogDuplicationEligibleAdgroup,
                  shouldIncludeMMPlacement: o.shouldIncludeMMPlacement,
                },
                requestID: 0,
              };
            r("AdsCopyCopyDataAction").dispatch(
              {
                copyRequests: [s],
                familyLineCounts: a,
                level: "ad_set",
                onCopyCompleted: l,
                source: o.copySource,
              },
              {
                line: "1395",
                module: "AdsLiveCreationDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(),
      d = new c();
    l.default = d;
  },
  98,
);
