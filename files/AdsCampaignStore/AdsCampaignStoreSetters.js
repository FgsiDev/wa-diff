__d(
  "AdsCampaignStoreSetters",
  [
    "AdsAPICampaignPaths",
    "AdsAdgroupStoreUtils",
    "AdsCFCampaignCreationMode",
    "AdsCFNewCampaignFBID",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsPECampaignRawCombinedTableStore",
    "AdsReachFrequencyDeliveryOptions",
    "AdsReachFrequencyFlowChangeInstagramDestinationActionFlux",
    "AdsReachFrequencySetDeliveryMethodActionFlux",
    "AdsUEditorAdgroupSetInstagramAccountDataAction",
    "AdsUEditorHostIDs",
    "FBLogger",
    "getByPath",
    "isEmpty",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var n = t.prototype;
        return (
          (n.$2 = function (t, n, o) {
            this.$1
              ? this.$1(t, n, o)
              : r("FBLogger")("ads").mustfix(
                  "called setPath but setPath callback not set",
                );
          }),
          (n.handleDispatch = function (t, n) {
            var e = this,
              r = t.action;
            switch (((this.$1 = n), r.type)) {
              case o("AdsCampaignPlacementAddDataActionFlux").actionType:
                break;
              case o(
                "AdsReachFrequencyFlowChangeInstagramDestinationActionFlux",
              ).actionType:
                this.$3(r.campaignIDs, r.instagramDestinationID);
                break;
              case o("AdsReachFrequencySetDeliveryMethodActionFlux").actionType:
                (this.$4(
                  r.ids,
                  r.deliverySelection ===
                    o("AdsReachFrequencyDeliveryOptions")
                      .AdsReachFrequencyDeliveryOptions.SEQUENCING,
                  r.originalCampaigns,
                ),
                  r.deliverySelection ===
                  o("AdsReachFrequencyDeliveryOptions")
                    .AdsReachFrequencyDeliveryOptions.TIME_BASED
                    ? this.$5(
                        r.ids,
                        r.timeRotationIdBlocks,
                        r.timeRotationIntervals,
                      )
                    : this.$6(r.ids));
                break;
              case o("AdsCopyCopyCompletedDataActionFlux").actionType:
                r.responses.forEach(function (t) {
                  t.extraData &&
                    t.extraData.audiences &&
                    e.$7(
                      t.fragments,
                      t.extraData.audiences.audienceSplittingSpecs,
                      t.extraData.audiences.budget,
                    );
                });
                break;
            }
            this.$1 = null;
          }),
          (n.$8 = function (t) {
            return r("AdsPECampaignRawCombinedTableStore")
              .getObject(t)
              .getValueEnforcing();
          }),
          (n.$6 = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n = e.$8(t),
                o = n.time_based_ad_rotation_id_blocks;
              o &&
                o.length > 0 &&
                e.$2(
                  r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_ID_BLOCKS,
                  [t],
                  [],
                );
              var a = n.time_based_ad_rotation_intervals;
              a &&
                a.length > 0 &&
                e.$2(
                  r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_INTERVALS,
                  [t],
                  [],
                );
            });
          }),
          (n.$9 = function (t, n, r) {
            var e = babelHelpers.extends({}, t);
            e.name = n.name;
            var o = babelHelpers.extends({}, t.targeting);
            return (
              (o.age_min = n.age_min),
              (o.age_max = n.age_max),
              n.genders && n.genders.length
                ? (o.genders = n.genders.slice())
                : delete o.genders,
              (e.targeting = o),
              e.lifetime_budget != null && e.lifetime_budget !== 0
                ? (e.lifetime_budget = r)
                : (e.daily_budget = r),
              delete e.saved_audience,
              delete e.saved_audience_id,
              e
            );
          }),
          (n.$10 = function (t, n, o) {
            var e = this,
              a,
              i = this.$9(t, n, o),
              l = [
                (a = r("AdsAPICampaignPaths")).DAILY_BUDGET,
                a.LIFETIME_BUDGET,
                a.NAME,
                a.SAVED_AUDIENCE.path,
                a.SAVED_AUDIENCE_ID,
                a.TARGETING.path,
              ];
            l.forEach(function (n) {
              var o = r("getByPath")(i, n);
              o && e.$2(n, [t.id], o);
            });
          }),
          (n.$7 = function (n, o, a) {
            var t = this,
              i = 0;
            n.map(function (n) {
              if (n.ad_object_type === "ad_set") {
                var l = t.$8(n.ad_object_id);
                (e || (e = r("isEmpty")))(l) || t.$10(l, o[i++], a);
              }
            });
          }),
          (n.$5 = function (t, n, o) {
            (this.$2(
              r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_ID_BLOCKS,
              t,
              n,
            ),
              this.$2(
                r("AdsAPICampaignPaths").TIME_BASED_AD_ROTATION_INTERVALS,
                t,
                o,
              ));
          }),
          (n.$4 = function (t, n, o) {
            var e = this;
            t.forEach(function (t) {
              var a = [];
              if (n) {
                var i,
                  l = o ? o.get(t) : null;
                a =
                  (i = l == null ? void 0 : l.creative_sequence) != null
                    ? i
                    : [];
              }
              e.$2(r("AdsAPICampaignPaths").CREATIVE_SEQUENCE, [t], a);
            });
          }),
          (n.$11 = function (t) {
            return t.some(function (e) {
              return (
                e.startsWith(r("AdsCFNewCampaignFBID")) ||
                [
                  r("AdsCFCampaignCreationMode").IMPORT,
                  r("AdsCFCampaignCreationMode").SINGLE,
                  r("AdsCFCampaignCreationMode").USING_EXISTING,
                ].some(function (t) {
                  return e.startsWith(t + "_" + r("AdsCFNewCampaignFBID"));
                })
              );
            });
          }),
          (n.$3 = function (t, n) {
            this.$11(t) ||
              r("promiseDone")(
                o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns(t),
                function (e) {
                  r("AdsUEditorAdgroupSetInstagramAccountDataAction").dispatch(
                    {
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      adgroupIDs: e,
                      instagramAccountID: n,
                    },
                    {
                      line: "323",
                      module: "AdsCampaignStoreSetters.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
