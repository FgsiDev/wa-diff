__d(
  "AdsFormatTransformationRelatedMediaPlugin",
  [
    "AdsFlexibleFormatConstants",
    "AdsFormatTransformationUtils",
    "DAFlexibleFormatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "format_transformation/data_source",
        key: "related_media",
        getDescription: function (t) {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsSelected: function (n, r) {
          return r != null &&
            n.isEligibleForDACarouselNewDesign &&
            n.adObjectsList.every(function (e) {
              return o("DAFlexibleFormatUtils").hasRelatedMedia(e.adgroup);
            })
            ? o("AdsFormatTransformationUtils").shouldSelectDataSource(
                n,
                r,
                e.key,
              )
            : !1;
        },
        getIsEligible: function (t, n) {
          return t.uxVersion === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            t.originalFormat === "da_carousel" &&
            (n === "single_media" || n === "da_collection")
            ? !1
            : !!(
                (n === "single_media" || n === "da_collection") &&
                t.isEligibleForDACarouselNewDesign &&
                t.adObjectsList.every(function (e) {
                  return o("DAFlexibleFormatUtils").hasRelatedMedia(e.adgroup);
                })
              );
        },
        getTitle: function () {
          return o("AdsFlexibleFormatConstants").RELATED_MEDIA_LABEL;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
