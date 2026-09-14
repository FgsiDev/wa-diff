__d(
  "AdsUEditorCampaignGroupSetCatalogAndProductSetReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux",
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
                return t.catalogID != null
                  ? r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.product_catalog_id.set(t.catalogID, e)
                  : r(
                      "AdsCampaignGroupRecordAccessors",
                    ).promoted_object.product_catalog_id.delete(e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetCatalogAndProductSetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
