__d(
  "AdsMessagingAdsMessengingPostsUpgradeCTAInDuplicationProviderPlugin",
  [
    "AdsExistingPostCTAUtils",
    "AdsMessengingPostsUpgradeCTAInDuplicationDataManager",
    "LoadObjectMap",
    "isFalsey",
    "promiseDone",
    "promiseLoadObjects",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            var n = new Map();
            (e.forEach(function (e) {
              var t = o(
                "AdsExistingPostCTAUtils",
              ).maybeGetPostIDFromObjectStoryID(e);
              r("isFalsey")(t) ||
                n.set(
                  e,
                  r(
                    "AdsMessengingPostsUpgradeCTAInDuplicationDataManager",
                  ).getIsPostUpgrade(t),
                );
            }),
              r("promiseDone")(r("promiseLoadObjects")(n), function (e) {
                t(function (t) {
                  return t.merge(e);
                });
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
