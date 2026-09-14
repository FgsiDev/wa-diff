__d(
  "AdsUEditorAdgroupToggleBwPReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupBwPMutators",
    "AdsBwIUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorBwIToggleActionFlux",
    "AdsUEditorBwPProductSetLoadedAction",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectors",
    "Promise",
    "adsBwPEligiblePixelsSelector",
    "adsUEditorAccountSelector",
    "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
    "adsUEditorBwPAdgroupsDefaultProductSetPromiseSelectorWeak",
    "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        parentData: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
          o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
        ),
        adAccount: r("adsUEditorAccountSelector"),
        getPage: r("AdsPageStore").getSelector,
        getShouldEnableAutomaticFlowByDefault: r(
          "adsUEditorGetShouldEnableAutoflowByDefaultGetValueSelector",
        ),
        defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
          .eligibleInstagramAccountIDWithBusiness,
        bwpEligiblePixelsLO: r("adsBwPEligiblePixelsSelector"),
        eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
          .eligibilityInformationMap,
        defaultProductLoadObjectsSetByAdgroupID: r(
          "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
        ),
        defaultProductSetPromisesByAdgroupID: r(
          "adsUEditorBwPAdgroupsDefaultProductSetPromiseSelectorWeak",
        ),
        ueditorHostID: r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
      },
      u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          s,
          function (t, a, l) {
            var s = l.adAccount,
              u = l.bwpEligiblePixelsLO,
              c = l.defaultInstagramID,
              d = l.defaultProductLoadObjectsSetByAdgroupID,
              m = l.defaultProductSetPromisesByAdgroupID,
              p = l.eligibilityInformationMap,
              _ = l.getPage,
              f = l.getShouldEnableAutomaticFlowByDefault,
              g = l.parentData,
              h = l.ueditorHostID;
            return a.enabled
              ? (r("promiseDone")(
                  (e || (e = n("Promise"))).all(Array.from(m.values())),
                  function () {
                    r("AdsUEditorBwPProductSetLoadedAction").dispatch(
                      { adgroupIDs: Array.from(m.keys()), hostID: h },
                      {
                        line: "125",
                        module: "AdsUEditorAdgroupToggleBwPReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
                o("AdsMutators").mutateEach(t, a.adgroupIDs, function (e, t) {
                  var n = r("nullthrows")(g.get(t)),
                    a = n.campaign,
                    i = n.campaignGroup;
                  if (i == null || !o("AdsBwIUtils").isBwICampaignGroup(i))
                    return e;
                  var l = r("AdsCampaignGroupRecordAccessors").objective.get(i),
                    m = p.get(a.id),
                    h = d.get(t),
                    y = {
                      adgroup: e,
                      campaign: a,
                      campaignGroup: i,
                      adAccount: s,
                      getPage: _,
                      defaultProductSet: h == null ? void 0 : h.getValue(),
                      defaultInstagramID: c,
                      getShouldEnableAutomaticFlowByDefault: f,
                      bwpEligiblePixelsLO: u,
                      eligibilityInformation: m,
                    };
                  return l === r("AdsAPIObjectives").OUTCOME_SALES
                    ? o("AdsAdgroupBwPMutators").enableBwPForSales(y)
                    : o("AdsAdgroupBwPMutators").enableBwPForTraffic(y);
                }))
              : t;
          },
          r("AdsUEditorBwIToggleActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
