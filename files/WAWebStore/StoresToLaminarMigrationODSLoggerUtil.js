__d(
  "StoresToLaminarMigrationODSLoggerUtil",
  [
    "LoadObject",
    "ODS",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "deepCompare",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        "both_error",
        "both_loaded_equal",
        "both_loaded_unequal",
        "both_loading",
        "laminar_error_flux_loaded",
        "laminar_error_flux_loading",
        "laminar_loaded_flux_error",
        "laminar_loading_flux_error",
        "laminar_loading_flux_loaded",
      ]);
    function u(t, n, r) {
      (e || (e = o("ODS"))).bumpEntityKey(
        4,
        "offline_solutions",
        t + "_" + n,
        r,
      );
    }
    function c(e, t, n) {
      var o = r("LoadObject").withError(r("err")("not found"), {
        creatorModuleID: i.id,
      });
      for (var a of e) {
        var l = a[0],
          s = a[1];
        _(s, t.get(l) || o, n, void 0);
      }
      for (var u of t) {
        var c = u[0],
          d = u[1];
        e.get(c) == null && _(o, d, n, void 0);
      }
    }
    function d(e, t) {
      e.match({
        loading: function () {
          return u(t, "both_loading");
        },
        error: function () {
          return u(t, "laminar_loading_flux_error");
        },
        loaded: function () {
          return u(t, "laminar_loading_flux_loaded");
        },
      });
    }
    function m(e, t) {
      e.match({
        loading: function () {
          return u(t, "laminar_error_flux_loading");
        },
        error: function () {
          return u(t, "both_error");
        },
        loaded: function () {
          return u(t, "laminar_error_flux_loaded");
        },
      });
    }
    function p(e, t, n, r) {
      e.match({
        loading: function () {
          return u(n, "laminar_loaded_flux_loading");
        },
        error: function () {
          return u(n, "laminar_loaded_flux_error");
        },
        loaded: function (o) {
          r(o, t) ? u(n, "both_loaded_equal") : u(n, "both_loaded_unequal");
        },
      });
    }
    function _(e, t, n, o) {
      (o === void 0 &&
        (o = function (t, n) {
          return r("deepCompare")(t, n);
        }),
        s.forEach(function (e) {
          return u(n, e, 0);
        }),
        t.match({
          loading: function () {
            return d(e, n);
          },
          error: function () {
            return m(e, n);
          },
          loaded: function (r) {
            return p(e, r, n, o);
          },
        }));
    }
    function f(e, t, n, o, a) {
      a === void 0 && (a = _);
      var i =
          e.__className != null && e.__className !== ""
            ? e.__className
            : "unknownStore",
        l = function (t) {
          var e = n(t),
            r = o(t);
          return (a(e, r, i), r);
        },
        s = l,
        u = function () {
          s = function (t) {
            return l(t);
          };
        };
      return (
        e.addListener(u),
        t.addListener(u),
        r("adsCreateStoreSelector")(
          [e, t],
          function () {
            return s;
          },
          { name: "thunkSelector(" + i + "." + (n.name || "unknown") + ")" },
        )
      );
    }
    function g(e, t, n, o) {
      var a =
          e.__className != null && e.__className !== ""
            ? e.__className
            : "unknownStore",
        l = r("adsCreateStoreSelector")(
          [e],
          function (t) {
            return n(t);
          },
          { name: i.id + ".fluxStoreSelector" },
        ),
        s = r("adsCreateStoreSelector")(
          [t],
          function (t) {
            return o(t);
          },
          { name: i.id + ".laminarStoreSelector" },
        );
      return r("adsCreateSelector")(
        [l, s],
        function (t, n) {
          return (_(t, n, a), n);
        },
        { name: i.id },
      );
    }
    ((l.ALL_METRIC_SUFFIXES = s),
      (l.logResultMapComparisonToODS = c),
      (l.logResultComparisonToODS = _),
      (l.adsCreateStoreThunkSelectorForMigrationStores = f),
      (l.adsCreateStoreSelectorForMigrationStores = g));
  },
  98,
);
