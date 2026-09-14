__d(
  "AdsAdgroupVideoImageHashPrefiller",
  ["AdsAPIAdgroupPaths", "AdsVideoImageHashObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        {
          current:
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .IMAGE_HASH,
          original:
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .IMAGE_HASH,
        },
      ],
      s = [],
      u = {
        key: "videoImageHash",
        genPaths: function (n) {
          var t = n.original.adgroup.getIn(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .IMAGE_HASH,
            ),
            o = n.current.campaignGroup.objective,
            a = r("AdsVideoImageHashObjectives").has(o);
          return t != null && a ? e : s;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
