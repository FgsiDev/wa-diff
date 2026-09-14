__d(
  "AdsUEditorCampaignGroupSetCatalogUserAcknowledgedReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetCatalogUserAcknowledgedActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).promoted_object.is_catalog_user_acknowledged.get(e) === !0
                  ? e
                  : r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.is_catalog_user_acknowledged.set(!0, e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetCatalogUserAcknowledgedActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
