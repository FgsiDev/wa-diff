__d(
  "AdsUEditorCampaignPromotedObjectSetInstagramActorIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a =
                  (n = o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).convertIGIDV2FromStrongTypeToString(t.instagramUserID)) !=
                  null
                    ? n
                    : t.instagramActorID;
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.instagram_actor_id.set(a, e);
            });
          },
          [
            r("AdsUEditorCampaignPromotedObjectSetInstagramActorIdActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
