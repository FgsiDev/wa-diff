__d(
  "AdsDPATextGenUtils",
  ["AdsChildAttachmentsUtils", "AdsDynamicAdsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /{{\s*([^}]+)\s*\.([^}]+)\s*}}/,
      s = function (t) {
        return u(t) && d();
      },
      u = function (t) {
        return !(
          t == null ||
          !o("AdsDynamicAdsUtils").isDynamicAd(t) ||
          !o("AdsChildAttachmentsUtils").isCarouselAd(t)
        );
      },
      c = function (n) {
        return e.test(n != null ? n : "");
      },
      d = function () {
        return !0;
      };
    ((l.isDynamicAdAndEligibleForTextGenQE = s),
      (l.isEligibleDPA = u),
      (l.isDPATemplateUsed = c));
  },
  98,
);
