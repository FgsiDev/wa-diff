__d(
  "AdsUEditorAdgroupEmailCaptureDefaultOptInReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupEmailCaptureDefaultOptInActionFlux",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupEmailCaptureMutators",
              ).updateEmailCaptureForDefaultOptIn(
                {
                  adgroup: e,
                  campaign: t.campaign,
                  campaignGroup: t.campaignGroup,
                },
                t.account,
                t.defaultOptInStatus,
                t.defaultOptInCallsite,
              );
            });
          },
          r("AdsUEditorAdgroupEmailCaptureDefaultOptInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
