__d(
  "AdsUEditorAdgroupSaveTranslationsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsDLOLanguageMutators",
    "AdsDLOLanguageUtils",
    "AdsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSaveLanguageTranslationsDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "adsPlacementAssetMutationRemoveCustomizationImage",
    "adsUEditorAccountSelector",
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
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n));
                if (t.errorCodes.length !== 0) return e;
                var s = t.draftAdgroup,
                  u = o(
                    "AdsDLOLanguageUtils",
                  ).getAddedLanguagesCountFromAdgroup(s);
                if (u === 0)
                  s = o("AdsDLOLanguageMutators").removeAdgroupTranslations(
                    s,
                    l,
                  );
                else {
                  var c,
                    d =
                      (c = s.creative) == null ||
                      (c = c.asset_feed_spec) == null ||
                      (c = c.images) == null ||
                      (c = c.filter(function (e) {
                        return e.get("interactive_components_spec") != null;
                      })) == null
                        ? void 0
                        : c.map(function (e) {
                            return e.getIn(["adlabels"]);
                          });
                  if (d != null) {
                    var m;
                    ((s = d.reduce(function (e, t) {
                      return t.reduce(function (e, t) {
                        return r(
                          "adsPlacementAssetMutationRemoveCustomizationImage",
                        )(
                          e,
                          l,
                          t.get("name"),
                          "REMOVE_CUSTOMIZATION_IMAGE",
                          !0,
                          !1,
                          a,
                        );
                      }, e);
                    }, s)),
                      ((m = s.creative) == null
                        ? void 0
                        : m.instant_checkout_setting) != null &&
                        (s = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.instant_checkout_setting.delete(s)));
                  }
                }
                return (
                  (s = r("AdsAdgroupRecordAccessors").creative.set(
                    s.creative,
                    e,
                  )),
                  (s = o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).mayRemoveCAGandMSSpecForRelatedMedia(s)),
                  o(
                    "AdsUEditorAdgroupUpcomingEventsMutator",
                  ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                    s,
                    o("AdsUEditorAdgroupUpcomingEventsMutator")
                      .ResetUpcomingEventSpecReason.DLO_ENABLED,
                  )
                );
              },
            );
          },
          o("AdsUEditorAdgroupSaveLanguageTranslationsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
