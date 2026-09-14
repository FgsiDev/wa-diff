__d(
  "AdsUEditorAdgroupSetChildMarketingMessageDescriptionReducerPlugin",
  [
    "invariant",
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildMarketingMessageDescriptionActionFlux",
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
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var o = t.childIndex,
                  i = t.description,
                  l = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).marketingMessageSpec.get(e, r("nullthrows")(a.get(n)), o);
                return l.supported ? e.setIn(l.path, { description: i }) : e;
              },
            );
          },
          r("AdsUEditorAdgroupSetChildMarketingMessageDescriptionActionFlux")
            .actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
