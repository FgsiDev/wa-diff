__d(
  "AdsUEditorPromotedObjectSetInStoreOptimizationFieldsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorPromotedObjectSetInStoreOptimizationFieldsDataActionFlux",
    "adsUEditorAccountSelector",
    "immutable",
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
            l = n.eligibilityInformation;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
            var o = r("nullthrows")(i.get(n));
            return s(e, o, a, l, t);
          });
        },
        [
          r("AdsUEditorCampaignSelectInStorePromotedObjectTypeDataActionFlux")
            .actionType,
          r(
            "AdsUEditorPromotedObjectSetInStoreOptimizationFieldsDataActionFlux",
          ).actionType,
        ],
      ),
    };
    function s(e, t, n, a, i) {
      var l,
        s = i.offlineData,
        u = r("immutable")
          .Map()
          .set(
            "offline_conversion_data_set_id",
            (l = s == null ? void 0 : s.offlineConversionDataSetId) != null
              ? l
              : "",
          )
          .set("custom_event_type", "PURCHASE")
          .set("is_store_only", !0);
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
          ).setPromotedObjectForOmniConversionOptimization(
            e,
            t,
            n,
            a,
            r("AdsPromotedObjectTypes").IN_STORE,
            s == null ? void 0 : s.offlineConversionDataSetId,
            null,
          );
        },
        o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.omnichannel_object
            .pixel.delete,
          r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.offline.set(
            r("immutable").List([u]),
          ),
        ),
      )(e);
    }
    var u = e;
    l.default = u;
  },
  98,
);
