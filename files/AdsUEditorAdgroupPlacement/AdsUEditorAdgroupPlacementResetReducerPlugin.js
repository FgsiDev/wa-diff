__d(
  "AdsUEditorAdgroupPlacementResetReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignPlacementResetActionFlux",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupPlacementResetMutator",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getShouldEnableAutomaticFlowByDefault: r(
              "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getShouldEnableAutomaticFlowByDefault,
              l = n.parentData;
            return t.adgroupIDs == null
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n = r("nullthrows")(l.get(e.id)),
                    o = n.campaign,
                    s = n.campaignGroup,
                    u = r("adsUEditorAdgroupPlacementResetMutator")({
                      account: a,
                      campaignGroup: s,
                      campaign: o,
                      adgroup: e,
                      eligibilityInformation: t.eligibilityInformation,
                      getShouldEnableAutomaticFlowByDefault: i,
                    }),
                    c = u.mutatedAdgroup;
                  return c;
                });
          },
          o("AdsUEditorCampaignPlacementResetActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
