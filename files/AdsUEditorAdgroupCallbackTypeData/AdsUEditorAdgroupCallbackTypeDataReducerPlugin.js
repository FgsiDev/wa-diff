__d(
  "AdsUEditorAdgroupCallbackTypeDataReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCallbackMutator",
    "AdsUEditorAdgroupCallbackTypeDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorAccountSelector",
    "nullthrows",
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
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = t.callbackType;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(a.get(t)),
                  l = n.specPlugin;
                if (
                  i === "callback_msg" ||
                  i === "callback_form" ||
                  i === "callback_not_enabled"
                ) {
                  var s = r("AdsAdgroupSemanticFields").phoneDataID.delete(
                    l,
                    e,
                  );
                  return o("AdsUEditorAdgroupCallbackMutator").setCallbackType(
                    s,
                    i,
                  );
                }
                return o("AdsUEditorAdgroupCallbackMutator").cleanCallbackType(
                  e,
                );
              },
            );
          },
          r("AdsUEditorAdgroupCallbackTypeDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
