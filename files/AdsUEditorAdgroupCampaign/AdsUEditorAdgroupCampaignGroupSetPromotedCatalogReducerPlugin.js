__d(
  "AdsUEditorAdgroupCampaignGroupSetPromotedCatalogReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorBwPProductSetLoadedAction",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupSetPromotedCatalogActionFlux",
    "AdsUEditorCampaignSelectors",
    "Promise",
    "adsACOIsACOAdgroup",
    "adsACORemoveACOSpec",
    "adsUEditorAdgroupCampaignGroupSetPromotedCatalogMutator",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
    "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
    "adsUEditorBwPAdgroupsDefaultProductSetPromiseSelectorWeak",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
          o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
            .getAdgroupSpecPathPlugin,
        ),
        isBwPCampaignGroup: r("adsUEditorAreSomeCampaignGroupsBwISelector"),
        defaultProductLoadObjectsSetByAdgroupID: r(
          "adsUEditorBwPAdgroupsDefaultProductSetLoadObjectSelectorWeak",
        ),
        defaultProductSetPromisesByAdgroupID: r(
          "adsUEditorBwPAdgroupsDefaultProductSetPromiseSelectorWeak",
        ),
        ueditorHostID: r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
        campaignGroupMap: o(
          "AdsUEditorCampaignSelectors",
        ).adObjectsList.mapTransform(
          o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
        ),
      },
      u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          s,
          function (t, a, l) {
            var s = l.campaignGroupMap,
              u = l.defaultProductLoadObjectsSetByAdgroupID,
              c = l.defaultProductSetPromisesByAdgroupID,
              d = l.isBwPCampaignGroup,
              m = l.plugins,
              p = l.ueditorHostID;
            return d
              ? (r("promiseDone")(
                  (e || (e = n("Promise"))).all(Array.from(c.values())),
                  function () {
                    r("AdsUEditorBwPProductSetLoadedAction").dispatch(
                      { adgroupIDs: Array.from(c.keys()), hostID: p },
                      {
                        line: "99",
                        module:
                          "AdsUEditorAdgroupCampaignGroupSetPromotedCatalogReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
                o("AdsMutators").mutateEach(t, a.adgroupIDs, function (e, t) {
                  var n;
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.product_set_id.set(
                    (n = u.get(t)) == null || (n = n.getValue()) == null
                      ? void 0
                      : n.id,
                    e,
                  );
                }))
              : o("AdsMutators").mutateEach(t, a.adgroupIDs, function (e) {
                  var t = r("adsACOIsACOAdgroup")(e),
                    n = e;
                  t && (n = r("adsACORemoveACOSpec")(n));
                  var o = s.get(e.adset_id);
                  return r(
                    "adsUEditorAdgroupCampaignGroupSetPromotedCatalogMutator",
                  )(n, r("nullthrows")(m.get(n.id)), o);
                });
          },
          o("AdsUEditorCampaignGroupSetPromotedCatalogActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
