__d(
  "AdsAdgroupDraftFragmentSetAppIDReducerPlugin",
  ["adsAdgroupDraftFragmentCreateReducer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          null,
          null,
          function (e, t) {
            return e.set("adsApplicationID", t.appID);
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
