__d(
  "AdsUEditorAdgroupSetInstagramLeadGenUserReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetInstagramLeadGenUserDataActionFlux",
    "AdsUEditorInstagramMutators",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = a.get(n);
                if (i == null)
                  return (
                    r("FBLogger")("unified_creation").warn(
                      "Null extra data for adgroup id: %s. Parent data map keys: %s",
                      n,
                      Array.from(a.keys).toString(),
                    ),
                    e
                  );
                var l = i.specPlugin,
                  s = t.app_link;
                return o(
                  "AdsUEditorInstagramMutators",
                ).setAdgroupCreativeForInstagramLeadGen(
                  e,
                  l,
                  t.instagramAccountID,
                  s,
                  t.instagramUserID,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetInstagramLeadGenUserDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
