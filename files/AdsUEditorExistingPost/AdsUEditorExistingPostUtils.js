__d(
  "AdsUEditorExistingPostUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCallToActionTypes",
    "AdsLoadState_LEGACY",
    "AdsUseExistingPostModalConstants",
    "Timezone",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsAdgroupRecordAccessors").creative.delete(e);
      return t !== r("AdsLoadState_LEGACY").LOADING
        ? r("AdsAdgroupRecordAccessors").creative.object_id.set(t, n)
        : n;
    }
    function s(e) {
      var t,
        n,
        a = o("Timezone").getEnvironmentTimezoneID() || o("Timezone").UTC,
        i =
          e == null || (t = e.interval) == null || (t = t.start) == null
            ? void 0
            : t.toTimestampInMilliseconds(a),
        l =
          e == null || (n = e.interval) == null || (n = n.end) == null
            ? void 0
            : n.toTimestampInMilliseconds(a);
      return r("isTruthy")(i) && r("isTruthy")(l)
        ? {
            selectedDateRange: e,
            query: [
              {
                field: "date_range",
                operator: "IN_RANGE",
                value: [i / 1e3, l / 1e3],
              },
            ],
          }
        : null;
    }
    function u(e, t) {
      return { field: "creator_username", operator: "IN", value: [e, t] };
    }
    function c(e, t) {
      return {
        field: o("AdsUseExistingPostModalConstants").FB_FILTER_PARAMS.CREATOR,
        operator: "IN",
        value: [e, t],
      };
    }
    function d(e, t) {
      var n = [],
        o = {},
        a = [];
      e.forEach(function (e) {
        n.push(e);
        var t = e.FB_VALUE;
        if (r("isTruthy")(t)) {
          var a;
          (o[t.FILTER_CATEGORY] == null && (o[t.FILTER_CATEGORY] = []),
            t.FILTER_VALUE instanceof Array
              ? (a = o[t.FILTER_CATEGORY]).push.apply(a, t.FILTER_VALUE)
              : o[t.FILTER_CATEGORY].push(t.FILTER_VALUE));
        }
        var i = e.IG_VALUE;
        r("isTruthy")(i) &&
          (o[i.FILTER_CATEGORY] == null && (o[i.FILTER_CATEGORY] = []),
          o[i.FILTER_CATEGORY].push(i.FILTER_VALUE));
      });
      for (var i of t) {
        if (o[i] != null && i === "product_type") {
          var l = o.product_type.indexOf(9);
          (l > -1 && o.product_type.splice(l, 1),
            o.product_type.includes(2) && o.product_type.push(9));
        }
        o[i] != null && a.push({ field: i, operator: "IN", value: o[i] });
      }
      return { selectedFilters: n, query: a };
    }
    function m(e, t) {
      var n;
      return t !== r("AdsLoadState_LEGACY").LOADING &&
        ((n = e.creative) == null ? void 0 : n.object_story_id) == null
        ? r("AdsAdgroupRecordAccessors").creative.object_id.set(t, e)
        : e;
    }
    var p = [
      "creator_username",
      o("AdsUseExistingPostModalConstants").FB_FILTER_PARAMS.CREATOR,
    ];
    function _(e) {
      for (var t of Object.values(r("AdsCallToActionTypes").TYPES))
        if (e === t.name) return t.name;
      return null;
    }
    ((l.convertToExistingPostAd = e),
      (l.generateFilteringQueryFromDateRangeFilterValues = s),
      (l.getBrandedContentIGPrimaryWithPartnerFilterQuery = u),
      (l.getBrandedContentFBCreatorFilterQuery = c),
      (l.generateFilteringQueryFromFilterValues = d),
      (l.updatePage = m),
      (l.partnerFilterFields = p),
      (l.getCallToActionType = _));
  },
  98,
);
