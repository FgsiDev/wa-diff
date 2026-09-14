__d(
  "AdsUEditorAdgroupCleanIGProfileCTADestinationReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsMutators",
    "AdsProfileVisitExtensionTypeUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCleanIGProfileCTADestinationActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(a.get(t)),
                  i = n.specPlugin;
                if (
                  o(
                    "AdsProfileVisitExtensionTypeUtils",
                  ).isProfileVisitWhatsAppExtensionTypeSelected(e)
                ) {
                  var l = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e);
                  return o(
                    "AdsUEditorCallToActionMutators",
                  ).deleteCallToActionValueInstagramProfileDestination(e, i, l);
                }
                return e;
              },
            );
          },
          r("AdsUEditorAdgroupCleanIGProfileCTADestinationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
