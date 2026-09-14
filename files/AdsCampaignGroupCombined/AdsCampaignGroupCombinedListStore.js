__d(
  "AdsCampaignGroupCombinedListStore",
  [
    "invariant",
    "AdsBaseCombinedListStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignGroupLiveListStore",
    "AdsPECampaignGroupSelectors",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getFor = function (n) {
          return e.prototype.__getFor.call(this, n, "account", n);
        }),
        (n.__getAllDraftIDsForAccount = function (t) {
          return r("AdsCampaignGroupDraftFragmentStore").getNewIDsFor(t);
        }),
        (n.__getLiveList = function (t, n, o) {
          switch (n) {
            case "account":
              return r("AdsCampaignGroupLiveListStore").getFor(t);
            default:
              s(0, 620);
          }
        }),
        (n.__getParentIDForDraftChild = function (t, n) {
          var e = o("AdsPECampaignGroupSelectors")
            .getCachedByFieldsSelector()(t, { account_id: null }, i.id)
            .getValue();
          if (!e) return null;
          switch (n) {
            case "account":
              return e.account_id;
            default:
              s(0, 620);
          }
        }),
        (n.__getStores = function () {
          return [].concat(
            o(
              "AdsPECampaignGroupSelectors",
            ).getCachedByFieldsSelector.getStores(),
            [
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsCampaignGroupLiveListStore"),
            ],
          );
        }),
        t
      );
    })(r("AdsBaseCombinedListStore"));
    e.__moduleID = i.id;
    var u = new e();
    l.default = u;
  },
  98,
);
