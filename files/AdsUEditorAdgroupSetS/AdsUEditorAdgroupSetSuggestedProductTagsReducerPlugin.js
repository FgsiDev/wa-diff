__d(
  "AdsUEditorAdgroupSetSuggestedProductTagsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsExistingPostProductTagPreservationUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsInteractiveComponentConstants",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsProductTagsAdGroupMutatorUtils",
    "AdsSuggestedProductTagsConstants",
    "AdsSuggestedProductTagsInfoAction",
    "AdsSuggestedProductTagsUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupProductTagsWithProductExtensionsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUIMediaFormat",
    "ApiDynamicCreativeOptimizationTypes",
    "SuggestedProductTagsLoadedActionFlux",
    "SuggestedTagsStateUpdateAction",
    "adsPlacementAssetMutationConvertExistingPostToPACSpecMutator",
    "adsPlacementAssetMutationConvertToPACAutomatic",
    "adsUEditorAccountSelector",
    "adsUEditorAssetGroupsSelector",
    "justknobx",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
          placements: r("adsUEditorAssetGroupsSelector"),
        },
        function (e, t, n) {
          var a = n.account,
            l = n.parentData,
            d = n.placements;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              m = l.get(e.id),
              p = m.campaign,
              _ = m.campaignGroup,
              f = m.specPlugin,
              g = e,
              h =
                (n = g.creative) == null || (n = n.asset_feed_spec) == null
                  ? void 0
                  : n.optimization_type,
              y = !1;
            switch (h) {
              case null:
              case void 0:
              case r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM:
              case r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION:
                y = !1;
                break;
              case r("ApiDynamicCreativeOptimizationTypes").PLACEMENT:
              case r("ApiDynamicCreativeOptimizationTypes")
                .LOCALIZED_PLACEMENTS:
                y = !0;
                break;
              default:
                return g;
            }
            if (
              r("justknobx")._("4166") &&
              o(
                "AdsExistingPostProductTagPreservationUtils",
              ).shouldPreserveExistingPostFromProductTagging(
                g,
                y,
                t.postAssetFeedSpec,
              )
            )
              return g;
            if (t.productTags.value.length > 0) {
              if (t.assetGroups != null) {
                var C = o(
                  "AdsPlacementAssetUtils",
                ).getPlacementsFromAssetGroups(t.assetGroups);
                g = s(g, C, t.productTags, f, t.uiMediaFormat);
              } else {
                var b = o(
                    "AdsSuggestedProductTagsUtils",
                  ).fetchSupportedSurfaces(
                    t.uiMediaFormat === r("AdsUIMediaFormat").SINGLE_VIDEO,
                  ),
                  v = d.toArray();
                if (
                  !v.some(function (e) {
                    return b.includes(e);
                  })
                )
                  return e;
                var S = o(
                    "AdsSuggestedProductTagsUtils",
                  ).fetchSupportedAspectTypeToAdsPreviewFormat(t.uiMediaFormat),
                  R = u(g, t.uiMediaFormat),
                  L = R.adgroupWithoutGlobalProductTags,
                  E = R.globalProductTags;
                ((g = L),
                  !y &&
                  !o(
                    "AdsSuggestedProductTagsUtils",
                  ).EPA_TRIGGER_SOURCES.includes(t.source)
                    ? (g = r("adsPlacementAssetMutationConvertToPACAutomatic")(
                        g,
                        p,
                        f,
                        a,
                        !0,
                      ))
                    : !y &&
                      t.postAssetFeedSpec != null &&
                      (g = r(
                        "adsPlacementAssetMutationConvertExistingPostToPACSpecMutator",
                      )(e, f, t.postAssetFeedSpec, t.assetGroups, a)),
                  S.forEach(function (e, n) {
                    var r = o(
                      "AdsSuggestedProductTagsUtils",
                    ).getEligibleAssetGroup(v, a.capabilities, n);
                    g = o(
                      "AdsProductTagsAdGroupMutatorUtils",
                    ).adsInsertCustomizationAssetGroup(g, f, a, r, t.source);
                    var i = o(
                      "AdsPlacementAssetTargetingRuleUtils",
                    ).getPlacementsFromFormat(e);
                    g = s(g, i, t.productTags, f, t.uiMediaFormat, E);
                  }));
              }
              !o("AdsMetadataConnectedSourcesUtils").isEngagementOnYourAdSetup(
                p,
                _,
              ) &&
                c(t.uiMediaFormat, g) &&
                (g = o(
                  "AdsUEditorAdgroupProductTagsWithProductExtensionsMutators",
                ).mutateAdgroupToEnableProductExtensions(
                  g,
                  t.productTags.productSetID,
                ));
            }
            return (
              r("setTimeout")(function () {
                var e = o(
                  "AdsSuggestedProductTagsUtils",
                ).hasHighConfidenceSuggestions(
                  t.productTags.medium_confidence_tags,
                );
                (t.productTags.value.length !== 0 || e) &&
                  (r("AdsSuggestedProductTagsInfoAction").dispatch(
                    { showInfo: !0, productTags: t.productTags },
                    {
                      line: "254",
                      module:
                        "AdsUEditorAdgroupSetSuggestedProductTagsReducerPlugin.js",
                      moduleID: i.id,
                    },
                  ),
                  r("SuggestedTagsStateUpdateAction").dispatch(
                    {
                      query: t.query,
                      newState: o("AdsSuggestedProductTagsConstants")
                        .SuggestedProductTagState.ADDED,
                    },
                    {
                      line: "258",
                      module:
                        "AdsUEditorAdgroupSetSuggestedProductTagsReducerPlugin.js",
                      moduleID: i.id,
                    },
                  ));
              }, 0),
              g
            );
          });
        },
        r("SuggestedProductTagsLoadedActionFlux").actionType,
      ),
    };
    function s(e, t, n, a, i, l) {
      var s = e;
      if (
        ((s = o(
          "AdsUEditorAdgroupUpcomingEventsMutator",
        ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
          e,
          o("AdsUEditorAdgroupUpcomingEventsMutator")
            .ResetUpcomingEventSpecReason.INTERACTIVE_COMPONENT_SPEC_CHANGED,
        )),
        i && i === r("AdsUIMediaFormat").SINGLE_VIDEO)
      ) {
        var u = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getTargetRuleLabelFromLabelFieldAndPlacement(s, t, "video_label");
        return o(
          "AdsProductTagsAdGroupMutatorUtils",
        ).adsInsertProductTagsForVideoInAdgroup(
          s,
          a,
          o("AdsSuggestedProductTagsUtils").buildInteractiveComponentsSpec(
            n,
            !0,
          ),
          u,
        );
      }
      var c = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getTargetRuleLabelFromLabelFieldAndPlacement(s, t, "image_label");
      return o(
        "AdsProductTagsAdGroupMutatorUtils",
      ).adsInsertProductTagsinAdgroup(
        s,
        a,
        o("AdsSuggestedProductTagsUtils").buildInteractiveComponentsSpec(
          n,
          !1,
          l,
        ),
        c,
      );
    }
    function u(e, t) {
      var n;
      if (!c(t, e))
        return { adgroupWithoutGlobalProductTags: e, globalProductTags: null };
      var a = e,
        i =
          (n = e.creative) == null ||
          (n = n.interactive_components_spec) == null
            ? void 0
            : n.components,
        l =
          i == null
            ? void 0
            : i.filter(function (e) {
                return (
                  e.get("type") ===
                  o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG
                );
              });
      if (l != null && l.size > 0) {
        var s = l.filter(function (e) {
          return (
            e.get("type") !==
            o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG
          );
        });
        s.size === 0
          ? (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.delete(a))
          : (a = r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.components.set(s, a));
      }
      return { adgroupWithoutGlobalProductTags: a, globalProductTags: l };
    }
    function c(e, t) {
      return !(
        (e !== r("AdsUIMediaFormat").SINGLE_VIDEO &&
          e !== r("AdsUIMediaFormat").SINGLE_IMAGE) ||
        o("AdsFlexibleFormatAdexUtils").shouldRemovePEAPlusC(!0, !0, t)
      );
    }
    var d = e;
    l.default = d;
  },
  98,
);
