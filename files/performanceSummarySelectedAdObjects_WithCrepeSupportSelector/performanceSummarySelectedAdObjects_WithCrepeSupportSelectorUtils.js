__d(
  "performanceSummarySelectedAdObjects_WithCrepeSupportSelectorUtils",
  ["AdsPECrepeEditorStructureTypes", "adsPECrepeEditorStepsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      var l = o(
        "adsPECrepeEditorStepsSelector",
      ).getEditorAppearanceFromEditorSteps(a);
      return r === "PACKAGE_AD_CREATION" && l != null
        ? l ===
          o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED
          ? {
              selectedAdObjectLevels: ["campaign", "ad_set", "ad"],
              selectedCampaignGroupIds: e,
              selectedCampaignIds: t,
              selectedAdgroupIds: n,
              selectedIDsByLevel: new Map([
                ["campaign", e],
                ["ad_set", t],
                ["ad", n],
              ]),
            }
          : l ===
              o("AdsPECrepeEditorStructureTypes").EditorAppearance.UPPER_MERGED
            ? i === 0
              ? {
                  selectedAdObjectLevels: ["campaign", "ad_set"],
                  selectedIDsByLevel: new Map([
                    ["campaign", e],
                    ["ad_set", t],
                  ]),
                  selectedCampaignGroupIds: e,
                  selectedCampaignIds: t,
                }
              : {
                  selectedAdObjectLevels: ["ad"],
                  selectedAdgroupIds: n,
                  selectedIDsByLevel: new Map([["ad", n]]),
                }
            : l ===
                o("AdsPECrepeEditorStructureTypes").EditorAppearance
                  .LOWER_MERGED
              ? i === 0
                ? {
                    selectedAdObjectLevels: ["campaign"],
                    selectedCampaignGroupIds: e,
                    selectedIDsByLevel: new Map([["campaign", e]]),
                  }
                : {
                    selectedAdObjectLevels: ["ad_set", "ad"],
                    selectedCampaignIds: t,
                    selectedAdgroupIds: n,
                    selectedIDsByLevel: new Map([
                      ["ad_set", t],
                      ["ad", n],
                    ]),
                  }
              : l ===
                  o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED
                ? i === 0
                  ? {
                      selectedAdObjectLevels: ["campaign"],
                      selectedCampaignGroupIds: e,
                      selectedIDsByLevel: new Map([["campaign", e]]),
                    }
                  : i === 1
                    ? {
                        selectedAdObjectLevels: ["ad_set"],
                        selectedCampaignIds: t,
                        selectedIDsByLevel: new Map([["ad_set", t]]),
                      }
                    : {
                        selectedAdObjectLevels: ["ad"],
                        selectedAdgroupIds: n,
                        selectedIDsByLevel: new Map([["ad", n]]),
                      }
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        l,
                    );
                  })()
        : r === "L1"
          ? {
              selectedAdObjectLevels: ["ad"],
              selectedAdgroupIds: n,
              selectedIDsByLevel: new Map([["ad", n]]),
            }
          : r === "L2"
            ? {
                selectedAdObjectLevels: ["ad_set"],
                selectedCampaignIds: t,
                selectedIDsByLevel: new Map([["ad_set", t]]),
              }
            : r === "L3"
              ? {
                  selectedAdObjectLevels: ["campaign"],
                  selectedCampaignGroupIds: e,
                  selectedIDsByLevel: new Map([["campaign", e]]),
                }
              : {
                  selectedAdObjectLevels: ["campaign"],
                  selectedCampaignGroupIds: e,
                  selectedIDsByLevel: new Map([["campaign", e]]),
                };
    }
    l.performanceSummarySelectedAdObjects_WithCrepeSupport = e;
  },
  98,
);
