__d(
  "AdsCrepeAACEditorStructurePackageConfig",
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
            actionMenuConfig: [
              "duplicate",
              "clipboardPaste",
              "delete",
              "create",
              "createRule",
              "copyID",
              "createMultiple",
            ],
          },
          {
            mergedAdObjectLevels: [r("AdsObjectTypes").ADGROUP],
            actionMenuConfig: [
              "duplicate",
              "clipboardCopy",
              "delete",
              "createRule",
              "copyID",
            ],
          },
        ],
      },
      s = e;
    l.default = s;
  },
  98,
);
