__d(
  "adsOnboardedCharitiesPageSelector",
  [
    "AdsAPIObjectives",
    "AdsUEditorSelectors",
    "DonationDestinationEligiblePagesDataProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsOnboardedCharitiesPageSelectorUtils",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
            r("AdsAPIObjectives").NONE,
          ),
          r("DonationDestinationEligiblePagesDataProvider").toFluxSelector(),
        ],
        function (t, n, r) {
          return o(
            "adsOnboardedCharitiesPageSelectorUtils",
          ).adsOnboardedCharitiesPageLogic(t, n, r);
        },
        { name: i.id + ".adsOnboardedCharitiesPageSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
