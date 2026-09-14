__d(
  "AdsOutcomeCampaignSelectWebsiteAndMessagesPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAndMessagesPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "PagelessCTXAdsUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsSignalSourceContainersSelector",
    "adsUEditorAccountSelector",
    "adsUEditorIsPagelessAdvertiserSelector",
    "getErrorSafe",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          try {
            return r("ifRequired")(
              "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
              function (e) {
                return e(t);
              },
              function () {
                return null;
              },
            );
          } catch (e) {
            return (
              r("FBLogger")("odax", "require_weak")
                .catching(r("getErrorSafe")(e))
                .mustfix("fail to fetch default page"),
              null
            );
          }
        },
        { name: i.id + ".defaultPageSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignInstagramSelectors")
            .businessInstagramAccountsWithIABP,
        ],
        function (t) {
          var e;
          return t && t.hasValue()
            ? o("PagelessCTXAdsUtils").getInstagramAccountBackedPageID(
                (e = t.getValue()) == null ? void 0 : e.data,
              )
            : null;
        },
        { name: i.id + ".defaultIABPIDSelector" },
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            defaultPageID: e,
            defaultIABPID: s,
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            safrConfig: o("AdsSAFRSelectors").adsSAFRSelector,
            isPagelessAdvertiser: o("adsUEditorIsPagelessAdvertiserSelector")
              .adsUEditorIsPagelessAdvertiserSelector,
            pixelList: o(
              "adsSignalSourceContainersSelector",
            ).createSignalContainersSelector("website"),
          },
          function (e, t, n) {
            return o(
              "AdsODAXCampaignReducerUtils",
            ).adsCampaignSetChannelReducerFn(e, t, {
              account: n.account,
              campaignGroupsMap: n.campaignGroupsMap,
              defaultIABPID: n.defaultIABPID,
              defaultPageID: n.defaultPageID,
              eligibilityInformation: n.eligibilityInformation,
              pixelList: n.pixelList,
              safrConfig: n.safrConfig,
              promotedObjectType: r("AdsPromotedObjectTypes")
                .WEBSITE_AND_MESSAGES,
              destinationType: r("AdCampaignDestination").WEBSITE_AND_MESSAGES,
            });
          },
          o(
            "AdsUEditorCampaignSelectWebsiteAndMessagesPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
