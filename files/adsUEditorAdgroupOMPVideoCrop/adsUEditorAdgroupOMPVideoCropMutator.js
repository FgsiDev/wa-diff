__d(
  "adsUEditorAdgroupOMPVideoCropMutator",
  [
    "AdsAdgroupSpecUtils",
    "AdsAdgroupWebAndAppPACMutatorUtils",
    "AdsAssetFeedUtils",
    "AdsMediaAspectRatioUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUEditorMessagingDestinationUtils",
    "adsPlacementAssetMutationConvertToPACAutomatic",
    "adsPlacementAssetMutationCopyDefaultCustomizations",
    "adsUEditorAdgroupOMPVideoCropEnhacementsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      if (u.isEmpty())
        return r("adsUEditorAdgroupOMPVideoCropEnhacementsMutator")(e, c);
      var d = s.mapEntries(function (e) {
          var t = e[0],
            n = e[1];
          return [
            t,
            o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(n),
          ];
        }),
        m = o("AdsMediaAspectRatioUtils").getPlacementsOrderedMapByAspectRatios(
          d,
        ),
        p = e,
        _ = u,
        f = o("AdsAdgroupSpecUtils").getVideoID(e);
      return (
        (_ = u.filter(function (e) {
          return e.videoID !== f;
        })),
        _.size > 0 &&
          !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            i.destination_type,
          ) &&
          (p = r("adsPlacementAssetMutationConvertToPACAutomatic")(
            p,
            i,
            l,
            n,
            a,
          )),
        _.forEach(function (e, s) {
          var u = m.get(s);
          if (e.videoID != null) {
            p = o(
              "AdsUEditorAdgroupVideoMutators",
            ).addPlacementCustomizationVideo(
              p,
              i,
              l,
              n,
              null,
              !1,
              e.videoID,
              e.videoThumbnailURI,
              null,
              null,
              "generated_default",
              u,
              "MULTI_CUSTOMIZATION_VIDEO",
              !0,
              a,
            );
            var c =
              o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(p);
            c ||
              ((p = r("adsPlacementAssetMutationCopyDefaultCustomizations")(
                n,
                p,
                l,
                u,
              )),
              (p = o(
                "AdsAdgroupWebAndAppPACMutatorUtils",
              ).addOmniChannelLinkSpecForPACMutator(t, i, l, p)));
          }
        }),
        (p = r("adsUEditorAdgroupOMPVideoCropEnhacementsMutator")(p, c)),
        p
      );
    }
    l.default = e;
  },
  98,
);
