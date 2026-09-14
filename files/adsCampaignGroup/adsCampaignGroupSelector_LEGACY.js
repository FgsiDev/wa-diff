__d(
  "adsCampaignGroupSelector_LEGACY",
  [
    "AdsAccountStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsLoadObjectUtils",
    "adsCreateKeyedStoreSelector",
    "adsGetDateFromAdObject",
    "adsPELockedAndPublishingSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "ARCHIVED" ? ["ARCHIVED"] : ["ACTIVE", "PAUSED"];
    }
    var s = r("adsCreateKeyedStoreSelector")(
        function () {
          return [
            r("AdsCampaignDraftFragmentStore"),
            r("AdsCampaignGroupCombinedStore"),
            r("AdsCampaignGroupDraftFragmentStore"),
            r("AdsCampaignCombinedStore"),
            r("AdsAccountStore"),
          ]
            .concat(
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedAndPublishingSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector.getStores(),
            )
            .filter(Boolean);
        },
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (t) {
            var e = r("AdsCampaignGroupCombinedStore").getObject(t),
              n = r("AdsAccountStore").getSelectedAccount(),
              a = r("AdsCampaignGroupDraftFragmentStore").isNew(t),
              i = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector(),
              l = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector();
            return {
              accountLoadObject: n,
              campaignGroupLoadObject: e,
              isNew: a,
              lockedIDs: l,
              publishingIDs: i,
            };
          },
          computeResult: function (n, a) {
            var t = a.accountLoadObject,
              i = a.campaignGroupLoadObject;
            return o("AdsLoadObjectUtils")
              .all([t, i])
              .map(function (t) {
                var n = t[0],
                  a = t[1],
                  i = n.timezone_id;
                return {
                  allowedStatuses: e(a.status),
                  boostedComponentClientAppID:
                    a.boosted_component_client_app_id,
                  boostedComponentProduct: a.boosted_component_product,
                  createdTimeString: a.created_time,
                  id: a.id,
                  isLocked: o("adsPELockedAndPublishingSelectors")
                    .adsPELockedAndPublishingSelector()
                    .has(a.id),
                  startDate: r("adsGetDateFromAdObject")(a.start_time, i),
                  startTimeString: a.start_time,
                  stopDate: r("adsGetDateFromAdObject")(a.stop_time, i),
                  endTimeString: a.stop_time,
                  updatedTimeString: a.updated_time,
                };
              });
          },
          areInputsEqual: function (t, n) {
            return (
              t.accountLoadObject === n.accountLoadObject &&
              t.campaignGroupLoadObject === n.campaignGroupLoadObject &&
              t.isNew === n.isNew &&
              t.publishingIDs === n.publishingIDs &&
              t.lockedIDs === n.lockedIDs
            );
          },
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
