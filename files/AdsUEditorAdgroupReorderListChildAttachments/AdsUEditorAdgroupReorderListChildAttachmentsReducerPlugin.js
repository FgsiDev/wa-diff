__d(
  "AdsUEditorAdgroupReorderListChildAttachmentsReducerPlugin",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupReorderListChildAttachmentsDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
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
            var a = t.adgroupIDs,
              i = t.childAttachmentIDs,
              l = n.plugins;
            return o("AdsMutators").mutateEach(e, a, function (e, t) {
              var n = r("nullthrows")(l.get(t)),
                o = r("AdsAdgroupSemanticFields").childAttachments.get(n, e);
              if (!o) return e;
              var a = i.map(function (e) {
                  return o.get(e);
                }),
                s = o.withMutations(function (e) {
                  return a.reduce(function (e, t, n) {
                    return e.set(n, t);
                  }, e);
                }),
                u = r("AdsAdgroupSemanticFields").childAttachments.isSupported(
                  n,
                  e,
                );
              if (!u) return e;
              var c = r("AdsAdgroupSemanticFields").childAttachments.set(
                  n,
                  e,
                  s,
                ),
                d = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.interactive_components_spec.child_attachments.get(c);
              if (d != null) {
                var m = d.withMutations(function (e) {
                  return i
                    .map(function (t) {
                      return e.get(t);
                    })
                    .reduce(function (e, t, n) {
                      return e.set(n, t);
                    }, e);
                });
                c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.interactive_components_spec.child_attachments.set(
                  m,
                  c,
                );
              }
              return c;
            });
          },
          o("AdsUEditorAdgroupReorderListChildAttachmentsDataActionFlux")
            .actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
