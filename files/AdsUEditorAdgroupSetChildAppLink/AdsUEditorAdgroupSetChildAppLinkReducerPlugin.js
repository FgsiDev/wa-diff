__d(
  "AdsUEditorAdgroupSetChildAppLinkReducerPlugin",
  [
    "invariant",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildAppLinkDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "immutable",
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
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var o,
                  i = t.appLink,
                  l = t.childIndex,
                  s = r("nullthrows")(a.get(n)),
                  u = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).callToActionAppLink.get(e, s, l),
                  c = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.template_data.child_attachments.get(
                    e,
                  );
                c =
                  (o = c) == null
                    ? void 0
                    : o.map(function (e, t) {
                        var n;
                        if (t !== l) return e;
                        var o = e,
                          a = o.toJS(),
                          i = (n = a.call_to_action) == null ? void 0 : n.value;
                        if (i == null) {
                          var s;
                          o = o.setIn(
                            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                              .path,
                            r("immutable").Map(
                              ((s = {}), (s.app_link = ""), s),
                            ),
                          );
                        }
                        return o;
                      });
                var d = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.child_attachments.set(
                  c,
                  e,
                );
                return u.supported ? d.setIn(u.path, i) : d;
              },
            );
          },
          o("AdsUEditorAdgroupSetChildAppLinkDataActionFlux").actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
