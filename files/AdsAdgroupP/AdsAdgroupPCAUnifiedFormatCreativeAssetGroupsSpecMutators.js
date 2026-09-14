__d(
  "AdsAdgroupPCAUnifiedFormatCreativeAssetGroupsSpecMutators",
  ["AdsAPlusCStickyOptOutUtils", "AdsAdgroupRecordAccessors", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        SINGLE_IMAGE_OR_VIDEO_MANUAL: [
          {
            accessor: (e = r("AdsAdgroupRecordAccessors")).creative
              .degrees_of_freedom_spec.creative_features_spec.add_text_overlay,
            feature: "add_text_overlay",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .image_touchups,
            feature: "image_touchups",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .image_uncrop,
            feature: "image_uncrop",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .inline_comment,
            feature: "inline_comment",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .text_optimizations,
            feature: "text_optimizations",
          },
        ],
        SINGLE_IMAGE_OR_VIDEO_PRODUCT_SET: [
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .text_translation,
            feature: "text_translation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .adapt_to_placement,
            feature: "adapt_to_placement",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .description_automation,
            feature: "description_automation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .enhance_cta,
            feature: "enhance_cta",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .hide_price,
            feature: "hide_price",
          },
        ],
        CAROUSEL: [
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .text_translation,
            feature: "text_translation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .adapt_to_placement,
            feature: "adapt_to_placement",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .description_automation,
            feature: "description_automation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .enhance_cta,
            feature: "enhance_cta",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .hide_price,
            feature: "hide_price",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .standard_enhancements,
            feature: "standard_enhancements",
          },
        ],
        COLLECTION: [
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .text_translation,
            feature: "text_translation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .adapt_to_placement,
            feature: "adapt_to_placement",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .description_automation,
            feature: "description_automation",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .enhance_cta,
            feature: "enhance_cta",
          },
          {
            accessor:
              e.creative.degrees_of_freedom_spec.creative_features_spec
                .hide_price,
            feature: "hide_price",
          },
        ],
      };
    function u(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
        t ? "USER_ENROLLED_AUTOFLOW" : "DISABLED",
        e,
      );
    }
    function c(e, t) {
      var n = [
          "SINGLE_IMAGE_OR_VIDEO_MANUAL",
          "SINGLE_IMAGE_OR_VIDEO_PRODUCT_SET",
          "CAROUSEL",
          "COLLECTION",
        ],
        r = e;
      r = u(r, t);
      var a = new Map();
      for (var i of n)
        for (var l of s[i]) {
          var c = l.accessor,
            m = l.feature;
          a.set(m, c);
        }
      for (var p of a) {
        var _ = p[0],
          f = p[1];
        (t &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(_)) ||
          (r = f.enroll_status.set(t ? "OPT_IN" : "OPT_OUT", r));
      }
      return (n.includes("SINGLE_IMAGE_OR_VIDEO_MANUAL") && (r = d(r, t)), r);
    }
    function d(e, t) {
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.audios.set(
        r("immutable").fromJS([
          t
            ? r("immutable").Map({ type: "random" })
            : r("immutable").Map({ type: "opted_out" }),
        ]),
        e,
      );
    }
    l.setDOFToggleSpecForPCAU = c;
  },
  98,
);
