__d(
  "AdsUEditorAdgroupMessageMarketingUpstreamSettingsClearSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingClearSettingsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "clearMessageMarketingAdgroupMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            specPathPlugins: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.specPathPlugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return r("clearMessageMarketingAdgroupMutator")(
                e,
                (n = t.isBulkEdit) != null ? n : !1,
                a.get(e.id),
              );
            });
          },
          [
            r("AdsUEditorAdgroupMessageMarketingClearSettingsActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
