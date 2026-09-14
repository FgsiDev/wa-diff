__d(
  "AdsUEditorAdgroupUpcomingEventDetailsDateDetectionUtil",
  [
    "$InternalEnum",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "DateTime",
    "ReminderAdsGating",
    "Timezone",
    "formatDate",
    "immutable",
    "isEmpty",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "PRIMARY_TEXT",
        "HEADLINE",
        "DESCRIPTION",
      ]);
    function u(e) {
      var t = e.split(" "),
        n = t[0],
        a = t[1];
      if (isNaN(parseInt(a, 10))) {
        var i = [n, a];
        ((a = i[0]), (n = i[1]));
      }
      var l = parseInt(a, 10);
      if (isNaN(l)) return null;
      var s = r("DateTime").now(o("Timezone").UTC),
        u = new Date(n + " 1, " + s.getYear());
      if (isNaN(u)) return null;
      var c = r("DateTime")
        .now(o("Timezone").UTC)
        .set({
          month: u.getMonth() + 1,
          day: l,
          hour: 0,
          minute: 0,
          second: 0,
        });
      return l !== c.getDayOfMonth()
        ? null
        : c.isBefore(s)
          ? c.addYears(1).getUnixTimestampSeconds()
          : c.getUnixTimestampSeconds();
    }
    var c = new RegExp(
        "\\b(?<date>(0?[1-9]|[12][0-9]|3[01])(th|st|nd|rd)?\\s*(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)|(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)\\s*(0?[1-9]|[12][0-9]|3[01])(th|st|nd|rd)?)\\b",
        "gi",
      ),
      d = new RegExp(
        "\\b(?<prefix>ends|ending|ending on|until|through|by|expires|valid until|last day|final day|closing date|deadline)\\s*(?<date>(0?[1-9]|[12][0-9]|3[01])(th|st|nd|rd)?\\s*(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)|(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)\\s*(0?[1-9]|[12][0-9]|3[01])(th|st|nd|rd)?)\\b",
        "gi",
      );
    function m(e) {
      var t;
      if (r("isStringNullOrEmpty")(e)) return [];
      if (r("justknobx")._("3866")) return [];
      var n = (t = e.match(d)) != null ? t : [];
      return n.map(_).flat();
    }
    function p(e, t) {
      return babelHelpers.extends({ unixTimestamp: e }, t ? { format: t } : {});
    }
    function _(e) {
      var t;
      if (r("isStringNullOrEmpty")(e)) return [];
      if (r("justknobx")._("3291")) return [];
      var n = (t = e.match(c)) != null ? t : [];
      return n.map(u).filter(Boolean);
    }
    function f(e) {
      var t = o("ReminderAdsGating").isAutoDetectEndDateEnabled()
          ? m(e).map(function (e) {
              return p(e, "USE_END_DATE_PREFIX");
            })
          : [],
        n = _(e).map(function (e) {
          return p(e);
        });
      return t.concat(n);
    }
    function g(e, t, n) {
      var a, i;
      switch (n) {
        case s.PRIMARY_TEXT:
          i = r("AdsAdgroupSemanticFields").message;
          break;
        case s.HEADLINE:
          i = r("AdsAdgroupSemanticFields").headline;
          break;
        case s.DESCRIPTION:
          i = r("AdsAdgroupSemanticFields").linkDescription;
          break;
      }
      var l = (a = i) == null ? void 0 : a.get(t, e);
      if (l == null) return [];
      if (typeof l == "string") return f(l);
      var u = [];
      return (
        r("immutable").List.isList(l) &&
          l.forEach(function (e, t) {
            var n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(l, "text", t);
            if (!r("isStringNullOrEmpty")(n)) {
              var a = f(n);
              a.length && u.push.apply(u, a);
            }
          }),
        u
      );
    }
    function h(e, t, n, r) {
      var o = f(t),
        a = n === s.PRIMARY_TEXT ? o : g(e, r, s.PRIMARY_TEXT),
        i = n === s.HEADLINE ? o : g(e, r, s.HEADLINE),
        l = n === s.DESCRIPTION ? o : g(e, r, s.DESCRIPTION);
      return a.concat(i, l);
    }
    function y(e) {
      var t = "D M j";
      return r("formatDate")(e, t, { utc: !0 });
    }
    function C(e, t) {
      var n = r("DateTime").now(o("Timezone").UTC),
        a = r("DateTime").create(e, o("Timezone").UTC);
      return n.isBefore(a) && a.isSameOrBefore(n.addDays(t));
    }
    function b(e, t) {
      return e
        .filter(function (e) {
          return C(e.unixTimestamp, t);
        })
        .toSorted(function (e, t) {
          return e.format === t.format
            ? e.unixTimestamp - t.unixTimestamp
            : e.format === "USE_END_DATE_PREFIX"
              ? -1
              : 1;
        });
    }
    var v = r("justknobx")._("242");
    function S(e, t) {
      if ((e != null ? e : 0) < v) return !0;
      if (t == null) return !1;
      var n = r("DateTime").now(o("Timezone").UTC),
        a = r("DateTime").create(t, o("Timezone").UTC);
      return n.isAfter(a);
    }
    function R(t) {
      var n;
      return (
        t != null &&
        (e || (e = r("isEmpty")))(
          t == null || (n = t.disabled_reasons) == null ? void 0 : n.toArray(),
        )
      );
    }
    var L = r("immutable").Set([
      "DUPLICATED_FROM_OPTED_OUT_AD",
      "OPTED_OUT_BY_AD_ACCOUNT_SETTING",
      "OPTED_OUT_MANUALLY",
    ]);
    ((l.DetectedDateExtractionField = s),
      (l.extractEndDatesFromText = m),
      (l.dateToDateAndFormat = p),
      (l.extractDatesFromText = _),
      (l.extractDatesAndEndDatesFromText = f),
      (l.getDetectedDatesFromAdGroup = g),
      (l.getDetectedDatesFromAllMessageVariants = h),
      (l.formatUTCDate = y),
      (l.isDateInUpcomingDays = C),
      (l.sortAndFilterEventDates = b),
      (l.shouldEnableAutoDetectByDefault = S),
      (l.isEnabledUpcomingEventMetadataSpec = R),
      (l.OPT_OUT_DISABLED_REASONS = L));
  },
  98,
);
