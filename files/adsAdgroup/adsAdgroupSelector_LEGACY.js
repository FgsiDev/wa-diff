__d(
  "adsAdgroupSelector_LEGACY",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupCombinedStore",
    "AdsDataAtom",
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "AdsSelectorUtils",
    "FluxDerivedStore",
    "adsPELockedAndPublishingSelectors",
    "adsPromotedObjectTypeSelector_LEGACY",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
          return t.call(this, s || (s = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__computeResult = function (t, n) {
            var e = n.adgroupLoadObject,
              a = n.campaignGroupLoadObject,
              i = n.campaignLoadObject;
            return o("AdsLoadObjectUtils")
              .all([e, i, a])
              .map(function (e) {
                var t,
                  n = e[0],
                  a = e[1],
                  i = e[2],
                  l = i.objective,
                  s = (t = i.promoted_object) == null ? void 0 : t.page_id,
                  u = r("adsPromotedObjectTypeSelector_LEGACY")(n.adset_id),
                  c = o(
                    "AdsAPICampaignRecordUtils",
                  ).getDerivedPromotedObjectTypeWithVariation(a),
                  d = a.optimization_goal;
                return {
                  id: n.id,
                  l3PromotedPageID: s,
                  objective: l,
                  promotedObjectType: u,
                  promotedObjectTypeVariation: c,
                  optimizationGoal: d,
                };
              });
          }),
          (a.__getData = function (n) {
            (s || (s = r("AdsDataAtom"))).isDispatching() &&
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  o("AdsPEAdgroupSelectors").getByFieldsSelector,
                ]),
              );
            var t = o("AdsPEAdgroupSelectors").getByFieldsSelector()(
                n,
                { adset_id: null, campaign_id: null, id: null },
                i.id,
              ),
              a = t.map(function (e) {
                return r("AdsCampaignCombinedStore").getObject(e.adset_id);
              }),
              l = t.map(function (e) {
                return r("AdsCampaignGroupCombinedStore").getObject(
                  e.campaign_id,
                );
              }),
              u = r("AdsAccountStore").getSelectedAccount(),
              c = r("AdsAdgroupDraftFragmentStore").isNew(n),
              d = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector(),
              m = o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector();
            return {
              accountLoadObject: u,
              adgroupLoadObject: t,
              campaignLoadObject: a,
              campaignGroupLoadObject: l,
              isNewAdgroup: c,
              lockedIDs: m,
              publishingIDs: d,
            };
          }),
          (a.__getStores = function () {
            var e = [
              r("AdsAccountStore"),
              r("AdsAdgroupDraftFragmentStore"),
              r("AdsCampaignCombinedStore"),
              r("AdsCampaignGroupCombinedStore"),
            ].concat(
              r("adsPromotedObjectTypeSelector_LEGACY").getStores(),
              o("AdsPEAdgroupSelectors").getByFieldsSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPELockedIDsSelector.getStores(),
              o(
                "adsPELockedAndPublishingSelectors",
              ).adsPEPublishingIDsSelector.getStores(),
            );
            return e.filter(Boolean);
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
          }),
          n
        );
      })(r("FluxDerivedStore"));
    u.__moduleID = i.id;
    var c = new u(),
      d = [c],
      m = function (t) {
        return c.get(t);
      };
    ((m.getStores = function () {
      return d;
    }),
      (m.isGetStoresStatic = !0),
      (m.isGetStoresPure = !0),
      (m.rawSelectFn = function (e) {
        return c.get(e);
      }));
    var p = m,
      _ = p;
    l.default = _;
  },
  98,
);
