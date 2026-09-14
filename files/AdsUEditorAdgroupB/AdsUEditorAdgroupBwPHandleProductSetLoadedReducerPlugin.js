__d(
  "AdsUEditorAdgroupBwPHandleProductSetLoadedReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorBwPProductSetLoadedActionFlux",
    "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        defaultProductLoadObjectsSetByAdgroupID: r(
          "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
        ),
      },
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          e,
          function (e, t, n) {
            var a = n.defaultProductLoadObjectsSetByAdgroupID;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n, o;
                return ((n = e.creative) == null ? void 0 : n.product_set_id) ==
                  null
                  ? r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
                      (o = a.get(t)) == null || (o = o.getValue()) == null
                        ? void 0
                        : o.id,
                      e,
                    )
                  : e;
              },
            );
          },
          r("AdsUEditorBwPProductSetLoadedActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
