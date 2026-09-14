__d(
  "triggerExistingPostCreativeFlexDefaultOn",
  [
    "AdsCreativeFlexDefaultOnDispatchState",
    "AdsCreativeFlexGKCheckUtils",
    "runDeferredCreativeFlexDefaultOn",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      o("AdsCreativeFlexGKCheckUtils").isExistingPostAdDefaultOnEnabled() &&
        o("AdsCreativeFlexGKCheckUtils").isExistingPostAdFlowEnabled() &&
        (!i.isAccountDefaultOnEligible ||
          o("AdsCreativeFlexGKCheckUtils").isStickyRelatedMediaOptOut(
            i.relatedMediaUserOptedOut,
          ) ||
          i.getHasUserOptedOutMedia() === !0 ||
          (o(
            "AdsCreativeFlexDefaultOnDispatchState",
          ).resetCreativeFlexDefaultOnDispatched(n),
          r("runDeferredCreativeFlexDefaultOn")({
            adgroupIDs: n,
            callsite: "existing_post_l1",
            hostID: a,
            isDeferred: !0,
            isStaleAtWriteTime: function () {
              return i.getHasUserOptedOutMedia() === !0;
            },
            relatedMediaQueryInput: t,
            relayEnvironment: e,
            warningMessage:
              "Existing-post default-on fetch failed after a post was put on the ad",
          })));
    }
    l.default = e;
  },
  98,
);
