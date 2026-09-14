__d(
  "AdsUEditorAdgroupSetInteractiveComponentsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetInteractiveComponentsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "immutable",
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
                var i = e;
                t.componentsSpec.size > 0
                  ? (i = o(
                      "AdsUEditorAdgroupUpcomingEventsMutator",
                    ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                      i,
                      o("AdsUEditorAdgroupUpcomingEventsMutator")
                        .ResetUpcomingEventSpecReason
                        .INTERACTIVE_COMPONENT_SPEC_CHANGED,
                    ))
                  : (i = o(
                      "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                    ).removeUpcomingEventMetadataDisabledReason(
                      i,
                      "INTERACTIVE_COMPONENT_COLLISION",
                    ));
                var l = a.get(n);
                if (l == null) return i;
                if (t.assetIndex != null) {
                  var s,
                    u,
                    c = t.assetIndex,
                    d =
                      (s =
                        (u = i.creative) == null ||
                        (u = u.object_story_spec) == null ||
                        (u = u.link_data) == null ||
                        (u = u.child_attachments) == null
                          ? void 0
                          : u.size) != null
                        ? s
                        : 0,
                    m = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.interactive_components_spec.child_attachments.get(
                      i,
                    );
                  return m == null && t.componentsSpec.isEmpty()
                    ? i
                    : ((m = (
                        m != null
                          ? m
                          : r("immutable").List(
                              Array.from({ length: d }, function () {
                                return r("immutable").Map({
                                  components: r("immutable").List(),
                                });
                              }),
                            )
                      ).setIn(
                        [c],
                        r("immutable").Map({ components: t.componentsSpec }),
                      )),
                      m.size < d &&
                        (m = r("immutable")
                          .List(
                            Array.from({ length: d }, function () {
                              return r("immutable").Map({
                                components: r("immutable").List(),
                              });
                            }),
                          )
                          .merge(m)),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.interactive_components_spec.child_attachments.set(
                        m,
                        i,
                      ));
                } else
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.interactive_components_spec.components.set(
                    t.componentsSpec,
                    i,
                  );
              },
            );
          },
          o("AdsUEditorAdgroupSetInteractiveComponentsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
