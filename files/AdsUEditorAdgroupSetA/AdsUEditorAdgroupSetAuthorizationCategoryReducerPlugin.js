__d(
  "AdsUEditorAdgroupSetAuthorizationCategoryReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUtils",
    "AdsConvergenceAdgroupUtils",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux",
    "adsRegulatedCategoryIsPoliticalCategorySelected",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorIsPoliticalCategoryAvailableSelector",
    "nullthrows",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            isPolitcalCategoryAvailable: r(
              "adsUEditorIsPoliticalCategoryAvailableSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bizAIEligibility,
              l = n.isPolitcalCategoryAvailable,
              s = n.parentData,
              u = t.adgroupIDs;
            return u == null || l === !1
              ? e
              : o("AdsMutators").mutateEach(e, u, function (e, n) {
                  var a = r("adsRegulatedCategoryIsPoliticalCategorySelected")(
                      t.regulatedCategories,
                    ),
                    l = e;
                  if (
                    (a &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.degrees_of_freedom_spec.delete(l)),
                    r("qex")._("1901") === !0)
                  ) {
                    var u,
                      c = r("nullthrows")(s.get(e.id)),
                      d = c.campaignGroup,
                      m = d.special_ad_categories;
                    !(
                      m == null || m.contains(r("AdsRegulatedCategory").NONE)
                    ) &&
                      ((u = d.promoted_object) == null
                        ? void 0
                        : u.product_catalog_id) != null &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.applink_treatment.set("web_only", l));
                  }
                  return (
                    a
                      ? o("AdsAdgroupUtils").isPoliticalAd(l) ||
                        (l = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.authorization_category.set("POLITICAL", l))
                      : (l = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.authorization_category.delete(l)),
                    (l = o(
                      "AdsConvergenceAdgroupUtils",
                    ).maybeEnableContextualDiscoveryAdsExperience(l)),
                    (l = o(
                      "AdsUEditorAdgroupTurnoffPromoAdMutator",
                    ).turnOffPromo(
                      l,
                      o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                        .PromoAdDefaultOptOutCallsite.SET_SPECIAL_AD_CATEGORY,
                    )),
                    (l = o(
                      "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                    ).updateBizAIDefaultOptIn(
                      l,
                      i,
                      o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                        .BizAIDefaultOptInCallSite.SET_AUTHORIZATION_CATEGORY,
                    )),
                    l
                  );
                });
          },
          o("AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
