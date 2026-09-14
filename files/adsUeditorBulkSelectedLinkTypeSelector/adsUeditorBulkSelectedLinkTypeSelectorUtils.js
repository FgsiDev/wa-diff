__d(
  "adsUeditorBulkSelectedLinkTypeSelectorUtils",
  ["AdsBulkValueUtils", "adsUeditorBulkSelectedLinkTypeSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      return e.reduce(function (e, l) {
        return (
          (e[l.adgroup.id] = o(
            "adsUeditorBulkSelectedLinkTypeSelector",
          ).getLinkTypeForAdgroupAdObjects(l, t, n, r, a, i)),
          e
        );
      }, {});
    }
    function s(e) {
      return o("AdsBulkValueUtils").aggregate(Object.values(e));
    }
    ((l.adsUEditorAdsAdObjectLinkTypeMap = e),
      (l.adsUEditorBulkSelectedLinkType = s));
  },
  98,
);
