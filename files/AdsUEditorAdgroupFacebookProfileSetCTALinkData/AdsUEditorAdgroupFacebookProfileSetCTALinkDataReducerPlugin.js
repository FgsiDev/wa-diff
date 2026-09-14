__d(
  "AdsUEditorAdgroupFacebookProfileSetCTALinkDataReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupFacebookProfileSetCTALinkDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorWebsiteMutators",
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
              var n = a.get(e.id);
              if (n == null) return e;
              var i = o("AdsAPIAdgroupRecordUtils").getPageID(e, n),
                l = o(
                  "AdsUEditorCallToActionMutators",
                ).setCallToActionValueAppLink(e, n, t.appLink);
              return (
                (l = o("AdsUEditorCallToActionMutators").setCallToActionType(
                  l,
                  "LIKE_PAGE",
                  n,
                )),
                o("AdsUEditorWebsiteMutators").setWebsiteURL({
                  adgroup: l,
                  campaignGroupPromotedPageID: i,
                  objective: r("AdsAPIObjectives").LINK_CLICKS,
                  promotedObjectType: r("AdsPromotedObjectTypes").FACEBOOK_PAGE,
                  specPlugin: n,
                  websiteURL: t.ctaLink,
                })
              );
            });
          },
          r("AdsUEditorAdgroupFacebookProfileSetCTALinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
