__d(
  "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupStoreUtils",
    "AdsBuyingTypes",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsReservationInAuctionConstants",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupSetFrequencyControlSpecsActionFlux",
    "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorHostIDs",
    "DateTime",
    "adsUEditorAccountSelector",
    "first",
    "immutable",
    "isTargetFrequency",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("requireDeferred"))(
        "AdsOutcomeCampaignSelectVideoPromotedObjectTypeDataAction",
      ).__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      c = s(
        "AdsTargetFrequencyInAuctionInitializeCampaignPredictionAction",
      ).__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      d = s("AdsTargetFrequencyInAuctionPredictionStatusAction").__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      m = s("AdsUEditorCampaignDeliveryChangeOptimizationGoalAction").__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      p = s(
        "AdsUEditorCampaignDestinationSetConversionLocationsAction",
      ).__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      _ = s(
        "AdsUEditorCampaignGroupTargetFrequencyInAuctionGeneratePredictionAction",
      ).__setRef(
        "AdsUEditorCampaignCampaignGroupFrequencyControlChangeReducerPlugin",
      ),
      f = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (t, n, a) {
            var i,
              l,
              s = a.account,
              f = a.campaignIDToCampaignGroupMap;
            if (n.campaignIDs.length === 0) return t;
            var g = [],
              y = [],
              C = [],
              b = [],
              v = (i = f.get(n.campaignIDs[0])) == null ? void 0 : i.objective,
              S =
                ((l = r("first")(n.frequencyControlSpecs)) == null
                  ? void 0
                  : l.type) === "TARGET",
              R = o("AdsMutators").mutateEach(
                t,
                n.campaignIDs,
                function (e, t) {
                  var a,
                    i,
                    l,
                    u = f.get(t);
                  if (u == null) return e;
                  if (n.frequencyControlSpecs.length > 0) {
                    var c = r(
                        "AdsCampaignRecordAccessors",
                      ).optimization_goal.get(e),
                      d = r("AdsCampaignRecordAccessors").destination_type.get(
                        e,
                      ),
                      m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                        v,
                        e,
                      );
                    o(
                      "AdsTargetFrequencyInAuctionUtils",
                    ).isCompatibleWithTargetFrequencyInAuction(
                      r("AdsBuyingTypes").AUCTION,
                      v,
                      c,
                      m,
                    ) ||
                      (v === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
                        d !== r("AdCampaignDestination").ON_VIDEO &&
                        g.push(t),
                      y.push(t));
                  }
                  var p = u.set(
                      "frequency_control_specs",
                      r("immutable").fromJS(n.frequencyControlSpecs),
                    ),
                    _ = o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).maybeResetFrequencyControlSpecs(s, p, e),
                    R = r(
                      "AdsCampaignRecordAccessors",
                    ).frequency_control_specs.get(e);
                  (n.frequencyControlSpecs.length > 0 &&
                    R != null &&
                    ((_ = r(
                      "AdsCampaignRecordAccessors",
                    ).rf_prediction_id.delete(_)),
                    C.push(t)),
                    S && (_ = h(_, t, s)),
                    !S &&
                      ((a =
                        (i = e.creative_sequence) == null ? void 0 : i.size) !=
                      null
                        ? a
                        : 0) > 0 &&
                      (_ = r(
                        "AdsCampaignRecordAccessors",
                      ).creative_sequence.set(r("immutable").List(), _)));
                  var L =
                    (l = r(
                      "AdsCampaignRecordAccessors",
                    ).frequency_control_specs.get(_)) == null ||
                    (l = l.toJS()) == null
                      ? void 0
                      : l.map(function (e) {
                          return e.type;
                        });
                  return (r("isTargetFrequency")(L) && b.push(t), _);
                },
              );
            if (
              (b.length > 0 &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    c.onReadyImmediately(function (e) {
                      e.dispatch({ campaignIDs: b, hostID: n.hostID });
                    });
                  },
                ),
              g.length > 0 || y.length > 0)
            ) {
              var L = o(
                  "AdsTargetFrequencyInAuctionUtils",
                ).getDefaultOptimizationGoalForTargetFrequency(v),
                E = n.hostID;
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  (g.length > 0 &&
                    r("promiseDone")(
                      o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns(g),
                      function (e) {
                        (u.onReadyImmediately(function (t) {
                          t.dispatch({
                            campaignIDs: g,
                            adgroupIDs: [].concat(e),
                            hostID: E,
                          });
                        }),
                          p.onReadyImmediately(function (e) {
                            e.dispatch({
                              campaignIDs: g,
                              conversionLocationType: r(
                                "AdsPromotedObjectTypes",
                              ).VIDEO,
                              hostID: E,
                            });
                          }));
                      },
                    ),
                    y.length > 0 &&
                      r("promiseDone")(
                        o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns(y),
                        function (e) {
                          m.onReadyImmediately(function (t) {
                            t.dispatch({
                              campaignIDs: y,
                              campaignGroupIDs: [].concat(n.campaignGroupIDs),
                              adgroupIDs: [].concat(e),
                              optimizationGoal: L,
                              hostID: E,
                              isNewCampaign: !1,
                              defaultConversionWindowLength: null,
                              defaultViewConversionWindowLength: null,
                              defaultEngagedVideoViewWindowLength: null,
                            });
                          });
                        },
                      ));
                },
              );
            }
            if (S) {
              var k = function (a) {
                var t = o(
                  "AdsUEditorCampaignGroupTargetFrequencyInAuctionUtils",
                ).buildInitialCampaignGroupPredictionParams(
                  a,
                  n.campaignIDs,
                  n.frequencyControlSpecs,
                  f,
                  R,
                  s,
                );
                t != null &&
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      _.onReadyImmediately(function (e) {
                        e.dispatch({
                          campaignGroupIDs: [a],
                          params: t,
                          hostID: r("AdsUEditorHostIDs").EDITING,
                          source: "cg_direct",
                        });
                      });
                    },
                  );
              };
              for (var I of n.campaignGroupIDs) k(I);
            }
            return (
              C.length > 0 &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    d.onReadyImmediately(function (e) {
                      for (var t of C)
                        e.dispatch({
                          campaignID: t,
                          error: null,
                          hostID: n.hostID,
                          params: null,
                          success: null,
                        });
                    });
                  },
                ),
              R
            );
          },
          o("AdsUEditorCampaignGroupSetFrequencyControlSpecsActionFlux")
            .actionType,
        ),
      },
      g = f;
    function h(e, t, n) {
      var a = r("AdsCampaignRecordAccessors").start_time.get(e);
      if (a == null) return e;
      var i = r("DateTime").fromISOString(a, n.timezone_id),
        l = r("DateTime").now(n.timezone_id),
        s = l.addDays(1).startOfDay();
      if (!r("AdsCampaignDraftFragmentStore").isNew(t)) return e;
      var u = e,
        c = i;
      i.isBefore(s) &&
        ((c = s),
        (u = r("AdsCampaignRecordAccessors").start_time.set(
          c.toDate().toISOString(),
          u,
        )));
      var d = r("AdsCampaignRecordAccessors").end_time.get(u),
        m = d != null ? r("DateTime").fromISOString(d, n.timezone_id) : null;
      return (
        (m == null ||
          m.isBefore(
            c.addDays(
              o("AdsReservationInAuctionConstants")
                .MINIMUM_TARGET_FREQUENCY_IN_AUCTION_CAMPAIGN_DURATION,
            ),
          )) &&
          (u = r("AdsCampaignRecordAccessors").end_time.set(
            c
              .addDays(
                o("AdsReservationInAuctionConstants")
                  .DEFAULT_TARGET_FREQUENCY_END_DATE_DURATION,
              )
              .toDate()
              .toISOString(),
            u,
          )),
        u
      );
    }
    l.default = g;
  },
  98,
);
