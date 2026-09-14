__d(
  "AdsPixelServerUpdatePixelsDataReducerPlugins",
  ["AdsLoadState_LEGACY", "LoadObject", "SignalsOptimizationSourceContainer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.withMutations(function (n) {
        t.forEach(function (t) {
          var o,
            a,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f = t.id.toString(),
            g =
              (o = e.get(t.id).getValue()) != null
                ? o
                : new (r("SignalsOptimizationSourceContainer"))(f),
            h = {
              id: f,
              hasBAPIDomains:
                (a = (l = t.hasBAPIDomains) != null ? l : g.hasBAPIDomains) !=
                null
                  ? a
                  : !1,
              cluster:
                (s = t.cluster) != null ? s : g == null ? void 0 : g.cluster,
              isUnavailable: (u = t.isUnavailable) != null ? u : !1,
              name: (c = t.name) != null ? c : "",
              lastFiredTime:
                (d = t.lastFiredTime) != null
                  ? d
                  : g == null
                    ? void 0
                    : g.lastFiredTime,
              serverLastFiredTime:
                (m = t.serverLastFiredTime) != null
                  ? m
                  : g == null
                    ? void 0
                    : g.serverLastFiredTime,
              isEligibleForValueOptimization:
                (p =
                  (_ = t.isEligibleForValueOptimization) != null
                    ? _
                    : g.isEligibleForValueOptimization) != null
                  ? p
                  : !1,
            };
          if (
            ((t == null ? void 0 : t.adAccountOwnerID) != null &&
              (h = babelHelpers.extends({}, h, {
                ownerAdAccount: { accountID: t.adAccountOwnerID },
              })),
            (t == null ? void 0 : t.bizAccountOwnerID) != null)
          ) {
            var y;
            h = babelHelpers.extends({}, h, {
              ownerBusiness: {
                id: t.bizAccountOwnerID,
                name:
                  (y = t == null ? void 0 : t.bizAccountOwnerName) != null
                    ? y
                    : "",
              },
            });
          }
          n.set(
            f,
            r("LoadObject").withValue(
              new (r("SignalsOptimizationSourceContainer"))(f).fromPixelRawData(
                h,
              ),
              { creatorModuleID: i.id },
            ),
          );
        });
      });
    }
    var s = {
        reduce: function (n, o) {
          var t = babelHelpers.extends({}, n);
          return (
            (t.pixels = e(t.pixels, o.feedback.pixelList)),
            (t.pixelListLoadState = r("AdsLoadState_LEGACY").LOADED),
            (t.isPixelRefreshing = !1),
            t
          );
        },
      },
      u = {
        reduce: function (n, r) {
          var t = babelHelpers.extends({}, n);
          return ((t.pixels = e(t.pixels, [r.pixel])), t);
        },
      };
    ((l.AdsPixelServerReceivePixelsDataReducerPlugin = s),
      (l.AdsPixelServerPixelCreatedDataReducerPlugin = u));
  },
  98,
);
