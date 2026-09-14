__d(
  "AdsUEditorCampaignGroupsAreASASelectors",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsMixedValue",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUniformValue",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = o(
        "AdsUEditorCampaignGroupSelectors",
      )).campaignGroups.everyPlainObject(
        (s = o("AdsAPICampaignGroupRecordUtils")).isAutomatedShoppingAds,
      ),
      c = e.campaignGroups.everyPlainObject(s.isPreUnifiedAutomatedShoppingAds),
      d = e.campaignGroups.somePlainObject(s.isPreUnifiedAutomatedShoppingAds),
      m = e.campaignGroups.somePlainObject(s.isAutomatedShoppingAds),
      p = e.campaignGroups.somePlainObject(s.isUnifiedAutomatedShoppingAds),
      _ = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignGroupPlainObjectsSelector")],
        function (t) {
          return (
            (t == null ? void 0 : t.length) > 0 &&
            t.every(o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds)
          );
        },
        { name: i.id + ".areAllNonEmptyCampaignGroupsASASelector" },
      ),
      f = r("adsCreateSelector")(
        [u, m],
        function (t, n) {
          return t
            ? new (r("AdsUniformValue"))(!0)
            : n
              ? new (r("AdsMixedValue"))([])
              : new (r("AdsUniformValue"))(!1);
        },
        { name: i.id + ".areCampaignGroupsASASelector" },
      ),
      g = r("adsCreateSelector")(
        [f],
        function (t) {
          return t instanceof r("AdsMixedValue");
        },
        { name: i.id + ".areCampaignGroupsMixedASASelector" },
      );
    ((l.areAllCampaignGroupsASASelector = u),
      (l.areAllCampaignGroupsPreUnificationASASelector = c),
      (l.areSomeCampaignGroupsPreUnificationASASelector = d),
      (l.areSomeCampaignGroupsASASelector = m),
      (l.areSomeCampaignGroupsUnifiedASASelector = p),
      (l.areAllNonEmptyCampaignGroupsASASelector = _),
      (l.areCampaignGroupsASASelector = f),
      (l.areCampaignGroupsMixedASASelector = g));
  },
  98,
);
