__d(
  "AdsUEditorAdgroupSaveDynamicAdCustomizationsReducerPlugin",
  [
    "AdsDynamicAdCustomizationLanguageMutators",
    "AdsDynamicAdCustomizationLanguageUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSaveDynamicAdCustomizationsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var r = t.draftAdgroup,
                  a = o(
                    "AdsDynamicAdCustomizationLanguageUtils",
                  ).getAddedLanguageCount(r);
                return a > 0
                  ? r
                  : o(
                      "AdsDynamicAdCustomizationLanguageMutators",
                    ).removeCustomizationRuleSpec(r);
              },
            );
          },
          o("AdsUEditorAdgroupSaveDynamicAdCustomizationsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
