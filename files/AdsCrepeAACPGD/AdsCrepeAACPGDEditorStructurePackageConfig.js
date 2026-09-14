__d(
  "AdsCrepeAACPGDEditorStructurePackageConfig",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        editorLevels: [
          {
            mergedAdObjectLevels: [r("AdsObjectTypes").CAMPAIGN_GROUP],
            actionMenuConfig: [
              "duplicate",
              "clipboardCopy",
              "clipboardPaste",
              "delete",
              "create",
              "createRule",
              "copyID",
            ],
          },
          {
            mergedAdObjectLevels: [r("AdsObjectTypes").CAMPAIGN],
            actionMenuConfig: [
              "duplicate",
              "clipboardCopy",
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
              "clipboardPaste",
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
