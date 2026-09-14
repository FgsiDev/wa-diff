__d(
  "AdsInsightsBuiltinColumnPresetConfig",
  [
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsInsightsBuiltinColumnPresetConfigFields",
    "AdsInsightsField",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2;
    function s() {
      return r("AdsAccountUtils").hasCapability(
        r("AdsAccountStore").getSelectedAccount().getValue(),
        "CAN_SEE_CAMPAIGN_LABELS_COLUMN",
      );
    }
    function u() {
      var t = [],
        n = r("AdsInsightsBuiltinColumnPresetConfigFields").peColumnPresets;
      return (
        Object.keys(n).forEach(function (o) {
          var a = o,
            i = n[a],
            l = {
              description: i.description,
              category: i.category,
              id: i.id,
              name: i.name,
              specializeColumnIDs: function () {
                var t = i.columns;
                return s() &&
                  t != null &&
                  !t.includes(r("AdsInsightsField").LABELS)
                  ? t.splice(e, 0, r("AdsInsightsField").LABELS)
                  : t;
              },
            };
          (a === "VIDEO_ENGAGEMENT"
            ? (l = babelHelpers.extends({}, l))
            : a === "TARGETING_AND_CREATIVE" &&
              (l = babelHelpers.extends(
                {
                  getIsVisible: function () {
                    return !0;
                  },
                },
                l,
              )),
            t.push(l));
        }),
        t
      );
    }
    var c = u();
    function d(e) {
      return c.filter(function (t) {
        var n = t.getIsVisible;
        return n && !n()
          ? !1
          : !t.requiredCapabilities ||
              t.requiredCapabilities.every(function (t) {
                return r("AdsAccountUtils").hasCapabilityFromList(e, t);
              });
      });
    }
    function m(e) {
      return d(e).map(function (e) {
        return e.id;
      });
    }
    function p(e, t) {
      return !!d(t).find(function (t) {
        return t.id === e;
      });
    }
    function _(e) {
      return c.find(function (t) {
        return t.id === e;
      });
    }
    ((l.build = d), (l.getIDs = m), (l.isBuiltin = p), (l.getPresetConfig = _));
  },
  98,
);
