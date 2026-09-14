__d(
  "AdsUEditorAdgroupCreativeContainerApplyChangesReducerPlugin",
  [
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsCreativeContainerApplyChangesActionFlux",
    "AdsCreativeContainerUIContextDataProvider",
    "AdsCreativeContainerUIContextRecord",
    "AdsCreativeToolChangeSetRecord",
    "AdsInteractiveComponentConstants",
    "AdsMutators",
    "AdsSelectedPreviewLoadScenarioLogger",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupInteractiveCTAStickerAdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "QPLUserFlow",
    "adsInteractiveComponentsUtils",
    "immutable",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            creativeContainerContext: r(
              "AdsCreativeContainerUIContextDataProvider",
            ).toFluxSelector(),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.creativeContainerContext,
              l = e.findKey(function (e, n) {
                var r = t.adgroups.find(function (e) {
                  return e.id === n;
                });
                return (
                  r != null &&
                  e.hasValue() &&
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(r) &&
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(
                    e.getValueEnforcing(),
                  )
                );
              });
            (l != null &&
              o("AdsSelectedPreviewLoadScenarioLogger").startScenario(
                "switch_to_pac",
                i.id,
                t.adgroupIDs,
              ),
              r("QPLUserFlow").endSuccess(r("qpl")._(270217878, "7385"), {
                annotations: {
                  bool: {
                    adgroup_has_tags: t.adgroups.some(function (e) {
                      return o(
                        "adsInteractiveComponentsUtils",
                      ).adgroupHasInteractiveComponents(
                        e,
                        o("AdsInteractiveComponentConstants")
                          .SHOPPING_PRODUCT_TAG,
                      );
                    }),
                  },
                },
              }));
            var s = a.get(t.sessionID);
            s == null &&
              (s = new (r("AdsCreativeContainerUIContextRecord"))({
                draftChanges: new (r("AdsCreativeToolChangeSetRecord"))(),
                toolsEdited: r("immutable").Set(),
              }));
            var u = s.draftChanges.media_music,
              c = s.toolsEdited;
            if (
              c != null &&
              c.size === 1 &&
              c.contains("media_music") &&
              u != null
            )
              return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var t = e;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupAudiosAdsMutators",
                    ).maybeUpdateAudios(e, u.type, u.selected_audios);
                  },
                  function (e) {
                    return o(
                      "AdsAdgroupGenerativeAssetSpecMutators",
                    ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(t, e);
                  },
                )(e);
              });
            var d = s.draftChanges.interactive_cta_sticker;
            return c != null &&
              c.size === 1 &&
              c.contains("interactive_cta_sticker") &&
              d != null &&
              l != null
              ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var t = e;
                  return o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsUEditorAdgroupInteractiveCTAStickerAdsMutators",
                      ).maybeUpdateInteractiveCTASticker(
                        e,
                        d == null ? void 0 : d.positionSpec,
                        d == null ? void 0 : d.styleSpec,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsAdgroupGenerativeAssetSpecMutators",
                      ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(t, e);
                    },
                  )(e);
                })
              : c != null &&
                  c.size === 1 &&
                  c.contains("accessibility_image_alt_text")
                ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                    var t = e;
                    return o(
                      "AdsAdgroupGenerativeAssetSpecMutators",
                    ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(t, e);
                  })
                : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, n) {
                    var a = e,
                      i = t.adgroups.find(function (e) {
                        return e.id === n;
                      }),
                      l = o(
                        "AdsAdgroupGenerativeAssetSpecMutators",
                      ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(
                        a,
                        i != null ? i : e,
                      );
                    if (
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.additional_data.is_click_to_message.get(
                        e,
                      )
                    ) {
                      var s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.call_to_actions.get(e);
                      if (s != null)
                        return r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.call_to_actions.set(s, l);
                    }
                    return l;
                  });
          },
          o("AdsCreativeContainerApplyChangesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
