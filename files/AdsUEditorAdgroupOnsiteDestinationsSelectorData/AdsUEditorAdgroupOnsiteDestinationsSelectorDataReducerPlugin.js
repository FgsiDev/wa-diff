__d(
  "AdsUEditorAdgroupOnsiteDestinationsSelectorDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupOnsiteDestinationsSelectorDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(
                  a.get(e.id),
                  "Parent ad object data must exist for the adgroup being mutated",
                ),
                i = n.campaign,
                l =
                  t.chosenDestinationID != null &&
                  t.chosenDestinationType != null
                    ? {
                        destinationType: t.chosenDestinationType,
                        destinationValue: t.chosenDestinationID,
                      }
                    : null;
              return o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).updateOnsiteDestinationsWithLinkType(
                e,
                i,
                "website_and_shops",
                {
                  facebookStorefront: null,
                  instagramStorefront: null,
                  storefrontIDs: t.storefrontsIDs,
                },
                l,
                !1,
                !0,
                "MANUAL",
              );
            });
          },
          r("AdsUEditorAdgroupOnsiteDestinationsSelectorDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
