__d(
  "adsMgmtIsCommonCampaignTableSectionSelector",
  ["adsCreateSelector", "adsPENavStateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsPENavStateSelector")],
      function (t) {
        return s(t);
      },
      { name: i.id },
    );
    function s(e) {
      return (
        e.tool === "MANAGE_ADS" &&
        (e.section === "L3" || e.section === "L2" || e.section === "L1")
      );
    }
    ((l.adsMgmtIsCommonCampaignTableSectionSelector = e),
      (l.adsMgmtIsCommonCampaignTableSectionLogic = s));
  },
  98,
);
