__d(
  "AdsUEditorAdgroupSetWebsiteUrlDeepLinkReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetWebsiteURLDeepLinkDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
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
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsDynamicAdCustomizationAssetFeedUtils",
              ).isAssetFeedBasedMMDA(e)
                ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    e,
                    r("nullthrows")(a.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").linkURL,
                    o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
                      e,
                      "link_urls",
                    ),
                    "deeplink_url",
                    t.websiteUrlDeepLink || "",
                  )
                : t.websiteUrlDeepLink === ""
                  ? o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.template_url_spec
                        .web.url.delete,
                      r("AdsAdgroupRecordAccessors").creative.template_url
                        .delete,
                    )(e)
                  : o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.template_url_spec.web.url.set(
                        t.websiteUrlDeepLink || "",
                      ),
                      r("AdsAdgroupRecordAccessors").creative.template_url
                        .delete,
                    )(e);
            });
          },
          o("AdsUEditorAdgroupSetWebsiteURLDeepLinkDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
