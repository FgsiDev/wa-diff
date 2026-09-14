__d(
  "AdsUEditorAdgroupFacebookExistingPostSetCallToActionTypeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupFacebookExistingPostMutators",
    "AdsUEditorAdgroupFacebookExistingPostSetCallToActionTypeDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                l = r("nullthrows")(i.get(e.id)),
                s = r("nullthrows")(a.get(e.id)),
                u = s.campaign,
                c = (n = u.promoted_object) == null ? void 0 : n.page_id;
              return o(
                "AdsUEditorAdgroupFacebookExistingPostMutators",
              ).setCheckoutAndCTAType(
                e,
                u,
                t.callToActionType,
                t.destinationType,
                l,
                c,
              );
            });
          },
          o(
            "AdsUEditorAdgroupFacebookExistingPostSetCallToActionTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
