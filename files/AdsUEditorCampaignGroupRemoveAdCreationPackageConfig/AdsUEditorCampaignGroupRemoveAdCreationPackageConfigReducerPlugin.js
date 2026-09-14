__d(
  "AdsUEditorCampaignGroupRemoveAdCreationPackageConfigReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsCrepeLogger",
    "AdsMutators",
    "AdsPECrepePackages",
    "AdsSmartPromotion",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupRemoveAdCreationPackageConfigActionFlux",
    "AdsUEditorCrepeNamingUtils",
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
                var n = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).ad_creation_package_config,
                  a = n.get(e);
                if (a == null) return e;
                t.reason !== "test_only_DO_NOT_USE" &&
                  o("AdsCrepeLogger").AdsCrepeLogger.log({
                    ad_creation_package_config_id: a.id,
                    category: "EDITOR",
                    event: "OPT_OUT_OF_PACKAGE",
                    data: { reason: t.reason },
                  });
                var i = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).smart_promotion_type,
                  l = i.get(e),
                  s = e,
                  u = r("AdsCampaignGroupRecordAccessors").name,
                  c = u.get(s);
                return (
                  l === r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS
                    ? ((s = i.set(r("AdsSmartPromotion").GUIDED_CREATION, e)),
                      o("AdsUEditorCrepeNamingUtils").nameMatchesASCCrepeName(
                        c,
                      ) && (s = u.set("New Sales Campaign", s)))
                    : (t.packageID ===
                        o("AdsPECrepePackages")
                          .MESSAGE_ACQUISITION_POST_ODAX_PACKAGE_ID ||
                        t.packageID ===
                          o("AdsPECrepePackages")
                            .MESSAGE_ACQUISITION_PGD_PACKAGE_ID) &&
                      (s = u.set("New Engagement Campaign", s)),
                  n.set(null, s)
                );
              },
            );
          },
          r("AdsUEditorCampaignGroupRemoveAdCreationPackageConfigActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
