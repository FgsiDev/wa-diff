__d(
  "AdsCampaignBulkEditPlacementAddActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditPlacementAddActionFlux",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignPlacementMutators",
    "AdsCampaignRawSpecUtils",
    "AdsCampaignRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsPlacementPlatformUtils",
    "AdsPlacementPositionPlugins",
    "AdsUEditorCampaignSelectors",
    "LoadObject",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsBulkEditPlacementAddActionFlux").actionType,
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
                  if (o("AdsCampaignRawSpecUtils").isAutomaticPlacements(n)) {
                    var c = u.get(a);
                    if (c != null) return c.getValueEnforcing();
                  }
                  var d = e.get(a);
                  if (d != null) {
                    var m = r("AdsPlacementPositionPlugins").get(t.pluginKey);
                    if (
                      m.isActive(d.spec) ||
                      !(
                        m.isEnabled(d.capabilities, d.account) &&
                        !m.getIneligibilityReason(d)
                      )
                    ) {
                      var p = u.get(a);
                      if (p != null) return p.getValueEnforcing();
                    }
                  }
                }
                u = r("AdsCampaignPlacementMutators").reduce(function (n, i) {
                  return i.reduce(n, {
                    action: {
                      type: o("AdsCampaignPlacementAddDataActionFlux")
                        .actionType,
                      ids: [a],
                      eligibilityInformation: r("nullthrows")(e.get(a)),
                      pluginKey: t.pluginKey,
                      pluginType: t.pluginType,
                    },
                  });
                }, u);
                var _ = o(
                    "AdsPlacementPlatformUtils",
                  ).getPlatformPluginForPluginKey(t.pluginKey, t.pluginType),
                  f =
                    t.pluginType === "placements/position"
                      ? r("AdsPlacementPositionPlugins").get(t.pluginKey)
                          .apiPosition
                      : _.apiPublisherPlatform;
                return (
                  r("AdsInterfacesLogger").log(
                    {
                      eventName: "placement_bulk_edit_add_position",
                      data:
                        ((s = {}),
                        (s.campaign_id = a),
                        (s.bulk_edit_dialog_type = r(
                          "AdsBulkEditDialogTypes",
                        ).PLACEMENT),
                        (s.new_value = f),
                        (s.campaign_placement_field =
                          _.apiPositionsTargetField &&
                          _.apiPositionsTargetField([])),
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
