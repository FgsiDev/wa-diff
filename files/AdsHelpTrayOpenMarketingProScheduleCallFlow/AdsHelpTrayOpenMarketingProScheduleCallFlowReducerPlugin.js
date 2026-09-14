__d(
  "AdsHelpTrayOpenMarketingProScheduleCallFlowReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t = n.navigationStack,
            i = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(n),
            l = i.contentType !== "SCHEDULE_MARKETING_CALL";
          if (l) {
            var s;
            t = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
              n.navigationStack,
              {
                contentType: "SCHEDULE_MARKETING_CALL",
                osmipExtraData: {
                  entryPoint: a.data.entryPoint,
                  experimentData: a.data.experimentData,
                  isLiveCallFlow: (s = a.data.isLiveCallFlow) != null ? s : !1,
                  isRescheduleCall: a.data.isRescheduleCall || !1,
                  leadSource: a.data.leadSource,
                  srtJobID: a.data.srtJobID,
                  surface: a.data.surface,
                },
              },
            );
          }
          return (
            (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
              document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, n, { isTrayOpen: !0, navigationStack: t })
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
