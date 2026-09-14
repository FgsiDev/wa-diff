__d(
  "AdsUEditorAdgroupSetAwarenessExistingPostHasDestinationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsCallToActionGetDefaultCallToActionType",
    "gkx",
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
              var n, i;
              if (t.isChecked === !1)
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.call_to_action.delete(e);
              if (
                ((n = e.creative) == null ? void 0 : n.call_to_action) != null
              )
                return e;
              var l = r("nullthrows")(a.get(e.id)),
                s = l.campaign,
                u = l.campaignGroup,
                c = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(
                  { campaign: s, campaignGroup: u },
                ),
                d =
                  (i = r("adsCallToActionGetDefaultCallToActionType")(
                    u.objective,
                    c,
                  )) != null
                    ? i
                    : r("gkx")("14839")
                      ? "SEE_DETAILS"
                      : "LEARN_MORE";
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action.type.set(d, e);
            });
          },
          "ADS_ADGROUP_EDITOR_SET_AWARENESS_EXISTING_POST_HAS_DESTINATION",
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
