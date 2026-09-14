__d(
  "adsIsSAInDAEnabledSelector",
  [
    "AdsAPIObjectives",
    "AdsAutomaticFlowUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsIsCPASAdAccountSelector",
    "adsUEditorInjectEditingAdgroupContext",
    "adsUEditorInjectEditingCampaignContext",
    "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
    "adsUEditorSAinDAPCAEventSourceEligibilitySelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.product_catalog_id;
            },
          ),
          r("adsUEditorInjectEditingAdgroupContext")(
            r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          ),
          r("adsGetUniformValueSelector")(
            r("adsUEditorInjectEditingAdgroupContext")(
              r(
                "adsUEditorODAXTranslatedObjectivesForSelectedCampaignsSelector",
              ),
            ),
            r("AdsAPIObjectives").NONE,
          ),
          r("adsUEditorInjectEditingCampaignContext")(
            r("adsUEditorSAinDAPCAEventSourceEligibilitySelector"),
          ),
          r("adsIsCPASAdAccountSelector"),
        ],
        function (t, n, r, a, i) {
          return o("AdsAutomaticFlowUtils").adsIsSAInDAEnabledLogic(
            t,
            n,
            r,
            a,
            i,
          );
        },
        { name: i.id + ".adsIsSAInDAEnabledSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
