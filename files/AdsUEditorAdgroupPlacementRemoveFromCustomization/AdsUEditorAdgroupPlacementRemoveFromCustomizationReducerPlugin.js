__d(
  "AdsUEditorAdgroupPlacementRemoveFromCustomizationReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAssetPluginUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsUEditorAdgroupMessageMarketingClearSettingsAction",
    "AdsUEditorAdgroupPlacementRemoveFromCustomizationDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").List();
    function u(e, t) {
      var n,
        r = t != null ? t.get(e.id) : null,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.ad_formats;
      return o("AdsPlacementAssetUtils").getFilteredSupportedPlacements(r, a);
    }
    function c(e) {
      if (e.positionKey) {
        var t = o(
          "AdsPlacementAssetPluginUtils",
        ).getPositionPluginForPlacementPosition(e.positionKey);
        return t == null
          ? s
          : r("immutable").List([
              babelHelpers.extends({}, t, {
                platformKey: e.platformKey || t.platformKey,
              }),
            ]);
      } else
        return e.platformKey != null
          ? o("AdsPlacementAPISpecDefaultsUtils")
              .getEligiblePositionPluginsForPlatform(
                e.platformKey,
                e.eligibilityInformation,
              )
              .toList()
              .map(function (t) {
                return babelHelpers.extends({}, t, {
                  platformKey: e.platformKey || t.platformKey,
                });
              })
          : e.positionGroupKey != null
            ? o("AdsPlacementPositionGroupPluginList")
                .getEligiblePositionsFromPositionGroup(
                  e.positionGroupKey,
                  e.eligibilityInformation,
                )
                .toList()
            : s;
    }
    function d(e) {
      var t = e.apiPosition,
        n = e.platformKey;
      return { platform: n, position: String(t) };
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
    function p(t, n) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return r(
          "AdsUEditorAdgroupMessageMarketingClearSettingsAction",
        ).dispatch(
          { adgroupIDs: [t], hostID: n },
          {
            line: "141",
            module:
              "AdsUEditorAdgroupPlacementRemoveFromCustomizationReducerPlugin.js",
            moduleID: i.id,
          },
        );
      });
    }
    var _ = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = c(t);
                if (
                  (r("gkx")("13496") && m(i) && p(e.id, t.hostID),
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
                )
                  return e;
                var l = r("nullthrows")(a.get(n)),
                  s = i.map(d),
                  _ = u(e, t.adgroupIDToDefaultRulePlacementsMap);
                return r(
                  "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
                )(e, l, s, _);
              },
            );
          },
          o("AdsUEditorAdgroupPlacementRemoveFromCustomizationDataActionFlux")
            .actionType,
        ),
      },
      f = _;
    l.default = f;
  },
  98,
);
