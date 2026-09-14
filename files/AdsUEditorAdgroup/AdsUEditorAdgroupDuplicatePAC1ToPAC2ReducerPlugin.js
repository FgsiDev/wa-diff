__d(
  "AdsUEditorAdgroupDuplicatePAC1ToPAC2ReducerPlugin",
  [
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsDataAtom",
    "AdsEditingAdgroupEditorContext",
    "AdsInterfacesCreationSectionMode",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPlacementAssetEligibilityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
    "AdsUEditorHostIDs",
    "adsPlacementAssetMutationConvertPhase1ToPhase2",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            eligibilityInfoMap: o("AdsUEditorAdgroupSelectors")
              .placementEligibilityInfoMap,
          },
          function (t, n, a) {
            var l,
              s = a.account,
              u = a.eligibilityInfoMap;
            if (n.hostID !== r("AdsUEditorHostIDs").EDITING) return t;
            var c = r(
              "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
            )(r("AdsEditingAdgroupEditorContext"));
            if (!c.isDone() || !c.hasValue()) return t;
            r("AdsInterfacesLogger").log({
              data: ((l = {}), (l.message = "reducer_1_start"), l),
              eventName: "post_duplication_pac_spec_mutation",
            });
            var d = o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            )(r("AdsEditingAdgroupEditorContext"));
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var l, c, m, p;
                r("AdsInterfacesLogger").log({
                  data:
                    ((l = {}),
                    (l.message = "reducer_2_start_conversion_check"),
                    l),
                  eventName: "post_duplication_pac_spec_mutation",
                });
                var _ = t.adset_id;
                _ !== null &&
                  n.responses.length !== 0 &&
                  ((c = n.responses[0].extraData) == null
                    ? void 0
                    : c.campaignMode) ===
                    r("AdsInterfacesCreationSectionMode").NEW &&
                  ((m = n.responses[0].extraData) == null
                    ? void 0
                    : m.shouldIncludeMMPlacement) === !0 &&
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      var e;
                      r(
                        "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
                      ).dispatch(
                        {
                          campaignIDs: [_],
                          hostID:
                            (e = n.hostID) != null
                              ? e
                              : r("AdsUEditorHostIDs").EDITING,
                        },
                        {
                          line: "110",
                          module:
                            "AdsUEditorAdgroupDuplicatePAC1ToPAC2ReducerPlugin.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  );
                var f = d.get(a),
                  g = u.get(a);
                if (f == null || g == null) {
                  var h;
                  return (
                    r("AdsInterfacesLogger").log({
                      data:
                        ((h = {}),
                        (h.message = "reducer_3_conversion_early_return"),
                        (h.is_enabled = f == null),
                        (h.is_duplicated_object = g == null),
                        h),
                      eventName: "post_duplication_pac_spec_mutation",
                    }),
                    t
                  );
                }
                var y = f.campaign,
                  C = f.campaignGroup,
                  b = o(
                    "AdsPlacementAssetEligibilityUtils",
                  ).shouldConvertPhase1ToPhase2(t, y, g);
                return (
                  r("AdsInterfacesLogger").log({
                    data:
                      ((p = {}),
                      (p.message = "reducer_4_conversion_result"),
                      (p.is_enabled = b),
                      (p.is_duplicated_object = o(
                        "AdsPlacementAssetEligibilityUtils",
                      ).hasPlatformCustomizations(t)),
                      p),
                    eventName: "post_duplication_pac_spec_mutation",
                  }),
                  b
                    ? r("adsPlacementAssetMutationConvertPhase1ToPhase2")(
                        t,
                        y,
                        C,
                        s,
                      )
                    : t
                );
              },
            );
          },
          o("AdsCopyCopyCompletedDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
