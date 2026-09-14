__d(
  "AdsCrepeASAEditorStructurePackageConfig",
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
              "clipboardCopy",
              "clipboardPaste",
              "delete",
              "create",
              "createRule",
              "copyID",
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
              "moreOptions",
            ],
          },
        ],
      },
      s = e;
    l.default = s;
  },
  98,
);
