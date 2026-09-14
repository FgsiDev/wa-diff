__d(
  "WamoAvailableIdentitiesStore",
  [
    "AdsAccountStore",
    "AdsAdgroupSelectWhatsAppAccountActionFlux",
    "AdsAutomatedAdSpecMutationReason",
    "AdsAutomatedAdSpecMutationUseCaseName",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCampaignSetWhatsAppAccountIDActionFlux",
    "AdsCreationCampaignGroupSetPromotedObjectDataActionFlux",
    "AdsDataAtom",
    "AdsDraftPublishDataProvider",
    "AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupMessageMarketingSetDefaultSettingsActionFlux",
    "AdsUEditorAdgroupSetPageDataActionFlux",
    "AdsUEditorAdgroupWamoIdentityLoadedAction",
    "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux",
    "AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux",
    "AdsUEditorCampaignPlacementApplyDefaultsActionFlux",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementResetActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux",
    "AdsUEditorCampaignSetPageIdDataActionFlux",
    "AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeActionFlux",
    "AdsUEditorHostIDs",
    "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
    "ReverseInteropStoreBase",
    "WamoAvailableIdentitiesStoreSource",
    "adsAdgroupIDsForCampaignIDSelector",
    "adsAutomatedAdSpecMutation",
    "adsCreateStoreThunkSelector",
    "cr:38204",
    "gkx",
    "justknobx",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "WamoAvailableIdentitiesStore.DATA_UPDATED",
      u = (function (t) {
        function a() {
          var e,
            n = new (r("WamoAvailableIdentitiesStoreSource"))();
          return (
            (e = t.call(this, n, s) || this),
            (e.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.get = function (t) {
            return this.getSingleValue(t, { available_identities: [] });
          }),
          (l.reduce = function (a, l) {
            var t = r("AdsAccountStore").getSelectedAccount().getValue();
            if (t == null || !r("gkx")("9268")) return a;
            var s = l.action;
            switch (s.type) {
              case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              case o("AdsUEditorCampaignPlacementApplyDefaultsActionFlux")
                .actionType:
              case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              case o("AdsUEditorCampaignPlacementResetActionFlux").actionType:
              case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              case o("AdsUEditorAdgroupSetPageDataActionFlux").actionType:
              case o("AdsUEditorCampaignSetPageIdDataActionFlux").actionType:
              case o("AdsCreationCampaignGroupSetPromotedObjectDataActionFlux")
                .actionType:
              case o(
                "AdsOutcomeCampaignSelectPixelPromotedObjectTypeDataActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignDeliveryChangeOptimizationGoalActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignSelectWebsitePromotedObjectTypeDataActionFlux",
              ).actionType:
              case o(
                "AdsUEditorCampaignSelectWhatsAppPromotedObjectTypeDataActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux")
                .actionType:
              case o("AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux")
                .actionType:
              case o("AdsCampaignSetWhatsAppAccountIDActionFlux").actionType:
              case o("AdsAdgroupSelectWhatsAppAccountActionFlux").actionType:
              case o(
                "AdsUEditorCampaignSetDynamicCreativeOptimizationToggleActionFlux",
              ).actionType:
              case o(
                "AdsUEditorAdgroupMessageMarketingSetDefaultSettingsActionFlux",
              ).actionType:
              case o("AdsUEditorCampaignWAMOStatusFromUpstreamChangeActionFlux")
                .actionType:
                return (
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      var e = [],
                        t = s.adgroupIDs,
                        o = s.campaignIDs,
                        a = s.activeCampaignIDs,
                        l = s.ids,
                        u = s.campaignID;
                      if (t != null && Array.isArray(t) && t.length > 0)
                        e = t.filter(function (e) {
                          return typeof e == "string";
                        });
                      else {
                        var c = [];
                        if (
                          (o != null && Array.isArray(o) && o.length > 0
                            ? (c = o.filter(function (e) {
                                return typeof e == "string";
                              }))
                            : a != null && Array.isArray(a) && a.length > 0
                              ? (c = a.filter(function (e) {
                                  return typeof e == "string";
                                }))
                              : l != null && Array.isArray(l) && l.length > 0
                                ? (c = l.filter(function (e) {
                                    return typeof e == "string";
                                  }))
                                : u != null &&
                                  typeof u == "string" &&
                                  (c = [u]),
                          c.length > 0)
                        ) {
                          var d = r("adsAdgroupIDsForCampaignIDSelector")();
                          e = c.flatMap(function (e) {
                            var t = d(e);
                            return t != null ? t : [];
                          });
                        }
                      }
                      if (e.length > 0) {
                        var m = r(
                            "AdsDraftPublishDataProvider",
                          ).toFluxSelector()(),
                          p = m.requestedAdObjectIDs.union(
                            m.pendingAdObjectIDs,
                          );
                        if (
                          e.some(function (e) {
                            return p.has(e);
                          })
                        )
                          return;
                      }
                      if (r("justknobx")._("515")) {
                        var _ = n("adsAutomatedAdSpecMutation"),
                          f = _.handleAutomatedAdSpecMutation,
                          g = n("AdsAutomatedAdSpecMutationReason"),
                          h = n("AdsAutomatedAdSpecMutationUseCaseName");
                        f({
                          useCaseName:
                            h.ADS_ADGROUP_SET_WAMO_IDENTITY_PROCESSING_STORE,
                          adgroupIDs: e,
                          mutationFn: function () {
                            n("cr:38204").dispatch(
                              {
                                triggerActionType: s.type,
                                adgroupIDs: e,
                                hostID: r("AdsUEditorHostIDs").EDITING,
                              },
                              {
                                line: "277",
                                module: "WamoAvailableIdentitiesStore.js",
                                moduleID: i.id,
                              },
                            );
                          },
                          reasons: new Set([g.MISSING_TRIGGER]),
                        });
                      } else
                        n("cr:38204").dispatch(
                          {
                            triggerActionType: s.type,
                            adgroupIDs: e,
                            hostID: r("AdsUEditorHostIDs").EDITING,
                          },
                          {
                            line: "288",
                            module: "WamoAvailableIdentitiesStore.js",
                            moduleID: i.id,
                          },
                        );
                    },
                  ),
                  a
                );
              case o(
                "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
              ).actionType: {
                var u = s,
                  d = u.accountID,
                  m = u.adgroupIDs,
                  p = u.pageID,
                  _ = u.whatsAppNumber;
                return (
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      if (
                        (c.refetchAll(),
                        p != null &&
                          d != null &&
                          (c.loadData(
                            [{ adAccountID: d, pageID: p }],
                            ["available_identities"],
                            !0,
                          ),
                          m != null && m.length > 0 && _ != null))
                      ) {
                        var t = function (t) {
                            return t == null ? "" : t.replace(/(?!^\+)\D/g, "");
                          },
                          n = t(_),
                          o = function () {
                            var o = c.get({ adAccountID: d, pageID: p });
                            if (o.hasValue()) {
                              var a,
                                l = o.getValue(),
                                s =
                                  (a =
                                    l == null
                                      ? void 0
                                      : l.available_identities) != null
                                    ? a
                                    : [],
                                u = s.find(function (e) {
                                  var r;
                                  return (
                                    t(
                                      e == null ||
                                        (r =
                                          e.wamo_whatsapp_identity_metadata) ==
                                          null
                                        ? void 0
                                        : r.formatted_wa_number,
                                    ) === n
                                  );
                                });
                              if (
                                (u == null
                                  ? void 0
                                  : u.wamo_whatsapp_identity_id) != null
                              )
                                return (
                                  (
                                    e || (e = r("AdsDataAtom"))
                                  ).addPostDispatchCallback(function () {
                                    r(
                                      "AdsUEditorAdgroupWamoIdentityLoadedAction",
                                    ).dispatch(
                                      {
                                        adgroupIDs: [].concat(m),
                                        hostID: r("AdsUEditorHostIDs").EDITING,
                                        identityID: u.wamo_whatsapp_identity_id,
                                      },
                                      {
                                        line: "357",
                                        module:
                                          "WamoAvailableIdentitiesStore.js",
                                        moduleID: i.id,
                                      },
                                    );
                                  }),
                                  !0
                                );
                            }
                            return !1;
                          };
                        if (!o()) {
                          var a = null;
                          a = c.addListener(function () {
                            if (o()) {
                              var e;
                              (e = a) == null || e.remove();
                            }
                          });
                        }
                      }
                    },
                  ),
                  a
                );
              }
              default:
                return a;
            }
          }),
          a
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
