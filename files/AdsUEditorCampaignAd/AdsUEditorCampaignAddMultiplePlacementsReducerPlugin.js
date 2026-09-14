__d(
  "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin",
  [
    "AdCampaignToastUtils",
    "AdsAddToastCardAction",
    "AdsDataAtom",
    "AdsDismissToastCardAction",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPositionPlugins",
    "AdsUEditorCampaignAddMultiplePlacementsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a) {
        (e || (e = r("AdsDataAtom"))) != null &&
        r("AdsAddToastCardAction") != null &&
        o("AdCampaignToastUtils").successToastDetails != null
          ? (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              r("AdsAddToastCardAction").dispatch(
                {
                  toastCard: o("AdCampaignToastUtils").successToastDetails(
                    !0,
                    {
                      campaignIDs: n.campaignIDs,
                      parentPositionPluginKey: n.parentPositionPluginKey,
                      groupingPluginKey: n.groupingPluginKey,
                      positionPluginKeys: n.positionPluginKeys,
                    },
                    a,
                  ),
                },
                {
                  line: "47",
                  module:
                    "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin.js",
                  moduleID: i.id,
                },
              );
            })
          : n.dismissToast === !0 &&
            (e || (e = r("AdsDataAtom"))) != null &&
            r("AdsDismissToastCardAction") != null &&
            (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              r("AdsDismissToastCardAction").dispatch(
                { id: "campaignPlacementConfirmationToast" },
                {
                  line: "67",
                  module:
                    "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin.js",
                  moduleID: i.id,
                },
              );
            });
      },
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = t.campaignIDs,
              l = t.positionPluginKeys,
              u = o("AdsMutators").mutateEach(e, i, function (e) {
                var t = e;
                return (
                  l.forEach(function (e) {
                    var n = r("AdsPlacementPositionPlugins").get(e),
                      i = o(
                        "AdsPlacementAPISpecReaderUtils",
                      ).getPositionFieldFromPositionPlugin(n);
                    t = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      t,
                      e,
                      a,
                      i,
                      n.platformKey,
                    );
                  }),
                  t
                );
              });
            return (s(t, a), u);
          },
          r("AdsUEditorCampaignAddMultiplePlacementsActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
