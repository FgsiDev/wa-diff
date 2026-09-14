__d(
  "AdsUEditorAdgroupUpcomingEventsMutator",
  [
    "$InternalEnum",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventMutatorUtils",
    "AdsUpcomingEventRecord",
    "AdsUpcomingEventsUtils",
    "immutable",
    "justknobx",
    "objectEntries",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.withMutations(function (e) {
        r("objectEntries")(t).forEach(function (t) {
          var n = t[0],
            r = t[1];
          r !== void 0 && e.set(n, r);
        });
      });
    }
    function s() {
      return r("justknobx")._("2327");
    }
    function u(e, t, n) {
      var a = [],
        i = o("AdsUpcomingEventsUtils").upcomingEventAccessor.get(e),
        l = {
          notification_target_time: void 0,
          scheduled_notification_times: void 0,
        },
        u = s()
          ? babelHelpers.extends({}, t, l)
          : babelHelpers.extends({}, t, l, {
              event_title: void 0,
              start_time: void 0,
              end_time: void 0,
            });
      if (i == null)
        s()
          ? (i = o("AdsUpcomingEventRecord").makeUpcomingEventRecord(n, u))
          : (i = r("immutable").Map(
              babelHelpers.extends(
                { event_id: o("AdsUpcomingEventRecord").NEW_EVENT_ID },
                u,
              ),
            ));
      else {
        var c = r("immutable").Map(u);
        i = i.merge(c);
      }
      return (
        a.push(o("AdsUpcomingEventsUtils").upcomingEventAccessor.set(i)),
        o("AdsMutators").chain.apply(o("AdsMutators"), a)(e)
      );
    }
    var c = n("$InternalEnum").Mirrored([
      "INCOMPATIBLE_CALL_TO_ACTION",
      "INSTAGRAM_ACCOUNT_CHANGED",
      "INTERACTIVE_COMPONENT_SPEC_CHANGED",
      "INCOMPATIBLE_DESTINATION_TYPE",
      "OPTIMIZATION_GOAL_CHANGED",
      "PROMO_CODE_ADDED",
      "DLO_ENABLED",
      "REMOVED_BY_USER",
    ]);
    function d(e, t) {
      var n = m(e);
      return o(
        "AdsUEditorAdgroupUpcomingEventMetadataMutators",
      ).updateUpcomingEventMetadataForIncompatibility(n, t);
    }
    function m(e) {
      return o("AdsUpcomingEventsUtils").upcomingEventAccessor.get(e) == null
        ? e
        : o(
              "AdsUEditorAdgroupUpcomingEventMutatorUtils",
            ).isAdgroupUsingOnlySingleFieldInAssetFeedFromRecord(
              e,
              "upcoming_events",
            )
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.upcoming_events.delete(e);
    }
    function p(e, t) {
      return o("AdsUpcomingEventsUtils").upcomingEventAccessor.set(
        o("AdsUpcomingEventsUtils").upcomingEventAccessor.get(e),
        t,
      );
    }
    ((l.mutateUpcomingEvent = e),
      (l.mutateUpcomingEventSpec = u),
      (l.ResetUpcomingEventSpecReason = c),
      (l.resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility =
        d),
      (l.copyUpcomingEvent = p));
  },
  98,
);
