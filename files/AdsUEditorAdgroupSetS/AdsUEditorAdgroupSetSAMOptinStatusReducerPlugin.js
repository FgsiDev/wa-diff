__d(
  "AdsUEditorAdgroupSetSAMOptinStatusReducerPlugin",
  [
    "AdgroupSetSAMOptinStatusActionFlux",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return t.optinStatus === !0
                  ? o(
                      "AdsUEditorAdgroupMutators",
                    ).setAdsCreativeDestinationSpec(e, "SHOPS_MESSAGING")
                  : t.optinStatus === !1
                    ? o(
                        "AdsUEditorAdgroupMutators",
                      ).setAdsCreativeDestinationSpec(
                        e,
                        "SHOPS_MESSAGING_OPT_OUT",
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.destination_spec.delete(e);
              },
            );
          },
          r("AdgroupSetSAMOptinStatusActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
