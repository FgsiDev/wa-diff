__d(
  "AdsUEditorAdgroupScheduledLiveVideoSetVideoReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupScheduledLiveVideoSetVideoActionFlux",
    "CallToActionTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n;
              return o("AdsMutators").chain(
                function (e) {
                  var n,
                    o,
                    a,
                    i = e,
                    l =
                      (n = e.creative) == null ||
                      (n = n.object_story_spec) == null
                        ? void 0
                        : n.page_id,
                    s =
                      (o = t.pageID) != null
                        ? o
                        : (a = e.creative) == null
                          ? void 0
                          : a.object_id;
                  return (
                    l == null &&
                      (i = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.set(s, i)),
                    i
                  );
                },
                function (e) {
                  var t,
                    n,
                    a,
                    i,
                    l = e,
                    s =
                      (t = e.creative) == null ||
                      (t = t.object_story_spec) == null
                        ? void 0
                        : t.instagram_actor_id,
                    u =
                      (n = e.creative) == null ? void 0 : n.instagram_actor_id,
                    c =
                      (a = e.creative) == null ||
                      (a = a.object_story_spec) == null
                        ? void 0
                        : a.instagram_user_id,
                    d = (i = e.creative) == null ? void 0 : i.instagram_user_id;
                  return (
                    (r("gkx")("15865") ? c == null : s == null) &&
                      (l = o(
                        "AdsInstagramUserIdMigrationUtils",
                      ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
                        u,
                        d,
                        l,
                      )),
                    l
                  );
                },
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.video_id.set(
                  t.scheduledLiveVideo.id,
                ),
                function (e) {
                  var n;
                  return ((n = t.scheduledLiveVideo.sponsor_page) == null
                    ? void 0
                    : n.id) == null
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.branded_content.parent_source_facebook_post_id.delete(
                        e,
                      )
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.branded_content.parent_source_facebook_post_id.set(
                        t.scheduledLiveVideo.id,
                        e,
                      );
                },
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.message.set(
                  (n = t.scheduledLiveVideo.message) == null ? void 0 : n.text,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.title.set(
                  t.scheduledLiveVideo.name,
                ),
                function (e) {
                  var n = e,
                    o = Object.keys(r("CallToActionTypes")).find(function (e) {
                      var n;
                      return (
                        e ===
                        ((n = t.scheduledLiveVideo) == null ||
                        (n = n.call_to_action) == null
                          ? void 0
                          : n.cta_type)
                      );
                    });
                  return (
                    o == null ||
                      (n = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.call_to_action.type.set(
                        o,
                        n,
                      )),
                    n
                  );
                },
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.image_url.set(
                  "https://www.facebook.com/images/ads/common/place_holder_image_600x600.png",
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupScheduledLiveVideoSetVideoActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
