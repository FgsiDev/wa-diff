__d(
  "AdsAdPreviewCachedScrapedTextUtils",
  ["isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, o, a) {
        o.cards.map(function (t, o) {
          var i = a[o],
            l = t.destinationLink;
          l != null &&
            (e || (e = r("isEmpty")))(t.headline) &&
            i != null &&
            n.set(l, i);
        });
      },
      u = function (n, o, a) {
        o.cards.map(function (t, o) {
          var i = a[o],
            l = t.destinationLink;
          l != null &&
            (e || (e = r("isEmpty")))(t.description) &&
            i != null &&
            n.set(l, i);
        });
      };
    ((l.storeScrapedHeadlines = s), (l.storeScrapedDescriptions = u));
  },
  98,
);
