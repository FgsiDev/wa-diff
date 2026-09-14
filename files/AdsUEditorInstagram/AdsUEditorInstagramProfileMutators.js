__d(
  "AdsUEditorInstagramProfileMutators",
  [
    "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.adgroup,
          n = t.instagramAccount,
          r = t.postEditMode,
          a = t.specPlugin,
          i = o("AdsUEditorInstagramUtils").getInstagramProfileLinks(n);
        if (i == null) return e;
        var l = i.appLink,
          s = i.externalLink;
        return o(
          "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
        ).setCTAAppLinkAndExternalLink({
          adgroup: e,
          appLink: l,
          callToActionType: "VIEW_INSTAGRAM_PROFILE",
          externalLink: s,
          specPlugin: a,
          postEditMode: r,
          appDestination: null,
        });
      },
      s = function (t) {
        var e = t.adgroup,
          n = t.campaignGroupPromotedPageID,
          r = t.objective,
          a = t.pages,
          i = t.promotedObjectType,
          l = t.specPlugin,
          s = e;
        return (
          (s = o("AdsUEditorCallToActionMutators").setCallToAction({
            callToActionType: "VIEW_INSTAGRAM_PROFILE",
            pages: a,
            cachedCallToActionLink: null,
            adgroup: e,
            campaignGroupPromotedPageID: n,
            objective: r,
            promotedObjectType: i,
            specPlugin: l,
          })),
          s
        );
      };
    ((l.setCTALinkAndAppLink = e), (l.setInstagramProfileCTA = s));
  },
  98,
);
