__d(
  "AdsMediaTypeAutomationMutators",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDynamicAdsFormatUtils",
    "AdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null) return e;
      var n = t.filter(function (e) {
        return e.get("format") !== "catalog_single_media";
      });
      return n.size === t.size
        ? e
        : n.isEmpty()
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(n)(e);
    }
    function s(t, n, r) {
      r === void 0 && (r = "MANUAL");
      var a = c(t, n, r);
      return o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(a)
        ? n !== "OPT_IN"
          ? e(a)
          : !o(
                "AdsDynamicAdsFormatUtils",
              ).passGKForDASingleVideoTransformationEnabledByDefault(!0) ||
              !o("AdsDynamicAdsFormatUtils").passGKForSingleVideoTransformation(
                !1,
              )
            ? a
            : o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                a,
                "single_media",
                "catalog",
                "catalog_single_media",
              )
        : a;
    }
    function u(e, t, n, a, i) {
      if (!o("AdsDynamicAdsFormatUtils").getIsDynamicAdSingleMediaFormat(e))
        return c(e, n, a);
      var l = n === "OPT_IN",
        s = l || i === !0;
      return o("AdsMutators").chain(
        function (e) {
          return s
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.force_single_link.set(
                !0,
                e,
              )
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.force_single_link.delete(
                e,
              );
        },
        function (e) {
          return s
            ? r("AdsAdgroupSemanticFields").catalogAssetFormatOption.delete(
                t,
                e,
              )
            : r("AdsAdgroupSemanticFields").catalogAssetFormatOption.set(
                t,
                e,
                "single_video",
              );
        },
        function (e) {
          return s
            ? e
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.image_layer_specs.delete(
                e,
              );
        },
        function (e) {
          return s
            ? e
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.automated_product_tags.delete(
                e,
              );
        },
        function (e) {
          return s
            ? e
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.image_overlay_spec.delete(
                e,
              );
        },
        function (e) {
          return c(e, n, a);
        },
      )(e);
    }
    function c(e, t, n) {
      var a;
      n === void 0 && (n = "MANUAL");
      var i = t === "OPT_IN",
        l =
          (a = e.creative) == null ||
          (a = a.degrees_of_freedom_spec) == null ||
          (a = a.creative_features_spec) == null ||
          (a = a.media_type_automation) == null ||
          (a = a.customizations) == null
            ? void 0
            : a.video_crop_style;
      return o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.enroll_status.set(
            t,
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.action_metadata.type.set(
            n,
            e,
          );
        },
        function (e) {
          return i
            ? l == null
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.customizations.video_crop_style.set(
                  "AUTO",
                  e,
                )
              : e
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.customizations.video_crop_style.delete(
                e,
              );
        },
      )(e);
    }
    function d(e) {
      return o("AdsMutators").chain(function (e) {
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.delete(
          e,
        );
      })(e);
    }
    function m(e) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.force_single_link.set(!0),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .format_option.delete,
      )(e);
    }
    function p(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
          .template_data.force_single_link.delete,
        t.creative.object_story_spec.template_data.image_overlay_spec.delete,
        t.creative.object_story_spec.template_data.image_layer_specs.delete,
        t.creative.object_story_spec.template_data.automated_product_tags
          .delete,
        t.creative.object_story_spec.template_data.format_option.set(
          "single_video",
        ),
      )(e);
    }
    function _(e, t) {
      return t != null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.customizations.video_crop_style.set(
            t,
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.customizations.video_crop_style.delete(
            e,
          );
    }
    ((l.changeMediaTypeAutomationWithDACatalogSingleMediaSpecMutator = s),
      (l.changeMediaTypeAutomationMutator = u),
      (l.changeMediaTypeAutomationOptinMutator = c),
      (l.removeMediaTypeAutomationFieldsMutator = d),
      (l.switchToSingleImageFormatMutator = m),
      (l.switchToSingleVideoFormatMutator = p),
      (l.dynamicMediaVideoCropStyleMutator = _));
  },
  98,
);
