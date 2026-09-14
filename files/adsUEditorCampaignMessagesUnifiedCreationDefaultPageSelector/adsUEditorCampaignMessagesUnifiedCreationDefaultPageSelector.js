__d(
  "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
  [
    "AdsPageInstagramAccountStore_RELAY",
    "AdsUEditorPageSelector",
    "adsCreateSelector",
    "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelectorUtils",
    "adsUEditorCampaignUniformPromotedObjectPageIDSelector",
    "adsUEditorDefaultPageValuesSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorDefaultPageValuesSelector")
            .adsUEditorDefaultPageValuesSelector,
          r("adsUEditorCampaignUniformPromotedObjectPageIDSelector"),
          r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector(),
          o("AdsUEditorPageSelector").pageSelector,
        ],
        function (t, n, r, a) {
          var e,
            i =
              a == null || (e = a.getValue()) == null || (e = e.get(0)) == null
                ? void 0
                : e.id;
          return o(
            "adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelectorUtils",
          ).adsUEditorCampaignMessagesUnifiedCreationDefaultPage(t, n, r, i);
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignMessagesUnifiedCreationDefaultPageSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
