__d(
  "AdsDAAdaptImagesMutators",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      aspect_ratio_config: {
        ar_4_5: {
          adapt: {
            enroll_status: "OPT_IN",
            action_metadata: { type: "DEFAULT" },
          },
        },
        ar_9_16: {
          adapt: {
            enroll_status: "OPT_IN",
            action_metadata: { type: "DEFAULT" },
          },
        },
      },
      image_crop_style: "AUTO",
    };
    function s(e, t) {
      return o("AdsMutators").chain.apply(
        o("AdsMutators"),
        [
          r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
            .creative_features_spec.adapt_to_placement.customizations.delete,
        ].concat(
          Object.entries(t != null ? t : {}).map(function (e) {
            var t = e[0],
              n = e[1];
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.customizations[
              t
            ].set(n);
          }),
        ),
      )(e);
    }
    function u(t) {
      if (
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "adapt_to_placement",
        )
      )
        return t;
      var n = o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.enroll_status.set(
            "OPT_IN",
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.action_metadata.type.set(
            "DEFAULT",
            e,
          );
        },
        function (t) {
          return s(t, e);
        },
      )(t);
      return (r("justknobx")._("2510") && (n = d(n)), n);
    }
    function c(e) {
      return o("AdsMutators").chain(function (e) {
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.adapt_to_placement.delete(
          e,
        );
      })(e);
    }
    function d(e) {
      var t = r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.image_layer_specs,
        n = t.get(e);
      if (n == null) return e;
      var o = n.some(function (e) {
        return e.get("layer_type") !== "image";
      });
      return o
        ? t.set(
            n.map(function (e) {
              return e.get("layer_type") === "image"
                ? e.delete("crop_image").delete("pad_image")
                : e;
            }),
            e,
          )
        : t.delete(e);
    }
    ((l.mutateCreativeFeatureCustomizationsForAdaptToPlacement = s),
      (l.daAdaptImagesDefaultInMutator = u),
      (l.daAdaptImagesRemoveOptInMutator = c));
  },
  98,
);
