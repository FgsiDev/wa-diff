__d(
  "AdsMetadataSourceTestimonialsPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsConnectedSourcesFbt",
    "JSResource",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourcedTestimonialsContainer.react",
        ).__setRef("AdsMetadataSourceTestimonialsPlugin"),
      ),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourcedTestimonialsSelectedItems.react",
        ).__setRef("AdsMetadataSourceTestimonialsPlugin"),
      ),
      d = {
        key: "sourced_testimonials",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsMetadataSourcedTestimonialsContainer.react",
          ).__setRef("AdsMetadataSourceTestimonialsPlugin"),
          r("JSResource")(
            "AdsMetadataSourcedTestimonialsSelectedItems.react",
          ).__setRef("AdsMetadataSourceTestimonialsPlugin"),
        ],
        getHeading: o("AdsConnectedSourcesFbt").getSourcedTestimonialsHeading,
        getSubheading: o("AdsConnectedSourcesFbt")
          .SOURCED_TESTIMONIALS_DESCRIPTION,
        mutateAdgroup: function (t, n) {
          var e = n == null ? void 0 : n.ncsTestimonial;
          if (e === void 0) return t;
          var o = e == null ? void 0 : e.briefId,
            a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.ncs_testimonial.delete(t);
          if (o == null)
            return (
              (a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.set(
                "OPT_OUT",
              )(a)),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.action_metadata.type.set(
                "MANUAL",
              )(a)
            );
          ((a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.ncs_testimonial.brief_id.set(o)(a)),
            (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.set(
              "OPT_IN",
            )(a)));
          var i = e == null ? void 0 : e.autoLinkedWithCampaignGroupId;
          return (
            i != null &&
              (a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.ncs_testimonial.auto_linked_with_campaign_group_id.set(
                i,
              )(a)),
            a
          );
        },
        getSortOrder: function () {
          return 7;
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          {
            isFeatureEligible: o(
              "adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector",
            ).adsUEditorAdgroupNCSTestimonialFeatureEligibilitySelector,
          },
          i.id + ".visibilityDataSelector",
        ),
        isVisible: function (t) {
          var e = t.isFeatureEligible;
          return e;
        },
        MainComponent: function () {
          return s.jsx(u, {});
        },
        SelectedItemsComponent: function () {
          return s.jsx(c, {});
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
