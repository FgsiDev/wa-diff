__d(
  "AdsUEditorAdgroupSetUpcomingEventsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetUpcomingEventsDataActionFlux",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "DateTime",
    "IsReminderAd",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              o("AdsMutators").chain(
                function (e) {
                  var n = a.get(e.id);
                  return o(
                    "AdsUEditorAdgroupUpcomingEventsMutator",
                  ).mutateUpcomingEventSpec(
                    e,
                    {
                      end_time: t.endTime,
                      event_title: t.eventTitle,
                      start_time: t.startTime,
                      event_id: t.eventID,
                      updated_time: r("DateTime").localNow().toISOString(),
                      use_remind_me_cta: o(
                        "IsReminderAd",
                      ).isReminderAdFromSpecPlugin(
                        n == null ? void 0 : n.specPlugin,
                      ),
                      use_remind_me_cta_for_preview: o(
                        "IsReminderAd",
                      ).isReminderAdFromSpecPlugin(
                        n == null ? void 0 : n.specPlugin,
                      ),
                      scheduled_notification_times:
                        t.scheduledNotificationTimes,
                    },
                    t.timezoneID,
                  );
                },
                function (e) {
                  var t = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.upcoming_event_metadata.get(e),
                    n = o(
                      "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                    ).getUpcomingEventMetadataDisabledReasonsSet(e).size;
                  return t == null || n > 0
                    ? e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.upcoming_event_metadata.disabled_reasons.set(
                        r("immutable").fromJS(["REPLACED_WITH_MANUAL_EVENT"]),
                        e,
                      );
                },
              ),
            );
          },
          r("AdsUEditorAdgroupSetUpcomingEventsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
