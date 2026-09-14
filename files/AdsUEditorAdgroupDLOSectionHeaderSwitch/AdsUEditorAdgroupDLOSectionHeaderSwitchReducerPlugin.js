__d(
  "AdsUEditorAdgroupDLOSectionHeaderSwitchReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsDLOLanguageMutators",
    "AdsDynamicAdCustomizationLanguageMutators",
    "AdsMutators",
    "AdsUEditorAdgroupDLOSectionHeaderSwitchActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n));
                return t.isLanguagesSectionSwitchEnabled
                  ? e
                  : o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
                    ? o(
                        "AdsDynamicAdCustomizationLanguageMutators",
                      ).removeCustomizationRuleSpec(e)
                    : o("AdsDLOLanguageMutators").removeAdgroupTranslations(
                        e,
                        i,
                      );
              },
            );
          },
          r("AdsUEditorAdgroupDLOSectionHeaderSwitchActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
