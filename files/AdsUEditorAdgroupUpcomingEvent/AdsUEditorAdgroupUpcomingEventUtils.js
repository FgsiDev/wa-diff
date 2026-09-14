__d(
  "AdsUEditorAdgroupUpcomingEventUtils",
  [
    "AdsUEditorAdgroupCreativeSectionStrings",
    "AdsUpcomingEventRecord",
    "DateTime",
    "LocalDate",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("1351");
    function s(e) {
      return e != null && e !== o("AdsUpcomingEventRecord").NEW_EVENT_ID;
    }
    function u(t) {
      return t.trim().length > 0 && t.length <= e;
    }
    function c(e, t) {
      return (
        t != null &&
        e.isSameOrBefore(t) &&
        e.addSeconds(r("justknobx")._("1246")).isAfter(t)
      );
    }
    function d(e, t) {
      return (
        t != null &&
        e.isBefore(t) &&
        e.addSeconds(r("justknobx")._("1300")).isBefore(t)
      );
    }
    function m(e, t) {
      var n = r("DateTime").now(t),
        o = r("LocalDate").fromDateTime(n);
      return (
        r("LocalDate").fromDateTime(e).equals(o) &&
        n.addSeconds(r("justknobx")._("1302")).isAfter(e)
      );
    }
    function p(e, t) {
      var n = r("DateTime").now(t),
        o = r("LocalDate").fromDateTime(n);
      return (
        r("LocalDate").fromDateTime(e).isBefore(o) ||
        n.addSeconds(r("justknobx")._("1421")).isBefore(e)
      );
    }
    function _(e, t) {
      return t != null && e.isSameOrAfter(t);
    }
    function f(e, t) {
      var n = r("DateTime").now(e).addSeconds(r("justknobx")._("1302")),
        o = t != null ? t.subtractSeconds(r("justknobx")._("1300")) : null;
      return o != null && o.isSameOrAfter(n) ? o : n;
    }
    function g(e, t) {
      return t != null
        ? t.subtractSeconds(r("justknobx")._("1246"))
        : f(e, t).addSeconds(r("justknobx")._("1421"));
    }
    function h(e, t) {
      var n = f(e, t),
        o = g(e, t);
      return function (e) {
        return (
          e.isAfterOrEqual(r("LocalDate").fromDateTime(n)) &&
          e.isBeforeOrEqual(r("LocalDate").fromDateTime(o))
        );
      };
    }
    function y(e, t, n) {
      var r = f(e, n),
        a = g(e, n);
      return t.isSameOrAfter(r) && t.isSameOrBefore(a)
        ? null
        : _(t, n)
          ? o("AdsUEditorAdgroupCreativeSectionStrings")
              .adsReminderAdsEventStartAfterEnd
          : m(t, e)
            ? o("AdsUEditorAdgroupCreativeSectionStrings")
                .adsReminderAdsEventStartBetweenBeginningOfTodayAndEarliestStart
            : p(t, e)
              ? o("AdsUEditorAdgroupCreativeSectionStrings")
                  .adsReminderAdsEventStartOutsideOfTodayAndLatestStart
              : c(t, n)
                ? o("AdsUEditorAdgroupCreativeSectionStrings")
                    .adsReminderAdsEventTooShort
                : d(t, n)
                  ? o("AdsUEditorAdgroupCreativeSectionStrings")
                      .adsReminderAdsEventTooLong
                  : o("AdsUEditorAdgroupCreativeSectionStrings")
                      .adsReminderAdsEventStartInvalid;
    }
    function C(e, t) {
      var n = r("DateTime").now(e),
        o = t.addSeconds(r("justknobx")._("1246"));
      return o.isBefore(n) ? n : o;
    }
    function b(e) {
      return e.addSeconds(r("justknobx")._("1300"));
    }
    function v(e, t, n) {
      var r = C(e, n),
        a = b(n);
      return t.isSameOrAfter(r) && t.isSameOrBefore(a)
        ? null
        : _(n, t)
          ? o("AdsUEditorAdgroupCreativeSectionStrings")
              .adsReminderAdsEventEndBeforeStart
          : c(n, t)
            ? o("AdsUEditorAdgroupCreativeSectionStrings")
                .adsReminderAdsEventTooShort
            : d(n, t)
              ? o("AdsUEditorAdgroupCreativeSectionStrings")
                  .adsReminderAdsEventTooLong
              : o("AdsUEditorAdgroupCreativeSectionStrings")
                  .adsReminderAdsEventEndInvalid;
    }
    function S(e, t, n, r) {
      var o = y(e, n, r) == null,
        a = r == null || v(e, r, n) == null;
      return u(t) && o && a;
    }
    ((l.EVENT_NAME_CHARACTER_LIMIT = e),
      (l.isValidEventID = s),
      (l.isEventTitleValid = u),
      (l.isEventOutsideOfTodayAndLatestStart = p),
      (l.getStartDateDateRestraint = h),
      (l.getErrorFbtForStartDate = y),
      (l.getAreEventDetailsValid = S));
  },
  98,
);
