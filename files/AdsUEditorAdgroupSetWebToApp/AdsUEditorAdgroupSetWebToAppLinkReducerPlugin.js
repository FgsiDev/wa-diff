__d(
  "AdsUEditorAdgroupSetWebToAppLinkReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebToAppUrlActionFlux",
    "AdsUEditorWebToAppMutators",
    "ads-lib-urllib",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = (n = r("ads-lib-urllib").cleanupUrl(t.link)) != null ? n : "";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsUEditorWebToAppMutators").setWebToAppFields(
                e,
                t.isPCE,
                a,
              );
            });
          },
          o("AdsUEditorAdgroupSetWebToAppUrlActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
