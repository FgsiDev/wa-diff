__d(
  "AdsSAIPBlockingAdgroupIncompatibilityValidators",
  [
    "ABTestSAIPCustomBlockingError",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e)
        ? null
        : o("ABTestSAIPCustomBlockingError").ABTestSAIPCustomBlockingError
            .AD_FORMAT;
    }
    function s(e) {
      var t = e.creative,
        n = c(e);
      return !(o("AdsCollectionsAdUtils").isCollectionsAd(t) || (!n && u(e)));
    }
    function u(e) {
      return (
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
      );
    }
    function c(e) {
      var t;
      return ((t = e.creative) == null ? void 0 : t.product_set_id) == null;
    }
    l.getL1AdFormatValidationError = e;
  },
  98,
);
