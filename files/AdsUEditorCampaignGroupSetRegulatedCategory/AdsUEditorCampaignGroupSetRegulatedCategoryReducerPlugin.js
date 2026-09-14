__d(
  "AdsUEditorCampaignGroupSetRegulatedCategoryReducerPlugin",
  [
    "AdsCampaignGroupMutateRegulatedCategories",
    "AdsRegulatedCategory",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux",
    "ISOCountryCode",
    "adsCommonTargetingGetDefaultCountry",
    "adsUEditorAccountSelector",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a,
              i = n.account;
            if (t.isOptedIn === !1)
              return r("AdsCampaignGroupMutateRegulatedCategories")(
                e,
                t.campaignGroupIDs,
                t.hostID,
                [r("AdsRegulatedCategory").NONE],
                [],
                [],
                [],
              );
            var l =
              (a = t.regulatedCategories) != null
                ? a
                : [r("AdsRegulatedCategory").NONE];
            return r("AdsCampaignGroupMutateRegulatedCategories")(
              e,
              t.campaignGroupIDs,
              t.hostID,
              l,
              t.selectedCountries,
              t.userAuthorizedCountries,
              [
                o("enumUtils").assertFromKey(
                  r("adsCommonTargetingGetDefaultCountry")(i),
                  r("ISOCountryCode"),
                ),
              ],
            );
          },
          o("AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
