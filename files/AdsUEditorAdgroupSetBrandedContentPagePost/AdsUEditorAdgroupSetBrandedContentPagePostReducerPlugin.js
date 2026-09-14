__d(
  "AdsUEditorAdgroupSetBrandedContentPagePostReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBrandedContentPagePostDataActionFlux",
    "adsUEditorAccountSelector",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return (
              r("vulture")("85m3g7uoj8v3EOONvdrbX0A_LFQ="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n;
                return (
                  r("vulture")("aNLBoxk3xVt1DFmARz6DXul_orU="),
                  o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsCreativeFormatMutatorUtils",
                      ).mutateCreativeMediaType(e, "EXISTING_POST");
                    },
                    function (e) {
                      return o(
                        "AdsCreativeFormatMutatorUtils",
                      ).mutateBrandedContentAdRenderFormat(e, a);
                    },
                    (n = r(
                      "AdsAdgroupRecordAccessors",
                    )).creative.object_story_id.set(t.pagePostID),
                    n.creative.instagram_story_id.delete,
                    n.creative.interactive_components_spec.delete,
                    n.creative.object_id.delete,
                    n.creative.portrait_customizations.delete,
                    n.creative.source_instagram_media_id.delete,
                    n.creative.instant_checkout_setting.delete,
                    n.creative.degrees_of_freedom_spec.ad_handle_type.delete,
                    n.creative.product_set_id.delete,
                    n.creative.asset_feed_spec.delete,
                    n.creative.branded_content_boosting_type.set(
                      "SPONSOR_BOOST",
                    ),
                    n.creative.facebook_branded_content.sponsor_page_id.set(
                      t.facebookBrandedContentSponsorPageID,
                    ),
                    n.creative.instagram_branded_content.sponsor_id.set(
                      t.instagramBrandedContentSponsorID,
                    ),
                  )(e)
                );
              })
            );
          },
          r("AdsUEditorAdgroupSetBrandedContentPagePostDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
