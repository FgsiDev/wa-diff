__d(
  "AdsUEditorLiveVideoMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
    "AdsUEditorInstagramUtils",
    "AdsUEditorLiveVideoUtils",
    "ApiAdObjectTypes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.adgroup,
          n = t.callToActionType,
          r = n === void 0 ? "WATCH_LIVE_VIDEO" : n,
          a = t.instagramAccount,
          i = t.postEditMode,
          l = t.specPlugin,
          s = a.username;
        if (a == null || s == null) return e;
        var u = o("AdsUEditorLiveVideoUtils").getInstagramLiveLink(a);
        if (u == null) return e;
        var c =
            a.user_id != null
              ? o("AdsUEditorInstagramUtils").getAppLinkForInstagramProfile(
                  a.user_id,
                  s.toString(),
                )
              : o("AdsUEditorLiveVideoUtils").getInstagramLiveFallbackAppLink(
                  s.toString(),
                ),
          d = e;
        return (
          (d = o(
            "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
          ).setCTAAppLinkAndExternalLink({
            adgroup: d,
            appLink: c,
            callToActionType: r,
            externalLink: u,
            specPlugin: l,
            postEditMode: i,
            appDestination: "INSTAGRAM_LIVE_VIDEO",
          })),
          d
        );
      },
      s = function (t) {
        var e,
          n = t.adgroup,
          a = n;
        return (
          (a = o("AdsMutators").chain(
            (e = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
              .video_data.delete,
            e.creative.media_type.set("INSTAGRAM_LIVE_VIDEO"),
            e.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
            e.creative.object_story_spec.link_data.picture.set(
              "https://www.facebook.com/images/ads/live_shopping/scheduled_live_video_ad_preview_placeholder_500x500.png",
            ),
            e.creative_asset_groups_spec.delete,
          )(a)),
          r("justknobx")._("4871") &&
            (a = o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .template_data.delete,
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
            )(a)),
          a
        );
      };
    ((l.setCTALinkAndAppLink = e),
      (l.setDefaultAutoplayCreativeForInstagramLiveVideo = s));
  },
  98,
);
