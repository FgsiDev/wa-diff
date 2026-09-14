__d(
  "AdsUEditorAdgroupSetProfileVisitExtensionTypeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetProfileVisitExtensionTypeDataActionFlux",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
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
                  l = i.specPlugin,
                  s = e;
                t.profileVisitExtensionType !== "none" &&
                  (s = o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
                    s,
                    o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                      .PromoAdDefaultOptOutCallsite.SET_PROFILE_VISIT_EXTENSION,
                  ));
                var u = null;
                switch (t.profileVisitExtensionType) {
                  case "instagram_direct":
                    u = "DIRECT_MESSAGE";
                    break;
                  case "whatsapp":
                    u = "WHATSAPP_MESSAGE";
                    break;
                  default:
                    u = null;
                }
                return o(
                  "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
                ).setProfileVisitExtensionType(s, u, l);
              },
            );
          },
          r("AdsUEditorAdgroupSetProfileVisitExtensionTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
