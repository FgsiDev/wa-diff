__d(
  "AdsAdGroupFullFunnelApplyPixelSyncReducerPlugin",
  [
    "AdsFullFunnelApplyPixelSyncActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.appID,
              a = t.pixelID;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t = o(
                "AdsUEditorAdgroupTrackingSpecMutators",
              ).setTrackingSpec(
                { fb_pixel: a, "action.type": ["offsite_conversion"] },
                e,
                "offsite_conversion",
              );
              return (
                r != null &&
                  (t = o(
                    "AdsUEditorAdgroupTrackingSpecMutators",
                  ).setTrackingSpec(
                    { application: [r], "action.type": ["app_custom_event"] },
                    t,
                    "app_custom_event",
                  )),
                t
              );
            });
          },
          r("AdsFullFunnelApplyPixelSyncActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
