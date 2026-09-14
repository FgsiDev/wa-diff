__d(
  "adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector",
  [
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector",
    "adsUEditorAdgroupIsDynamicProductAdSelector",
    "adsUEditorAdgroupIsPostSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "cr:8171",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
        n("cr:8171") != null
          ? n("cr:8171")
          : r("adsCreateSelector")(
              [],
              function () {
                return !1;
              },
              { name: i.id },
            ),
      s = o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.brand_safety_config) == null
          ? void 0
          : t.comment_moderation_filter;
      }),
      u = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupIdentityIsBrandedContentSwitchedOnSelector"),
          r("adsUEditorAdgroupIsDynamicProductAdSelector"),
          o("adsUEditorAdgroupIsPostSelector")
            .adsUEditorAdgroupIsExistingPostAdSelector,
          o("adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector")
            .adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          s,
          e,
        ],
        function (t, n, o, a, i, l) {
          var e =
            i != null &&
            i.match({
              Empty: function () {
                return !1;
              },
              Mixed: function () {
                return !1;
              },
              Uniform: function (t) {
                return t === "AD_DISABLED";
              },
            });
          return !t && !n && !o && a.length === 0 && !e && r("gkx")("952") && l;
        },
        {
          name:
            i.id + ".adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector",
        },
      );
    l.adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector = u;
  },
  98,
);
