__d(
  "adsUEditorSAinDAPCAEventSourceEligibilitySelector",
  [
    "AdsSAInDAUtils",
    "adsCreateSelector",
    "adsUEditorCampaignAppsFromCatalogSelector",
    "adsUEditorCampaignPixelsFromCatalogSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCampaignPixelsFromCatalogSelector")],
        function (t) {
          return t.getValue();
        },
        { name: i.id + ".catalogPixelSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorCampaignAppsFromCatalogSelector")],
        function (t) {
          return t.getValue();
        },
        { name: i.id + ".catalogAppSelector" },
      ),
      u = r("adsCreateSelector")(
        [e, s],
        function (t, n) {
          return o("AdsSAInDAUtils").isEligibleForSAInDA(t, n);
        },
        { name: i.id + ".adsUEditorSAinDAPCAEventSourceEligibilitySelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
