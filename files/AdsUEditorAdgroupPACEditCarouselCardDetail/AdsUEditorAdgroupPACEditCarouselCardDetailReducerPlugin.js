__d(
  "AdsUEditorAdgroupPACEditCarouselCardDetailReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupPACEditCarouselCardDetailActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsVideoStore",
    "adsPlacementAssetMutationEditCarouselCardDetail",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { getVideo: r("AdsVideoStore").getSelector },
          function (e, t, n) {
            var a = n.getVideo,
              i = t.asset;
            if (i.video_id != null) {
              var l = i.video_id;
              if (
                ((i = { video_id: l }),
                t.asset.thumbnail_url == null || t.asset.thumbnail_url == "")
              ) {
                var s = a(l);
                i = babelHelpers.extends({}, i, {
                  thumbnail_url: s.preferredThumbnail.uri,
                  thumbnail_source: "generated_default",
                });
              } else
                i = babelHelpers.extends({}, i, {
                  thumbnail_url: t.asset.thumbnail_url,
                  thumbnail_source: "custom",
                });
            }
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r("adsPlacementAssetMutationEditCarouselCardDetail")(
                e,
                t.carouselLabel,
                t.cardIndex,
                t.assetField,
                i,
              );
            });
          },
          o("AdsUEditorAdgroupPACEditCarouselCardDetailActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
