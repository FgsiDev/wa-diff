__d(
  "AdsReachFrequencyRevampCreationFlowReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { isCreateFlow: !1 });
        },
      },
      l = {
        reduce: function (t, n) {
          return { isCreateFlow: !0, cfBuyingType: null };
        },
      },
      s = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { cfBuyingType: n.buyingType });
        },
      },
      u = {
        reduce: function (t, n) {
          return n.createdInCF === !0 && n.shouldPublishImmediately !== !0
            ? babelHelpers.extends({}, t, { isCreateFlow: !1 })
            : t;
        },
      },
      c = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { isCreateFlow: !0 });
        },
      };
    ((i.adsPECreateCloseCreateFlow = e),
      (i.adsPECreateStackQuickCreateFlow = l),
      (i.adsCreationBuyingTypeChangeFlow = s),
      (i.adsDraftDraftPublishFlow = u),
      (i.adsCreationRFInitNewDataFlow = c));
  },
  66,
);
