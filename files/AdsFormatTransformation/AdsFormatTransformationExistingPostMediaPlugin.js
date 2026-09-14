__d(
  "AdsFormatTransformationExistingPostMediaPlugin",
  [
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFormatTransformationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "format_transformation/data_source",
        key: "existing_post_media",
        getDescription: function (t) {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsEligible: function (t, n) {
          var e, r;
          return n !== "collage" ||
            !o("AdsFlexibleFormatAdexUtils").isEligibleForEPAMultiMediaSurface(
              (e = t.adObjectsList[0]) == null ? void 0 : e.adgroup,
              t.existingPostPhotoCount,
            )
            ? !1
            : ((r = t.existingPostPhotoCount) != null ? r : 0) >=
                o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT;
        },
        getIsSelected: function (n, r) {
          return r == null
            ? !1
            : o("AdsFormatTransformationUtils").shouldSelectDataSource(
                n,
                r,
                e.key,
              );
        },
        getTitle: function (t, n, r) {
          return o("AdsFlexibleFormatConstants").EXISTING_POST_MEDIA_LABEL;
        },
        formatModalPreviewConfig: function (t, n) {
          return t === "collage"
            ? {
                previewDescription: o("AdsFlexibleFormatConstants")
                  .EXISTING_POST_MEDIA_COLLAGE_PREVIEW_DESCRIPTION,
              }
            : {};
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
