__d(
  "AdsUEditorAdgroupSelectOmnichannelWebAppMCMEConversionObjectReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignDeliveryChangeOmnichannelWebAppMCMEConversionObjectActionFlux",
    "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
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
                  l = i.campaign,
                  s = i.specPlugin,
                  u = t.appData,
                  c = t.pixelData;
                return o(
                  "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
                ).applyOmnichannelWebAppMCMEConversionObject(e, l, s, u, c);
              },
            );
          },
          o(
            "AdsUEditorCampaignDeliveryChangeOmnichannelWebAppMCMEConversionObjectActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
