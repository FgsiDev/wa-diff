__d(
  "fetchWebsiteMediaImages",
  [
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AdsMetadataWebsiteMediaUtils",
    "RelayHooks",
    "fetchWebsiteMediaImagesQuery.graphql",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("fetchWebsiteMediaImagesQuery.graphql"));
    function u(e) {
      return o(
        "AdsMetadataWebsiteMediaUtils",
      ).buildWebsiteMediaObjectFromGraphQL({
        image_url: e.image_url,
        image_hash: e.image_hash,
        image_height: e.image_height,
        image_width: e.image_width,
        is_og_image: e.is_og_image,
        image_sources: e.image_sources,
        is_immersive_product: e.is_immersive_product,
        is_human_and_product: e.is_human_and_product,
        is_human_and_service: e.is_human_and_service,
        is_poster: e.is_poster,
        is_photo_collage: e.is_photo_collage,
        is_landscape: e.is_landscape,
        is_illustration: e.is_illustration,
        is_text_wall: e.is_text_wall,
        is_logo: e.is_logo,
        is_icon: e.is_icon,
        text_heavy: e.text_heavy,
        image_blurry: e.image_blurry,
        has_human_face: e.has_human_face,
        is_product_focus: e.is_product_focus,
        background_clean: e.background_clean,
        background_color: e.background_color,
        user_sentiment: e.user_sentiment,
        cluster_index: e.cluster_index,
        image_phash: e.image_phash,
        image_asset_fbid: e.image_asset_fbid,
      });
    }
    var c = 0,
      d = new Map();
    function m(e, t, n, a) {
      var l = c++;
      n != null && d.set(n, l);
      var m = o("RelayHooks")
        .fetchQuery(r("AdsManagerRelayEnvironment"), s, {
          url: t,
          adAccountId: e,
        })
        .toPromise();
      r("promiseDone")(
        m.then(
          function (e) {
            var t, o, s;
            if (!(n != null && d.get(n) !== l)) {
              var c =
                  e == null ||
                  (t = e.xfb_creative_metadata_website_media_fields) == null
                    ? void 0
                    : t.media,
                m =
                  e == null ||
                  (o = e.xfb_creative_metadata_website_media_fields) == null
                    ? void 0
                    : o.image_clusters,
                p = c == null ? void 0 : c.map(u);
              (p == null || p.length === 0) && (p = []);
              var _ = r("immutable").List(p),
                f = r("immutable").List(
                  (s =
                    m == null
                      ? void 0
                      : m.map(function (e) {
                          return {
                            image_phashes: e.image_phashes,
                            cluster_silhouette_score:
                              e.cluster_silhouette_score,
                            cluster_intra_diversity: e.cluster_intra_diversity,
                            ranking_version: e.ranking_version,
                          };
                        })) != null
                    ? s
                    : [],
                ),
                g = {
                  websiteMediaImages: _,
                  websiteMediaSpec: { imageClusters: f.toArray() },
                };
              (r("AdsConnectedSourcesModalSaveStateAction").dispatch(
                { state: g },
                {
                  line: "189",
                  module: "fetchWebsiteMediaImages.js",
                  moduleID: i.id,
                },
              ),
                a == null || a(_, f));
            }
          },
          function (e) {
            r("AdsInterfacesLogger").log({
              data: { message: e.errorDescription },
              eventName: "ads_creative_metadata_website_media_data_fetch_error",
            });
          },
        ),
      );
    }
    l.fetchWebsiteMediaImages = m;
  },
  98,
);
