__d(
  "AdsActionSpecUtils",
  ["areEqual", "gkx", "isEmpty", "mapObject", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = { "action.type": "DEFAULTS" };
    function d(e) {
      return e ? (Array.isArray(e) ? (e.length !== 1 ? null : e[0]) : e) : null;
    }
    function m(e) {
      return [
        { "action.type": "mobile_app_install", application: e },
        { "action.type": "app_custom_event", application: e },
      ];
    }
    function p(e) {
      return [
        { "action.type": "mobile_app_install", dataset_split: e },
        { "action.type": "app_custom_event", dataset_split: e },
      ];
    }
    function _(e) {
      return [
        { "action.type": "offline_conversion", dataset_split: [].concat(e) },
      ];
    }
    function f(e) {
      return [].concat(
        T(e, { "action.type": "mobile_app_install" }),
        T(e, { "action.type": "app_custom_event" }),
      );
    }
    function g(e) {
      return [
        { "action.type": "app_custom_event", application: e },
        { "action.type": "mobile_app_install", application: e },
      ];
    }
    function h(e) {
      return [
        { "action.type": "app_install", application: e },
        { "action.type": "app_engagement", application: e },
      ];
    }
    function y(e) {
      return [{ "action.type": "app_engagement", application: e }];
    }
    function C(e) {
      return [{ "action.type": "product_level_reporting", product_set: [e] }];
    }
    function b(e, t) {
      if (!e) return null;
      var n = e;
      r("gkx")("12511") && (n = [].concat(e).reverse());
      for (var o = 0; o < n.length; o++) {
        if (n[o].application != null)
          return Array.isArray(n[o].application)
            ? n[o].application[0] + ""
            : n[o].application + "";
        var a = n[o]["action.type"],
          i =
            a != null &&
            (a.includes("mobile_app_install") ||
              a.includes("app_custom_event"));
        if (i && n[o].dataset_split != null) {
          var l = n[o].dataset_split;
          return String(Array.isArray(l) ? l[0] : l);
        }
      }
      return null;
    }
    function v(e) {
      if (!e) return null;
      for (var t = 0; t < e.length; t++)
        if (e[t].fb_pixel != null)
          return Array.isArray(e[t].fb_pixel)
            ? e[t].fb_pixel[0] + ""
            : e[t].fb_pixel + "";
      return null;
    }
    function S(e) {
      var t;
      return e
        ? (t = e.find(function (e) {
            var t;
            return (
              (e == null || (t = e.action_type) == null
                ? void 0
                : t.includes("product_level_reporting")) &&
              (e == null ? void 0 : e.product_set) != null
            );
          })) == null || (t = t.product_set) == null
          ? void 0
          : t.at(0)
        : null;
    }
    function R(e) {
      return e
        ? e
            .map(function (e) {
              return e == null ? void 0 : e.action_type;
            })
            .flat()
            .find(function (e) {
              return (
                e != null &&
                [
                  "offline_conversion",
                  "mobile_app_install",
                  "app_custom_event",
                  "offsite_conversion",
                  "offsite_engagement",
                ].includes(e)
              );
            }) != null
        : !1;
    }
    function L(t, n) {
      var o = d(n);
      return t.some(function (t) {
        var n = d(t);
        return (e || (e = r("areEqual")))(n, o);
      });
    }
    function E(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          L(t, e) || t.push(e);
        }),
        t
      );
    }
    function k(e) {
      return e.map(function (e) {
        return (s || (s = r("mapObject"))).untyped(e, function (e) {
          return Array.isArray(e) ? e : [e];
        });
      });
    }
    function I(e, t, n) {
      return e
        ? e.filter(function (e) {
            var r = d(e);
            if (!r) return n;
            for (var o in t) if (!r[o] || !r[o].includes(t[o])) return n;
            return !n;
          })
        : [];
    }
    function T(e, t) {
      if (!e) return [];
      var n = e.map(function (e, t) {
        return [e, t];
      });
      return n
        .filter(function (e) {
          return I([e[0]], t).length > 0;
        })
        .map(function (e) {
          return e[1];
        });
    }
    function D(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          return !e.application;
        });
    }
    function x(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          var t = e.dataset_split;
          if (t == null) return !0;
          var n = e["action.type"],
            r =
              n === "mobile_app_install" ||
              (Array.isArray(n) && n.includes("mobile_app_install")),
            o =
              n === "app_custom_event" ||
              (Array.isArray(n) && n.includes("app_custom_event"));
          return !r && !o;
        });
    }
    function $(e) {
      return I(e, { "action.type": "product_level_reporting" }, !0);
    }
    function P(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          var t = e["action.type"],
            n =
              t === "offline_conversion" ||
              (Array.isArray(t) && t.includes("offline_conversion"));
          return !n || e.dataset_split != null;
        });
    }
    function N(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          var t = e.dataset_split;
          if (t == null) return !0;
          var n = e["action.type"],
            r =
              n === "offline_conversion" ||
              (Array.isArray(n) && n.includes("offline_conversion"));
          return !r;
        });
    }
    function M(e) {
      return [
        { "action.type": "offsite_conversion", dataset_split: [].concat(e) },
      ];
    }
    function w(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          var t = e.dataset_split;
          if (t == null) return !0;
          var n = e["action.type"],
            r =
              n === "offsite_conversion" ||
              (Array.isArray(n) && n.includes("offsite_conversion"));
          return !r;
        });
    }
    function A(e) {
      return (e || [])
        .map(function (e) {
          return d(e);
        })
        .filter(Boolean)
        .filter(function (e) {
          if (e.fb_pixel == null) return !0;
          var t = e["action.type"],
            n =
              t === "offsite_conversion" ||
              (Array.isArray(t) && t.includes("offsite_conversion"));
          return !n;
        });
    }
    function F(e) {
      return T(e, { "action.type": "offsite_conversion" });
    }
    function O(e, t) {
      var n = I(e, { "action.type": "offsite_conversion" }, !0);
      return (
        t.forEach(function (e) {
          (r("vulture")("DKRG-hibFdhGO0n1_L5Rd3vWpp0="), n.push(U(e)));
        }),
        E(n)
      );
    }
    function B(e, t) {
      var n = I(e, { "action.type": "offsite_conversion" }, !0);
      return (n.push(V(t)), E(n));
    }
    function W(e, t, n) {
      var o = H(e || []);
      return (
        (o = I(o, { "action.type": n }, !0)),
        (u || (u = r("isEmpty")))(t) ||
          o.push(babelHelpers.extends({ "action.type": n }, t)),
        E(o)
      );
    }
    function q(e, t) {
      var n = H(e || []);
      return (
        (n = I(n, { "action.type": "offsite_conversion" }, !0)),
        (u || (u = r("isEmpty")))(t) ||
          n.push(
            babelHelpers.extends({ "action.type": "offsite_conversion" }, t),
          ),
        E(n)
      );
    }
    function U(e) {
      return { "action.type": ["offsite_conversion"], offsite_pixel: [e] };
    }
    function V(e) {
      return { "action.type": ["offsite_conversion"], fb_pixel: [e] };
    }
    function H(e) {
      return I(e, c, !0);
    }
    ((l.makeMobileAppInstallTrackingSpecs = m),
      (l.makeDatasetSplitMobileAppInstallTrackingSpecs = p),
      (l.makeDatasetSplitOfflineConversionTrackingSpecs = _),
      (l.getMobileAppTrackingSpecIndices = f),
      (l.makeMobileAppEngagementTrackingSpecs = g),
      (l.makeDesktopAppInstallTrackingSpecs = h),
      (l.makeDesktopAppEngagementTrackingSpecs = y),
      (l.buildProductSetTrackingSpecs = C),
      (l.getApplicationIDFromSpecs = b),
      (l.getPixelIDFromSpecs = v),
      (l.getProductTrackingProductSetIDFromSpecs = S),
      (l.ifOffsiteConversionPresentInTrackingSpec = R),
      (l.withoutDuplicates = E),
      (l.unifyValues = k),
      (l.filterByConstraint = I),
      (l.removeApplicationSpecs = D),
      (l.removeDatasetSplitSpecs = x),
      (l.removeProductSetSpecs = $),
      (l.removeOfflineConversionSpecs = P),
      (l.removeDatasetSplitOfflineSpecs = N),
      (l.makeDatasetSplitOffsiteConversionTrackingSpecs = M),
      (l.removeDatasetSplitOffsiteSpecs = w),
      (l.removeFbPixelOffsiteSpecs = A),
      (l.getPixelTrackingSpecIndices = F),
      (l.setPixelIDs = O),
      (l.setFacebookPixelID = B),
      (l.mergeConversionToTrackingSpec = W),
      (l.mergeOffsiteConversionToTrackingSpec = q),
      (l.customSpecs = H));
  },
  98,
);
