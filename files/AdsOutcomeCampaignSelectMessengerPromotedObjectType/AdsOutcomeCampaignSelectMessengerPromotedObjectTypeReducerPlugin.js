__d(
  "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsManagerIGLoginUtils",
    "AdsODAXCampaignReducerUtils",
    "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "FBLogger",
    "PagelessCTXAdsUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
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
          },
          function (e, t, n) {
            var a = n;
            return (
              o("AdsManagerIGLoginUtils").getIsIGLogin(n.account)
                ? (a = babelHelpers.extends({}, a, {
                    destinationType: r("AdCampaignDestination")
                      .INSTAGRAM_DIRECT,
                  }))
                : t.campaignIDs.length > 0 &&
                  t.campaignIDs.every(function (e) {
                    var t;
                    return (
                      ((t = n.campaignGroupsMap.get(e)) == null
                        ? void 0
                        : t.collaborative_ads_partner_info) != null
                    );
                  }) &&
                  (a = babelHelpers.extends({}, a, {
                    destinationType: r("AdCampaignDestination").MESSENGER,
                  })),
              o("AdsODAXCampaignReducerUtils").adsCampaignSetChannelReducerFn(
                e,
                t,
                babelHelpers.extends({}, a, {
                  promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
                }),
              )
            );
          },
          o("AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
