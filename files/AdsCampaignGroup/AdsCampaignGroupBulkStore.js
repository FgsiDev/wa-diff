__d(
  "AdsCampaignGroupBulkStore",
  [
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupDerivedSchema",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignGroupSchema",
    "AdsDataAtom",
    "AdsEditorSelectedIDsSelector",
    "AdsInterfacesBaseBulkStore",
    "adsCampaignGroupSelector_LEGACY",
    "adsOriginalCampaignGroupSelector",
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
            ).AdsEditorSelectedIDsSelector("campaignGroup");
          }),
          (n.__getBasicDataStore = function () {
            return r("AdsCampaignGroupCombinedStore");
          }),
          (n.__getBasicSchema = function () {
            return r("AdsCampaignGroupSchema");
          }),
          (n.__getDerivedSchema = function () {
            return r("AdsCampaignGroupDerivedSchema");
          }),
          (n.__getDerivedSelector = function () {
            return r("adsCampaignGroupSelector_LEGACY");
          }),
          (n.__getEditStatusStore = function () {
            return r("AdsCampaignGroupDraftFragmentStore");
          }),
          (n.__getOriginalSelector = function () {
            return r("adsOriginalCampaignGroupSelector");
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
