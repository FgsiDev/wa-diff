__d(
  "adsUEditorAdgroupHasPollSpecSelector",
  [
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "adsUEditorSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignSelectors").eligibilityInformationSelector,
          r("adsUEditorSelectedAdgroupsSelector"),
        ],
        function (t, n) {
          return n.some(function (e) {
            return r("adsInteractivePollHasFbFeedVideoPollSpec")(e, t.spec);
          });
        },
        { name: i.id + ".adsUEditorAdgroupHasPollSpecSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
