__d(
  "AdsUEditorCampaignSetPassbackEventSourcesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetPassbackEventSourcesActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                o,
                a,
                i,
                l = e;
              return (
                "passbackPixelID" in t &&
                  t.passbackPixelID !==
                    ((n =
                      (o = e.promoted_object) == null
                        ? void 0
                        : o.passback_pixel_id) != null
                      ? n
                      : null) &&
                  (l = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.passback_pixel_id.set(
                    t.passbackPixelID,
                    l,
                  )),
                "passbackAppID" in t &&
                  t.passbackAppID !==
                    ((a =
                      (i = e.promoted_object) == null
                        ? void 0
                        : i.passback_application_id) != null
                      ? a
                      : null) &&
                  (l = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.passback_application_id.set(
                    t.passbackAppID,
                    l,
                  )),
                l
              );
            });
          },
          o("AdsUEditorCampaignSetPassbackEventSourcesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
