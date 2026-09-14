__d(
  "AdsMessagesAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsMessengerAdgroupCreativePluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsMessengerAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "messages",
          pivots: { objective: r("AdsAPIObjectives").MESSAGES },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
