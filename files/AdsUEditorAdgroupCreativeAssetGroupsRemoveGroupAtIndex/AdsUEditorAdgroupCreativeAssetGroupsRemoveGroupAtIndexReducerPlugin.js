__d(
  "AdsUEditorAdgroupCreativeAssetGroupsRemoveGroupAtIndexReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsSmartPromotion",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeAssetGroupsRemoveGroupAtIndexActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "gkx",
    "isFalsey",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i,
                l,
                s =
                  (n = e.creative_asset_groups_spec) == null ||
                  (n = n.toJS()) == null
                    ? void 0
                    : n.groups;
              if (r("isFalsey")(s) || t.index >= s.length) return e;
              var u = (i = e.creative) == null ? void 0 : i.product_set_id,
                c = r("AdsAdgroupRecordAccessors")
                  .creative_asset_groups_spec.groups.at(t.index)
                  .delete(e),
                d =
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isMediaSourcePCAUnifiedFormat(
                    (l = e.metadata) == null ? void 0 : l.adgroup_media_source,
                  ) &&
                  o(
                    "AdsPCAUnifiedFormatEligibilityUtils",
                  ).isGKEnableForUnifiedMediaSetupFlow();
              if (t.index === 0) {
                var m,
                  p = r("nullthrows")(a.get(c.id)),
                  _ = p.campaign,
                  f = p.campaignGroup,
                  g = p.specPlugin,
                  h = r("AdsAdgroupSemanticFields").callToActionType.get(g, c),
                  y = typeof h == "string" ? h : null,
                  C = r("AdsAdgroupSemanticFields").linkURL.get(g, c),
                  b = typeof C == "string" ? C : "",
                  v =
                    (m = c.creative_asset_groups_spec) == null ||
                    (m = m.toJS()) == null
                      ? void 0
                      : m.groups,
                  S =
                    f.smart_promotion_type ===
                    r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS,
                  R = f.objective === r("AdsAPIObjectives").APP_INSTALLS;
                r("isTruthy")(v) && v.length > 0
                  ? (c = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).updateMediaSpecToCreativeSpec(c, g))
                  : f.objective === "OUTCOME_SALES"
                    ? ((c = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setDefaultCreativeSettingForASCAndBAU(
                        f,
                        _,
                        c,
                        S && y != null
                          ? y
                          : r("gkx")("14839")
                            ? "SEE_DETAILS"
                            : "LEARN_MORE",
                      )),
                      r("isTruthy")(d) &&
                        (c = r("AdsAdgroupSemanticFields").linkURL.set(
                          g,
                          c,
                          b,
                        )))
                    : R &&
                      ((c = o(
                        "AdsAdgroupCreativeAssetGroupsSpecMutators",
                      ).setDefaultCreativeSettingForAppPromotion(
                        c,
                        y != null ? y : "INSTALL_MOBILE_APP",
                      )),
                      (c = r("AdsAdgroupSemanticFields").linkURL.set(g, c, b)));
              }
              if (r("isTruthy")(d)) {
                var L,
                  E = s[t.index].group_type,
                  k = ["carousel", "da_collection", "single_media"],
                  I = "manual_uploads";
                (E === "dynamic" && (I = "catalog"),
                  k.forEach(function (e) {
                    ((c = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                      c,
                      e,
                      I,
                    )),
                      E === "dynamic" &&
                        e !== "single_media" &&
                        (c = o(
                          "AdsAdgroupFormatTransformationMutators",
                        ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                          c,
                          e,
                          "manual_uploads",
                        )));
                  }),
                  ((L = c.creative) == null ? void 0 : L.product_set_id) ==
                    null &&
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.set(u, c)));
              }
              return c;
            });
          },
          r("AdsUEditorAdgroupCreativeAssetGroupsRemoveGroupAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
