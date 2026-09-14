__d(
  "AdsPEFilterChangedActionLoggerPlugin",
  [
    "AdsPETypeaheadFilterInputUtils",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e) return null;
      var t = !1,
        n = [],
        r = "name_filter_with_single_token",
        a = [];
      return (
        e.toAPI().forEach(function (e) {
          var i = e.value;
          if (
            (a.push(e.field),
            o("AdsPETypeaheadFilterInputUtils").getIsNameFilter(e.field))
          ) {
            t = !0;
            var l = o("AdsPETypeaheadFilterInputUtils").parseFilterValueTokens(
              i,
            );
            (l.length > 1 && (r = "name_filter_with_multiple_tokens"),
              n.push({
                field: e.field,
                operator: e.operator.toString(),
                token_count: l.length,
                tokens: l ? JSON.stringify(l) : "",
              }));
          }
        }),
        {
          tokenStatus: t ? r : "",
          nameFilterData: n,
          hasNameFilter: t,
          filterFields: a,
        }
      );
    }
    function s(e, t, n, r) {
      var o,
        a = e
          ? {
              filter_fields:
                (o = r == null ? void 0 : r.filterFields) != null ? o : [],
              filter_set: e.toString(),
            }
          : {},
        i = n ? { event_source: n == null ? void 0 : n.source } : {};
      return babelHelpers.extends({ action_type: t }, a, i);
    }
    var u = {
        log: function (n) {
          var t,
            o = n.data,
            a = o.filterAuxiliaryData,
            i = o.filterSet,
            l = o.type,
            u = e(i),
            c = null;
          if (u != null) {
            var d, m, p;
            c = {
              tokenStatus:
                (d = u == null ? void 0 : u.tokenStatus) != null ? d : "",
              nameFilterData:
                (m = u == null ? void 0 : u.nameFilterData) != null ? m : [],
              hasNameFilter:
                (p = u == null ? void 0 : u.hasNameFilter) != null ? p : !1,
            };
          }
          r("adsMgmtLogger")(
            "filter_changed",
            babelHelpers.extends(
              {},
              s(i, l, a, u),
              n.logData,
              r("adsMgmtPreviousNavigationEvent")(),
              r("adsMgmtCurrentNavigationEvent")(),
              ((t = {}), (t.message = u == null ? null : JSON.stringify(c)), t),
            ),
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
