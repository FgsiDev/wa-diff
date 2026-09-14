__d(
  "AdsCampaignSearchAppsReducerPlugin",
  ["AdsCampaignAppSelectorSearchableEntry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.searchApps.data.map(function (e) {
            return o(
              "AdsCampaignAppSelectorSearchableEntry",
            ).createSearchableEntry(e);
          });
          return t.setSingleValueOrError(n.key, e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
