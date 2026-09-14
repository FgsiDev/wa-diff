__d(
  "AdsUEditorAdgroupSetDynamicMediaPreferVideosOptInStatusReducerPlugin",
  [
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetDynamicMediaPreferVideosOptInStatusDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                t.isOptedIn &&
                  (n = o(
                    "AdsMediaTypeAutomationMutators",
                  ).changeMediaTypeAutomationOptinMutator(
                    e,
                    "OPT_IN",
                    "MANUAL",
                  )),
                t.isOptedIn
                  ? o(
                      "AdsMediaTypeAutomationMutators",
                    ).switchToSingleVideoFormatMutator(n)
                  : o(
                      "AdsMediaTypeAutomationMutators",
                    ).switchToSingleImageFormatMutator(n)
              );
            });
          },
          o(
            "AdsUEditorAdgroupSetDynamicMediaPreferVideosOptInStatusDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
