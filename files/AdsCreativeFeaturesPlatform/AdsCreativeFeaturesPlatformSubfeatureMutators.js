__d(
  "AdsCreativeFeaturesPlatformSubfeatureMutators",
  [
    "AdsAPlusCStandardEnhancementsGranularControlUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableTextOptimizationsByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableVideoAutoCropByDefaultGetValueSelector",
    "adsUEditorGetShouldEnableVideoFilteringByDefaultSelector",
    "adsUEditorGetShouldEnableVideoUncropByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          accessor: (e = r("AdsAdgroupRecordAccessors")).creative
            .degrees_of_freedom_spec.creative_features_spec.image_templates,
          featureName: "image_templates",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.image_templates) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .image_animation,
          featureName: "image_animation",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.image_animation) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .text_optimizations,
          featureName: "text_optimizations",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.text_optimizations) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .video_auto_crop,
          featureName: "video_auto_crop",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.video_auto_crop) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .inline_comment,
          featureName: "inline_comment",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.inline_comment) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .video_filtering,
          featureName: "video_filtering",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.video_filtering) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
        {
          accessor:
            e.creative.degrees_of_freedom_spec.creative_features_spec
              .video_uncrop,
          featureName: "video_uncrop",
          isFeaturePresent: function (t) {
            var e;
            return (
              (t == null ||
              (e = t.creative) == null ||
              (e = e.degrees_of_freedom_spec) == null ||
              (e = e.creative_features_spec) == null ||
              (e = e.video_uncrop) == null
                ? void 0
                : e.enroll_status) != null
            );
          },
        },
      ];
    function u(e, t, n) {
      var r = e,
        a = t ? "OPT_IN" : "OPT_OUT";
      return (
        s.forEach(function (i) {
          var l = i.accessor,
            s = i.featureName,
            u = i.isFeaturePresent;
          if (u(e)) {
            var c =
              t &&
              o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(s)
                ? "OPT_OUT"
                : a;
            r = o("AdsMutators").chain(
              l.enroll_status.set(c),
              l.action_metadata.type.set(n),
            )(r);
          }
        }),
        r
      );
    }
    function c(e, t, n, a) {
      var i,
        l = t;
      return (
        (l = d(
          l,
          (i = o(
            "AdsAPlusCStandardEnhancementsGranularControlUtils",
          )).isEligibleForImageTouchupsUseExistingPost(e, n, a),
          "image_touchups",
          r(
            "adsUEditorGetShouldEnableImageTouchupsByDefaultGetValueSelector",
          )(),
        )),
        (l = d(
          l,
          i.isEligibleForImageAnimationUseExistingPost(e, n, a),
          "image_animation",
          r(
            "adsUEditorGetShouldEnableImageAnimationByDefaultGetValueSelector",
          )(),
        )),
        (l = d(
          l,
          i.isEligibleForVideoAutoCropUseExistingPost(e, n, a),
          "video_auto_crop",
          r(
            "adsUEditorGetShouldEnableVideoAutoCropByDefaultGetValueSelector",
          )(),
        )),
        (l = d(
          l,
          i.isEligibleForTextOptimizationsUseExistingPost(e, n, a),
          "text_optimizations",
          r(
            "adsUEditorGetShouldEnableTextOptimizationsByDefaultGetValueSelector",
          )(),
        )),
        (l = d(
          l,
          i.isEligibleForVideoFilteringUseExistingPost(e, n, a),
          "video_filtering",
          r("adsUEditorGetShouldEnableVideoFilteringByDefaultSelector")(),
        )),
        (l = d(
          l,
          i.isEligibleForVideoUncropUseExistingPost(e, n, a),
          "video_uncrop",
          r("adsUEditorGetShouldEnableVideoUncropByDefaultSelector")(),
        )),
        l
      );
    }
    function d(e, t, n, a) {
      var i;
      if (t) {
        var l,
          s,
          u = a(),
          c =
            u.shouldOptIn &&
            o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(n)
              ? "OPT_OUT"
              : p(u);
        return o("AdsMutators").chain(
          (l = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec) == null
            ? void 0
            : l[n].enroll_status.set(c),
          (s = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec) == null
            ? void 0
            : s[n].action_metadata.type.set(u.optInSource),
        )(e);
      }
      return (i = r("AdsAdgroupRecordAccessors").creative
        .degrees_of_freedom_spec.creative_features_spec) == null
        ? void 0
        : i[n].delete(e);
    }
    function m(e) {
      var t = e;
      return (
        s.forEach(function (n) {
          var r = n.accessor,
            o = n.isFeaturePresent;
          o(e) && (t = r.delete(t));
        }),
        t
      );
    }
    function p(e) {
      return e.shouldOptIn ? "OPT_IN" : "OPT_OUT";
    }
    ((l.setSESubfeatureEnrollStatus = u),
      (l.adsDebundledStandardEnhancementsExistingPostSpecMutator = c),
      (l.adsDeleteSESubfeaturesSpecMutator = m));
  },
  98,
);
