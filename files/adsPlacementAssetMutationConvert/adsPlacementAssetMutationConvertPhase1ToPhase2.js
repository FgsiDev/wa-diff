__d(
  "adsPlacementAssetMutationConvertPhase1ToPhase2",
  [
    "AdsAdgroupTypeUtils",
    "AdsInterfacesLogger",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetUtils",
    "AdsPlacementPlatformUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupVideoMutators",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i, l;
      r("AdsInterfacesLogger").log({
        data: ((i = {}), (i.message = "should_convert"), i),
        eventName: "post_duplication_pac_spec_mutation",
      });
      var u = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin({ campaignGroup: n, campaign: t }),
        c =
          (l = e.creative) == null || (l = l.platform_customizations) == null
            ? void 0
            : l.instagram,
        d = s(t);
      if (c == null) {
        var m;
        return (
          r("AdsInterfacesLogger").log({
            data: ((m = {}), (m.message = "result_early_return"), m),
            eventName: "post_duplication_pac_spec_mutation",
          }),
          e
        );
      } else {
        var p;
        return (
          r("AdsInterfacesLogger").log({
            data: ((p = {}), (p.message = "result_converting_spec"), p),
            eventName: "post_duplication_pac_spec_mutation",
          }),
          d.reduce(function (e, n) {
            var i = r("nullthrows")(
              o("AdsPlacementAssetUtils").getPlacementsFromAssetGroup(n),
            );
            if (o("AdsAdgroupTypeUtils").isVideoAd(e)) {
              var l,
                s =
                  (l = e.creative) == null ||
                  (l = l.object_story_spec) == null ||
                  (l = l.video_data) == null
                    ? void 0
                    : l.video_thumbnail_source;
              return o(
                "AdsUEditorAdgroupVideoMutators",
              ).addPlacementCustomizationVideo(
                e,
                t,
                u,
                a,
                null,
                !1,
                c.video_id,
                c.image_url,
                null,
                null,
                s,
                i,
                "CONVERT_PHASE1_TO_PHASE2",
              );
            } else
              return o(
                "AdsUEditorAdgroupImageMutators",
              ).addPlacementCustomizationImage({
                adgroup: e,
                sourceReducer: "CONVERT_PHASE1_TO_PHASE2",
                campaign: t,
                specPlugin: u,
                adAccount: a,
                assetGroup: n,
                imageHash: c.image_hash,
                imageURL: c.image_url,
                crops: c.image_crops,
                placementList: i,
              });
          }, e)
        );
      }
    }
    function s(e) {
      var t = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(e),
        n = o("AdsPlacementPlatformUtils").hasInstagramStoriesPlacement(t);
      return n
        ? [
            r("AdsPlacementAssetCustomizationTypes").AdsAssetCustomizationGroups
              .INSTAGRAM_STREAM,
            r("AdsPlacementAssetCustomizationTypes").AdsAssetCustomizationGroups
              .INSTAGRAM_STORY,
          ]
        : [
            r("AdsPlacementAssetCustomizationTypes").AdsAssetCustomizationGroups
              .INSTAGRAM_STREAM,
          ];
    }
    l.default = e;
  },
  98,
);
