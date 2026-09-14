__d(
  "adsPageSetLoadObjectBulkParentPageIDSelectorUtils",
  ["AdsBulkValueUtils", "AdsLoadObjectUtils", "filterNulls"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("filterNulls")(e.getValues());
      return o("AdsLoadObjectUtils")
        .all(Array.from(t(n).values()))
        .map(function (e) {
          return o("AdsBulkValueUtils").aggregate(
            e.map(function (e) {
              return e.parent_page_id;
            }),
          );
        });
    }
    l.adsPageSetLoadObjectBulkParentPageID = e;
  },
  98,
);
