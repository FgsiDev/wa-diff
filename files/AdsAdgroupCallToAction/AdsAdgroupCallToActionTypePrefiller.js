__d(
  "AdsAdgroupCallToActionTypePrefiller",
  [
    "AdsAccountStore",
    "AdsAdgroupPrefillerUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsCallToActionGetTypesForAdgroup",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          var e;
          return {
            accountCapabilities:
              (e = t.getValue()) == null ? void 0 : e.capabilities,
          };
        },
        { name: i.id + ".selector" },
      ),
      s = {
        key: "cta_type",
        genExtraDataSelector: e,
        genPaths: function (t, n) {
          var e = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
              t,
              r("AdsUnifiedCreativeAPIFields").callToActionType,
            ),
            a = e.current,
            i = e.original;
          if (!a || !i) return [];
          var l =
              n && n.accountCapabilities != null ? n.accountCapabilities : [],
            s = r("adsCallToActionGetTypesForAdgroup")(t.current, l),
            u = t.original.adgroup.getIn(i);
          return s.find(function (e) {
            return e.name === u;
          })
            ? [{ current: a, original: i }]
            : [];
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
