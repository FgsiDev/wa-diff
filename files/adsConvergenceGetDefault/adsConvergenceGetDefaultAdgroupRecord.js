__d(
  "adsConvergenceGetDefaultAdgroupRecord",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdCreationUtils",
    "AdsAdgroupCreativePluginResolver",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAudienceDirectConfig",
    "AdsConvergenceAdgroupPluginResolver",
    "AdsConvergenceAdgroupUtils",
    "AdsODAXUtils",
    "AdsOfferState",
    "CatalogVertical",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(
      e,
      t,
      n,
      a,
      i,
      l,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
    ) {
      (_ === void 0 && (_ = r("AdsAudienceDirectConfig").accountType),
        f === void 0 && (f = r("AdsOfferState").NO_OFFER),
        g === void 0 && (g = r("CatalogVertical").NONE));
      var E = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, n),
        k = o("AdsODAXUtils").maybeTranslateObjective(t, E, null),
        I = r("AdsAdgroupCreativePluginResolver").resolve({
          objective: k,
          promotedObjectType: E,
          accountType: _,
          offerStateType: f,
          catalogVertical: g,
        }),
        T = r("AdsAdgroupSpecPathPluginResolver").resolve({
          objective: k,
          promotedObjectType: E,
          accountType: _,
        }),
        D = r("AdsConvergenceAdgroupPluginResolver").resolve({
          objective: k,
          promotedObjectType: E,
        }),
        x = D.generateDefaultAdgroupSpec(
          {
            account: e,
            campaign: n,
            isAuthorizedPage: a,
            specialAdCategories: i,
            locationPage: l,
            pageID: s,
            pageDestination: m,
            catalogSalesData: p,
            getShouldEnableAutomaticFlowByDefault: h,
            getShouldEnableMusicByDefault: y,
            bizAIEligibility: L,
            contextualDiscoveryAdsEligibilityState: C,
            campaignGroupObjective: v,
            page: b,
            campaignGroupBuyingType: S,
            businessWhatsAppBusinessAccountsLoadObject: R,
          },
          I,
          T,
        );
      return (
        (x = o("AdsConvergenceAdgroupUtils").maybeSetInstagramActorID(
          T,
          x,
          u,
          c,
        )),
        (x = r("justknobx")._("499")
          ? o("AdsConvergenceAdgroupUtils").maybeSetThreadsUserID(T, x, d)
          : x),
        r("AdsAdgroupRecordAccessors").name.set(
          o("AdsAdCreationUtils").DEFAULT_ADGROUP_NAME.toString(),
          x,
        )
      );
    }
    l.default = e;
  },
  98,
);
