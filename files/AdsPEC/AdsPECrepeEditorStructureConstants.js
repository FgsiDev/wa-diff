__d(
  "AdsPECrepeEditorStructureConstants",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        editorLevels: [
          {
            mergedAdObjectLevels: [
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              r("AdsObjectTypes").CAMPAIGN,
              r("AdsObjectTypes").ADGROUP,
            ],
            actionMenuConfig: [
              "duplicate",
              "delete",
              "clipboardCopy",
              "clipboardPaste",
              "createRule",
            ],
          },
        ],
      };
    }
    l.getDefaultEditorStructure = e;
  },
  98,
);
