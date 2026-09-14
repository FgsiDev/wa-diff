__d(
  "adsUEditorAdgroupDefaultProductSetIDSelector",
  [
    "AdsPromotedObjectTypes",
    "LoadObject",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupDefaultCommerceProductSetIDSelector",
    "adsUEditorAdgroupSupportsNonCommerceCatalogsSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "adsUEditorGetDefaultProductSetCampaignGroupSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupSupportsNonCommerceCatalogsSelector"),
          r("adsUEditorGetDefaultProductSetCampaignGroupSelector"),
          o("adsUEditorAdgroupDefaultCommerceProductSetIDSelector")
            .adsUEditorAdgroupDefaultCommerceProductSetIDSelector,
          o("adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors")
            .adsUEditorCampaignIsSomeShopsAdsIncentiveProgramSelector,
          r("adsGetUniformValueSelector")(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
        ],
        function (t, n, o, a, l) {
          if (!t) return o;
          var e = a || l === r("AdsPromotedObjectTypes").PIXEL;
          return e
            ? o.match({
                loading: function () {
                  return r("LoadObject").loading({ creatorModuleID: i.id });
                },
                error: function (t) {
                  return n.hasError()
                    ? r("LoadObject").withError(t, { creatorModuleID: i.id })
                    : n;
                },
                loaded: function (t) {
                  return t != null ? o : n;
                },
              })
            : n;
        },
        { name: i.id + ".adsUEditorAdgroupDefaultProductSetIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
