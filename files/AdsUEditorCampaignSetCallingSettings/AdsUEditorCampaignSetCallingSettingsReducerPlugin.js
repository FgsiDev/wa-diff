__d(
  "AdsUEditorCampaignSetCallingSettingsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetCallingSettingsActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = e,
                r = t.callingSettings;
              return r == null
                ? n.setIn(["calling_settings"], null)
                : (r.call_forwarding != null &&
                    (n = n.setIn(
                      ["calling_settings", "call_forwarding"],
                      r.call_forwarding,
                    )),
                  r.call_transcript != null &&
                    (n = n.setIn(
                      ["calling_settings", "call_transcript"],
                      r.call_transcript,
                    )),
                  n);
            });
          },
          [r("AdsUEditorCampaignSetCallingSettingsActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
