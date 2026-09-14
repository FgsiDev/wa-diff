__d(
  "AdsCampaignBulkEditPlacementRemoveActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditPlacementRemoveActionFlux",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignPlacementMutators",
    "AdsCampaignRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPlacementPlatformUtils",
    "AdsPlacementPluginList",
    "AdsPlacementPositionPlugins",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorHostIDs",
    "LoadObject",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsBulkEditPlacementRemoveActionFlux").actionType,
        fluxInputs: {
          eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationMap,
        },
        mutate: function (t, n, a) {
          var e = a.eligibilityInformationMap,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                t.campaignIDs,
              ),
              t.campaignIDs,
              function (n, a) {
                var l,
                  s,
                  u = r("immutable").Map(
                    ((l = {}),
                    (l[a] = r("LoadObject").withValue(n, {
                      creatorModuleID: i.id,
                    })),
                    l),
                  );
                if (t.pluginType === "placements/position") {
                  var c = e.get(a);
                  if (c == null)
                    return r("nullthrows")(u.get(a)).getValueEnforcing();
                  var d = r("AdsPlacementPositionPlugins").get(t.pluginKey);
                  if (!d.isActive(c.spec))
                    return r("nullthrows")(u.get(a)).getValueEnforcing();
                  var m = o("AdsPlacementPluginList")
                    .getPositions(c)
                    .filter(function (e) {
                      return e.isActive(c.spec);
                    });
                  if (m.size === 1)
                    return r("nullthrows")(u.get(a)).getValueEnforcing();
                }
                u = r("AdsCampaignPlacementMutators").reduce(function (n, i) {
                  return i.reduce(n, {
                    action: {
                      type: o("AdsUEditorCampaignPlacementRemoveActionFlux")
                        .actionType,
                      campaignIDs: [a],
                      eligibilityInformation: r("nullthrows")(e.get(a)),
                      pluginKey: t.pluginKey,
                      pluginType: t.pluginType,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                  });
                }, u);
                var p = o(
                    "AdsPlacementPlatformUtils",
                  ).getPlatformPluginForPluginKey(t.pluginKey, t.pluginType),
                  _ =
                    t.pluginType === "placements/position"
                      ? r("AdsPlacementPositionPlugins").get(t.pluginKey)
                          .apiPosition
                      : p.apiPublisherPlatform;
                return (
                  r("AdsInterfacesLogger").log(
                    {
                      eventName: "placement_bulk_edit_remove_position",
                      data:
                        ((s = {}),
                        (s.campaign_id = a),
                        (s.bulk_edit_dialog_type = r(
                          "AdsBulkEditDialogTypes",
                        ).PLACEMENT),
                        (s.new_value = _),
                        (s.campaign_placement_field =
                          p.apiPositionsTargetField &&
                          p.apiPositionsTargetField([])),
                        s),
                    },
                    r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                  ),
                  r("nullthrows")(u.get(a)).getValueEnforcing()
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").PLACEMENT,
            t.campaignIDs,
            n,
            l,
            r("AdsCampaignRecordAccessors").targeting.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
