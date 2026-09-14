__d(
  "AdsMgmtCampaignObjectiveDataUtil",
  [
    "AdsAPIObjectives",
    "AdsEditingAdgroupContext",
    "AdsEditingCampaignContext",
    "AdsEditingCampaignGroupContext",
    "AdsUEditorContextFactory",
    "AdsUEditorSelectors",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
      o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
        return e.objective;
      }),
      r("AdsAPIObjectives").NONE,
    );
    function s(t) {
      var n;
      return (
        (t == null ? void 0 : t.selected_campaign_group_ids) != null
          ? (n = o("AdsUEditorContextFactory").getForIDs(
              r("AdsEditingCampaignGroupContext"),
              Array.from(t.selected_campaign_group_ids),
              i.id,
            ))
          : (t == null ? void 0 : t.selected_campaign_ids) != null
            ? (n = o("AdsUEditorContextFactory").getForIDs(
                r("AdsEditingCampaignContext"),
                Array.from(t.selected_campaign_ids),
                i.id,
              ))
            : (t == null ? void 0 : t.selected_adgroup_ids) != null &&
              (n = o("AdsUEditorContextFactory").getForIDs(
                r("AdsEditingAdgroupContext"),
                Array.from(t.selected_adgroup_ids),
                i.id,
              )),
        n ? e(n) : r("AdsAPIObjectives").NONE
      );
    }
    l.getObjective = s;
  },
  98,
);
