__d(
  "AdsUEditorAdgroupSetCallToActionMessengerDestinationPageReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCallToActionDestinationPageDataActionFlux",
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
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.specPlugin;
                return t.destinationPage === null
                  ? o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueAppDestinationPageID(e, l)
                  : o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueAppDestinationPageID(
                      e,
                      l,
                      t.destinationPage,
                    );
              },
            );
          },
          o("AdsUEditorAdgroupSetCallToActionDestinationPageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
