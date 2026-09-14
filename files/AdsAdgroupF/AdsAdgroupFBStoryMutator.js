__d(
  "AdsAdgroupFBStoryMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFormatMutatorUtils",
    "AdsMutators",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = {});
      var a = t.page_id,
        i = t.photo_data,
        l = t.video_data;
      if (a == null || (i != null) == (l != null)) return e;
      var s = o("AdsMutators").chain(
        function (e) {
          return o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
            e,
            l != null ? "StaticVideo" : "StaticImage",
          );
        },
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.page_id.set(
          a,
        ),
        r("AdsAdgroupRecordAccessors").creative.object_type.set(
          l != null ? r("ApiAdObjectTypes").VIDEO : r("ApiAdObjectTypes").PHOTO,
        ),
        r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
        r("AdsAdgroupRecordAccessors").creative.instagram_story_id.delete,
        r("AdsAdgroupRecordAccessors").creative.source_facebook_post_id.delete,
        r("AdsAdgroupRecordAccessors").creative.source_instagram_media_id
          .delete,
        r("AdsAdgroupRecordAccessors").creative.effective_object_story_id
          .delete,
        r("AdsAdgroupRecordAccessors").creative.effective_instagram_story_id
          .delete,
        r("AdsAdgroupRecordAccessors").creative.effective_instagram_media_id
          .delete,
        r("AdsAdgroupRecordAccessors").creative.object_id.delete,
        r("AdsAdgroupRecordAccessors").creative.object_url.delete,
        r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
        n.preserveAssetFeedSpec === !0
          ? function (e) {
              return e;
            }
          : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.call_to_action.delete,
        r("AdsAdgroupRecordAccessors").creative.body.delete,
        r("AdsAdgroupRecordAccessors").creative.title.delete,
        r("AdsAdgroupRecordAccessors").creative.image_crops.delete,
        r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
        r("AdsAdgroupRecordAccessors").creative.image_url.delete,
        r("AdsAdgroupRecordAccessors").creative.interactive_components_spec
          .delete,
        r("AdsAdgroupRecordAccessors").creative.portrait_customizations.delete,
        r("AdsAdgroupRecordAccessors").creative.instant_checkout_setting.delete,
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .ad_handle_type.delete,
        r("AdsAdgroupRecordAccessors").creative.branded_content.testimonial
          .delete,
      )(e);
      if (i != null)
        s = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.photo_data.url.set(i.url),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.photo_data.image_hash.set(i.image_hash),
        )(s);
      else if (l != null) {
        var u;
        s = o("AdsMutators").chain(
          (u = r(
            "AdsAdgroupRecordAccessors",
          )).creative.object_story_spec.video_data.video_id.set(l.video_id),
          u.creative.object_story_spec.video_data.image_url.set(l.image_url),
          u.creative.object_story_spec.video_data.image_hash.set(l.image_hash),
          u.creative.object_story_spec.video_data.video_thumbnail_id.set(
            l.video_thumbnail_id,
          ),
          u.creative.object_story_spec.video_data.video_thumbnail_source.set(
            l.video_thumbnail_source,
          ),
        )(s);
      }
      return s;
    }
    function s(e, t, n) {
      var a,
        i,
        l,
        s = t.photo_data,
        u = t.video_data;
      if (n == null || (s != null) == (u != null)) return e;
      var c =
        (a =
          s == null || (i = s.call_to_action) == null || (i = i.value) == null
            ? void 0
            : i.link) != null
          ? a
          : u == null || (l = u.call_to_action) == null || (l = l.value) == null
            ? void 0
            : l.link;
      if (typeof c != "string") return e;
      var d = c.trim();
      return d === ""
        ? e
        : s != null
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.photo_data.call_to_action.type.set(
                n,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.photo_data.call_to_action.value.link.set(
                d,
              ),
            )(e)
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.set(
                n,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.value.link.set(
                d,
              ),
            )(e);
    }
    ((l.updateAdgroupWithSelectedFBStoryMutator = e),
      (l.updateAdgroupWithSelectedFBStoryCallToActionMutator = s));
  },
  98,
);
