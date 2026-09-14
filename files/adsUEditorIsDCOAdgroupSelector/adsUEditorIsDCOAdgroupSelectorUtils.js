__d(
  "adsUEditorIsDCOAdgroupSelectorUtils",
  ["AdsAssetFeedUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.length === 1 &&
        o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e[0].adgroup)
      );
    }
    l.adsUEditorIsDCOAdgroup = e;
  },
  98,
);
