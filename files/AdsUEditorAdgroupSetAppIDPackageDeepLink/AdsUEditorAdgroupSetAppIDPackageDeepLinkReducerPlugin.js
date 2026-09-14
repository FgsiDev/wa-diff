__d(
  "AdsUEditorAdgroupSetAppIDPackageDeepLinkReducerPlugin",
  [
    "AdsCreativeFieldsTemplateUrlSpecUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAppIDPackageDeepLinkDataActionFlux",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return (
              r("vulture")("wXN192U1kppyJmq3A5FDJnIJZB0="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                return (
                  r("vulture")("jKyDkWonHj0A9-cUdW1bKY77qtM="),
                  t.appIDOrPackage === ""
                    ? e.deleteIn(
                        o(
                          "AdsCreativeFieldsTemplateUrlSpecUtils",
                        ).getAppIDPathForPlatform(t.appPlatform),
                      )
                    : e.setIn(
                        o(
                          "AdsCreativeFieldsTemplateUrlSpecUtils",
                        ).getAppIDPathForPlatform(t.appPlatform),
                        t.appIDOrPackage,
                      )
                );
              })
            );
          },
          o("AdsUEditorAdgroupSetAppIDPackageDeepLinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
