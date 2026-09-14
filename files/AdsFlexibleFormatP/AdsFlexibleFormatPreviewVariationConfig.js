__d(
  "AdsFlexibleFormatPreviewVariationConfig",
  [
    "AdsAdvancedPreviewVariationBuilder",
    "AdsAutomaticFlowUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsTransformationFormatLabelConstants",
    "JSResourceForInteraction",
    "gkx",
    "lazyLoadComponent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "AdsAdvancedPreviewV2SACarouselAsCollectionTooltip.react",
        ).__setRef("AdsFlexibleFormatPreviewVariationConfig"),
      ),
      u = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "AdsAdvancedPreviewV2SACarouselAsSingleMediaTooltip.react",
        ).__setRef("AdsFlexibleFormatPreviewVariationConfig"),
      ),
      c = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "AdsAdvancedPreviewV2SACarouselAsVideoSlideshowTooltip.react",
        ).__setRef("AdsFlexibleFormatPreviewVariationConfig"),
      ),
      d = o("AdsAdvancedPreviewVariationBuilder").createVariationBuilder(),
      m = d.withCustomPills([
        {
          icon: "none",
          label: (e = o("AdsTransformationFormatLabelConstants"))
            .COLLECTION_FORMAT_LABEL,
          Tooltip: s,
        },
      ]),
      p = d.withCustomPills([
        { icon: "none", label: e.SINGLE_MEDIA_FORMAT_LABEL, Tooltip: u },
      ]),
      _ = d.withCustomPills([
        { icon: "none", label: e.VIDEO_SLIDESHOW_FORMAT_LABEL, Tooltip: c },
      ]),
      f = d.withCustomPills([{ icon: "none", label: e.COLLAGE_FORMAT_LABEL }]);
    function g() {
      return m.aco({ optimizationType: 280, optionValue: 2800003 }).gen();
    }
    function h() {
      return f.aco({ optimizationType: 226, optionValue: 830003 }).gen();
    }
    function y() {
      return f.aco({ optimizationType: 536, optionValue: 830003 }).gen();
    }
    function C(e) {
      return (e === void 0 && (e = "catalog"), e === "site_links" ? y() : h());
    }
    function b() {
      return m.aco({ optimizationType: 129, optionValue: 1290002 }).gen();
    }
    function v(e, t, n) {
      return e == null ||
        t == null ||
        o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasVideo(e, t) ||
        n !== "sa_carousel"
        ? !1
        : o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasAtLeastXImages(
            e,
            t,
            5,
          );
    }
    function S() {
      return p.aco({ optimizationType: 197, optionValue: 1970003 }).gen();
    }
    function R() {
      return p.aco({ optimizationType: 83, optionValue: 830001 }).gen();
    }
    function L() {
      return _.aco({ optimizationType: 129, optionValue: 1290001 }).gen();
    }
    function E(e, t, n) {
      return e == null ||
        t == null ||
        o("AdsFlexibleFormatAdexUtils").isInC2VBlocklist() ||
        n !== "sa_carousel" ||
        o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasVideo(e, t)
        ? !1
        : o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasAtLeastXImages(
            e,
            t,
            4,
          );
    }
    function k(e, t, n) {
      return e == null ||
        t == null ||
        n !== "sa_carousel" ||
        o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasVideo(e, t)
        ? !1
        : o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasAtLeastXImages(
            e,
            t,
            3,
          );
    }
    function I(e, t, n, a) {
      return e == null ||
        t == null ||
        n !== "sa_carousel" ||
        (!o("AdsFlexibleFormatAdexUtils").passGKForC2V() &&
          o("AdsFlexibleFormatAdexUtils").isInC2VBlocklist()) ||
        (a !== !0 && !r("gkx")("16605")) ||
        o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasVideo(e, t)
        ? !1
        : o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasAtLeastXImages(
            e,
            t,
            2,
          );
    }
    function T() {
      return f.aco({ optimizationType: 197, optionValue: 830003 }).gen();
    }
    function D() {
      return f.aco({ optimizationType: 81, optionValue: 830003 }).gen();
    }
    function x(e, t, n) {
      return n !== "epa_multi_medias" ||
        o("AdsFlexibleFormatAdexUtils").isExcludedFromEPACollageRollout() ||
        !o("AdsFlexibleFormatAdexUtils").isEligibleForEPAMultiMediaSurface(e, t)
        ? !1
        : (t != null ? t : 0) >=
            o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT;
    }
    function $(e, t, n) {
      return e == null ||
        t == null ||
        !o("AdsFlexibleFormatAdexUtils").passGKForCollage() ||
        n !== "sa_carousel" ||
        o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasVideo(e, t)
        ? !1
        : o("AdsFlexibleFormatPacCarouselUtils").fdoCarouselHasAtLeastXImages(
            e,
            t,
            o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT,
          );
    }
    function P(e, t, n) {
      return e == null ||
        t !== "sa_single_image" ||
        o("AdsFlexibleFormatAdexUtils").isExcludedFromSASingleCollageRollout()
        ? !1
        : o("AdsFlexibleFormatAdexUtils").passGKForSASingleCollage(n);
    }
    function N(e) {
      return !(
        e == null ||
        (o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e) &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0))
      );
    }
    function M() {
      return o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)
        ? d
        : o("AdsAdvancedPreviewVariationBuilder")
            .createVariationBuilder.forCreativeOptimizationKey(
              "ffCarouselFormat",
            )
            .withCustomPills([
              {
                icon: "none",
                label: o("AdsTransformationFormatLabelConstants")
                  .VIDEO_SLIDESHOW_FORMAT_LABEL,
                Tooltip: c,
              },
            ]);
    }
    function w() {
      return M().aco({ optimizationType: 129, optionValue: 1290001 }).gen();
    }
    function A() {
      return M().aco({ optimizationType: 129, optionValue: 1290014 }).gen();
    }
    function F() {
      return d.aco({ optimizationType: 534, optionValue: 5340001 }).gen();
    }
    function O() {
      return d.aco({ optimizationType: 534, optionValue: 5340002 }).gen();
    }
    ((l.getAppInfoToCarouselVariation = F),
      (l.getAppInfoToVideoSlideshowVariation = O),
      (l.getDASingleMediaFormatLiquidityVariation = R),
      (l.getEPAMultiPhotoToCollageVariation = D),
      (l.getSACarouselToCollageVariation = T),
      (l.getSACarouselToSingleMediaVariation = S),
      (l.getSingleImagePEToCollageVariation = h),
      (l.getSingleImageToCollageVariation = C),
      (l.getSingleImageWHToCollageVariation = y),
      (l.getSACarouselToVideoCollectionVariation = b),
      (l.getSACarouselToVideoSlideshowVariation = L),
      (l.getSACarouselToStaticCollectionVariation = g),
      (l.getSEToVideoVariant = w),
      (l.getWHToVideoVariant = A),
      (l.isEligibleForEPAMultiPhotoToCollage = x),
      (l.isEligibleForSACarouselToCollage = $),
      (l.isEligibleForSACarouselToSingleMedia = k),
      (l.isEligibleForSACarouselToStaticCollection = v),
      (l.isEligibleForSACarouselToVideoCollection = E),
      (l.isEligibleForSACarouselToVideoSlideshow = I),
      (l.isEligibleForSASingleToCollage = P),
      (l.isEligibleForSEToVideo = N));
  },
  98,
);
