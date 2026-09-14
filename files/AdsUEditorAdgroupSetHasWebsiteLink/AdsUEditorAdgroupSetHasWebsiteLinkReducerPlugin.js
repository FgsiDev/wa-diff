__d(
  "AdsUEditorAdgroupSetHasWebsiteLinkReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupWebsiteLinkPostTypeMutators",
    "AdsAssetFeedUtils",
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetHasWebsiteLinkDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "ApiAdObjectTypes",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n));
                if (t.hasWebsiteLink)
                  return o(
                    "AdsAdgroupWebsiteLinkPostTypeMutators",
                  ).convertToHasWebsiteLinkFormat(e, l);
                var s = e;
                return (
                  (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
                    o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(
                      e,
                    )) &&
                    !t.canUsePacOptionalLinks &&
                    (s = o(
                      "AdsUEditorAdgroupAssetFeedMutators",
                    ).convertFromAssetFeedSpec(
                      o("AdsAdgroupTypeUtils").isVideoAd(e)
                        ? r("ApiAdObjectTypes").VIDEO
                        : o("AdsAPIAdgroupRecordUtils").getObjectType(e),
                      e,
                      r("nullthrows")(l.pivots.objective),
                    )),
                  r("adsInteractivePollHasFbFeedVideoPollSpec")(s, a.spec) &&
                    (s = o("AdsInteractivePollLinkUtils").removeDisplayLink(
                      s,
                      l,
                    )),
                  o(
                    "AdsAdgroupWebsiteLinkPostTypeMutators",
                  ).convertToHasNoWebsiteLinkFormat(s, l)
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetHasWebsiteLinkDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
