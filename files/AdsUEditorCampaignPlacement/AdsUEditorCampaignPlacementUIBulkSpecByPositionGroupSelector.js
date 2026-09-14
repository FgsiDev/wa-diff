__d(
  "AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector",
  [
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementUISpecCreateUtils",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "areEqual",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [o("AdsUEditorCampaignSelectors").eligibilityInformationArray],
        function (t) {
          return u(t);
        },
        {
          equal: e || (e = r("areEqual")),
          name:
            i.id +
            ".AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector",
        },
      );
    function u(e) {
      if (e == null || e.length === 0) return null;
      var t = o("AdsPlacementUISpecCreateUtils").createUISpecByPositionGroup(
        o("AdsPlacementPositionGroupPluginList").getOrderedPositionGroups(
          r("firstx")(e),
        ),
        r("firstx")(e),
      );
      return e.reduce(function (e, t) {
        var n = o("AdsPlacementUISpecCreateUtils").createUISpecByPositionGroup(
          o("AdsPlacementPositionGroupPluginList").getOrderedPositionGroups(t),
          t,
        );
        return e.mergeWith(
          o("AdsPlacementUISpecCreateUtils").mergePlatformsSpec,
          n,
        );
      }, t);
    }
    ((l.AdsUEditorCampaignPlacementUIBulkSpecByPositionGroupSelector = s),
      (l.getPlacementUISpecByPositionGroup = u));
  },
  98,
);
