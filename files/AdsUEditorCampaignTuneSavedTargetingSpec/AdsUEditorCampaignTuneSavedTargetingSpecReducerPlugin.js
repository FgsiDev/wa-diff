__d(
  "AdsUEditorCampaignTuneSavedTargetingSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTuneTargetingClient",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUEditorCampaignSetTargetingSpecAction",
    "AdsUEditorCampaignTuneSavedAudienceTargetingSpecActionFlux",
    "adsRegulatedCategoryIsRegulatedCategory",
    "adsUEditorAccountSelector",
    "targetingBulkSpecTransformSpecToAdsBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account;
            if (
              t.campaignIDs == null ||
              !t.regulatedCategories.some(function (e) {
                return r("adsRegulatedCategoryIsRegulatedCategory")(e);
              })
            )
              return e;
            var l = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, l, function (e, n) {
              var l = function (l) {
                var a,
                  s,
                  u = JSON.parse(l),
                  c =
                    (a =
                      (s = o(
                        "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                      ).replaceTargetingSpecPreservingDeviceState(
                        e,
                        u,
                      ).targeting) == null
                        ? void 0
                        : s.toJS()) != null
                      ? a
                      : {};
                r("AdsUEditorCampaignSetTargetingSpecAction").dispatch(
                  {
                    campaignIDs: [n],
                    hostID: t.hostID,
                    targetingBulkSpec: r(
                      "targetingBulkSpecTransformSpecToAdsBulkValue",
                    )(c),
                  },
                  {
                    line: "62",
                    module:
                      "AdsUEditorCampaignTuneSavedTargetingSpecReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              };
              return (
                r("AdsTuneTargetingClient").tuneTargetingString(
                  l,
                  t.regulatedCategories,
                  JSON.stringify(
                    o(
                      "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                    ).replaceTargetingSpecPreservingDeviceState(
                      e,
                      t.targetingSpec,
                    ).targeting,
                  ),
                  a.account_id,
                  t == null ? void 0 : t.specialAdCategoryCountries,
                ),
                o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").saved_audience.set(null),
                  r("AdsCampaignRecordAccessors").saved_audience_id.set(null),
                )(e)
              );
            });
          },
          o("AdsUEditorCampaignTuneSavedAudienceTargetingSpecActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
