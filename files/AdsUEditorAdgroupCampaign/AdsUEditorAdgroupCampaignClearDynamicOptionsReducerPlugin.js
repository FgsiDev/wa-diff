__d(
  "AdsUEditorAdgroupCampaignClearDynamicOptionsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignClearDynamicOptionsActionFlux",
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
                  i = n.campaign,
                  l = n.campaignGroup,
                  s = n.specPlugin,
                  u = l.objective,
                  c = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: i, campaignGroup: l });
                return o(
                  "AdsUEditorAdgroupMutators",
                ).transformAdgroupFromTemplateToLinkData(i, e, u, c, s);
              },
            );
          },
          o("AdsUEditorCampaignClearDynamicOptionsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
