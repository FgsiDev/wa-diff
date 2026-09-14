__d(
  "AdsUEditorAdgroupSetDevicePlatformDataReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsCTVDevicePlatformChangeUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCTVCatalogMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSetDevicePlatformActionFlux",
    "adsACOIsACOAdgroup",
    "adsACOIsValidDevicePlatform",
    "adsACORemoveACOSpec",
    "adsRemoveIncompatiblePACCustomizations",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.plugins,
              l = n.promoAdDefaultOptinStatus;
            return t.adgroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                  var s,
                    u = r("nullthrows")(a.get(n)),
                    c = u.campaign,
                    d = u.campaignGroup,
                    m = e;
                  if (
                    (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(m) &&
                      (m = r("adsRemoveIncompatiblePACCustomizations")(
                        e,
                        c,
                        r("nullthrows")(i.get(n)),
                      )),
                    l != null &&
                      ((m = o(
                        "AdsUEditorAdgroupPromoAdMutators",
                      ).updatePromoAdForDefaultOptIn(
                        { adgroup: m, campaign: c, campaignGroup: d },
                        null,
                        r("nullthrows")(i.get(n)),
                        l,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite.SELECT_DEVICE_PLATFORM,
                      )),
                      (m = o(
                        "AdsUEditorAdgroupEmailCaptureMutators",
                      ).updateEmailCaptureForDefaultOptIn(
                        { adgroup: m, campaign: c, campaignGroup: d },
                        null,
                        l,
                        o("AdsUEditorAdgroupPromoAdMutatorUtils")
                          .PromoAdDefaultOptInCallSite.SELECT_DEVICE_PLATFORM,
                      ))),
                    o(
                      "AdsCTVDevicePlatformChangeUtils",
                    ).isCTVDevicePlatformBeingAdded(
                      t.value,
                      t.eligibilityInformation.spec,
                    ) &&
                      (m = o(
                        "AdsUEditorAdgroupCTVCatalogMutators",
                      ).maybeConvertCatalogAdToManualSingleVideo(m, c, d)),
                    !r("adsACOIsACOAdgroup")(m))
                  )
                    return m;
                  var p = (s = t.value) != null ? s : [];
                  return r("adsACOIsValidDevicePlatform")(p)
                    ? m
                    : r("adsACORemoveACOSpec")(m);
                });
          },
          o("AdsUEditorCampaignSetDevicePlatformActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
