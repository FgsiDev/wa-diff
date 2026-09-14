__d(
  "AdsWizardMediaPickerVariantUtils",
  ["fbt", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Object.freeze([
      "SQUARE",
      "VERTICAL",
      "FULLSCREEN_VERTICAL",
      "HORIZONTAL",
    ]);
    function u(e) {
      return e === "SQUARE"
        ? s._(/*BTDS*/ "Square")
        : e === "VERTICAL"
          ? s._(/*BTDS*/ "Portrait")
          : e === "FULLSCREEN_VERTICAL"
            ? s._(/*BTDS*/ "Vertical")
            : e === "HORIZONTAL"
              ? s._(/*BTDS*/ "Horizontal")
              : "";
    }
    function c() {
      return s._(/*BTDS*/ "Aspect ratios");
    }
    function d(e, t) {
      return s._(/*BTDS*/ "{width} \u00d7 {height}", [
        s._param(
          "width",
          r("intlNumUtils").formatNumberWithThousandDelimiters(e),
        ),
        s._param(
          "height",
          r("intlNumUtils").formatNumberWithThousandDelimiters(t),
        ),
      ]);
    }
    function m() {
      return s._(/*BTDS*/ "Size variations");
    }
    function p() {
      return s._(/*BTDS*/ "Upload your own");
    }
    function _() {
      return s._(/*BTDS*/ "Edit size variations");
    }
    function f(e) {
      return s._(/*BTDS*/ '_j{"*":"({count} included)"}', [
        s._param("count", e, [0]),
      ]);
    }
    function g() {
      return s._(/*BTDS*/ "(Original media)");
    }
    function h() {
      return s._(/*BTDS*/ "Default padding applied");
    }
    function y() {
      return s._(/*BTDS*/ "Select or upload a crop to avoid media padding");
    }
    function C(e) {
      return e === "original"
        ? s._(/*BTDS*/ "Original media")
        : e === "smart_crop"
          ? s._(/*BTDS*/ "Automatically cropped")
          : e === "padding"
            ? s._(/*BTDS*/ "Automatically padded")
            : e === "recomposition" || e === "uncrop"
              ? s._(/*BTDS*/ "Adjusted with Meta AI")
              : e === "advertiser_uploaded_variant"
                ? s._(/*BTDS*/ "Your upload")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function b(e) {
      return e === "smart_crop";
    }
    function v(e) {
      return e === "original";
    }
    function S(e) {
      return (
        e === "advertiser_uploaded_variant" ||
        e === "padding" ||
        e === "recomposition" ||
        e === "uncrop"
      );
    }
    function R(e) {
      return e === "advertiser_uploaded_variant";
    }
    function L(e) {
      return e === "recomposition" || e === "uncrop";
    }
    ((l.VARIANT_ASPECT_RATIO_TYPES = e),
      (l.getVariantRatioName = u),
      (l.getVariantAspectRatiosLabel = c),
      (l.getVariantMediaDimensionsLabel = d),
      (l.getVariantsHoverCardLabel = m),
      (l.getVariantUploadTileLabel = p),
      (l.getVariantEditPanelLabel = _),
      (l.getVariantIncludedCountLabel = f),
      (l.getVariantOriginalMediaCountLabel = g),
      (l.getVariantDefaultPaddingLabel = h),
      (l.getVariantDefaultPaddingTooltip = y),
      (l.getVariantSourceLabel = C),
      (l.isVariantCroppable = b),
      (l.isOriginalVariantSource = v),
      (l.isRenderedVariantSource = S),
      (l.isAdvertiserVariantSource = R),
      (l.isModelGeneratedVariantSource = L));
  },
  226,
);
