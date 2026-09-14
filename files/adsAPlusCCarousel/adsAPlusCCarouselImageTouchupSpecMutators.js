__d(
  "adsAPlusCCarouselImageTouchupSpecMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsInstagramApplicabilityUtils",
    "AdsMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.delete(
        e,
      );
    }
    function s(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.enroll_status.set(
          t.shouldOptIn ? "OPT_IN" : "OPT_OUT",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.action_metadata.type.set(
          t.optInSource,
        ),
      )(e);
    }
    function u(t, n, a) {
      var i,
        l = o(
          "AdsAutomaticFlowUtils",
        ).isEligibleForAutomaticFlowLiteUseStaticCarouselTest(t, n),
        u = r("AdsInstagramApplicabilityUtils").hasInstagramStreamPlacement(
          n.campaign,
        ),
        c = o("AdsChildAttachmentsUtils").isStaticCarouselAd(n.adgroup) && u,
        d = !!(
          (i = n.adgroup.creative) != null &&
          (i = i.degrees_of_freedom_spec) != null &&
          (i = i.creative_features_spec) != null &&
          i.image_touchups
        ),
        m = n.adgroup;
      return l && c && !d ? s(m, a()) : (!l || !c) && d ? e(m) : m;
    }
    ((l.adsDeleteCarouselImageTouchupSpecMutator = e),
      (l.adsCarouselImageTouchupSpecMutator = u));
  },
  98,
);
