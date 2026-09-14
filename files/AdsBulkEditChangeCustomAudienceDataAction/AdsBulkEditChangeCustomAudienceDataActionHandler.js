__d(
  "AdsBulkEditChangeCustomAudienceDataActionHandler",
  [
    "AdsAPICampaignRecordUtils",
    "AdsBulkEditActionHandlerUtils",
    "AdsBulkEditChangeCustomAudienceDataActionFlux",
    "AdsBulkEditDialogCustomAudienceActions",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingAudienceFairnessUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "immutable",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [
        "id",
        "name",
        "lookalike_spec",
        "data_source",
        "sharing_status",
        "subtype",
        "is_lookalike_container",
        "lookalike_type",
      ];
      return r("whitelistObjectKeys")(e, t);
    }
    var s = {
        type: o("AdsBulkEditChangeCustomAudienceDataActionFlux").actionType,
        fluxInputs: {
          campaignToRegulatedCategoriesMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
          ),
        },
        mutate: function (n, a, i) {
          var t = n.adObjectIDs,
            l = n.audience,
            s = n.customAudienceUpdateAction,
            u = n.preserveSavedAudienceID,
            c = i.campaignToRegulatedCategoriesMap,
            d = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                a,
                t,
              ),
              t,
              function (t, n) {
                var a = t,
                  i = t.targeting.custom_audiences || r("immutable").List(),
                  d =
                    t.targeting.excluded_custom_audiences ||
                    r("immutable").List(),
                  m = e(l);
                if (!m) return a;
                switch (
                  (t.saved_audience != null &&
                    (u === !0
                      ? (a = o(
                          "AdsAPICampaignRecordUtils",
                        ).reassertSavedAudienceIDForPublish(a))
                      : (a = o("AdsMutators").chain(
                          r("AdsCampaignRecordAccessors").saved_audience.delete,
                          r("AdsCampaignRecordAccessors").saved_audience_id
                            .delete,
                        )(a))),
                  s)
                ) {
                  case o("AdsBulkEditDialogCustomAudienceActions")
                    .AdsBulkEditDialogCustomAudienceActions.INCLUDE: {
                    var p,
                      _,
                      f = r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.custom_audiences.get(a),
                      g =
                        f &&
                        f.some(function (e) {
                          return e.get("id") === m.id;
                        });
                    if (g === !0) return a;
                    a = o("AdsMutators").chain(
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.custom_audiences.set(
                        i.concat(r("immutable").fromJS([m])),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.excluded_custom_audiences.set(
                        d.filter(function (e) {
                          return e.get("id") !== m.id;
                        }),
                      ),
                    )(a);
                    var h =
                      (p = (_ = c.get(n)) == null ? void 0 : _.toArray()) !=
                      null
                        ? p
                        : [];
                    a = o(
                      "AdsTargetingAudienceFairnessUtils",
                    ).maybeUpdateTAFEMitigationStrategyInCampaignRecord(a, h);
                    break;
                  }
                  case o("AdsBulkEditDialogCustomAudienceActions")
                    .AdsBulkEditDialogCustomAudienceActions.EXCLUDE: {
                    var y = r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.excluded_custom_audiences.get(a),
                      C =
                        y &&
                        y.some(function (e) {
                          return e.get("id") === m.id;
                        });
                    if (C === !0) return a;
                    a = o("AdsMutators").chain(
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.excluded_custom_audiences.set(
                        d.concat(r("immutable").fromJS([m])),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.custom_audiences.set(
                        i.filter(function (e) {
                          return e.get("id") !== m.id;
                        }),
                      ),
                    )(a);
                    break;
                  }
                  case o("AdsBulkEditDialogCustomAudienceActions")
                    .AdsBulkEditDialogCustomAudienceActions.REMOVE_EXCLUDED: {
                    a = r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.excluded_custom_audiences.set(
                      d.filter(function (e) {
                        return e.get("id") !== m.id;
                      }),
                      a,
                    );
                    break;
                  }
                  case o("AdsBulkEditDialogCustomAudienceActions")
                    .AdsBulkEditDialogCustomAudienceActions.REMOVE_INCLUDED: {
                    var b, v;
                    a = r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.custom_audiences.set(
                      i.filter(function (e) {
                        return e.get("id") !== m.id;
                      }),
                      a,
                    );
                    var S =
                      (b = (v = c.get(n)) == null ? void 0 : v.toArray()) !=
                      null
                        ? b
                        : [];
                    a = o(
                      "AdsTargetingAudienceFairnessUtils",
                    ).maybeUpdateTAFEMitigationStrategyInCampaignRecord(a, S);
                    break;
                  }
                }
                return a;
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys").CUSTOM_AUDIENCE,
            t,
            a,
            d,
            r("AdsCampaignRecordAccessors").targeting.get,
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
