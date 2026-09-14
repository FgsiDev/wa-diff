__d(
  "adsUEditorAdgroupDefaultPagePostSelector",
  [
    "AdsCampaignRecordAccessors",
    "AdsDefaultPageDataProvider",
    "AdsODAXUtils",
    "AdsPagePostUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsDefaultPageDataProvider").toFluxSelector(),
      u = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorSelectedCampaignIDsSelector"),
          s,
          (e = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.buying_type;
            },
          ),
          e.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.objective;
          }),
          e.campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").optimization_goal.get,
          ),
          e.campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").destination_type.get,
          ),
          r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
        ],
        function (t, n, r, a, i, l, s, u) {
          if (t == null || n.length !== 1) return null;
          var e = r.get(t.account_id).getValue(),
            c = e == null ? void 0 : e.pagePost,
            d = e == null ? void 0 : e.createdTime;
          if (c == null || d == null) return null;
          var m = i.getValueForIndex(0),
            p = m
              ? o("AdsODAXUtils").maybeTranslateObjective(
                  m,
                  u.getValueForIndex(0),
                  l.getValueForIndex(0),
                )
              : null;
          return o("AdsPagePostUtils").getFilterErrors(
            c,
            p,
            l.getValueForIndex(0),
            t,
            a.getValueForIndex(0),
            s.getValueForIndex(0),
          ).length === 0
            ? { pagePost: c, createdTime: d }
            : null;
        },
        { name: i.id + ".adsUEditorAdgroupDefaultPagePostSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
