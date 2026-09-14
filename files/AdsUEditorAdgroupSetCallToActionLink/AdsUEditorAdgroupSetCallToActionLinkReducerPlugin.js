__d(
  "AdsUEditorAdgroupSetCallToActionLinkReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCallToActionLinkDataActionFlux",
    "AdsUEditorCallToActionMutators",
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
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.specPlugin;
                return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                  ? o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueField(e, l, "link", t.link)
                  : o("AdsUEditorCallToActionMutators").setCallToActionLink({
                      link: t.link,
                      adgroup: e,
                      specPlugin: l,
                    });
              },
            );
          },
          o("AdsUEditorAdgroupSetCallToActionLinkDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
