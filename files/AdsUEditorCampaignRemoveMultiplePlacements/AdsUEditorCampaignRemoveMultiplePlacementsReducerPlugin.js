__d(
  "AdsUEditorCampaignRemoveMultiplePlacementsReducerPlugin",
  [
    "AdCampaignToastUtils",
    "AdsAddToastCardAction",
    "AdsDataAtom",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPositionPlugins",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignRemoveMultiplePlacementsActionFlux",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a) {
        (e || (e = r("AdsDataAtom"))) != null &&
          r("AdsAddToastCardAction") != null &&
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            var e = n.groupingPluginKey,
              t = {
                campaignIDs: n.campaignIDs,
                positionPluginKeys: n.positionPluginKeys,
                parentPositionPluginKey: n.parentPositionPluginKey,
              };
            (e != null &&
              (t = babelHelpers.extends({}, t, { groupingPluginKey: e })),
              r("AdsAddToastCardAction").dispatch(
                {
                  toastCard: o("AdCampaignToastUtils").successToastDetails(
                    !1,
                    t,
                    a,
                  ),
                },
                {
                  line: "69",
                  module:
                    "AdsUEditorCampaignRemoveMultiplePlacementsReducerPlugin.js",
                  moduleID: i.id,
                },
              ));
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
                    t = o("AdsPlacementAPISpecWriterUtils").removeGroup(
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
          r("AdsUEditorCampaignRemoveMultiplePlacementsActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
