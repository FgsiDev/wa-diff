__d(
  "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAppDeepLinkSelectorDataActionFlux",
    "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupSetAppDeepLinkSelectorReducerUtils",
              ).setAppDeepLinkSelectorReducerPluginMutator(e, t.appID);
            });
          },
          o("AdsUEditorAdgroupSetAppDeepLinkSelectorDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
