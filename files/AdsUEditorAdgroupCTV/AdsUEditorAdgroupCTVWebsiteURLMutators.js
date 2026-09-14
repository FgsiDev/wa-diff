__d(
  "AdsUEditorAdgroupCTVWebsiteURLMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return r("AdsAdgroupRecordAccessors").ctv_website_url.set(n, e);
      });
    }
    l.setCTVWebsiteURL = e;
  },
  98,
);
