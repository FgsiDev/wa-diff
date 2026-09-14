__d(
  "AdsCrepeLogger",
  ["AdCreationPackageFalcoEvent", "AdsApplicationIDs", "PEAppContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["data"],
      s = new Set(),
      u = {
        log: function (t) {
          r("AdCreationPackageFalcoEvent").log(function () {
            return c(t);
          });
        },
        logOnce: function (t) {
          var e = JSON.stringify(t);
          s.has(e) || (u.log(t), s.add(e));
        },
      };
    function c(t) {
      var n = o("PEAppContext").getEventDataForLogging(),
        a = n.ad_account_id,
        i = n.query_data,
        l = n.session_id,
        s = t.data,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, u, {
        data: d(s, i),
        ad_account_id: a,
        appid: r("AdsApplicationIDs").ADS_POWER_EDITOR,
        sessionid: l,
      });
    }
    function d(e, t) {
      if (
        e == null &&
        (t == null ? void 0 : t.package_deep_link_source) == null &&
        (t == null ? void 0 : t.nav_entry_point) == null
      )
        return null;
      var n = e;
      return (
        (t == null ? void 0 : t.nav_entry_point) != null &&
          (n = babelHelpers.extends({}, n, {
            nav_entry_point: t == null ? void 0 : t.nav_entry_point,
          })),
        (t == null ? void 0 : t.package_deep_link_source) != null &&
          (n = babelHelpers.extends({}, n, {
            deep_link_source: t == null ? void 0 : t.package_deep_link_source,
          })),
        n == null
          ? null
          : Object.fromEntries(
              Object.entries(n).map(function (e) {
                var t = e[0],
                  n = e[1];
                return [t, m(n)];
              }),
            )
      );
    }
    function m(e) {
      var t;
      return typeof e == "string"
        ? e
        : (t = JSON.stringify(e)) != null
          ? t
          : String(e);
    }
    ((l.AdsCrepeLogger = u), (l.loggerCallback = c));
  },
  98,
);
