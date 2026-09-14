__d(
  "adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
  [
    "adsAdgroupMessageTypeSelector",
    "adsCreateSelector",
    "adsUEditorAdgroupIsCTXBrandedContentEligibleSelectorUtils",
    "adsUEditorCampaignDestinationTypeSelector",
    "isWAMOStatusSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorCampaignDestinationTypeSelector")
            .adsUEditorCampaignDestinationTypeSelector,
          o("adsAdgroupMessageTypeSelector").adsAdgroupMessageTypeSelector,
          r("isWAMOStatusSelector"),
        ],
        function (t, n, r) {
          return o(
            "adsUEditorAdgroupIsCTXBrandedContentEligibleSelectorUtils",
          ).adsUEditorAdgroupIsCTXBrandedContentEligible(t, n, r);
        },
        {
          name: i.id + ".adsUEditorAdgroupIsCTXBrandedContentEligibleSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
