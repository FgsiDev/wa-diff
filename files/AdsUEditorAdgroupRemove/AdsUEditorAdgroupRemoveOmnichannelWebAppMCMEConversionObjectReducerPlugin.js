__d(
  "AdsUEditorAdgroupRemoveOmnichannelWebAppMCMEConversionObjectReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsOmnichannelTrackingSpecsUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignDeliveryClearOmnichannelWebAppMCMEConversionObjectActionFlux",
    "immutable",
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
                var n,
                  i = e,
                  l = r("nullthrows")(a.get(t)),
                  s = l.specPlugin,
                  u = o(
                    "AdsOmnichannelTrackingSpecsUtils",
                  ).removeOffsiteConversionPixelTrackingSpec(
                    (n = i.tracking_specs) == null ? void 0 : n.toJS(),
                  );
                return (
                  (i = o("AdsMutators").chain(
                    function (e) {
                      return r("AdsAdgroupRecordAccessors").tracking_specs.set(
                        r("immutable").fromJS(u),
                        e,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueObjectStoreURLs(e, s);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueAppLink(e, s);
                    },
                    function (e) {
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueApplication(e, s);
                    },
                    function (e) {
                      return r(
                        "AdsAdgroupRecordAccessors",
                      ).tracking_specs.delete(e);
                    },
                  )(i)),
                  i
                );
              },
            );
          },
          o(
            "AdsUEditorCampaignDeliveryClearOmnichannelWebAppMCMEConversionObjectActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
