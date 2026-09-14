__d(
  "AdsUEditorAdgroupPlacementAddToCustomizationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCampaignPlacementAddToCustomizationDataActionFlux",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorHostIDs",
    "adsContainsAssetCustomizationPlacement",
    "adsUEditorAccountSelector",
    "cr:38060",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").List();
    function u(e) {
      var t = "image";
      return (
        o("AdsAssetFeedUtils").hasPostFormat(e)
          ? (t = "post")
          : o("AdsAssetFeedUtils").hasCarouselFormat(e)
            ? (t = "carousel")
            : o("AdsAdgroupTypeUtils").isVideoAd(e) && (t = "video"),
        t
      );
    }
    function c(e) {
      var t;
      return (
        e === "post"
          ? (t = "post_label")
          : e === "carousel"
            ? (t = "carousel_label")
            : e === "image"
              ? (t = "image_label")
              : (t = "video_label"),
        t
      );
    }
    function d(e) {
      if (e.positionKey != null) {
        var t = o(
          "AdsPlacementAssetPluginUtils",
        ).getPositionPluginForPlacementPosition(e.positionKey);
        if (t != null) return [t];
      } else {
        if (e.platformKey != null)
          return o(
            "AdsPlacementAPISpecDefaultsUtils",
          ).getEligiblePositionPluginsForPlatform(
            e.platformKey,
            e.eligibilityInformation,
          );
        if (e.positionGroupKey != null)
          return o(
            "AdsPlacementPositionGroupPluginList",
          ).getEligiblePositionsFromPositionGroup(
            e.positionGroupKey,
            e.eligibilityInformation,
          );
      }
    }
    function m(e) {
      return e == null
        ? void 0
        : e.some(function (e) {
            return (
              e.key ===
              r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin").key
            );
          });
    }
    function p(t) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return n("cr:38060").dispatch(
          { adgroupIDs: [t], hostID: r("AdsUEditorHostIDs").EDITING },
          {
            line: "123",
            module:
              "AdsUEditorAdgroupPlacementAddToCustomizationReducerPlugin.js",
            moduleID: i.id,
          },
        );
      });
    }
    var _ = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i = d(t);
              if (
                (r("gkx")("13496") && m(i) && p(e.id),
                !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
              )
                return e;
              var l =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.asset_customization_rules,
                _ = u(e),
                f = o("AdsPlacementAssetUtils").getFirstAssetLabels(e, _),
                g = e;
              if (f != null && f.size !== 0 && i) {
                var h,
                  y = i.map(function (e) {
                    return {
                      platform: t.platformKey || e.platformKey,
                      position: String(e.apiPosition),
                    };
                  }),
                  C =
                    (h =
                      l == null
                        ? void 0
                        : l.flatMap(function (e) {
                            return o(
                              "AdsPlacementAssetTargetingRuleUtils",
                            ).convertTargetingRuleToPlacementList(e);
                          })) != null
                      ? h
                      : s;
                y = y.filter(function (e) {
                  return (
                    o(
                      "AdsPlacementAssetEligibilityUtils",
                    ).isEligiblePlacementForPlacementAssetCustomizationPhase2(
                      e,
                      a.capabilities,
                    ) && !r("adsContainsAssetCustomizationPlacement")(C, e)
                  );
                });
                var b = c(_),
                  v = o(
                    "AdsPlacementAssetTargetingRuleUtils",
                  ).movePlacementsInTargetingRules(
                    l || r("immutable").List(),
                    b,
                    f.first(),
                    r("immutable").List(y),
                  ).updatedTargetingRules;
                g = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.asset_customization_rules.set(v, e);
              }
              return g;
            });
          },
          o("AdsCampaignPlacementAddToCustomizationDataActionFlux").actionType,
        ),
      },
      f = _;
    l.default = f;
  },
  98,
);
