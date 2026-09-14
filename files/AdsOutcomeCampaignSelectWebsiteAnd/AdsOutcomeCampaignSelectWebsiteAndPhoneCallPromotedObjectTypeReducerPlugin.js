__d(
  "AdsOutcomeCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsCampaignPromotedObjectVariationMutators",
    "AdsMutators",
    "AdsODAXCampaignReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsSAFRSelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectors",
    "adsSignalSourceContainersSelector",
    "adsUEditorAccountSelector",
    "maybeApplyConversionLocations",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupsMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            safrConfig: o("AdsSAFRSelectors").adsSAFRSelector,
            pixelList: o(
              "adsSignalSourceContainersSelector",
            ).createSignalContainersSelector("website"),
          },
          function (e, t, n) {
            var a = [],
              i = [];
            for (var l of t.campaignIDs) {
              var s,
                u,
                c = (s = e.get(l)) == null ? void 0 : s.getValue();
              (c == null || (u = c.promoted_object) == null
                ? void 0
                : u.variation) != null
                ? a.push(l)
                : i.push(l);
            }
            var d = o(
                "AdsODAXCampaignReducerUtils",
              ).adsCampaignSetChannelReducerFn(
                e,
                babelHelpers.extends({}, t, { campaignIDs: i }),
                babelHelpers.extends({}, n, {
                  promotedObjectType: r("AdsPromotedObjectTypes")
                    .WEBSITE_AND_PHONE_CALL,
                  destinationType: r("AdCampaignDestination")
                    .WEBSITE_AND_PHONE_CALL,
                }),
              ),
              m = o("AdsMutators").mutateEach(d, i, function (e) {
                return o(
                  "maybeApplyConversionLocations",
                ).maybeApplyConversionLocations(
                  e,
                  r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL,
                );
              });
            return o("AdsMutators").mutateEach(m, a, function (e, t) {
              var a;
              return o(
                "maybeApplyConversionLocations",
              ).maybeApplyConversionLocations(
                o(
                  "AdsCampaignPromotedObjectVariationMutators",
                ).setProductSetAndWebsiteAndPhoneCallVariation(
                  e,
                  (a = e.promoted_object) == null ? void 0 : a.pixel_id,
                  n.account,
                  r("nullthrows")(n.campaignGroupsMap.get(t)),
                  n.eligibilityInformation,
                ),
                r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL,
              );
            });
          },
          o(
            "AdsUEditorCampaignSelectWebsiteAndPhoneCallPromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
