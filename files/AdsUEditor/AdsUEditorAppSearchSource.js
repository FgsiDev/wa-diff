__d(
  "AdsUEditorAppSearchSource",
  [
    "ix",
    "AbstractSearchSource",
    "AdsDestinationComparisonUtils",
    "AdsUEditorCampaignAppStrings",
    "AdsUEditorUtils",
    "SearchableEntry",
    "coerceImageishURL",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = r("coerceImageishURL")(s("511989"))) == null ? void 0 : e.uri,
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.$AdsUEditorAppSearchSource$p_1 = t),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.searchImpl = function (t, n, a) {
            var e = this,
              i = this.$AdsUEditorAppSearchSource$p_1
                .map(function (n, a) {
                  var i,
                    l = o(
                      "AdsDestinationComparisonUtils",
                    ).scoreDestinationAgainstSearch(n.name, n.id, t);
                  return l === 0
                    ? null
                    : new (r("SearchableEntry"))({
                        uniqueID: n.id,
                        title: n.name,
                        photo:
                          (i = n.picture) == null || (i = i.data) == null
                            ? void 0
                            : i.url,
                        subtitle: n.category,
                        order: -l,
                        auxiliaryData: e.$AdsUEditorAppSearchSource$p_1[a],
                      });
                })
                .filter(Boolean);
            (i.length === 0 &&
              o("AdsUEditorUtils").isMaybeFBID(t) &&
              i.push(
                new (r("SearchableEntry"))({
                  uniqueID: t,
                  title: t,
                  photo: u,
                  subtitle: o("AdsUEditorCampaignAppStrings").UNLISTED_APP,
                }),
              ),
              n(i, t));
          }),
          t
        );
      })(r("AbstractSearchSource"));
    l.default = c;
  },
  98,
);
