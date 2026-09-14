__d(
  "AdsUEditorCampaignPlacementCpasLVAApplyDefaultsReducerPlugin",
  [
    "AdsAPICampaignPaths",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPlacementCpasLVAApplyDefaultsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t,
                n,
                a,
                i,
                l,
                s,
                u = o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors") == null ||
                    (t = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (t = t.publisher_platforms) == null
                    ? void 0
                    : t.set(r("immutable").List(["facebook"])),
                  r("AdsCampaignRecordAccessors") == null ||
                    (n = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (n = n.facebook_positions) == null
                    ? void 0
                    : n.set(r("immutable").List(["feed"])),
                  r("AdsCampaignRecordAccessors") == null ||
                    (a = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (a = a.instagram_positions) == null
                    ? void 0
                    : a.set(r("immutable").List()),
                  r("AdsCampaignRecordAccessors") == null ||
                    (i = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (i = i.whatsapp_positions) == null
                    ? void 0
                    : i.set(r("immutable").List()),
                  r("AdsCampaignRecordAccessors") == null ||
                    (l = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (l = l.messenger_positions) == null
                    ? void 0
                    : l.set(r("immutable").List()),
                  r("AdsCampaignRecordAccessors") == null ||
                    (s = r("AdsCampaignRecordAccessors").targeting) == null ||
                    (s = s.audience_network_positions) == null
                    ? void 0
                    : s.set(r("immutable").List()),
                )(e);
              return (
                (u = u.setIn(
                  r("AdsAPICampaignPaths").TARGETING.THREADS_POSITIONS,
                  r("immutable").List(),
                )),
                u
              );
            });
          },
          o("AdsUEditorCampaignPlacementCpasLVAApplyDefaultsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
