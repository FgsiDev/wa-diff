__d(
  "AdsUEditorCampaignSetLanguageSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsSmartAppPromotionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetLanguageSpecActionFlux",
    "adsCreateStoreSelector",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          return r("ifRequired")(
            "adsUEditorCampaignAdvisoryMinAgeStateSelector",
            function (e) {
              return e(t);
            },
          );
        },
        { name: i.id + ".minAgeStateSelector" },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            minAgeState: e,
            campaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.campaignGroupMap,
              i = n.minAgeState;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var l = e;
                if (
                  (t.language === null &&
                    (l = r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.locales.delete(l)),
                  (l = r("AdsCampaignRecordAccessors").targeting.locales.set(
                    t.language,
                    l,
                  )),
                  i != null)
                ) {
                  var s = a.get(n);
                  l = o(
                    "AdsSmartAppPromotionUtils",
                  ).setAdvisoryMinAgeTargetingSpec(
                    s,
                    l,
                    i.hasSpecialCategory,
                    i.hasCustomAudienceExclusion,
                    i.appDestinationDataMinAge,
                    i.appSettingsMinAge,
                    i.accountSettingsMinAge,
                    i.aacAccountControlEligible,
                    i.countries,
                    t.language,
                  );
                }
                return l;
              },
            );
          },
          o("AdsUEditorCampaignSetLanguageSpecActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
