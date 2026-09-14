__d(
  "AdsAdgroupCallToActionValuePrefiller",
  [
    "AdsAdgroupPrefillerUtils",
    "AdsUnifiedCreativeAPIFields",
    "CallToActionValueFields",
    "enumObjectKeys",
    "filterNulls",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set(["app_destination"]),
      s = r("enumObjectKeys")(r("CallToActionValueFields"))
        .map(function (e) {
          return r("CallToActionValueFields")[e];
        })
        .filter(function (t) {
          return !e.has(t);
        }),
      u = {
        key: "CTA_value",
        genPaths: function (t) {
          return r("filterNulls")(
            s.map(function (e) {
              return c(t, e);
            }),
          );
        },
      };
    function c(e, t) {
      var n = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
          e,
          r("AdsUnifiedCreativeAPIFields").callToActionValue,
          [t],
        ),
        a = n.current,
        i = n.original;
      if (!a || !i) return null;
      var l = o("AdsAdgroupPrefillerUtils").genAdgroupCreativePlugins(e),
        s = l.current.getSupportedCallToActiveValueFields();
      return e.original.adgroup.getIn(i) && s.has(t)
        ? { current: a, original: i }
        : null;
    }
    var d = u;
    l.default = d;
  },
  98,
);
