__d(
  "AdsCampaignBulkStore",
  [
    "AdsCampaignCombinedStore",
    "AdsCampaignDerivedSchema",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignSchema",
    "AdsDataAtom",
    "AdsEditorSelectedIDsSelector",
    "AdsInterfacesBaseBulkStore",
    "adsCampaignSelector_LEGACY",
    "adsOriginalCampaignSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getIDs = function () {
            return o(
              "AdsEditorSelectedIDsSelector",
            ).AdsEditorSelectedIDsSelector("campaign");
          }),
          (n.__getBasicDataStore = function () {
            return r("AdsCampaignCombinedStore");
          }),
          (n.__getBasicSchema = function () {
            return r("AdsCampaignSchema");
          }),
          (n.__getDerivedSchema = function () {
            return r("AdsCampaignDerivedSchema");
          }),
          (n.__getDerivedSelector = function () {
            return o("adsCampaignSelector_LEGACY").adsCampaignSelector_LEGACY;
          }),
          (n.__getEditStatusStore = function () {
            return r("AdsCampaignDraftFragmentStore");
          }),
          (n.__getOriginalSelector = function () {
            return r("adsOriginalCampaignSelector");
          }),
          t
        );
      })(r("AdsInterfacesBaseBulkStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
