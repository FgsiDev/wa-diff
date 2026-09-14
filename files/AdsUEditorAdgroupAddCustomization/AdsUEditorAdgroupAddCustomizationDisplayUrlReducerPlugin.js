__d(
  "AdsUEditorAdgroupAddCustomizationDisplayUrlReducerPlugin",
  [
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationDisplayUrlActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.eligibilityInformation,
              l = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = l.get(e.id);
              n ||
                r("FBLogger")("am_feature_pac").mustfix(
                  "[PAC] ParentData not be null when AdsUEditorAdgroupAddCustomizationWebsiteUrlReducerPlugin",
                );
              var s = r(
                "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
              )(e, n.specPlugin, a);
              i != null &&
                r("adsInteractivePollHasFbFeedVideoPollSpec")(s, i.spec) &&
                (s = o("AdsInteractivePollLinkUtils").setDisplayLink(
                  s,
                  t.displayUrl,
                  n.specPlugin,
                ));
              var u = { display_url: t.displayUrl };
              return o(
                "AdsUEditorAdgroupUrlMutators",
              ).addPlacementCustomizationUrl(
                s,
                n.specPlugin,
                t.placements,
                u,
                t.isDefaultPlacementAsset,
                t.isWebandAppPACUsage,
              );
            });
          },
          o("AdsUEditorAdgroupAddCustomizationDisplayUrlActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
