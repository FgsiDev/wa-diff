__d(
  "AdsAdgroupViewTagsPrefiller",
  ["AdsAPIAdgroupPaths", "AdsViewTagsObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "viewTag",
        genPaths: function (t) {
          var e = t.original.adgroup.view_tags,
            n = t.current.campaignGroup.objective,
            o = r("AdsViewTagsObjectives").has(n);
          return e && o
            ? [
                {
                  current: r("AdsAPIAdgroupPaths").VIEW_TAGS,
                  original: r("AdsAPIAdgroupPaths").VIEW_TAGS,
                },
              ]
            : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
