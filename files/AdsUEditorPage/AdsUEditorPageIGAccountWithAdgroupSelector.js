__d(
  "AdsUEditorPageIGAccountWithAdgroupSelector",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPageInstagramAccountStore_RELAY",
    "adsCreateSelector",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("AdsPageInstagramAccountStore_RELAY").fluxGetSelector()],
      function (t) {
        return function (e, n) {
          var a = t(e);
          return o("AdsLoadStateUtils_LEGACY")
            .toLoadObject(a)
            .mapValue(function (e) {
              var t;
              return (t = r("getByPath")(
                e,
                ["instagram_accounts", "data"],
                null,
              )) != null
                ? t
                : [];
            });
        };
      },
      { name: i.id + ".AdsUEditorPageIGAccountWithAdgroupSelector" },
    );
    l.AdsUEditorPageIGAccountWithAdgroupSelector = e;
  },
  98,
);
