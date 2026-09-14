__d(
  "AdsUpcomingEventRecord",
  [
    "AdsUEditorAdgroupUpcomingEventUtils",
    "DateTime",
    "err",
    "immutable",
    "justknobx",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "0",
      s = ["BEFORE_EVENT_1DAY", "EVENT_START"],
      u = ["BEFORE_EVENT_2DAY", "BEFORE_EVENT_1DAY", "BEFORE_EVENT_1HOUR"],
      c = r("immutable").Record({
        event_title: null,
        start_time: "",
        end_time: null,
        event_id: e,
        updated_time: null,
        use_remind_me_cta: null,
        use_remind_me_cta_for_preview: null,
        scheduled_notification_times: null,
        notification_target_time: null,
      });
    function d(e) {
      return e == null || (typeof e == "string" && e.trim() === "");
    }
    function m(e, t) {
      var n = r("DateTime").now(e).addSeconds(r("justknobx")._("1650")),
        a;
      return (
        t != null && (a = t.addSeconds(r("justknobx")._("1650"))),
        a == null ||
        a.isSameOrBefore(n) ||
        o(
          "AdsUEditorAdgroupUpcomingEventUtils",
        ).isEventOutsideOfTodayAndLatestStart(a, e)
          ? n
          : a
      );
    }
    var p = function (t) {
      return { start_time: m(t).toISOString() };
    };
    function _(e) {
      var t = Number(e);
      if (Number.isNaN(t)) return !1;
      var n = 2147483647,
        r = 0;
      return t >= r && t <= n;
    }
    var f = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getStartDateTime = function (t, n) {
            var e;
            return (e = t == null ? void 0 : t.getStartDateTime(n)) != null
              ? e
              : m(n);
          }));
        var o = n.prototype;
        return (
          (o.isNewEvent = function () {
            return (
              r("vulture")("eHM63RQQxnq4DPnoEIMFQ6qkV7A="),
              this.get("event_id") === e
            );
          }),
          (o.getID = function () {
            return this.get("event_id");
          }),
          (o.getTitle = function () {
            var e;
            return (e = this.get("event_title")) == null ? void 0 : e.trim();
          }),
          (o.getStartDateTime = function (t) {
            var e = this.get("start_time");
            if (d(e))
              throw r("err")("Upcoming event start time cannot be blank");
            return _(String(e))
              ? r("DateTime").create(Number(e), t)
              : r("DateTime").fromISOString(String(e), t);
          }),
          (o.getEndDateTime = function (t) {
            var e = this.get("end_time");
            return d(e)
              ? null
              : _(String(e))
                ? r("DateTime").create(Number(e), t)
                : r("DateTime").fromISOString(String(e), t);
          }),
          (o.getScheduledNotificationTime = function () {
            var e;
            if (this.getNotificationTargetTime() === "EVENT_END") return null;
            var t =
              (e = this.$AdsUpcomingEventRecord$p_1()) == null
                ? void 0
                : e.filter(function (e) {
                    return !s.includes(e);
                  });
            return t == null ? void 0 : t.at(0);
          }),
          (o.$AdsUpcomingEventRecord$p_1 = function () {
            return this.get("scheduled_notification_times");
          }),
          (o.getNotificationTargetTime = function () {
            return this.get("notification_target_time");
          }),
          n
        );
      })(c),
      g = function (t, n) {
        return (
          n === void 0 && (n = {}),
          new f(babelHelpers.extends({}, p(t), n))
        );
      };
    ((l.NEW_EVENT_ID = e),
      (l.DEFAULT_NOTIFICATION_TIMES = s),
      (l.DURING_EVENT_NOTIFICATION_TIMES = u),
      (l.getDefaultEventStartTime = m),
      (l.AdsUpcomingEventRecord = f),
      (l.makeUpcomingEventRecord = g));
  },
  98,
);
