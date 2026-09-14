__d(
  "AdsCrepeASCOnsiteLeadEditorStructurePackageConfig",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        editorLevels: [
          {
            mergedAdObjectLevels: [
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              r("AdsObjectTypes").CAMPAIGN,
            ],
            actionMenuConfig: ["delete", "create", "createRule", "copyID"],
          },
          {
            mergedAdObjectLevels: [r("AdsObjectTypes").ADGROUP],
            actionMenuConfig: ["delete", "createRule", "copyID"],
          },
        ],
      },
      s = e;
    l.default = s;
  },
  98,
);
