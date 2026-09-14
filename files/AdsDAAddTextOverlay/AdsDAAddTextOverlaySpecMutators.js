__d(
  "AdsDAAddTextOverlaySpecMutators",
  [
    "AdsAPIAdgroupPaths",
    "AdsCreativeFormatMutatorUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsDynamicAdCustomizationFieldMutators",
    "AdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          return e.setIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .IMAGE_LAYER_SPECS,
            t,
          );
        },
        function (e) {
          return o("AdsCreativeFormatMutatorUtils").mutateCreativeTextType(
            e,
            "TEMPLATE",
          );
        },
        function (e) {
          return o(
            "AdsDynamicAdCustomizationAssetFeedUtils",
          ).isAssetFeedBasedMMDA(e)
            ? o(
                "AdsDynamicAdCustomizationFieldMutators",
              ).fixTemplateDataForAssetFeedMMDALegacyFields(e)
            : e;
        },
      )(e);
    }
    function s(e) {
      return o("AdsMutators").chain(
        function (e) {
          return e.deleteIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
              .IMAGE_LAYER_SPECS,
          );
        },
        function (e) {
          return o(
            "AdsDynamicAdCustomizationAssetFeedUtils",
          ).isAssetFeedBasedMMDA(e)
            ? o(
                "AdsDynamicAdCustomizationFieldMutators",
              ).fixTemplateDataForAssetFeedMMDALegacyFields(e)
            : e;
        },
      )(e);
    }
    ((l.setImageLayerSpecMutator = e), (l.removeImageLayerSpecMutator = s));
  },
  98,
);
