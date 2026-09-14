__d(
  "AdsEditingCampaignDataReducerUtils",
  [
    "AdsDataAtom",
    "AdsEditingCampaignContext",
    "AdsPECampaignSelectors",
    "AdsSelectorUtils",
    "AdsUEditorContextFactory",
    "AdsUEditorHostIDs",
    "mapObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        callReduce: function (a, l, c, d, m) {
          if (c.hostID === r("AdsUEditorHostIDs").EDITING) {
            var t = o("AdsUEditorContextFactory").getForIDs(
                r("AdsEditingCampaignContext"),
                c.campaignIDs || [],
                i.id,
              ),
              p = n("AdsPECampaignSelectors"),
              _ = (u || (u = o("AdsSelectorUtils"))).getStoreDispatchTokens(
                [p.getByFieldsSelector],
                t,
              ),
              f = u
                .getStoreDispatchTokens(Object.values(d), t)
                .filter(function (e) {
                  return !_.includes(e);
                });
            ((e || (e = r("AdsDataAtom"))).waitFor(f),
              (l = a(
                l,
                c,
                (s || (s = r("mapObject")))(d, function (e) {
                  return e(t);
                }),
              )));
          }
          return l;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
