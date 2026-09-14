__d(
  "AdsUEditorCampaignGroupSetRegulatedCategoryCountriesActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.campaignGroupIDs.forEach(function (e) {
            return r("adsMgmtLogger")(
              "regulated_category_country_selector_selected",
              {
                new_value: t.selectedCountries.toString(),
                campaign_group_id: e,
              },
              "campaigngroup_edit",
            );
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
