__d(
  "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
    "adsUEditorAccountSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          campaignGroupMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
        },
        function (e, t, n) {
          var a = n.account,
            i = n.campaignGroupMap,
            l = n.eligibilityInformation,
            u = t.pixelData,
            c = t.offlineData;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, t) {
            var n,
              o = r("nullthrows")(i.get(t)),
              d =
                e == null || (n = e.promoted_object) == null
                  ? void 0
                  : n.full_funnel_objective;
            return o.is_full_funnel === !0 &&
              d != null &&
              d !== r("AdsAPIObjectives").OUTCOME_SALES
              ? e
              : s(e, o, a, l, c, u);
          });
        },
        [
          o(
            "AdsUEditorCampaignSelectWebsiteAndInStorePromotedObjectTypeDataActionFlux",
          ).actionType,
          o(
            "AdsUEditorPromotedObjectSetWebsiteAndInStoreOptimizationFieldsDataActionFlux",
          ).actionType,
        ],
      ),
    };
    function s(e, t, n, a, i, l) {
      return o("AdsMutators").chain(function (e) {
        return o(
          "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
        ).setPromotedObjectForOmniConversionOptimization(
          e,
          t,
          n,
          a,
          r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE,
          l == null ? void 0 : l.pixel_id,
          i == null ? void 0 : i.offline_conversion_data_set_id,
        );
      })(e);
    }
    var u = e;
    l.default = u;
  },
  98,
);
