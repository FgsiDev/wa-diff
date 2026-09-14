__d(
  "adsUEditorAdgroupPEDestinationUrlValueSelector",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsEPAWebsiteUrlPEDefaultOn",
    "AdsUEditorAdgroupBulkSelectors",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorAdgroupBulkSelectors").selectorByAdgroupFn(
      function (e, t) {
        var n,
          a = r("AdsAPIAdgroupRecordGetWebsiteURL")(e, t);
        return r("isStringNullOrEmpty")(a)
          ? (n = o(
              "AdsEPAWebsiteUrlPEDefaultOn",
            ).getEPAWebsiteUrlForPEDefaultOn(e)) != null
            ? n
            : ""
          : a;
      },
    );
    l.peDestinationUrlValueSelector = e;
  },
  98,
);
