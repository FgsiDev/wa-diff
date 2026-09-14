__d(
  "AdsUEditorAdgroupSetDynamicMediaOptInStatusReducerPlugin",
  [
    "AdsMediaTypeAutomationMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetDynamicMediaOptInStatusDataActionFlux",
    "ODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var r = t;
              return (
                !n.isOptedIn &&
                  n.formatOption === "single_video" &&
                  (r = o(
                    "AdsMediaTypeAutomationMutators",
                  ).switchToSingleImageFormatMutator(r)),
                (e || (e = o("ODS"))).bumpEntityKey(
                  679,
                  "da_media_type_automation",
                  "AdsUEditorAdgroupSetDynamicMediaOptInStatusReducerPlugin.opt_status_" +
                    String(n.isOptedIn),
                ),
                o(
                  "AdsMediaTypeAutomationMutators",
                ).changeMediaTypeAutomationWithDACatalogSingleMediaSpecMutator(
                  r,
                  n.isOptedIn ? "OPT_IN" : "OPT_OUT",
                  "MANUAL",
                )
              );
            });
          },
          o("AdsUEditorAdgroupSetDynamicMediaOptInStatusDataActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
