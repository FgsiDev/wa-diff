__d(
  "AdsUEditorAdgroupSetMarketplaceAppDestinationReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignSetFacebookDestinationTypeActionFlux",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, a) {
                var i = r("nullthrows")(n.parentData.get(a)),
                  l = i.specPlugin;
                return t.adCampaignDestinationType ===
                  r("AdCampaignDestination").FACEBOOK
                  ? o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueAppDestination(e, l, "MARKETPLACE")
                  : o(
                      "AdsUEditorCallToActionMutators",
                    ).deleteCallToActionValueAppDestination(e, l);
              },
            );
          },
          o("AdsUEditorCampaignSetFacebookDestinationTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
