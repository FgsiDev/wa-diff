__d(
  "adsUEditorAdgroupWebToAppSelector",
  [
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorSkanAttributionSelectors",
    "AdsWebToAppUtils",
    "WebToAppSkanEnabledSitevarConfig.experimental",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e,
          n = (e = t.targeting) == null ? void 0 : e.publisher_platforms;
        if (n == null) return !1;
        for (var o of r("WebToAppSkanEnabledSitevarConfig.experimental")
          .enabledPlacements)
          if (n.includes(o)) return !0;
        return !1;
      },
      s = r("adsCreateSelector")(
        [],
        function () {
          return !1;
        },
        { name: i.id + ".alwaysFalseSelector" },
      ),
      u = r("adsChooseSelector")(
        function () {
          return r("gkx")("5521");
        },
        o("AdsUEditorCampaignSelectors").campaigns.somePlainObject(e),
        s,
        !0,
        i.id + ".shouldShowForSkanCampaignSelector",
      ),
      c = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            r("adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector"),
            r("AdsAPIObjectives").NONE,
          ),
          o("AdsUEditorAdgroupBulkSelectors").selectorByAdObjectsFn(
            o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType,
          ),
          u,
          o("AdsUEditorSkanAttributionSelectors")
            .isSkanCampaignAttributionSelector,
        ],
        function (t, n, r, a) {
          return {
            isAdWebToAppEligible:
              o("AdsWebToAppUtils").isAdWebToAppEligible(
                t,
                o("AdsBulkValueUtils").getUniformValueOrDefault(n),
              ) &&
              (!a || r),
          };
        },
        { name: i.id + ".adsUEditorAdgroupWebToAppSelector" },
      );
    ((l.isPlacementSupported = e),
      (l.shouldShowForSkanCampaignSelector = u),
      (l.adsUEditorAdgroupWebToAppSelector = c));
  },
  98,
);
