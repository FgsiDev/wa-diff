__d(
  "AdsUEditorAdgroupInstagramProfileSetCTALinkReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupInstagramProfileSetCTALinkActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSharedSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramProfileMutators",
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
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
            uniformInstagramActorID: o("AdsUEditorAdgroupSharedSelectors")
              .uniformInstagramActorIDSelector,
          },
          function (e, t, n) {
            var a = n.getInstagramAccount,
              i = n.plugins,
              l = n.uniformInstagramActorID;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                s = i.get(e.id);
              if (s == null) return e;
              var u = o("AdsAPIAdgroupRecordUtils").getPageID(e, s),
                c = e;
              if (
                (((n = e.creative) == null
                  ? void 0
                  : n.branded_content_boosting_type) != null &&
                  (c = o(
                    "AdsInstagramBrandedContentUtils",
                  ).setPromotedPageIDforL1Ads(c, u)),
                l != null)
              ) {
                var d = a(l, c.id);
                if (d != null) {
                  var m = o("AdsAPIAdgroupRecordUtils").getPostEditMode(c);
                  return o(
                    "AdsUEditorInstagramProfileMutators",
                  ).setCTALinkAndAppLink({
                    adgroup: c,
                    specPlugin: s,
                    instagramAccount: d,
                    postEditMode: m,
                  });
                }
              }
              return (
                (c = o(
                  "AdsUEditorCallToActionMutators",
                ).setCallToActionValueAppLink(c, s, t.appLink)),
                (c = o("AdsUEditorCallToActionMutators").setCallToActionType(
                  c,
                  "VIEW_INSTAGRAM_PROFILE",
                  s,
                )),
                o("AdsUEditorWebsiteMutators").setWebsiteURL({
                  adgroup: c,
                  campaignGroupPromotedPageID: u,
                  objective: r("AdsAPIObjectives").LINK_CLICKS,
                  promotedObjectType: r("AdsPromotedObjectTypes")
                    .INSTAGRAM_PROFILE,
                  specPlugin: s,
                  websiteURL: t.ctaLink,
                })
              );
            });
          },
          r("AdsUEditorAdgroupInstagramProfileSetCTALinkActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
