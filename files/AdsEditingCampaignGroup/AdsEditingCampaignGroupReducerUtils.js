__d(
  "AdsEditingCampaignGroupReducerUtils",
  [
    "AdsCampaignGroupCombinedStore",
    "AdsDataAtom",
    "AdsEditingCampaignGroupContext",
    "AdsSelectorUtils",
    "AdsUEditorContextFactory",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "mapObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        callReduce: function (a, l, c, d) {
          if (
            !o("AdsUEditorUtils").shouldHostHandleAction(
              c,
              r("AdsUEditorHostIDs").EDITING,
            )
          )
            return l;
          var t = o("AdsUEditorContextFactory").getForIDs(
              r("AdsEditingCampaignGroupContext"),
              c.campaignGroupIDs || [],
              i.id,
            ),
            m = n("AdsCampaignGroupCombinedStore"),
            p = m.getDispatchToken(),
            _ = (u || (u = o("AdsSelectorUtils")))
              .getStoreDispatchTokens(Object.values(d), t)
              .filter(function (e) {
                return e !== p;
              });
          return (
            (e || (e = r("AdsDataAtom"))).waitFor(_),
            a(
              l,
              c,
              (s || (s = r("mapObject")))(d, function (e) {
                return e(t);
              }),
            )
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
