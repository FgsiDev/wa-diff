__d(
  "adsUEditorFilterPagesSelector_LEGACY",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsProfilePlusAssets",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsOnboardedCharitiesPageSelector",
    "err",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o) {
        o === void 0 && (o = null);
        var e = r("immutable").List(
          t.filter(function (e) {
            return n.includes(e.id);
          }),
        );
        return e.size < 1 && o != null
          ? r("LoadObject").withError(r("err")(o), { creatorModuleID: i.id })
          : r("LoadObject").withValue(e, { creatorModuleID: i.id });
      },
      s = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.map(
            o("AdsAPICampaignGroupRecordUtils").getObjective,
          ),
          r("adsOnboardedCharitiesPageSelector"),
          o("AdsUEditorCampaignSelectors").adObjectsList.some(function (e) {
            return (
              o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e) ===
              r("AdsPromotedObjectTypes").DONATION
            );
          }),
        ],
        function (n, a, l) {
          return function (t) {
            var s = t,
              u = o("AdsProfilePlusAssets").isAnyObjectiveBlockedForProfileAds(
                n,
              );
            if (u) {
              var c = t.getValue();
              if (c == null)
                return r("LoadObject").withValue(r("immutable").List(), {
                  creatorModuleID: i.id,
                });
              var d = o("AdsProfilePlusAssets").filterProfilePlusDelegatePages(
                c.toArray(),
              );
              s = s.setValue(r("immutable").List(d));
            }
            if (!s.hasValueWithoutError()) return s;
            if (s.isLoading())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var m = s.getValue();
            if (m == null)
              return r("LoadObject").withValue(r("immutable").List(), {
                creatorModuleID: i.id,
              });
            var p = [];
            if (l) p = a.getValue() || [];
            else return r("LoadObject").withValue(m, { creatorModuleID: i.id });
            return e(m, p);
          };
        },
        { name: i.id + ".adsUEditorFilterPagesSelector_LEGACY" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
