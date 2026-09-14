__d(
  "AdsUEditorAdgroupSetChildDisplayLinkReducerPlugin",
  [
    "invariant",
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildDisplayLinkActionFlux",
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
            var a = n.plugins,
              i = t.childIndex,
              l = t.displayLink;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(a.get(t)),
                  o = e,
                  s = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).callToActionCaption.get(o, n, i);
                s.supported && (o = o.deleteIn(s.path));
                var u = r("AdsAdgroupChildAttachmentsFields").caption.get(
                  o,
                  n,
                  i,
                );
                return u.supported ? o.setIn(u.path, l) : o;
              },
            );
          },
          o("AdsUEditorAdgroupSetChildDisplayLinkActionFlux").actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
