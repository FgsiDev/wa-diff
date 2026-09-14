__d(
  "adsAdgroupSetProductSetPromotedObjectReducerFn",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdCreationUtils",
    "AdsAdgroupRecordAccessors",
    "AdsDAAdaptImagesMutators",
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupACOMutators",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "adsACOIsEligibleForACO",
    "adsACOVerticalValidationUtils",
    "adsConvergenceGetDefaultAdgroupRecord",
    "getUserSettings",
    "gkx",
    "isEligibleForAdaptImagesDefaultOptIn",
    "isEligibleForDADynamicMediaWithParams",
    "musicOnReelsOptOutDefaultStatus",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = t.account,
        d = t.bizAIEligibility,
        m = t.campaignsMap,
        p = t.catalogSalesData,
        _ = t.mappedObjective,
        f = t.pageID,
        g = t.parentData,
        h = t.specialAdCategoriesMap,
        y = e.id,
        C =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.instagram_actor_id,
        b =
          (a = e.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.instagram_user_id,
        v =
          (i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.threads_user_id,
        S = h != null ? h.get(y) : [],
        R = m.get(y),
        L = r("nullthrows")(g.get(y)),
        E = L.campaignGroup,
        k = L.specPlugin,
        I = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          E.objective,
          R,
        ),
        T = r("adsConvergenceGetDefaultAdgroupRecord")(
          c,
          _,
          L.campaign,
          !1,
          S != null ? S : [],
          null,
          f,
          C,
          b,
          v,
          null,
          p,
          void 0,
          void 0,
          p == null || (l = p.catalog) == null ? void 0 : l.vertical,
          void 0,
          function () {
            return o("musicOnReelsOptOutDefaultStatus")
              .MUSIC_ON_REELS_OPT_OUT_DEFAULT_STATUS;
          },
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          d,
        ),
        D = e.name || o("AdsAdCreationUtils").DEFAULT_ADGROUP_NAME.toString(),
        x = r("gkx")("21580"),
        $ = o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(e);
      if (
        x &&
        r("adsACOIsEligibleForACO")(
          E,
          R,
          o("adsACOVerticalValidationUtils").isCommerceVertical(
            p == null || (s = p.catalog) == null ? void 0 : s.vertical,
          ),
        )
      ) {
        var P, N, M;
        T = o("AdsUEditorAdgroupACOMutators").transformAdgroupToDAAPlusC(
          T,
          E.objective,
          k,
          p == null || (P = p.productSet) == null ? void 0 : P.id,
          p == null || (N = p.catalog) == null ? void 0 : N.vertical,
          $,
          !0,
          void 0,
          p == null || (M = p.productSet) == null
            ? void 0
            : M.catalog_item_type,
          { campaign: R, campaignGroup: E },
        );
      }
      return (
        r("isEligibleForDADynamicMediaWithParams")(T, _, I)
          ? (T = o(
              "AdsMediaTypeAutomationMutators",
            ).changeMediaTypeAutomationOptinMutator(T, "OPT_IN", "DEFAULT"))
          : (T = o(
              "AdsMediaTypeAutomationMutators",
            ).removeMediaTypeAutomationFieldsMutator(T)),
        r("isEligibleForAdaptImagesDefaultOptIn")(T, r("getUserSettings")()) &&
          (T = o("AdsDAAdaptImagesMutators").daAdaptImagesDefaultInMutator(T)),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").name.set(D),
          r("AdsAdgroupRecordAccessors").id.set(y),
          r("AdsAdgroupRecordAccessors").adset_id.set(e.adset_id),
          r("AdsAdgroupRecordAccessors").campaign_id.set(e.campaign_id),
          r("AdsAdgroupRecordAccessors").status.set(e.status),
          r("AdsAdgroupRecordAccessors").account_id.set(
            (u = e.account_id) != null ? u : c.account_id,
          ),
        )(T)
      );
    }
    l.default = e;
  },
  98,
);
