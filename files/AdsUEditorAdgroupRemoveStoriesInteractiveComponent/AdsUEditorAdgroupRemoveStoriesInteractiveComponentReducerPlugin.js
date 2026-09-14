__d(
  "AdsUEditorAdgroupRemoveStoriesInteractiveComponentReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveStoriesInteractiveComponentDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
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
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = i.get(n);
                if (l == null) return e;
                var s = e,
                  u = a.objective;
                return (
                  u !== r("AdsAPIObjectives").APP_INSTALLS &&
                    (s = o(
                      "AdsInteractivePollLinkUtils",
                    ).updateAdgroupWebsiteLink(
                      s,
                      l,
                      t.canUsePacOptionalLinks,
                      !!t.hasPollOptionLink,
                    )),
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.interactive_components_spec.delete(s)
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveStoriesInteractiveComponentDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
