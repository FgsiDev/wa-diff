__d(
  "AdsCampaignAppSelectorSearchableEntry",
  ["AdsCampaignAppSelectorStrings", "SearchableEntry", "ads-app-platforms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (r("SearchableEntry"))({
        title: s(e),
        subtitle: u(e),
        uniqueID: c(e),
        photo: e.icon_url,
        uri: e.url,
        keywordString: e.app_id,
        auxiliaryData: e,
      });
    }
    function s(e) {
      return e.store !== o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD
        ? e.name
        : e.name + " (iPad)";
    }
    function u(e) {
      return e.app_id != null
        ? "App ID: " + e.app_id
        : o("AdsCampaignAppSelectorStrings")
            .APP_NOT_CONNECTED_TO_AD_ACCOUNT_SUBTITLE;
    }
    function c(e) {
      return e.unique_id + ":" + e.app_id;
    }
    l.createSearchableEntry = e;
  },
  98,
);
