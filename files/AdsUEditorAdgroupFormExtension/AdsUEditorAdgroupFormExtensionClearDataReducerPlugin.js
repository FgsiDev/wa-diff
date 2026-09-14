__d(
  "AdsUEditorAdgroupFormExtensionClearDataReducerPlugin",
  [
    "AdsLeadGenAdGroupUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupFormExtensionUpdateStateActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
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
            var r = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.checkboxValue != null && t.checkboxValue === !0
                ? e
                : o("AdsMutators").chain(function (e) {
                    return o("AdsLeadGenAdGroupUtils").clearLeadGenFormId(e);
                  })(e);
            });
          },
          o("AdsUEditorAdgroupFormExtensionUpdateStateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
