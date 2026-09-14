__d(
  "ShadowIGMediaFields",
  ["AdsAccountStore", "GraphAPIFieldUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        "tagged_products{retailer_id,product_catalog{id},channels_to_integrity_status{channels, integrity_review_status},name,price,image_url,url}",
      u = [
        "id",
        "boost_eligibility",
        "children{product_tags{x,y,has_coordinates,product_id},id,media_type,has_fb_video_copy," +
          s +
          ",media_url}",
        "caption",
        "comments_count",
        "fb_video_copy_id",
        "has_media_with_all_deleted_products",
        "has_ad_media",
        "has_sponsors",
        "has_sponsors_with_boost_permission",
        "has_upcoming_event",
        "media_duration_ms",
        "media_source_type",
        "media_type",
        "media_url",
        "media_height",
        "media_width",
        "media_v1_id",
        "like_count",
        "permalink",
        "thumbnail_url",
        "timestamp",
        "username",
        (e = o("GraphAPIFieldUtils")).getFieldWithSubfields("owner", [
          "username",
          "profile_picture_url",
          "assigned_page",
          "legacy_instagram_user_id",
        ]),
        "owner_country",
        "owner_profile_pic",
        "owner_user_id",
        "has_fb_video_copy",
        "ig_id",
        "is_archived",
        "is_shopping_checkout_ad_eligible",
        "is_sub_media",
        "has_product_tags",
        "product_tag_creator_offsite_url",
        "should_populate_interactive_component_spec",
        "review_status_for_shopping_ads",
        "shortcode",
        "product_tags",
        "related_product_tags",
        e.getFieldWithSubfields("sponsors", [
          "username",
          "profile_picture_url",
          "assigned_page",
        ]),
        e.getFieldWithSubfields("potential_sponsors", [
          "username",
          "profile_picture_url",
          "assigned_page",
        ]),
        e.getFieldWithParameterizedSubfields("post_cta_defaulting", {
          ad_account_id: r("AdsAccountStore").getSelectedAccountID(),
        }),
        e.getFieldWithSubfields("coauthor_producers", [
          "username",
          "profile_picture_url",
          "assigned_page",
        ]),
        e.getFieldWithSubfields("partnership_ads_identities", [
          e.getFieldWithSubfields("primary_identity", [
            e.getFieldWithSubfields("fb_page", [
              "id",
              "name",
              "picture",
              "has_create_ads_access",
            ]),
            e.getFieldWithSubfields("ig_user", [
              "id",
              "legacy_instagram_user_id",
              "profile_picture_url",
              "username",
              "has_create_ads_access",
            ]),
          ]),
          e.getFieldWithSubfields("secondary_identities", [
            e.getFieldWithSubfields("fb_page", [
              "id",
              "name",
              "picture",
              "has_create_ads_access",
            ]),
            e.getFieldWithSubfields("ig_user", [
              "id",
              "profile_picture_url",
              "username",
              "has_create_ads_access",
            ]),
            "pa_permission_capabilities",
            "pa_permission_status",
          ]),
        ]),
        s,
        "partnership_ads_boost_eligibility_errors",
        "partnership_ads_ad_code",
      ];
    l.default = u;
  },
  98,
);
