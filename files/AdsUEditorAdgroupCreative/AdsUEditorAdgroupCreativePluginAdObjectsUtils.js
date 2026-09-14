__d(
  "AdsUEditorAdgroupCreativePluginAdObjectsUtils",
  [
    "AdsAdgroupCreativePluginResolver",
    "AdsUEditorCampaignAdObjectsUtils",
    "CatalogVertical",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("AdsAdgroupCreativePluginResolver").resolve(s(e, t));
    }
    function s(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsUEditorCampaignAdObjectsUtils").getCommonPivots(e),
        {
          offerStateType: o(
            "AdsUEditorCampaignAdObjectsUtils",
          ).getOfferStateType(e),
          catalogVertical: t || r("CatalogVertical").NONE,
        },
      );
    }
    ((l.getAdgroupCreativePlugin = e), (l.getAdgroupCreativePluginPivots = s));
  },
  98,
);
