__d(
  "AdsUEditorPromotedObjectSetWebsiteAppAndInStoreOptimizationFieldsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAppAndInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorPromotedObjectSetWebsiteAppAndInStoreOptimizationFieldsDataActionFlux",
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
          o(
            "AdsUEditorCampaignSelectWebsiteAppAndInStorePromotedObjectTypeDataActionFlux",
          ).actionType,
          o(
            "AdsUEditorPromotedObjectSetWebsiteAppAndInStoreOptimizationFieldsDataActionFlux",
          ).actionType,
        ],
      ),
    };
    function s(e, t, n, a, i) {
      var l,
        s,
        u = i.pixelData,
        c = i.offlineData,
        d = i.appData,
        m = r("immutable")
          .Map()
          .set(
            "application_id",
            (l = d == null ? void 0 : d.applicationID) != null ? l : "",
          )
          .set("custom_event_type", "PURCHASE")
          .set(
            "object_store_urls",
            (s = d == null ? void 0 : d.objectStoreUrls) != null ? s : [],
          );
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsUEditorCampaignPromotedObjectOmnichannelOptimizationFieldsReducerPluginUtils",
          ).setPromotedObjectForOmniConversionOptimization(
            e,
            t,
            n,
            a,
            r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE,
            u == null ? void 0 : u.pixelID,
            c == null ? void 0 : c.offlineConversionDataSetId,
          );
        },
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.app.set(r("immutable").List([m])),
      )(e);
    }
    var u = e;
    l.default = u;
  },
  98,
);
