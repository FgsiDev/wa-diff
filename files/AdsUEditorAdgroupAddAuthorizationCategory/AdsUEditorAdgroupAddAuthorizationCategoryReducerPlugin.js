__d(
  "AdsUEditorAdgroupAddAuthorizationCategoryReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsConvergenceAdgroupUtils",
    "AdsDLOLanguageUtils",
    "AdsLocalizedPlacementsMutators",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddAuthorizationCategoryDataActionFlux",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        function (e, t, n) {
          var a = n.plugins;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
            var i = r("AdsAccountStore").getSelectedAccount().getValue();
            if (t.adgroupIDs == null || i == null) return e;
            var l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.authorization_category.set(t.category, e);
            if (
              t.category === "POLITICAL" ||
              t.category === "POLITICAL_WITH_DIGITALLY_CREATED_MEDIA"
            ) {
              var u = r("nullthrows")(a.get(n));
              l = s(l, u);
            }
            return (
              (l = o(
                "AdsConvergenceAdgroupUtils",
              ).maybeEnableContextualDiscoveryAdsExperience(l)),
              l
            );
          });
        },
        o("AdsUEditorAdgroupAddAuthorizationCategoryDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.delete(e),
        a = o("AdsDLOLanguageUtils").getAddedLanguagesCountFromAdgroup(n);
      if (
        ((n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.autotranslate.delete(n)),
        a === 0)
      ) {
        var i,
          l =
            (i = n.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.optimization_type;
        switch (l) {
          case r("ApiDynamicCreativeOptimizationTypes").LANGUAGE:
            n = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).convertFromAssetFeedSpec(
              o("AdsAssetFeedUtils").getTargetObjectType(n),
              n,
              r("nullthrows")(t.pivots.objective),
            );
            break;
          case r("ApiDynamicCreativeOptimizationTypes").LOCALIZED_PLACEMENTS:
            n = o(
              "AdsLocalizedPlacementsMutators",
            ).convertLocalizedPlacementsToPAC(n);
        }
      }
      return n;
    }
    var u = e;
    l.default = u;
  },
  98,
);
