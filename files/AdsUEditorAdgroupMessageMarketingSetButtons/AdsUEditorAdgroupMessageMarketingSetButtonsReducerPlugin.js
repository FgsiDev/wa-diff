__d(
  "AdsUEditorAdgroupMessageMarketingSetButtonsReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetButtonsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorSelectors",
    "MarketingMessageButtonUtils",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupTrackingSpecsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
        if (
          t == null ||
          n !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
        ) {
          var e = o != null ? o : [];
          return e.filter(function (e) {
            return e != null && e["action.type"] !== "app_custom_event";
          });
        }
        var a = o != null ? o : [];
        return a.concat([
          { application: t, "action.type": "app_custom_event" },
        ]);
      },
      s = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").optimization_goal.get,
        ),
        null,
      ),
      u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            optimizationGoal: s,
            trackingSpecs: r("adsUEditorAdgroupTrackingSpecsSelector"),
          },
          function (t, n, a) {
            var i = a.optimizationGoal,
              l = a.trackingSpecs;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                s,
                u,
                c =
                  (a =
                    (s = n.buttons) == null
                      ? void 0
                      : s.map(
                          o("MarketingMessageButtonUtils")
                            .getButtonDictFromMarketingMessageButton,
                        )) != null
                    ? a
                    : r("immutable").List(),
                d =
                  (u = n.buttons) == null
                    ? void 0
                    : u.find(function (e) {
                        return e.type === "APP";
                      }),
                m = d == null ? void 0 : d.app_id,
                p = l.valueSeq().toArray().flat(),
                _ = e(m, i, p),
                f = _ != null ? r("immutable").fromJS(_) : null;
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.buttons.set(c),
                r("AdsAdgroupRecordAccessors").tracking_specs.set(f),
              )(t);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetButtonsActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
