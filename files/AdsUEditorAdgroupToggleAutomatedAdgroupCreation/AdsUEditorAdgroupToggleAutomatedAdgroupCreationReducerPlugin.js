__d(
  "AdsUEditorAdgroupToggleAutomatedAdgroupCreationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupToggleAutomatedAdgroupCreationDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a = o("AdsMutators").chain(
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  )).creative.branded_content.automated_adgroup_creation.set(
                    t.shouldUseAutomatedAdgroupCreation,
                  ),
                  n.creative.source_instagram_media_id.set(t.igMediaID),
                  n.creative.source_facebook_post_id.set(t.fbPostID),
                  n.creative.branded_content_boosting_type.set("CREATOR_BOOST"),
                  n.creative.branded_content.ad_format.set(1),
                  o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(
                    t.primaryInstagramActorID,
                    t.primaryInstagramUserID,
                  ),
                  n.creative.instagram_user_id.set(t.primaryInstagramUserID),
                  n.creative.instagram_branded_content.sponsor_id.set(
                    t.secondaryIgV2ID,
                  ),
                  n.creative.facebook_branded_content.sponsor_page_id.set(
                    t.secondaryPageID,
                  ),
                  n.creative.object_id.set(t.primaryPageID),
                  n.creative.object_story_spec.delete,
                )(e);
              return t.shouldUseAutomatedAdgroupCreation
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.branded_content.deliver_dynamic_partner_content.set(
                    !1,
                    a,
                  )
                : a;
            });
          },
          r("AdsUEditorAdgroupToggleAutomatedAdgroupCreationDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
