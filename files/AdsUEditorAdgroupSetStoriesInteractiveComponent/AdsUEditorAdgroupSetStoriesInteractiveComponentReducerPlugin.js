__d(
  "AdsUEditorAdgroupSetStoriesInteractiveComponentReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetStoriesInteractiveComponentDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "adsInteractivePollHasFbFeedVideoPollSpec",
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
                var l = i.get(n),
                  s = !!t.hasPollOptionLink;
                if (l == null) return e;
                var u = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.interactive_components_spec.components.set(
                  t.componentsSpec,
                  e,
                );
                if (r("adsInteractivePollHasFbFeedVideoPollSpec")(u, a.spec)) {
                  var c = a.objective;
                  c === r("AdsAPIObjectives").APP_INSTALLS
                    ? (u = o(
                        "AdsInteractivePollLinkUtils",
                      ).updateAppInstallDisplayLink(u, l))
                    : ((u = o(
                        "AdsInteractivePollLinkUtils",
                      ).updateAdgroupWebsiteLink(
                        u,
                        l,
                        t.canUsePacOptionalLinks,
                        s,
                      )),
                      (u = o("AdsInteractivePollLinkUtils").updateDisplayLink(
                        u,
                        l,
                      )));
                }
                return u;
              },
            );
          },
          o("AdsUEditorAdgroupSetStoriesInteractiveComponentDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
