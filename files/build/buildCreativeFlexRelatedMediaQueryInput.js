__d(
  "buildCreativeFlexRelatedMediaQueryInput",
  [
    "AdsCreativeFlexGroupedMediaQueryArgsUtils",
    "AdsCreativeFlexMediaUtils",
    "XFBAdsCreativeFlexRecommendedMediaQueryCallsiteUtils.facebook",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.accountID,
        n = e.adgroupIDs,
        a = e.adgroupSpec,
        i = e.callsite,
        l = e.campaignGroupIDs,
        s = e.campaignIDs,
        u = e.existingPostObjectType,
        c = e.existingPostType,
        d = e.isExistingPostAd,
        m = e.l1SelectedIgAccountId,
        p = e.maxRecCap,
        _ = e.targetMediaFbPostId,
        f = e.targetMediaIdentifier,
        g = e.targetMediaIgPostId;
      if (f == null) return null;
      var h =
          a != null
            ? o("AdsCreativeFlexMediaUtils").getAdTextInfoFromAdgroup(a)
            : {
                targetAdPrimaryText: void 0,
                targetAdHeadline: void 0,
                targetAdDescription: void 0,
              },
        y = h.targetAdDescription,
        C = h.targetAdHeadline,
        b = h.targetAdPrimaryText;
      return {
        ad_account_id: t,
        callsite: r("nullthrows")(
          o(
            "XFBAdsCreativeFlexRecommendedMediaQueryCallsiteUtils.facebook",
          ).fromJSEnum(i),
        ),
        destination_adgroup_id: n.length > 0 ? n[0] : null,
        destination_campaign_group_id: l.length > 0 ? l[0] : null,
        destination_campaign_id: s.length > 0 ? s[0] : null,
        destination_url:
          a != null
            ? o("AdsCreativeFlexMediaUtils").getDestinationUrlFromAdgroup(a)
            : null,
        existing_post_object_type: u,
        existing_post_type: c,
        is_existing_post_ad: d,
        max_rec_cap: p,
        selected_multi_media_ids:
          a != null
            ? o(
                "AdsCreativeFlexGroupedMediaQueryArgsUtils",
              ).computeSelectedMultiMediaIds(a)
            : [],
        target_media_identifier: f,
        target_media_fb_post_id: _,
        target_media_ig_post_id: g,
        target_ad_primary_text: b,
        target_ad_headline: C,
        target_ad_description: y,
        l1_selected_ig_account_id: m,
      };
    }
    l.buildCreativeFlexRelatedMediaQueryInput = e;
  },
  98,
);
