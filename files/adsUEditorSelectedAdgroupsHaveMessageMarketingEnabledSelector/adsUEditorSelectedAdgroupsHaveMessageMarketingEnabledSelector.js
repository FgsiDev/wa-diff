__d(
  "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
  [
    "adsCreateSelector",
    "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupIDsSelector"),
          r("adsGetIsMessageMarketingEnabledFromAdgroupIDSelector"),
        ],
        function (t, n) {
          return o(
            "adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelectorUtils",
          ).adsUEditorSelectedAdgroupsHaveMessageMarketingEnableLogic(t, n);
        },
        {
          name:
            i.id +
            ".adsUEditorSelectedAdgroupsHaveMessageMarketingEnabledSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
