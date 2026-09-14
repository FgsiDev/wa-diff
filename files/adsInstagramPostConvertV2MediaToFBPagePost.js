__d(
  "adsInstagramPostConvertV2MediaToFBPagePost",
  ["ImmutableObject", "convertIGMediaTypeToPostType", "moment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a = r("moment")(e.timestamp).format("X"),
        i = {
          alternate_ids: [e.ig_id, e.media_v1_id, e.shortcode],
          boost_eligibility: e.boost_eligibility,
          caption: e.caption,
          children_media:
            e.children != null
              ? e.children.data.map(function (e) {
                  return {
                    has_fb_copy: e.has_fb_video_copy,
                    id: e.id,
                    is_instagram_post: !0,
                    product_tags: e.product_tags,
                    tagged_products: e.tagged_products,
                    media_url: e.media_url,
                    type: r("convertIGMediaTypeToPostType")(e.media_type),
                  };
                })
              : [],
          coauthor_producers: e.coauthor_producers,
          comments: { summary: { total_count: e.comments_count } },
          created_time: a,
          from: {
            id: e.owner_user_id,
            name: e.username,
            profile_pic: e.owner_profile_pic,
            country: e.owner_country,
          },
          has_fb_copy: e.has_fb_video_copy,
          has_ad_media: e.has_ad_media,
          has_media_with_all_deleted_products:
            e.has_media_with_all_deleted_products,
          has_product_tags: e.has_product_tags,
          has_sponsors: e.has_sponsors,
          has_sponsors_with_boost_permission:
            e.has_sponsors_with_boost_permission,
          has_upcoming_event: e.has_upcoming_event,
          id: e.id,
          instagram_eligibility: "eligible",
          sponsors: e.sponsors,
          is_instagram_eligible: !0,
          is_instagram_post: (t = e.is_instagram_post) != null ? t : !0,
          is_published: !0,
          is_shopping_checkout_ad_eligible: e.is_shopping_checkout_ad_eligible,
          is_spherical: !1,
          is_story: e.is_sub_media,
          is_hidden: e.is_archived,
          link: e.permalink,
          likes: { summary: { total_count: e.like_count } },
          message: e.caption,
          owner: e.owner,
          partnership_ads_ad_code: e.partnership_ads_ad_code,
          partnership_ads_boost_eligibility_errors:
            e.partnership_ads_boost_eligibility_errors,
          partnership_ads_identities: e.partnership_ads_identities,
          post_cta_defaulting: e.post_cta_defaulting,
          potential_sponsors: e.potential_sponsors,
          shortcode: e.shortcode,
          picture: (n = e.thumbnail_url) != null ? n : e.media_url,
          video_url: (o = e.media_url) != null ? o : e.thumbnail_url,
          product_tag_creator_offsite_url: e.product_tag_creator_offsite_url,
          product_tags: e.product_tags,
          related_product_tags: e.related_product_tags,
          media_source_type: e.media_source_type,
          promotion_status: !1,
          type: r("convertIGMediaTypeToPostType")(e.media_type),
          review_status_for_shopping_ads: e.review_status_for_shopping_ads,
          tagged_products:
            e.tagged_products != null
              ? babelHelpers.extends({}, e.tagged_products, {
                  should_populate_interactive_component_spec:
                    e.should_populate_interactive_component_spec,
                })
              : null,
          updated_time: a,
          media_duration_ms: e.media_duration_ms,
        };
      return new (r("ImmutableObject"))(i);
    }
    l.default = e;
  },
  98,
);
