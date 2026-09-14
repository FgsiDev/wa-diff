__d(
  "AdsAdBuilderMockupCompatibleUtils",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsChildAttachmentsUtils",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetUtils",
    "AdsWildcardAdgroupSpecPathPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).VIDEO_VIEWS,
        e.EVENT_RESPONSES,
        e.PAGE_LIKES,
        e.POST_ENGAGEMENT,
      ];
    function u(e) {
      return (
        r("AdsAdgroupSemanticFields").imageHash.get(
          r("AdsWildcardAdgroupSpecPathPlugin"),
          e,
        ) != null ||
        r("AdsAdgroupSemanticFields").imageURL.get(
          r("AdsWildcardAdgroupSpecPathPlugin"),
          e,
        )
      );
    }
    function c(e, t, n) {
      if (!e) return !0;
      var a = t.objective;
      return (s.includes(a) && o("AdsChildAttachmentsUtils").isCarouselAd(e)) ||
        (u(e) && a === r("AdsAPIObjectives").VIDEO_VIEWS) ||
        (n && o("AdsPlacementAssetUtils").hasPACPhase1or2(e))
        ? !1
        : o(
              "AdsPlacementAssetEligibilityUtils",
            ).isEligibleObjectiveForPlacementAssetCustomizationPhase2(t)
          ? !0
          : !o("AdsPlacementAssetUtils").hasPACPhase1or2(e);
    }
    l.isMockupCompatible = c;
  },
  98,
);
