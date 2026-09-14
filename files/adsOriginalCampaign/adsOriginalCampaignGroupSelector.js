__d(
  "adsOriginalCampaignGroupSelector",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsPECampaignGroupLiveSelectors",
    "LoadObject",
    "adsCreateKeyedStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("LoadObject").withValue(
        babelHelpers.extends({}, Object.freeze({})),
        { creatorModuleID: i.id },
      ),
      s = r("adsCreateKeyedStoreSelector")(
        [r("AdsCampaignGroupDraftFragmentStore")].concat(
          o("AdsPECampaignGroupLiveSelectors").getSelector.getStores(),
        ),
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (n) {
            if (r("AdsCampaignGroupDraftFragmentStore").get(n).isLoading())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (r("AdsCampaignGroupDraftFragmentStore").isNew(n)) return e;
            var t = o("AdsPECampaignGroupLiveSelectors").getSelector()(n);
            return t ===
              r("LoadObject").withValue(void 0, { creatorModuleID: i.id })
              ? e
              : t;
          },
          computeResult: function (t, n) {
            return n;
          },
          areInputsEqual: function (t, n) {
            return t === n;
          },
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
